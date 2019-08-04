DATABASE="dev_gym_api"
createdb $DATABASE
psql -d $DATABASE -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'
