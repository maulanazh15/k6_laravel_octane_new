import http from 'k6/http';
import { AppConfig } from './config.ts';
import { check, sleep } from 'k6';

export const options = {
  thresholds: AppConfig.thresholds,
  scenarios: {
    stress_scenario: {
      executor: 'ramping-vus', //Assure user load increase if the system slows
      stages: [
        { duration: '10m', target: 800 }, // ramp-up
        { duration: '40m', target: 800 }, // steady load
        { duration: '10m', target: 0 },  // ramp-down
      ],
    }
  }
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
