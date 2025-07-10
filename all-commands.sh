#!/bin/bash

# Urutan stack yang diinginkan
STACK_KEYS=("frankenphp" "openswoole" "nginx-phpfpm")

# Daftar stack dan URL-nya
declare -A HOSTS=(
  [nginx-phpfpm]="https://phpfpm.homelabchester.my.id"
  [frankenphp]="https://frankenphp.homelabchester.my.id"
  [openswoole]="https://openswoole.homelabchester.my.id"
)

# Urutan endpoint yang diinginkan
ENDPOINT_KEYS=("main" "index" "post")

# Daftar file skenario dan alias endpoint
declare -A FILES=(
  [main]="get-login.ts"
  [index]="get-index-universitas.ts"
  [post]="post-kelompok-standar.ts"
)

# Mapping alias ke nama output file
declare -A ALIASES=(
  [main]="get-login"
  [index]="index-universitas"
  [post]="post-kelompok-standar"
)

# Daftar skenario uji
SCENARIOS=("smoke" "breakpoint" "average" "stress" "soak" "spike")

# Header untuk Markdown
echo "# 📊 K6 Test Command Documentation"
echo ""
echo "Berikut adalah daftar perintah \`k6-dashboard run\` untuk semua kombinasi stack, endpoint, dan skenario pengujian."
echo ""

# Loop: urut berdasarkan array terstruktur
for stack in "${STACK_KEYS[@]}"; do
  HOST="${HOSTS[$stack]}"
  echo "### 🔹 Stack: \`$stack\`"
  echo ""

  for endpoint in "${ENDPOINT_KEYS[@]}"; do
    FILE="${FILES[$endpoint]}"
    ALIAS="${ALIASES[$endpoint]}"
    echo "#### 🔗 Endpoint: \`$ALIAS\`"
    echo ""

    for scenario in "${SCENARIOS[@]}"; do
      CSV="reports/$stack/csv/${scenario}-${ALIAS}.csv"
      HTML="reports/$stack/html/${scenario}-${ALIAS}.html"

      echo "##### 🧪 Scenario: \`$scenario\`"
      echo '```bash'
      echo "k6-dashboard run -e SCENARIO=$scenario -e HOST=$HOST --out csv=$CSV --out dashboard=export=$HTML scenario/$FILE"
      echo '```'
      echo ""
    done
  done
done
