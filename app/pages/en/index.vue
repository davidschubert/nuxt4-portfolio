<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <!-- NAV (English) -->
        <nav
            aria-label="Main navigation"
            class="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
        >
            <div
                class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8"
            >
                <NuxtLink
                    to="/en"
                    class="flex items-center gap-2 font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    <span
                        class="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500"
                        aria-hidden="true"
                    ></span>
                    Pukalani&nbsp;Studio
                </NuxtLink>

                <ul class="hidden items-center gap-6 text-sm font-medium md:flex">
                    <li>
                        <a href="#services" class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">Services</a>
                    </li>
                    <li>
                        <a href="#results" class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">Results</a>
                    </li>
                    <li>
                        <a href="#faq" class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">FAQ</a>
                    </li>
                    <li>
                        <NuxtLink to="/" class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400">Deutsch</NuxtLink>
                    </li>
                </ul>

                <a
                    href="https://cal.com/davidschubert/30min"
                    target="_blank"
                    rel="noopener nofollow"
                    class="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                    Book intro call
                </a>
            </div>
        </nav>

        <main id="main-content" role="main" tabindex="-1">
            <!-- HERO -->
            <header aria-labelledby="en-title">
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
                    <p
                        class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                    >
                        <span
                            class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                            aria-hidden="true"
                        ></span>
                        Available for new projects
                    </p>

                    <h1
                        id="en-title"
                        class="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
                    >
                        Freelance Senior UI/UX Designer &amp; Creative
                        Technologist for the
                        <span
                            class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400"
                            >German-speaking market (DACH)</span
                        >
                    </h1>

                    <p
                        id="en-answer"
                        class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        David Schubert is a freelance senior UI/UX designer,
                        trained media designer, and creative technologist with
                        25+ years in design and advertising, working under the
                        brand Pukalani Studio. He crafts design concepts,
                        digital brand design, websites, and digital products –
                        including hands-on technical implementation and content
                        production (photography, video) – for mid-sized
                        companies and agencies in Germany, Austria, and
                        Switzerland. In agency and freelance projects he has
                        designed for brands such as Astra, E WIE EINFACH, GEMA,
                        Holsten, Lamborghini, NEFF, Telekom, and T-Systems.
                    </p>

                    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Key facts">
                        <li
                            v-for="badge in badges"
                            :key="badge"
                            class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        >
                            {{ badge }}
                        </li>
                    </ul>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://cal.com/davidschubert/30min"
                            target="_blank"
                            rel="noopener nofollow"
                            class="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Book a free 30-minute intro call →
                        </a>
                        <a
                            :href="`mailto:${email}`"
                            class="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-emerald-400"
                        >
                            {{ email }}
                        </a>
                    </div>

                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Last updated: July 14, 2026 · Based in Pukalani, Maui
                        (Hawaii, USA) · Native German speaker
                    </p>
                </div>
            </header>

            <!-- SERVICES & PRICING -->
            <section
                id="services"
                aria-labelledby="en-services-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="en-services-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Services &amp; transparent pricing
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Fixed project prices instead of hourly billing
                        (value-based pricing). A UX audit costs €2,500–5,000, a
                        conversion-optimized landing page €5,000–12,000, a
                        corporate website €15,000–35,000, and SaaS product
                        design starts at €25,000. Every quote defines scope,
                        deliverables, and timeline in writing.
                    </p>

                    <div class="mt-8 overflow-x-auto">
                        <table class="w-full min-w-[520px] border-collapse text-sm">
                            <caption class="sr-only">
                                Services and fixed prices
                            </caption>
                            <thead>
                                <tr class="border-b-2 border-gray-300 text-left dark:border-gray-600">
                                    <th scope="col" class="py-3 pr-4 font-semibold">Service</th>
                                    <th scope="col" class="py-3 pr-4 font-semibold">Fixed price (net)</th>
                                    <th scope="col" class="py-3 font-semibold">Timeline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="row in serviceRows"
                                    :key="row.service"
                                    class="border-b border-gray-200 align-top dark:border-gray-700"
                                >
                                    <th scope="row" class="py-3 pr-4 text-left font-medium">
                                        {{ row.service }}
                                    </th>
                                    <td class="py-3 pr-4 font-semibold text-emerald-700 dark:text-emerald-400">
                                        {{ row.price }}
                                    </td>
                                    <td class="py-3 text-gray-600 dark:text-gray-300">
                                        {{ row.timeline }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Tech stack: Figma, Nuxt 4 (Vue 3), TypeScript, Tailwind
                        CSS 4, Appwrite · Standards: WCAG 2.1 AA accessibility,
                        Core Web Vitals
                    </p>
                </div>
            </section>

            <!-- RESULTS -->
            <section
                id="results"
                aria-labelledby="en-results-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="en-results-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Selected results
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Anonymized client projects with measurable outcomes –
                        details available on request:
                    </p>
                    <ul class="mt-6 grid gap-4 sm:grid-cols-2">
                        <li
                            v-for="result in results"
                            :key="result.title"
                            class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="font-semibold">{{ result.title }}</h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                {{ result.outcome }}
                            </p>
                        </li>
                    </ul>

                    <figure
                        class="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900"
                    >
                        <blockquote class="text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-100">
                            "+73% conversion in six weeks. David connects UX
                            design, engineering, and business KPIs – exactly
                            what we needed."
                        </blockquote>
                        <figcaption class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                            — Co-founder of a SaaS startup, Berlin · reference
                            available on request
                        </figcaption>
                    </figure>
                </div>
            </section>

            <!-- FAQ -->
            <section
                id="faq"
                aria-labelledby="en-faq-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="en-faq-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Frequently asked questions
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

            <!-- CTA -->
            <section
                aria-labelledby="en-cta-title"
                class="border-t border-gray-200 bg-gradient-to-br from-emerald-600 to-blue-700 text-white dark:border-gray-800"
            >
                <div class="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="en-cta-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Let's talk about your project
                    </h2>
                    <p class="mt-3 max-w-3xl text-lg leading-relaxed text-emerald-50">
                        Book a free 30-minute intro call (Zoom, Teams, or Meet)
                        or send an email. You'll get a reply within 24 hours
                        and a fixed-price quote within 48 hours after the call.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-3">
                        <a
                            href="https://cal.com/davidschubert/30min"
                            target="_blank"
                            rel="noopener nofollow"
                            class="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Book a free intro call →
                        </a>
                        <a
                            :href="`mailto:${email}`"
                            class="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            Send an email
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <!-- FOOTER (English, compact) -->
        <footer role="contentinfo" class="bg-gray-950 text-gray-300">
            <div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
                <div class="flex flex-col justify-between gap-6 md:flex-row">
                    <div>
                        <p class="font-bold text-white">Pukalani Studio</p>
                        <p class="mt-2 max-w-md text-sm text-gray-400">
                            David Schubert – freelance senior UI/UX designer
                            &amp; web developer. Remote for the DACH region,
                            based in Pukalani, Maui (Hawaii, USA).
                        </p>
                    </div>
                    <ul class="space-y-2 text-sm" aria-label="Links">
                        <li>
                            <a href="https://www.linkedin.com/in/davidschubert-uiux/" target="_blank" rel="noopener me" class="hover:text-white hover:underline underline-offset-4">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/davidschubert" target="_blank" rel="noopener me" class="hover:text-white hover:underline underline-offset-4">GitHub</a>
                        </li>
                        <li>
                            <NuxtLink to="/" class="hover:text-white hover:underline underline-offset-4">Deutsche Version</NuxtLink>
                        </li>
                        <li>
                            <a href="https://pukalani.studio/imprint.pdf" target="_blank" rel="noopener" class="hover:text-white hover:underline underline-offset-4">Imprint (PDF)</a>
                        </li>
                    </ul>
                </div>
                <p class="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-500">
                    © 2026 David Schubert · Pukalani Studio · Last updated:
                    July 14, 2026
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/en/`;
const LAST_UPDATED = "2026-07-14";

const email = atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==");

const badges = [
    "25+ years of experience",
    "Trained media designer",
    "Concept, design & build",
    "Fixed project prices",
    "German & English",
];

const serviceRows = [
    {
        service: "Design concept & digital brand design",
        price: "fixed price by scope",
        timeline: "per project",
    },
    {
        service: "UX audit & conversion analysis",
        price: "€2,500 – €5,000",
        timeline: "1–2 weeks",
    },
    {
        service: "Landing page incl. CRO",
        price: "€5,000 – €12,000",
        timeline: "2–3 weeks",
    },
    {
        service: "Corporate website (design + build)",
        price: "€15,000 – €35,000",
        timeline: "6–12 weeks",
    },
    {
        service: "SaaS product & dashboard design",
        price: "from €25,000",
        timeline: "from 8 weeks",
    },
    {
        service: "Content production (photo, video, ad assets)",
        price: "fixed price by scope",
        timeline: "per project",
    },
];

const results = [
    {
        title: "SaaS analytics dashboard",
        outcome:
            "+43% feature adoption, −67% support tickets after an information-architecture redesign for 50,000+ users.",
    },
    {
        title: "E-commerce checkout",
        outcome:
            "+73% conversion and −41% cart abandonment after reducing the checkout from seven steps to three.",
    },
    {
        title: "Corporate website relaunch",
        outcome:
            "+156% organic traffic and +84% inquiries with a WCAG 2.1 AA compliant, mobile-first relaunch (PageSpeed 94).",
    },
    {
        title: "B2B SaaS MVP & design system",
        outcome:
            "Developer-ready Figma library and MVP design in 12 weeks; the startup closed its Series A.",
    },
];

const faqs = [
    {
        question: "What does a freelance UI/UX designer for the German market cost?",
        answer: "I work with fixed project prices instead of hourly billing: UX audits €2,500–5,000, landing pages €5,000–12,000, corporate websites €15,000–35,000, SaaS product design from €25,000 (all net). For market context: senior freelance UX designers in Germany typically charge €90–120 per hour or €800–1,000 per day.",
    },
    {
        question: "Do you work in English?",
        answer: "Yes. I'm a native German speaker and work in English as well – workshops, documentation, and day-to-day communication in either language. That makes me a good fit for international teams targeting the German-speaking (DACH) market.",
    },
    {
        question: "How does remote collaboration work across time zones?",
        answer: "I'm based in Hawaii (UTC−10), which turns the time difference into an advantage for European clients: feedback you send at the end of your workday is implemented overnight and ready when your next day starts. Video calls happen in the European evening (my morning); everything else runs asynchronously via Slack, Notion, or Linear.",
    },
    {
        question: "Do you also develop what you design?",
        answer: "Yes – that's the core of my offer. I build websites and web apps with Nuxt 4 (Vue 3), TypeScript, Tailwind CSS 4, and Appwrite. Alternatively, I hand over developer-ready Figma files with design tokens and documentation to your team.",
    },
    {
        question: "Why should an international company hire a DACH specialist?",
        answer: "Because the German-speaking market has its own conventions: formal address (Sie), legal requirements like Impressum, GDPR and the German accessibility act (BFSG, in force since June 2025), and different trust signals. I design for these expectations natively – in the market's language.",
    },
];

/* ============ SEO / JSON-LD ============ */

const pageTitle =
    "Freelance Senior UI/UX Designer for DACH | David Schubert";
const pageDescription =
    "David Schubert – freelance senior UI/UX designer & creative technologist for Germany, Austria & Switzerland. Design concepts, brand design, websites, content production. 25+ years, brands like Astra, GEMA, Telekom. Fixed prices.";
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
            description:
                "Freelance senior UI/UX designer, trained media designer, and creative technologist with 25+ years in design and advertising. Design concepts, digital brand design, websites, and content production for the DACH market – remote, at fixed project prices. Agency and freelance work for brands such as Astra, E WIE EINFACH, GEMA, Holsten, Lamborghini, NEFF, Telekom, and T-Systems.",
            url: PAGE_URL,
            email: `mailto:${email}`,
            knowsLanguage: ["de", "en"],
            sameAs: [
                "https://www.linkedin.com/in/davidschubert-uiux/",
                "https://github.com/davidschubert",
                "https://www.instagram.com/davidschubert/",
            ],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Pukalani",
                addressRegion: "HI",
                addressCountry: "US",
            },
        },
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: pageTitle,
            description: pageDescription,
            inLanguage: "en",
            dateModified: LAST_UPDATED,
            about: { "@id": personId },
            isPartOf: { "@id": `${SITE_URL}/#website` },
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
    htmlAttrs: { lang: "en" },
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
        { property: "og:locale", content: "en_US" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:url", content: PAGE_URL },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription },
        { name: "twitter:image", content: ogImage },
    ],
    link: [
        { rel: "canonical", href: PAGE_URL },
        { rel: "alternate", hreflang: "de", href: `${SITE_URL}/` },
        { rel: "alternate", hreflang: "en", href: PAGE_URL },
        { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}/` },
    ],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        },
    ],
});
</script>
