import { middleware } from '@/types/middleware';
import { GoogleAuthService } from './googleAuth.service';

export class GoogleAuthController {
  googleAuthService = new GoogleAuthService();

  redirectGoogleAuth: middleware = (c) => {
    const { url } = this.googleAuthService.getAuthorizationUrl();

    return c.redirect(url);
  };

  authCallback: middleware = async (c) => {
    const { user } = await this.googleAuthService.getGoogleUser(c.req);

    return c.json(user);
  };
}
