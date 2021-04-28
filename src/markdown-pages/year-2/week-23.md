---
path: "/year-2/week-23"
---

# Year #2, Week #23 💻 🚅

_New stuff we learned this week:_ 🤔

## SQL, Relational Databases, mysql

- A _database_ is a piece of software designed to save important information on
  disk, and make it easy and fast to retrieve ("query") data out of it in
  various ways.
- The two main "families" of databases are **relational**, and **document**.
- Most _relational_ databases use some flavor of `SQL`, which stands for
  **Structured Query Language**. You can think of it like a computer language,
  but it's a very simple and limited language designed to do ony one thing:
  create, alter, insert and fetch info out of databases.
- One of the most common open source free relational databases is **mysql**,
  we'll be using a variation of it called **mariadb**.
- Most databases have some kind of interactive shell/repl type thing, where you
  can type commands and interact with your database on the command line. For
  mariadb, we'll have you access your databases using this command:

```bash
$ mysql -u tabitha -p
# you'll have to enter your db password on the next line
```

- once you're connected to the database shell, here are some commands for poking
  around:

```sql
SHOW DATABASES; -- list all databases
USE flashcards; -- select the `flashcards` db
SHOW TABLES; -- print out all tables in db
DESCRIBE users; -- print description of `users` table
```

- Notice the **semicolons** -- they are required in the shell. Sequel statements
  can be long and complex, so they are often broken into multiple lines. The
  semicolon tells the shell you're done writing your statement.
- Mysql databases have **TYPES**, often _lots_ of them. Specifying what type
  your data is helps the database stay _small_ and _fast_. A few types you might
  encounter include:
  - `TEXT`
  - `INTEGER`
  - `REAL` (like a javascript number, can be decimal)
  - `BOOLEAN`
  - `CHAR`
  - `VARCHAR`
  - `BLOB`
  - `TINYBLOB`
  - ...and [lots more](https://mariadb.com/kb/en/data-types/)
- to **create a database and table** you might enter a few commands like this:

```sql
CREATE DATABASE my_app; -- create a new db called `my_app`
-- create a table users with 3 cols: `id`, `name`, `email`
CREATE TABLE users (id INTEGER, name TEXT, email TEXT);
```

- once you have a table created, you can insert records (think "rows") into your
  table like so:

```sql
INSERT INTO users
  (id, name, email)
  VALUES
  (1, 'Jared', 'jared@example.com');
-- Query OK, 1 rows affected (0.017 sec)
```

- you can also insert **multiple records at a time**:

```sql
INSERT INTO users
  (id, name, email)
  VALUES
  (2, 'Amir', 'amir@example.com'),
  (3, 'Betty', 'betty@example.com');
-- Query OK, 2 rows affected (0.038 sec)
```

- you can **change a table after it's been created** with `ALTER TABLE`:

```sql
-- add an `age (INTEGER)` column to the `users` table
ALTER TABLE users ADD COLUMN age INTEGER;

-- delete the `email` column completely
ALTER TABLE users DROP email;
```

- SQL _keywords_ like "ALTER TABLE" are **not case-senstive**, so you can do
  `ALTER TABLE` or `alter table` or `alter taBLE`. But there is a strong
  _convention_ to use "SHOUTY CASE" for SQL keywords, which helps them stand out
  from the other keywords and values.
-
