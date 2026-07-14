<template>
    <div
        class="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100"
    >
        <!-- ============================================================
             STICKY NAVIGATION (gemeinsame Komponente)
             ============================================================ -->
        <PkNav
            :links="[
                { label: 'Leistungen', href: '#leistungen' },
                { label: 'UX-Audit', href: '/ux-audit' },
                { label: 'Referenzen', href: '#referenzen' },
                { label: 'Wissen', href: '#wissen' },
                { label: 'FAQ', href: '#faq' },
            ]"
        />

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
                        Senior UI/UX Designer (Freelancer) für
                        <span
                            class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400"
                            >Mittelstand &amp; Agenturen</span
                        >
                    </h1>

                    <p
                        id="hero-answer"
                        class="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        Ich bin David Schubert, Senior UI/UX Designer und
                        ausgebildeter Mediengestalter mit über 25 Jahren
                        Erfahrung in Design und Werbung. Ich erarbeite mit
                        Ihnen Designkonzepte, Strategien und digitales Brand
                        Design, gestalte Websites und digitale Produkte – und
                        setze sie auf Wunsch technisch um. Remote für
                        Unternehmen und Agenturen in Deutschland, Österreich
                        und der Schweiz, zu festen Projektpreisen.
                    </p>

                    <p
                        class="mt-5 text-sm text-gray-500 dark:text-gray-400"
                    >
                        In Agentur- und Freelance-Projekten verantwortlich für
                        Konzepte und Gestaltung für Marken wie
                        <strong class="font-semibold text-gray-700 dark:text-gray-200"
                            >Astra, E&nbsp;WIE&nbsp;EINFACH, GEMA, Holsten,
                            Lamborghini, NEFF, Telekom und T-Systems</strong
                        >.
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
                 ZIELGRUPPEN
                 ============================================================ -->
            <section
                id="fuer-wen"
                aria-labelledby="fuer-wen-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="fuer-wen-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Für wen ich arbeite
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Meine Kunden sind mittelständische Unternehmen, die einen
                        erfahrenen Design-Partner ohne Agentur-Overhead suchen –
                        und Agenturen, die punktuell Senior-Verstärkung brauchen.
                        Viele kommen über Empfehlungen ehemaliger Kolleginnen und
                        Kollegen.
                    </p>

                    <div class="mt-10 grid gap-6 md:grid-cols-3">
                        <div
                            v-for="audience in audiences"
                            :key="audience.title"
                            class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <h3 class="text-lg font-semibold">
                                {{ audience.title }}
                            </h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                            >
                                {{ audience.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ============================================================
                 LEISTUNGEN & PREISE
                 ============================================================ -->
            <section
                id="leistungen"
                aria-labelledby="leistungen-title"
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="leistungen-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Leistungen &amp; Preise: von der Idee bis zur fertigen
                        Website
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Alles aus einer Hand: Designkonzept, Gestaltung,
                        technische Umsetzung und Content. Klar definierte
                        Leistungen mit festen Projektpreisen – vom UX-Audit ab
                        €2.500 bis zum kompletten Produkt-Design ab €25.000.
                        Sie wissen vor Projektstart, was Sie bekommen und was
                        es kostet.
                        <a
                            href="https://www.nngroup.com/articles/"
                            target="_blank"
                            rel="noopener external"
                            class="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                            >Gutes Design zahlt messbar auf Anfragen und Umsatz
                            ein (Nielsen Norman Group)</a
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
                                <NuxtLink
                                    :to="service.link ?? '#kontakt'"
                                    class="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
                                    :aria-label="`${service.title} anfragen`"
                                >
                                    {{ service.link ? "Details →" : "Anfragen →" }}
                                </NuxtLink>
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
                class="border-t border-gray-200 dark:border-gray-800"
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
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
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

                    <h3 class="mt-14 text-xl font-semibold">
                        Das sagen Kunden über die Zusammenarbeit
                    </h3>
                    <div class="mt-6 grid gap-6 md:grid-cols-2">
                        <figure
                            v-for="quote in testimonials"
                            :key="quote.text"
                            class="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900"
                        >
                            <blockquote
                                class="text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-100"
                            >
                                „{{ quote.text }}"
                            </blockquote>
                            <figcaption
                                class="mt-3 text-sm text-gray-500 dark:text-gray-400"
                            >
                                — {{ quote.attribution }}
                            </figcaption>
                        </figure>
                    </div>
                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Alle Stimmen aus Vertraulichkeitsgründen anonymisiert –
                        Referenzen mit Klarnamen gern auf Anfrage im
                        Erstgespräch.
                    </p>
                </div>
            </section>

            <!-- ============================================================
                 ÜBER MICH (E-E-A-T)
                 ============================================================ -->
            <section
                id="ueber-mich"
                aria-labelledby="ueber-mich-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="ueber-mich-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Über mich: vom Mediengestalter zum Creative Technologist
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        David Schubert ist Senior UI/UX Designer und Creative
                        Technologist mit über 25 Jahren Erfahrung in Design und
                        Werbung – ausgebildeter Mediengestalter, langjähriger
                        Art Director und Senior Designer in Hamburger Agenturen,
                        heute selbstständig unter der Marke Pukalani Studio.
                        Sie arbeiten immer direkt mit ihm: von der kreativen
                        Leitidee über das Design bis zur technischen Umsetzung
                        und Content-Produktion.
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
                class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
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
                 WISSEN (Hub für Guides & Spezialseiten)
                 ============================================================ -->
            <section
                id="wissen"
                aria-labelledby="wissen-title"
                class="border-t border-gray-200 dark:border-gray-800"
            >
                <div class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
                    <h2
                        id="wissen-title"
                        class="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Wissen: Preise, Entscheidungshilfen &amp; Guides
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Fundierte Antworten auf die Fragen, die vor jedem
                        Projekt stehen – mit echten Marktdaten, benannten
                        Quellen und ehrlichen Einordnungen. Alle Guides werden
                        quartalsweise aktualisiert.
                    </p>

                    <div class="mt-10 grid gap-6 md:grid-cols-2">
                        <NuxtLink
                            v-for="guide in guides"
                            :key="guide.to"
                            :to="guide.to"
                            class="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-emerald-600"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400"
                            >
                                {{ guide.kicker }}
                            </p>
                            <h3 class="mt-2 text-xl font-semibold">
                                {{ guide.title }}
                            </h3>
                            <p class="mt-2 flex-1 text-gray-600 dark:text-gray-300">
                                {{ guide.description }}
                            </p>
                            <p
                                class="mt-4 font-semibold text-emerald-700 group-hover:underline underline-offset-4 dark:text-emerald-400"
                            >
                                Lesen →
                            </p>
                        </NuxtLink>
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

        <PkFooter :last-updated="lastUpdatedHuman" />
    </div>
</template>

<script setup lang="ts">
/* ============================================================
   DATEN — Single Source of Truth für Content UND Structured Data.
   Das FAQ-JSON-LD wird aus demselben Array generiert wie das
   sichtbare FAQ → garantierte Parität (Google-Anforderung).
   ============================================================ */

const SITE_URL = "https://pukalani.studio";
const PAGE_URL = `${SITE_URL}/`;
const LAST_UPDATED = "2026-07-14";
const lastUpdatedHuman = "14. Juli 2026";

const email = atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==");
const phoneHuman = "+1 808 866 0676";
const phoneTel = "+18088660676";
const calLink = "https://cal.com/davidschubert/30min";

const socialProfiles = [
    "https://www.linkedin.com/in/davidschubert-uiux/",
    "https://github.com/davidschubert",
    "https://www.instagram.com/davidschubert/",
];

const trustBadges = [
    "25+ Jahre Erfahrung",
    "Ausgebildeter Mediengestalter",
    "Konzept, Design & Umsetzung",
    "Festpreise statt Tagessätze",
    "Antwort in 24 h",
];

const keyFacts = [
    { label: "Name", value: "David Schubert" },
    {
        label: "Rolle",
        value: "Senior UI/UX Designer & Creative Technologist (Freelancer)",
    },
    {
        label: "Ausbildung",
        value: "Mediengestalter Digital & Print · Bachelor Professional in Digital Media (IHK)",
    },
    {
        label: "Erfahrung",
        value: "25+ Jahre in Design & Werbung, davon viele Jahre in Hamburger Agenturen (zuletzt Senior UI/UX Designer bei Philipp und Keuntje)",
    },
    {
        label: "Leistungen",
        value: "Designkonzepte & Strategie, digitales Brand Design, Websites & digitale Produkte, technische Umsetzung, Content-Produktion (Foto, Video, Werbemittel)",
    },
    {
        label: "Kunden & Marken",
        value: "Astra, E WIE EINFACH, GEMA, Holsten, Lamborghini, NEFF, Telekom, T-Systems u. v. m. (Agentur- & Freelance-Projekte)",
    },
    {
        label: "Zielgruppen",
        value: "Mittelständische Unternehmen sowie Werbe-, Marketing- & Digitalagenturen",
    },
    {
        label: "Region",
        value: "Remote für DACH (DE, AT, CH) · Sitz: Pukalani, Maui – Hawaii",
    },
    { label: "Sprachen", value: "Deutsch (Muttersprache), Englisch" },
    {
        label: "Preise",
        value: "Festpreise: €2.500 (UX-Audit) bis €75.000+ (Produkt-Design)",
    },
    {
        label: "Kontakt",
        value: "mail@davidschubert.com · cal.com/davidschubert/30min",
    },
    {
        label: "Studio",
        value: "Pukalani Studio (Solo-Studio – Sie arbeiten direkt mit mir)",
    },
];

const audiences = [
    {
        title: "Mittelständische Unternehmen",
        description:
            "Sie brauchen einen erfahrenen Design-Partner, der Ihre Sprache spricht – ohne Fachjargon, ohne Agentur-Overhead. Von der ersten Idee über das Designkonzept bis zur fertigen Website: ein Ansprechpartner, klare Festpreise, verständliche Beratung.",
    },
    {
        title: "Werbe-, Marketing- & Digitalagenturen",
        description:
            "Ich verstärke Ihr Team als Senior-Freelancer – zuverlässig, remote und auf Wunsch unsichtbar für Ihren Kunden (White Label). Konzept, UI/UX-Design, Art Direction oder technische Umsetzung: Sie buchen genau die Kompetenz, die im Projekt fehlt.",
    },
    {
        title: "Auf Empfehlung hier?",
        description:
            "Viele meiner Projekte entstehen über Empfehlungen ehemaliger Kolleginnen, Kollegen und Kunden. Schön, dass Sie da sind – Arbeitsproben, Referenzen und ein ehrliches Gespräch darüber, ob ich die richtige Besetzung bin, gibt es im kostenlosen Erstgespräch.",
    },
];

const services = [
    {
        id: "brand-design",
        title: "Designkonzept & Digital Brand Design",
        description:
            "Der Auftritt, an dem man Sie erkennt: Logos, visuelle Identitäten, Designkonzepte und Strategien – digital und print, aus einem Guss.",
        deliverables: [
            "Designkonzept & kreative Leitidee",
            "Logo & visuelle Identität (Farben, Typografie, Bildwelt)",
            "Gestaltungsrichtlinien für digital & print",
            "Art Direction für Kampagnen & Werbemittel",
        ],
        result: "Marken-Erfahrung u. a. mit Astra, GEMA, NEFF & Telekom",
        price: "Festpreis nach Umfang",
        duration: "je nach Projekt",
        schemaDescription:
            "Designkonzepte, Logos, visuelle Identitäten und Art Direction für digitale und gedruckte Markenauftritte.",
    },
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
        link: "/ux-audit",
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
        title: "Website-Design & technische Umsetzung",
        description:
            "Ihr Unternehmensauftritt aus einer Hand: Inhalte strukturieren, Design entwickeln, barrierefrei und schnell umsetzen – fertig zum Launch.",
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
        title: "Produkt- & App-Design (Software, Dashboards)",
        description:
            "Komplexe Software verständlich machen: Nutzer-Recherche, klare Strukturen, Oberflächen-Design und skalierbare Design-Systeme.",
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
    {
        id: "content-produktion",
        title: "Content-Produktion: Foto, Video & Werbemittel",
        description:
            "Inhalte, die zum Design passen: digitale Werbemittel, Fotografie und Videografie inklusive Schnitt – als ausgebildeter Mediengestalter aus einer Hand.",
        deliverables: [
            "Digitale Werbemittel & Social-Media-Assets",
            "Fotografie (Produkt, Business, Location)",
            "Videografie & Videoschnitt (Final Cut Pro)",
            "Aufbereitung für Web, Kampagnen & Print",
        ],
        result: "Design & Content aus einer Hand – ohne Reibungsverluste",
        price: "Festpreis nach Umfang",
        duration: "je nach Projekt",
        schemaDescription:
            "Content-Produktion für Marken: digitale Werbemittel, Social-Media-Assets, Fotografie sowie Videografie inklusive Videoschnitt.",
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

const testimonials = [
    {
        text: "+73 % Conversion in sechs Wochen. David verbindet UX-Design, Technik und Business-KPIs – genau das, was wir brauchten.",
        attribution: "Co-Founder eines SaaS-Start-ups, Berlin",
    },
    {
        text: "Endlich jemand, der Design und Code verbindet. Die Übergabe an unsere Entwickler lief komplett reibungslos.",
        attribution: "Lead Frontend Developer, Software-Unternehmen, München",
    },
    {
        text: "Unsere Website generiert dreimal mehr Anfragen als vorher. Professionell, zuverlässig, schnell.",
        attribution: "Geschäftsführerin, Mittelständler, Zürich",
    },
    {
        text: "Zwölf Tage vom Briefing bis zum Launch – PageSpeed 98, Conversion 2,7-fach.",
        attribution: "VP Marketing, Tech-Scale-up, Hamburg",
    },
];

const guides = [
    {
        kicker: "Preis-Guide 2026",
        title: "Was kostet UX/UI Design?",
        description:
            "Stundensätze, Tagessätze und Projektpreise mit belegten Marktdaten (Freelancer-Kompass, German UPA, Malt) – plus die 5 Faktoren, die den Preis wirklich bestimmen.",
        to: "/wissen/was-kostet-ux-design",
    },
    {
        kicker: "Entscheidungshilfe",
        title: "Freelancer oder Agentur?",
        description:
            "Der ehrliche Vergleich: Kosten, Geschwindigkeit, Risiken – und die Fälle, in denen eine Agentur wirklich die bessere Wahl ist.",
        to: "/wissen/freelancer-oder-agentur",
    },
    {
        kicker: "Leistung im Detail",
        title: "UX-Audit: Pakete & Ablauf",
        description:
            "Der schnellste Einstieg in eine Zusammenarbeit: drei Festpreis-Pakete (€2.500–5.000), Ergebnisse in 1–2 Wochen, 50 % Anrechnung bei Folgeprojekten.",
        to: "/ux-audit",
    },
    {
        kicker: "Entwicklung",
        title: "Nuxt-Entwicklung als Freelancer",
        description:
            "SaaS-Frontends, Corporate Websites und Migrationen mit Nuxt 4, Vue 3 und TypeScript – Design und Code aus einer Hand.",
        to: "/nuxt-entwickler-freelancer",
    },
];

const caseStudies = [
    {
        title: "+43 % Feature-Adoption: SaaS Analytics Dashboard",
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
        title: "+73 % Conversion: E-Commerce Checkout-Optimierung",
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
        title: "+156 % organischer Traffic: Corporate Website Relaunch",
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
        title: "Launch in 12 Wochen: B2B SaaS MVP & Design System",
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
        period: "Ausbildung",
        description:
            "Mediengestalter Digital und Print in Hamburg – das Handwerk von Layout und Typografie bis Druck und Bildbearbeitung. Später ergänzt um den Bachelor Professional in Digital Media (IHK) und den Ausbilderschein.",
    },
    {
        period: "Agenturjahre",
        description:
            "Junior Art Director und Art Director in Hamburger Agenturen (u. a. Arc Worldwide, MEC, azionare) – Kampagnen, Werbemittel und digitale Konzepte für nationale und internationale Marken.",
    },
    {
        period: "2011 – Freelance-Start",
        description:
            "Senior UI/UX Designer im Creative-Tech-Team von Philipp und Keuntje, Hamburg: digitale Konzeptideen und kreative Lösungen für Marken wie Astra, E WIE EINFACH, GEMA, Holsten, Lamborghini, NEFF, Telekom und T-Systems.",
    },
    {
        period: "Heute",
        description:
            "Freelance Creative Technologist (Pukalani Studio): Designkonzepte, Brand Design, Websites und Content – remote von Maui für die DACH-Region, plus KI-Beratung und -Training.",
    },
];

const stackGroups = [
    {
        title: "Design & Konzept",
        items: [
            "Figma",
            "Adobe Creative Suite",
            "Art Direction",
            "Design Systems",
            "Prototyping",
        ],
    },
    {
        title: "Content & Produktion",
        items: [
            "Fotografie",
            "Videografie",
            "Final Cut Pro (Schnitt)",
            "Digitale Werbemittel",
            "Social-Media-Assets",
        ],
    },
    {
        title: "Technische Umsetzung",
        items: [
            "Moderne Web-Technologie (Nuxt/Vue)",
            "TypeScript",
            "Tailwind CSS",
            "Barrierefreiheit (WCAG 2.1 AA)",
            "Performance (Core Web Vitals)",
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
        question: "Übernehmen Sie auch die technische Umsetzung?",
        answer: "Ja. Ich gestalte nicht nur, sondern setze Websites und Web-Anwendungen auch selbst um – mit moderner, schneller und suchmaschinenfreundlicher Web-Technologie (u. a. Nuxt/Vue). Sie bekommen eine fertige, live geschaltete Website statt nur Design-Dateien. Alternativ übergebe ich sauber dokumentierte Design-Vorlagen an Ihr Entwicklungsteam oder Ihre Agentur.",
    },
    {
        question: "Machen Sie auch Fotografie, Video und digitale Werbemittel?",
        answer: "Ja. Als ausgebildeter Mediengestalter produziere ich auch den Content zum Design: digitale Werbemittel, Social-Media-Assets, Fotografie sowie Videografie inklusive Schnitt (Final Cut Pro). Der Vorteil: Design und Inhalte kommen aus einer Hand und passen von Anfang an zusammen.",
    },
    {
        question: "Arbeiten Sie auch für Agenturen?",
        answer: "Ja, regelmäßig. Ich verstärke Werbe-, Marketing- und Digitalagenturen als Senior-Freelancer – für Konzept, UI/UX-Design, Art Direction oder technische Umsetzung. Auf Wunsch White Label, also unsichtbar für Ihren Endkunden. Agentur-Erfahrung bringe ich aus über einem Jahrzehnt auf Agenturseite selbst mit.",
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
    "Senior UI/UX Designer Freelancer – Mittelstand & Agenturen | David Schubert";
const pageDescription =
    "David Schubert: Senior UI/UX Designer & ausgebildeter Mediengestalter (25+ Jahre, u. a. für Astra, GEMA, NEFF, Telekom). Designkonzepte, Brand Design, Websites & Content – remote für DACH, Festpreise.";
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
            jobTitle: "Senior UI/UX Designer & Creative Technologist",
            description:
                "Senior UI/UX Designer, Creative Technologist und ausgebildeter Mediengestalter mit über 25 Jahren Erfahrung in Design und Werbung. Erarbeitet Designkonzepte, digitales Brand Design, Websites und Content – remote für Mittelstand und Agenturen in der DACH-Region. In Agentur- und Freelance-Projekten für Marken wie Astra, E WIE EINFACH, GEMA, Holsten, Lamborghini, NEFF, Telekom und T-Systems tätig gewesen.",
            url: PAGE_URL,
            email: `mailto:${email}`,
            telephone: phoneTel,
            sameAs: socialProfiles,
            worksFor: { "@id": orgId },
            knowsLanguage: ["de", "en"],
            hasCredential: [
                {
                    "@type": "EducationalOccupationalCredential",
                    name: "Mediengestalter Digital und Print (Ausbildung)",
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    name: "Bachelor Professional in Digital Media (IHK)",
                },
            ],
            knowsAbout: [
                "UI/UX Design",
                "Art Direction",
                "Digitales Brand Design",
                "Designkonzepte & Strategie",
                "Webdesign & Websites",
                "Content-Produktion",
                "Fotografie",
                "Videografie & Videoschnitt",
                "Conversion-Optimierung (CRO)",
                "Barrierefreiheit (WCAG 2.1 AA)",
                "Design Systems",
                "Figma",
                "Web-Entwicklung (Nuxt, Vue)",
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
            name: "Pukalani Studio – UI/UX Design, Brand Design & Web-Umsetzung",
            description:
                "Designkonzepte, digitales Brand Design, UI/UX-Design, Websites mit technischer Umsetzung und Content-Produktion (Foto, Video, Werbemittel). Remote für Mittelstand und Agenturen in Deutschland, Österreich und der Schweiz.",
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
                    ...(service.minPrice
                        ? {
                              priceSpecification: {
                                  "@type": "PriceSpecification",
                                  minPrice: service.minPrice,
                                  maxPrice: service.maxPrice,
                                  priceCurrency: "EUR",
                              },
                          }
                        : {}),
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
        { rel: "alternate", hreflang: "en", href: `${SITE_URL}/en/` },
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
