import path from 'path';
import env from '../build/env.json';

// Get the current environment variable or default to 'development'
const nodeEnv = process.env.NODE_ENV || 'development',
  config = env[nodeEnv];
export { nodeEnv };

export default config;
