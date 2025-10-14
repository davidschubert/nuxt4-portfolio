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
        prerender: {
            crawlLinks: true,
            routes: ["/", "/chatgpt", "/claude"],
        },
        compressPublicAssets: true,
    },
    routeRules: {
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
        "/**": {
            headers: {
                "Strict-Transport-Security":
                    "max-age=31536000; includeSubDomains; preload",
                "X-Frame-Options": "DENY",
                "X-Content-Type-Options": "nosniff",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "Permissions-Policy":
                    "geolocation=(), microphone=(), camera=(), fullscreen=(self)",
                // Grundlegende CSP für statische Seiten (wird bei SSR durch Server-Plugin überschrieben)
                "Content-Security-Policy":
                    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; manifest-src 'self'; worker-src 'self' blob:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; trusted-types default vue-html nuxt-app dompurify; require-trusted-types-for 'script'; upgrade-insecure-requests",
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
            cssCodeSplit: true,
            minify: "esbuild",
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ["vue", "vue-router"],
                    },
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
