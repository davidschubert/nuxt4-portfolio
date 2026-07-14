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
                                <li aria-current="page">Freelancer oder Agentur</li>
                            </ol>
                        </nav>

                        <h1
                            class="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
                        >
                            UX/Webdesign: Freelancer oder Agentur? Der ehrliche
                            Vergleich 2026
                        </h1>

                        <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            Kurzantwort: Ein Senior-Freelancer ist die bessere
                            Wahl für klar umrissene Design- und Web-Projekte bis
                            etwa €75.000 – direkter Kontakt, 30–50&nbsp;%
                            niedrigere Kosten, schnellere Entscheidungen. Eine
                            Agentur lohnt sich, wenn Sie viele Disziplinen
                            gleichzeitig, sehr große Kapazität oder langfristige
                            Betreuung mit Vertretungsgarantie brauchen.
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
                                – Senior UI/UX Designer &amp; Creative Technologist,
                                25+ Jahre Erfahrung (Agentur- und
                                Freelancer-Seite)
                            </p>
                            <p>
                                Zuletzt aktualisiert:
                                <time datetime="2026-07-14">14. Juli 2026</time>
                            </p>
                        </div>

                        <p class="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
                            <strong class="font-semibold">Transparenz:</strong>
                            Ich bin selbst Freelancer – dieser Vergleich nennt
                            deshalb bewusst auch die Fälle, in denen eine
                            Agentur die bessere Wahl ist.
                        </p>
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
                    <!-- VERGLEICHSTABELLE -->
                    <section id="vergleich" aria-labelledby="vergleich-title">
                        <h2
                            id="vergleich-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Freelancer vs. Agentur: der direkte Vergleich
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Die Tabelle fasst die wichtigsten Unterschiede
                            zusammen – darunter folgt die Einordnung im Detail.
                        </p>

                        <div class="mt-6 overflow-x-auto">
                            <table
                                class="w-full min-w-[560px] border-collapse text-sm"
                            >
                                <caption class="sr-only">
                                    Vergleich zwischen Freelancer und Agentur
                                    für UX- und Webdesign-Projekte
                                </caption>
                                <thead>
                                    <tr class="border-b-2 border-gray-300 text-left dark:border-gray-600">
                                        <th scope="col" class="py-3 pr-4 font-semibold">Kriterium</th>
                                        <th scope="col" class="py-3 pr-4 font-semibold">Senior-Freelancer</th>
                                        <th scope="col" class="py-3 font-semibold">Agentur</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="row in comparisonRows"
                                        :key="row.criterion"
                                        class="border-b border-gray-200 align-top dark:border-gray-700"
                                    >
                                        <th scope="row" class="py-3 pr-4 text-left font-medium">
                                            {{ row.criterion }}
                                        </th>
                                        <td class="py-3 pr-4 text-gray-600 dark:text-gray-300">
                                            {{ row.freelancer }}
                                        </td>
                                        <td class="py-3 text-gray-600 dark:text-gray-300">
                                            {{ row.agency }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- KOSTEN -->
                    <section id="kosten" aria-labelledby="kosten-title" class="mt-14">
                        <h2
                            id="kosten-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Was kostet ein Freelancer, was eine Agentur?
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Freelance-Webdesigner und UX-Designer in Deutschland
                            berechnen üblicherweise 60–120&nbsp;€ pro Stunde,
                            Agenturen wegen Overhead (Projektleitung, Büro,
                            Vertrieb) meist 100–200&nbsp;€ pro Stunde. Auf
                            Projektebene bedeutet das: Ein Projekt, das beim
                            Freelancer €15.000 kostet, liegt bei einer Agentur
                            häufig bei €25.000–35.000 – bei vergleichbarem
                            Ergebnis, wenn der Freelancer Senior-Niveau hat.
                        </p>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Wichtig ist der Blick auf die
                            <em>wirksame</em> Senior-Zeit: In Agenturen arbeiten
                            nach dem Verkaufsgespräch oft Junior- und
                            Mid-Level-Designer am Projekt, während der
                            Senior-Anteil in Reviews steckt. Beim Freelancer ist
                            jede bezahlte Stunde Senior-Zeit. Ich selbst arbeite
                            deshalb mit
                            <NuxtLink
                                to="/wissen/was-kostet-ux-design"
                                class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                                >festen Projektpreisen statt Stundensätzen</NuxtLink
                            >
                            – das macht den Vergleich für Sie noch einfacher.
                        </p>
                    </section>

                    <!-- WANN FREELANCER -->
                    <section id="wann-freelancer" aria-labelledby="wann-freelancer-title" class="mt-14">
                        <h2
                            id="wann-freelancer-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Wann ist ein Freelancer die richtige Wahl?
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Ein erfahrener Freelancer passt, wenn das Projekt
                            klar umrissen ist und Qualität pro Euro zählt:
                        </p>
                        <ul class="mt-4 space-y-2">
                            <li
                                v-for="item in freelancerFit"
                                :key="item"
                                class="flex items-start gap-2 leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                <span class="mt-1 text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span>
                                {{ item }}
                            </li>
                        </ul>
                    </section>

                    <!-- WANN AGENTUR -->
                    <section id="wann-agentur" aria-labelledby="wann-agentur-title" class="mt-14">
                        <h2
                            id="wann-agentur-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Wann ist die Agentur die bessere Wahl?
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Ehrlich gesagt: Es gibt Projekte, für die Sie keine
                            Einzelperson beauftragen sollten.
                        </p>
                        <ul class="mt-4 space-y-2">
                            <li
                                v-for="item in agencyFit"
                                :key="item"
                                class="flex items-start gap-2 leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                <span class="mt-1 text-blue-600 dark:text-blue-400" aria-hidden="true">→</span>
                                {{ item }}
                            </li>
                        </ul>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Ein Mittelweg: Viele Senior-Freelancer – ich
                            eingeschlossen – arbeiten mit einem Netzwerk aus
                            spezialisierten Partnern (Entwicklung, Content,
                            Fotografie). Sie bekommen dann Freelancer-Konditionen
                            mit erweiterter Kapazität, aber weiterhin einem
                            einzigen Ansprechpartner.
                        </p>
                    </section>

                    <!-- RISIKEN -->
                    <section id="risiken" aria-labelledby="risiken-title" class="mt-14">
                        <h2
                            id="risiken-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Die Risiken beider Modelle – und wie Sie sie
                            absichern
                        </h2>
                        <div class="mt-6 grid gap-6 sm:grid-cols-2">
                            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
                                <h3 class="font-semibold">Risiko Freelancer</h3>
                                <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Ausfall durch Krankheit, begrenzte
                                    Kapazität, Qualität hängt an einer Person.
                                    Absicherung: Referenzen und Arbeitsproben
                                    prüfen, Festpreis mit definierten
                                    Meilensteinen vereinbaren, Quellcode- und
                                    Datei-Übergabe vertraglich festhalten.
                                </p>
                            </div>
                            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
                                <h3 class="font-semibold">Risiko Agentur</h3>
                                <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Junior-Staffing nach Senior-Pitch, träge
                                    Abstimmungswege, Budget-Verbrauch durch
                                    Projektmanagement. Absicherung: Namentlich
                                    festgelegtes Team im Vertrag, direkte
                                    Kommunikationswege und transparente
                                    Stundenaufstellung verlangen.
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- FAQ -->
                    <section id="faq" aria-labelledby="faq-title" class="mt-14">
                        <h2
                            id="faq-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Häufige Fragen
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

                    <!-- FAZIT -->
                    <section id="fazit" aria-labelledby="fazit-title" class="mt-14">
                        <h2
                            id="fazit-title"
                            class="text-2xl font-bold tracking-tight md:text-3xl"
                        >
                            Fazit
                        </h2>
                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            Für die meisten Design- und Web-Projekte im
                            Mittelstand und bei SaaS-Unternehmen liefert ein
                            Senior-Freelancer das bessere
                            Preis-Leistungs-Verhältnis: Sie zahlen
                            ausschließlich für Senior-Arbeit, entscheiden
                            schneller und bleiben flexibler. Eine Agentur ist
                            die richtige Wahl bei sehr großen, multidisziplinären
                            Vorhaben mit hohem Kapazitätsbedarf. Prüfen Sie in
                            beiden Fällen dasselbe: nachweisbare Ergebnisse,
                            klare Prozesse und wer konkret an Ihrem Projekt
                            arbeitet.
                        </p>
                    </section>
                </div>

                <PkCtaBand
                    title="Direkt mit einem Senior sprechen"
                    text="Sie möchten wissen, ob Ihr Projekt zu einem Freelancer passt? Buchen Sie ein kostenloses Erstgespräch – ich sage Ihnen auch ehrlich, wenn eine Agentur die bessere Wahl ist."
                />
            </article>
        </main>

        <PkFooter />
    </div>
</template>

<script setup lang="ts">
const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/wissen/freelancer-oder-agentur/`;
const LAST_UPDATED = "2026-07-14";

const toc = [
    { label: "Der direkte Vergleich (Tabelle)", href: "#vergleich" },
    { label: "Kostenvergleich", href: "#kosten" },
    { label: "Wann Freelancer?", href: "#wann-freelancer" },
    { label: "Wann Agentur?", href: "#wann-agentur" },
    { label: "Risiken & Absicherung", href: "#risiken" },
    { label: "FAQ & Fazit", href: "#faq" },
];

const comparisonRows = [
    {
        criterion: "Stundensatz (Markt DE)",
        freelancer: "ca. 60–120 € (Senior UX/Webdesign)",
        agency: "ca. 100–200 € (inkl. Overhead)",
    },
    {
        criterion: "Wer macht die Arbeit?",
        freelancer: "Die Person, mit der Sie sprechen – 100 % Senior-Zeit",
        agency: "Häufig Junior/Mid-Level nach Senior-Pitch",
    },
    {
        criterion: "Kommunikation",
        freelancer: "Direkt, ohne Zwischenebene",
        agency: "Über Projektleitung / Account Management",
    },
    {
        criterion: "Geschwindigkeit",
        freelancer: "Entscheidungen in Stunden bis Tagen",
        agency: "Abstimmungsschleifen über mehrere Rollen",
    },
    {
        criterion: "Kapazität",
        freelancer: "Begrenzt – 1–2 Projekte parallel",
        agency: "Skalierbar, mehrere Teams",
    },
    {
        criterion: "Disziplin-Breite",
        freelancer: "Spezialisiert (+ Partnernetzwerk)",
        agency: "Viele Disziplinen im Haus",
    },
    {
        criterion: "Ausfallrisiko",
        freelancer: "Eine Person (vertraglich absichern)",
        agency: "Vertretung im Team möglich",
    },
    {
        criterion: "Flexibilität & Vertrag",
        freelancer: "Schlanke Verträge, phasenweise buchbar",
        agency: "Rahmenverträge, längere Bindung",
    },
];

const freelancerFit = [
    "Klar umrissene Projekte: Website-Relaunch, Landingpage, UX-Audit, Dashboard-Redesign, Design System",
    "Budget bis ca. €75.000, bei dem jeder Euro in Umsetzung statt Overhead fließen soll",
    "Sie wollen direkten Zugriff auf die ausführende Person – kurze Wege, schnelle Iterationen",
    "Inhouse-Team vorhanden, das punktuell Senior-Verstärkung braucht (Design oder Entwicklung)",
    "Design UND Entwicklung aus einer Hand gewünscht – ohne Übergabeverluste",
];

const agencyFit = [
    "Große Multi-Kanal-Vorhaben: Marke + Kampagne + Website + Content + Media gleichzeitig",
    "Sehr enge Deadlines, die nur mit mehreren parallelen Teams zu halten sind",
    "Konzern-Anforderungen: Rahmenverträge, SLAs, Vertretungsgarantien, Compliance-Prozesse",
    "Langfristige Betreuung mit garantierter Erreichbarkeit über Urlaubs- und Krankheitszeiten hinweg",
];

const faqs = [
    {
        question: "Ist ein Freelancer wirklich 30–50 % günstiger als eine Agentur?",
        answer: "Bei vergleichbarer Seniorität in der Regel ja. Der Unterschied entsteht durch den Agentur-Overhead (Projektleitung, Vertrieb, Büro) und dadurch, dass beim Freelancer jede Stunde Senior-Zeit ist. Marktüblich sind in Deutschland 60–120 € pro Stunde für Senior-Freelancer im UX-/Webdesign gegenüber 100–200 € bei Agenturen. Entscheidend ist der Projektpreis fürs gleiche Ergebnis – vergleichen Sie Angebote immer auf Basis definierter Leistungen.",
    },
    {
        question: "Was passiert, wenn der Freelancer krank wird oder ausfällt?",
        answer: "Seriöse Freelancer sichern das ab: dokumentierte Arbeitsstände in gemeinsamen Tools (Figma, Git, Notion), Meilenstein-Abnahmen mit Teillieferungen und vertraglich geregelte Datei-Übergabe. So bleibt Ihr Projekt auch im Ausfallszenario fortführbar. Fragen Sie im Erstgespräch konkret danach – die Antwort zeigt die Professionalität.",
    },
    {
        question: "Kann ein Freelancer auch große Projekte stemmen?",
        answer: "Projekte bis etwa €75.000 sind für erfahrene Solo-Freelancer gut machbar, wenn der Umfang klar geschnitten ist. Darüber hinaus arbeiten viele Freelancer mit Partnernetzwerken – Sie behalten einen Ansprechpartner, bekommen aber zusätzliche Kapazität. Für echte Multi-Team-Vorhaben ist die Agentur die richtige Wahl.",
    },
    {
        question: "Woran erkenne ich einen guten UX-/Webdesign-Freelancer?",
        answer: "An vier Dingen: 1. Nachweisbare Ergebnisse mit Zahlen (Conversion, Traffic, Nutzerzufriedenheit) statt nur schöner Bilder. 2. Ein klarer, dokumentierter Prozess von Discovery bis Launch. 3. Transparente Preise oder nachvollziehbare Festpreis-Angebote. 4. Ehrlichkeit über Grenzen – wer jedes Projekt annimmt, ist ein Warnsignal.",
    },
    {
        question: "Freelancer gefunden – wie starte ich risikoarm?",
        answer: "Mit einem kleinen, klar definierten Einstiegsprojekt: Ein UX-Audit (bei mir €2.500–5.000, ein bis zwei Wochen) zeigt Arbeitsweise, Kommunikationsstil und Qualität, bevor Sie ein großes Redesign beauftragen. Gute Freelancer rechnen die Audit-Kosten bei Folgeprojekten teilweise an.",
    },
];

/* ============ SEO / JSON-LD ============ */

const pageTitle =
    "Freelancer oder Agentur für UX & Webdesign? Ehrlicher Vergleich 2026";
const pageDescription =
    "Freelancer oder Agentur? Der ehrliche Vergleich für UX- und Webdesign-Projekte 2026: Kosten (60–120 € vs. 100–200 €/h), Geschwindigkeit, Risiken – und wann welche Wahl die richtige ist.";
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
            "@type": "Article",
            "@id": `${PAGE_URL}#article`,
            headline:
                "UX/Webdesign: Freelancer oder Agentur? Der ehrliche Vergleich 2026",
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
                    name: "Freelancer oder Agentur?",
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
