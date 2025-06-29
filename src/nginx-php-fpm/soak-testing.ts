import http from 'k6/http';
import { check, sleep } from 'k6';
import { AppConfig } from './config.ts';

export const options = {
  thresholds: AppConfig.thresholds,
  scenarios: {
    soak_scenario: {
      executor: 'ramping-vus', //Assure user load increase if the system slows
      stages: [
        { duration: '10m', target: 600 }, // ramp-up
        { duration: '220m', target: 600 }, // steady load
        { duration: '10m', target: 0 },  // ramp-down
      ],
    }
  }
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
}
