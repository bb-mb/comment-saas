import { Hono } from 'hono';
import { baseRouter } from './router';

const app = new Hono();
app.route('/', baseRouter);

app.get('/', (c) => {
  return c.json({ msg: 'hello' });
});

export default app;
