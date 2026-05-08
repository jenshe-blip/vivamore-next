# ─── Stage 1: Dependencies ────────────────────────────────────────────────────
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy lockfile & manifest first (layer-cache friendly)
COPY package.json pnpm-lock.yaml ./

# Install production + dev deps (needed for build)
RUN pnpm install --frozen-lockfile

# ─── Stage 2: Builder ─────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Bring in node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# ─── Stage 3: Runner (production image) ───────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy only what Next.js needs to run
COPY --from=builder /app/public      ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static  ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
