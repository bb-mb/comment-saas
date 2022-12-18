import { baseRouter } from '@/router';
import { createHono } from './utils/honoHelper';

const app = createHono();
app.route('/', baseRouter);

app.get('/', (c) => {
  console.log(c.env);
  return c.json({ msg: 'hello' });
});

export default app;
