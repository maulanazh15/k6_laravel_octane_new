import http from 'k6/http';
import { check, sleep } from 'k6';

const DEFAULT_HOST = 'https://jelitaspmi.homelabchester.my.id';
const DEFAULT_ENDPOINT = '/';

const thresholds = {
    http_req_failed: [
        {
            threshold: 'rate<0.05',
            abortOnFail: true,
            delayAbortEval: '1s',
        }
    ],
    // http_req_duration: ['p(95)<200'],
};

const scenarios = {
    smoke: {
        options: {
            vus: 10,
            duration: '60s',
            thresholds,
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
        }
    },
    average: {
        options: {
            thresholds,
            scenarios: {
                average_load_scenario: {
                    executor: 'ramping-vus',
                    stages: [
                        { duration: '10m', target: 600 },
                        { duration: '40m', target: 600 },
                        { duration: '10m', target: 0 },
                    ],
                },
            }
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
            sleep(1);
        }
    },
    stress: {
        options: {
            thresholds,
            scenarios: {
                stress_scenario: {
                    executor: 'ramping-vus',
                    stages: [
                        { duration: '10m', target: 800 },
                        { duration: '40m', target: 800 },
                        { duration: '10m', target: 0 },
                    ],
                }
            }
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
            sleep(1);
        }
    },
    soak: {
        options: {
            thresholds,
            scenarios: {
                soak_scenario: {
                    executor: 'ramping-vus',
                    stages: [
                        { duration: '10m', target: 600 },
                        { duration: '220m', target: 600 },
                        { duration: '10m', target: 0 },
                    ],
                }
            }
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
        }
    },
    spike: {
        options: {
            thresholds,
            scenarios: {
                spike_scenario: {
                    executor: 'ramping-vus',
                    stages: [
                        { duration: '7m', target: 900 },
                        { duration: '3m', target: 0 },
                    ],
                }
            }
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
        }
    },
    breakpoint: {
        options: {
            thresholds,
            scenarios: {
                breakpoint_scenario: {
                    executor: 'ramping-vus',
                    stages: [
                        { duration: '2h', target: 20000 },
                    ],
                }
            }
        },
        fn: function () {
            let res = http.get(`${__ENV.HOST || DEFAULT_HOST}${__ENV.ENDPOINT || DEFAULT_ENDPOINT}`);
            check(res, { "status is 200": (res) => res.status === 200 });
        }
    }
};

// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

export const options = scenarios[scenarioName].options;
export default scenarios[scenarioName].fn;