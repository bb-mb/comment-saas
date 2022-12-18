import { createHono } from '@/utils/createHono';

export const googleAuthRouter = createHono();

googleAuthRouter.get('/redirect', (c) => {
  return c.redirect('/');
});
