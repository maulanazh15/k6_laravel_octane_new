import http from 'k6/http';
import { check } from 'k6';
import { AppConfig } from './config.ts';

const scenario = __ENV.SCENARIO;

const allScenarios = {
    smoke_scenario: {
        executor: 'constant-vus',
        vus: 10,
        duration: '1m',
    },
    breakpoint_scenario: {
        executor: 'ramping-vus',
        stages: [{ duration: '5m', target: 20000 }],
    },
    average_load_scenario: {
        executor: 'ramping-vus',
        stages: [
            { duration: '5m', target: 600 },
            { duration: '8m', target: 600 },
            { duration: '5m', target: 0 },
        ],
    },
    stress_scenario: {
        executor: 'ramping-vus',
        stages: [
            { duration: '5m', target: 800 },
            { duration: '8m', target: 800 },
            { duration: '5m', target: 0 },
        ],
    },
    soak_scenario: {
        executor: 'ramping-vus',
        stages: [
            { duration: '5m', target: 600 },
            { duration: '16m', target: 600 },
            { duration: '5m', target: 0 },
        ],
    },
    spike_scenario: {
        executor: 'ramping-vus',
        stages: [
            { duration: '7m', target: 900 },
            { duration: '3m', target: 0 },
        ],
    },
};

export const options = {
    thresholds: AppConfig.thresholds,
    scenarios: {
        // Only include the scenario from env
        [scenario]: allScenarios[scenario],
    },
};

export default function () {
    const res = http.get(AppConfig.host);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
