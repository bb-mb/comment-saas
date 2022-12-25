import { Context, Next } from 'hono';
import { Environment } from './Environment';

export type middleware = (
  c: Context<string, Environment, unknown>,
  next: Next
) => any;
