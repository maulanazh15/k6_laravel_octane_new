#!/bin/bash

SCENARIOS=(average stress soak spike breakpoint)
HOSTS=(
  "nginx-phpfpm=https://jelitaspmi.homelabchester.my.id"
  "frankenphp=https://frankenphp.homelabchester.my.id"
  "openswoole=https://openswoole.homelabchester.my.id"
)

for SCENARIO in "${SCENARIOS[@]}"; do
  for HOST_PAIR in "${HOSTS[@]}"; do
    NAME="${HOST_PAIR%%=*}"
    HOST="${HOST_PAIR#*=}"
    echo "Running $SCENARIO test on $NAME ($HOST)..."
    k6-dashboard run \
      -e SCENARIO="$SCENARIO" \
      -e HOST="$HOST" \
      --out "csv=reports/$NAME/csv/${SCENARIO}-login.csv" \
      --out "dashboard=export=reports/$NAME/html/${SCENARIO}-login.html" \
      scenario/main.ts
  done
done
