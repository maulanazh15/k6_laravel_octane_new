import http from 'k6/http';
import { AppConfig } from './config.ts';
import { check } from 'k6';

export const options = {
  thresholds: AppConfig.thresholds,
  scenarios: {
    spike_scenario: {
      executor: 'ramping-vus', //Assure user load increase if the system slows
      stages: [
        { duration: '7m', target: 900 }, // ramp-up
        { duration: '3m', target: 0 }, // steady load
      ],
    }
  }
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
}
