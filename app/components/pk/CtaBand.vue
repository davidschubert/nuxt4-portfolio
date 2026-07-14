<template>
    <section
        aria-labelledby="cta-band-title"
        class="border-t border-gray-200 bg-gradient-to-br from-emerald-600 to-blue-700 text-white dark:border-gray-800"
    >
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
            <h2
                id="cta-band-title"
                class="text-2xl font-bold tracking-tight md:text-3xl"
            >
                {{ title }}
            </h2>
            <p class="mt-3 max-w-3xl text-lg leading-relaxed text-emerald-50">
                {{ text }}
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
                <a
                    href="https://cal.com/davidschubert/30min"
                    target="_blank"
                    rel="noopener nofollow"
                    class="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Kostenloses Erstgespräch (30 Min) →
                </a>
                <a
                    :href="`mailto:${email}`"
                    class="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                    E-Mail senden
                </a>
            </div>
            <p class="mt-4 text-sm text-emerald-100">
                Antwort innerhalb von 24 Stunden · Festpreis-Angebot innerhalb
                von 48 Stunden nach dem Gespräch
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string;
        text?: string;
    }>(),
    {
        title: "Lassen Sie uns über Ihr Projekt sprechen",
        text: "Buchen Sie ein kostenloses, 30-minütiges Erstgespräch – unverbindlich, per Zoom, Teams oder Meet. Oder schreiben Sie eine E-Mail mit Ihrer Projektidee.",
    }
);

const email = atob("bWFpbEBkYXZpZHNjaHViZXJ0LmNvbQ==");
</script>
