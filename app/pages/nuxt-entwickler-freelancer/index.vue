<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <PkNav />

        <main id="main-content" role="main" tabindex="-1">
            <!-- HERO -->
            <header aria-labelledby="nuxt-title">
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
                    <nav aria-label="Brotkrumen" class="text-sm text-gray-500 dark:text-gray-400">
                        <ol class="flex flex-wrap items-center gap-2">
                            <li>
                                <NuxtLink to="/fable" class="hover:text-emerald-600 hover:underline underline-offset-4">Start</NuxtLink>
                            </li>
                            <li aria-hidden="true">→</li>
                            <li aria-current="page">Nuxt Entwickler Freelancer</li>
                        </ol>
                    </nav>

                    <h1
                        class="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
                    >
                        Nuxt Entwickler Freelancer:
                        <span
                            class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400"
                            >Nuxt&nbsp;4, Vue&nbsp;3 &amp; TypeScript</span
                        >
                    </h1>

                    <p
                        id="nuxt-answer"
                        class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        David Schubert ist Freelance Nuxt-Entwickler und Senior
                        UI/UX Designer mit über 25 Jahren Web-Erfahrung. Er
                        entwickelt SaaS-Frontends, Corporate Websites und
                        Landingpages mit Nuxt&nbsp;4, Vue&nbsp;3, TypeScript und
                        Tailwind CSS&nbsp;4 – remote für Teams in Deutschland,
                        Österreich und der Schweiz, zu festen Projektpreisen.
                        Die Besonderheit: Design und Entwicklung kommen aus
                        einer Hand.
                    </p>

                    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                        <li
                            v-for="tech in heroStack"
                            :key="tech"
                            class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        >
                            {{ tech }}
                        </li>
                    </ul>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://cal.com/davidschubert/30min"
                            target="_blank"
                            rel="noopener nofollow"
                            class="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Kostenloses Erstgespräch (30 Min) →
                        </a>
                        <a
                            href="#leistungen"
                            class="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-emerald-400"
                        >
                            Leistungen ansehen
                        </a>
                    </div>

                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Stand: {{ lastUpdatedHuman }} · Diese Website ist selbst
                        mit Nuxt&nbsp;4 gebaut – Server-Side-Rendering,
                        PageSpeed-optimiert.
                    </p>

                    <p
                        class="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200"
                    >
                        Diese Seite richtet sich an Digitalagenturen und
                        Entwicklungsteams. Sie suchen Design, Konzept oder
                        einen kompletten Webauftritt in verständlicher Sprache?
                        <NuxtLink
                            to="/fable"
                            class="font-semibold underline underline-offset-2"
                            >Hier geht es zum Design-Portfolio</NuxtLink
                        >.
                    </p>
                </div>
            </header>

            <!-- WARUM NUXT -->
            <section
                aria-labelledby="warum-nuxt-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="warum-nuxt-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Warum Nuxt für Ihr Projekt?
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Nuxt ist das führende Full-Stack-Framework für Vue:
                        Server-Side-Rendering für SEO und schnelle Ladezeiten,
                        automatisches Code-Splitting, eine ausgereifte
                        Modul-Landschaft und TypeScript-Support ab Werk. Für
                        Marketing-Websites bedeutet das bessere Rankings, für
                        Web-Apps kürzere Entwicklungszeit.
                    </p>

                    <div class="mt-8 grid gap-6 md:grid-cols-3">
                        <div
                            v-for="benefit in nuxtBenefits"
                            :key="benefit.title"
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-950"
                        >
                            <h3 class="font-semibold">{{ benefit.title }}</h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                {{ benefit.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- LEISTUNGEN -->
            <section
                id="leistungen"
                aria-labelledby="nuxt-leistungen-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="nuxt-leistungen-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Nuxt-Entwicklung: Leistungen
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Von der Landingpage bis zur Web-App mit Backend: Ich
                        klassifiziere jedes Projekt als Erlebnis-Website,
                        App oder Hybrid – daraus ergibt sich der passende
                        technische Zuschnitt.
                    </p>

                    <div class="mt-8 space-y-5">
                        <article
                            v-for="service in services"
                            :key="service.title"
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <div class="flex flex-wrap items-baseline justify-between gap-2">
                                <h3 class="text-lg font-semibold">
                                    {{ service.title }}
                                </h3>
                                <p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                                    {{ service.price }}
                                </p>
                            </div>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                {{ service.description }}
                            </p>
                            <ul class="mt-3 flex flex-wrap gap-2">
                                <li
                                    v-for="tag in service.tags"
                                    :key="tag"
                                    class="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                >
                                    {{ tag }}
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <!-- STACK IM DETAIL -->
            <section
                aria-labelledby="stack-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="stack-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Mein Nuxt-Stack im Detail
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Ein bewusst schlanker, moderner Stack – konsequent
                        TypeScript, Composition API und CSS-first. Keine
                        Legacy-Patterns, keine Options API.
                    </p>

                    <dl class="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div v-for="item in stackDetail" :key="item.label">
                            <dt class="font-semibold">{{ item.label }}</dt>
                            <dd class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                {{ item.value }}
                            </dd>
                        </div>
                    </dl>

                    <p class="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200">
                        <strong class="font-semibold">Design + Code:</strong>
                        Als Senior UI/UX Designer entwerfe ich die Interfaces,
                        die ich entwickle – Sie brauchen keine Übergabe zwischen
                        Designer und Entwickler. Das spart Abstimmung, Zeit und
                        Budget.
                    </p>
                </div>
            </section>

            <!-- FAQ -->
            <section
                id="faq"
                aria-labelledby="nuxt-faq-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="nuxt-faq-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Häufige Fragen zur Nuxt-Entwicklung
                    </h2>
                    <div class="mt-8 space-y-3">
                        <details
                            v-for="faq in faqs"
                            :key="faq.question"
                            class="group rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-950"
                        >
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden"
                            >
                                <h3 class="text-base font-semibold">
                                    {{ faq.question }}
                                </h3>
                                <span
                                    class="text-emerald-600 transition-transform group-open:rotate-45 dark:text-emerald-400"
                                    aria-hidden="true"
                                    >+</span
                                >
                            </summary>
                            <p
                                class="mt-3 whitespace-pre-line leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                {{ faq.answer }}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <PkCtaBand
                title="Nuxt-Projekt besprechen"
                text="Ob neue Website, SaaS-Frontend oder Migration auf Nuxt 4: Buchen Sie ein kostenloses Erstgespräch – Sie erhalten innerhalb von 48 Stunden ein Festpreis-Angebot."
            />
        </main>

        <PkFooter />
    </div>
</template>

<script setup lang="ts">
const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/nuxt-entwickler-freelancer/`;
const LAST_UPDATED = "2026-07-14";
const lastUpdatedHuman = "14. Juli 2026";

const heroStack = [
    "Nuxt 4",
    "Vue 3 (Composition API)",
    "TypeScript",
    "Tailwind CSS 4",
    "Nuxt UI",
    "Pinia",
    "Appwrite",
    "GSAP & Lenis",
];

const nuxtBenefits = [
    {
        title: "SEO & Performance",
        description:
            "Server-Side-Rendering und Prerendering liefern Suchmaschinen und KI-Crawlern vollständiges HTML – plus schnelle Ladezeiten (Core Web Vitals) für Nutzer und Rankings.",
    },
    {
        title: "Ein Framework für alles",
        description:
            "Marketing-Site, Web-App und API-Routen in einem Projekt: Nitro-Server, File-based Routing und automatisches Code-Splitting reduzieren Komplexität und Kosten.",
    },
    {
        title: "Zukunftssicher & wartbar",
        description:
            "TypeScript, klare Projektstruktur und das große Nuxt-Modul-Ökosystem (Image, i18n, Sitemap, Content) halten die Codebasis wartbar – auch für Ihr Team nach der Übergabe.",
    },
];

const services = [
    {
        title: "Marketing-Websites & Landingpages (Erlebnis)",
        price: "ab €5.000",
        description:
            "Conversion-starke Websites mit hochwertigen Scroll-Animationen (GSAP, Lenis), SSR/Prerendering für SEO, Core Web Vitals im grünen Bereich und CMS-Anbindung nach Bedarf.",
        tags: ["Nuxt 4", "GSAP + Lenis", "SEO/SSR", "Tailwind CSS 4"],
    },
    {
        title: "SaaS-Frontends & Web-Apps (App)",
        price: "ab €25.000",
        description:
            "Dashboards und Anwendungen mit Nuxt UI, Pinia und Appwrite als Backend (Auth, Datenbank, Storage, Realtime). Typsicher mit TypeScript und Zod-Validierung.",
        tags: ["Nuxt UI", "Pinia", "Appwrite", "TypeScript", "Zod"],
    },
    {
        title: "Hybrid-Projekte & Design Systems",
        price: "Festpreis nach Umfang",
        description:
            "Marketing-Site plus App-Bereich in einer Codebasis, gemeinsame Component Library mit Design Tokens – als Nuxt Layer wiederverwendbar über mehrere Projekte.",
        tags: ["Nuxt Layers", "Design Tokens", "Monorepo (pnpm)", "i18n"],
    },
    {
        title: "Audits, Rescues & Migrationen",
        price: "ab €2.500",
        description:
            "Performance-Audits bestehender Nuxt/Vue-Projekte, Übernahme festgefahrener Projekte oder Migration auf Nuxt 4 – inklusive Composition-API- und TypeScript-Umstellung.",
        tags: ["Nuxt 2/3 → 4", "Performance", "Refactoring"],
    },
];

const stackDetail = [
    {
        label: "Framework",
        value: "Nuxt 4 mit Vue 3, ausschließlich Composition API (script setup mit TypeScript) – keine Options API, kein Legacy-Code.",
    },
    {
        label: "UI & Styling",
        value: "Nuxt UI und Tailwind CSS 4 (CSS-first mit @theme-Tokens) – konsistente Design Systems, Dark Mode inklusive.",
    },
    {
        label: "State & Daten",
        value: "Pinia für State-Management, Pinia Colada für die Daten-Schicht, Zod/Valibot für Validierung an jeder Systemgrenze.",
    },
    {
        label: "Backend",
        value: "Appwrite (Auth, Datenbank, Storage, Realtime, Functions) als Backend-as-a-Service – oder Anbindung an Ihre bestehende API.",
    },
    {
        label: "Animation",
        value: "GSAP (ScrollTrigger, SplitText, Flip) und Lenis Smooth Scroll für hochwertige, performante Erlebnis-Websites.",
    },
    {
        label: "Qualität & Deployment",
        value: "TypeScript strict (kein any), WCAG 2.1 AA, Core Web Vitals als Abnahmekriterium. Deployment auf Hetzner (PM2, Nginx) oder Ihrer Infrastruktur.",
    },
];

const faqs = [
    {
        question: "Was kostet ein Nuxt-Entwickler als Freelancer?",
        answer: "Ich arbeite mit festen Projektpreisen statt Stundensätzen: Landingpages ab €5.000, Corporate Websites €15.000–35.000, SaaS-Frontends ab €25.000, Audits und Migrationen ab €2.500. Sie erhalten nach dem kostenlosen Erstgespräch innerhalb von 48 Stunden ein Festpreis-Angebot mit definiertem Umfang.",
    },
    {
        question: "Nuxt oder Next.js – was ist besser?",
        answer: "Beide sind ausgereifte Full-Stack-Frameworks. Nuxt (Vue) punktet mit einfacherer Lernkurve, sehr guter Developer Experience und schlankem Code; Next.js (React) mit dem größeren Ökosystem. Wenn Ihr Team bereits Vue kennt oder das Projekt neu startet, ist Nuxt meist die effizientere Wahl. Entscheidend ist saubere Umsetzung – nicht das Framework-Logo.",
    },
    {
        question: "Übernehmen Sie bestehende Nuxt- oder Vue-Projekte?",
        answer: "Ja. Ich übernehme bestehende Codebasen, führe zunächst ein technisches Audit durch (Struktur, Performance, Abhängigkeiten) und mache dann ein Festpreis-Angebot für Weiterentwicklung, Refactoring oder Migration auf Nuxt 4.",
    },
    {
        question: "Machen Sie auch das Design?",
        answer: "Ja – das ist mein Alleinstellungsmerkmal: Als Senior UI/UX Designer und Entwickler liefere ich Design und Umsetzung aus einer Hand. Kein Reibungsverlust zwischen Figma und Code, keine doppelten Abstimmungsschleifen. Auf Wunsch arbeite ich auch mit Ihrem bestehenden Design-Team und setze deren Figma-Designs um.",
    },
    {
        question: "Arbeiten Sie auch im Team mit unseren Entwicklern?",
        answer: "Ja. Ich integriere mich in bestehende Teams (Git-Workflow, Code-Reviews, Slack/Linear) oder arbeite eigenständig mit regelmäßigen Reviews. Die Zusammenarbeit läuft remote und asynchron dokumentiert – Video-Calls lege ich auf den DACH-Abend.",
    },
    {
        question: "Migrieren Sie Nuxt-2- oder Nuxt-3-Projekte auf Nuxt 4?",
        answer: "Ja. Der Ablauf: technisches Audit der bestehenden App, Migrationsplan mit Aufwandsschätzung, dann schrittweise Migration (Composition API, TypeScript, neue Verzeichnisstruktur) mit laufenden Tests. Festpreis nach Audit – ab €2.500 für kleinere Apps.",
    },
];

/* ============ SEO / JSON-LD ============ */

const pageTitle =
    "Nuxt Entwickler Freelancer – Nuxt 4, Vue 3, TypeScript | David Schubert";
const pageDescription =
    "Freelance Nuxt-Entwickler für DACH: SaaS-Frontends, Corporate Websites & Landingpages mit Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4 und Appwrite. Design + Code aus einer Hand, Festpreise.";
const ogImage = `${SITE_URL}/images/fable/og-pukalani-studio.png`;
const personId = `${SITE_URL}/#david-schubert`;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": personId,
            name: "David Schubert",
            jobTitle: "Senior UI/UX Designer & Creative Technologist",
            url: `${SITE_URL}/fable/`,
            knowsAbout: [
                "Nuxt",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
                "Appwrite",
                "UI/UX Design",
            ],
            sameAs: [
                "https://www.linkedin.com/in/davidschubert-uiux/",
                "https://github.com/davidschubert",
                "https://www.instagram.com/davidschubert/",
            ],
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "Nuxt-Entwicklung (Freelance)",
            serviceType: "Webentwicklung mit Nuxt und Vue",
            description:
                "Entwicklung von Marketing-Websites, SaaS-Frontends und Web-Apps mit Nuxt 4, Vue 3, TypeScript und Appwrite – remote für die DACH-Region, zu Festpreisen.",
            url: PAGE_URL,
            provider: { "@id": personId },
            areaServed: [
                { "@type": "Country", name: "Deutschland" },
                { "@type": "Country", name: "Österreich" },
                { "@type": "Country", name: "Schweiz" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: pageTitle,
            description: pageDescription,
            inLanguage: "de",
            dateModified: LAST_UPDATED,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Start",
                    item: `${SITE_URL}/fable/`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Nuxt Entwickler Freelancer",
                    item: PAGE_URL,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

useHead({
    htmlAttrs: { lang: "de" },
    title: pageTitle,
    meta: [
        { name: "description", content: pageDescription },
        {
            name: "robots",
            content:
                "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
        },
        { name: "author", content: "David Schubert" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Pukalani Studio" },
        { property: "og:locale", content: "de_DE" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:url", content: PAGE_URL },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription },
        { name: "twitter:image", content: ogImage },
    ],
    link: [{ rel: "canonical", href: PAGE_URL }],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        },
    ],
});
</script>
