const staticAnimeSite = 'my-favorite-anime-v1';
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/img/icon/android-icon-48x48.png",
  "/img/icon/android-icon-72x72.png",
  "/img/icon/android-icon-96x96.png",
  "/img/icon/android-icon-144x144.png",
  "/img/icon/android-icon-152x152.png",
  "/img/icon/android-icon-180x180.png",
  "img/icon/favicon-16x16.png",
  "img/icon/favicon-32x32.png",
  "img/icon/icon-512x512.png",
  "img/icon/ms-icon-310x310.png"

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