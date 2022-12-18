import { createHono } from '@/utils/honoHelper';
import { googleAuthRouter } from './google';

export const authRouter = createHono();

authRouter.route('/google', googleAuthRouter);
