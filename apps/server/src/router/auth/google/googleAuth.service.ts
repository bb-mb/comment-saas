import { Bindings } from '@/types/Environment';
import queryString from 'query-string';

export class GoogleAuthService {
  getAuthorizationUrl(env: Bindings) {
    const query = queryString.stringify({
      client_id: env.GOOGLE_AUTH_CLIENT_ID,
      redirect_uri: env.GOOGLE_AUTH_REDIRECT_URL,
      response_type: 'code',
      scope: 'openid email profile',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    });

    return { url: `https://accounts.google.com/o/oauth2/v2/auth?${query}` };
  }
}
