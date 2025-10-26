// /hono/src/index.tsx
import { Hono } from 'hono'
// @ts-ignore
import qwikCityPlan from '../.qwik-server/@qwik-city-plan.js'
// @ts-ignore
import render from '../.qwik-server/entry.ssr.js'
import {
  requestHandler as qwikRequestHandler,
  type ServerRequestEvent,
} from '@builder.io/qwik-city/middleware/request-handler'


// Déclarations pour Wrangler
declare const __STATIC_CONTENT_MANIFEST: string

type Bindings = {
  __STATIC_CONTENT: Fetcher
  __STATIC_CONTENT_MANIFEST?: string
} & Record<string, unknown>

const app = new Hono<{ Bindings: Bindings }>()

// ===== Helpers MIME =====
const extToMime = (pathname: string): string | undefined => {
  const p = pathname.toLowerCase()
  if (p.endsWith('.js') || p.endsWith('.mjs')) return 'text/javascript'
  if (p.endsWith('.css')) return 'text/css'
  if (p.endsWith('.svg')) return 'image/svg+xml'
  if (p.endsWith('.json')) return 'application/json'
  if (p.endsWith('.html')) return 'text/html; charset=utf-8'
  if (p.endsWith('.txt')) return 'text/plain; charset=utf-8'
  if (p.endsWith('.png')) return 'image/png'
  if (p.endsWith('.jpg') || p.endsWith('.jpeg')) return 'image/jpeg'
  if (p.endsWith('.webp')) return 'image/webp'
  if (p.endsWith('.ico')) return 'image/x-icon'
  return undefined
}

// Servez les assets du répertoire public
app.get('/assets/*', async (c) => {
  const pathname = new URL(c.req.url).pathname
  const res = await c.env.__STATIC_CONTENT.fetch(`http://fakehost${pathname}`)
  return res
})

app.get('/build/*', async (c) => {
  const pathname = new URL(c.req.url).pathname
  const res = await c.env.__STATIC_CONTENT.fetch(`http://fakehost${pathname}`)
  return res
})

// ===== Middleware pour désactiver le cache du HTML (dev) =====
app.use('*', async (c, next) => {
  const url = new URL(c.req.url);
  const p = url.pathname;

  // ignore les assets
  if (p.startsWith('/assets/') || p.startsWith('/build/')) return next();

  // si pas d'extension et pas déjà un slash final -> redirige
  if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) {
    url.pathname = p + '/';
    return c.redirect(url.toString(), 308);
  }
  return next();
});

// ===== SSR Qwik =====
app.all('*', async (c): Promise<Response> => {
  const url = new URL(c.req.url)

  const { readable, writable } = new TransformStream<Uint8Array>()
  const headers = new Headers()
  let status = 200

  const serverRequestEv: ServerRequestEvent = {
    mode: 'server',
    url,
    request: c.req.raw,
    platform: c.env as unknown as Record<string, unknown>,
    locale: undefined,
    env: {
      get(key: string): string | undefined {
        const v = (c.env as Record<string, unknown>)[key]
        return typeof v === 'string' ? v : undefined
      },
    },
    getWritableStream: () => writable,
    getClientConn: () => ({
      ip:
        c.req.header('CF-Connecting-IP') ||
        c.req.header('X-Forwarded-For') ||
        c.req.header('X-Real-IP') ||
        'unknown',
    }),
  }

  const run = await qwikRequestHandler(
    serverRequestEv,
    {
      render,
      qwikCityPlan,
      manifest: (globalThis as any).MANIFEST ?? {},
    },
    {} as any
  )

  if (run instanceof Response) {
    try { (writable as any).close?.() } catch {}
    return run
  }

  if (run && typeof run === 'object') {
    if ('status' in run && typeof (run as any).status === 'number') {
      status = (run as any).status
    }
    if ('headers' in run && (run as any).headers) {
      const h = (run as any).headers as Record<string, string>
      for (const [k, v] of Object.entries(h)) headers.set(k, v)
    }
  }

  return new Response(readable, { status, headers })
})

export default app
