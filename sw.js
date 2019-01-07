const staticCache = "my-cache-1";

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith("my-") && cacheName !== staticCache
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
 
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(staticCache).then(function(cache) {
            return cache.addAll(
                [
                    "/img/1.jpg",
                    "/img/2.jpg",
                    "/img/3.jpg",
                    "/img/4.jpg",
                    "/img/5.jpg",
                    "/img/6.jpg",
                    "/img/7.jpg",
                    "/img/8.jpg",
                    "/img/9.jpg",
                    "/img/10.jpg",
                    "./js/main.js",
                    "./js/dbhelper.js",
                    "./js/restaurant_info.js",
                    "./css/styles.css",
                    "./",
                    "/restaurant.html",
                    "./index.html",
                    "/data/restaurants.json",
                    './restaurant.html?id=1',
                    './restaurant.html?id=2',
                    './restaurant.html?id=3',
                    './restaurant.html?id=4',
                    './restaurant.html?id=5',
                    './restaurant.html?id=6',
                    './restaurant.html?id=7',
                    './restaurant.html?id=8',
                    './restaurant.html?id=9',
                    './restaurant.html?id=10',
                    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
                    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
                    "http://localhost:5500/data/restaurants.json",
                    "http://127.0.0.1:5500/manifest.json",
                    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png",
                    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw ",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiamFzaGFuZGVlcCIsImEiOiJjanB5N3N1ZjgweTdqNDNxbHg3NXpxMGF2In0.4sCdGCrRogMI2yP7q2-IPw",
                ]
            )
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })/*.catch(function(err){
            console.log("fetch error" , err)
        })*/
    )
});
