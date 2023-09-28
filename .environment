export RELATIONSHIPS_JSON="$(echo $PLATFORM_RELATIONSHIPS | base64 --decode)"

# Set database environment variables
export DB_HOST="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].host')"
export DB_PORT="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].port')"
export DB_DATABASE="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].path')"
export DB_USERNAME="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].username')"
export DB_PASSWORD="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].password')"
export DB_CONNECTION="$(echo $RELATIONSHIPS_JSON | jq -r '.mariadb[0].scheme')"
export DATABASE_URL="${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"