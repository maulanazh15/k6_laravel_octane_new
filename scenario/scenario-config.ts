// Global thresholds
export const thresholds = {
    http_req_failed: [
        {
            threshold: 'rate<0.05',
            abortOnFail: true,
            delayAbortEval: '1s',
        }
    ],
};

// Simplified scenario definitions
export const scenarios = {
    smoke: {
        executor: 'constant-vus',
        vus: 10,
        duration: '60s',
    },
    average: {
        executor: 'ramping-vus',
        stages: [
            { duration: '10m', target: 600 },
            { duration: '40m', target: 600 },
            { duration: '10m', target: 0 },
        ],
    },
    stress: {
        executor: 'ramping-vus',
        stages: [
            { duration: '10m', target: 800 },
            { duration: '40m', target: 800 },
            { duration: '10m', target: 0 },
        ],
    },
    soak: {
        executor: 'ramping-vus',
        stages: [
            { duration: '10m', target: 600 },
            { duration: '220m', target: 600 },
            { duration: '10m', target: 0 },
        ],
    },
    spike: {
        executor: 'ramping-vus',
        stages: [
            { duration: '7m', target: 1000 },
            { duration: '3m', target: 0 },
        ],
    },
    breakpoint: {
        executor: 'ramping-vus',
        stages: [
            { duration: '2h', target: 20000 },
        ],
    }
};