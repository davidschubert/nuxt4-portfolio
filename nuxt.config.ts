import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/image", "nuxt-site-config", "@nuxtjs/sitemap"],
    css: ["~/assets/css/main.css"],
    image: {
        formats: ["avif", "webp", "jpg"],
        quality: 75,
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
        densities: [1, 2],
    },
    site: {
        url: "https://pukalani.studio",
        name: "My Awesome Website",
    },
    features: {
        inlineStyles: true,
    },
    nitro: {
        preset: "node-server", // Optimiert für VPS/Dedicated Server
        prerender: {
            crawlLinks: true,
            routes: ["/", "/chatgpt", "/claude"],
        },
        compressPublicAssets: true,
        // Performance: Statische Assets werden von Nginx ausgeliefert
        publicAssets: [
            {
                baseURL: "images",
                dir: "public/images",
                maxAge: 31536000, // 1 Jahr
            },
        ],
    },
    routeRules: {
        // Prerendered Seiten mit kurzer Revalidierung
        "/": {
            prerender: true,
            headers: {
                "cache-control": "public, max-age=3600, must-revalidate",
            },
        },
        "/chatgpt": {
            prerender: true,
            headers: {
                "cache-control": "public, max-age=3600, must-revalidate",
            },
        },
        "/claude": {
            prerender: true,
            headers: {
                "cache-control": "public, max-age=3600, must-revalidate",
            },
        },
        // Optimierte Bilder - lange Cache-Zeit
        "/_ipx/**": {
            headers: {
                "cache-control": "public, max-age=31536000, immutable",
            },
        },
        "/images/**": {
            headers: {
                "cache-control": "public, max-age=31536000, immutable",
            },
        },
        // Global Security Headers
        "/**": {
            headers: {
                "Strict-Transport-Security":
                    "max-age=31536000; includeSubDomains; preload",
                "X-Frame-Options": "DENY",
                "X-Content-Type-Options": "nosniff",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "Permissions-Policy":
                    "geolocation=(), microphone=(), camera=(), fullscreen=(self)",
            },
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "de",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/icon.svg",
                },
                {
                    rel: "apple-touch-icon",
                    href: "/apple-touch-icon.svg",
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest",
                },
            ],
            meta: [
                {
                    name: "theme-color",
                    content: "#10b981",
                },
                {
                    name: "mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                },
            ],
        },
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssCodeSplit: true, // CSS-Code-Splitting aktiviert
            minify: "esbuild",
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ["vue", "vue-router"],
                    },
                    // Kleinere Chunk-Größen für besseres Caching
                    chunkFileNames: "_nuxt/[name]-[hash].js",
                    entryFileNames: "_nuxt/[name]-[hash].js",
                    assetFileNames: "_nuxt/[name]-[hash].[ext]",
                },
            },
        },
        optimizeDeps: {
            include: ["vue", "vue-router"],
        },
        // Reduce forced reflows by optimizing CSS handling
        css: {
            devSourcemap: false,
        },
    },
    experimental: {
        // Enable optimizations
        payloadExtraction: true,
        renderJsonPayloads: true,
        viewTransition: false, // Disable to prevent reflow issues
    },
    router: {
        options: {
            strict: true,
        },
    },
});
