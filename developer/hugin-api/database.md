---
title: Database
---

# Database

We use the RDBMS PostgreSQL to store our data in Hugin Cache. 

## Database dump

To simplify the testing we provide a database dump. Its real data captured from hugin so its great way to either get some base data in the database to test the API or to try new features!

To load in the data you run the following in the hugin cache folder:

```
psql hugin_cache < database/samples/database_dump.sql
```
NOTE: For the above to function make sure you HAVE NOT ran the npm run db:migrate commands since this will cause issues!

## Database Diagram

This Database Diagram demonstrates how we store the data:

![Hugin Cache Database Diagram](../../assets/hugin-api/database-diagram.drawio.png)

To edit the diagram open up the file inside the directory **diagrams** called **database-diagram.drawio**.