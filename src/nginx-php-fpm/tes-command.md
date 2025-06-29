## Summary Testing
```bash
k6-dashboard run --out json=./reports/json/summary-report.json  --out dashboard=export=./reports/html/summary-report.html summary-testing.ts
```

## Smoke Testing
```bash
k6-dashboard run --out json=./reports/json/smoke-report.json  --out dashboard=export=./reports/html/smoke-report.html smoke-testing.ts
```

## Short Smoke Testing
```bash
k6-dashboard run -e SCENARIO=smoke_scenario \
  --out json=./reports/json/short-smoke-report.json \
  --out dashboard=export=./reports/html/short-smoke-report.html \
  summary-testing.ts
```
## Breakpoint Testing
```bash
k6-dashboard run --out json=./reports/json/breakpoint-report.json  --out dashboard=export=./reports/html/breakpoint-report.html breakpoint-testing.ts
```
## Short Breakpoint Testing
```bash
k6-dashboard run -e SCENARIO=breakpoint_scenario --out json=./reports/json/short-breakpoint-report.json  --out dashboard=export=./reports/html/short-breakpoint-report.html summary-testing.ts
```
## Average-load Testing
```bash
k6-dashboard run --out json=./reports/json/average-load-report.json  --out dashboard=export=./reports/html/average-load-report.html average-load-testing.ts
```
## Short Average-load Testing
```bash
k6-dashboard run --out json=./reports/json/short-average-load-report.json  --out dashboard=export=./reports/html/short-average-load-report.html average-load-testing.ts
```

## Stress Testing
```bash
k6-dashboard run --out json=./reports/json/stress-report.json  --out dashboard=export=./reports/html/stress-report.html stress-testing.ts
```

## Short Stress Testing
```bash
k6-dashboard run --out json=./reports/json/short-stress-report.json  --out dashboard=export=./reports/html/short-stress-report.html stress-testing.ts
```

## Soak Testing
```bash
k6-dashboard run --out json=./reports/json/soak-report.json  --out dashboard=export=./reports/html/soak-report.html soak-testing.ts
```
## Short Soak Testing
```bash
k6-dashboard run --out json=./reports/json/short-soak-report.json  --out dashboard=export=./reports/html/short-soak-report.html soak-testing.ts
```

## Spike Testing
```bash
k6-dashboard run --out json=./reports/json/spike-report.json  --out dashboard=export=./reports/html/spike-report.html spike-testing.ts
```

## Spike Testing
```bash
k6-dashboard run --out json=./reports/json/short-spike-report.json  --out dashboard=export=./reports/html/short-spike-report.html spike-testing.ts
```