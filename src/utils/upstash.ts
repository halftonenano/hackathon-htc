import { Redis } from '@upstash/redis/cloudflare';

export const redis = Redis.fromEnv({
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
