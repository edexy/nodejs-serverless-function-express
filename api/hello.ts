import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.send("Oops, a little hiccup! We're ironing things out and will be back with you shortly!")
}
