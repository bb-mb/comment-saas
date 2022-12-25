import { middleware } from '@/types/middleware';
import { globalEnv } from '@/utils/globalEnv';

export const initEnv: middleware = async (c, next) => {
  globalEnv.set(c.env);
  await next();
};
