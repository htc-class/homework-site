---
path: "/year-3/week-03"
---

# Year #3, Week #3 💻 🏈

_New stuff we learned this week:_ 🤔

## MySQL Dump

- MySQL ships with a cli tool called `mysqldump` which _dumps the contents of a
  database_ for backup/restore/transfer purposes. It has loads of options
  (checkout `man mysqldump` if you're interested).
- to dump a database called `my_db_name` owned by user `suzy` you could type:

```bash
$ mysqldump --user suzy --password my_db_name
# or, with shorthand flags...
$ mysqldump -u suzy -p my_db_name
```

- `mysqldump` will then prompt for the password (that's what the `--password`
  flag means), and if you supply the correct one, it will _dump a bunch of sql
  statements to standard out_.
- because `mysqldump` is a good unix tool and _barfs to standard out_, you
  usually want to redirect the output to a file:

```bash
# write the SQL to a file called `db_backup.sql`
$ mysqldump -u suzy -p my_db_name > db_backup.sql
```

- to **import** all of the SQL from a file generated from `mysqldump`, you _pipe
  the contents of the file into the `mysql` command_:

```bash
# not the reverse redirection `<` 😎
$ mysql -u suzy -p my_db_name < some_dumped.sql
```

## MySQL - Add Column

- You can **add a column** using the `ALTER TABLE` statement:

```sql
ALTER TABLE pets ADD COLUMN weight INTEGER;
```

- You can **set defaults for a new column when creating the column**:

```sql
ALTER TABLE pets ADD COLUMN name TEXT DEFAULT "";
```

- MySQL columns by default can be _empty_, or rather, be `NULL`. If you want a
  column to **not allow NULL**, you have to declare it with a **NOT NULL
  contstraint**:

```sql
--                                    vvvvvvvv----👋
ALTER TABLE pets ADD COLUMN name TEXT NOT NULL DEFAULT "";
```

## MySQL - Foreign Keys 🔑

- A **Foreign Key** in a database is a _column with a GUARANTEED REFERENCE to
  another record in the database_. They are widely used to establish
  **relationships between tables**.
- For instance, an database might have a `orders` table to track all orders, and
  then also an `order_items` table for individual items in each order. In that
  case, the `order_items` table would have a column `order_id` that contains the
  id of the order it belongs to.
- to add a foreign key relationship to an existing column:

```sql
-- example with generic names to help you understand
ALTER TABLE table_1 ADD FOREIGN KEY (table1_fk_column_name) REFERENCES table_2(referenced_col);

-- for the order/order_items example, this might be...
ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders(id);
```

---

## Homework Plan

- 1 day Monkey Assignment #11
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day King C reading assignment (chapter 4)
- 1 day King C exercizes
- 1 day MySQL/Flashcards homework
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #4 of King C</Checkable>

<Checkable id="king-3">Selected Projects from King C, Ch. 4</Checkable>

<Checkable id="monkey-11">Monkey Assignment #11 🐒</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## King C Chapter 4 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 4 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects (not _exercizes_) from chapter 3:
  `1, 2, 3, 5, 6`. Make a new file for every one.
- commit your work, and push up a MR on GitLab, then slack me the URL.

---

## Monkey #11 (Parsing Integer Literals) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start in the middle of section **2.6**, in the section labeled **Integer
  Literals**. Work through that section, and stop when you get to the section
  labeled **Prefix Operators**.
- As always, try to do as much as you can on your own, leaning on the videos
  when you get stuck. But also, make sure to watch the videos and update your
  code accordingly.
- [Video link](http://jared.howtocomputer.link/monkey/16--2.6-parsing-integer-literals.mp4)
- Submit a MR, slack the MR url

---

## MySQL / Flashcards Assignment

---

- Slowly and carefully review the introduction to SQL from our
  [previous new stuff](https://homework.howtocomputer.link/year-2/week-23)
- Slowly and carefully review this weeks New Stuff ^^^.
- ssh into the HTC pi, and connect to the mysql shell.
- type a command to select your dev flashcards database (can't remember the
  name? cat out your `.env` file in your flashcards app for a hint...)
- type a mysql query to list everything in your cards table
- quit the mysql shell
- type a command to dump the dev flashcards database, barfing it to standard
  out. Spend a minute or two looking at the SQL it produces. How much of it do
  you recognize?
- use `man mysqldump` and your vim searching skills to figure out how to dump
  the database in **xml format**. Dump it to standard out. Does any of it make
  sense?
- now, type a command to dump your **PRODUCTION** database, redirecting the
  output into a file called `flashcards.sql`.
- trash and remake your dev database (be careful that you only do this to your
  `dev_*` version!!!) by connecting to the mysql shell again and typing:

```sql
DROP DATABASE yourname_flashcards_dev;
CREATE DATABASE yourname_flashcards_dev;
```

- Now, exit the mysql shell, and (referring to the new stuff above for help if
  needed), type a command to **import** the `flashcards.sql` file you made
  (step 9) from your production database into your newly re-created dev
  database.
- If at any point in the following steps you get in a horrible state, you can
  always repeat steps 10 and 11 to start fresh. 👍
- Have a parent help you install the [Sequel Pro](https://www.sequelpro.com/)
  program. It should already be allowed to talk to the internet in the HTC
  Gertrude keychain. Connect it to your flashcards dev database, and make a
  favorite. Use your LOCAL (not pi) `~/.ssh/id_rsa.pub` ssh key as the
  "password", and check your LOCAL `~/.ssh/config` for an ip address and user.
  Slack me if you have trouble with this step.
- Once you've got Sequel Pro connected, experiment with writing a few queries,
  selecting various things from your cards table, and getting familiar with the
  Sequel Pro user interface.
- Write a SQL statement to create a **new table** called `categories` which will
  hold your _flashcard categories_. It should have 2 columns, one for a
  uuid-style `id`, and another for a `TEXT` "name" column. Run the statement in
  Sequel Pro. If you have errors or do it wrong, you can always trash it and
  retry -- this is a brand new table, and you're working with your **dev** copy
  here.
- Write and execute a series of statements to create however many rows you need
  to insert all of your categories as rows in the database. To generate uuids,
  you can use the `uuid` command (on the HTC pi) I showed you in class.
- Write a SQL statement that:
  - adds a column to the `cards` table called `category_id`
  - that _cannot_ be NULL
  - of type `VARCHAR(36)` (the length of a uuid)
  - with a default value of an empty string
- In Sequal pro, click the "category" column header to sort your cards by
  category.
- For each category you have, write a **single SQL INSERT statement** to update
  all of the rows of your `cards` table that should be in that category, giving
  them the proper `category_id` uuid. Hint 1: You'll need to use a `WHERE`
  clause for this to work right. Hint 2: If you want to test your WHERE clause,
  write a SELECT statement using the same WHERE clause, it doesn't change your
  data.
- Once you've got all of the `category_id` values set correctly, you'll need to
  do a few steps before you can add the foreign key relationship.
- First, you'll need to change the _column type_ of the `id` column of your
  `cards` table to _not_ be `TEXT`. It really should never have been TEXT, but
  it worked while we were learning. Change it to `VARCHAR(36)` as well. The
  reason for this is that mysql foreign key releationships need columns with
  **fixed sizes** so that the database engine can optimize things.
- Next, you need the `id` column of your your `categories` table to be a
  **primary key**. Type a SQL statement to alter that column. If you don't know
  that from Execute Program, you can find it in the
  [docs here.](https://mariadb.com/kb/en/getting-started-with-indexes/#primary-key)
  The reason for this change is that a "foreign key" constraint has to reference
  something that is a "key" (or at least has an index). We'll talk more about
  those concepts later. The "id" field of a table is almost always your
  **primary key** -- which sort of means that it is the unique identifier for
  each row.
- Next, this is not technically required, but while we're at it, the `id` column
  of your `cards` table should also be a primary key. Make it so by typing
  another sql query.
- Now you're ready to make add the foreign key constraint. Type a SQL statement
  to **add an explicit foreign key releationship** between the
  `cards.category_id` and the `categories.id` columns. If you did everything
  right, it should run without an error. If any of your ids were incorrect,
  Maria will refuse to perform the operation.
- Now that you've got the foreign key relationship set up, experiment with how
  Sequel Pro will let you jump from one row to another. Cool, huh?
- When you're satisfied everything is correct, type a series of commands to:
  - dump the contents of the updated dev database you've been experimenting with
  - drop and recreate the production database
  - import the dumped dev database so that your prod database now contains the
    categories table and foreign key column.
- Slack me when you're done so I can poke around your DB and see how it looks.
