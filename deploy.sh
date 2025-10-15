#!/bin/bash
set -e

echo "🚀 Starting deployment to pukalani.studio..."

# 1. Build erstellen
echo "📦 Building production bundle..."
npm run build

# 2. Build-Info anzeigen
echo ""
echo "✅ Build completed!"
echo "📊 Build Statistics:"
echo "   - Output size: $(du -sh .output | cut -f1)"
echo "   - CSS files: $(ls -1 .output/public/_nuxt/*.css 2>/dev/null | wc -l | tr -d ' ')"
echo "   - JS files: $(ls -1 .output/public/_nuxt/*.js 2>/dev/null | wc -l | tr -d ' ')"
echo ""

# 3. Deployment-Optionen
echo "📤 Ready to deploy!"
echo ""
echo "Choose deployment method:"
echo "  1) PM2 Deploy (automatic)"
echo "  2) Manual Upload Instructions"
echo "  3) Local Test (PORT 3001)"
echo ""
read -p "Enter choice [1-3]: " choice

case $choice in
    1)
        echo "🔄 Deploying with PM2..."
        pm2 deploy production update
        echo "✅ Deployment complete!"
        ;;
    2)
        echo ""
        echo "📋 Manual Deployment Instructions:"
        echo ""
        echo "1. Upload .output folder to server:"
        echo "   scp -r .output user@pukalani.studio:/path/to/project/"
        echo ""
        echo "2. SSH to server and restart:"
        echo "   ssh user@pukalani.studio"
        echo "   cd /path/to/project"
        echo "   pm2 restart nuxt4-portfolio"
        echo ""
        ;;
    3)
        echo "🧪 Starting local test server on PORT 3001..."
        PORT=3001 node .output/server/index.mjs
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

