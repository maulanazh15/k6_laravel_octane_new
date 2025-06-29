import http from 'k6/http';
import { check, sleep } from 'k6';
import { AppConfig } from './config.ts';

export const options = {
  vus: 20,
  duration: '1h',
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
    check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
