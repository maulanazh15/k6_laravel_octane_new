import http from 'k6/http';
import { sleep, check } from 'k6';
import { AppConfig } from './config.ts';

export const options = {
  vus: 10,
  duration: '60s',
};

export default function() {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
