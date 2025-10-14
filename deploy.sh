#!/bin/bash
set -euo pipefail

echo "🚀 Starting deployment..."

# nvm laden und Node 22 LTS nutzen (stabil für Nuxt/Vite)
. "$HOME/.nvm/nvm.sh"
nvm use 22
export PATH="$NVM_BIN:$PATH"

echo "📦 Node version: $(node -v)"
echo "📦 NPM version: $(npm -v)"

cd {SITE_DIRECTORY}
git reset --hard
git pull --rebase origin {BRANCH}

export NUXT_TELEMETRY_DISABLED=1

echo "📥 Installing dependencies..."
npm ci

# 1) konkurrierende Starts stoppen
echo "🛑 Stopping old PM2 processes..."
pm2 delete nuxt4-portfolio || true

# 2) Caches säubern
echo "🧹 Cleaning caches..."
rm -rf .nuxt .output node_modules/.cache

# 3) Build mit stabilem Cache-Pfad
echo "🏗️  Building application..."
export NUXT_CACHE_DIR=".nuxt/cache"
npm run build

# 4) Verify build output
if [ ! -f .output/server/index.mjs ]; then
    echo "❌ Build failed: .output/server/index.mjs not found"
    exit 1
fi

if [ ! -f .output/public/favicon.ico ]; then
    echo "⚠️  Warning: favicon.ico not found in build output"
fi

echo "📊 Build output size:"
du -sh .output/

# 5) korrekt starten (nur Ecosystem, kein `pm2 start npm -- start`)
echo "▶️  Starting application with PM2..."
pm2 startOrReload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs
pm2 save

echo ""
echo "✅ Deployment successful!"
echo "🌐 Application running at: https://pukalani.studio"
echo ""
echo "📋 PM2 Status:"
pm2 status

echo ""
echo "🔍 Quick health check:"
sleep 3
curl -s -o /dev/null -w "Status: %{http_code}\n" http://127.0.0.1:3000/ || echo "⚠️  Health check failed"

