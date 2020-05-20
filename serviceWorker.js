const staticAssets = [
    './',
    './css/style.css',
    './purecss01.html',
    './purecss02.html',
    './purecss03.html',
    './purecss04.html',
    './purecss05.html',
    './purecss06.html',
    './purecss07.html',
    './purecss08.html',
    './purecss09.html',
    './purecss10.html',
    './purecss11.html',
    './purecss12.html',
    './purecss13.html',
    './purecss14.html',
    './purecss15.html',
    './purecss16.html',
    './purecss17.html',
    './purecss18.html',
    './purecss19.html',
    './purecss20.html',
    './purecss21.html',
    './purecss22.html',
    './purecss23.html',
    './purecss24.html',
    './purecss25.html',
    './purecss26.html',
    './purecss27.html',
    './purecss28.html',
    './purecss29.html',
    './purecss30.html',
    './purecss31.html',
    './purecss32.html',
    './purecss33.html',
    './purecss34.html',
    './purecss35.html',
    './purecss36.html',
    './purecss37.html',
    './purecss38.html',
    './purecss39.html',
    './purecss40.html',
    './purecss41.html',
    './purecss42.html',
    './purecss43.html',
    './purecss44.html',
    './purecss45.html',
    './purecss46.html',
    './purecss47.html',
    './purecss48.html',
    './purecss49.html',
    './purecss50.html',
    './images/pure-css-cellphone1.jpg',
    './images/pure-css-cellphone2.jpg',
    './images/pure-css-laptop.jpg',
    './images/pure-css-monitor.jpg'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.url) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}
