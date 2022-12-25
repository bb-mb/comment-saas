import { Bindings } from '@/types/Environment';

class Env {
  private env?: Bindings;

  get bindings() {
    return this.env!;
  }
  set = (newEnv: Bindings) => (this.env = newEnv);
}

export const env = new Env();
