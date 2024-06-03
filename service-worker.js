var cacheName = 'pwa-gallery';
var filesToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/script.js',
  '/images/dp.jpg',
  '/images/logo-60.png',
  '/images/logo-90.png',
  '/images/logo-100.png',
  '/images/logo-512.png',
  '/images/profile.webp'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
