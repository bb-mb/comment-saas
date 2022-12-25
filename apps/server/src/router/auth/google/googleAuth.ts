import { createHono } from '@/utils/honoHelper';
import { GoogleAuthController } from './googleAuth.controller';

export const googleAuthRouter = createHono();
const googleAuthController = new GoogleAuthController();

googleAuthRouter.get('/', googleAuthController.redirectGoogleAuth);
googleAuthRouter.get('/redirect', googleAuthController.authCallback);
