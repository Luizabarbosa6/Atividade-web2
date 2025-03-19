const staticAnimeSite = 'my-favorite-anime-v1';
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/img/android-icon-48x48.png",
  "/img/android-icon-72x72.png",
  "/img/android-icon-96x96.png",
  "/img/android-icon-144x144.png",
  "/img/android-icon-152x152.png",
  "/img/android-icon-180x180.png",
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