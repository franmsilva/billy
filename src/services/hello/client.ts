import axios from 'axios';

export const client = () =>
  axios.create({
    baseURL: 'base-api-url.com',
    headers: {
      // Any required auth headers
    },
    timeout: 10000, // 10 seconds in ms
  });
