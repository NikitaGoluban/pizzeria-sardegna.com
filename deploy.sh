#!/usr/bin/env bash

set -Eeuo pipefail

readonly DOMAIN_ROOT="/var/www/vhosts/pizzeria-sardegna.com"
readonly FRONTEND_DIR="${DOMAIN_ROOT}/git-repository/frontend"
readonly DIST_DIR="${FRONTEND_DIR}/dist"
readonly WEB_ROOT="${DOMAIN_ROOT}/httpdocs"
readonly BACKUP_ROOT="${DOMAIN_ROOT}/private-data/deployment-backups"
readonly DEPLOY_USER="nikita"
readonly DEPLOY_GROUP="psacln"
readonly NODE_PATH="/opt/plesk/node/24/bin:/usr/local/bin:/usr/bin:/bin"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Uruchom ten skrypt jako root: sudo ./deploy.sh" >&2
  exit 1
fi

if [[ ! -f "${FRONTEND_DIR}/package.json" ]]; then
  echo "Nie znaleziono frontendu: ${FRONTEND_DIR}" >&2
  exit 1
fi

if [[ ! -d "${WEB_ROOT}" ]]; then
  echo "Nie znaleziono katalogu strony: ${WEB_ROOT}" >&2
  exit 1
fi

if [[ -d "${DIST_DIR}" ]]; then
  chown -R "${DEPLOY_USER}:${DEPLOY_GROUP}" "${DIST_DIR}"
fi

echo "1/5 Kontrola kodu"
runuser -u "${DEPLOY_USER}" -- env PATH="${NODE_PATH}" \
  npm --prefix "${FRONTEND_DIR}" run lint

echo "2/5 Budowanie frontendu"
runuser -u "${DEPLOY_USER}" -- env PATH="${NODE_PATH}" \
  npm --prefix "${FRONTEND_DIR}" run build

if [[ ! -f "${DIST_DIR}/index.html" ]]; then
  echo "Build nie utworzył pliku ${DIST_DIR}/index.html" >&2
  exit 1
fi

readonly BACKUP_DIR="${BACKUP_ROOT}/$(date -u +%Y%m%d-%H%M%S)"

echo "3/5 Kopia obecnej strony: ${BACKUP_DIR}"
install -d -m 750 -o "${DEPLOY_USER}" -g "${DEPLOY_GROUP}" "${BACKUP_DIR}"
rsync -a "${WEB_ROOT}/" "${BACKUP_DIR}/"

echo "4/5 Publikowanie dist do httpdocs"
rsync -a --delete "${DIST_DIR}/" "${WEB_ROOT}/"
chown -R "${DEPLOY_USER}:${DEPLOY_GROUP}" "${WEB_ROOT}"
find "${WEB_ROOT}" -type d -exec chmod 755 {} +
find "${WEB_ROOT}" -type f -exec chmod 644 {} +

echo "5/5 Sprawdzanie strony"
curl --fail --silent --show-error --head "https://pizzeria-sardegna.com" >/dev/null

echo "Gotowe: https://pizzeria-sardegna.com"
echo "Kopia poprzedniej wersji: ${BACKUP_DIR}"
