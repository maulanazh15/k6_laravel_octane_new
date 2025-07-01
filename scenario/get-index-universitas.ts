import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';
import { getCookies } from './cookie-config.ts';
import { test } from 'k6/execution';

// Set your endpoint here for each file
const ENDPOINT = '/standar-mutu/standar-universitas'; // Change this per file

const DEFAULT_HOST = 'https://jelitaspmi.homelabchester.my.id';

// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

export const options = {
    ...scenarios[scenarioName].options,
    thresholds,
};

export default function () {
    const host = __ENV.HOST || DEFAULT_HOST;
    const url = `${host}${ENDPOINT}`;
    const cookies = getCookies();

    let res = http.get(url, { cookies });
    console.log(res.body);
    test.abort();
    check(res, { "status is 200": (r) => r.status === 200 });
}