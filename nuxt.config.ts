import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/image", "@nuxtjs/sitemap"],
    css: ["~/assets/css/main.css"],
    site: {
        url: "https://pukalani.studio",
    },
    experimental: {
        inlineSSRStyles: true,
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ["/", "/chatgpt", "/claude"],
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
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                },
                {
                    "http-equiv": "Content-Security-Policy",
                    content:
                        "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
                },
                {
                    "http-equiv": "Strict-Transport-Security",
                    content: "max-age=31536000; includeSubDomains; preload",
                },
                {
                    "http-equiv": "Cross-Origin-Opener-Policy",
                    content: "same-origin",
                },
                {
                    "http-equiv": "Cross-Origin-Embedder-Policy",
                    content: "require-corp",
                },
                {
                    "http-equiv": "Cross-Origin-Resource-Policy",
                    content: "same-origin",
                },
                {
                    "http-equiv": "Permissions-Policy",
                    content:
                        "geolocation=(), microphone=(), camera=(), fullscreen=(self)",
                },
                {
                    "http-equiv": "Content-Security-Policy",
                    content:
                        "require-trusted-types-for 'script'; trusted-types default vue;",
                },
            ],
        },
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssCodeSplit: true,
        },
    },
    router: {
        options: {
            strict: true,
        },
    },
});
