import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/image"],
    css: ["~/assets/css/main.css"],
    experimental: {
        inlineSSRStyles: true,
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "de",
            },
            meta: [
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
                        "require-trusted-types-for 'script'; trusted-types default;",
                },
            ],
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
