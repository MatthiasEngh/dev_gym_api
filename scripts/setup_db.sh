SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
DB_DATA_PATH="$SCRIPTPATH/../db/data"
locale-gen en_US.UTF-8
initdb -E UTF-8 --locale=en_US.UTF-8 -D $DB_DATA_PATH
