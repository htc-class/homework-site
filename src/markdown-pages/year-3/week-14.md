---
path: "/year-3/week-14"
---

# Year #3, Week #14 💻 🥍

_New stuff we learned this week:_ 🤔

## Hashing passwords in Node

```ts
import bcrypt from "bcrypt";

// hash a password
const plainTextPassword = `cafed00d`;
const hash = await bcrypt.hash(plainTextPassword, 10);
// then, store the `hash` var (NOT the plain text password)
// in your database

// check a password against the stored hash
// NEVER storing the plain text
const isMatch = await bcrypt.compare(
  // this would be a password you get POST-ed to you
  someSubmittedPassword,
  // this is the hash you retrieved from the database
  hashFromDb
);
```

## Some useful SQL Goodies

- When creating a table, you can add the phrase `IF NOT EXISTS` right after
  `CREATE TABLE`. If the table already exists, the command will be skipped. This
  makes it safe and error free to run a `CREATE TABLE` query operation multiple
  times.
- the MySQL `TIMESTAMP` data type holds a combination of _date_ and _time_, in
  UTC, and is automatically converted to/from your timezone by mysql.
- The format of a `TIMESTAMP` is `YYYY-MM-DD HH:MM:SS`, like
  `1970-01-01 00:00:01`.
- When creating a table, you can specify that the default value of a TIMESTAMP
  column should be the "current timestamp", like this:

```sql
CREATE TABLE cats (
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- You can also specify a column to always be updated to the current timestamp by
  specifying `ON UPDATE CURRENT_TIMESTAMP` whenever any value in the row is
  updated. This is really useful and very frequently leveraged for a column
  called `updated_at`, like this:

```sql
CREATE TABLE cats (
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

- You can have your database enforce that _all values in a column MUST be
  **UNIQUE**_ by adding a "Unique constraint". When creating a table, here's the
  syntax:

```sql
CREATE TABLE students (
  id TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  slack_username VARCHAR(255) NOT NULL,
  UNIQUE (slack_username)
);
```

## Semver

<img src="/images/semver.png" style="margin-bottom: 2em;" />

## Homework Plan

- 1 day Monkey Assignment #22 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day touch typing practice
- 1 day Flashcards API assignment (Migrations)
- 1 day CS50 Pset 3 C Assignment (Plurality, Runoff)
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="migrations">Flashcards API (Migrations)</Checkable>

<Checkable id="monkey-22">Monkey Assignment #22 🐒</Checkable>

<Checkable id="cs50-elections">CS50 Pset 3</Checkable>

<Checkable id="flash-review">Review Flashcards #1</Checkable>

<Checkable id="typing-1">touch typing practice #1</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## CS50 Pset 3 (Plurality, Runoff)

---

- First, make sure you've addressed any feedback and merged MR's from previous
  work on your CS50 repo.
- Make a new branch.
- Very carefully read the whole description of the `plurality`&nbsp;
  [problem here](https://cs50.harvard.edu/college/2019/fall/psets/3/plurality/)
- Starting with [this code](https://gitlab.howtocomputer.link/-/snippets/10),
  complete the implementation of `plurality.c`. (Hint: make sure you carefully
  refer to the "Specification" section of the assignment when working on filling
  out the functions, it gives very detailed instructions on what each function
  should do).
- Make sure to test your code, including edge cases, to prove that it works.
- Commit your work.
- Next, very slowly and carefully reach the whole description of the
  `runoff`&nbsp;
  [problem here](https://cs50.harvard.edu/college/2019/fall/psets/3/runoff/)
- Starting with [this code](https://gitlab.howtocomputer.link/-/snippets/11),
  complete the implementation of `runoff.c`.
  - **Hint 1**: again, make sure you refer to the "Specification" section of the
    problem as you work through each function, since it gives helpful detailed
    requirements, and hints for each one.
  - **Hint 2**: you might want to end up debugging this code, if it doesn't work
    the way you think. If you don't have vscode debug files setup, refer to the
    new stuff where I explained that. You'll need to make use of the `"args"`
    property in the `launch.json` to pass in command line arguments, like
    `"args": ["Bob", "Alice", "Charlie"]`.
  - **Hint 3**: Pay special attention to trying to understand the `preferences`
    multi-dimensional array, it's a bit of a head-scratcher. The first index is
    the _index of the voter_. The second dimension is the _rank_. And the `int`
    stored in the array represents the _index of the candidate voted for_. So,
    if the first voter ranked the second of three candidates in third place,
    `preferences[0][2]` would equal `1`, because `0` is the index of the voter
    (first), `2` is the _rank_ (third place), producing `1` which is the second
    index, aka, the second candidate.

---

## Flashcards API Homework (Migrations)

---

- Slowly and carefully read the SQL portion of "New Stuff" above ^^^.
- Make sure you've addressed any prior feedback and merged your last MR from
  your last chunk of work in the Flashcards API repo.
- make a new branch.
- Go back a few weeks in the "New Stuff", find the section about doing mysql
  "dumps". Dump your production database and keep it somewhere safe, just in
  case you mess something up with this homework.
- Next, double-check that your Api project will be talking to your "dev"
  database, NOT your production database. Check your `.env` file, and any logic
  where you pass the database name to the `SimpleSQL` constructor.
- Next, spend a little bit of time studying the README for
  [htc simple migrations](https://gitlab.howtocomputer.link/htc/simple-migrations).
- Install the library, setup the db provider as instructed, and create your
  first migration in a file called
  `./src/migrations/01_CreateCategoriesTable.ts`. You should start by
  copy/pasting the example for a migration in the readme, and then delete the
  innerds of the `up` and `down` function. That way you'll be sure you are
  implementing the `Migration` interface correctly.
- Update the code that you copy/pasted in the last step so that the migration
  will be responsible for creating (and dropping) the `categories` table. Since
  you already have this table, you can get most of the SQL from SQL Pro, like I
  showed you in class. Be sure to add a `IF NOT EXISTS` clause (see new stuff
  above). The `down` method should remove the table.
- Before you test it, add a `console.log()` inside your `up` method, and then
  run the migration by typing `npx simple-migrate up:all`. You should get no
  errors and see what you logged out in your `up` method. If you have errors,
  read them and try to figure out what you did wrong. The migration library is
  very picky about where your files are and what they are named.
- Once you get your migration to run successfully, open up SequelPro and refresh
  the tables. You should see a _new table_ added by the migration library called
  `__htc_simple_migrations`. This table keep track of which migrations have
  already been run. It should have one row already, indicating the migration it
  just ran.
- Try running the same `mpx simple-migrate up:all` command again... It should
  say that it's skipping the migration because it was already executed.
- Just for your learning sake, let's force the migration to re-run by manually
  deleting the row from the `__htc_simple_migrations` table (do this in
  SequelPro). This causes the tool to forget that the migration had been run.
  Run the migration again -- it should be safe to do because you added the
  `IF NOT EXISTS` in the previous step. The migration library should report that
  the migration was run, and you should see the console.log again.
- Make sure your SQL code is formatted nicely, with newlines, etc, and then
  remove the `console.log`, and commit your work.
- Make another migration for creating (and dropping) your `cards` table.
- Commit your work.
- Next, we're going to add a `users` table. It should have 5 columns:
  - `id` (should be VARCHAR(36) and the primary key)
  - `email_address` (VARCHAR(128), and must be UNIQUE)
  - `password` (TEXT)
  - `created_at` (TIMESTAMP and must be set automatically)
  - `updated_at` (TIMESTAMP and must be set automatically, and update
    automatically)
- experiment with the SQL to create this table in SequelPro until you get it
  right, then copy it into your migration. Make sure to make a `down()` that
  removes the table.
- When you think you've got it, test the migration by running
  `npx simple-migrate up:one`, then see what you got in SequelPro. It should
  have created the table for you.
- Since you don't have any data at all in that table yet, test your migrations
  "down" method by running `npx simple-migrate down:one`. Verify in SequelPro
  that the table was deleted.
- Commit your work.
- Next, we're going to add a `user_tokens` table, it should have 3 columns:
  - `id` (should be VARCHAR(36) and the primary key)
  - `user_id` (should be VARCHAR(36) and be a foreign key reference to
    `users.id`) (Hint: you might need to go back and review some previous new
    stuffs and/or homework where we learned about the syntax for Foreign Keys,
    or search on the mysql docs site))
  - `created_at` (TIMESTAMP and must be set automatically)
- Again, experiment with crafting the SQL query in SequelPro first, and then put
  it into your migration. Test the up and down, like you did with previous
  steps.
- Commit your work.
- Finally, make some npm scripts to simplify running your migrations. You can
  name them how you want, but you should have one at least for running all of
  your migrations up, and maybe one for reversing one migration.
- Commit your work.
- Submit a MR, review all your diffs, clean stuff up, and slack me the MR URL.

---

## Monkey #22 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _Infix Expressions_ section,
  which is labeled **3.6 Conditionals**
- Complete the entire section, stopping at _3.7 Return statements_.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/32--3.6-eval-conditionals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url
