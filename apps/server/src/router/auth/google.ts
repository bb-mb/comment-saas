import queryString from 'query-string';
import { createHono } from '@/utils/honoHelper';

export const googleAuthRouter = createHono();

googleAuthRouter.get('/', (c) => {
  const query = queryString.stringify({
    client_id: c.env.GOOGLE_AUTH_CLIENT_ID,
    redirect_uri: c.env.GOOGLE_AUTH_REDIRECT_URL,
    response_type: 'code',
    scope: 'openid email profile',
    include_granted_scopes: 'true',
    state: 'pass-through value',
  });

  return c.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${query}`);
});
