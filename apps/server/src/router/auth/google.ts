import { Hono } from 'hono';

export const googleAuthRouter = new Hono();

googleAuthRouter.get('/redirect', (c) => {
  return c.redirect('/');
});
