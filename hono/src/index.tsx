import { Hono } from 'hono'
import { requestHandler } from '@builder.io/qwik-city/middleware/request-handler'

// @ts-ignore
import render from '../../frontend/server/entry.ssr.js'
// @ts-ignore
import qwikCityPlan from '../../frontend/server/qwikcity-plan.js'

type Env = {
  Bindings: { /* tes bindings Workers (KV, D1, etc.) */ }
}

const app = new Hono<{ Bindings: Env }>()

app.all('*', (c) => {
  const platform = {
    env: c.env,
    cf: (c.req.raw as any).cf,
    ctx: c.executionCtx,
  }

  const createHandler = requestHandler as unknown as (
    args: { render: any; qwikCityPlan: any }
  ) => (req: Request, platform?: any, opts?: any) => Promise<Response>

  const handler = createHandler({ render, qwikCityPlan })
  return handler(c.req.raw, platform)

})

export default app
