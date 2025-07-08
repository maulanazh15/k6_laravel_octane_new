import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';

// Endpoint to test
const ENDPOINT = '/standar-mutu/standar-universitas';
const DEFAULT_HOST = 'https://phpfpm.homelabchester.my.id';

const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

const host = __ENV.HOST || DEFAULT_HOST;

// Store tokens/cookies here
let csrfToken;
let sessionCookies = {};

export const options = {
    thresholds,
    scenarios: {
        [scenarioName]: {
            ...scenarios[scenarioName],
        }
    }
};

export function setup() {
    console.log(`Starting test with scenario: ${scenarioName} on host web server: ${host}`);

    // 1. Load login page to get CSRF token
    let res = http.get(`${host}`);
    let doc = res.html();
    csrfToken = doc.find('input[name="_token"]').attr('value');

    // 2. Send login request
    let email = 'admin@example.com';
    let password = '123123';
    let payload = `_token=${csrfToken}&email=${email}&password=${password}`;

    let loginRes = http.post(`${host}/login`, payload, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    // 3. Extract cookies from login response
    const cookies = loginRes.cookies;

    if (cookies['XSRF-TOKEN'] && cookies['jelita_session']) {
        sessionCookies['XSRF-TOKEN'] = cookies['XSRF-TOKEN'][0].value;
        sessionCookies['jelita_session'] = cookies['jelita_session'][0].value;
    } else {
        console.error('❌ Login failed or expected cookies not found.');
        console.log('Response status:', loginRes.status);
        console.log('Cookies received:', JSON.stringify(cookies, null, 2));
        throw new Error('Login response missing required cookies.');
    }


    return { sessionCookies };
}

export default function (data) {
    const url = `${host}${ENDPOINT}`
    const cookies = {
        'XSRF-TOKEN': data.sessionCookies['XSRF-TOKEN'],
        'jelita_session': data.sessionCookies['jelita_session'],
    };

    const res = http.get(url, {
        cookies,

    });

    check(res, {
        'status is 200': r => r.status === 200,
    });

    sleep(1);
}
