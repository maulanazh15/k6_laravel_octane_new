import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { getCookies } from './cookie-config.ts';
import { test } from 'k6/execution';
import { parseHTML } from 'k6/html';

// Set your endpoint here for each file
const ENDPOINT = '/dokumen/kelompok-standar'; // Change this per file
const DEFAULT_HOST = 'https://jelitaspmi.homelabchester.my.id';

// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

const host = __ENV.HOST || DEFAULT_HOST;

// Store tokens/cookies here
let csrfToken, newCsrfToken;
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
    // 4. Go to Create Form
    let createForm = http.get(`${host}${ENDPOINT}/create`, {
        cookies: sessionCookies
    })

    console.log('doc form', createForm.body)

    let docForm = createForm.html()
    newCsrfToken = docForm.find('input[name="_token"]').attr('value');

    return { sessionCookies };
}

export default function (data) {
    const url = `${host}${ENDPOINT}/store`
    const cookies = {
        ...sessionCookies
    };

    let nama = randomString(5)
    let kode = randomString(3)

    let payload = `_token=${newCsrfToken}&nama=${nama}&kode=${kode}`;
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    
    let res = http.post(url, payload, {
        headers,
        cookies
    });
    
    console.log(res.body)

    test.abort('debug tes')

    check(res, { "status is 200": (res) => res.status === 200 });

    sleep(1);
}