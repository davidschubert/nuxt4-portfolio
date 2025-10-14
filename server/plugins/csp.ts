/**
 * CSP (Content Security Policy) Plugin mit Nonce-Support
 * Schützt gegen XSS-Angriffe ohne 'unsafe-inline'
 */

import { randomBytes } from "crypto";

export default defineNitroPlugin((nitroApp) => {
    // Funktion zum Generieren der CSP-Direktiven
    const generateCSP = (nonce?: string) => {
        const isDev = process.dev;

        const cspDirectives = [
            "default-src 'self'",
            // Scripts: mit Nonce für SSR, sonst nur self
            nonce
                ? `script-src 'self' 'nonce-${nonce}'${
                      isDev ? " 'unsafe-eval'" : ""
                  }`
                : `script-src 'self'${isDev ? " 'unsafe-eval'" : ""}`,
            // Styles: mit Nonce für SSR, sonst nur self
            nonce ? `style-src 'self' 'nonce-${nonce}'` : "style-src 'self'",
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
            // IMMER aktiv, auch in Development für besseren Schutz
            "trusted-types default vue vue-html nuxt-app dompurify sanitizer",
            // Erzwingt Trusted Types für gefährliche DOM APIs
            "require-trusted-types-for 'script'",
            // Upgrade insecure requests in Production
            ...(isDev ? [] : ["upgrade-insecure-requests"]),
        ];

        return cspDirectives.join("; ");
    };

    // Hook für SSR-Requests mit Nonce-basierter CSP
    nitroApp.hooks.hook("render:html", (html, { event }) => {
        // Generiere kryptographisch sicheren Nonce für jede Request
        const nonce = randomBytes(16).toString("base64");

        // Speichere Nonce im Event-Context für späteren Zugriff
        event.context.cspNonce = nonce;

        // CSP Policy mit Nonce (überschreibt die grundlegende CSP)
        const cspHeader = generateCSP(nonce);

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
