<template>
    <main
        id="top"
        class="bg-[#0b0c10] text-[#e6e6e6] font-sans text-base leading-relaxed"
        :class="{ sr: prefersReducedMotion }"
    >
        <a
            href="#content"
            class="absolute -left-[9999px] top-auto w-px h-px overflow-hidden focus:left-0 focus:top-0 focus:w-auto focus:h-auto focus:p-4 focus:bg-white focus:text-black focus:z-[999] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >Zum Inhalt springen</a
        >

        <!-- HERO -->
        <section
            id="hero"
            class="py-10 md:py-20 border-t-0 border-[#1f2230] bg-gray-900"
            aria-labelledby="hero-title"
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
                    UI/UX Designer
                    <span class="text-emerald-400">Freelancer DACH</span> –
                    SaaS, Corporate Webdesign & Landingpage Design
                </h1>
                <p class="text-lg max-w-[72ch] mb-4">
                    25+ Jahre Erfahrung in
                    <strong class="text-white">SaaS UI/UX</strong>,
                    <strong class="text-white">Corporate Websites</strong> und
                    <strong class="text-white"
                        >conversion‑optimierten Landingpages</strong
                    >. Design‑&‑Code‑Expertise,
                    <strong class="text-white">Mobile‑First</strong>,
                    <strong class="text-white">barrierefrei (WCAG 2.1)</strong>,
                    <strong class="text-white">Designsysteme (Figma)</strong>.
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
                                >UX Designer Berlin</a
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
        </section>

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

                <ul class="grid gap-4 grid-cols-1 mt-4 p-0 list-none">
                    <li>
                        <h3 class="text-white text-base md:text-lg my-1">
                            Viele Besucher, aber wenig Conversions?
                        </h3>
                        <p class="my-2 text-[#a8adb7]">
                            <strong class="text-white">UX‑Audit</strong>,
                            <strong class="text-white"
                                >Conversion Optimierung</strong
                            >
                            (CRO) und klare Value‑Kommunikation.
                            A/B‑Testing‑ready Designs und saubere Messung (GA4).
                        </p>
                    </li>
                    <li>
                        <h3 class="text-white text-base md:text-lg my-1">
                            Komplexe SaaS‑Dashboards &amp; B2B‑Software?
                        </h3>
                        <p class="my-2 text-[#a8adb7]">
                            <strong class="text-white"
                                >Information Architecture</strong
                            >, aufgabenorientierte Flows,
                            <strong class="text-white">Design Tokens</strong> &
                            <strong class="text-white"
                                >Component Library</strong
                            >
                            für Konsistenz.
                        </p>
                    </li>
                    <li>
                        <h3 class="text-white text-base md:text-lg my-1">
                            Veraltetes Design, schlechte Mobile‑UX?
                        </h3>
                        <p class="my-2 text-[#a8adb7]">
                            <strong class="text-white">Mobile‑First</strong>,
                            <strong class="text-white">PageSpeed</strong> &amp;
                            <strong class="text-white">Core Web Vitals</strong>,
                            <strong class="text-white">WCAG</strong>‑konforme
                            Patterns &amp; semantische HTML.
                        </p>
                    </li>
                    <li>
                        <h3 class="text-white text-base md:text-lg my-1">
                            Agentur zu teuer, Freelancer unsicher?
                        </h3>
                        <p class="my-2 text-[#a8adb7]">
                            <strong class="text-white"
                                >Freelancer vs. Agentur</strong
                            >: Direkter Zugang, weniger Overhead, klarer
                            Prozess, optionales Netzwerk für Full‑Service.
                        </p>
                    </li>
                </ul>

                <figure
                    class="mt-8 bg-gradient-to-br from-[#111217] to-[#0d0e13] border border-[#1f2230] rounded-2xl p-6 shadow-lg"
                    aria-label="Kundenstimme"
                >
                    <blockquote class="text-lg italic text-white mb-2">
                        „+73% Conversion in 6 Wochen. Verbindet UX‑Design,
                        Technik und Business‑KPIs – genau das, was wir
                        brauchten."
                    </blockquote>
                    <figcaption class="text-[#a8adb7] text-sm">
                        — Co‑Founder, SaaS‑Startup (Berlin)
                    </figcaption>
                </figure>
            </div>
        </section>

        <!-- LEISTUNGEN -->
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
                    UI/UX Leistungen: SaaS Design · Corporate Webdesign ·
                    Landingpages
                </h2>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
                >
                    <article
                        class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                    >
                        <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                            SaaS &amp; B2B‑Software UX
                        </h3>
                        <ul
                            class="space-y-1 mb-4 text-[#a8adb7] list-disc list-inside"
                        >
                            <li>User Research, Personas</li>
                            <li>IA &amp; User Flows, Onboarding</li>
                            <li>Dashboard‑Design, Datenvisualisierung</li>
                            <li>Designsysteme, <em>Design Tokens</em></li>
                        </ul>
                        <p
                            class="mt-4 pt-4 border-t border-[#1f2230] text-sm text-emerald-400 font-medium"
                        >
                            +43% Feature‑Adoption · −67% Supporttickets
                        </p>
                    </article>

                    <article
                        class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                    >
                        <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                            Corporate Websites (KMU)
                        </h3>
                        <ul
                            class="space-y-1 mb-4 text-[#a8adb7] list-disc list-inside"
                        >
                            <li>Content‑Strategie &amp; Web‑IA</li>
                            <li>Mobile‑First, Performance</li>
                            <li>WCAG 2.1 AA Accessiblity</li>
                            <li>SEO‑Ready, Headless/CMS‑Ready</li>
                        </ul>
                        <p
                            class="mt-4 pt-4 border-t border-[#1f2230] text-sm text-emerald-400 font-medium"
                        >
                            +54% qualifizierte Leads · PageSpeed 90+
                        </p>
                    </article>

                    <article
                        class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6 hover:border-[#2f3340] transition-colors"
                    >
                        <h3 class="text-white text-lg md:text-xl my-2 mb-3">
                            Landingpage Design &amp; CRO
                        </h3>
                        <ul
                            class="space-y-1 mb-4 text-[#a8adb7] list-disc list-inside"
                        >
                            <li>Conversion‑Fokus &amp; Psychologie</li>
                            <li>A/B‑Tests, Social Proof</li>
                            <li>LCP &lt; 2.5s, INP &lt; 200ms</li>
                            <li>Integrationen: HubSpot, Mailchimp</li>
                        </ul>
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
                                ><strong class="text-white">UX Audit</strong>
                                &amp; Heuristische Analysen</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-400 mt-0.5">✓</span>
                            <span
                                ><strong class="text-white"
                                    >Designsysteme</strong
                                >
                                &amp; Komponentenbibliotheken</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-400 mt-0.5">✓</span>
                            <span
                                ><strong class="text-white">App‑Design</strong>
                                (iOS, Android, Web)</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-400 mt-0.5">✓</span>
                            <span
                                ><strong class="text-white">Responsive</strong>
                                &amp; Mobile‑First</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-400 mt-0.5">✓</span>
                            <span
                                ><strong class="text-white"
                                    >Barrierefreies Webdesign</strong
                                >
                                (WCAG)</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-400 mt-0.5">✓</span>
                            <span
                                ><strong class="text-white"
                                    >Design‑to‑Dev Handoff</strong
                                >
                                (Figma Dev Mode)</span
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
                        <strong class="text-white">Discovery</strong>: Ziele,
                        Stakeholder, KPIs
                    </li>
                    <li class="text-[#a8adb7] pl-2">
                        <strong class="text-white">Research</strong>: Personas,
                        Journeys, Benchmarks
                    </li>
                    <li class="text-[#a8adb7] pl-2">
                        <strong class="text-white">UX‑Konzept</strong>: IA,
                        Flows, Wireframes
                    </li>
                    <li class="text-[#a8adb7] pl-2">
                        <strong class="text-white">UI‑Design</strong>: High‑Fi,
                        Designsystem, Prototyp
                    </li>
                    <li class="text-[#a8adb7] pl-2">
                        <strong class="text-white">Handoff</strong>: Specs,
                        Tokens, QA‑Support
                    </li>
                    <li class="text-[#a8adb7] pl-2">
                        <strong class="text-white">Launch &amp; CRO</strong>:
                        Analytics, A/B‑Plan
                    </li>
                </ol>
                <p
                    class="mt-4 p-4 bg-[#111217] border border-[#1f2230] rounded-xl text-[#a8adb7] text-sm"
                >
                    ℹ️ Agil & sprintbasiert · jede Phase auch einzeln buchbar.
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
                    UX Case Studies & Portfolio (SaaS · E‑Commerce · Corporate)
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
                            IA‑Redesign, fokussiertes Dashboard, kontextuelle
                            Feature‑Discovery.
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
                            Prozess von 7 auf 3 Schritte, bessere Formular‑UX,
                            Trust‑Elemente.
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
                    class="flex flex-wrap justify-center gap-6 mt-8 p-0 list-none opacity-40"
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
                    UX Designer Berlin · München · Zürich · Österreich · Schweiz
                    – Remote verfügbar
                </h2>
                <p class="text-lg max-w-[70ch] mb-4 text-[#a8adb7]">
                    Ich arbeite
                    <strong class="text-white">remote‑first</strong> mit Kunden
                    in <strong class="text-white">Deutschland</strong> (Berlin,
                    München, Hamburg),
                    <strong class="text-white">Österreich</strong> (Wien, Linz,
                    Graz) und der
                    <strong class="text-white">Schweiz</strong> (Zürich, Basel,
                    Bern) – sowie international. Bei Bedarf bin ich
                    <strong class="text-white">vor Ort</strong> verfügbar.
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
                    Technische Expertise: Figma · Designsysteme · Accessibility
                    · Performance
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div>
                        <h3 class="text-white text-lg my-2 mb-3">
                            Design‑Tools
                        </h3>
                        <ul
                            class="space-y-2 text-[#a8adb7] list-disc list-inside"
                        >
                            <li>Figma (Auto‑Layout, Variables, Dev Mode)</li>
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
                    Agentur‑ und Freelancer‑Background. Spezialisierung auf
                    <strong class="text-white">SaaS</strong>,
                    <strong class="text-white">Corporate Webdesign</strong>,
                    <strong class="text-white">Landingpages</strong> &
                    <strong class="text-white">Dashboards</strong>. Kombination
                    aus <strong class="text-white">UX‑Design</strong> &
                    <strong class="text-white">technischem Know‑how</strong> für
                    reibungslosen Handoff.
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
                            Nutzer sollen Ziele friktionsfrei erreichen. Mein
                            Ansatz: Komplexität verstehen, Einfachheit
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
                    FAQ: Kosten · Tagessatz · Ablauf · Remote · Freelancer vs.
                    Agentur
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
                            Richtwerte: UX‑Audit €2.5–5k · Landingpage €5–12k ·
                            Corporate Website €15–35k · SaaS Produkt €25–75k+.
                            Tagessatz i.d.R. €800–1.000. Fixpreise möglich.
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
                        Arbeiten Sie auch lokal in Berlin, München oder Zürich?
                    </summary>
                    <div
                        class="mt-3 pt-3 border-t border-[#1f2230] text-[#a8adb7]"
                    >
                        <p>
                            Ja.
                            <strong class="text-white">Remote‑first</strong>,
                            aber Einsätze vor Ort in
                            <strong class="text-white">Berlin</strong>,
                            <strong class="text-white">München</strong>,
                            <strong class="text-white">Zürich</strong>, sowie in
                            AT/CH möglich.
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
                            SaaS Feature 3–6 Wochen · Komplettes Redesign 3–6
                            Monate · Audit 1–2 Wochen.
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
                            Ja. Native Patterns, Responsive Layouts, Prototypen.
                            Entwicklung via Partnernetzwerk.
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
                        <h3 class="text-white text-xl mb-4">Termin buchen</h3>
                        <p class="mb-4">
                            <a
                                href="#!"
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
                    </div>

                    <form
                        class="bg-[#111217] border border-[#1f2230] rounded-2xl p-6"
                        @submit.prevent="submitForm"
                        aria-label="Kontaktformular"
                    >
                        <h3 class="text-white text-xl mb-4">Kontaktformular</h3>
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
                            <label for="privacy" class="text-[#a8adb7] text-sm"
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
                            Neue Projekte ab {{ availabilityStart }} · UX‑Audits
                            laufend
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
        >
            <div class="max-w-[1100px] mx-auto px-4 md:px-8">
                <h2
                    id="footer-title"
                    class="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
                >
                    Seitenende
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
                >
                    <nav aria-label="Services">
                        <h3
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
                    <nav aria-label="Portfolio & Insights">
                        <h3
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
                    <nav aria-label="Standorte & Remote">
                        <h3
                            class="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
                        >
                            Standorte & Remote
                        </h3>
                        <ul class="space-y-2 list-none p-0">
                            <li>
                                <a
                                    href="#locations"
                                    class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                    >UX Designer Berlin</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                    >UX Designer München</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                    >UX Designer Zürich</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                    >Österreich & Schweiz</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-[#a8adb7] hover:text-white transition-colors text-sm"
                                    >Remote UX Designer</a
                                >
                            </li>
                        </ul>
                    </nav>
                    <address class="not-italic">
                        <h3
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
                        © {{ year }} {{ name }} – Freiberuflicher UI/UX Designer
                    </p>
                </div>
            </div>
        </footer>
    </main>
</template>

<script setup lang="ts">
const name = "Ihr Name";
const email = "hello@domain.com";
const phoneHuman = "+49 123 456789";
const phoneTel = "+49123456789";

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

// --- SEO: Head tags & JSON-LD ---
useHead({
    title: "UX Designer Freelancer DACH – SaaS UI/UX, Corporate Webdesign & Landingpage Design",
    htmlAttrs: { lang: "de" },
    meta: [
        {
            name: "description",
            content:
                "Freelance UI/UX Designer in DACH: SaaS Design, Corporate Webdesign, Landingpage Conversion Optimierung, Designsysteme (Figma), WCAG Accessibility. Remote in Deutschland, Österreich & Schweiz.",
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
            content:
                "UX Designer Freelancer DACH – SaaS, Corporate & Landingpages",
        },
        {
            property: "og:description",
            content:
                "Senior UI/UX Designer: SaaS UX, Corporate Webdesign, Landingpage CRO, Designsysteme, Barrierefreiheit. Remote Berlin · München · Zürich · AT · CH.",
        },
        { property: "og:url", content: "https://yourname.com/" },
        { property: "og:image", content: "https://yourname.com/og-image.jpg" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content:
                "UX Designer Freelancer DACH – SaaS, Corporate & Landingpages",
        },
        {
            name: "twitter:description",
            content:
                "SaaS UX, Corporate Webdesign, Landingpage CRO, Designsysteme, WCAG.",
        },
        { name: "twitter:image", content: "https://yourname.com/og-image.jpg" },
    ],
    link: [
        { rel: "canonical", href: "https://yourname.com/" },
        { rel: "alternate", hreflang: "de", href: "https://yourname.com/" },
        {
            rel: "alternate",
            hreflang: "de-DE",
            href: "https://yourname.com/de/",
        },
        {
            rel: "alternate",
            hreflang: "de-AT",
            href: "https://yourname.com/de-at/",
        },
        {
            rel: "alternate",
            hreflang: "de-CH",
            href: "https://yourname.com/de-ch/",
        },
        {
            rel: "alternate",
            hreflang: "x-default",
            href: "https://yourname.com/",
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
                url: "https://yourname.com/",
                image: "https://yourname.com/images/profile-photo.jpg",
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
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "47",
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
