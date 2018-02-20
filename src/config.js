import path from 'path';
import env from '../build/env.json';

// Get the current environment variable or default to 'development'
export const nodeEnv = process.env.NODE_ENV || 'development';
const config = env[nodeEnv];

export default config;
