## Smoke Testing
### Nginx PHP-FPM
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://jelitaspmi.homelabchester.my.id --out csv=reports/nginx-phpfpm/csv/smoke-login.csv --out dashboard=export=reports/nginx-phpfpm/html/smoke-login.html scenario/main.ts 
```
### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://frankenphp.homelabchester.my.id --out csv=reports/frankenphp/csv/smoke-login.csv --out dashboard=export=reports/frankenphp/html/smoke-login.html scenario/main.ts 
```

### Octane FrankenPHP
```bash
k6-dashboard run -e SCENARIO=smoke -e HOST=https://openswoole.homelabchester.my.id --out csv=reports/openswoole/csv/smoke-login.csv --out dashboard=export=reports/openswoole/html/smoke-login.html scenario/main.ts 
```