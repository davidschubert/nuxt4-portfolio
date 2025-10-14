<template>
    <a
        href="#main-content"
        class="skip-link"
        tabindex="0"
        @click.prevent="skipToMain"
    >
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
    /* Screen reader only positioning that maintains focusability */
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    /* WICHTIG: Keine width/height Einschränkung für Fokussierbarkeit */

    /* Styles für den sichtbaren Zustand (bei Focus) */
    z-index: 9999;
    background: #10b981;
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skip-link:focus,
.skip-link:focus-visible {
    /* Wird sichtbar bei Keyboard-Focus */
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 1rem;
    clip: auto;
    clip-path: none;
    white-space: normal;
    overflow: visible;
    padding: 1rem 1.5rem;
    margin: 0;
    width: auto;
    height: auto;
    outline: 3px solid #34d399;
    outline-offset: 3px;
    /* Smooth transition */
    transition: all 0.2s ease-in-out;
}

/* Zusätzlicher Hover-Effekt für besseres Feedback */
.skip-link:hover {
    background: #059669;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .skip-link:focus,
    .skip-link:focus-visible {
        outline-width: 4px;
        outline-offset: 4px;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .skip-link:focus,
    .skip-link:focus-visible {
        transition: none;
    }
}
</style>
