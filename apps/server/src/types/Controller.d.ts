import { Context } from 'hono';
import { Environment } from './Environment';

export type controllerMethod = (
  c: Context<string, Environment, unknown>
) => any;
