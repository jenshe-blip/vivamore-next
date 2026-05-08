import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { EMAIL_RE } from "@/lib/validate"

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.delete(ip)
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

function sanitize(val: unknown, maxLen: number): string {
  if (typeof val !== "string") return ""
  return val.trim().slice(0, maxLen).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
}

const PHONE_RE = /^[+\d\s\-().]*$/

const ALLOWED_SUBJECTS = new Set(["", "Reservation Inquiry", "Event Planning", "Feedback", "Other"])
const ALLOWED_EVENT_TYPES = new Set(["wedding", "engagement", "corporate", "annual-dinner", "birthday", "anniversary", "other"])
const ALLOWED_GUEST_COUNTS = new Set(["20-50", "50-100", "100-200", "200-300", "300+"])
const ALLOWED_BUDGETS = new Set(["", "below-10k", "10k-30k", "30k-50k", "50k-100k", "above-100k"])

const EVENT_TYPE_LABELS: Record<string, string> = {
  wedding: "Wedding Reception",
  engagement: "Engagement Ceremony",
  corporate: "Corporate Event",
  "annual-dinner": "Annual Dinner",
  birthday: "Birthday Party",
  anniversary: "Anniversary",
  other: "Other",
}

const GUEST_COUNT_LABELS: Record<string, string> = {
  "20-50": "20 - 50 guests",
  "50-100": "50 - 100 guests",
  "100-200": "100 - 200 guests",
  "200-300": "200 - 300 guests",
  "300+": "300+ guests",
}

const BUDGET_LABELS: Record<string, string> = {
  "": "Not specified",
  "below-10k": "Below RM 10,000",
  "10k-30k": "RM 10,000 - RM 30,000",
  "30k-50k": "RM 30,000 - RM 50,000",
  "50k-100k": "RM 50,000 - RM 100,000",
  "above-100k": "Above RM 100,000",
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

type Fields = Record<string, string>

function validateCommon(f: Fields): string | null {
  if (!f.name || f.name.length < 2) return "Name must be at least 2 characters"
  if (f.name.length > 100) return "Name is too long"
  if (!f.email) return "Email is required"
  if (!EMAIL_RE.test(f.email) || f.email.length > 254) return "Invalid email address"
  return null
}

function validateContact(f: Fields): string | null {
  const common = validateCommon(f)
  if (common) return common
  if (f.phone && !PHONE_RE.test(f.phone)) return "Invalid phone number"
  if (!ALLOWED_SUBJECTS.has(f.subject)) return "Invalid subject selection"
  if (!f.message || f.message.length < 10) return "Message must be at least 10 characters"
  if (f.message.length > 2000) return "Message is too long (max 2000 characters)"
  return null
}

function validateEvent(f: Fields): string | null {
  const common = validateCommon(f)
  if (common) return common
  if (!f.phone) return "Phone number is required"
  if (!PHONE_RE.test(f.phone)) return "Invalid phone number"
  if (!f.eventType || !ALLOWED_EVENT_TYPES.has(f.eventType)) return "Please select a valid event type"
  if (!f.eventDate) return "Preferred date is required"
  const today = new Date().toISOString().split("T")[0]
  if (!/^\d{4}-\d{2}-\d{2}$/.test(f.eventDate) || f.eventDate < today) return "Please select a valid future date"
  if (!f.guestCount || !ALLOWED_GUEST_COUNTS.has(f.guestCount)) return "Please select expected guest count"
  if (!ALLOWED_BUDGETS.has(f.budget)) return "Invalid budget selection"
  if (f.message && f.message.length > 2000) return "Additional details are too long (max 2000 characters)"
  return null
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { formType, ...raw } = body

    const fields: Fields = {
      name: sanitize(raw.name, 100),
      email: sanitize(raw.email, 254),
      phone: sanitize(raw.phone, 20),
      subject: sanitize(raw.subject, 100),
      message: sanitize(raw.message, 2000),
      eventType: sanitize(raw.eventType, 50),
      eventDate: sanitize(raw.eventDate, 20),
      guestCount: sanitize(raw.guestCount, 20),
      budget: sanitize(raw.budget, 20),
    }

    let validationError: string | null = null
    if (formType === "contact") {
      validationError = validateContact(fields)
    } else if (formType === "plan-event") {
      validationError = validateEvent(fields)
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 })
    }

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 422 })
    }

    const e = {
      ...Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, escapeHtml(v)])),
      eventTypeLabel: escapeHtml(EVENT_TYPE_LABELS[fields.eventType] ?? fields.eventType),
      guestCountLabel: escapeHtml(GUEST_COUNT_LABELS[fields.guestCount] ?? fields.guestCount),
      budgetLabel: escapeHtml(BUDGET_LABELS[fields.budget] ?? "Not specified"),
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || ""

    let subject = ""
    let htmlBody = ""

    if (formType === "contact") {
      subject = `[Vivamore] New Contact Inquiry – ${fields.subject || "General"}`
      htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #6b1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">New Contact Inquiry</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px; font-size: 14px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.subject || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${e.message || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Sent from the Vivamore Contact Form</p>
          </div>
        </div>
      `
    } else {
      subject = `[Vivamore] New Event Inquiry – ${EVENT_TYPE_LABELS[fields.eventType] ?? fields.eventType} on ${fields.eventDate || "TBD"}`
      htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #6b1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">New Event Inquiry</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 160px; font-size: 14px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Event Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.eventTypeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Preferred Date</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.eventDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Expected Guests</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.guestCountLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Budget Range</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${e.budgetLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Additional Details</td>
                <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${e.message || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Sent from the Vivamore Plan Your Event Form</p>
          </div>
        </div>
      `
    }

    await transporter.sendMail({
      from: `"Vivamore Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: fields.email,
      subject,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error("Email send error:", message, err)
    return NextResponse.json({ error: "Failed to send email", detail: message }, { status: 500 })
  }
}
