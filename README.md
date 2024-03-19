# HOW TO SETUP THIS PROJECT IN YOUR LOCAL DEVICE

### GETTING THE FILES

**Clone this GitHub Repository to your desired location**

### DATABASE SETUP

1. Open up psql (SQL Shell).
2. Input the following:

```

Server [localhost]: localhost
Database [postgres]: postgres
Port [5432]: 5432
Username [postgres]: postgres
Password for user postgres: **ENTER PASSWORD FOR YOUR DEVICE'S POSTGRESQL**

```

Refer to the `scripts.sql` file for all the DATABASE Queries.

### SERVER-SIDE SETUP

1. Open the codebase in VS Code
2. Open up your terminal
3. Run:

```

yarn install

```

4. Add a `.env` file and include the following

```
ACCESS_TOKEN_SECRET= ...
REFRESH_TOKEN_SECRET=...
```

5. Now run:

```
yarn start
```

6. Open Postman and paste:

`http://localhost:5000/api/v1`

7. Add necessary endpoints to test the APIs

- User Management -> /users
- Authentication -> /auth
- Album Management -> /albums
- Artists Management -> /artists
- Songs Management -> /songs
- Album-Artists Many to Many Relationship -> /album

**YOU ARE ALL SETUP TO VIEW AND INTERACT WITH THE PROJECT**
