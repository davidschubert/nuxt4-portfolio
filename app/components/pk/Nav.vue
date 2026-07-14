<template>
    <nav
        aria-label="Hauptnavigation"
        class="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
    >
        <div
            class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8"
        >
            <NuxtLink
                to="/"
                class="flex items-center gap-2 font-bold tracking-tight text-gray-900 dark:text-white"
            >
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500"
                    aria-hidden="true"
                ></span>
                Pukalani&nbsp;Studio
            </NuxtLink>

            <ul class="hidden items-center gap-6 text-sm font-medium md:flex">
                <li v-for="link in links" :key="link.href">
                    <NuxtLink
                        :to="link.href"
                        class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                        >{{ link.label }}</NuxtLink
                    >
                </li>
            </ul>

            <a
                href="https://cal.com/davidschubert/30min"
                target="_blank"
                rel="noopener nofollow"
                class="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
                Erstgespräch buchen
            </a>
        </div>
    </nav>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        links?: { label: string; href: string }[];
    }>(),
    {
        links: () => [
            { label: "Leistungen", href: "/#leistungen" },
            { label: "UX-Audit", href: "/ux-audit" },
            { label: "Referenzen", href: "/#referenzen" },
            { label: "Wissen", href: "/#wissen" },
            { label: "FAQ", href: "/#faq" },
        ],
    }
);
</script>
