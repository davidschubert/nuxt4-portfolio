<template>
    <a href="#main-content" class="skip-link" @click.prevent="skipToMain">
        {{ text }}
    </a>
</template>

<script setup lang="ts">
defineProps<{
    text?: string;
}>();

const { skipToContent } = useAccessibility();

const skipToMain = () => {
    skipToContent();
};
</script>

<style scoped>
.skip-link {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: 9999;

    padding: 1rem 1.5rem;
    background: #10b981;
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skip-link:focus,
.skip-link:focus-visible {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    outline: 3px solid #34d399;
    outline-offset: 3px;
}
</style>
