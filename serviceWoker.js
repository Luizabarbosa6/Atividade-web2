const staticAnimeSite = 'my-favorite-anime-v1';
const assets = [
  "/",
  "/index.html",
  "/pag2.html",
  "/pag3.html",
  "/pag4.html",
  "/pag5.html",
  "/css/styles.css",
  "/img/icone.png",
  "/img/icone2.png",
  "/img/icone3.png",
  "/img/icone4.png",
  "/img/icon5.png",
  "/img/icone1.png",
  "/img/72.png",
  "/img/appstore.png",
  "/img/playstore.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAnimeSite).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});