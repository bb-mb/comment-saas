import { controllerMethod } from '@/types/Controller';
import { google } from 'worker-auth-providers';
import { GoogleAuthService } from './googleAuth.service';

export class GoogleAuthController {
  googleAuthService = new GoogleAuthService();

  redirectGoogleAuth: controllerMethod = (c) => {
    const { url } = this.googleAuthService.getAuthorizationUrl(c.env);

    return c.redirect(url);
  };

  authCallback: controllerMethod = async (c) => {
    const { user } = await this.googleAuthService.getGoogleUser(c.req, c.env);

    return c.json(user);
  };
}
