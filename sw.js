// Network first, cache as fallback, so the app opens offline and updates whenever you're online.
const CACHE = "second-brain-v2";
const CORE = ["./", "./index.html", "./icon.svg", "./manifest.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  // Only cache the app itself and its fonts. Never cache GitHub API calls (they carry your token).
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  e.respondWith(fetch(e.request).then(res => {
    if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined))));
});
