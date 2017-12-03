import axios from 'axios';
import config from './config';

// API
export const api = axios.create({
  baseURL: config.api,
  timeout: 10000,
});
