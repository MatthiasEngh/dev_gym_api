database="dev_gym_api"

psql -d $database -c "CREATE TABLE match(
  match_id uuid NOT NULL DEFAULT uuid_generate_v1(),
  game_id uuid,
  open boolean
)"
