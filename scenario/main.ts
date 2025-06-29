import http from 'k6/http';
import { check, sleep } from 'k6';

// Set your endpoint here for each file
const ENDPOINT = '/'; // Change this per file

const DEFAULT_HOST = 'https://jelitaspmi.homelabchester.my.id';

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
        }
    }
};

// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

export const options = scenarios[scenarioName].options;

export default function () {
    const host = __ENV.HOST || DEFAULT_HOST;
    let res = http.get(`${host}${ENDPOINT}`);
    check(res, { "status is 200": (res) => res.status === 200 });
    // Add sleep if you want for some scenarios
    // if (['average', 'stress'].includes(scenarioName)) {
    //     sleep(1);
    // }
}