import { Hono } from 'hono';
import qwikCityPlan from '../.qwik-server/@qwik-city-plan.patched.js';
import render from '../.qwik-server/entry.ssr.js';
import {
  requestHandler as qwikRequestHandler,
  type ServerRequestEvent,
} from '@builder.io/qwik-city/middleware/request-handler';

// en haut du fichier
type Bindings = {
  __STATIC_CONTENT?: Fetcher | KVNamespace;
  __STATIC_CONTENT_MANIFEST?: string;
} & Record<string, unknown>;

const app = new Hono<{ Bindings: Bindings }>();

// --------- helpers ----------
// Détecte le bon MIME (fallback si CF ne le met pas)
const extToMime = (pathname: string): string | undefined => {
  const p = pathname.toLowerCase();
  if (p.endsWith('.js') || p.endsWith('.mjs')) return 'text/javascript';
  if (p.endsWith('.css')) return 'text/css';
  if (p.endsWith('.svg')) return 'image/svg+xml';
  if (p.endsWith('.json')) return 'application/json';
  if (p.endsWith('.html')) return 'text/html; charset=utf-8';
  if (p.endsWith('.txt')) return 'text/plain; charset=utf-8';
  if (p.endsWith('.png')) return 'image/png';
  if (p.endsWith('.jpg') || p.endsWith('.jpeg')) return 'image/jpeg';
  if (p.endsWith('.webp')) return 'image/webp';
  if (p.endsWith('.ico')) return 'image/x-icon';
  return undefined;
};

const serveFromSites = async (c: any): Promise<Response> => {
  const storage = c.env.__STATIC_CONTENT as Fetcher | KVNamespace | undefined;
  const manifestJson = c.env.__STATIC_CONTENT_MANIFEST as string | undefined;
  const url = new URL(c.req.url);
  const pathname = url.pathname;

  if (!storage) return new Response('Not Found', { status: 404 });

  // Cas 1 : Fetcher (Wrangler récent)
  if (typeof (storage as Fetcher).fetch === 'function') {
    const res = await (storage as Fetcher).fetch(c.req.raw);
    if (res.status === 404) return res;
    if (!res.headers.get('content-type')) {
      const mime = extToMime(pathname);
      if (mime) {
        const h = new Headers(res.headers);
        h.set('content-type', mime);
        return new Response(await res.arrayBuffer(), { status: res.status, headers: h });
      }
    }
    return res;
  }

  // Cas 2 : KVNamespace (ancien mode)
  if (!manifestJson) return new Response('Not Found', { status: 404 });
  const manifest = JSON.parse(manifestJson) as Record<string, string>;
  const key = manifest[pathname.replace(/^\//, '')] ?? pathname.replace(/^\//, '');
  const value = await (storage as KVNamespace).get(key, 'arrayBuffer');
  if (!value) return new Response('Not Found', { status: 404 });
  const headers = new Headers();
  const mime = extToMime(pathname);
  if (mime) headers.set('content-type', mime);
  return new Response(value, { status: 200, headers });
};

// Routes statiques AVANT le SSR
app.get('/build/*', serveFromSites);
app.get('/assets/*', serveFromSites);
app.get('/favicon.svg', serveFromSites);

// Fallback SSR (streaming)
app.all('*', async (c): Promise<Response> => {
  const url = new URL(c.req.url);

  const plan = {
    ...qwikCityPlan,
    basePathname: (qwikCityPlan as any).basePathname ?? '/',
    trailingSlash: (qwikCityPlan as any).trailingSlash ?? false,
  };

  const { readable, writable } = new TransformStream<Uint8Array>();
  const headers = new Headers();
  let status = 200;

  const serverRequestEv: ServerRequestEvent = {
    mode: 'server',
    url,
    request: c.req.raw,
    locale: undefined,
    platform: c.env as unknown as Record<string, unknown>,
    env: {
      get(key: string): string | undefined {
        const v = (c.env as Record<string, unknown>)[key];
        return typeof v === 'string' ? v : undefined;
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
  };

  const qwikSerializer =
    {} as unknown as Parameters<typeof qwikRequestHandler>[2];

  const run = await qwikRequestHandler(
    serverRequestEv,
    { render, qwikCityPlan: plan, manifest: (globalThis as any).MANIFEST ?? {} },
    qwikSerializer
  );

  if (run instanceof Response) {
    try { (writable as any).close?.(); } catch {}
    return run;
  }

  if (run && typeof run === 'object') {
    if ('status' in run && typeof (run as any).status === 'number') {
      status = (run as any).status;
    }
    if ('headers' in run && (run as any).headers) {
      const h = (run as any).headers as Record<string, string>;
      for (const [k, v] of Object.entries(h)) headers.set(k, v);
    }
  }

  return new Response(readable, { status, headers });
});

export default app;
