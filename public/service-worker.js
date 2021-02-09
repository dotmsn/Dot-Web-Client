// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
// eslint-disable-next-line no-undef
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function (event) {
    // We pass a promise to event.waitUntil to signal how
    // long install takes, and if it failed
    event.waitUntil(
        // We open a cache…
        caches.open('dot-sw-v1.0').then(function (cache) {
            // And add resources to it
            return cache.addAll([
                './',
                './static/js/bundle.js',
                './manifest.json',
                './logo.png',
                './static/js/vendors~main.chunk.js',
                './static/js/main.chunk.js',
            ]);
        }),
    );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function (event) {
    // Calling event.respondWith means we're in charge
    // of providing the response. We pass in a promise
    // that resolves with a response object
    event.respondWith(
        // First we look for something in the caches that
        // matches the request
        caches.match(event.request).then(function (response) {
            // If we get something, we return it, otherwise
            // it's null, and we'll pass the request to
            // fetch, which will use the network.
            return response || fetch(event.request);
        }),
    );
});
