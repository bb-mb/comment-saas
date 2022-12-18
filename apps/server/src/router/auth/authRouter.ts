import { Hono } from 'hono';
import { googleAuthRouter } from './google';

export const authRouter = new Hono();

authRouter.route('/google', googleAuthRouter);
