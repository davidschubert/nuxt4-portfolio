import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    // Production-Optimierungen
    corePlugins: {
        // Deaktiviere nicht genutzte Features für kleineres CSS
        preflight: true,
    },
} satisfies Config;
