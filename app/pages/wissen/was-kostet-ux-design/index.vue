<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <PkNav />

        <main id="main-content" role="main" tabindex="-1">
            <article>
                <!-- ARTICLE HEADER -->
                <header class="border-b border-gray-200 dark:border-gray-800">
                    <div class="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
                        <nav aria-label="Brotkrumen" class="text-sm text-gray-500 dark:text-gray-400">
                            <ol class="flex flex-wrap items-center gap-2">
                                <li>
                                    <NuxtLink to="/fable" class="hover:text-emerald-600 hover:underline underline-offset-4">Start</NuxtLink>
                                </li>
                                <li aria-hidden="true">→</li>
                                <li>
                                    <NuxtLink to="/fable#wissen" class="hover:text-emerald-600 hover:underline underline-offset-4">Wissen</NuxtLink>
                                </li>
                                <li aria-hidden="true">→</li>
                                <li aria-current="page">Was kostet UX/UI Design?</li>
                            </ol>
                        </nav>

                        <h1
                            class="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
                        >
                            Was kostet UX/UI Design? Preise, Stundensätze &amp;
                            Beispiele 2026
                        </h1>

                        <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            Kurzantwort: Freelance-UX/UI-Designer in Deutschland
                            kosten 2026 typischerweise 60–120&nbsp;€ pro Stunde
                            bzw. 578–735&nbsp;€ pro Tag. Auf Projektebene:
                            UX-Audits ab ca. €2.500, Landingpages
                            €5.000–12.000, Corporate Websites €15.000–35.000
                            und SaaS-Produkt-Design €25.000–75.000+. Dieser
                            Guide belegt alle Zahlen mit Quellen.
                        </p>

                        <div
                            class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <p>
                                Von
                                <NuxtLink
                                    to="/fable#ueber-mich"
                                    class="font-medium text-gray-700 underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:text-gray-200 dark:hover:text-emerald-400"
                                    >David Schubert</NuxtLink
                                >
                                – Senior UI/UX Designer &amp; Web Developer,
                                25+ Jahre Erfahrung
                            </p>
                            <p>
                                Zuletzt aktualisiert:
                                <time datetime="2026-07-14">14. Juli 2026</time>
                                · wird quartalsweise aktualisiert
                            </p>
                        </div>
                    </div>
                </header>

                <!-- INHALTSVERZEICHNIS -->
                <nav
                    aria-label="Inhaltsverzeichnis"
                    class="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
                >
                    <div class="mx-auto max-w-3xl px-4 py-6 md:px-8">
                        <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Inhalt
                        </p>
                        <ol class="mt-2 grid gap-1 text-sm sm:grid-cols-2">
                            <li v-for="item in toc" :key="item.href">
                                <a
                                    :href="item.href"
                                    class="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-emerald-400"
                                    >{{ item.label }}</a
                                >
                            </li>
                        </ol>
                    </div>
                </nav>

                <div class="mx-auto max-w-3xl px-4 py-12 md:px-8">
                    <!-- STUNDENSÄTZE -->
                    <section id="stundensaetze" aria-labelledby="stundensaetze-title">
                        <h2
                            id="stundensaetze-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Stundensätze &amp; Tagessätze in Deutschland (Daten
                            2025/2026)
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Der durchschnittliche Freelancer-Stundensatz in der
                            DACH-Region liegt laut
                            <a
                                href="https://www.freelancermap.de/freelancer-kompass"
                                target="_blank"
                                rel="noopener external"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >Freelancer-Kompass 2026 (freelancermap, 5.400+
                                Befragte)</a
                            >
                            bei 103&nbsp;€ – der erste Rückgang in der
                            Geschichte der Studie, nach 104&nbsp;€ im Jahr 2025.
                            Im Feld „Grafik, Content, Medien" lag der Schnitt
                            2025 bei 82&nbsp;€ pro Stunde. Der
                            <a
                                href="https://germanupa.de/wissen/branchenreport"
                                target="_blank"
                                rel="noopener external"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >Branchenreport der German UPA</a
                            >
                            (Berufsverband der UX-Professionals) nennt für
                            selbstständige UX-Professionals einen
                            Median-Stundensatz von 92&nbsp;€ (2023) und einen
                            Median-Tagessatz von 735&nbsp;€.
                        </p>

                        <div class="mt-6 overflow-x-auto">
                            <table class="w-full min-w-[560px] border-collapse text-sm">
                                <caption class="sr-only">
                                    Stundensätze und Tagessätze für UX/UI-Design
                                    in Deutschland mit Quellenangabe
                                </caption>
                                <thead>
                                    <tr class="border-b-2 border-gray-300 text-left dark:border-gray-600">
                                        <th scope="col" class="py-3 pr-4 font-semibold">Kennzahl</th>
                                        <th scope="col" class="py-3 pr-4 font-semibold">Wert</th>
                                        <th scope="col" class="py-3 font-semibold">Quelle (Jahr)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="row in rateRows"
                                        :key="row.metric"
                                        class="border-b border-gray-200 align-top dark:border-gray-700"
                                    >
                                        <th scope="row" class="py-3 pr-4 text-left font-medium">
                                            {{ row.metric }}
                                        </th>
                                        <td class="py-3 pr-4 font-semibold text-gray-800 dark:text-gray-100">
                                            {{ row.value }}
                                        </td>
                                        <td class="py-3 text-gray-600 dark:text-gray-300">
                                            <a
                                                :href="row.sourceUrl"
                                                target="_blank"
                                                rel="noopener external"
                                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                                >{{ row.source }}</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Plattform-Indizes (Malt, freelancermap) sind
                            Live-Werte, abgerufen im Juli 2026. Studienwerte
                            beziehen sich auf das jeweils genannte
                            Erhebungsjahr.
                        </p>
                    </section>

                    <!-- PROJEKTPREISE -->
                    <section id="projektpreise" aria-labelledby="projektpreise-title" class="mt-14">
                        <h2
                            id="projektpreise-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Was kostet welches Projekt? Preisbeispiele 2026
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Stundensätze sagen wenig über Ihr Budget – Projektpreise
                            schon. Die folgende Tabelle zeigt marktübliche
                            Spannen für Freelancer und kleine Agenturen in
                            Deutschland sowie meine eigenen Festpreise zum
                            Vergleich (transparent, netto):
                        </p>

                        <div class="mt-6 overflow-x-auto">
                            <table class="w-full min-w-[560px] border-collapse text-sm">
                                <caption class="sr-only">
                                    Projektpreise für UX/UI-Design-Leistungen
                                </caption>
                                <thead>
                                    <tr class="border-b-2 border-gray-300 text-left dark:border-gray-600">
                                        <th scope="col" class="py-3 pr-4 font-semibold">Projekt</th>
                                        <th scope="col" class="py-3 pr-4 font-semibold">Marktübliche Spanne</th>
                                        <th scope="col" class="py-3 pr-4 font-semibold">Mein Festpreis</th>
                                        <th scope="col" class="py-3 font-semibold">Dauer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="row in projectRows"
                                        :key="row.project"
                                        class="border-b border-gray-200 align-top dark:border-gray-700"
                                    >
                                        <th scope="row" class="py-3 pr-4 text-left font-medium">
                                            {{ row.project }}
                                        </th>
                                        <td class="py-3 pr-4 text-gray-600 dark:text-gray-300">
                                            {{ row.market }}
                                        </td>
                                        <td class="py-3 pr-4 font-semibold text-emerald-700 dark:text-emerald-400">
                                            {{ row.mine }}
                                        </td>
                                        <td class="py-3 text-gray-600 dark:text-gray-300">
                                            {{ row.duration }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Zur Einordnung der Marktspannen: Deutsche
                            Preis-Ratgeber nennen für konversion-optimierte
                            Landingpages 5.000–12.000&nbsp;€, für
                            KMU-Websites mit Individual-Design
                            5.000–12.000&nbsp;€ (bei größeren Agenturen
                            20.000–40.000&nbsp;€) und für App-Design je nach
                            Anspruch 3.000–50.000&nbsp;€. Publizierte
                            Festpreis-Beispiele für UX-Tests und Audits liegen
                            zwischen 2.000 und 10.000&nbsp;€ – etwa der
                            Basis-UX-Test ab 5.890&nbsp;€ bei
                            <a
                                href="https://eparo.de/preise"
                                target="_blank"
                                rel="noopener external"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >eparo (Hamburg)</a
                            >
                            oder der Festpreis-UX-Audit von
                            <a
                                href="https://www.inovex.de/de/leistungen/ui-ux/ui-ux-audit/"
                                target="_blank"
                                rel="noopener external"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >inovex</a
                            >.
                        </p>
                    </section>

                    <!-- KOSTENFAKTOREN -->
                    <section id="faktoren" aria-labelledby="faktoren-title" class="mt-14">
                        <h2
                            id="faktoren-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Die 5 Faktoren, die den Preis wirklich bestimmen
                        </h2>
                        <ol class="mt-6 space-y-4">
                            <li
                                v-for="(factor, index) in costFactors"
                                :key="factor.title"
                                class="flex gap-4"
                            >
                                <span
                                    class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-sm font-bold text-white"
                                    aria-hidden="true"
                                    >{{ index + 1 }}</span
                                >
                                <div>
                                    <h3 class="font-semibold">{{ factor.title }}</h3>
                                    <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                        {{ factor.description }}
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </section>

                    <!-- ROI -->
                    <section id="roi" aria-labelledby="roi-title" class="mt-14">
                        <h2
                            id="roi-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Lohnt sich das? Was gutes UX-Design nachweislich
                            bringt
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Vorab eine ehrliche Einordnung: Die oft zitierte
                            Faustformel „1&nbsp;Dollar in UX bringt
                            100&nbsp;Dollar zurück" lässt sich nicht seriös
                            belegen – sie kursiert seit Jahren ohne
                            nachvollziehbare Primärquelle. Wer sie Ihnen als
                            Fakt verkauft, hat nicht recherchiert. Es gibt aber
                            belastbare Daten, die den Business Case für gutes
                            UX-Design klar stützen:
                        </p>
                        <ul class="mt-6 space-y-4">
                            <li
                                v-for="stat in roiStats"
                                :key="stat.claim"
                                class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900"
                            >
                                <p class="font-semibold">{{ stat.claim }}</p>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                    Quelle:
                                    <a
                                        :href="stat.sourceUrl"
                                        target="_blank"
                                        rel="noopener external"
                                        class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                        >{{ stat.source }}</a
                                    >
                                </p>
                            </li>
                        </ul>
                    </section>

                    <!-- ABRECHNUNGSMODELLE -->
                    <section id="modelle" aria-labelledby="modelle-title" class="mt-14">
                        <h2
                            id="modelle-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Stundensatz, Tagessatz oder Festpreis?
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Drei Abrechnungsmodelle sind üblich – und sie setzen
                            unterschiedliche Anreize. Nach Stunden bezahlt zu
                            werden belohnt langsames Arbeiten; ein Festpreis
                            belohnt Effizienz und zwingt beide Seiten, den
                            Umfang vorher sauber zu definieren. Ich arbeite
                            deshalb ausschließlich mit Festpreisen
                            (Value-Based Pricing): Sie kennen Ihr Budget vor
                            Projektstart, und Umfang, Ergebnisse und Preis
                            stehen schriftlich fest. Für offene, langfristige
                            Zusammenarbeit (z.&nbsp;B. Design-Sparring) sind
                            Tagessätze dagegen völlig legitim.
                        </p>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Achten Sie beim Vergleich von Angeboten weniger auf
                            den Stundensatz als auf drei Fragen: Was genau ist
                            enthalten? Wer macht die Arbeit (Senior oder
                            Junior)? Und was passiert bei Mehraufwand? Mehr
                            dazu im Vergleich
                            <NuxtLink
                                to="/wissen/freelancer-oder-agentur"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >Freelancer oder Agentur</NuxtLink
                            >.
                        </p>
                    </section>

                    <!-- BFSG -->
                    <section id="bfsg" aria-labelledby="bfsg-title" class="mt-14">
                        <h2
                            id="bfsg-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Nicht vergessen: Barrierefreiheit ist seit 2025
                            Pflicht (BFSG)
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Seit dem 28. Juni 2025 gilt in Deutschland das
                            <a
                                href="https://www.bundesfachstelle-barrierefreiheit.de/DE/Fachwissen/Produkte-und-Dienstleistungen/Barrierefreiheitsstaerkungsgesetz/barrierefreiheitsstaerkungsgesetz_node.html"
                                target="_blank"
                                rel="noopener external"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >Barrierefreiheitsstärkungsgesetz (BFSG)</a
                            >
                            – die deutsche Umsetzung des European Accessibility
                            Act. Es verpflichtet viele B2C-Websites, Shops und
                            Apps zur Barrierefreiheit; bei Verstößen drohen
                            Bußgelder bis 100.000&nbsp;€. Für Ihre
                            Budget-Planung heißt das: Barrierefreiheit (WCAG
                            2.1 AA) gehört von Anfang an ins Projekt – eine
                            Nachrüstung ist fast immer teurer als der Einbau
                            beim Design. In meinen Projekten und
                            <NuxtLink
                                to="/ux-audit"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >UX-Audits</NuxtLink
                            >
                            ist die WCAG-Prüfung deshalb Standard.
                        </p>
                    </section>

                    <!-- FAQ -->
                    <section id="faq" aria-labelledby="faq-title" class="mt-14">
                        <h2
                            id="faq-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Häufige Fragen zu UX/UI-Design-Kosten
                        </h2>
                        <div class="mt-6 space-y-3">
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
                    </section>

                    <!-- QUELLEN -->
                    <section id="quellen" aria-labelledby="quellen-title" class="mt-14">
                        <h2
                            id="quellen-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Quellen
                        </h2>
                        <ul class="mt-4 space-y-2 text-sm">
                            <li
                                v-for="source in sources"
                                :key="source.url"
                                class="text-gray-600 dark:text-gray-300"
                            >
                                <a
                                    :href="source.url"
                                    target="_blank"
                                    rel="noopener external"
                                    class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                    >{{ source.label }}</a
                                >
                            </li>
                        </ul>
                    </section>
                </div>

                <PkCtaBand
                    title="Was kostet Ihr Projekt konkret?"
                    text="Buchen Sie ein kostenloses 30-Minuten-Erstgespräch: Sie schildern Ihr Vorhaben, ich nenne Ihnen eine ehrliche Einschätzung – und innerhalb von 48 Stunden einen Festpreis."
                />
            </article>
        </main>

        <PkFooter />
    </div>
</template>

<script setup lang="ts">
const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/wissen/was-kostet-ux-design/`;
const LAST_UPDATED = "2026-07-14";

const toc = [
    { label: "Stundensätze & Tagessätze (Daten)", href: "#stundensaetze" },
    { label: "Preisbeispiele nach Projekttyp", href: "#projektpreise" },
    { label: "Die 5 Kostenfaktoren", href: "#faktoren" },
    { label: "Was gutes UX nachweislich bringt", href: "#roi" },
    { label: "Stundensatz vs. Festpreis", href: "#modelle" },
    { label: "BFSG: Barrierefreiheit als Pflicht", href: "#bfsg" },
    { label: "FAQ", href: "#faq" },
    { label: "Quellen", href: "#quellen" },
];

const rateRows = [
    {
        metric: "Ø Stundensatz Freelancer DACH (alle Felder)",
        value: "103 € (2026), 104 € (2025)",
        source: "Freelancer-Kompass 2026, freelancermap",
        sourceUrl: "https://www.freelancermap.de/freelancer-kompass",
    },
    {
        metric: "Ø Stundensatz „Grafik, Content, Medien“",
        value: "82 € (2025)",
        source: "Freelancer-Kompass 2025, freelancermap",
        sourceUrl: "https://www.freelancermap.de/blog/stundensatz-grafiker-freelancer/",
    },
    {
        metric: "Median-Stundensatz selbstständige UX-Professionals",
        value: "92 € (2023)",
        source: "German UPA Branchenreport",
        sourceUrl: "https://germanupa.de/wissen/branchenreport",
    },
    {
        metric: "Median-Tagessatz selbstständige UX-Professionals",
        value: "735 € (2023)",
        source: "German UPA Branchenreport",
        sourceUrl: "https://germanupa.de/wissen/branchenreport",
    },
    {
        metric: "Ø Tagessatz UX-Designer nach Stadt",
        value: "Berlin 578 € · München 658 € · Hamburg 657 €",
        source: "Malt Tarifbarometer (Juli 2026)",
        sourceUrl: "https://www.malt.de/t/tarifbarometer/web-grafikdesign/ux-designer",
    },
    {
        metric: "Ø Jahresumsatz selbstständige UX-Professionals",
        value: "114.042 € bei Ø 124 fakturierten Tagen (2025)",
        source: "German UPA Branchenreport 2025",
        sourceUrl: "https://germanupa.de/blog/ux-usability-branchenreport-2025-zwischen-begeisterung-realitaet-und-professionalisierung",
    },
];

const projectRows = [
    {
        project: "UX-Audit / Usability-Analyse",
        market: "2.000 – 10.000 €",
        mine: "2.500 – 5.000 €",
        duration: "1–2 Wochen",
    },
    {
        project: "Landingpage inkl. Conversion-Optimierung",
        market: "1.500 – 12.000 €",
        mine: "5.000 – 12.000 €",
        duration: "2–3 Wochen",
    },
    {
        project: "Corporate Website (Design + Umsetzung)",
        market: "5.000 – 40.000 €",
        mine: "15.000 – 35.000 €",
        duration: "6–12 Wochen",
    },
    {
        project: "SaaS-Produkt / App-Design (inkl. Design System)",
        market: "8.000 – 50.000 €+",
        mine: "25.000 – 75.000 €+",
        duration: "ab 8 Wochen",
    },
];

const costFactors = [
    {
        title: "Umfang & Komplexität",
        description:
            "Fünf Screens oder fünfzig? Ein Conversion-Funnel oder ein komplettes SaaS-Produkt mit Rollen und Datenvisualisierung? Der Umfang ist der größte Preistreiber – definieren Sie ihn vor der Angebotsphase so konkret wie möglich.",
    },
    {
        title: "Research-Tiefe",
        description:
            "Heuristik-basiertes Design ist günstiger als echtes User Research (Interviews, Tests). Für risikoreiche Produkte lohnt Research fast immer – für eine einfache Landingpage reicht oft die Auswertung vorhandener Daten.",
    },
    {
        title: "Seniorität & Spezialisierung",
        description:
            "Ein Senior mit SaaS- oder E-Commerce-Spezialisierung kostet pro Stunde mehr, braucht aber deutlich weniger Stunden und vermeidet teure Irrwege. Entscheidend ist der Projektpreis pro Ergebnis, nicht der Stundensatz.",
    },
    {
        title: "Design System & Dokumentation",
        description:
            "Einmalige Screens sind billiger als ein skalierbares Design System mit Tokens, Component Library und Dokumentation. Letzteres zahlt sich ab dem zweiten Feature-Release aus.",
    },
    {
        title: "Umsetzung: Design-only oder Design + Code",
        description:
            "Endet das Projekt mit Figma-Files oder mit einer live geschalteten Website? Design und Entwicklung aus einer Hand spart Übergabe- und Abstimmungskosten – ein Grund, warum ich beides anbiete.",
    },
];

const roiStats = [
    {
        claim: "Design-orientierte Unternehmen erzielten über 5 Jahre 32 Prozentpunkte mehr Umsatzwachstum und 56 Prozentpunkte mehr Total-Shareholder-Return-Wachstum als der Branchendurchschnitt (300 börsennotierte Unternehmen).",
        source: "McKinsey – The Business Value of Design (2018)",
        sourceUrl:
            "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-business-value-of-design",
    },
    {
        claim: "Rund 70 % aller Online-Warenkörbe werden abgebrochen (Meta-Auswertung von ~50 Studien). Besseres Checkout-Design allein kann die Conversion großer Shops um durchschnittlich 35 % steigern.",
        source: "Baymard Institute – Cart Abandonment Research (laufend aktualisiert)",
        sourceUrl: "https://baymard.com/lists/cart-abandonment-rate",
    },
    {
        claim: "0,1 Sekunden schnellere mobile Ladezeit steigerte im Retail die Conversions um 8,4 % und den durchschnittlichen Bestellwert um 9,2 % (37 Marken-Websites, 30+ Mio. Sessions).",
        source: "Deloitte & Google – Milliseconds Make Millions (2020)",
        sourceUrl:
            "https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html",
    },
    {
        claim: "53 % der mobilen Website-Besuche werden abgebrochen, wenn die Seite länger als 3 Sekunden lädt (Analyse von über 10.000 mobilen Domains, 2016).",
        source: "Google/SOASTA – The Need for Mobile Speed (2016)",
        sourceUrl:
            "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/",
    },
];

const faqs = [
    {
        question: "Was kostet ein UX-Designer pro Stunde in Deutschland?",
        answer: "Marktdaten 2025/2026: Der Freelancer-Kompass von freelancermap nennt 103 € Durchschnitts-Stundensatz über alle Felder (Grafik/Content/Medien: 82 €), der German-UPA-Branchenreport 92 € Median für selbstständige UX-Professionals. Senior-UX-Designer mit Spezialisierung liegen typischerweise bei 90–120 € pro Stunde, Einsteiger bei 50–70 €.",
    },
    {
        question: "Was kostet ein UX-Designer pro Tag?",
        answer: "Der Median-Tagessatz selbstständiger UX-Professionals lag laut German UPA bei 735 € (2023). Das Malt-Tarifbarometer zeigt für UX-Designer durchschnittliche Tagessätze von 578 € (Berlin) bis 658 € (München) – Plattform-Durchschnitte inklusive Junior-Profilen. Für Senior-Niveau sind 800–1.000 € pro Tag marktüblich.",
    },
    {
        question: "Was kostet eine professionelle Website vom Freelancer?",
        answer: "Je nach Umfang: Eine konversion-optimierte Landingpage kostet marktüblich 5.000–12.000 €, eine Corporate Website mit Individual-Design, WCAG-Konformität und Umsetzung 15.000–35.000 €. Einfache Template-Websites gibt es ab wenigen Tausend Euro – sie erreichen aber selten die Performance- und Conversion-Ziele, für die sich professionelles UX-Design lohnt.",
    },
    {
        question: "Warum sind die Preisspannen so groß?",
        answer: "Weil „Website“ oder „App-Design“ keine definierten Produkte sind: Umfang, Research-Tiefe, Design-System-Bedarf, Seniorität und die Frage Design-only vs. Design + Entwicklung können den Preis um den Faktor 5–10 verändern. Seriöse Anbieter machen deshalb erst ein Erstgespräch und dann ein Angebot mit definiertem Umfang – Misstrauen ist angebracht, wenn jemand ohne Briefing einen Preis nennt.",
    },
    {
        question: "Festpreis oder Stundensatz – was ist besser für Auftraggeber?",
        answer: "Für klar definierte Projekte: Festpreis. Sie kennen Ihr Budget vorher, das Effizienz-Risiko liegt beim Dienstleister, und der Umfang muss sauber definiert werden – was die Projektqualität erhöht. Stunden- oder Tagessätze passen für offene, fortlaufende Zusammenarbeit. Vorsicht bei Stundensatz-Angeboten ohne Aufwandsschätzung: Das unternehmerische Risiko liegt dann komplett bei Ihnen.",
    },
    {
        question: "Stimmt es, dass 1 € in UX 100 € Return bringt?",
        answer: "Diese populäre Zahl lässt sich nicht seriös belegen – es gibt keine auffindbare Primärstudie dafür; sie wird seit Jahren von Blog zu Blog weitergereicht. Belastbar sind stattdessen: McKinseys Business Value of Design (32 Prozentpunkte mehr Umsatzwachstum bei designstarken Unternehmen), Baymards Checkout-Forschung (+35 % Conversion-Potenzial) und die Deloitte/Google-Studie zu Ladezeiten (+8,4 % Conversions pro 0,1 s).",
    },
];

const sources = [
    {
        label: "freelancermap – Freelancer-Kompass 2026 (5.400+ Befragte, DACH)",
        url: "https://www.freelancermap.de/freelancer-kompass",
    },
    {
        label: "German UPA – Branchenreport UX/Usability 2025 & 2023",
        url: "https://germanupa.de/wissen/branchenreport",
    },
    {
        label: "Malt – Tarifbarometer UX-Designer (abgerufen Juli 2026)",
        url: "https://www.malt.de/t/tarifbarometer/web-grafikdesign/ux-designer",
    },
    {
        label: "McKinsey – The Business Value of Design (2018)",
        url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-business-value-of-design",
    },
    {
        label: "Baymard Institute – Cart Abandonment Rate Statistics",
        url: "https://baymard.com/lists/cart-abandonment-rate",
    },
    {
        label: "Deloitte & Google – Milliseconds Make Millions (2020)",
        url: "https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html",
    },
    {
        label: "Google/SOASTA – Mobile Page Speed Study (2016)",
        url: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/",
    },
    {
        label: "Bundesfachstelle Barrierefreiheit – Barrierefreiheitsstärkungsgesetz (BFSG)",
        url: "https://www.bundesfachstelle-barrierefreiheit.de/DE/Fachwissen/Produkte-und-Dienstleistungen/Barrierefreiheitsstaerkungsgesetz/barrierefreiheitsstaerkungsgesetz_node.html",
    },
    {
        label: "eparo – öffentliche Preisliste UX-Tests (Hamburg)",
        url: "https://eparo.de/preise",
    },
];

/* ============ SEO / JSON-LD ============ */

const pageTitle =
    "Was kostet UX/UI Design? Preise & Stundensätze 2026 (mit Quellen)";
const pageDescription =
    "UX/UI-Design-Kosten 2026 mit belegten Daten: Stundensätze (82–103 €), Tagessätze (578–735 €), Projektpreise vom UX-Audit (ab €2.500) bis zum SaaS-Design (€25.000+). Alle Zahlen mit Quellen.";
const ogImage = `${SITE_URL}/images/fable/og-pukalani-studio.png`;
const personId = `${SITE_URL}/#david-schubert`;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": personId,
            name: "David Schubert",
            jobTitle: "Senior UI/UX Designer & Web Developer",
            url: `${SITE_URL}/fable/`,
            sameAs: [
                "https://www.linkedin.com/in/davidschubert",
                "https://github.com/davidschubert",
                "https://www.behance.net/davidschubert",
            ],
        },
        {
            "@type": "Article",
            "@id": `${PAGE_URL}#article`,
            headline:
                "Was kostet UX/UI Design? Preise, Stundensätze & Beispiele 2026",
            description: pageDescription,
            url: PAGE_URL,
            inLanguage: "de",
            author: { "@id": personId },
            publisher: { "@id": personId },
            datePublished: LAST_UPDATED,
            dateModified: LAST_UPDATED,
            image: ogImage,
            isPartOf: { "@id": `${SITE_URL}/#website` },
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
                    name: "Wissen",
                    item: `${SITE_URL}/fable/#wissen`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Was kostet UX/UI Design?",
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
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Pukalani Studio" },
        { property: "og:locale", content: "de_DE" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:url", content: PAGE_URL },
        { property: "og:image", content: ogImage },
        { property: "article:published_time", content: LAST_UPDATED },
        { property: "article:modified_time", content: LAST_UPDATED },
        { property: "article:author", content: "David Schubert" },
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
