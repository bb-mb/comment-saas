import { Bindings } from '@/types/Environment';

class Env {
  private env?: Bindings;

  bindings = this.env!;
  set = (newEnv: Bindings) => (this.env = newEnv);
}

export const env = new Env();
