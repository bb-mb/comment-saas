import { globalEnv } from '@/utils/globalEnv';
import queryString from 'query-string';
import { google } from 'worker-auth-providers';

export class GoogleAuthService {
  getAuthorizationUrl = () => {
    const query = queryString.stringify({
      client_id: globalEnv.get('GOOGLE_AUTH_CLIENT_ID'),
      redirect_uri: globalEnv.get('GOOGLE_AUTH_REDIRECT_URL'),
      response_type: 'code',
      scope: 'openid email profile',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    });

    return { url: `https://accounts.google.com/o/oauth2/v2/auth?${query}` };
  };

  getGoogleUser = (request: Request) => {
    const options = {
      clientId: globalEnv.get('GOOGLE_AUTH_CLIENT_ID'),
      clientSecret: globalEnv.get('GOOGLE_AUTH_SECRET'),
      redirectUrl: globalEnv.get('GOOGLE_AUTH_REDIRECT_URL'),
    };

    return google.users({ request, options });
  };
}
