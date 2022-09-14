---
title: Test Environment
---

# Test Environment

To just test the code, the easiest way is to use Docker Compose to orchestrate up the environment since we then don't have to install and configure the PostgreSQL database.

Run the following to start orchestrating:

- `docker-compose up`

If we have done some changes to our code we need to run `docker-compose up --build` to force rebuilding the images.

We can also run `docker-compose up --scale postgres=0` to just run the Hugin API Docker container without the PostgreSQL database.

If we already have a database up and configured we can run the following to build and start the Hugin Cache docker image:

```
docker run -p 3000:3000 \
    --name hugin-api \
    -e POSTGRESQL_HOSTNAME=postgres \
    -e POSTGRESQL_PORT=5432 \
    -e POSTGRESQL_DB_NAME=hugin_api_dev \
    -e POSTGRESQL_DB_USER=postgres \
    -e POSTGRESQL_DB_PASSWORD=test1234 \
    -e NODE_ENV=development
```