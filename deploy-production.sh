#!/bin/bash
set -euo pipefail

echo "🚀 Starting deployment for pukalani.studio..."

# nvm laden und Node 22 LTS nutzen (stabil für Nuxt/Vite)
. "$HOME/.nvm/nvm.sh"
nvm use 22
export PATH="$NVM_BIN:$PATH"

echo "📌 Node Version: $(node -v)"
echo "📌 NPM Version: $(npm -v)"

# Navigation zum Projektverzeichnis
cd "${SITE_DIRECTORY:-/path/to/project}"

echo "🔄 Pulling latest changes..."
git reset --hard
git pull --rebase origin "${BRANCH:-main}"

# Telemetrie deaktivieren
export NUXT_TELEMETRY_DISABLED=1

echo "📦 Installing dependencies..."
npm ci

# 1) Konkurrierende PM2-Prozesse stoppen
echo "🛑 Stopping existing PM2 process..."
pm2 delete pukalanistudio || true

# 2) Caches säubern
echo "🧹 Cleaning caches..."
rm -rf .nuxt .output node_modules/.cache

# 3) Build mit stabilem Cache-Pfad
echo "🏗️  Building production bundle..."
export NUXT_CACHE_DIR=".nuxt/cache"
npm run build

# Build-Validierung
if [ ! -f ".output/server/index.mjs" ]; then
    echo "❌ Build failed: .output/server/index.mjs not found"
    exit 1
fi

# Build-Info anzeigen
echo ""
echo "✅ Build completed successfully!"
echo "📊 Build Statistics:"
echo "   - Output size: $(du -sh .output 2>/dev/null | cut -f1 || echo 'N/A')"
echo "   - CSS files: $(find .output/public/_nuxt -name '*.css' 2>/dev/null | wc -l | tr -d ' ' || echo '0')"
echo "   - JS files: $(find .output/public/_nuxt -name '*.js' 2>/dev/null | wc -l | tr -d ' ' || echo '0')"
echo ""

# 4) PM2 starten/neu laden
echo "🔄 Starting/reloading PM2 application..."
pm2 startOrReload ecosystem.config.cjs --update-env

# 5) PM2-Konfiguration speichern
pm2 save

# 6) Status anzeigen
echo ""
echo "📊 PM2 Status:"
pm2 list

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Site should be available at: https://pukalani.studio"
echo ""
echo "📝 Next steps:"
echo "   - Check PM2 logs: pm2 logs pukalanistudio"
echo "   - Monitor status: pm2 monit"
echo "   - View site: https://pukalani.studio/best"

