import { Bindings } from '@/types/Environment';

class GlobalEnv {
  env: Bindings = {
    GOOGLE_AUTH_CLIENT_ID: '',
    GOOGLE_AUTH_REDIRECT_URL: '',
    GOOGLE_AUTH_SECRET: '',
  };

  get = (name: keyof Bindings) => this.env[name];
  set = (newEnv: Bindings) => (this.env = newEnv);
}

export const globalEnv = new GlobalEnv();
