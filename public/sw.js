const CACHE = "yanis-portfolio-v1"
const ASSETS = ["/", "/index.html", "/hero.png", "/music.mp3"]

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  )
})

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  )
})