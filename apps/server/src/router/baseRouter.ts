import { Hono } from 'hono';
import { authRouter } from './auth';

export const baseRouter = new Hono();
baseRouter.route('auth', authRouter);
