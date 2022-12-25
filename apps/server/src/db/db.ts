import { env } from '@/utils/env';
import { D1Orm } from 'd1-orm';
import { getUserModel } from './models';

export class DataBase {
  private orm = new D1Orm(env.bindings.DB);

  user = getUserModel(this.orm);
}
