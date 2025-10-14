<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-8">
        <main id="main-content" role="main" tabindex="-1">
            <h1 class="sr-only">Portfolio Navigation</h1>
            <nav aria-label="Hauptnavigation" class="flex gap-6">
                <NuxtLink
                    to="/chatgpt"
                    class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium focus-visible:ring-4 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                    ChatGPT
                </NuxtLink>
                <NuxtLink
                    to="/claude"
                    class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium focus-visible:ring-4 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                    Claude
                </NuxtLink>
            </nav>
        </main>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
