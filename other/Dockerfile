# 📦 This file is moved to the root directory before building the image

# 🧱 Base Bun image (Linux-compatible)
FROM oven/bun:1 AS base

# 🌍 Set production environment variables
ENV NODE_ENV=production
ENV PORT="8080"

# 🔍 Sentry environment configuration
ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA

# 🔐 1Password CLI token and environment
ARG OP_SERVICE_ACCOUNT_TOKEN
ENV OP_SERVICE_ACCOUNT_TOKEN=$OP_SERVICE_ACCOUNT_TOKEN

# 🔑 API Key de Resend
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# 🧰 Install required system packages for 1Password CLI
RUN apt-get update && apt-get install -y curl unzip jq && apt-get clean

# 📥 Copy OP CLI binary from official image
COPY --from=1password/op:2 /usr/local/bin/op /usr/local/bin/op

# 📦 Dependency stage – installs all modules
FROM base AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 📦 Production-only dependencies stage
FROM base AS production-deps
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY package.json bun.lock ./
RUN bun install --production

# 🏗️ Build stage – compile and prepare the app
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .

# 🧬 Generate type definitions for react-router (optional)
RUN bun run typegen

# ⚠️ Inject Sentry token as environment variable and run production build
ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
RUN bun run build

# 🧼 Final production image – minimal and ready to run
FROM base
WORKDIR /app

# 🚚 Copy dependencies
COPY --from=production-deps /app/node_modules /app/node_modules

# 🚚 Copy build artifacts and required files
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/app/components/ui/icons /app/app/components/ui/icons

COPY . .

# 🚀 Start the Bun server
CMD ["bun", "run", "start"]
