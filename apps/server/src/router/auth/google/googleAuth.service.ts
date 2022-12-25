import { DB } from '@/db/db';
import { env } from '@/utils/env';
import queryString from 'query-string';
import { google } from 'worker-auth-providers';

export class GoogleAuthService {
  getAuthorizationUrl = () => {
    const query = queryString.stringify({
      client_id: env.bindings.GOOGLE_AUTH_CLIENT_ID,
      redirect_uri: env.bindings.GOOGLE_AUTH_REDIRECT_URL,
      response_type: 'code',
      scope: 'openid email profile',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    });

    return { url: `https://accounts.google.com/o/oauth2/v2/auth?${query}` };
  };

  getGoogleUser = (request: Request) => {
    const options = {
      clientId: env.bindings.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: env.bindings.GOOGLE_AUTH_SECRET,
      redirectUrl: env.bindings.GOOGLE_AUTH_REDIRECT_URL,
    };

    return google.users({ request, options });
  };

  createUser = (user: { name: string; email: string; googleId: string }) => {
    return new DB().users.InsertOne(user);
  };
}
