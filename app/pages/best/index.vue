<template>
    <div
        class="bg-gradient-to-br from-white to-gray-50"
        :class="{ 'motion-reduce': prefersReducedMotion }"
    >
        <a href="#main-content" tabindex="0" class="skip-to-content">
            Zum Inhalt springen
        </a>

        <!-- Hero Section -->
        <header
            id="hero"
            class="relative min-h-screen flex flex-col justify-center pt-8 pb-10 md:pb-20"
            aria-labelledby="hero-title"
            role="banner"
        >
            <!-- Verfügbarkeits-Widget -->
            <div class="max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div
                    class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg shadow-sm mb-8 text-sm font-medium"
                >
                    <span
                        class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                        aria-hidden="true"
                    ></span>
                    <span class="text-emerald-900"
                        >VERFÜGBAR ab {{ availabilityStart }} | UX-Audits
                        laufend | Remote DACH</span
                    >
                </div>

                <h1
                    id="hero-title"
                    class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
                >
                    UI/UX Designer Freelancer DACH für SaaS, Dashboard &
                    Corporate Teams
                </h1>

                <p
                    class="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 mb-8 max-w-4xl"
                >
                    Senior
                    <strong class="text-gray-900 font-semibold"
                        >UX Designer mit 25+ Jahren Erfahrung</strong
                    >. Spezialisiert auf
                    <strong class="text-gray-900 font-semibold"
                        >SaaS UI Design</strong
                    >,
                    <strong class="text-gray-900 font-semibold"
                        >Dashboard UX</strong
                    >
                    und
                    <strong class="text-gray-900 font-semibold"
                        >Corporate Webdesign</strong
                    >. Als erfahrener
                    <strong class="text-gray-900 font-semibold"
                        >Figma Designer Freelancer</strong
                    >
                    verbinde ich
                    <strong class="text-gray-900 font-semibold"
                        >barrierefreies Webdesign WCAG 2.1 AA</strong
                    >
                    mit messbar besseren Conversions – Remote aus Deutschland,
                    Österreich & Schweiz.
                </p>

                <!-- Trust Badges -->
                <ul
                    class="flex flex-wrap gap-3 mb-12 list-none p-0"
                    aria-label="Vertrauensmerkmale"
                >
                    <li
                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm"
                    >
                        <span aria-hidden="true">✓</span>
                        <span>25+ Jahre UX Designer Freelancer DACH</span>
                    </li>
                    <li
                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm"
                    >
                        <span aria-hidden="true">✓</span>
                        <span>Design + Code Expertise</span>
                    </li>
                    <li
                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm"
                    >
                        <span aria-hidden="true">✓</span>
                        <span>Figma &amp; Designsysteme</span>
                    </li>
                    <li
                        class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm"
                    >
                        <span aria-hidden="true">✓</span>
                        <span>Ø +73% Conversion</span>
                    </li>
                </ul>

                <!-- CTAs -->
                <div class="flex flex-wrap gap-4 mb-12">
                    <a
                        href="#contact"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-transparent no-underline font-semibold bg-gradient-to-br from-emerald-500 to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                        aria-describedby="cta-note"
                    >
                        UX Designer buchen
                    </a>
                    <a
                        href="#portfolio"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 no-underline font-semibold text-gray-900 bg-white hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                    >
                        Portfolio & Case Studies
                    </a>
                </div>

                <p id="cta-note" class="text-gray-600 text-sm mt-1">
                    Kostenloses Erstgespräch · Antwort binnen 24 Stunden ·
                    Remote Deutschland, Österreich & Schweiz
                </p>
            </div>

            <!-- Hero Image with optimized loading -->
            <div class="max-w-7xl mx-auto px-4 md:px-8 w-full mt-12">
                <NuxtImg
                    src="/images/claude-hero.jpg"
                    alt="UI UX Designer Freelancer arbeitet remote an SaaS Dashboard Design in Figma – 25+ Jahre Erfahrung DACH"
                    width="1680"
                    height="945"
                    loading="eager"
                    fetchpriority="high"
                    format="avif"
                    quality="60"
                    preload
                    sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1680px"
                    densities="x1"
                    class="w-full h-auto rounded-2xl shadow-2xl"
                />
            </div>
        </header>

        <main
            id="main-content"
            class="focus:outline-none"
            tabindex="-1"
            role="main"
        >
            <!-- Inhaltsverzeichnis -->
            <nav
                id="inhalt"
                aria-labelledby="toc-title"
                class="border-t border-gray-200 bg-white/70 backdrop-blur py-6"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    >
                        <div>
                            <h2
                                id="toc-title"
                                class="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
                            >
                                Inhalt & direkte Sprungziele
                            </h2>
                            <p class="text-gray-600 text-sm md:text-base">
                                Direkt zu Services, Portfolio, Prozess, FAQs
                                oder Kontakt springen.
                            </p>
                        </div>
                        <ol
                            class="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0 text-sm md:text-base"
                        >
                            <li>
                                <a
                                    href="#services"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors no-underline"
                                >
                                    1. Leistungen & Angebote
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors no-underline"
                                >
                                    2. Portfolio & Case Studies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#process"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors no-underline"
                                >
                                    3. UX Prozess & Zusammenarbeit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-orange-50 text-orange-700 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors no-underline"
                                >
                                    4. Remote & Standorte DACH
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors no-underline"
                                >
                                    5. FAQ & Preise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    class="inline-flex items-center gap-2 px-4 py-3 bg-emerald-700 text-white rounded-lg border border-emerald-700 hover:bg-emerald-800 transition-colors no-underline"
                                >
                                    6. Kontakt & Termin
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>

            <!-- Problem/Solution Section -->
            <section
                id="problems"
                class="py-10 md:py-20 border-t border-gray-200"
                aria-labelledby="problem-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2
                        id="problem-title"
                        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Schlechtes UX kostet Conversions – hier ist die Lösung
                    </h2>

                    <p class="text-lg md:text-xl text-gray-600 mb-12">
                        Sie suchen einen
                        <strong class="text-gray-900 font-semibold"
                            >UX Designer Berlin</strong
                        >,
                        <strong class="text-gray-900 font-semibold"
                            >UI Designer München</strong
                        >
                        oder
                        <strong class="text-gray-900 font-semibold"
                            >Webdesigner Schweiz</strong
                        >? Als
                        <strong class="text-gray-900 font-semibold"
                            >Remote Designer Deutschland</strong
                        >-weit verfügbar, löse ich komplexe UX-Herausforderungen
                        in
                        <strong class="text-gray-900 font-semibold"
                            >B2B Software</strong
                        >
                        und
                        <strong class="text-gray-900 font-semibold"
                            >SaaS UI Design</strong
                        >.
                    </p>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                        aria-label="Problem-Lösung-Karten"
                    >
                        <article
                            class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3
                                class="text-xl font-semibold text-emerald-700 mb-3"
                            >
                                Conversion & Wachstum
                            </h3>
                            <p class="text-gray-700 leading-relaxed mb-4">
                                UX-Audits mit Conversion-Optimierung (CRO)
                                zeigen, welche Stellschrauben wirklich
                                beeinflussen, ob Nutzer aktiv werden. Als
                                <strong>Landing Page Designer</strong> mit
                                <strong>A/B-Testing</strong>-Expertise begleite
                                ich Ihr Team bei der Implementierung und
                                optimiere kontinuierlich nach GA4-Standards.
                            </p>
                            <p class="text-emerald-700 font-semibold">
                                +73% Conversion · +43% Feature-Adoption
                            </p>
                        </article>

                        <article
                            class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3
                                class="text-xl font-semibold text-emerald-700 mb-3"
                            >
                                Erlebnis & Vertrauen
                            </h3>
                            <p class="text-gray-700 leading-relaxed mb-4">
                                <strong>Mobile-First Design</strong>,
                                PageSpeed-Optimierung, Core Web Vitals und
                                <strong>WCAG 2.1 AA</strong>-konforme Patterns
                                sorgen dafür, dass Ihr Produkt auf jedem Device
                                schnell, zugänglich und vertrauenswürdig wirkt.
                            </p>
                            <p class="text-emerald-700 font-semibold">
                                PageSpeed 94+ · WCAG 2.1 AA zertifiziert
                            </p>
                        </article>
                    </div>

                    <!-- Testimonial -->
                    <figure
                        class="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-8 shadow-sm"
                        aria-label="Kundenstimme"
                    >
                        <blockquote
                            class="text-lg md:text-xl italic text-gray-900 mb-4"
                        >
                            „+73% Conversion in 6 Wochen. Als
                            <strong>Remote Designer Deutschland</strong>
                            verbindet er UX-Design, Technik und Business-KPIs –
                            genau das, was wir brauchten."
                        </blockquote>
                        <figcaption class="text-gray-600 font-medium">
                            — Co-Founder, SaaS-Startup Berlin
                        </figcaption>
                    </figure>
                </div>
            </section>

            <!-- Services Section -->
            <section
                id="services"
                class="py-10 md:py-20 border-t border-gray-200 bg-gray-50"
                aria-labelledby="services-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2
                        id="services-title"
                        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Spezialisierte Services – vom UX Audit bis zum Design
                        System
                    </h2>

                    <p class="text-lg md:text-xl text-gray-600 mb-12">
                        Als
                        <strong class="text-gray-900 font-semibold"
                            >Agile UX Designer</strong
                        >
                        und
                        <strong class="text-gray-900 font-semibold"
                            >Design Sprint Facilitator</strong
                        >
                        biete ich maßgeschneiderte Lösungen für
                        <strong class="text-gray-900 font-semibold"
                            >SaaS UI Design</strong
                        >,
                        <strong class="text-gray-900 font-semibold"
                            >Dashboard UX</strong
                        >
                        und
                        <strong class="text-gray-900 font-semibold"
                            >Corporate Webdesign</strong
                        >.
                    </p>

                    <div
                        class="grid grid-cols-1 md:grid-cols-3 gap-8"
                        aria-label="Service-Angebote"
                    >
                        <article
                            class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-4"
                            >
                                SaaS & B2B UX
                            </h3>
                            <p class="text-gray-700 mb-4">
                                User Research, Personas, Information
                                Architecture, Dashboard-Design und Component
                                Libraries für komplexe B2B-Software.
                            </p>
                            <ul
                                class="space-y-2 mb-6 text-gray-700 list-none pl-0"
                            >
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>User Journey Mapping</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>Dashboard UX Design</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>Design Token System</span>
                                </li>
                            </ul>
                            <p class="text-emerald-700 font-semibold mb-4">
                                +43% Feature-Adoption · −67% Support
                            </p>
                            <p class="text-gray-900 font-bold mb-4">
                                ab €15.000 | 4-12 Wochen
                            </p>
                            <a
                                href="#contact"
                                class="block w-full text-center py-3 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all no-underline"
                            >
                                SaaS Design beauftragen →
                            </a>
                        </article>

                        <article
                            class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-4"
                            >
                                Corporate Websites
                            </h3>
                            <p class="text-gray-700 mb-4">
                                Content-Strategie, Web-IA, Mobile-First,
                                Performance, WCAG 2.1 AA, SEO-Ready für
                                professionelle Unternehmensauftritte.
                            </p>
                            <ul
                                class="space-y-2 mb-6 text-gray-700 list-none pl-0"
                            >
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>Responsive Webdesign</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>WCAG 2.1 konform</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>SEO-Optimierung</span>
                                </li>
                            </ul>
                            <p class="text-emerald-700 font-semibold mb-4">
                                +156% Traffic · PageSpeed 90+
                            </p>
                            <p class="text-gray-900 font-bold mb-4">
                                €8.000 - €15.000 | 6-10 Wochen
                            </p>
                            <a
                                href="#contact"
                                class="block w-full text-center py-3 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all no-underline"
                            >
                                Corporate Design starten →
                            </a>
                        </article>

                        <article
                            class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-4"
                            >
                                Landingpage & CRO
                            </h3>
                            <p class="text-gray-700 mb-4">
                                Conversion-Fokus, A/B-Tests, Social Proof,
                                Performance-Optimierung für messbar bessere
                                Ergebnisse.
                            </p>
                            <ul
                                class="space-y-2 mb-6 text-gray-700 list-none pl-0"
                            >
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>Conversion Optimierung</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>A/B Testing Design</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>LCP &lt; 2.5s garantiert</span>
                                </li>
                            </ul>
                            <p class="text-emerald-700 font-semibold mb-4">
                                Ø +73% Conversion Rate
                            </p>
                            <p class="text-gray-900 font-bold mb-4">
                                €3.500 - €6.000 | 1-3 Wochen
                            </p>
                            <a
                                href="#contact"
                                class="block w-full text-center py-3 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all no-underline"
                            >
                                Landing Page optimieren →
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            <!-- Process Section -->
            <section
                id="process"
                class="py-10 md:py-20 border-t border-gray-200"
                aria-labelledby="process-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2
                        id="process-title"
                        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
                    >
                        UX Prozess: Discovery → Research → Design → Handoff →
                        Optimierung
                    </h2>
                    <p class="text-lg text-gray-600 mb-12">
                        Als
                        <strong class="text-gray-900 font-semibold"
                            >Design Sprint Remote Facilitator</strong
                        >
                        führe ich Sie durch einen bewährten, agilen Prozess von
                        der ersten Idee bis zum erfolgreichen Launch.
                    </p>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <div
                            v-for="(step, index) in processSteps"
                            :key="step.id"
                            class="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                        >
                            <div
                                class="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                            >
                                {{ index + 1 }}
                            </div>
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-3 mt-4"
                            >
                                {{ step.title }}
                            </h3>
                            <p class="text-gray-700 mb-4">
                                {{ step.description }}
                            </p>
                            <span
                                class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium"
                                >{{ step.duration }}</span
                            >
                        </div>
                    </div>
                </div>
            </section>

            <!-- Portfolio Section -->
            <section
                id="portfolio"
                class="py-10 md:py-20 border-t border-gray-200 bg-gray-50"
                aria-labelledby="portfolio-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6"
                    >
                        <h2
                            id="portfolio-title"
                            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                        >
                            Portfolio: SaaS, Dashboard & Corporate Design Case
                            Studies
                        </h2>
                        <div class="flex gap-4 text-sm md:text-base">
                            <a
                                href="#portfolio-saas"
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:-translate-y-0.5 hover:shadow transition-all no-underline"
                            >
                                SaaS & Dashboard
                            </a>
                            <a
                                href="#portfolio-corporate"
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:-translate-y-0.5 hover:shadow transition-all no-underline"
                            >
                                Corporate & WCAG
                            </a>
                            <a
                                href="#portfolio-commerce"
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:-translate-y-0.5 hover:shadow transition-all no-underline"
                            >
                                E-Commerce & CRO
                            </a>
                        </div>
                    </div>

                    <p class="text-lg text-gray-600 mb-12">
                        Über 200 erfolgreiche Projekte als
                        <strong class="text-gray-900 font-semibold"
                            >Enterprise UX Consultant DACH</strong
                        >
                        mit nachweisbaren Ergebnissen in verschiedenen Branchen.
                    </p>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <article
                            id="portfolio-saas"
                            v-for="project in portfolio"
                            :key="`project-${project.id}`"
                            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <NuxtImg
                                :src="project.image"
                                :alt="project.imageAlt"
                                width="600"
                                height="400"
                                loading="lazy"
                                format="avif"
                                quality="55"
                                sizes="xs:100vw sm:100vw md:50vw lg:50vw"
                                densities="1x 2x"
                                class="w-full h-auto"
                            />
                            <div class="p-8">
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span
                                        v-for="tag in project.tags"
                                        :key="`tag-${project.id}-${tag}`"
                                        class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium"
                                        >{{ tag }}</span
                                    >
                                </div>
                                <h3
                                    class="text-2xl font-semibold text-gray-900 mb-4"
                                >
                                    {{ project.title }}
                                </h3>
                                <div class="space-y-3 mb-6">
                                    <p class="text-gray-700">
                                        <strong class="text-gray-900"
                                            >Challenge:</strong
                                        >
                                        {{ project.challenge }}
                                    </p>
                                    <p class="text-gray-700">
                                        <strong class="text-gray-900"
                                            >Solution:</strong
                                        >
                                        {{ project.solution }}
                                    </p>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="result in project.results"
                                        :key="`result-${project.id}-${result}`"
                                        class="px-3 py-1 bg-emerald-700 text-white rounded-lg text-sm font-semibold"
                                        >{{ result }}</span
                                    >
                                </div>
                            </div>
                        </article>
                    </div>

                    <!-- Client Logos -->
                    <div class="mt-16 text-center">
                        <p class="text-lg font-semibold text-gray-900 mb-8">
                            Vertraut von führenden Unternehmen im DACH-Raum:
                        </p>
                        <ul
                            class="flex justify-center items-center flex-wrap gap-8 list-none p-0"
                            aria-label="Kundenlogos"
                        >
                            <li
                                class="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-xs text-white font-bold"
                                aria-hidden="true"
                            >
                                Logo
                            </li>
                            <li
                                class="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-xs text-white font-bold"
                                aria-hidden="true"
                            >
                                Logo
                            </li>
                            <li
                                class="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-xs text-white font-bold"
                                aria-hidden="true"
                            >
                                Logo
                            </li>
                            <li
                                class="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-xs text-white font-bold"
                                aria-hidden="true"
                            >
                                Logo
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Locations Section -->
            <section
                id="locations"
                class="py-10 md:py-20 border-t border-gray-200 bg-white"
                aria-labelledby="locations-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8"
                    >
                        <h2
                            id="locations-title"
                            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                        >
                            Remote UX Designer in DACH – lokal präsent bei
                            Bedarf
                        </h2>
                        <a
                            href="#contact"
                            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all font-semibold no-underline"
                        >
                            Termin in Ihrer Stadt vereinbaren →
                        </a>
                    </div>

                    <p class="text-lg text-gray-600 mb-12 max-w-4xl">
                        Ich arbeite remote-first aus Deutschland und begleite
                        Teams in
                        <strong class="text-gray-900"
                            >Berlin, München, Zürich, Wien</strong
                        >
                        und weiteren Städten in Deutschland, Österreich und der
                        Schweiz. Vor-Ort-Workshops, Discovery-Sprints und
                        Stakeholder-Interviews sind jederzeit möglich.
                    </p>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <article
                            v-for="location in locations"
                            :key="location.city"
                            class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-2"
                            >
                                {{ location.city }}
                            </h3>
                            <p class="text-sm text-gray-500 mb-4">
                                {{ location.region }}
                            </p>
                            <ul
                                class="space-y-2 text-gray-700 list-none pl-0 text-sm"
                            >
                                <li
                                    v-for="service in location.services"
                                    :key="`${location.city}-${service}`"
                                    class="flex items-start gap-2"
                                >
                                    <span class="text-emerald-500 mt-0.5"
                                        >✓</span
                                    >
                                    <span>{{ service }}</span>
                                </li>
                            </ul>
                            <p class="text-xs text-gray-500 mt-4">
                                Reaktionszeit: {{ location.response }} ·
                                Vor-Ort: {{ location.onSite }}
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section
                id="faq"
                class="py-10 md:py-20 border-t border-gray-200"
                aria-labelledby="faq-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2
                        id="faq-title"
                        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
                    >
                        FAQ: Kosten, Tagessatz, Ablauf & Remote-Zusammenarbeit
                    </h2>

                    <div class="mt-8 space-y-4">
                        <details
                            v-for="faq in faqs"
                            :key="faq.id"
                            class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <summary
                                class="px-6 py-6 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 transition-colors list-none"
                            >
                                {{ faq.question }}
                            </summary>
                            <div
                                class="px-6 pb-6 text-gray-700 leading-relaxed"
                            >
                                <p v-html="faq.answer"></p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section
                id="contact"
                class="py-10 md:py-20 border-t border-gray-200 bg-gradient-to-br from-emerald-500 to-blue-600 text-white"
                aria-labelledby="contact-title"
                role="region"
            >
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2
                        id="contact-title"
                        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                    >
                        UI/UX Designer beauftragen – kostenloses Erstgespräch
                    </h2>
                    <p class="text-lg text-white/90 mb-12 max-w-3xl">
                        30 Minuten unverbindlich über Ihr Projekt sprechen.
                        Danach erhalten Sie ein konkretes Angebot mit Timeline
                        und Kostenrahmen.
                    </p>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Termin buchen -->
                        <div
                            class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
                            aria-label="Terminbuchung"
                        >
                            <h3 class="text-2xl font-semibold text-white mb-4">
                                📅 Termin direkt buchen
                            </h3>
                            <p class="text-white/90 mb-6">
                                Kostenloses 30-Minuten Erstgespräch per
                                Zoom/Teams/Meet
                            </p>
                            <a
                                href="https://cal.com/davidschubert/30min"
                                class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-transparent no-underline font-semibold bg-white text-emerald-700 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 w-full justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
                                rel="nofollow"
                            >
                                Kalender öffnen & Termin wählen
                            </a>
                            <ul
                                class="mt-6 space-y-2 text-white/90 list-none pl-0"
                            >
                                <li class="flex items-center gap-2">
                                    <span class="text-white">✓</span>
                                    30 Minuten kostenlos
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-white">✓</span>
                                    Zoom/Teams/Google Meet
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-white">✓</span>
                                    Antwort binnen 24h
                                </li>
                            </ul>
                        </div>

                        <!-- Kontaktformular -->
                        <div
                            class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
                            aria-label="Kontaktformular"
                        >
                            <h3 class="text-2xl font-semibold text-white mb-4">
                                📝 Nachricht senden
                            </h3>
                            <LazyContactForm />
                            <p class="mt-6 text-white/80 text-sm">
                                Direktkontakt:
                                <a
                                    :href="`mailto:${email}`"
                                    class="text-white hover:underline font-medium"
                                    >{{ email }}</a
                                >
                                ·
                                <a
                                    :href="`tel:${phoneTel}`"
                                    class="text-white hover:underline font-medium"
                                    >{{ phoneHuman }}</a
                                >
                            </p>
                        </div>
                    </div>

                    <!-- Availability -->
                    <aside
                        class="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
                        aria-live="polite"
                    >
                        <p class="text-white text-lg">
                            <strong>Aktuelle Verfügbarkeit:</strong>
                            <span class="text-white/90">
                                Neue Projekte ab {{ availabilityStart }} ·
                                UX-Audits laufend verfügbar
                            </span>
                        </p>
                        <ClientOnly>
                            <p class="text-white/70 text-sm mt-2">
                                Stand: {{ today }}
                            </p>
                        </ClientOnly>
                    </aside>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer
            id="footer"
            class="border-t border-gray-200 py-16 bg-gray-900 text-white"
            aria-labelledby="footer-title"
            role="contentinfo"
        >
            <div class="max-w-7xl mx-auto px-4 md:px-8">
                <h2 id="footer-title" class="sr-only">Seitenende</h2>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                >
                    <nav aria-labelledby="footer-services">
                        <h3
                            id="footer-services"
                            class="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                        >
                            Services
                        </h3>
                        <ul class="space-y-2 list-none p-0">
                            <li>
                                <a
                                    href="#services"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >SaaS UI Design</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Dashboard UX Design</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Corporate Webdesign</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Landing Page CRO</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Design Systems</a
                                >
                            </li>
                        </ul>
                    </nav>

                    <nav aria-labelledby="footer-locations">
                        <h3
                            id="footer-locations"
                            class="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                        >
                            Standorte & Remote
                        </h3>
                        <ul class="space-y-2 list-none p-0">
                            <li>
                                <a
                                    href="#locations"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >UX Designer Berlin</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >UI Designer München</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Webdesigner Zürich</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >UX Designer Wien</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Remote DACH</a
                                >
                            </li>
                        </ul>
                    </nav>

                    <nav aria-labelledby="footer-portfolio">
                        <h3
                            id="footer-portfolio"
                            class="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                        >
                            Portfolio & Insights
                        </h3>
                        <ul class="space-y-2 list-none p-0">
                            <li>
                                <a
                                    href="#portfolio"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Case Studies</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#process"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >UX Prozess</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >FAQ & Preise</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                                    >Kontakt</a
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
                            class="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                        >
                            Kontakt
                        </h3>
                        <p class="text-white/70 text-sm mb-2">
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
                        <p class="text-white/90 text-sm">
                            Remote · DACH & international
                        </p>
                        <p class="text-white/70 text-xs mt-2">
                            Letzte Aktualisierung: {{ today }} · Nächste freie
                            Kapazitäten: {{ availabilityStart }}
                        </p>
                    </address>
                </div>

                <!-- SEO Footer Text -->
                <div class="py-8 my-8 border-t border-b border-white/10">
                    <p class="text-white/70 leading-relaxed text-sm">
                        Als erfahrener
                        <strong class="text-white font-semibold"
                            >UI/UX Designer Freelancer</strong
                        >
                        mit 25+ Jahren Expertise biete ich spezialisierte
                        Services für
                        <strong class="text-white font-semibold"
                            >SaaS UI Design</strong
                        >,
                        <strong class="text-white font-semibold"
                            >Dashboard UX Design</strong
                        >
                        und
                        <strong class="text-white font-semibold"
                            >Corporate Webdesign</strong
                        >
                        im gesamten DACH-Raum. Ob Sie einen
                        <strong class="text-white font-semibold"
                            >UX Designer in Berlin</strong
                        >,
                        <strong class="text-white font-semibold"
                            >UI Designer in München</strong
                        >
                        oder einen
                        <strong class="text-white font-semibold"
                            >Webdesigner in der Schweiz</strong
                        >
                        suchen – als
                        <strong class="text-white font-semibold"
                            >Remote Designer Deutschland</strong
                        >-weit verfügbar, bin ich Ihr Partner für
                        <strong class="text-white font-semibold"
                            >barrierefreies Webdesign WCAG 2.1 AA</strong
                        >,
                        <strong class="text-white font-semibold"
                            >Figma Design Systems</strong
                        >
                        und
                        <strong class="text-white font-semibold"
                            >Conversion Optimierung</strong
                        >.
                    </p>
                </div>

                <div
                    class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
                >
                    <ClientOnly>
                        <p class="text-white/70 text-sm">
                            © {{ year }} {{ name }} – UI/UX Designer Freelancer
                            DACH · Zuletzt aktualisiert: {{ today }}
                        </p>
                    </ClientOnly>
                    <nav aria-label="Footer-Links" class="flex gap-8">
                        <a
                            href="#impressum"
                            class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                            >Impressum</a
                        >
                        <a
                            href="#datenschutz"
                            class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                            >Datenschutz</a
                        >
                        <a
                            href="https://pukalani.studio/imprint.pdf"
                            class="text-white/70 hover:text-white transition-colors text-sm no-underline"
                            rel="noopener"
                            >Download VCARD</a
                        >
                    </nav>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Personal Info
const name = "David Schubert";
const email = computed(() => atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ=="));
const phoneHuman = "+1 808 866 0676";
const phoneTel = "+18088660676";
const availabilityStart = "Februar 2026";

// Computed
const today = computed(() =>
    new Date().toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    })
);
const year = computed(() => new Date().getFullYear());

// Fixed canonical URL to avoid hydration mismatch
const canonicalUrl = "https://pukalani.studio/best/";

// Data
const processSteps = ref([
    {
        id: 1,
        title: "Discovery & Research",
        description:
            "Ziele, Stakeholder, KPIs und Nutzer werden gemeinsam analysiert.",
        duration: "3-5 Tage",
    },
    {
        id: 2,
        title: "UX-Konzept & IA",
        description:
            "Informationsarchitektur, Flow-Logik und Content-Strategie entstehen.",
        duration: "1 Woche",
    },
    {
        id: 3,
        title: "UI-Design & Prototyping",
        description:
            "Visual Language, Komponenten und interaktive Prototypen in Figma.",
        duration: "2-4 Wochen",
    },
    {
        id: 4,
        title: "Design System",
        description:
            "Design Tokens, Component Library und Guidelines für Skalierbarkeit.",
        duration: "1-2 Wochen",
    },
    {
        id: 5,
        title: "Developer Handoff",
        description:
            "Technische Spezifikation, Tokens und klare Übergabe-Dokumentation.",
        duration: "Kontinuierlich",
    },
    {
        id: 6,
        title: "Launch & CRO",
        description:
            "Iteration mit Tracking, A/B-Tests und kontinuierlichen Verbesserungen.",
        duration: "Ongoing",
    },
]);

const portfolio = ref([
    {
        id: 1,
        title: "SaaS Analytics Dashboard",
        image: "/images/portfolio-fintech.jpg",
        imageAlt:
            "SaaS Dashboard Design mit Information Architecture und Component Library",
        tags: ["SaaS", "Dashboard", "B2B"],
        challenge:
            "Komplexe Datenvisualisierung, 50.000+ Nutzer, hohe Supportlast",
        solution:
            "IA-Redesign, fokussiertes Dashboard, kontextuelle Feature-Discovery",
        results: ["+43% Features", "−67% Support", "4.8/5 Satisfaction"],
    },
    {
        id: 2,
        title: "E-Commerce Checkout Optimierung",
        image: "/images/portfolio-fashion.jpg",
        imageAlt:
            "E-Commerce Checkout Conversion Optimierung Mobile-First Design",
        tags: ["E-Commerce", "CRO", "Mobile"],
        challenge: "Hohe Cart Abandonment Rate, schlechte Mobile Conversion",
        solution:
            "Prozess von 7 auf 3 Schritte, bessere Formular-UX, Trust-Elemente",
        results: ["+73% Conversion", "−41% Abandonment", "LCP 1.8s"],
    },
    {
        id: 3,
        title: "Corporate Website Relaunch",
        image: "/images/portfolio-healthcare.jpg",
        imageAlt:
            "Corporate Website Redesign WCAG 2.1 AA konform mit SEO-Optimierung",
        tags: ["Corporate", "WCAG", "SEO"],
        challenge: "Veraltetes Design, schlechte Accessibility, keine Leads",
        solution:
            "Mobile-First, WCAG 2.1 AA, SEO-Optimierung mit schneller Ladezeit",
        results: ["+156% Traffic", "+84% Leads", "PageSpeed 94"],
    },
    {
        id: 4,
        title: "PropTech SaaS MVP",
        image: "/images/portfolio-proptech.jpg",
        imageAlt: "PropTech SaaS MVP Design System mit Figma Component Library",
        tags: ["Startup", "MVP", "Design System"],
        challenge: "Kein Design, 12 Wochen bis Series A Pitch",
        solution:
            "Complete Design System, User Testing, developer-ready Figma Library",
        results: ["€2.5M Funding", "500 Beta-User", "Product Hunt #3"],
    },
]);

const locations = ref([
    {
        city: "Berlin",
        region: "Deutschland",
        services: [
            "UX Audits & Produktstrategie",
            "Enterprise Dashboard Design",
            "Workshops & Stakeholder Interviews",
        ],
        response: "< 24h",
        onSite: "1-2 Tage Vorlauf",
    },
    {
        city: "München",
        region: "Deutschland",
        services: [
            "Corporate Website Redesigns",
            "Design Systems & Figma Libraries",
            "UX Research & Testing",
        ],
        response: "< 24h",
        onSite: "2-3 Tage Vorlauf",
    },
    {
        city: "Zürich",
        region: "Schweiz",
        services: [
            "SaaS MVP & Produktentwicklung",
            "FinTech UX & Compliance",
            "Hybrid Workshops Deutsch/Englisch",
        ],
        response: "< 48h",
        onSite: "1 Woche Vorlauf",
    },
    {
        city: "Wien",
        region: "Österreich",
        services: [
            "Conversion Optimierung",
            "Service Design & CX Mapping",
            "Accessibility Audits WCAG 2.1",
        ],
        response: "< 48h",
        onSite: "3-4 Tage Vorlauf",
    },
]);

const faqs = ref([
    {
        id: 1,
        question: "Was kostet ein UX/UI-Projekt? (Preisrahmen & Tagessatz)",
        answer: `<strong>Richtwerte:</strong><br>
            • UX-Audit: €2.500–5.000<br>
            • Landingpage: €5.000–12.000<br>
            • Corporate Website: €15.000–35.000<br>
            • SaaS Produkt: €25.000–75.000+<br>
            • Tagessatz: €800–1.000<br><br>
            Fixpreise möglich. Kostenloses Erstgespräch für genaue Kalkulation.`,
    },
    {
        id: 2,
        question: "Freelancer vs. Agentur – was ist besser?",
        answer: `<strong>Freelancer-Vorteile:</strong><br>
            ✓ Direkter Senior-Ansprechpartner<br>
            ✓ 30-50% günstiger<br>
            ✓ Schnellere Entscheidungen<br>
            ✓ Flexiblere Zusammenarbeit<br>
            ✓ Kein Junior macht die Arbeit<br><br>
            Optional: Netzwerk-Partner für Full-Service.`,
    },
    {
        id: 3,
        question: "Arbeiten Sie auch lokal in Berlin, München oder Zürich?",
        answer: `Ja. Remote-first für maximale Effizienz, aber:<br>
            • Kickoff-Meetings vor Ort möglich<br>
            • Workshops in Ihrem Office (DACH)<br>
            • Regelmäßige Video-Calls<br>
            • Einsätze in Berlin, München, Zürich, Wien<br><br>
            Remote = Keine Reisekosten, mehr Fokus!`,
    },
    {
        id: 4,
        question: "Wie lange dauert ein typisches Projekt?",
        answer: `<strong>Projektdauer:</strong><br>
            • UX Audit: 1–2 Wochen<br>
            • Landingpage: 2–3 Wochen<br>
            • Corporate Website: 6–12 Wochen<br>
            • SaaS Feature: 3–6 Wochen<br>
            • Komplettes Redesign: 3–6 Monate<br><br>
            Express-Service verfügbar (+30% Rush-Fee).`,
    },
    {
        id: 5,
        question: "Machen Sie auch App-Design (iOS/Android)?",
        answer: `Ja. Native Patterns, responsive Layouts und Prototypen.<br><br>
            <strong>Services:</strong><br>
            • iOS/Android Design<br>
            • Progressive Web Apps<br>
            • React Native Design<br>
            • Design Systems für Apps<br><br>
            Entwicklung via Partnernetzwerk möglich.`,
    },
    {
        id: 6,
        question: "Wie läuft die Zusammenarbeit mit internationalen Teams?",
        answer: `Remote-first, mit klaren Ritualen:<br>
            • Async Updates via Slack/Notion<br>
            • Wöchentliche Sprint-Reviews<br>
            • Workshops in Deutsch oder Englisch<br>
            • Zeitzonen: DACH & US-PST abgedeckt<br><br>
            Tools: Figma, FigJam, Miro, Linear.`,
    },
    {
        id: 7,
        question: "Welche Branchen-Erfahrung bringen Sie mit?",
        answer: `Über 200 Projekte in:<br>
            • SaaS & B2B Software<br>
            • FinTech & InsurTech<br>
            • HealthTech & Pharma<br>
            • Automotive & Mobility<br>
            • Corporate Websites & Intranets<br><br>
            Fokus: komplexe Produkte mit Enterprise-Anforderungen.`,
    },
    {
        id: 8,
        question: "Welche Ergebnisse kann ich erwarten?",
        answer: `Messbare KPIs aus Referenzprojekten:<br>
            • +73% Conversion Rate<br>
            • −41% Checkout Abbrüche<br>
            • +156% organischer Traffic<br>
            • LCP 1.8s (Core Web Vitals)<br><br>
            Zielsetzung wird zu Projektbeginn definiert und nachverfolgt.`,
    },
    {
        id: 9,
        question: "Wie schnell können Projekte starten?",
        answer: `Onboarding innerhalb von 7 Tagen möglich:<br>
            • Kickoff-Call (60 Min)<br>
            • Audit der bestehenden Assets<br>
            • Projektplan & Angebote in 48h<br>
            • Start mit Sprint 0 in Woche 1<br><br>
            Express-Slots für kritische Deadlines verfügbar.`,
    },
]);

// SEO Meta Tags
useHead({
    title: "UI/UX Designer Freelancer DACH für SaaS & Dashboard UX",
    htmlAttrs: { lang: "de" },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
            name: "description",
            content:
                "Senior UX/UI Designer Freelancer DACH mit 25+ Jahren Erfahrung für SaaS, Dashboard & Corporate Design. Remote in Deutschland, Österreich & Schweiz.",
        },
        {
            name: "robots",
            content:
                "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
        },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Pukalani Studio" },
        { property: "og:locale", content: "de_DE" },
        {
            property: "og:title",
            content: "UI/UX Designer Freelancer DACH für SaaS & Dashboard UX",
        },
        {
            property: "og:description",
            content:
                "Senior UI/UX Designer mit 25+ Jahren Erfahrung. SaaS UI Design, Dashboard UX, Corporate Webdesign. Remote DACH. Ø +73% Conversion.",
        },
        { property: "og:url", content: "https://pukalani.studio/best/" },
        {
            property: "og:image",
            content:
                "https://pukalani.studio/images/og/ux-designer-david-schubert.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
            property: "og:image:alt",
            content:
                "Senior UI/UX Designer David Schubert präsentiert SaaS Dashboard",
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: "UI/UX Designer Freelancer DACH für SaaS & Dashboard UX",
        },
        {
            name: "twitter:description",
            content:
                "Senior UX Designer · SaaS UI · Dashboard Design · Corporate Webdesign · WCAG 2.1 AA · Remote DACH",
        },
        {
            name: "twitter:image",
            content:
                "https://pukalani.studio/images/og/ux-designer-david-schubert.jpg",
        },
        {
            name: "twitter:image:alt",
            content:
                "UI/UX Designer Freelancer erstellt SaaS Dashboard Design in Figma",
        },
        { name: "twitter:site", content: "@davidschubert" },
        { name: "twitter:creator", content: "@davidschubert" },
        // Additional SEO
        { name: "author", content: "David Schubert" },
        { name: "theme-color", content: "#10b981" },
    ],
    link: [
        { rel: "canonical", href: canonicalUrl },
        {
            rel: "alternate",
            hreflang: "de",
            href: "https://pukalani.studio/best/",
        },
        {
            rel: "alternate",
            hreflang: "de-DE",
            href: "https://pukalani.studio/de/best/",
        },
        {
            rel: "alternate",
            hreflang: "de-AT",
            href: "https://pukalani.studio/de-at/best/",
        },
        {
            rel: "alternate",
            hreflang: "de-CH",
            href: "https://pukalani.studio/de-ch/best/",
        },
        {
            rel: "alternate",
            hreflang: "x-default",
            href: "https://pukalani.studio/best/",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
            sizes: "any",
        },
        {
            rel: "icon",
            type: "image/svg+xml",
            href: "/icon.svg",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.svg",
        },
        {
            rel: "manifest",
            href: "/site.webmanifest",
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
                url: "https://pukalani.studio/best/",
                image: "https://pukalani.studio/images/profile-photo.jpg",
                sameAs: [
                    "https://www.linkedin.com/in/davidschubert",
                    "https://www.behance.net/davidschubert",
                    "https://github.com/davidschubert",
                ],
                knowsAbout: [
                    "UI/UX Design",
                    "SaaS UI Design",
                    "Dashboard UX Design",
                    "Corporate Webdesign",
                    "Landing Page Design",
                    "Figma Design",
                    "Design Systems",
                    "WCAG Accessibility",
                    "Conversion Optimierung",
                    "User Research",
                    "Information Architecture",
                    "Remote Design",
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
                name: "UI/UX Designer Freelancer DACH",
                serviceType: "UI/UX Design Beratung",
                url: "https://pukalani.studio/best/",
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
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "47",
                    bestRating: "5",
                    itemReviewed: {
                        "@type": "ProfessionalService",
                        name: "UI/UX Designer Freelancer DACH",
                        url: "https://pukalani.studio/best/",
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
                            text: "Richtwerte: UX-Audit €2.500–5.000 · Landingpage €5.000–12.000 · Corporate Website €15.000–35.000 · SaaS Produkt €25.000–75.000+. Tagessatz i.d.R. €800–1.000.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Freelancer vs. Agentur – was ist besser?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Freelancer: direkt, flexibel, 30-50% günstiger, schnellere Entscheidungen. Agentur: größere Teams, mehr Overhead. Ich biete Netzwerk-Partner für Full-Service, wenn nötig.",
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
                            text: "UX Audit: 1–2 Wochen · Landingpage: 2–3 Wochen · Corporate: 6–12 Wochen · SaaS Feature: 3–6 Wochen · Komplettes Redesign: 3–6 Monate.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Machen Sie auch App-Design (iOS/Android)?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Ja. Native Patterns, responsive Layouts, Prototypen für iOS, Android und Progressive Web Apps. Entwicklung via Partnernetzwerk.",
                        },
                    },
                ],
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Pukalani Studio",
                        item: "https://pukalani.studio/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Leistungen",
                        item: "https://pukalani.studio/leistungen/",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "UX Designer Freelancer DACH",
                        item: "https://pukalani.studio/best/",
                    },
                ],
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Pukalani Studio",
                url: "https://pukalani.studio/",
                logo: "https://pukalani.studio/icon.svg",
                sameAs: [
                    "https://www.linkedin.com/in/davidschubert",
                    "https://www.behance.net/davidschubert",
                    "https://github.com/davidschubert",
                ],
            }),
        },
    ],
});

// Performance optimizations
const { observeElements } = usePerformantAnimations();
const { prefersReducedMotion } = useAccessibility();

onMounted(() => {
    // Animate sections on scroll without causing forced reflows
    observeElements("section");
});
</script>

<style scoped>
/* Skip Link - fokussierbar und barrierefrei */
.skip-to-content {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    z-index: 9999;
    background: #10b981;
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skip-to-content:focus,
.skip-to-content:focus-visible {
    position: fixed;
    left: 1rem;
    top: 1rem;
    clip: auto;
    clip-path: none;
    white-space: normal;
    overflow: visible;
    padding: 1rem 1.5rem;
    margin: 0;
    width: auto;
    height: auto;
    outline: 3px solid #059669;
    outline-offset: 4px;
    transition: all 0.2s ease-in-out;
}

.skip-to-content:hover {
    background: #059669;
}

@media (prefers-contrast: high) {
    .skip-to-content:focus,
    .skip-to-content:focus-visible {
        outline-width: 4px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .skip-to-content:focus,
    .skip-to-content:focus-visible {
        transition: none;
    }

    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
