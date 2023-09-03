import { Ratelimit } from '@upstash/ratelimit';
import { ipAddress } from '@vercel/edge';
import type { NextRequest } from 'next/server';
import { redis } from './utils/upstash';

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(40, '60 s'),
  analytics: true,
});

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    const ip = ipAddress(request) || 'unknown';

    const { success } = await ratelimit.limit(`api/${ip}`);

    if (!success)
      return new Response('you are being rate limited', { status: 429 });
  }
}
