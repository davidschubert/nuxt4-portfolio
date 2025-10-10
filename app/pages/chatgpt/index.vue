<template>
    <div
        class="bg-[#0b0c10] text-[#e6e6e6] font-sans text-base leading-relaxed"
        :class="{ sr: prefersReducedMotion }"
    >
        <a
            href="#content"
            class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-white focus:text-[#0b0c10] focus:shadow-lg focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >Zum Inhalt springen</a
        >

        <!-- HERO -->
        <header
            id="hero"
            class="py-10 md:py-20 border-t-0 border-[#1f2230] bg-gray-900"
            aria-labelledby="hero-title"
            role="banner"
        >
            <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                <p
                    class="tracking-widest uppercase text-[#a8adb7] font-semibold text-sm mb-2"
                >
                    Freelance UI/UX Designer · DACH & Remote
                </p>
                <h1
                    id="hero-title"
                    class="text-3xl md:text-4xl lg:text-5xl leading-tight my-2 mb-4"
                >
                    <span class="text-emerald-400">UI/UX Freelancer DACH</span>
                    – SaaS & Corporate Design
                </h1>
                <p class="text-lg max-w-[72ch] mb-4">
                    25+ Jahre Erfahrung in SaaS UX, Corporate Websites und
                    conversion-optimierten Landingpages bedeutet, dass Sie
                    Strategie, Gestaltung und Umsetzung aus einer Hand erhalten.
                    Ich verbinde Design- & Code-Expertise, mobile-first
                    Konzepte, barrierefreie (WCAG 2.1) Erlebnisse sowie
                    Designsysteme in Figma – damit Ihr Produkt schneller Wirkung
                    zeigt.
                </p>
                <div class="flex flex-wrap gap-2 mb-2">
                    <a
                        href="#contact"
                        class="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-transparent no-underline font-semibold bg-gradient-to-br from-emerald-400 to-blue-400 text-[#0b0c10] hover:-translate-y-0.5 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10] focus-visible:ring-offset-border"
                        aria-describedby="cta-note"
                        >UX Designer buchen</a
                    >
                    <a
                        href="#portfolio"
                        class="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#1f2230] no-underline font-semibold text-[#e6e6e6] bg-transparent hover:-translate-y-0.5 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10] focus-visible:ring-offset-border"
                        >Portfolio & Case Studies</a
                    >
                </div>
                <p id="cta-note" class="text-[#a8adb7] text-sm mt-1">
                    Kostenloses Erstgespräch · Antwort binnen 24 Stunden ·
                    Remote Deutschland, Österreich & Schweiz
                </p>

                <ul
                    class="flex flex-wrap gap-2 mt-4 p-0 list-none"
                    aria-label="Trust Badges"
                >
                    <li
                        class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-sm"
                    >
                        25+ Jahre Erfahrung
                    </li>
                    <li
                        class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-sm"
                    >
                        Design <span aria-hidden="true">+</span> Code
                    </li>
                    <li
                        class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-sm"
                    >
                        Figma &amp; Designsysteme
                    </li>
                    <li
                        class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-sm"
                    >
                        WCAG 2.1 AA
                    </li>
                </ul>

                <nav aria-label="Standorte & Remote">
                    <ul class="flex flex-wrap gap-2 p-0 mt-4 list-none">
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >Standort: UX Berlin</a
                            >
                        </li>
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >UX Designer München</a
                            >
                        </li>
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >UX Designer Zürich</a
                            >
                        </li>
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >UX Freelancer Österreich</a
                            >
                        </li>
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >UX Freelancer Schweiz</a
                            >
                        </li>
                        <li>
                            <a
                                href="#locations"
                                class="text-[#a8adb7] no-underline border-b border-dashed border-[#1f2230] hover:text-white hover:border-white"
                                >Remote UX Designer</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main id="content" tabindex="-1">
            <!-- PROBLEM / LÖSUNG -->
            <section
                id="problems"
                class="py-10 md:py-20 border-t border-[#1f2230] problems"
                aria-labelledby="problem-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="problem-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        Schlechtes UX kostet Conversions – hier ist die Lösung
                    </h2>

                    <img
                        src="https://pukalani.studio/images/case-studies/ux-audit-dashboard.jpg"
                        alt="Senior UX Designer präsentiert ein SaaS Dashboard Redesign in Figma"
                        width="1280"
                        height="720"
                        loading="lazy"
                        class="w-full h-auto rounded-2xl border border-[#1f2230] shadow-lg mb-6"
                    />

                    <div class="grid gap-6 grid-cols-1 mt-4">
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <h3 class="text-white text-xl mb-3">
                                Conversion &amp; Wachstum
                            </h3>
                            <p class="my-2 text-[#a8adb7]">
                                UX-Audits mit Conversion-Optimierung (CRO)
                                zeigen, welche Stellschrauben wirklich
                                beeinflussen, ob Nutzer aktiv werden und wie Sie
                                das messen. Auf Wunsch begleite ich Ihr Team bei
                                A/B-Tests und implementiere Tracking sauber nach
                                GA4-Standards. Lesen Sie mehr zu meinem Ansatz
                                in der Fallstudie auf
                                <a
                                    class="text-emerald-400 underline"
                                    href="https://www.nngroup.com/articles/conversion-optimization/"
                                    target="_blank"
                                    rel="noopener external"
                                    >Nielsen Norman Group</a
                                >.
                            </p>
                            <p class="my-2 text-[#a8adb7]">
                                Information Architecture, aufgabenorientierte
                                Flows, Design Tokens und Component Library
                                sichern die Konsistenz Ihrer Interfaces. Ich
                                arbeite eng mit Produktteams zusammen, überführe
                                Entscheidungen in dokumentierte Guidelines und
                                orientiere mich an Best Practices wie dem
                                <a
                                    class="text-emerald-400 underline"
                                    href="https://www.designbetter.co/design-systems-handbook"
                                    target="_blank"
                                    rel="noopener external"
                                    >Design Systems Handbook</a
                                >.
                            </p>
                        </article>
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <h3 class="text-white text-xl mb-3">
                                Erlebnis &amp; Vertrauen
                            </h3>
                            <p class="my-2 text-[#a8adb7]">
                                Mobile-first Layouts, PageSpeed-Optimierung,
                                Core Web Vitals und WCAG-konforme Patterns
                                sorgen dafür, dass Ihr Produkt auf jedem Device
                                schnell, zugänglich und vertrauenswürdig wirkt.
                                Je nach Bedarf führe ich schnelle Prototypen mit
                                Nutzerfeedback zusammen.
                            </p>
                            <p class="my-2 text-[#a8adb7]">
                                Freelancer vs. Agentur bedeutet direkter Zugang
                                ohne Overhead. Mein Prozess ist klar
                                dokumentiert, optional über mein Netzwerk zu
                                einem eingespielten Full-Service-Team
                                erweiterbar und transparent in Budget und
                                Kommunikation.
                            </p>
                        </article>
                    </div>

                    <figure
                        class="mt-8 bg-gradient-to-br from-[#111217] to-[#0d0e13] border border-[#1f2230] rounded-2xl p-6 shadow-lg"
                        aria-label="Kundenstimme"
                    >
                        <blockquote class="text-lg italic text-white mb-2">
                            „+73% Conversion in 6 Wochen. Verbindet UX-Design,
                            Technik und Business-KPIs – genau das, was wir
                            brauchten."
                        </blockquote>
                        <figcaption class="text-[#a8adb7] text-sm">
                            — Co-Founder, SaaS-Startup (Berlin)
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section
                id="services"
                class="py-10 md:py-20 border-t border-[#1f2230] services bg-gray-900"
                aria-labelledby="services-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="services-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        Leistungen im Überblick
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <p
                                class="text-white text-lg md:text-xl font-semibold mb-3"
                            >
                                SaaS &amp; B2B UX
                            </p>
                            <p class="text-[#a8adb7]">
                                User Research, Personas, IA &amp; Flows,
                                Dashboard-Design, Komponentenbibliotheken.
                            </p>
                            <p
                                class="mt-4 pt-4 border-t border-[#1f2230] text-sm text-emerald-400 font-medium"
                            >
                                +43% Feature-Adoption · −67% Supporttickets
                            </p>
                        </article>
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <p
                                class="text-white text-lg md:text-xl font-semibold mb-3"
                            >
                                Corporate Websites
                            </p>
                            <p class="text-[#a8adb7]">
                                Content-Strategie, Web-IA, Mobile-first,
                                Performance, WCAG, SEO-Ready.
                            </p>
                            <p
                                class="mt-4 pt-4 border-t border-[#1f2230] text-sm text-emerald-400 font-medium"
                            >
                                +54% qualifizierte Leads · PageSpeed 90+
                            </p>
                        </article>
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <p
                                class="text-white text-lg md:text-xl font-semibold mb-3"
                            >
                                Landingpage &amp; CRO
                            </p>
                            <p class="text-[#a8adb7]">
                                Conversion-Fokus, A/B-Tests, Social Proof, LCP
                                &lt; 2.5s, Integrationen.
                            </p>
                            <p
                                class="mt-4 pt-4 border-t border-[#1f2230] text-sm text-emerald-400 font-medium"
                            >
                                Ø +73% Conversion nach Redesign
                            </p>
                        </article>
                    </div>

                    <div
                        class="mt-8 bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                    >
                        <ul
                            class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#a8adb7] list-none p-0"
                        >
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span
                                    >UX Audit &amp; heuristische Analysen</span
                                >
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span
                                    >Designsysteme und
                                    Komponentenbibliotheken</span
                                >
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span>App-Design für iOS, Android und Web</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span>Responsives, mobile-first Denken</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span>Barrierefreies Webdesign nach WCAG</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-emerald-400 mt-0.5">✓</span>
                                <span
                                    >Design-to-Dev Handoff mit Figma Dev
                                    Mode</span
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- PROZESS -->
            <section
                id="process"
                class="py-10 md:py-20 border-t border-[#1f2230] process"
                aria-labelledby="process-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="process-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        UX Prozess: Discovery → Research → UX → UI → Handoff →
                        Optimierung
                    </h2>
                    <ol
                        class="space-y-3 mt-4 pl-6 list-decimal list-outside marker:text-emerald-400 marker:font-bold"
                    >
                        <li class="text-[#a8adb7] pl-2">
                            Discovery: Ziele, Stakeholder, KPIs werden gemeinsam
                            geschärft.
                        </li>
                        <li class="text-[#a8adb7] pl-2">
                            Research: Personas, Journeys und Benchmarks liefern
                            messbare Entscheidungsgrundlagen.
                        </li>
                        <li class="text-[#a8adb7] pl-2">
                            UX-Konzept: Informationsarchitektur, Flow-Logik und
                            Content werden verprobt.
                        </li>
                        <li class="text-[#a8adb7] pl-2">
                            UI-Design: Visual Language, Komponenten und States
                            entstehen in Figma.
                        </li>
                        <li class="text-[#a8adb7] pl-2">
                            Handoff: Technische Spezifikation, Tokens und
                            Prototypen sichern eine klare Übergabe.
                        </li>
                        <li class="text-[#a8adb7] pl-2">
                            Launch &amp; CRO: Iteration mit Tracking,
                            Experimenten und kontinuierlichen Verbesserungen.
                        </li>
                    </ol>
                    <p
                        class="mt-4 p-4 bg-[#111217] border border-[#1f2230] rounded-xl text-[#a8adb7] text-sm"
                    >
                        ℹ️ Agil & sprintbasiert · jede Phase auch einzeln
                        buchbar.
                    </p>
                </div>
            </section>

            <!-- PORTFOLIO -->
            <section
                id="portfolio"
                class="py-10 md:py-20 border-t border-[#1f2230] portfolio bg-gray-900"
                aria-labelledby="portfolio-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="portfolio-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        UX Case Studies & Portfolio (SaaS · E‑Commerce ·
                        Corporate)
                    </h2>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
                    >
                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                                SaaS Analytics Dashboard
                            </h3>
                            <p class="text-[#a8adb7] mb-4">
                                IA‑Redesign, fokussiertes Dashboard,
                                kontextuelle Feature‑Discovery.
                            </p>
                            <ul class="flex flex-wrap gap-2 mb-4 p-0 list-none">
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    +43% Feature‑Adoption
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    −67% Support‑Tickets
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    4.8/5 Zufriedenheit
                                </li>
                            </ul>
                            <ul class="flex flex-wrap gap-2 p-0 list-none">
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    SaaS UI Design
                                </li>
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    B2B Software UX
                                </li>
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    Dashboard Design
                                </li>
                            </ul>
                        </article>

                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                                E‑Commerce Checkout
                            </h3>
                            <p class="text-[#a8adb7] mb-4">
                                Prozess von 7 auf 3 Schritte, bessere
                                Formular‑UX, Trust‑Elemente.
                            </p>
                            <ul class="flex flex-wrap gap-2 mb-4 p-0 list-none">
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    +73% Conversion
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    −41% Cart Abandonment
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    −2.1s Ladezeit
                                </li>
                            </ul>
                            <ul class="flex flex-wrap gap-2 p-0 list-none">
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    Landingpage CRO
                                </li>
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    A/B Testing Design
                                </li>
                            </ul>
                        </article>

                        <article
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                        >
                            <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                                Corporate Website Relaunch
                            </h3>
                            <p class="text-[#a8adb7] mb-4">
                                Mobile‑First, WCAG 2.1 AA, SEO‑Optimierung mit
                                schneller Ladezeit.
                            </p>
                            <ul class="flex flex-wrap gap-2 mb-4 p-0 list-none">
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    +156% Traffic
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    +84% Anfragen
                                </li>
                                <li
                                    class="bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-md text-sm font-medium"
                                >
                                    PageSpeed 94
                                </li>
                            </ul>
                            <ul class="flex flex-wrap gap-2 p-0 list-none">
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    Corporate Web
                                </li>
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    WCAG AA
                                </li>
                                <li
                                    class="border border-[#1f2230] px-2 py-1 rounded-full text-[#a8adb7] text-xs"
                                >
                                    Responsive
                                </li>
                            </ul>
                        </article>
                    </div>

                    <ul
                        class="flex flex-wrap justify-center gap-6 mt-8 p-0 list-none"
                        aria-label="Kundenlogos"
                    >
                        <li
                            class="w-20 h-10 bg-[#000000] rounded flex items-center justify-center text-xs text-[#ffffff]"
                            aria-hidden="true"
                        >
                            Logo
                        </li>
                        <li
                            class="w-20 h-10 bg-[#000000] rounded flex items-center justify-center text-xs text-[#ffffff]"
                            aria-hidden="true"
                        >
                            Logo
                        </li>
                        <li
                            class="w-20 h-10 bg-[#000000] rounded flex items-center justify-center text-xs text-[#ffffff]"
                            aria-hidden="true"
                        >
                            Logo
                        </li>
                        <li
                            class="w-20 h-10 bg-[#000000] rounded flex items-center justify-center text-xs text-[#ffffff]"
                            aria-hidden="true"
                        >
                            Logo
                        </li>
                    </ul>
                </div>
            </section>

            <!-- LOCATIONS / REMOTE -->
            <section
                id="locations"
                class="py-10 md:py-20 border-t border-[#1f2230] locations"
                aria-labelledby="locations-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="locations-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        UX Designer Berlin · München · Zürich · Österreich ·
                        Schweiz – Remote verfügbar
                    </h2>
                    <p class="text-lg max-w-[70ch] mb-4 text-[#a8adb7]">
                        Ich arbeite remote-first mit Kunden in Deutschland
                        (Berlin, München, Hamburg), Österreich (Wien, Linz,
                        Graz) und der Schweiz (Zürich, Basel, Bern) – sowie
                        international. Workshops und Sprints kann ich bei Bedarf
                        vor Ort begleiten.
                    </p>
                    <ul class="flex flex-wrap gap-2 mt-4 p-0 list-none">
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            UX Designer Berlin
                        </li>
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            UX Designer München
                        </li>
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            UX Designer Zürich
                        </li>
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            UX Freelancer Österreich
                        </li>
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            UX Freelancer Schweiz
                        </li>
                        <li
                            class="border border-[#1f2230] px-3 py-1.5 rounded-full text-[#a8adb7] text-sm"
                        >
                            Remote UX Consultant
                        </li>
                    </ul>
                </div>
            </section>

            <!-- EXPERTISE / TOOLS -->
            <section
                id="expertise"
                class="py-10 md:py-20 border-t border-[#1f2230] expertise bg-gray-900"
                aria-labelledby="expertise-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="expertise-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        Technische Expertise: Figma · Designsysteme ·
                        Accessibility · Performance
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div>
                            <h3 class="text-white text-lg my-2 mb-3">
                                Design‑Tools
                            </h3>
                            <ul
                                class="space-y-2 text-[#a8adb7] list-disc list-inside"
                            >
                                <li>
                                    Figma (Auto‑Layout, Variables, Dev Mode)
                                </li>
                                <li>Adobe Suite (PS, AI, AE)</li>
                                <li>Principle, Maze, UserTesting</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white text-lg my-2 mb-3">
                                Development Know‑how
                            </h3>
                            <ul
                                class="space-y-2 text-[#a8adb7] list-disc list-inside"
                            >
                                <li>HTML, CSS, JavaScript</li>
                                <li>Frameworks: Vue/Nuxt, React</li>
                                <li>Core Web Vitals, Performance</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white text-lg my-2 mb-3">
                                Methoden & Standards
                            </h3>
                            <ul
                                class="space-y-2 text-[#a8adb7] list-disc list-inside"
                            >
                                <li>Design Thinking, Lean UX, Agile</li>
                                <li>WCAG 2.1 AA, Atomic Design</li>
                                <li>OKRs, KPI‑Fokus, CRO</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ABOUT -->
            <section
                id="about"
                class="py-10 md:py-20 border-t border-[#1f2230] about"
                aria-labelledby="about-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="about-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        Über mich: Senior UX Designer mit 25+ Jahren Erfahrung
                    </h2>
                </div>
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <p class="text-lg max-w-[70ch] mb-6 text-[#a8adb7]">
                        Agentur- und Freelancer-Background. Spezialisierung auf
                        SaaS, Corporate Webdesign, Landingpages und Dashboards.
                        Die Kombination aus UX-Design und technischem Know-how
                        sorgt für reibungslose Übergabe in die Entwicklung.
                    </p>
                    <div class="mb-6">
                        <ul
                            class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#a8adb7] list-disc list-inside"
                        >
                            <li>1990er – Webdesign‑Anfänge in Agentur</li>
                            <li>2010er – Mobile‑ & Responsive‑Fokus</li>
                            <li>2015+ – SaaS, Dashboards, Designsysteme</li>
                            <li>Heute – DACH & international remote</li>
                        </ul>
                    </div>
                    <aside
                        class="mt-8 bg-gradient-to-br from-[#111217] to-[#0d0e13] border border-[#1f2230] rounded-2xl p-6"
                        aria-label="Philosophie"
                    >
                        <p class="text-lg text-white">
                            <strong>„Gutes Design ist unsichtbar."</strong>
                            <span class="text-[#a8adb7]">
                                Nutzer sollen Ziele friktionsfrei erreichen.
                                Mein Ansatz: Komplexität verstehen, Einfachheit
                                gestalten.
                            </span>
                        </p>
                    </aside>
                </div>
            </section>

            <!-- TESTIMONIALS -->
            <section
                id="testimonials"
                class="py-10 md:py-20 border-t border-[#1f2230] testimonials bg-gray-900"
                aria-labelledby="testimonials-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="testimonials-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        Kundenstimmen & Bewertungen
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
                    >
                        <figure
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <blockquote class="text-white italic mb-4">
                                „Endlich jemand, der Design & Code verbindet.
                                Übergabe an Dev lief reibungslos."
                            </blockquote>
                            <figcaption class="text-[#a8adb7] text-sm">
                                Lead Frontend, Software‑Firma (München)
                            </figcaption>
                        </figure>
                        <figure
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <blockquote class="text-white italic mb-4">
                                „Unsere Website generiert 3× mehr Anfragen.
                                Professionell, zuverlässig, schnell."
                            </blockquote>
                            <figcaption class="text-[#a8adb7] text-sm">
                                Geschäftsführerin, Mittelstand (Zürich)
                            </figcaption>
                        </figure>
                        <figure
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <blockquote class="text-white italic mb-4">
                                „12 Tage vom Briefing bis Launch – PageSpeed 98,
                                Conversion 2.7×."
                            </blockquote>
                            <figcaption class="text-[#a8adb7] text-sm">
                                VP Marketing, Tech‑Scale‑up (Hamburg)
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section
                id="faq"
                class="py-10 md:py-20 border-t border-[#1f2230] faq"
                aria-labelledby="faq-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="faq-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        FAQ: Kosten · Tagessatz · Ablauf · Remote · Freelancer
                        vs. Agentur
                    </h2>
                    <details
                        class="bg-[#111217] border border-[#1f2230] rounded-xl p-4 mb-3 cursor-pointer hover:border-[#2f3340] transition-colors"
                    >
                        <summary
                            class="font-semibold text-white cursor-pointer list-none"
                        >
                            Was kostet ein UX/UI‑Projekt? (Preisrahmen &amp;
                            Tagessatz)
                        </summary>
                        <div
                            class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                        >
                            <p>
                                Richtwerte: UX‑Audit €2.5–5k · Landingpage
                                €5–12k · Corporate Website €15–35k · SaaS
                                Produkt €25–75k+. Tagessatz i.d.R. €800–1.000.
                                Fixpreise möglich.
                            </p>
                        </div>
                    </details>
                    <details
                        class="bg-[#111217] border border-[#1f2230] rounded-xl p-4 mb-3 cursor-pointer hover:border-[#2f3340] transition-colors"
                    >
                        <summary
                            class="font-semibold text-white cursor-pointer list-none"
                        >
                            Freelancer vs. Agentur – was ist besser für uns?
                        </summary>
                        <div
                            class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                        >
                            <p>
                                Freelancer: Direkt, flexibel, weniger Overhead.
                                Agentur: Größere Teams, mehr Overhead. Ich biete
                                Netzwerk‑Partner für Full‑Service, wenn nötig.
                            </p>
                        </div>
                    </details>
                    <details
                        class="bg-[#111217] border border-[#1f2230] rounded-xl p-4 mb-3 cursor-pointer hover:border-[#2f3340] transition-colors"
                    >
                        <summary
                            class="font-semibold text-white cursor-pointer list-none"
                        >
                            Arbeiten Sie auch lokal in Berlin, München oder
                            Zürich?
                        </summary>
                        <div
                            class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                        >
                            <p>
                                Ja. Remote-first, aber Einsätze vor Ort in
                                Berlin, München, Zürich sowie in AT/CH möglich.
                            </p>
                        </div>
                    </details>
                    <details
                        class="bg-[#111217] border border-[#1f2230] rounded-xl p-4 mb-3 cursor-pointer hover:border-[#2f3340] transition-colors"
                    >
                        <summary
                            class="font-semibold text-white cursor-pointer list-none"
                        >
                            Wie lange dauert es?
                        </summary>
                        <div
                            class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                        >
                            <p>
                                Landingpage 2–3 Wochen · Corporate 6–12 Wochen ·
                                SaaS Feature 3–6 Wochen · Komplettes Redesign
                                3–6 Monate · Audit 1–2 Wochen.
                            </p>
                        </div>
                    </details>
                    <details
                        class="bg-[#111217] border border-[#1f2230] rounded-xl p-4 mb-3 cursor-pointer hover:border-[#2f3340] transition-colors"
                    >
                        <summary
                            class="font-semibold text-white cursor-pointer list-none"
                        >
                            Machen Sie auch App‑Design (iOS/Android)?
                        </summary>
                        <div
                            class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                        >
                            <p>
                                Ja. Native Patterns, Responsive Layouts,
                                Prototypen. Entwicklung via Partnernetzwerk.
                            </p>
                        </div>
                    </details>
                </div>
            </section>

            <!-- CTA / CONTACT -->
            <section
                id="contact"
                class="py-10 md:py-20 border-t border-[#1f2230] contact bg-gray-900"
                aria-labelledby="contact-title"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2
                        id="contact-title"
                        class="text-2xl md:text-3xl lg:text-4xl mb-4"
                    >
                        UX Designer beauftragen – kostenloses Erstgespräch
                    </h2>
                    <p class="text-lg text-[#a8adb7] max-w-[70ch] mb-6">
                        30 Minuten unverbindlich: Projekt, Ziele, Budgetrahmen.
                        Danach erhalten Sie ein konkretes Angebot mit Timeline.
                    </p>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <div
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        >
                            <h3 class="text-white text-xl mb-4">
                                Termin buchen
                            </h3>
                            <p class="mb-4">
                                <a
                                    href="https://cal.com/davidschubert/30min"
                                    class="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-transparent no-underline font-semibold bg-gradient-to-br from-emerald-400 to-blue-400 text-[#0b0c10] hover:-translate-y-0.5 transition-transform duration-150 w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10] focus-visible:ring-offset-border"
                                    rel="nofollow"
                                    >Kalender öffnen &amp; Termin wählen</a
                                >
                            </p>
                            <ul class="space-y-2 text-[#a8adb7] list-none p-0">
                                <li class="flex items-center gap-2">
                                    <span class="text-emerald-400">✓</span> 30
                                    Minuten
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-emerald-400">✓</span>
                                    Kostenlos
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-emerald-400">✓</span>
                                    Zoom/Teams/Meet
                                </li>
                            </ul>
                            <div class="mt-6 border-t border-[#1f2230] pt-4">
                                <p class="text-[#a8adb7] text-sm mb-3">
                                    Teilen Sie mein Profil:
                                </p>
                                <div class="flex items-center gap-3">
                                    <a
                                        class="text-[#a8adb7] hover:text-white"
                                        href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fpukalani.studio%2F"
                                        target="_blank"
                                        rel="noopener external"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        class="text-[#a8adb7] hover:text-white"
                                        href="https://www.xing.com/spi/shares/new?url=https%3A%2F%2Fpukalani.studio%2F"
                                        target="_blank"
                                        rel="noopener external"
                                    >
                                        Xing
                                    </a>
                                    <a
                                        class="text-[#a8adb7] hover:text-white"
                                        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpukalani.studio%2F&text=UI%2FUX%20Freelancer%20in%20DACH"
                                        target="_blank"
                                        rel="noopener external"
                                    >
                                        X/Twitter
                                    </a>
                                    <a
                                        class="text-[#a8adb7] hover:text-white"
                                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpukalani.studio%2F"
                                        target="_blank"
                                        rel="noopener external"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form
                            class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                            @submit.prevent="submitForm"
                            aria-label="Kontaktformular"
                        >
                            <h3 class="text-white text-xl mb-4">
                                Kontaktformular
                            </h3>
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-[#a8adb7] mb-1 text-sm"
                                    >Name*</label
                                >
                                <input
                                    id="name"
                                    v-model="form.name"
                                    required
                                    autocomplete="name"
                                    class="w-full bg-[#0b0c10] border border-[#1f2230] rounded-lg px-3 py-2 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="block text-[#a8adb7] mb-1 text-sm"
                                    >E‑Mail*</label
                                >
                                <input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    autocomplete="email"
                                    class="w-full bg-[#0b0c10] border border-[#1f2230] rounded-lg px-3 py-2 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="type"
                                    class="block text-[#a8adb7] mb-1 text-sm"
                                    >Projekttyp*</label
                                >
                                <select
                                    id="type"
                                    v-model="form.type"
                                    required
                                    class="w-full bg-[#0b0c10] border border-[#1f2230] rounded-lg px-3 py-2 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                                >
                                    <option value="">Bitte wählen…</option>
                                    <option>Landingpage Design</option>
                                    <option>Corporate Website</option>
                                    <option>SaaS / Software Design</option>
                                    <option>Designsystem</option>
                                    <option>UX Audit</option>
                                    <option>Andere</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label
                                    for="budget"
                                    class="block text-[#a8adb7] mb-1 text-sm"
                                    >Budget‑Range*</label
                                >
                                <select
                                    id="budget"
                                    v-model="form.budget"
                                    required
                                    class="w-full bg-[#0b0c10] border border-[#1f2230] rounded-lg px-3 py-2 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                                >
                                    <option value="">Bitte wählen…</option>
                                    <option>&lt; €10.000</option>
                                    <option>€10.000 – €25.000</option>
                                    <option>€25.000 – €50.000</option>
                                    <option>&gt; €50.000</option>
                                    <option>Noch unklar</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label
                                    for="msg"
                                    class="block text-[#a8adb7] mb-1 text-sm"
                                    >Ihre Nachricht*</label
                                >
                                <textarea
                                    id="msg"
                                    v-model="form.message"
                                    rows="4"
                                    required
                                    class="w-full bg-[#0b0c10] border border-[#1f2230] rounded-lg px-3 py-2 text-white focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>
                            <div class="mb-4 flex items-start gap-2">
                                <input
                                    id="privacy"
                                    type="checkbox"
                                    v-model="form.privacy"
                                    required
                                    class="mt-1 accent-emerald-400"
                                />
                                <label
                                    for="privacy"
                                    class="text-[#a8adb7] text-sm"
                                    >Ich stimme der DSGVO‑konformen Verarbeitung
                                    zu.</label
                                >
                            </div>
                            <button
                                class="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-transparent no-underline font-semibold bg-gradient-to-br from-emerald-400 to-blue-400 text-[#0b0c10] hover:-translate-y-0.5 transition-transform duration-150 w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10] focus-visible:ring-offset-border"
                                type="submit"
                            >
                                Nachricht senden
                            </button>
                            <p class="mt-4 text-[#a8adb7] text-sm text-center">
                                Direktkontakt:
                                <a
                                    :href="`mailto:${email}`"
                                    class="text-emerald-400 hover:underline"
                                    >{{ email }}</a
                                >
                                ·
                                <a
                                    :href="`tel:${phoneTel}`"
                                    class="text-emerald-400 hover:underline"
                                    >{{ phoneHuman }}</a
                                >
                            </p>
                        </form>
                    </div>

                    <aside
                        class="mt-8 bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        aria-live="polite"
                    >
                        <p class="text-white mb-2">
                            <strong>Aktuelle Verfügbarkeit:</strong>
                            <span class="text-[#a8adb7]">
                                Neue Projekte ab {{ availabilityStart }} ·
                                UX‑Audits laufend
                            </span>
                        </p>
                        <p class="text-[#a8adb7] text-sm">Stand: {{ today }}</p>
                    </aside>
                </div>
            </section>

            <!-- FOOTER -->
            <footer
                id="footer"
                class="border-t border-[#1f2230] py-8 bg-[#000000]"
                aria-labelledby="footer-title"
                role="contentinfo"
            >
                <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                    <h2 id="footer-title" class="sr-only">Seitenende</h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
                    >
                        <nav aria-labelledby="footer-services">
                            <h3
                                id="footer-services"
                                class="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
                            >
                                Services
                            </h3>
                            <ul class="space-y-2 list-none p-0">
                                <li>
                                    <a
                                        href="#services"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >SaaS & Software</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Corporate Webdesign</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Landingpages & CRO</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Designsysteme</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >UX Audits</a
                                    >
                                </li>
                            </ul>
                        </nav>
                        <nav aria-labelledby="footer-portfolio">
                            <h3
                                id="footer-portfolio"
                                class="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
                            >
                                Arbeiten & Insights
                            </h3>
                            <ul class="space-y-2 list-none p-0">
                                <li>
                                    <a
                                        href="#portfolio"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Portfolio</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#process"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Design‑Prozess</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#faq"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >FAQ & Kosten</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Kontakt</a
                                    >
                                </li>
                            </ul>
                        </nav>
                        <nav aria-labelledby="footer-locations">
                            <h3
                                id="footer-locations"
                                class="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
                            >
                                Standorte & Remote
                            </h3>
                            <ul class="space-y-2 list-none p-0">
                                <li>
                                    <a
                                        href="#locations"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Berlin UX Projekte</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#locations"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >München UX Projekte</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#locations"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Zürich UX Projekte</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#locations"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Österreich &amp; Schweiz</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#locations"
                                        class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                        >Remote UX Beratung</a
                                    >
                                </li>
                            </ul>
                        </nav>
                        <address
                            class="not-italic"
                            aria-labelledby="footer-contact"
                        >
                            <h3
                                id="footer-contact"
                                class="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
                            >
                                Kontakt
                            </h3>
                            <p class="text-[#a8adb7] text-sm mb-2">
                                {{ name }} · Senior UI/UX Designer
                            </p>
                            <p class="text-sm mb-2">
                                <a
                                    :href="`mailto:${email}`"
                                    class="text-emerald-400 hover:underline"
                                    >{{ email }}</a
                                >
                            </p>
                            <p class="text-sm mb-2">
                                <a
                                    :href="`tel:${phoneTel}`"
                                    class="text-emerald-400 hover:underline"
                                    >{{ phoneHuman }}</a
                                >
                            </p>
                            <p class="text-[#a8adb7] text-sm">
                                Remote · DACH & international
                            </p>
                        </address>
                    </div>
                    <div class="border-t border-[#1f2230] pt-6">
                        <p class="text-center text-[#a8adb7] text-sm mb-2">
                            <a
                                href="/impressum"
                                class="hover:text-white transition-colors"
                                >Impressum</a
                            >
                            ·
                            <a
                                href="/datenschutz"
                                class="hover:text-white transition-colors"
                                >Datenschutz</a
                            >
                        </p>
                        <p class="text-center text-[#ffffff] text-xs">
                            © {{ year }} {{ name }} – Freiberuflicher UI/UX
                            Designer
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    </div>
</template>

<script setup lang="ts">
const name = "David Schubert";
const email = computed(() =>
    atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==")
);
const phoneHuman = "+1 808 866 0676";
const phoneTel = "+18088660676";

const availabilityStart = "Februar 2026";

const form = reactive({
    name: "",
    email: "",
    type: "",
    budget: "",
    message: "",
    privacy: false,
});

function submitForm() {
    alert(
        "Danke! Ihre Nachricht wurde lokal gesendet – bitte binden Sie Ihr Formular-Backend (z. B. server/api) ein."
    );
}

const today = new Date().toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
});
const year = new Date().getFullYear();
const prefersReducedMotion = false;
const requestURL = useRequestURL();
const canonicalUrl = computed(() => {
    const base = `${requestURL.origin}${requestURL.pathname}`;
    return base.endsWith("/") ? base : `${base}/`;
});

// --- SEO: Head tags & JSON-LD ---
useHead({
    title: "UI/UX Freelancer DACH – SaaS, Corporate & Landingpages",
    htmlAttrs: { lang: "de" },
    meta: [
        {
            name: "description",
            content:
                "UI/UX Freelancer DACH: SaaS, Corporate Websites & Landingpages. Designsysteme, WCAG 2.1 AA. Remote Berlin, München, Zürich.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
            name: "robots",
            content:
                "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
        },
        // Open Graph
        { property: "og:type", content: "website" },
        {
            property: "og:title",
            content: "UI/UX Freelancer DACH – SaaS, Corporate & Landingpages",
        },
        {
            property: "og:description",
            content:
                "Senior UI/UX Designer: SaaS UX, Corporate Webdesign, Landingpage CRO, Designsysteme, Barrierefreiheit. Remote Berlin · München · Zürich · AT · CH.",
        },
        { property: "og:url", content: "https://pukalani.studio/chatgpt/" },
        {
            property: "og:image",
            content:
                "https://pukalani.studio/images/og/ux-designer-david-schubert.jpg",
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: "UI/UX Freelancer DACH – SaaS, Corporate & Landingpages",
        },
        {
            name: "twitter:description",
            content:
                "SaaS UX, Corporate Webdesign, Landingpage CRO, Designsysteme, WCAG.",
        },
        {
            name: "twitter:image",
            content:
                "https://pukalani.studio/images/og/ux-designer-david-schubert.jpg",
        },
        { name: "twitter:site", content: "@davidschubert" },
        { name: "twitter:creator", content: "@davidschubert" },
    ],
    link: [
        { rel: "canonical", href: canonicalUrl },
        {
            rel: "alternate",
            hreflang: "de",
            href: "https://pukalani.studio/chatgpt/",
        },
        {
            rel: "alternate",
            hreflang: "de-DE",
            href: "https://pukalani.studio/de/chatgpt/",
        },
        {
            rel: "alternate",
            hreflang: "de-AT",
            href: "https://pukalani.studio/de-at/chatgpt/",
        },
        {
            rel: "alternate",
            hreflang: "de-CH",
            href: "https://pukalani.studio/de-ch/chatgpt/",
        },
        {
            rel: "alternate",
            hreflang: "x-default",
            href: "https://pukalani.studio/chatgpt/",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "https://pukalani.studio/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "https://pukalani.studio/favicon-16x16.png",
        },
        {
            rel: "shortcut icon",
            href: "https://pukalani.studio/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "https://pukalani.studio/apple-touch-icon.png",
        },
        {
            rel: "manifest",
            href: "https://pukalani.studio/site.webmanifest",
        },
    ],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: name,
                jobTitle: "Senior UI/UX Designer & Freelance Consultant",
                url: "https://pukalani.studio/chatgpt/",
                image: "https://pukalani.studio/images/profile-photo.jpg",
                sameAs: [
                    "https://www.linkedin.com/in/yourprofile",
                    "https://www.behance.net/yourprofile",
                    "https://github.com/yourprofile",
                ],
                knowsAbout: [
                    "UX Designer Freelancer",
                    "UI/UX Designer gesucht",
                    "Freelance UX Designer Deutschland",
                    "UX Designer München",
                    "UX Designer Berlin",
                    "Webdesigner Schweiz",
                    "UX Freelancer Österreich",
                    "Product Designer DACH",
                    "SaaS UI Design",
                    "B2B Software UX",
                    "Dashboard Design",
                    "Corporate Webdesign",
                    "Landingpage Design",
                    "Design System Entwicklung",
                    "Barrierefreies Webdesign",
                    "WCAG konformes Design",
                    "Mobile-First Designer",
                    "Landingpage Conversion Optimierung",
                    "A/B Testing Design",
                    "Remote UX Designer",
                    "Remote Design Sprint",
                    "Figma Designer Freelance",
                    "Figma Design System Experte",
                    "Design Token Spezialist",
                    "Component Library erstellen",
                    "Fintech App Designer",
                    "Healthcare Software UX",
                    "E-Commerce UX Designer",
                    "Logistik Software Design",
                    "UX Designer buchen",
                    "UX Design Kosten",
                    "Tagessatz UI Designer",
                    "Was kostet UX Designer",
                    "UX Projekt Dauer",
                ],
                address: {
                    "@type": "PostalAddress",
                    addressRegion: "DACH",
                    addressCountry: "DE",
                },
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Freelance UI/UX Design",
                serviceType: "UI/UX Design Beratung",
                url: "https://pukalani.studio/chatgpt/",
                image: "https://pukalani.studio/images/profile-photo.jpg",
                areaServed: [
                    {
                        "@type": "AdministrativeArea",
                        name: "Deutschland",
                    },
                    {
                        "@type": "AdministrativeArea",
                        name: "Österreich",
                    },
                    {
                        "@type": "AdministrativeArea",
                        name: "Schweiz",
                    },
                ],
                provider: {
                    "@type": "Person",
                    name: name,
                    jobTitle: "Senior UI/UX Designer & Freelance Consultant",
                    sameAs: [
                        "https://www.linkedin.com/in/yourprofile",
                        "https://www.behance.net/yourprofile",
                        "https://github.com/yourprofile",
                    ],
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "47",
                    itemReviewed: {
                        "@type": "ProfessionalService",
                        name: "Freelance UI/UX Design",
                        url: "https://pukalani.studio/chatgpt/",
                    },
                },
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Was kostet ein UX/UI Design Projekt?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Richtwerte: UX-Audit €2.5–5k · Landingpage €5–12k · Corporate Website €15–35k · SaaS Produkt €25–75k+. Tagessatz i.d.R. €800–1.000.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Freelancer vs. Agentur – was ist besser?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Freelancer: direkt, flexibel, weniger Overhead. Agentur: größere Teams. Ich biete Netzwerk-Partner für Full-Service, wenn nötig.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Arbeiten Sie auch lokal in Berlin, München oder Zürich?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Ja. Remote-first in DACH, bei Bedarf vor Ort in Berlin, München, Zürich sowie AT/CH.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Wie lange dauert ein typisches Projekt?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Landingpage 2–3 Wochen · Corporate 6–12 Wochen · SaaS Feature 3–6 Wochen · Komplettes Redesign 3–6 Monate · Audit 1–2 Wochen.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Machen Sie auch App-Design (iOS/Android)?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Ja. Native Patterns, Responsive Layouts, Prototypen. Entwicklung via Partnernetzwerk.",
                        },
                    },
                ],
            }),
        },
    ],
});
</script>
