## Smoke Testing
### Nginx PHP-FPM
#### Get Login
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-login.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-login.html scenario/main.ts
```

#### Get Index Universitas
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

#### Post Kelompok Standar
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://phpfpm.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

### Octane FrankenPHP
#### Login
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-login.csv --out dashboard=export=reports/frankenphp/html/smoke-login.html scenario/main.ts
```

#### Get Index Universitas
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-index-universitas.csv --out dashboard=export=reports/frankenphp/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

#### Post Kelompok Standar
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/frankenphp/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

### Octane OpenSwoole
#### Login
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-login.csv --out dashboard=export=reports/openswoole/html/smoke-login.html scenario/main.ts
```

#### Get Index Universitas
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-index-universitas.csv --out dashboard=export=reports/openswoole/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

#### Post Kelompok Standar
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/openswoole/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```