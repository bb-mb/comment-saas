import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ msg: 'hello' });
});

export default app;
