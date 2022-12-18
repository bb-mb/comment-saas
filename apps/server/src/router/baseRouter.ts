import { createHono } from '@/utils/honoHelper';
import { authRouter } from './auth';

export const baseRouter = createHono();
baseRouter.route('auth', authRouter);
