/* Offline-Speicher für den Vokabelkasten.
   Bei jeder neuen Version VERSION hochzählen, dann holen sich die Geräte die neuen Dateien. */
const VERSION = 'vokabelkasten-v6';
const FILES = [
  './', './index.html', './vocab.js', './manifest.webmanifest',
  './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-maskable-512.png', './icons/favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== 'fonts').map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Schriften von Google einmal laden und dann offline behalten
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open('fonts').then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); c.put(req, res.clone()); return res; }
      catch (err) { return Response.error(); }
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // App-Dateien: zuerst aus dem Speicher (schnell und offline), im Hintergrund aktualisieren
  e.respondWith(caches.open(VERSION).then(async c => {
    const key = req.mode === 'navigate' ? './index.html' : req;
    const hit = await c.match(key, { ignoreSearch: true });
    const net = fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || Response.error();
  }));
});
