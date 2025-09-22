import { Hono } from 'hono'
import { requestHandler } from '@builder.io/qwik-city/middleware/request-handler'

// API simple
const app = new Hono()

app.post('/api/contact', async (c) => {
  const body = await c.req.parseBody()
  const { name, email, message } = body as Record<string, string>
  console.log('📩 Nouveau message :', { name, email, message })
  return c.redirect('/success')
})

// Qwik SSR (catch-all) — avec typage forcé pour calmer TS
app.all('*', async (c) => {
  const platform = {
    env: c.env,
    cf: (c.req.raw as any).cf,
    ctx: c.executionCtx,
  }

  // Les artefacts SSR générés par "npm run build:frontend"
  // @ts-ignore - pas de .d.ts générés par Qwik
  const { default: render } = await import('../frontend/server/entry.ssr.js')
  // @ts-ignore
  const { default: qwikCityPlan } = await import('../frontend/server/@qwik-city-plan.js')

  // 👉 forcer TS à considérer que requestHandler(...) retourne une fonction (req, platform, opts?) => Promise<Response>
  const createHandler = requestHandler as unknown as (
    args: { render: any; qwikCityPlan: any }
  ) => (req: Request, platform?: any, opts?: any) => Promise<Response>

  const handler = createHandler({ render, qwikCityPlan })

  // 👉 passer 3 arguments (le 3e peut être vide)
  return handler(c.req.raw, platform, {})
})

export default app
