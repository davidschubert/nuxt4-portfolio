<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
        <!-- Project Type -->
        <div class="form-group">
            <label for="projectType">Projekttyp *</label>
            <select
                id="projectType"
                v-model="form.projectType"
                required
                class="form-select"
            >
                <option value="">Bitte wählen...</option>
                <option value="saas-dashboard">SaaS Dashboard Design</option>
                <option value="corporate-webdesign">Corporate Webdesign</option>
                <option value="landing-page">Landing Page Design</option>
                <option value="ux-audit">UX Audit</option>
                <option value="design-system">Design System</option>
                <option value="mobile-app">Mobile App Design</option>
                <option value="barrierefreiheit">
                    Barrierefreies Design WCAG
                </option>
                <option value="andere">Andere</option>
            </select>
        </div>

        <!-- Name -->
        <div class="form-row">
            <div class="form-group">
                <label for="firstName">Vorname *</label>
                <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="form-input"
                    placeholder="Max"
                />
            </div>

            <div class="form-group">
                <label for="lastName">Nachname *</label>
                <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="form-input"
                    placeholder="Mustermann"
                />
            </div>
        </div>

        <!-- Company & Position -->
        <div class="form-row">
            <div class="form-group">
                <label for="company">Firma/Organisation</label>
                <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="form-input"
                    placeholder="TechScale GmbH"
                />
            </div>

            <div class="form-group">
                <label for="position">Position</label>
                <input
                    id="position"
                    v-model="form.position"
                    type="text"
                    class="form-input"
                    placeholder="CEO, Product Owner, etc."
                />
            </div>
        </div>

        <!-- Contact Details -->
        <div class="form-row">
            <div class="form-group">
                <label for="email">E-Mail *</label>
                <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input"
                    placeholder="max@techscale.de"
                />
            </div>

            <div class="form-group">
                <label for="phone">Telefon</label>
                <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    placeholder="+49 123 456789"
                />
            </div>
        </div>

        <!-- Budget & Timeline -->
        <div class="form-row">
            <div class="form-group">
                <label for="budget">Budget-Range *</label>
                <select
                    id="budget"
                    v-model="form.budget"
                    required
                    class="form-select"
                >
                    <option value="">Bitte wählen...</option>
                    <option value="under-5k">&lt; €5.000 (Quick Wins)</option>
                    <option value="5-15k">€5.000 - €15.000 (Standard)</option>
                    <option value="15-35k">€15.000 - €35.000 (Komplex)</option>
                    <option value="over-35k">&gt; €35.000 (Enterprise)</option>
                    <option value="unclear">Noch unklar (Beratung)</option>
                </select>
            </div>

            <div class="form-group">
                <label for="timeline">Timeline *</label>
                <select
                    id="timeline"
                    v-model="form.timeline"
                    required
                    class="form-select"
                >
                    <option value="">Bitte wählen...</option>
                    <option value="asap">ASAP (Express +30%)</option>
                    <option value="4-weeks">Innerhalb 4 Wochen</option>
                    <option value="2-months">Innerhalb 2 Monaten</option>
                    <option value="flexible">Flexibel</option>
                </select>
            </div>
        </div>

        <!-- Project Description -->
        <div class="form-group">
            <label for="message">Projektbeschreibung *</label>
            <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="form-textarea"
                placeholder="Beschreiben Sie Ihr Projekt, Ihre Herausforderungen und Ziele. Je mehr Details, desto besser kann ich Ihnen helfen..."
            ></textarea>
        </div>

        <!-- How did you hear -->
        <div class="form-group">
            <label for="source">Wie haben Sie von mir erfahren?</label>
            <select id="source" v-model="form.source" class="form-select">
                <option value="">Bitte wählen (optional)</option>
                <option value="google">Google Suche</option>
                <option value="linkedin">LinkedIn</option>
                <option value="recommendation">Empfehlung</option>
                <option value="blog">Blog/Artikel</option>
                <option value="other">Andere</option>
            </select>
        </div>

        <!-- Privacy & Newsletter -->
        <div class="form-checkboxes">
            <div class="checkbox-group">
                <input
                    id="privacy"
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="form-checkbox"
                />
                <label for="privacy">
                    Ich habe die
                    <NuxtLink to="#datenschutz" target="_blank"
                        >Datenschutzerklärung</NuxtLink
                    >
                    gelesen und akzeptiere sie. *
                </label>
            </div>

            <div class="checkbox-group">
                <input
                    id="newsletter"
                    v-model="form.newsletter"
                    type="checkbox"
                    class="form-checkbox"
                />
                <label for="newsletter">
                    Ich möchte den monatlichen UX-Newsletter mit Tipps & Case
                    Studies erhalten.
                </label>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="form-actions">
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                    Anfrage an UI/UX Designer Freelancer senden →
                </span>
                <span v-else> Wird gesendet... </span>
            </button>

            <p class="form-note">
                ✓ Antwort innerhalb 24 Stunden garantiert<br />
                ✓ 100% DSGVO-konform<br />
                ✓ Keine Weitergabe an Dritte
            </p>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="showSuccess" class="alert alert-success">
            ✅ Vielen Dank für Ihre Anfrage! Ich melde mich innerhalb von 24
            Stunden bei Ihnen.
        </div>

        <div v-if="showError" class="alert alert-error">
            ❌ Es gab einen Fehler. Bitte versuchen Sie es erneut oder
            kontaktieren Sie mich direkt per E-Mail.
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";

// Form data
const form = ref({
    projectType: "",
    firstName: "",
    lastName: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: "",
    source: "",
    privacy: false,
    newsletter: false,
});

// Form states
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

// Handle form submission
const handleSubmit = async () => {
    isSubmitting.value = true;
    showError.value = false;
    showSuccess.value = false;

    try {
        // Here you would integrate with your backend or email service
        // For example: Formspree, Netlify Forms, or custom API endpoint

        const response = await $fetch("/api/contact", {
            method: "POST",
            body: {
                ...form.value,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent,
            },
        });

        if (response.success) {
            showSuccess.value = true;

            // Reset form
            form.value = {
                projectType: "",
                firstName: "",
                lastName: "",
                company: "",
                position: "",
                email: "",
                phone: "",
                budget: "",
                timeline: "",
                message: "",
                source: "",
                privacy: false,
                newsletter: false,
            };

            // Track conversion in Google Analytics
            if (typeof gtag !== "undefined") {
                gtag("event", "form_submit", {
                    event_category: "Contact",
                    event_label: "Project Inquiry",
                    value: form.value.budget,
                });
            }

            // Scroll to success message
            setTimeout(() => {
                document.querySelector(".alert-success")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 100);
        } else {
            throw new Error("Submission failed");
        }
    } catch (error) {
        console.error("Form submission error:", error);
        showError.value = true;
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-primary);
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-checkboxes {
    margin: 2rem 0;
}

.checkbox-group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.form-checkbox {
    margin-right: 0.5rem;
    margin-top: 0.25rem;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.checkbox-group label {
    cursor: pointer;
    line-height: 1.5;
}

.checkbox-group a {
    color: var(--primary-color);
    text-decoration: underline;
}

.form-actions {
    text-align: center;
    margin-top: 2rem;
}

.submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--radius);
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.form-note {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

.alert {
    padding: 1rem;
    border-radius: var(--radius);
    margin-top: 1.5rem;
    animation: slideIn 0.3s ease;
}

.alert-success {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #6ee7b7;
}

.alert-error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fca5a5;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .form-input,
    .form-select,
    .form-textarea {
        background: #1f2937;
        color: #f3f4f6;
        border-color: #374151;
    }

    .form-group label {
        color: #f3f4f6;
    }
}
</style>
