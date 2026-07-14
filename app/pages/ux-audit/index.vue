<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <PkNav />

        <main id="main-content" role="main" tabindex="-1">
            <!-- HERO -->
            <header aria-labelledby="audit-title">
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
                    <nav aria-label="Brotkrumen" class="text-sm text-gray-500 dark:text-gray-400">
                        <ol class="flex flex-wrap items-center gap-2">
                            <li>
                                <NuxtLink to="/fable" class="hover:text-emerald-600 hover:underline underline-offset-4">Start</NuxtLink>
                            </li>
                            <li aria-hidden="true">→</li>
                            <li aria-current="page">UX-Audit</li>
                        </ol>
                    </nav>

                    <h1
                        class="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
                    >
                        UX-Audit zum Festpreis:
                        <span
                            class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400"
                            >ab €2.500, Ergebnisse in 1–2 Wochen</span
                        >
                    </h1>

                    <p
                        id="audit-answer"
                        class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        Ein UX-Audit ist eine strukturierte Analyse Ihrer Website
                        oder Web-App durch einen erfahrenen UX-Experten. Bei
                        Pukalani Studio kostet ein UX-Audit €2.500 bis €5.000 als
                        Festpreis, dauert ein bis zwei Wochen und liefert eine
                        priorisierte Maßnahmenliste – von Quick Wins bis zur
                        Conversion-Roadmap. Durchgeführt von David Schubert,
                        Senior UI/UX Designer und Creative Technologist mit über 25
                        Jahren Erfahrung.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://cal.com/davidschubert/30min"
                            target="_blank"
                            rel="noopener nofollow"
                            class="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Audit-Erstgespräch buchen →
                        </a>
                        <a
                            href="#pakete"
                            class="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-emerald-400"
                        >
                            Pakete &amp; Preise ansehen
                        </a>
                    </div>

                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Stand: {{ lastUpdatedHuman }} · UX-Audits laufend
                        verfügbar, Start meist innerhalb einer Woche
                    </p>
                </div>
            </header>

            <!-- WAS IST EIN UX-AUDIT -->
            <section
                aria-labelledby="was-ist-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="was-ist-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Was wird im UX-Audit geprüft?
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Das Audit kombiniert vier Prüfebenen zu einem
                        Gesamtbild: Nutzerführung, Conversion, Performance und
                        Barrierefreiheit. Jede Ebene liefert konkrete, belegte
                        Befunde – keine Bauchgefühl-Meinungen.
                    </p>

                    <div class="mt-8 grid gap-6 md:grid-cols-2">
                        <div
                            v-for="area in auditAreas"
                            :key="area.title"
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-950"
                        >
                            <h3 class="font-semibold">{{ area.title }}</h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                {{ area.description }}
                            </p>
                        </div>
                    </div>

                    <p class="mt-6 text-gray-600 dark:text-gray-300">
                        Methodische Grundlage sind etablierte
                        Usability-Heuristiken, wie sie u.&nbsp;a. die
                        <a
                            href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                            target="_blank"
                            rel="noopener external"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >Nielsen Norman Group</a
                        >
                        beschreibt, ergänzt um
                        <a
                            href="https://web.dev/articles/vitals"
                            target="_blank"
                            rel="noopener external"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >Core Web Vitals</a
                        >
                        und die
                        <a
                            href="https://www.w3.org/TR/WCAG21/"
                            target="_blank"
                            rel="noopener external"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >WCAG&nbsp;2.1</a
                        >.
                    </p>
                </div>
            </section>

            <!-- PAKETE -->
            <section
                id="pakete"
                aria-labelledby="pakete-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="pakete-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        UX-Audit-Pakete &amp; Preise
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Drei Festpreis-Pakete, netto, ohne versteckte Kosten.
                        Welches Paket passt, klären wir im kostenlosen
                        Erstgespräch – danach erhalten Sie das Angebot innerhalb
                        von 48 Stunden.
                    </p>

                    <div class="mt-8 grid gap-6 lg:grid-cols-3">
                        <article
                            v-for="tier in tiers"
                            :key="tier.name"
                            class="flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                            :class="
                                tier.featured
                                    ? 'border-emerald-500 bg-emerald-50/50 shadow-md dark:border-emerald-600 dark:bg-emerald-950/40'
                                    : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
                            "
                        >
                            <p
                                v-if="tier.featured"
                                class="mb-2 inline-flex w-fit rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-semibold text-white"
                            >
                                Meistgewählt
                            </p>
                            <h3 class="text-xl font-semibold">
                                {{ tier.name }}
                            </h3>
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {{ tier.for }}
                            </p>
                            <p class="mt-4 text-3xl font-extrabold">
                                {{ tier.price }}
                            </p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Festpreis netto · {{ tier.duration }}
                            </p>
                            <ul class="mt-5 flex-1 space-y-2">
                                <li
                                    v-for="item in tier.includes"
                                    :key="item"
                                    class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <span
                                        class="mt-0.5 text-emerald-600 dark:text-emerald-400"
                                        aria-hidden="true"
                                        >✓</span
                                    >
                                    {{ item }}
                                </li>
                            </ul>
                            <a
                                href="https://cal.com/davidschubert/30min"
                                target="_blank"
                                rel="noopener nofollow"
                                class="mt-6 rounded-xl px-5 py-2.5 text-center font-semibold transition-all hover:-translate-y-0.5"
                                :class="
                                    tier.featured
                                        ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md hover:shadow-lg'
                                        : 'border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white'
                                "
                                :aria-label="`${tier.name} anfragen`"
                            >
                                {{ tier.name }} anfragen →
                            </a>
                        </article>
                    </div>

                    <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        Alle Pakete beinhalten: schriftlicher Audit-Report,
                        priorisierte Maßnahmenliste und Ergebnis-Call. Die
                        Audit-Kosten werden bei einem Folgeprojekt (z.&nbsp;B.
                        Redesign oder Landingpage) zu 50&nbsp;% angerechnet.
                    </p>
                </div>
            </section>

            <!-- ABLAUF -->
            <section
                aria-labelledby="ablauf-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="ablauf-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        So läuft das UX-Audit ab
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Vom Erstgespräch bis zum Ergebnis-Call vergehen ein bis
                        zwei Wochen. Sie brauchen dafür kaum eigene Zeit –
                        nur Zugang und ein einziges Briefing-Gespräch.
                    </p>
                    <ol class="mt-8 space-y-5">
                        <li
                            v-for="(step, index) in auditSteps"
                            :key="step.title"
                            class="flex gap-4"
                        >
                            <span
                                class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-sm font-bold text-white"
                                aria-hidden="true"
                                >{{ index + 1 }}</span
                            >
                            <div>
                                <h3 class="font-semibold">{{ step.title }}</h3>
                                <p
                                    class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                                >
                                    {{ step.description }}
                                </p>
                            </div>
                        </li>
                    </ol>

                    <blockquote
                        class="mt-10 border-l-4 border-emerald-500 pl-4 text-lg font-medium italic text-gray-700 dark:text-gray-200"
                    >
                        „Das UX-Audit ist der schnellste und günstigste Einstieg
                        in eine Zusammenarbeit: Sie sehen nach zwei Wochen
                        schwarz auf weiß, wo Ihre Website Umsatz liegen lässt –
                        und was zuerst zu tun ist."
                        <footer class="mt-2 text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                            — David Schubert, Senior UI/UX Designer &amp; Web
                            Developer
                        </footer>
                    </blockquote>
                </div>
            </section>

            <!-- FAQ -->
            <section
                id="faq"
                aria-labelledby="faq-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="faq-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Häufige Fragen zum UX-Audit
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

                    <p class="mt-8 text-gray-600 dark:text-gray-300">
                        Mehr zu Preisen und Stundensätzen:
                        <NuxtLink
                            to="/wissen/was-kostet-ux-design"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >Was kostet UX/UI Design? Preise &amp; Stundensätze
                            2026</NuxtLink
                        >
                    </p>
                </div>
            </section>

            <PkCtaBand
                title="UX-Audit anfragen"
                text="Buchen Sie ein kostenloses Erstgespräch – wir klären in 30 Minuten, welches Audit-Paket zu Ihrer Website passt. Start meist innerhalb einer Woche."
            />
        </main>

        <PkFooter />
    </div>
</template>

<script setup lang="ts">
const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/ux-audit/`;
const LAST_UPDATED = "2026-07-14";
const lastUpdatedHuman = "14. Juli 2026";

const auditAreas = [
    {
        title: "Usability & Nutzerführung",
        description:
            "Heuristische Evaluation der wichtigsten Seiten und Flows: Navigation, Informationsarchitektur, Formulare, Fehlertoleranz und mentale Modelle Ihrer Nutzer.",
    },
    {
        title: "Conversion & Funnel",
        description:
            "Analyse der Conversion-Pfade vom Einstieg bis zum Abschluss: Call-to-Actions, Vertrauens-Elemente, Reibungspunkte im Checkout oder Anfrage-Prozess.",
    },
    {
        title: "Performance (Core Web Vitals)",
        description:
            "Messung von LCP, INP und CLS mit Lab- und Felddaten. Langsame Seiten kosten nachweislich Conversions – hier stecken oft die schnellsten Gewinne.",
    },
    {
        title: "Barrierefreiheit (WCAG 2.1 AA)",
        description:
            "Quick-Audit gegen die WCAG-2.1-AA-Kriterien: Kontraste, Tastaturbedienung, Screenreader-Tauglichkeit, Formular-Labels. Seit Juni 2025 gilt in Deutschland das Barrierefreiheitsstärkungsgesetz (BFSG) für viele digitale Angebote.",
    },
];

const tiers = [
    {
        name: "Kompakt",
        for: "Landingpages & kleine Websites",
        price: "€2.500",
        duration: "1 Woche",
        featured: false,
        includes: [
            "Heuristische Analyse von bis zu 5 Kern-Seiten oder Screens",
            "Core-Web-Vitals-Check (Lab- & Felddaten)",
            "Top-10-Maßnahmenliste, nach Aufwand & Wirkung priorisiert",
            "60-minütiger Ergebnis-Call mit Q&A",
        ],
        schemaDescription:
            "Kompaktes UX-Audit für Landingpages und kleine Websites: heuristische Analyse von bis zu 5 Kern-Seiten, Core-Web-Vitals-Check und priorisierte Top-10-Maßnahmenliste.",
        priceValue: 2500,
    },
    {
        name: "Standard",
        for: "Corporate Websites & Shops",
        price: "€3.900",
        duration: "2 Wochen",
        featured: true,
        includes: [
            "Alles aus Kompakt",
            "Analyse des kompletten Conversion-Funnels",
            "WCAG-2.1-AA-Quick-Audit (BFSG-Relevanz)",
            "Benchmark gegen 3 Wettbewerber",
            "Priorisierte Conversion-Roadmap + Video-Walkthrough",
        ],
        schemaDescription:
            "UX-Audit für Corporate Websites und Shops: kompletter Conversion-Funnel, WCAG-2.1-AA-Quick-Audit, Wettbewerbs-Benchmark und priorisierte Roadmap.",
        priceValue: 3900,
    },
    {
        name: "Plus",
        for: "SaaS-Produkte & Web-Apps",
        price: "€5.000",
        duration: "2 Wochen + Workshop",
        featured: false,
        includes: [
            "Alles aus Standard",
            "Halbtägiger Remote-Workshop mit Ihrem Team",
            "Klickbarer Vorher/Nachher-Prototyp für einen Kern-Flow",
            "30 Tage E-Mail-Support für Rückfragen bei der Umsetzung",
        ],
        schemaDescription:
            "UX-Audit für SaaS-Produkte und Web-Apps inklusive Remote-Workshop, klickbarem Vorher/Nachher-Prototyp und 30 Tagen Umsetzungs-Support.",
        priceValue: 5000,
    },
];

const auditSteps = [
    {
        title: "Kostenloses Erstgespräch (30 Min)",
        description:
            "Wir klären Ziele, Zielgruppen und den Umfang. Sie erhalten innerhalb von 48 Stunden ein Festpreis-Angebot mit klarem Leistungsumfang.",
    },
    {
        title: "Briefing & Zugänge",
        description:
            "Ein Briefing-Call (60 Min) plus Zugang zu Analytics und ggf. Testumgebung. Mehr brauche ich von Ihnen nicht – Ihr Team bleibt entlastet.",
    },
    {
        title: "Analyse",
        description:
            "Heuristische Evaluation, Funnel-Analyse, Performance-Messung und WCAG-Prüfung. Alle Befunde werden mit Screenshots und Daten belegt.",
    },
    {
        title: "Report & Ergebnis-Call",
        description:
            "Sie erhalten den schriftlichen Report mit priorisierter Maßnahmenliste (Quick Wins zuerst) und wir gehen ihn gemeinsam im Call durch.",
    },
];

const faqs = [
    {
        question: "Was kostet ein UX-Audit?",
        answer: "Ein UX-Audit kostet bei Pukalani Studio zwischen €2.500 und €5.000 netto als Festpreis – abhängig vom Umfang: Kompakt (€2.500) für Landingpages, Standard (€3.900) für Corporate Websites und Shops, Plus (€5.000) für SaaS-Produkte inklusive Workshop und Prototyp. Bei einem Folgeprojekt werden 50 % der Audit-Kosten angerechnet.",
    },
    {
        question: "Wie lange dauert ein UX-Audit?",
        answer: "Ein bis zwei Wochen ab Briefing: Das Kompakt-Paket liefert Ergebnisse nach einer Woche, Standard und Plus nach zwei Wochen. Der Start ist meist innerhalb einer Woche nach Beauftragung möglich, da UX-Audits laufend eingeplant werden.",
    },
    {
        question: "Was bekomme ich am Ende konkret?",
        answer: "Einen schriftlichen Audit-Report mit allen Befunden (belegt mit Screenshots und Messdaten), eine nach Aufwand und Wirkung priorisierte Maßnahmenliste sowie einen Ergebnis-Call. Je nach Paket zusätzlich: Conversion-Roadmap, Wettbewerbs-Benchmark, Video-Walkthrough, Workshop und klickbarer Prototyp.",
    },
    {
        question: "Was brauchen Sie von mir?",
        answer: "Wenig: ein Briefing-Gespräch (60 Minuten), Zugang zu Ihren Analytics-Daten (z. B. GA4, Plausible oder Matomo) und – falls vorhanden – eine Testumgebung. Alles Weitere übernehme ich.",
    },
    {
        question: "Für wen lohnt sich ein UX-Audit?",
        answer: "Für alle, die Traffic haben, aber zu wenig Anfragen oder Käufe: Corporate Websites mit schwacher Lead-Generierung, Shops mit hoher Abbruchrate, SaaS-Produkte mit geringer Feature-Adoption oder hoher Support-Last. Wer noch keine Website hat, braucht kein Audit, sondern ein Konzept.",
    },
    {
        question: "Setzen Sie die Maßnahmen auch um?",
        answer: "Ja, auf Wunsch. Als Designer und Nuxt-Entwickler kann ich die Empfehlungen direkt umsetzen – vom Quick Win bis zum Redesign. 50 % der Audit-Kosten werden dabei angerechnet. Alternativ arbeitet Ihr Team mit dem Report; er ist bewusst so geschrieben, dass Entwickler damit arbeiten können.",
    },
];

/* ============ SEO / JSON-LD ============ */

const pageTitle = "UX-Audit ab €2.500 – Festpreis-Pakete | David Schubert";
const pageDescription =
    "UX-Audit zum Festpreis: €2.500–5.000, Ergebnisse in 1–2 Wochen. Usability, Conversion, Core Web Vitals & WCAG 2.1 AA – mit priorisierter Maßnahmenliste. Von Senior UX Designer David Schubert.";
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
            sameAs: [
                "https://www.linkedin.com/in/davidschubert-uiux/",
                "https://github.com/davidschubert",
                "https://www.instagram.com/davidschubert/",
            ],
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "UX-Audit",
            serviceType: "UX-Audit & Conversion-Analyse",
            description:
                "Strukturierte UX-Analyse von Websites und Web-Apps: Usability, Conversion-Funnel, Core Web Vitals und WCAG 2.1 AA – mit priorisierter Maßnahmenliste zum Festpreis.",
            url: PAGE_URL,
            provider: { "@id": personId },
            areaServed: [
                { "@type": "Country", name: "Deutschland" },
                { "@type": "Country", name: "Österreich" },
                { "@type": "Country", name: "Schweiz" },
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "UX-Audit-Pakete",
                itemListElement: tiers.map((tier) => ({
                    "@type": "Offer",
                    name: `UX-Audit ${tier.name}`,
                    description: tier.schemaDescription,
                    price: tier.priceValue,
                    priceCurrency: "EUR",
                    url: `${PAGE_URL}#pakete`,
                })),
            },
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
                    name: "UX-Audit",
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
