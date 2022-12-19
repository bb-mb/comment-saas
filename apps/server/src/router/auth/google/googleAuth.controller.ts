import { controllerMethod } from '@/types/Controller';
import { GoogleAuthService } from './googleAuth.service';

export class GoogleAuthController {
  googleAuthService = new GoogleAuthService();

  redirectGoogleAuth: controllerMethod = (c) => {
    const { url } = this.googleAuthService.getAuthorizationUrl(c.env);

    return c.redirect(url);
  };
}
