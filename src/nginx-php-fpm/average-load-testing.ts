import http from 'k6/http';
import { check, sleep } from 'k6';
import { AppConfig } from './config.ts';


export const options = {
  thresholds: AppConfig.thresholds,
  scenarios: {
    average_load_scenario: {
      executor: 'ramping-vus', //Assure user load increase if the system slows
      stages: [
        { duration: '10m', target: 600 }, // ramp-up
        { duration: '40m', target: 600 }, // steady load
        { duration: '10m', target: 0 },  // ramp-down
      ],
    },
  }
};

export default function () {
  let res = http.get(`${AppConfig.host}`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
} 
