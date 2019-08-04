SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
DB_DATA_PATH="$SCRIPTPATH/../db/data"
postgres -D $DB_DATA_PATH
