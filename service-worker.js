/*
==========================================================
Baby Companion — Service Worker

Update-Workflow:
- CACHE_VERSION bei jedem funktionalen Release erhöhen.
- Der neue Worker aktiviert sich dann automatisch sofort
  (skipWaiting + clients.claim) und räumt alle Caches
  vorheriger Versionen selbstständig auf.

Cache-Strategie:
- App-Shell wird beim Install vollständig vorab gecacht
  (Cache-First) für verlässliche Offline-Nutzung.
- Fehlt eine Ressource im Cache, wird sie live geladen und
  zusätzlich zur Laufzeit im Cache abgelegt (Runtime-
  Caching), z.B. für später ergänzte Assets.
- Schlägt bei einer Seitennavigation sowohl Cache als auch
  Netzwerk fehl, wird als Fallback die gecachte index.html
  ausgeliefert statt eines Browser-Fehlerbildschirms.
==========================================================
*/

const CACHE_VERSION = "v1.3.0";

const CACHE_NAME = `baby-companion-${CACHE_VERSION}`;

const APP_SHELL_FILES = [

    "./",

    "./index.html",

    "./style.css",

    "./app.js",

    "./manifest.json",

    "./icons/icon-192.png",

    "./icons/icon-512.png",

    "./icons/maskable-512.png"

];

/* ==========================================================
   INSTALL
========================================================== */

self.addEventListener("install", event => {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL_FILES))
            .then(() => self.skipWaiting())

    );

});

/* ==========================================================
   ACTIVATE
   Entfernt automatisch alle Caches vorheriger Versionen.
========================================================== */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches
            .keys()
            .then(cacheNames =>

                Promise.all(

                    cacheNames

                        .filter(name => name !== CACHE_NAME)

                        .map(name => caches.delete(name))

                )

            )
            .then(() => self.clients.claim())

    );

});

/* ==========================================================
   FETCH
   Cache-First mit Runtime-Caching und Offline-Fallback.
========================================================== */

self.addEventListener("fetch", event => {

    // Nur GET-Requests behandeln – andere Methoden lassen
    // sich nicht sinnvoll cachen.
    if (event.request.method !== "GET") {

        return;

    }

    event.respondWith(

        caches.match(event.request).then(cachedResponse => {

            if (cachedResponse) {

                return cachedResponse;

            }

            return fetch(event.request)
                .then(networkResponse => {

                    // Nur gültige, gleich-originäre Antworten cachen.
                    if (
                        networkResponse &&
                        networkResponse.ok &&
                        networkResponse.type === "basic"
                    ) {

                        const responseClone = networkResponse.clone();

                        caches
                            .open(CACHE_NAME)
                            .then(cache =>
                                cache.put(event.request, responseClone)
                            );

                    }

                    return networkResponse;

                })
                .catch(() => {

                    if (event.request.mode === "navigate") {

                        return caches.match("./index.html");

                    }

                    return undefined;

                });

        })

    );

});

/* ==========================================================
   MESSAGE
   Ermöglicht es der App, einen wartenden Worker gezielt
   sofort zu aktivieren (Hook für ein künftiges
   "Update verfügbar"-UI, aktuell nicht zwingend nötig, da
   bereits automatisch per skipWaiting aktualisiert wird).
========================================================== */

self.addEventListener("message", event => {

    if (event.data === "SKIP_WAITING") {

        self.skipWaiting();

    }

});