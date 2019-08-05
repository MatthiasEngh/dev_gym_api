DATABASE="dev_gym_api"
createdb $DATABASE
psql -d $DATABASE -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'
psql -d $DATABASE -c 'CREATE ROLE dev_gym_api WITH LOGIN'

