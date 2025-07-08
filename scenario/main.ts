import http from 'k6/http';
import { check } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';

// Set your endpoint here
const ENDPOINT = '/';
const DEFAULT_HOST = 'https://phpfpm.homelabchester.my.id';

// Select scenario from environment variable or fallback
// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

export const options = {
    thresholds,
    scenarios: {
        [scenarioName] : {
            ...scenarios[scenarioName]
        }
    }
    
};

export function setup() {
    console.log(`Persiapan pengujian akses halaman awal dengan ${scenarioName} testing, ke halaman web server ${__ENV.HOST}`)
}

// Test function
export default function() {
    const host = __ENV.HOST || DEFAULT_HOST;
    const res = http.get(`${host}${ENDPOINT}`);
    check(res, { 'status is 200': (r) => r.status === 200 });
}
