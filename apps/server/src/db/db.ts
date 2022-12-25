import { env } from '@/utils/env';
import { D1Orm } from 'd1-orm';

export class DataBase {
  orm = new D1Orm(env.bindings.DB);
}
