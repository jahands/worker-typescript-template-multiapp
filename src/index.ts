// Import a handler for each app
import { handleExample } from './apps/example/example'
const handlers = {
  'example.com': handleExample,
  // 'my-cool-app.com': handleMyCoolApp
}
addEventListener('fetch', event => {
  let url = new URL(event.request.url)
  let handle = (handlers as any)[url.hostname]
  if (handle) {
    event.respondWith(handle(event))
  } else {
    event.respondWith(new Response('not found', { status: 404 }))
  }
})
