import { Hono } from 'hono';
import { baseRouter } from './router';

const app = new Hono();
app.route('/', baseRouter);

app.get('/', (c) => {
  console.log(c.env);
  return c.json({ msg: 'hello' });
});

export default app;
