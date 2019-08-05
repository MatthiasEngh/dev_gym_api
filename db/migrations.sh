DATABASE="dev_gym_api"

psql -d $DATABASE -c "CREATE TABLE users(
  user_id uuid NOT NULL DEFAULT uuid_generate_v1()
)"

psql -d $DATABASE -c "CREATE TABLE matches(
  match_id uuid NOT NULL DEFAULT uuid_generate_v1(),
  game_id uuid NOT NULL,
  open boolean NOT NULL DEFAULT TRUE
)"

psql -d $DATABASE -c "CREATE TABLE match_enrollments(
  match_id uuid NOT NULL,
  user_id uuid NOT NULL
)"
