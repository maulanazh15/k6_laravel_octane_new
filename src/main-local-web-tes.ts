import { browser } from 'k6/browser';
import { check } from 'k6'; // Import check dari utils
import { vu } from 'k6/execution';

export const options = {
  scenarios: {
    ui: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:9001/');

    await page.locator('input[id="inputEmail"]').type('admin@example.com');
    await page.locator('input[id="inputPassword"]').type('123123');

    await Promise.all([page.waitForNavigation(), page.locator('button[id="login-button"]').click()]);
    
    const headerText = await page.locator('title').textContent();
    check(headerText, {
      'Header is JELITA': (text) => text === 'Dashboard | JELITA',
    });
    // Ke halaman http://localhost:9001/standar-pendidikan
    await page.goto('http://localhost:9001/standar-pendidikan');
    // Tunggu sampai elemen dengan id "standar-pendidikan" muncul
    await page.waitForSelector('#subjudul-standar-mutu');
    // Ambil elemen dengan id "standar-pendidikan"
    const standarPendidikanElement = page.locator('#subjudul-standar-mutu');
    // Ambil teks dari elemen tersebut
    const standarPendidikanText = await standarPendidikanElement.textContent();
    // Lakukan validasi dengan check dari utils
    check(standarPendidikanText, {
      'Standar Pendidikan is visible': (text) => text === 'Daftar Standar Mutu',
    });

  } finally {
    await page.close();
  }
}