import { Hono } from 'hono'
import { requestHandler } from '@builder.io/qwik-city/middleware/request-handler'

const app = new Hono()

app.all('*', async (c) => {
  const platform = {
    env: c.env,
    cf: (c.req.raw as any).cf,
    ctx: c.executionCtx,
  }

  const renderMod = await import('../frontend/server/entry.ssr.js')
  const planMod = await import('../frontend/server/@qwik-city-plan.js')

  const render = renderMod?.default ?? renderMod
  const qwikCityPlan = planMod?.default ?? planMod

  const handler = (requestHandler as any)({ render, qwikCityPlan })
  return handler(c.req.raw, platform)
})

export default app
