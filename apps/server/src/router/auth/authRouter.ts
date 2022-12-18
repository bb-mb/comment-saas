import { createHono } from '@/utils/createHono';
import { googleAuthRouter } from './google';

export const authRouter = createHono();

authRouter.route('/google', googleAuthRouter);
