import { Hono } from 'hono';
import { Environment } from '../types/Environment';

export const createHono = () => new Hono<Environment>();
