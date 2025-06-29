import http from 'k6/http';
import { AppConfig } from './config.ts';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 200 },
    { duration: '3m', target: 500 },
    { duration: '3m', target: 800 },
    { duration: '2m', target: 0 },
  ],
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
    check(res, { "status is 200": (res) => res.status === 200 });
}
