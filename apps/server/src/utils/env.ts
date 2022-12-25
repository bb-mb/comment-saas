import { Bindings } from '@/types/Environment';

class Env {
  env: any;

  get = (name: keyof Bindings) => this.env[name];
  set = (newEnv: Bindings) => (this.env = newEnv);
}

export const env = new Env();
