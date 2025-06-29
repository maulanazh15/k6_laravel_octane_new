import http from 'k6/http';
import { sleep } from 'k6';
import { AppConfig } from './config.ts';

export const options = {
  stages: [
    { duration: '1m', target: 500 }, // ramp-up
    { duration: '3m', target: 250 }, // steady load
    { duration: '1m', target: 0 },  // ramp-down
  ],
};

export default function () {
  http.get(`${AppConfig.host}`);
  sleep(1);
}
