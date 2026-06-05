const CACHE_NAME = 'feria-partner-v3'; 
const ASSETS = [
  './',
  './index.html',
  './Feria_Partner.html',
  './Feria_Partner_VIP.html',
  './manifest.json',
  './manifest_standard.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
