# 📊 K6 Test Command Documentation

Berikut adalah daftar perintah `k6-dashboard run` untuk semua kombinasi stack, endpoint, dan skenario pengujian.

### 🔹 Stack: `frankenphp`

#### 🔗 Endpoint: `get-login`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-get-login.csv --out dashboard=export=reports/frankenphp/html/smoke-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/breakpoint-get-login.csv --out dashboard=export=reports/frankenphp/html/breakpoint-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/average-get-login.csv --out dashboard=export=reports/frankenphp/html/average-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/stress-get-login.csv --out dashboard=export=reports/frankenphp/html/stress-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/soak-get-login.csv --out dashboard=export=reports/frankenphp/html/soak-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/spike-get-login.csv --out dashboard=export=reports/frankenphp/html/spike-get-login.html scenario/get-login.ts
```

#### 🔗 Endpoint: `index-universitas`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-index-universitas.csv --out dashboard=export=reports/frankenphp/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/breakpoint-index-universitas.csv --out dashboard=export=reports/frankenphp/html/breakpoint-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/average-index-universitas.csv --out dashboard=export=reports/frankenphp/html/average-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/stress-index-universitas.csv --out dashboard=export=reports/frankenphp/html/stress-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/soak-index-universitas.csv --out dashboard=export=reports/frankenphp/html/soak-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/spike-index-universitas.csv --out dashboard=export=reports/frankenphp/html/spike-index-universitas.html scenario/get-index-universitas.ts
```

#### 🔗 Endpoint: `post-kelompok-standar`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/breakpoint-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/breakpoint-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/average-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/average-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/stress-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/stress-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/soak-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/soak-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/spike-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/spike-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

### 🔹 Stack: `openswoole`

#### 🔗 Endpoint: `get-login`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-get-login.csv --out dashboard=export=reports/openswoole/html/smoke-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/breakpoint-get-login.csv --out dashboard=export=reports/openswoole/html/breakpoint-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/average-get-login.csv --out dashboard=export=reports/openswoole/html/average-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/stress-get-login.csv --out dashboard=export=reports/openswoole/html/stress-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/soak-get-login.csv --out dashboard=export=reports/openswoole/html/soak-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/spike-get-login.csv --out dashboard=export=reports/openswoole/html/spike-get-login.html scenario/get-login.ts
```

#### 🔗 Endpoint: `index-universitas`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-index-universitas.csv --out dashboard=export=reports/openswoole/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/breakpoint-index-universitas.csv --out dashboard=export=reports/openswoole/html/breakpoint-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/average-index-universitas.csv --out dashboard=export=reports/openswoole/html/average-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/stress-index-universitas.csv --out dashboard=export=reports/openswoole/html/stress-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/soak-index-universitas.csv --out dashboard=export=reports/openswoole/html/soak-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/spike-index-universitas.csv --out dashboard=export=reports/openswoole/html/spike-index-universitas.html scenario/get-index-universitas.ts
```

#### 🔗 Endpoint: `post-kelompok-standar`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/breakpoint-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/breakpoint-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/average-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/average-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/stress-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/stress-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/soak-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/soak-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/spike-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/spike-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

### 🔹 Stack: `nginx-phpfpm`

#### 🔗 Endpoint: `get-login`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/breakpoint-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/breakpoint-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/average-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/average-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/stress-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/stress-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/soak-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/soak-get-login.html scenario/get-login.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/spike-get-login.csv --out dashboard=export=reports/nginx-phpfpm/html/spike-get-login.html scenario/get-login.ts
```

#### 🔗 Endpoint: `index-universitas`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/breakpoint-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/breakpoint-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/average-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/average-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/stress-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/stress-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/soak-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/soak-index-universitas.html scenario/get-index-universitas.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/spike-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/spike-index-universitas.html scenario/get-index-universitas.ts
```

#### 🔗 Endpoint: `post-kelompok-standar`

##### 🧪 Scenario: `smoke`
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `breakpoint`
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/breakpoint-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/breakpoint-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `average`
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/average-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/average-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `stress`
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/stress-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/stress-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `soak`
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/soak-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/soak-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

##### 🧪 Scenario: `spike`
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/spike-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/spike-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

