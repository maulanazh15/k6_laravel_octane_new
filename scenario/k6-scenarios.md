## Smoke Testing
### Nginx PHP-FPM
#### Get Login
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-login.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-login.html scenario/main.ts
```

#### Get Index Universitas
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-index-universitas.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-index-universitas.html scenario/get-index-universitas.ts
```

#### Post Kelompok Standar
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-post-kelompok-standar.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-post-kelompok-standar.html scenario/post-kelompok-standar.ts
```

### Octane FrankenPHP
#### Login
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-login.csv --out dashboard=export=reports/frankenphp/html/smoke-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-login.csv --out dashboard=export=reports/openswoole/html/smoke-login.html scenario/main.ts
```

## Average Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/average-login.csv --out dashboard=export=reports/nginx-phpfpm/html/average-login.html scenario/main.ts
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/average-login.csv --out dashboard=export=reports/frankenphp/html/average-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=average -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/average-login.csv --out dashboard=export=reports/openswoole/html/average-login.html scenario/main.ts
```

## Stress Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/stress-login.csv --out dashboard=export=reports/nginx-phpfpm/html/stress-login.html scenario/main.ts
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/stress-login.csv --out dashboard=export=reports/frankenphp/html/stress-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=stress -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/stress-login.csv --out dashboard=export=reports/openswoole/html/stress-login.html scenario/main.ts
```

## Soak Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/soak-login.csv --out dashboard=export=reports/nginx-phpfpm/html/soak-login.html scenario/main.ts
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/soak-login.csv --out dashboard=export=reports/frankenphp/html/soak-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=soak -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/soak-login.csv --out dashboard=export=reports/openswoole/html/soak-login.html scenario/main.ts
```

## Spike Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/spike-login.csv --out dashboard=export=reports/nginx-phpfpm/html/spike-login.html scenario/main.ts
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/spike-login.csv --out dashboard=export=reports/frankenphp/html/spike-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=spike -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/spike-login.csv --out dashboard=export=reports/openswoole/html/spike-login.html scenario/main.ts
```

## Breakpoint Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/breakpoint-login.csv --out dashboard=export=reports/nginx-phpfpm/html/breakpoint-login.html scenario/main.ts
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/breakpoint-login.csv --out dashboard=export=reports/frankenphp/html/breakpoint-login.html scenario/main.ts
```

### Octane OpenSwoole
```bash
k6-dashboard run -e SCENARIO=breakpoint -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/breakpoint-login.csv --out dashboard=export=reports/openswoole/html/breakpoint-login.html scenario/main.ts
```