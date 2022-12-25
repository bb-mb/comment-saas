import { DB } from '@/db/db';
import { middleware } from '@/types/middleware';

// 개발환경에서만 사용
export const initDatabase: middleware = async (c, next) => {
  const db = new DB();
  await db.users.CreateTable({ strategy: 'force' });

  await next();
};
