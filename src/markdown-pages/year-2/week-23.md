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
- Notice in the above example you use the keyword `DROP` to _delete_. And there
  is no "undo" or warning, so _be careful_. In a similar manner, you use `DROP`
  to **delete an entire table too:**

```sql
-- delete the entire `users` table
DROP TABLE users;
```

- To **view the records (rows)** in your database table, you use the `SELECT`
  keyword. To select everything (all columns), you say `SELECT *`, like so:

```sql
SELECT * FROM users;
```

- if you only want to see specific columns, and not every column, you can
  replace the `*` with a _comma-separated list of columns_ you're interested in:

```sql
SELECT age FROM users; -- just the `age` col
SELECT age, id FROM users; -- get 2 columns
```

- If you want to make a more specific **query**, you use a **WHERE clause**,
  which sort of reads like English:

```sql
SELECT last_name FROM users WHERE id = 3;
```

- The most complicated statement we'll use (this week, at least), is the
  statement to **update an existing row**. It also uses a _where clause_,
  allowing you to precisely select the row or rows you want to change:

```sql
-- update a single column (`first_name`) of a single row
UPDATE users SET first_name = "Jared" WHERE id = 32;

-- or you can change multiple columns at once...
UPDATE users SET id = 3, age = 18 WHERE first_name = "Bo";
```

---

## MySQL Homework

---

- Slowly and carefully review the "New Stuff" above ^^^.
- SSH into the HTC Pi.
- Connect to the mysql (mariadb) shell by typing `mysql -u <your-usernam> -p`.
  Enter the password I gave you in Slack.
- type a command to see a list of all of the databases (that your user has
  access to). You should see 4.
- type a command to _use_ your `<username>_scratch` database (you have to tell
  mysql what database you want to use before you can really do anything, since
  there can be many databases on a single mysql server)
- create a new table called `pets`, with just one _column_, to hold a "name"
  which should be of type `TEXT`.
- insert the name of a pet into your database
- type a command to show all of the records (rows) in your `pets` table.
- insert two more pets.
- type another command to show all of the rows in your table.
- type a command to delete the entire `pets` table.
- that last table we created wasn't super useful, what if there were two pets
  named "Steve"? We'd have no way to tell them apart. Our next table will be
  better.
- create a new table called `htc_members`, starting it out with an `id` column
  of type `INT`, and a "first_name" column of type `TEXT`
- insert a record representing yourself, with the id of `1` and your name.
- type a command to see everything in your table
- next, insert _two rows at once_, for two more members of the HTC class.
- type a command to see everything in your table
- improve your table by adding `age` and `has_beard` and `gender` columns...
  which _types_ should these columns have?
- _update_ the rows that you already entered to _fill in the missing empty
  columns_.
- now, add the rest of the HTC members (including Jared) into your database **in
  ONE command**. You might want to open up a vim buffer to craft your query
  before to make sure you get it right before entering it into the mysql shell.
- type a query to show just the row containing your information
- type a query to show all of the rows
- type a query to show just the first_name and age of everyone in your database
- add three more columns: `last_name`, `mom_name`, and `dad_name`, and update
  every row to contain the correct information (My parent's names are "Jan" and
  "Bruce")
- type a query to show the first_name and age of everyone whose last name is
  "Henderson".
- Type a query to show the first and last name of everyone whose mother is named
  "Stacey"
- Take a guess, and try to query for everyone _older than 14_. What's your
  intuition about what the syntax is? ... Did your guess work?
- Write a creative query that selects _only you_ without using your first or
  last name.
- select all the records from your table, and take a screenshot of the table
  printed, and post it in Slack.
- spend a few minutes looking around the documentation for
  [mariadb types](https://mariadb.com/kb/en/data-types/). Think of an idea for a
  new practice table, that would contain at least 4 columns, with at least 3 new
  types you haven't used yet. Create your table, and insert at least 5 rows,
  then SELECT all and take a screenshot, and post it in Slack. If you get
  errors, try to carefully read the error messages and search in the
  documentation to fix your error.

---

## Flashcards App Assignment

---

- You _must_ finish the **mysql** homework before doing this assignment, so if
  you haven't done that, stop and do that first.
- our task is to **get all our flashcards into a DATABASE** and out of our lol
  json file.
- take a minute and start by scanning through your `json` file and **remove all
  test/trash flascards, so they don't get sucked into your new clean database**.
- the way we're going to accomplish that is by creating a patented "throwaway
  node script" to write out a **file** with a long list of _mysql statements_
  that will create a table with the right columns, and also _insert all of the
  flashcards_. Once we have a file with all the correct statements, we'll just
  open the mariadb shell and import the file.
- Pick a name for your **table**, then start by writing down what _columns_ you
  think you will need, and their _types._
- Write a `CREATE TABLE ...` statement to create your table, and run it in the
  mariadb shell using your "scratch" database. Make sure the statement works
  with no syntax errors. Then `describe` your table, and double-check that
  things look good.
- create a temporary helper script called `./server/cards-to-db.js`, and start
  the file with `@ts-check` so you get a little help from vscode/typescript. (If
  you're feeling ambitious, make the script a typescript file and run it with
  the `tsnode` executable that's already in your path.)
- bring in the node `fs` module with `const fs = require("fs");`
- slowly build up a script that assembles mysql statements to import your cards
  to the database, taking baby steps and console.logging a lot, here's some
  hints/steps you might want to take:
- hardcode the first "line" of the file you're creating to be a mysql "use"
  statement selecting the right database. You can use your scratch database or
  your dev or prod database, since we don't have any real valuable data yet, we
  can always just drop the table and start over if we make a mistake.
- hardcode the second "line" to be the `CREATE TABLE` statement that you already
  wrote
- you'll need to read all of your current flashcards into memory, and decode
  them from json into plain js objects
- then you'll need to iterate over each flashcard and turn it into a
  `INSET INTO your_table...` statement, adding that to your data structure or
  variable.
- once you've got all of the statements you need, write out all of the
  statements to a file called `import.sql` in the same directory. Start by just
  inspecting it, does it look right? did you mess anything up? Just keep
  tweaking your script until this file looks like you could paste it into
  mariadb shell and have it work.
- remember to add semicolons and newlines!
- you'll need to _escape your strings_ using `\` (and `\\`?... hopefully not
  `\\\`)
- your file should look aproximately like this:

```sql
USE <db_name>;
CREATE TABLE <table_name> (...);
INSERT INTO <table_name> (...) values (...); -- card 1
INSERT INTO <table_name> (...) values (...); -- card 2
-- and so on, lots of lines...
```

- when you think you've got it so that the SQL syntax is correct, open up a
  mariadb shell and try running all of the commands by using the
  `source <filename>` command, which for you would be something like
  `source <path/to/your/import.sql>`
- if maria tells you about any syntax errors, hunt them down. Your most likely
  culprit will be escaped characters, and newlines, and strange stuff in some of
  your cards. If you need to, go back to your test script and keep tweaking and
  regenerating the `import.sql` file until it's just right.
- inside the mariadb shell, do a `SELECT *` after you get the file to import
  with no errors, do the rows look good? Do you see any problems? If so, fix.
- once you've got it to where everything looks good, **run the import file TWICE
  -- once for your `<user>_flashcards_dev` and once for your
  `<user>_flashcards_prod` databases.**
- Type a query to see all of the cards in your "regex" category.
- experiment with running a few more queries on your data.
- take a screenshot of some of the rows in your database, and post it on Slack.

---

## Personal Project Homework

---

- Refer to your work plan you created a few weeks ago, and select the next item
  on your list. If you're ahead or behind of where you thought you would be,
  make any modifications you think appropriate, then **Slack me your goal for
  this week by WEDNESDAY at 9AM!!!!** 📅 👋
- Make sure you've addressed all of my feedback from last week, merge your MR,
  connect with vscode, pull from origin, and _create a new branch_.
- Implement the feature or chunk of work you planned.
- When you think you're done, check things like:
  - did you leave in any `console.log()`s?
  - does it look good at all screen sizes?
  - do your storybook stories work and cover your components (if you're using
    storybook)
  - are your components and variables named well?
  - is there anything you want to clean up, refactor, or DRY up before you
    submit?
- when you're happy with the code, build your site, submit a MR, and Slack both
  the URLs.
- after I review, address any feedback I give you.

---
