# syntax=docker/dockerfile:1.8

# ──────────────────────────────────────────────────────────────────────────────
#  KameeTech Landing · Dockerfile Next 16 Standalone (Portainer-ready)
#  Multi-stage: Builder (2GB) → Runtime (~80MB final)
#  Build:  docker build -t kameetech-landing .
#  Run:    docker run -d --name kameetech -p 3000:3000 kameetech-landing
# ──────────────────────────────────────────────────────────────────────────────

ARG NODE_VERSION=20.17.0-alpine

# ── 1/3 DEPS (cache layer) ───────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat python3 make g++
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund --ignore-scripts || npm install --no-audit --no-fund --ignore-scripts

# ── 2/3 BUILDER (next build → gera .next/standalone) ─────────────────────────
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── 3/3 RUNTIME (copia só standalone + static + public) ──────────────────────
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    NEXT_TELEMETRY_DISABLED=1 \
    TZ=America/Sao_Paulo

RUN apk add --no-cache tzdata curl \
 && addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs \
 && mkdir -p /app/.next /app/public \
 && chown -R nextjs:nodejs /app

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static   ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public           ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -fsS http://127.0.0.1:3000/ >/dev/null || exit 1

CMD ["node", "server.js"]
