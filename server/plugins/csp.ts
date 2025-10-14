/**
 * CSP (Content Security Policy) Plugin mit Nonce-Support
 * Schützt gegen XSS-Angriffe ohne 'unsafe-inline'
 */

import { randomBytes } from "crypto";

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook("render:html", (html, { event }) => {
        // Generiere kryptographisch sicheren Nonce für jede Request
        const nonce = randomBytes(16).toString("base64");

        // Speichere Nonce im Event-Context für späteren Zugriff
        event.context.cspNonce = nonce;

        // CSP Policy mit Nonce
        const isDev = process.dev;

        const cspDirectives = [
            "default-src 'self'",
            // Scripts: nur self und mit Nonce, unsafe-eval nur in Dev für HMR
            `script-src 'self' 'nonce-${nonce}'${
                isDev ? " 'unsafe-eval'" : ""
            }`,
            // Styles: nur self und mit Nonce
            `style-src 'self' 'nonce-${nonce}'`,
            // Images: self, data URIs und HTTPS
            "img-src 'self' data: https:",
            // Fonts: self und data URIs
            "font-src 'self' data:",
            // Connections: self, HTTPS, WebSockets nur in Dev
            `connect-src 'self' https:${isDev ? " ws: wss:" : ""}`,
            // Manifest
            "manifest-src 'self'",
            // Workers
            "worker-src 'self' blob:",
            // Frame Ancestors: keine
            "frame-ancestors 'none'",
            // Base URI
            "base-uri 'self'",
            // Form Actions
            "form-action 'self'",
            // Objects: keine (Flash, Java, etc.)
            "object-src 'none'",
            // Trusted Types: Schutz gegen DOM-based XSS
            // Erlaubt Vue/Nuxt interne Policies + custom policies
            // IMMER aktiv, auch in Development für besseren Schutz
            "trusted-types default vue-html nuxt-app dompurify",
            // Erzwingt Trusted Types für gefährliche DOM APIs
            // In Production: Enforcement Mode
            // In Development: Auch aktiv für Tests (HMR benötigt unsafe-eval, aber nicht für DOM)
            "require-trusted-types-for 'script'",
            // Upgrade insecure requests in Production
            ...(isDev ? [] : ["upgrade-insecure-requests"]),
        ];

        const cspHeader = cspDirectives.join("; ");

        // Setze CSP Header
        event.node.res.setHeader("Content-Security-Policy", cspHeader);

        // Füge Nonce zu allen Script und Style Tags hinzu
        html.head = html.head.map((segment) => {
            // Füge nonce zu <script> Tags hinzu
            if (typeof segment === "string") {
                segment = segment.replace(
                    /<script(?![^>]*nonce=)/g,
                    `<script nonce="${nonce}"`
                );
                // Füge nonce zu <style> Tags hinzu
                segment = segment.replace(
                    /<style(?![^>]*nonce=)/g,
                    `<style nonce="${nonce}"`
                );
            }
            return segment;
        });

        html.bodyAppend = html.bodyAppend.map((segment) => {
            if (typeof segment === "string") {
                segment = segment.replace(
                    /<script(?![^>]*nonce=)/g,
                    `<script nonce="${nonce}"`
                );
            }
            return segment;
        });
    });
});
