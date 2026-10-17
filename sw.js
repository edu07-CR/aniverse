/* =====================================================================
   AniVerse - Service Worker
   Responsável por receber e mostrar notificações
===================================================================== */

const CACHE_NAME = 'aniverse-v2';

self.addEventListener('install', event => {
    console.log('✅ Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('✅ Service Worker ativado');
    event.waitUntil(clients.claim());
});

// Intercepta requisições para não guardar HTML em cache (evita bug de logout)
self.addEventListener('fetch', event => {
    if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
        event.respondWith(fetch(event.request));
        return;
    }
});

self.addEventListener('message', event => {
    const data = event.data;
    if (data && data.tipo === 'notificar') {
        const { titulo, corpo, url } = data;
        self.registration.showNotification(titulo, {
            body: corpo,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%232b7fff"/><text x="50" y="68" font-size="52" font-family="Arial" font-weight="bold" fill="white" text-anchor="middle">AV</text></svg>',
            badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%232b7fff"/></svg>',
            vibrate: [200, 100, 200],
            tag: 'aniverse-episodio',
            renotify: true,
            data: { url: url || '/agenda.html' }
        });
    }
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    const url = event.notification.data?.url || '/agenda.html';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.focus();
                    return client.navigate(url);
                }
            }
            if (clients.openWindow) return clients.openWindow(url);
        })
    );
});
