const CACHE_NAME = 'pwa-demo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon.png'
];

console.log(self)

// 安装阶段：缓存核心资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache install');
        cache.addAll(urlsToCache)
      }
    )
  );
});

// 拦截请求：优先返回缓存内容
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});