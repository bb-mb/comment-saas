import { env } from '@/utils/env';
import { D1Orm } from 'd1-orm';
import { getUserModel } from './models';

export class DB {
  private orm = new D1Orm(env.bindings.DB);

  users = getUserModel(this.orm);
}
