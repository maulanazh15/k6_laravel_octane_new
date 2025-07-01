import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { getCookies } from './cookie-config.ts';
import { test } from 'k6/execution';

// Set your endpoint here for each file
const ENDPOINT = '/dokumen/kelompok-standar/store'; // Change this per file

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
    let nama = randomString(5)
    let kode = randomString(3)
    let token = 'UbD304tDze7AsMccicCm7NwwtPR9nKp9XEZ6z8kS'

    let data = `_token=${token}&nama=${nama}&kode=${kode}`;
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    let res = http.post(url, data, {
        headers,
        cookies
    });
    check(res, { "status is 200": (res) => res.status === 200 });
}