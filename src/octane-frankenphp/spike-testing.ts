import http from 'k6/http';
import { AppConfig } from './config.ts';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 0 },
    { duration: '10s', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
    check(res, { "status is 200": (res) => res.status === 200 });
}
