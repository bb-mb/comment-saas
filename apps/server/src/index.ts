import { baseRouter } from '@/router';
import { initEnv } from './middlewares/initGlobalEnv';
import { createHono } from './utils/honoHelper';

const app = createHono();

app.use('*', initEnv);

app.route('/', baseRouter);

app.get('/', (c) => {
  console.log(c.env);
  return c.json({ msg: 'hello' });
});

export default app;
