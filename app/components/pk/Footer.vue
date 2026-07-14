<template>
    <footer id="footer" role="contentinfo" class="bg-gray-950 text-gray-300">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
            <div class="grid gap-10 md:grid-cols-4">
                <div>
                    <p class="font-bold text-white">Pukalani Studio</p>
                    <p class="mt-3 text-sm leading-relaxed text-gray-400">
                        David Schubert – Senior UI/UX Designer &amp; Creative
                        Technologist. Designkonzepte, Brand Design, Websites
                        und Content-Produktion – remote für Mittelstand und
                        Agenturen in der DACH-Region.
                    </p>
                    <p
                        class="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-300"
                    >
                        <span
                            class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                            aria-hidden="true"
                        ></span>
                        Verfügbar für neue Projekte
                    </p>
                    <ul class="mt-4 flex gap-4" aria-label="Profile">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/davidschubert-uiux/"
                                target="_blank"
                                rel="noopener me"
                                class="text-sm underline-offset-4 hover:text-white hover:underline"
                                >LinkedIn</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://github.com/davidschubert"
                                target="_blank"
                                rel="noopener me"
                                class="text-sm underline-offset-4 hover:text-white hover:underline"
                                >GitHub</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/davidschubert/"
                                target="_blank"
                                rel="noopener me"
                                class="text-sm underline-offset-4 hover:text-white hover:underline"
                                >Instagram</a
                            >
                        </li>
                    </ul>
                </div>

                <nav aria-label="Footer: Leistungen">
                    <p
                        class="text-sm font-semibold uppercase tracking-wider text-gray-500"
                    >
                        Leistungen
                    </p>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li>
                            <NuxtLink
                                to="/fable#brand-design"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Designkonzept &amp; Brand Design</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/ux-audit"
                                class="hover:text-white hover:underline underline-offset-4"
                                >UX-Audit (Festpreis-Pakete)</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/fable#corporate-website"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Website-Design &amp; Umsetzung</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/fable#saas-design"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Produkt- &amp; App-Design</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/fable#content-produktion"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Content: Foto, Video &amp; Werbemittel</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/nuxt-entwickler-freelancer"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Web-Entwicklung (für Agenturen)</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>

                <nav aria-label="Footer: Wissen">
                    <p
                        class="text-sm font-semibold uppercase tracking-wider text-gray-500"
                    >
                        Wissen
                    </p>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li>
                            <NuxtLink
                                to="/wissen/was-kostet-ux-design"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Was kostet UX/UI Design?</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/wissen/freelancer-oder-agentur"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Freelancer oder Agentur?</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/fable#faq"
                                class="hover:text-white hover:underline underline-offset-4"
                                >FAQ</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/en"
                                class="hover:text-white hover:underline underline-offset-4"
                                >English version</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>

                <address class="not-italic" aria-label="Kontaktdaten">
                    <p
                        class="text-sm font-semibold uppercase tracking-wider text-gray-500"
                    >
                        Kontakt
                    </p>
                    <ul class="mt-3 space-y-2 text-sm">
                        <li>
                            <a
                                :href="`mailto:${email}`"
                                class="hover:text-white hover:underline underline-offset-4"
                                >{{ email }}</a
                            >
                        </li>
                        <li>
                            <a
                                href="tel:+18088660676"
                                class="hover:text-white hover:underline underline-offset-4"
                                >+1 808 866 0676</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://cal.com/davidschubert/30min"
                                target="_blank"
                                rel="noopener nofollow"
                                class="hover:text-white hover:underline underline-offset-4"
                                >Erstgespräch buchen (cal.com)</a
                            >
                        </li>
                        <li class="text-gray-500">
                            Pukalani, Maui · Hawaii (USA) · Remote für DACH
                        </li>
                    </ul>
                </address>
            </div>

            <div
                class="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center"
            >
                <p>
                    © 2026 David Schubert · Pukalani Studio. Alle Rechte
                    vorbehalten.
                </p>
                <p>
                    <a
                        href="https://pukalani.studio/imprint.pdf"
                        target="_blank"
                        rel="noopener"
                        class="hover:text-white hover:underline underline-offset-4"
                        >Impressum (PDF)</a
                    >
                    · Zuletzt aktualisiert: {{ lastUpdated }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        lastUpdated?: string;
    }>(),
    { lastUpdated: "14. Juli 2026" }
);

const email = atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==");
</script>
