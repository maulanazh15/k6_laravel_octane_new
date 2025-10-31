import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios, thresholds } from './scenario-config.ts';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

// Set your endpoint here for each file
const ENDPOINT = '/dokumen/kelompok-standar'; // Change this per file
const DEFAULT_HOST = 'https://phpfpm.homelabchester.my.id';

// Pick scenario from env, default to 'smoke'
const scenarioName = (__ENV.SCENARIO || 'smoke').toLowerCase();
if (!scenarios[scenarioName]) {
    throw new Error(`Unknown scenario: ${scenarioName}`);
}

const host = __ENV.HOST || DEFAULT_HOST;
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

// Store tokens/cookies here
let csrfToken, newCsrfToken;
let sessionCookies = {};

let SCENARIO = {
    scenarios: {
        [scenarioName]: {
            ...scenarios[scenarioName]
        }
    }
}

if (__ENV.SCENARIO === 'breakpoint') SCENARIO.thresholds = thresholds

export const options = SCENARIO

export function setup() {
    console.log(`Persiapan pengujian akses dan insert data kelompok standar dengan ${scenarioName} testing, ke halaman web server ${host}`)

    // 1. Load login page to get CSRF token
    let res = http.get(`${host}`);
    let doc = res.html();
    csrfToken = doc.find('input[name="_token"]').attr('value');

    // 2. Send login request
    let email = 'admin@example.com';
    let password = '123123';
    let payload = `_token=${csrfToken}&email=${email}&password=${password}`;

    let loginRes = http.post(`${host}/login`, payload, {
       headers
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

    let docForm = createForm.html()
    newCsrfToken = docForm.find('input[name="_token"]').attr('value');
    return { sessionCookies, newCsrfToken };
}

export default function (data) {
    const url = `${host}${ENDPOINT}/store`
    const cookies = data.sessionCookies

    let nama = randomString(5)
    let kode = randomString(6)

    let payload = `_token=${data.newCsrfToken}&nama=${nama}&kode=${kode}`;
    
    let res = http.post(url, payload, {
        headers,
        cookies,
        redirects: 0,
    });

    check(res, {
        "POST responded with redirect": (r) => r.status === 302,
        "Has Location header": (r) => r.headers["Location"] !== undefined,
      });
}