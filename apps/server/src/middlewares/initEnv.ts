import { middleware } from '@/types/middleware';
import { env } from '@/utils/env';

export const initEnv: middleware = async (c, next) => {
  env.set(c.env);
  await next();
};
