<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <!-- ============================================================
             STICKY NAVIGATION
             ============================================================ -->
        <nav
            aria-label="Hauptnavigation"
            class="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
        >
            <div
                class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8"
            >
                <a
                    href="#hero"
                    class="flex items-center gap-2 font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    <span
                        class="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500"
                        aria-hidden="true"
                    ></span>
                    Pukalani&nbsp;Studio
                </a>

                <ul class="hidden items-center gap-6 text-sm font-medium md:flex">
                    <li>
                        <a
                            href="#leistungen"
                            class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                            >Leistungen</a
                        >
                    </li>
                    <li>
                        <a
                            href="#referenzen"
                            class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                            >Referenzen</a
                        >
                    </li>
                    <li>
                        <a
                            href="#ueber-mich"
                            class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                            >Über mich</a
                        >
                    </li>
                    <li>
                        <a
                            href="#faq"
                            class="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                            >FAQ</a
                        >
                    </li>
                </ul>

                <a
                    :href="calLink"
                    target="_blank"
                    rel="noopener nofollow"
                    class="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                    Erstgespräch buchen
                </a>
            </div>
        </nav>

        <!-- ============================================================
             HERO
             ============================================================ -->
        <header id="hero" role="banner" aria-labelledby="hero-title">
            <div
                class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24"
            >
                <div>
                    <p
                        class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                    >
                        <span
                            class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                            aria-hidden="true"
                        ></span>
                        Verfügbar für neue Projekte · UX-Audits laufend
                    </p>

                    <p
                        class="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400"
                    >
                        David Schubert · Pukalani Studio · Remote für DACH
                    </p>

                    <h1
                        id="hero-title"
                        class="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
                    >
                        UI/UX Designer &amp; Web Developer für
                        <span
                            class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400"
                            >SaaS, Dashboards &amp; Corporate Websites</span
                        >
                    </h1>

                    <p
                        id="hero-answer"
                        class="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        Ich bin David Schubert, Freelance Senior UI/UX Designer und
                        Web Developer mit über 25 Jahren Erfahrung. Unter der Marke
                        Pukalani Studio gestalte und entwickle ich SaaS-Dashboards,
                        Corporate Websites und Design Systems – remote für Teams in
                        Deutschland, Österreich und der Schweiz. Design und Code aus
                        einer Hand, zu festen Projektpreisen.
                    </p>

                    <ul
                        class="mt-6 flex flex-wrap gap-2"
                        aria-label="Wichtigste Fakten"
                    >
                        <li
                            v-for="badge in trustBadges"
                            :key="badge"
                            class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        >
                            {{ badge }}
                        </li>
                    </ul>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a
                            :href="calLink"
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
                            Leistungen &amp; Preise
                        </a>
                    </div>
                </div>

                <figure class="relative">
                    <img
                        src="/images/fable/hero-dashboard.svg"
                        alt="Schematische Darstellung eines SaaS-Dashboards mit Kennzahlen-Karten, Liniendiagramm und Balkendiagramm im Design-Stil von Pukalani Studio"
                        width="1280"
                        height="720"
                        loading="eager"
                        fetchpriority="high"
                        class="w-full rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-800"
                    />
                    <figcaption class="sr-only">
                        Beispielhaftes SaaS-Dashboard-Design von Pukalani Studio
                    </figcaption>
                </figure>
            </div>
        </header>

        <main id="main-content" role="main" tabindex="-1">
            <!-- ============================================================
                 AUF EINEN BLICK (Key Facts / GEO-Entity-Block)
                 ============================================================ -->
            <section
                id="ueberblick"
                aria-labelledby="ueberblick-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
                    <h2
                        id="ueberblick-title"
                        class="text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Auf einen Blick
                    </h2>
                    <p class="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
                        Die wichtigsten Fakten zu David Schubert und Pukalani
                        Studio – kompakt zusammengefasst.
                    </p>

                    <dl
                        class="mt-8 grid gap-x-8 gap-y-5 rounded-2xl border border-gray-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-700 dark:bg-gray-950"
                    >
                        <div v-for="fact in keyFacts" :key="fact.label">
                            <dt
                                class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400"
                            >
                                {{ fact.label }}
                            </dt>
                            <dd class="mt-1 text-gray-800 dark:text-gray-200">
                                {{ fact.value }}
                            </dd>
                        </div>
                    </dl>

                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Zuletzt aktualisiert: {{ lastUpdatedHuman }}
                    </p>
                </div>
            </section>

            <!-- ============================================================
                 LEISTUNGEN & PREISE
                 ============================================================ -->
            <section
                id="leistungen"
                aria-labelledby="leistungen-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="leistungen-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Leistungen &amp; Preise: UX-Audit, Landingpage, Corporate
                        Website, SaaS-Design
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Pukalani Studio bietet vier klar definierte Leistungspakete
                        mit festen Projektpreisen – vom UX-Audit ab €2.500 bis zum
                        kompletten SaaS-Produkt-Design ab €25.000. Jedes Paket
                        enthält definierte Ergebnisse, einen fixen Zeitrahmen und
                        einen direkten Senior-Ansprechpartner.
                        <a
                            href="https://www.nngroup.com/articles/"
                            target="_blank"
                            rel="noopener external"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >Gute UX zahlt messbar auf Conversion und Umsatz ein
                            (Nielsen Norman Group)</a
                        >.
                    </p>

                    <div class="mt-10 grid gap-6 md:grid-cols-2">
                        <article
                            v-for="service in services"
                            :key="service.id"
                            :id="service.id"
                            class="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="text-xl font-semibold">
                                {{ service.title }}
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">
                                {{ service.description }}
                            </p>

                            <ul class="mt-4 space-y-1.5">
                                <li
                                    v-for="item in service.deliverables"
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

                            <p
                                class="mt-4 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                            >
                                {{ service.result }}
                            </p>

                            <div
                                class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800"
                            >
                                <div>
                                    <p class="font-bold">
                                        {{ service.price }}
                                    </p>
                                    <p
                                        class="text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        {{ service.duration }} · Festpreis
                                    </p>
                                </div>
                                <a
                                    href="#kontakt"
                                    class="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
                                    :aria-label="`${service.title} anfragen`"
                                >
                                    Anfragen →
                                </a>
                            </div>
                        </article>
                    </div>

                    <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        Alle Preise netto, als Festpreis nach Value-Based Pricing –
                        Sie zahlen für Ergebnisse, nicht für Stunden. Zusätzlich
                        buchbar: Design-Sprint-Moderation, WCAG-Audits sowie
                        KI-Workshops für Teams.
                    </p>
                </div>
            </section>

            <!-- ============================================================
                 PROZESS
                 ============================================================ -->
            <section
                id="prozess"
                aria-labelledby="prozess-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="prozess-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Prozess: In 6 Schritten von der Analyse zum Launch
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Jedes Projekt folgt einem bewährten Ablauf in sechs
                        Schritten – von Discovery über UX-Konzept und UI-Design bis
                        zu Entwicklung, Launch und Optimierung. Jede Phase ist auch
                        einzeln buchbar und endet mit einem konkreten,
                        dokumentierten Ergebnis.
                    </p>

                    <ol class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <li
                            v-for="(step, index) in processSteps"
                            :key="step.title"
                            class="relative rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-950"
                        >
                            <span
                                class="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-sm font-bold text-white"
                                aria-hidden="true"
                                >{{ index + 1 }}</span
                            >
                            <h3 class="mt-3 font-semibold">{{ step.title }}</h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                {{ step.description }}
                            </p>
                            <p
                                class="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400"
                            >
                                {{ step.duration }}
                            </p>
                        </li>
                    </ol>
                </div>
            </section>

            <!-- ============================================================
                 REFERENZEN / CASE STUDIES
                 ============================================================ -->
            <section
                id="referenzen"
                aria-labelledby="referenzen-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="referenzen-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Referenzen: Case Studies aus SaaS, E-Commerce &amp;
                        Corporate
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Ausgewählte Projekte mit messbaren Ergebnissen – von +43 %
                        Feature-Adoption in einem SaaS-Dashboard bis +73 %
                        Conversion nach einem Checkout-Redesign. Aus
                        Vertraulichkeitsgründen anonymisiert; Details und weitere
                        Referenzen gern im persönlichen Gespräch.
                    </p>

                    <div class="mt-10 grid gap-6 lg:grid-cols-2">
                        <article
                            v-for="project in caseStudies"
                            :key="project.title"
                            class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                        >
                            <img
                                :src="project.image"
                                :alt="project.alt"
                                width="1280"
                                height="720"
                                loading="lazy"
                                class="aspect-video w-full object-cover"
                            />
                            <div class="p-6">
                                <ul
                                    class="flex flex-wrap gap-2"
                                    aria-label="Projektkategorien"
                                >
                                    <li
                                        v-for="tag in project.tags"
                                        :key="tag"
                                        class="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                    >
                                        {{ tag }}
                                    </li>
                                </ul>
                                <h3 class="mt-3 text-xl font-semibold">
                                    {{ project.title }}
                                </h3>
                                <p
                                    class="mt-2 text-sm text-gray-600 dark:text-gray-300"
                                >
                                    <strong class="font-semibold"
                                        >Ausgangslage:</strong
                                    >
                                    {{ project.challenge }}
                                </p>
                                <p
                                    class="mt-1 text-sm text-gray-600 dark:text-gray-300"
                                >
                                    <strong class="font-semibold">Lösung:</strong>
                                    {{ project.solution }}
                                </p>
                                <ul
                                    class="mt-4 flex flex-wrap gap-2"
                                    aria-label="Ergebnisse"
                                >
                                    <li
                                        v-for="result in project.results"
                                        :key="result"
                                        class="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                                    >
                                        {{ result }}
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    <figure
                        class="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900"
                    >
                        <blockquote
                            class="text-xl font-medium leading-relaxed text-gray-800 dark:text-gray-100"
                        >
                            „+73 % Conversion in sechs Wochen. David verbindet
                            UX-Design, Technik und Business-KPIs – genau das, was
                            wir brauchten."
                        </blockquote>
                        <figcaption
                            class="mt-4 text-sm text-gray-500 dark:text-gray-400"
                        >
                            — Co-Founder eines SaaS-Start-ups, Berlin · Referenz
                            auf Anfrage
                        </figcaption>
                    </figure>
                </div>
            </section>

            <!-- ============================================================
                 ÜBER MICH (E-E-A-T)
                 ============================================================ -->
            <section
                id="ueber-mich"
                aria-labelledby="ueber-mich-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="ueber-mich-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Über mich: David Schubert – Design + Code seit den 1990ern
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        David Schubert ist Creative Technologist mit über 25 Jahren
                        Erfahrung an der Schnittstelle von Design, Technologie und
                        Business. Er arbeitet solo unter der Marke Pukalani Studio
                        – Sie arbeiten also immer direkt mit ihm, ohne Agentur-
                        Overhead. Sein Alleinstellungsmerkmal: Er gestaltet nicht
                        nur, er entwickelt auch.
                    </p>

                    <div class="mt-10 grid gap-10 lg:grid-cols-2">
                        <div>
                            <h3 class="text-lg font-semibold">Werdegang</h3>
                            <ol class="mt-4 space-y-4">
                                <li
                                    v-for="milestone in timeline"
                                    :key="milestone.period"
                                    class="flex gap-4"
                                >
                                    <span
                                        class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500"
                                        aria-hidden="true"
                                    ></span>
                                    <div>
                                        <p
                                            class="font-semibold text-gray-900 dark:text-white"
                                        >
                                            {{ milestone.period }}
                                        </p>
                                        <p
                                            class="text-sm text-gray-600 dark:text-gray-300"
                                        >
                                            {{ milestone.description }}
                                        </p>
                                    </div>
                                </li>
                            </ol>

                            <blockquote
                                class="mt-8 border-l-4 border-emerald-500 pl-4 text-lg font-medium italic text-gray-700 dark:text-gray-200"
                            >
                                „Gutes Design ist unsichtbar: Nutzer erreichen ihre
                                Ziele ohne Reibung. Mein Ansatz – Komplexität
                                verstehen, Einfachheit gestalten."
                            </blockquote>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold">
                                Werkzeuge &amp; Methoden
                            </h3>
                            <div class="mt-4 space-y-5">
                                <div
                                    v-for="group in stackGroups"
                                    :key="group.title"
                                >
                                    <p
                                        class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400"
                                    >
                                        {{ group.title }}
                                    </p>
                                    <ul class="mt-2 flex flex-wrap gap-2">
                                        <li
                                            v-for="tool in group.items"
                                            :key="tool"
                                            class="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
                                        >
                                            {{ tool }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p
                                class="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200"
                            >
                                <strong class="font-semibold">Außerdem:</strong>
                                Als KI-Berater und -Trainer unterstütze ich Teams
                                und Entscheider:innen dabei, KI-Tools sinnvoll im
                                Arbeitsalltag einzusetzen – praxisnah, ohne
                                Buzzword-Bingo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ============================================================
                 REMOTE & DACH
                 ============================================================ -->
            <section
                id="remote-dach"
                aria-labelledby="remote-dach-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="remote-dach-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Remote für DACH: Zusammenarbeit über Zeitzonen hinweg
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Pukalani Studio arbeitet remote-first von Maui (Hawaii) aus
                        für Kunden in Deutschland, Österreich und der Schweiz –
                        auf Deutsch oder Englisch. Workshops und Kickoffs vor Ort,
                        etwa in Berlin, München, Zürich oder Wien, sind nach
                        Vereinbarung möglich.
                    </p>

                    <div class="mt-10 grid gap-6 md:grid-cols-3">
                        <div
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="font-semibold">
                                🌙 Zeitverschiebung als Vorteil
                            </h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                Feedback, das Sie am Ende Ihres Arbeitstags senden,
                                wird über Nacht umgesetzt – die Ergebnisse liegen
                                fertig vor, wenn Ihr nächster Arbeitstag beginnt.
                            </p>
                        </div>
                        <div
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="font-semibold">📞 Feste Overlap-Zeiten</h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                Video-Calls finden am DACH-Abend statt (Hawaii-
                                Morgen). Der Rest läuft asynchron über Slack,
                                Notion oder Linear – dokumentiert und nachvollziehbar.
                            </p>
                        </div>
                        <div
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="font-semibold">📍 Vor Ort in DACH</h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                Für Kickoffs, Design Sprints und Workshops komme
                                ich nach Vereinbarung zu Ihnen – u. a. nach Berlin,
                                Hamburg, München, Wien, Zürich oder Basel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ============================================================
                 FAQ
                 ============================================================ -->
            <section
                id="faq"
                aria-labelledby="faq-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-4xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="faq-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        FAQ: Kosten, Ablauf, Remote-Zusammenarbeit
                    </h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Antworten auf die häufigsten Fragen zu Preisen,
                        Projektablauf und Zusammenarbeit mit Pukalani Studio.
                    </p>

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

            <!-- ============================================================
                 KONTAKT / CTA
                 ============================================================ -->
            <section
                id="kontakt"
                aria-labelledby="kontakt-title"
                class="border-t border-gray-200 bg-gradient-to-br from-emerald-600 to-blue-700 text-white dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="kontakt-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Kontakt: Kostenloses Erstgespräch buchen
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg leading-relaxed text-emerald-50">
                        Der schnellste Weg: Buchen Sie direkt ein kostenloses,
                        30-minütiges Erstgespräch – oder schreiben Sie eine E-Mail.
                        Sie erhalten innerhalb von 24 Stunden eine Antwort und nach
                        dem Gespräch innerhalb von 48 Stunden ein Festpreis-Angebot.
                    </p>

                    <div class="mt-10 grid gap-6 md:grid-cols-3">
                        <a
                            :href="calLink"
                            target="_blank"
                            rel="noopener nofollow"
                            class="rounded-2xl bg-white/10 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
                        >
                            <h3 class="text-lg font-semibold">📅 Termin buchen</h3>
                            <p class="mt-2 text-sm text-emerald-50">
                                30 Minuten, kostenlos &amp; unverbindlich – per
                                Zoom, Teams oder Meet.
                            </p>
                            <p class="mt-4 font-semibold underline underline-offset-4">
                                cal.com/davidschubert →
                            </p>
                        </a>

                        <a
                            :href="`mailto:${email}`"
                            class="rounded-2xl bg-white/10 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
                        >
                            <h3 class="text-lg font-semibold">✉️ E-Mail senden</h3>
                            <p class="mt-2 text-sm text-emerald-50">
                                Projektidee, Zeitrahmen, Budget – ich antworte
                                innerhalb von 24 Stunden.
                            </p>
                            <p class="mt-4 font-semibold underline underline-offset-4">
                                {{ email }} →
                            </p>
                        </a>

                        <a
                            :href="`tel:${phoneTel}`"
                            class="rounded-2xl bg-white/10 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
                        >
                            <h3 class="text-lg font-semibold">📞 Anrufen</h3>
                            <p class="mt-2 text-sm text-emerald-50">
                                Am besten am DACH-Abend erreichbar
                                (Hawaii-Zeitzone, UTC−10).
                            </p>
                            <p class="mt-4 font-semibold underline underline-offset-4">
                                {{ phoneHuman }} →
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <!-- ============================================================
             FOOTER
             ============================================================ -->
        <footer
            id="footer"
            role="contentinfo"
            class="bg-gray-950 text-gray-300"
        >
            <div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
                <div class="grid gap-10 md:grid-cols-4">
                    <div>
                        <p class="font-bold text-white">Pukalani Studio</p>
                        <p class="mt-3 text-sm leading-relaxed text-gray-400">
                            David Schubert – Freelance Senior UI/UX Designer &amp;
                            Web Developer. SaaS-Dashboards, Corporate Websites und
                            Design Systems, remote für die DACH-Region.
                        </p>
                        <ul class="mt-4 flex gap-4" aria-label="Profile">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/davidschubert"
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
                                    href="https://www.behance.net/davidschubert"
                                    target="_blank"
                                    rel="noopener me"
                                    class="text-sm underline-offset-4 hover:text-white hover:underline"
                                    >Behance</a
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
                                <a
                                    href="#ux-audit"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >UX-Audit &amp; Conversion-Analyse</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#landingpage-cro"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Landingpage &amp; CRO</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#corporate-website"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Corporate Website</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#saas-design"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >SaaS Produkt- &amp; Dashboard-Design</a
                                >
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Footer: Seiten-Navigation">
                        <p
                            class="text-sm font-semibold uppercase tracking-wider text-gray-500"
                        >
                            Navigation
                        </p>
                        <ul class="mt-3 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#ueberblick"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Auf einen Blick</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#prozess"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Prozess</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#referenzen"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Referenzen</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >FAQ</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#kontakt"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >Kontakt</a
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
                                    :href="`tel:${phoneTel}`"
                                    class="hover:text-white hover:underline underline-offset-4"
                                    >{{ phoneHuman }}</a
                                >
                            </li>
                            <li>
                                <a
                                    :href="calLink"
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
                        · Zuletzt aktualisiert: {{ lastUpdatedHuman }}
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
/* ============================================================
   DATEN — Single Source of Truth für Content UND Structured Data.
   Das FAQ-JSON-LD wird aus demselben Array generiert wie das
   sichtbare FAQ → garantierte Parität (Google-Anforderung).
   ============================================================ */

const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/fable/`;
const LAST_UPDATED = "2026-07-14";
const lastUpdatedHuman = "14. Juli 2026";

const email = atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==");
const phoneHuman = "+1 808 866 0676";
const phoneTel = "+18088660676";
const calLink = "https://cal.com/davidschubert/30min";

const socialProfiles = [
    "https://www.linkedin.com/in/davidschubert",
    "https://github.com/davidschubert",
    "https://www.behance.net/davidschubert",
];

const trustBadges = [
    "25+ Jahre Erfahrung",
    "Design + Code aus einer Hand",
    "Festpreise statt Tagessätze",
    "WCAG 2.1 AA",
    "Antwort in 24 h",
];

const keyFacts = [
    { label: "Name", value: "David Schubert" },
    {
        label: "Rolle",
        value: "Freelance Senior UI/UX Designer & Web Developer",
    },
    {
        label: "Studio",
        value: "Pukalani Studio (Solo-Studio – Sie arbeiten direkt mit mir)",
    },
    {
        label: "Schwerpunkte",
        value: "SaaS- & Dashboard-UX, Corporate Websites, Design Systems, Landingpages & CRO",
    },
    {
        label: "Tech-Stack",
        value: "Figma, Nuxt 4 (Vue 3), TypeScript, Tailwind CSS 4, Appwrite",
    },
    {
        label: "Region",
        value: "Remote für DACH (DE, AT, CH) · Sitz: Pukalani, Maui – Hawaii",
    },
    { label: "Sprachen", value: "Deutsch (Muttersprache), Englisch" },
    {
        label: "Preise",
        value: "Festpreise: €2.500 (UX-Audit) bis €75.000+ (SaaS-Produkt)",
    },
    {
        label: "Kontakt",
        value: "mail@davidschubert.com · cal.com/davidschubert/30min",
    },
];

const services = [
    {
        id: "ux-audit",
        title: "UX-Audit & Conversion-Analyse",
        description:
            "Der schnellste Einstieg: Ich analysiere Ihre Website oder App strukturiert und liefere eine priorisierte Maßnahmenliste mit Quick Wins.",
        deliverables: [
            "Heuristische UX-Evaluation & Conversion-Analyse",
            "Performance-Check (Core Web Vitals)",
            "WCAG-2.1-Accessibility-Prüfung",
            "Priorisierte Maßnahmenliste mit Quick Wins",
        ],
        result: "Referenzprojekt: +73 % Conversion nach Umsetzung",
        price: "€2.500 – €5.000",
        duration: "1–2 Wochen",
        schemaDescription:
            "Strukturierte Analyse von Website oder App: heuristische Evaluation, Conversion-Analyse, Core-Web-Vitals-Check und WCAG-Accessibility-Prüfung mit priorisierter Maßnahmenliste.",
        minPrice: 2500,
        maxPrice: 5000,
    },
    {
        id: "landingpage-cro",
        title: "Landingpage & CRO",
        description:
            "Landingpages mit Conversion-Fokus: Nutzerpsychologie, Social Proof und technische Performance – gestaltet und auf Wunsch direkt entwickelt.",
        deliverables: [
            "Conversion-orientiertes UX/UI-Design",
            "A/B-Test-Varianten & UX Writing",
            "Mobile-First, LCP unter 2,5 s",
            "Umsetzung in Nuxt oder Handoff an Ihr Team",
        ],
        result: "Referenzprojekt: Ø +73 % Conversion nach Redesign",
        price: "€5.000 – €12.000",
        duration: "2–3 Wochen",
        schemaDescription:
            "Conversion-optimierte Landingpage: UX/UI-Design, A/B-Test-Varianten, Mobile-First-Umsetzung mit LCP unter 2,5 Sekunden – als Design oder komplett entwickelt.",
        minPrice: 5000,
        maxPrice: 12000,
    },
    {
        id: "corporate-website",
        title: "Corporate Website",
        description:
            "Professionelle Unternehmensauftritte: Content-Strategie, Informationsarchitektur, barrierefreies Design und SEO-fähige Umsetzung.",
        deliverables: [
            "Content-Strategie & Informationsarchitektur",
            "Responsive Design, WCAG 2.1 AA",
            "SEO- & Performance-Optimierung (PageSpeed 90+)",
            "Umsetzung in Nuxt oder developer-ready Figma-Files",
        ],
        result: "Referenzprojekt: +156 % organischer Traffic",
        price: "€15.000 – €35.000",
        duration: "6–12 Wochen",
        schemaDescription:
            "Corporate Website von Content-Strategie über barrierefreies Design (WCAG 2.1 AA) bis zur SEO- und performance-optimierten Umsetzung.",
        minPrice: 15000,
        maxPrice: 35000,
    },
    {
        id: "saas-design",
        title: "SaaS Produkt- & Dashboard-Design",
        description:
            "Komplexe B2B-Software verständlich machen: User Research, Informationsarchitektur, Dashboard-Design und skalierbare Design Systems.",
        deliverables: [
            "User Research, Personas & User Journeys",
            "Informationsarchitektur & Dashboard-UX",
            "Component Library & Design Tokens in Figma",
            "Developer Handoff mit Dokumentation",
        ],
        result: "Referenzprojekt: +43 % Feature-Adoption, −67 % Support",
        price: "ab €25.000 (bis €75.000+)",
        duration: "ab 8 Wochen",
        schemaDescription:
            "SaaS-Produkt- und Dashboard-Design: User Research, Informationsarchitektur, UI-Design und skalierbares Design System mit Component Library und Design Tokens.",
        minPrice: 25000,
        maxPrice: 75000,
    },
];

const processSteps = [
    {
        title: "Discovery & Zieldefinition",
        description:
            "Ziele, Stakeholder, KPIs und Nutzergruppen werden gemeinsam geschärft – als belastbare Basis für alle Entscheidungen.",
        duration: "3–5 Tage",
    },
    {
        title: "Research & UX-Konzept",
        description:
            "User Research, Informationsarchitektur und Flow-Logik: Das Konzept entsteht datenbasiert, nicht nach Bauchgefühl.",
        duration: "1–2 Wochen",
    },
    {
        title: "UI-Design & Prototyping",
        description:
            "Visual Language, Komponenten und klickbare Prototypen in Figma – früh testbar mit echten Nutzern.",
        duration: "2–4 Wochen",
    },
    {
        title: "Design System & Dokumentation",
        description:
            "Design Tokens, Component Library und Guidelines machen das Design skalierbar und konsistent.",
        duration: "1–2 Wochen",
    },
    {
        title: "Entwicklung oder Handoff",
        description:
            "Ich entwickle selbst in Nuxt 4 und TypeScript – oder übergebe developer-ready Figma-Files an Ihr Team.",
        duration: "je nach Umfang",
    },
    {
        title: "Launch, Messung & Optimierung",
        description:
            "Analytics-Setup, A/B-Tests und kontinuierliche Verbesserung – Design endet nicht beim Launch.",
        duration: "fortlaufend",
    },
];

const caseStudies = [
    {
        title: "SaaS Analytics Dashboard",
        image: "/images/fable/case-saas-dashboard.svg",
        alt: "Schematische Darstellung des Analytics-Dashboards: Kennzahlen-Karten, Liniendiagramm und Ringdiagramm im Dark Mode",
        tags: ["B2B SaaS", "Dashboard", "Design System"],
        challenge:
            "Komplexe Datenvisualisierung für 50.000+ Nutzer, hohe Supportlast durch unverständliche Features.",
        solution:
            "IA-Redesign, fokussiertes Dashboard und kontextuelle Feature-Discovery auf Basis einer neuen Component Library.",
        results: [
            "+43 % Feature-Adoption",
            "−67 % Support-Tickets",
            "4,8/5 Nutzerzufriedenheit",
        ],
    },
    {
        title: "E-Commerce Checkout-Optimierung",
        image: "/images/fable/case-ecommerce-checkout.svg",
        alt: "Schematische Darstellung des mobilen Checkout-Flows in drei Schritten: Warenkorb, Daten und Zahlung, Bestätigung",
        tags: ["E-Commerce", "CRO", "Mobile"],
        challenge:
            "Hohe Kaufabbruchrate im Warenkorb und schwache Mobile Conversion.",
        solution:
            "Checkout von sieben auf drei Schritte reduziert, Formular-UX verbessert, Trust-Elemente ergänzt.",
        results: ["+73 % Conversion", "−41 % Kaufabbrüche", "LCP 1,8 s"],
    },
    {
        title: "Corporate Website Relaunch",
        image: "/images/fable/case-corporate-website.svg",
        alt: "Schematische Darstellung der Corporate Website auf Desktop und Smartphone mit Hero-Bereich, Feature-Karten und WCAG-Badge",
        tags: ["Corporate", "WCAG 2.1 AA", "SEO"],
        challenge:
            "Veraltetes Design, mangelnde Barrierefreiheit, kaum organische Leads.",
        solution:
            "Mobile-First-Relaunch nach WCAG 2.1 AA mit SEO-Optimierung und schnellen Ladezeiten.",
        results: [
            "+156 % organischer Traffic",
            "+84 % Anfragen",
            "PageSpeed 94",
        ],
    },
    {
        title: "B2B SaaS MVP & Design System",
        image: "/images/fable/case-design-system.svg",
        alt: "Schematische Darstellung der Design-System-Bibliothek mit Farb-Tokens, Typografie, Buttons und Formular-Komponenten",
        tags: ["Start-up", "MVP", "Figma Library"],
        challenge:
            "Kein Design-Team, zwölf Wochen bis zum Investoren-Pitch.",
        solution:
            "Komplettes Design System, User Testing und developer-ready Figma Library im Sprint-Verfahren.",
        results: [
            "Launch in 12 Wochen",
            "500 Beta-User in Woche 1",
            "Series A erfolgreich",
        ],
    },
];

const timeline = [
    {
        period: "1990er",
        description:
            "Erste Webdesign-Projekte in Agenturen – von Anfang an an der Schnittstelle von Gestaltung und Technik.",
    },
    {
        period: "2010er",
        description:
            "Fokus auf Mobile- und Responsive-Design, Aufbau von Frontend-Expertise (HTML, CSS, JavaScript).",
    },
    {
        period: "2015+",
        description:
            "Spezialisierung auf SaaS-Produkte, Dashboards und Design Systems – Figma, Design Tokens, Component Libraries.",
    },
    {
        period: "Heute",
        description:
            "Freelance Solo-Studio Pukalani Studio: UI/UX Design und Nuxt-Entwicklung, remote für DACH – plus KI-Beratung und -Training.",
    },
];

const stackGroups = [
    {
        title: "Design",
        items: ["Figma", "FigJam", "Miro", "Design Tokens", "Prototyping"],
    },
    {
        title: "Entwicklung",
        items: [
            "Nuxt 4 / Vue 3",
            "TypeScript",
            "Tailwind CSS 4",
            "Appwrite",
            "GSAP & Lenis",
        ],
    },
    {
        title: "Methoden & Standards",
        items: [
            "WCAG 2.1 AA",
            "Core Web Vitals",
            "Design Sprints",
            "A/B-Testing & CRO",
            "Value-Based Pricing",
        ],
    },
];

/* FAQ — Antworten als Plain Text; identischer Inhalt landet im JSON-LD. */
const faqs = [
    {
        question: "Was kostet ein UX/UI-Projekt bei Pukalani Studio?",
        answer: "Feste Projektpreise statt Stundensätze: UX-Audit €2.500–5.000, Landingpage inkl. CRO €5.000–12.000, Corporate Website €15.000–35.000, SaaS-Produkt-Design €25.000–75.000+. Den genauen Festpreis erhalten Sie nach einem kostenlosen 30-minütigen Erstgespräch – inklusive Umfang, Zeitplan und definierten Ergebnissen.",
    },
    {
        question: "Warum Festpreise statt Tagessatz?",
        answer: "Value-Based Pricing: Sie zahlen für ein definiertes Ergebnis, nicht für Stunden. Das macht Budgets planbar, verhindert Überraschungen und belohnt effizientes Arbeiten. Umfang, Ergebnisse und Preis werden vor Projektstart schriftlich fixiert.",
    },
    {
        question: "Freelancer oder Agentur – was passt besser?",
        answer: "Bei mir arbeiten Sie direkt mit einem Senior – ohne Projektleitungs-Overhead und ohne dass Juniors die Arbeit machen. Das ist in der Regel 30–50 % günstiger als eine Agentur und deutlich schneller in den Entscheidungen. Für Full-Service-Anforderungen ziehe ich bei Bedarf Partner aus meinem Netzwerk hinzu.",
    },
    {
        question: "Wie läuft ein Projekt ab?",
        answer: "In sechs Schritten: 1. Discovery & Zieldefinition, 2. Research & UX-Konzept, 3. UI-Design & Prototyping, 4. Design System & Dokumentation, 5. Entwicklung oder Developer-Handoff, 6. Launch, Messung & Optimierung. Jede Phase ist auch einzeln buchbar und endet mit einem dokumentierten Ergebnis.",
    },
    {
        question: "Wie lange dauert ein typisches Projekt?",
        answer: "UX-Audit: 1–2 Wochen. Landingpage: 2–3 Wochen. Corporate Website: 6–12 Wochen. SaaS-Feature: 3–6 Wochen. Komplettes Produkt-Redesign: 3–6 Monate. Express-Slots sind nach Absprache möglich.",
    },
    {
        question:
            "Wie funktioniert Remote-Arbeit von Hawaii aus für die DACH-Region?",
        answer: "Sehr gut – die Zeitverschiebung ist ein Vorteil: Feedback, das Sie am Ende Ihres Arbeitstags senden, wird über Nacht umgesetzt und liegt am nächsten Morgen fertig vor. Video-Calls finden am DACH-Abend statt (Hawaii-Morgen). Die restliche Kommunikation läuft asynchron über Slack, Notion oder Linear – auf Deutsch oder Englisch. Workshops vor Ort in DACH sind nach Vereinbarung möglich.",
    },
    {
        question: "Übernehmen Sie auch die Entwicklung?",
        answer: "Ja. Als Designer und Web Developer setze ich Websites und Web-Apps selbst um – mit Nuxt 4 (Vue 3), TypeScript, Tailwind CSS 4 und Appwrite. Alternativ übergebe ich developer-ready Figma-Files mit Design Tokens und Dokumentation an Ihr Entwicklungsteam.",
    },
    {
        question: "Machen Sie auch App-Design für iOS und Android?",
        answer: "Ja – natives App-Design für iOS und Android, Progressive Web Apps und Design Systems für Apps. Die Entwicklung nativer Apps erfolgt bei Bedarf über mein Partnernetzwerk.",
    },
    {
        question: "Was ist ein UX-Audit und was bringt er?",
        answer: "Ein UX-Audit ist eine strukturierte Analyse Ihrer Website oder App: heuristische Evaluation, Conversion-Analyse, Performance-Check (Core Web Vitals) und WCAG-Accessibility-Prüfung. Sie erhalten in 1–2 Wochen eine priorisierte Maßnahmenliste mit Quick Wins – der schnellste und günstigste Einstieg in eine Zusammenarbeit (€2.500–5.000).",
    },
    {
        question: "Bieten Sie auch KI-Beratung an?",
        answer: "Ja. Als KI-Berater und -Trainer helfe ich Teams und Entscheider:innen, KI-Tools sinnvoll im Arbeitsalltag einzusetzen – praxisnah und ohne Buzzwords. Formate: Workshops, Team-Trainings und individuelle Beratung.",
    },
    {
        question: "Wie schnell können wir starten?",
        answer: "Kurzfristig: Das Erstgespräch ist meist innerhalb weniger Tage direkt über cal.com buchbar, das Festpreis-Angebot folgt innerhalb von 48 Stunden nach dem Gespräch. UX-Audits sind laufend möglich. Auf E-Mails antworte ich innerhalb von 24 Stunden.",
    },
];

/* ============================================================
   SEO / GEO — Meta, Canonical, JSON-LD (@graph aus obigen Daten)
   ============================================================ */

const pageTitle =
    "UI/UX Designer & Web Developer für DACH | David Schubert";
const pageDescription =
    "Freelance Senior UI/UX Designer & Web Developer für DACH: SaaS-Dashboards, Corporate Websites, Design Systems. Design + Code aus einer Hand, Festpreise ab €2.500.";
const ogImage = `${SITE_URL}/images/fable/og-pukalani-studio.png`;

const personId = `${SITE_URL}/#david-schubert`;
const orgId = `${SITE_URL}/#pukalani-studio`;
const websiteId = `${SITE_URL}/#website`;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": personId,
            name: "David Schubert",
            jobTitle: "Senior UI/UX Designer & Web Developer",
            description:
                "Freelance Senior UI/UX Designer und Web Developer mit über 25 Jahren Erfahrung. Gestaltet und entwickelt SaaS-Dashboards, Corporate Websites und Design Systems – remote für die DACH-Region.",
            url: PAGE_URL,
            email: `mailto:${email}`,
            telephone: phoneTel,
            sameAs: socialProfiles,
            worksFor: { "@id": orgId },
            knowsLanguage: ["de", "en"],
            knowsAbout: [
                "UI/UX Design",
                "SaaS Dashboard Design",
                "Corporate Webdesign",
                "Design Systems",
                "Conversion-Optimierung (CRO)",
                "Barrierefreiheit (WCAG 2.1 AA)",
                "User Research",
                "Informationsarchitektur",
                "Nuxt & Vue Entwicklung",
                "Figma",
            ],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Pukalani",
                addressRegion: "HI",
                addressCountry: "US",
            },
        },
        {
            "@type": "Organization",
            "@id": orgId,
            name: "Pukalani Studio",
            url: SITE_URL,
            logo: `${SITE_URL}/icon.svg`,
            founder: { "@id": personId },
            sameAs: socialProfiles,
        },
        {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#service`,
            name: "Pukalani Studio – UI/UX Design & Web Development",
            description:
                "UI/UX Design und Web-Entwicklung für SaaS, Dashboards, Corporate Websites und Landingpages. Remote für Deutschland, Österreich und die Schweiz.",
            url: PAGE_URL,
            image: ogImage,
            priceRange: "€2.500 – €75.000+",
            telephone: phoneTel,
            email: `mailto:${email}`,
            provider: { "@id": personId },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Pukalani",
                addressRegion: "HI",
                addressCountry: "US",
            },
            areaServed: [
                { "@type": "Country", name: "Deutschland" },
                { "@type": "Country", name: "Österreich" },
                { "@type": "Country", name: "Schweiz" },
            ],
            availableLanguage: ["Deutsch", "Englisch"],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Leistungen",
                itemListElement: services.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: service.title,
                        description: service.schemaDescription,
                        url: `${PAGE_URL}#${service.id}`,
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        minPrice: service.minPrice,
                        maxPrice: service.maxPrice,
                        priceCurrency: "EUR",
                    },
                })),
            },
        },
        {
            "@type": "WebSite",
            "@id": websiteId,
            url: SITE_URL,
            name: "Pukalani Studio",
            publisher: { "@id": orgId },
            inLanguage: "de",
        },
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: pageTitle,
            description: pageDescription,
            isPartOf: { "@id": websiteId },
            about: { "@id": personId },
            dateModified: LAST_UPDATED,
            inLanguage: "de",
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: ogImage,
                width: 1200,
                height: 630,
            },
            speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["#hero-answer", "#ueberblick"],
            },
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
                    item: `${SITE_URL}/`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "UI/UX Designer & Web Developer für DACH",
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
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
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
        {
            name: "theme-color",
            media: "(prefers-color-scheme: light)",
            content: "#10b981",
        },
        {
            name: "theme-color",
            media: "(prefers-color-scheme: dark)",
            content: "#022c22",
        },
        /* Open Graph */
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Pukalani Studio" },
        { property: "og:locale", content: "de_DE" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:url", content: PAGE_URL },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
            property: "og:image:alt",
            content:
                "Pukalani Studio – UI/UX Design & Web Development für DACH: David Schubert, Senior Designer & Developer, mit SaaS-Dashboard-Mockup",
        },
        /* Twitter */
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:site", content: "@davidschubert" },
        { name: "twitter:creator", content: "@davidschubert" },
    ],
    link: [
        { rel: "canonical", href: PAGE_URL },
        { rel: "alternate", hreflang: "de", href: PAGE_URL },
        { rel: "alternate", hreflang: "x-default", href: PAGE_URL },
    ],
    script: [
        {
            type: "application/ld+json",
            /* "<" escapen, damit kein schließendes Script-Tag im JSON möglich ist */
            innerHTML: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        },
    ],
});

/* Bewusst KEIN JS-Scroll-Reveal: Inhalte sind ohne JavaScript und in jedem
   Viewport sofort sichtbar – wichtig für Crawler, Screenshots und Robustheit.
   Micro-Interactions laufen rein über CSS (hover/transition). */
</script>
