# setup:
```
npm install
```

# setup db
create db cluster:
```
scripts/setup_db.sh
```

start postgres server:
```
scripts/start_postgres.sh
```

create db:
```
scripts/create_db.sh
```

create db schematic:
```
db/migrations.sh
```
(todo: create migration script in scripts and create separate migrations)

inspect db interactively:
```
scripts/inspect_db.sh
```

# run tests:
```
npm run tests
```
