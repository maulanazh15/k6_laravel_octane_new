export const thresholds = {
    http_req_failed: [
        {
            threshold: 'rate<0.05',
            abortOnFail: true,
            delayAbortEval: '1s',
        }
    ],
};

export const scenarios = {
    smoke: {
        options: {
            vus: 10,
            duration: '60s',
        }
    },
    average: {
        options: {
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