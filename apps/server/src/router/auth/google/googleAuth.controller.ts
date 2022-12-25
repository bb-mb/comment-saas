import { middleware } from '@/types/middleware';
import { GoogleAuthService } from './googleAuth.service';

export class GoogleAuthController {
  googleAuthService = new GoogleAuthService();

  redirectGoogleAuth: middleware = (c) => {
    const { url } = this.googleAuthService.getAuthorizationUrl();

    return c.redirect(url);
  };

  authCallback: middleware = async (c) => {
    const { user }: any = await this.googleAuthService.getGoogleUser(c.req);

    const reuslt = await this.googleAuthService.createUser({
      name: user.name,
      email: user.email,
      googleId: user.id,
    });

    return c.json(reuslt);
  };
}
