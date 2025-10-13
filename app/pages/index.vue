<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-8">
        <nav class="flex gap-6">
            <NuxtLink
                to="/chatgpt"
                class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
            >
                ChatGPT
            </NuxtLink>
            <NuxtLink
                to="/claude"
                class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
            >
                Claude
            </NuxtLink>
        </nav>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
