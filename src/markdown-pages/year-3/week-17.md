---
path: "/year-3/week-17"
---

# Year #3, Week #17 💻 🥅

## Some Helpful SQL Syntax:

```sql
-- Add a column to an existing table
ALTER TABLE cats ADD COLUMN num_hairballs INTEGER

-- Delete a column from an existing table
ALTER TABLE cats DROP COLUMN num_hairballs

-- Change a columns name and type info
ALTER TABLE cats CHANGE COLUMN old_name new_name TEXT DEFAULT NULL

-- Select some records where a nullable column is not null
SELECT name, num_hairballs FROM cats WHERE name IS NOT NULL
```

## Homework Plan

- 1 day Monkey Assignment #25 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 14 👑
- 1 day King C programming exercizes 👑
- 1 day touch typing practice
- 1 or 2 days Flashcards API Assignment
- 1 day watch CS50
  [CS50 Lecture #4 segment](https://htc-viewer.netlify.app/?id=cF6YkH-8vFk),
  from `24:03` to `58:44`
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

## Monkey #25 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _3.8 Abort! Abort!_ section,
  which is labeled **3.9 Bindings and the Environment**. Complete the section.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/35--3.9-bindings-env.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C: Chapter 14 (Preprocesser) 👑

---

- First, make sure you've slowly and carefully read all of chapter 14 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- There are no programming _projects_ for this chapter, only _exercizes_. Make a
  new file for each exercize and follow the directions below:
- `Ex. #1` - write the 3 macros in a file with a `main` function and use
  `printf` to verify that they are working, then in a comment, answer the final
  question of the exercize.
- `Ex. #3` - first answer the questions for a) and b) in coments in a new file.
  Then, write the macro as printed and make a `main` function with `printf` to
  test if you were correct. Then, finally, do part c).
- `Ex. #6` - write both of the macros in a file with `main` and `printf` to
  prove that they work.
- `Ex. #9` - write all three of the macros in a file with `main` and `printf` to
  prove that they work.
- **Extra Credit: ✨** `Ex. #11` - Write the macro in a file and prove that it
  works. Write in a comment how you're able to prove to yourself that the output
  is going to standard error and not standard out as well.
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Flashcards API

---

- **PART 1: Running Migrations in Production 🔫**
- First, make sure you've addressed all feedback from the previous week/weeks,
  and merged everything.
- Before you make a new branch, we're going to "deploy to production" and run
  your migrations.
- Some of you have been working locally, and some still on the PI, either way,
  you have work to do, because if you've been working on the htc pi, you should
  have been working with your "dev" database, not your production database.
- Start by logging in to the HTC pi, and make a database dump of the current
  state of your production database. (You may have to refer to old new stuff for
  directions). Please be careful _not to commit_ the database backup. 👍
- once you've got a backup, `cd` into your flashcards API directory. Switch to
  master, and pull from Gitlab to make sure you have the most recently merged
  work. Double-check with `git log` that you've got all the work, including
  migrations and the "login/signup" features.
- Before you run your migrations, think carefully through how you're going to be
  sure you're running them against your _production_ database. What I mean by
  that is, you probably have some code somewhere in your repo where you check
  `process.env.NODE_ENV` and select different environment variables based on
  that. Find where that is, and review how it works. `cat` out your `.env` file
  and make sure you've got the right variables defined to talk to your
  production database.
- Also, look at your `package.json` npm scripts. Check if any of the commands
  you might want to run are defined as scripts. If so, will they need to be
  prefixed with `NODE_ENV=production ...` when you run them? That's perfectly
  fine and normal. Some people also like to define special "production" npm
  scripts that bake this in, by doing something like
  `"migrate:up:prod": "NODE_ENV=production npm run migrate:up"`. If you made a
  script like that, fine, if not fine, just familiarize yourself with what
  you're doing, and get all of the pieces straight in your head before you go
  on.
- Once you're prepared, **run all your migrations against your production
  database**. When you finish, connect to your prod database (either with the
  mysql shell, or Sequel Pro/Ace), and confirm that everything ran correctly.
  You should see a `__htc_simple_migrations` table was created, and you should
  see also that you have a `users` table and a `user_tokens` table.
- If for some reason things didn't work, investigate, troubleshoot, and fix by
  committing corrections to a new branch, and slack me to review anything.
- **PART 2: Updating Old Tables**
- Before you work on part 2 and 3, make note that at the top of this page, I
  added some SQL statements that will be very similar to the types you need to
  write for this assignment. Refer to those (or to the online docs you have
  available) when crafting your queries.
- Now, switch back to where you normally work (locally, or still on the Pi), and
  _create a new branch called_ `user-cards`.
- The first thing we want to do is update _both_ of our old "cards" and
  "categories" tables to have nice timestamp columns: `created_at` and
  `updated_at`. You'll need to write 2 migrations (one for each table) to
  accomplish that, but keep in mind the following things (read all these before
  starting):
  - your cards table already has a date-like field, but the data in it can't be
    automatically converted to a `TIMESTAMP`, so, unless you're doing the extra
    credit below, just delete that column, and recreate a new column called
    `created_at`. That means the migration will first delete the old column,
    (thus losing your old date data, but that's not a big deal), and THEN
    creating a new column. If you specify the new column datatype correctly (see
    below), they should all automatically be filled with the current timestamp
    at the time you run your migration.
  - the new `created_at` column should be non-nullable, a `TIMESTAMP` type, and
    should default to the current time.
  - **Extra Credit: ✨** Figure out how to do the migration _without_ losing the
    old date information from your non-`TIMESTAMP` column. Hint: You'll need to
    query the data first, convert the date strings into timestamp format (e.g.
    `2022-02-28 03:14:07`) using javascript, then put the dates back into the
    table, THEN change the column type.
  - The migration should also add an `updated_at` field, non-null,
    type=`TIMESTAMP`, and have it do the neat trick of always staying up to
    date, and default it to the `CURRENT_TIMESTAMP`.
  - After you've re-created (or modified) the `created_at` category, add a
    `updated_at` column as well. It should be just like the `updated_at` columns
    in your `users` and `user_tokens` tables.
  - second, also add `created_at` and `updated_at` timestamp fields to your
    `categories` table. This table has no previous date-ish fields to worry
    about deleting or modifying, so this migration can just add the two columns.
  - test your migrations with your dev (or local) database. Be sure to check for
    errors and output something. Remember, you can test and perfect your SQL in
    Sequel Pro/Ace first, before writing your migration.
  - remember to write good "down" migrations (if you did the extra credit, your
    down migration should turn the date strings back into js ISO format
    appending `.000Z` for the lost millesecond precision)
- **Part 3: Connect Users and Cards**
- Finally, we're going to add another migration adding a `user_id` foreign key
  column connecting cards to a specific user.
- The migration itself is relatively straightforward - we just need to add a
  column with a correct foreign key. The gnarly bit is figuring out what to do
  with the _existing cards in our production database_... they don't have a
  user. We'll solve this by making a multi-step migration.
- start by creating a new migration class/file called `AddCardUserId`
- in the "up", here's what we're going to do:
  - first, create a new user row and insert it into the database. This user will
    be _you_. But... you have some code you can re-use to make this easier.
    Figure out what that is and use it. Note: you'll need to supply an email
    address and password (and hash the password with bcyrpt) -- but I don't want
    you to put these values in your code, instead read them as environment
    variables to keep these values safe from the Russians.
  - second, once we have your user inserted into the database, we will _add a
    column_ called `user_id` to the `cards` table. It should be a `VARCHAR(36)`
    (because it will hold a UUID), and it should be a foreign key reference to
    the `id` field of the `users` table. The trick we'll employ is that (for
    now), we'll also **give it a default value** of the user id that you created
    in the previous step. This will make it so the column is added with a usable
    FK relationship without you having to do extra steps or insert those values
    manually.
  - third, once the column is added (and pre-populated with the user id of your
    special "you" user), we need to remove the _DEFAULT_ value, because from
    here on out we don't want new cards automatically getting connected to your
    user. So, write another db mutation that alters the column you just created,
    so that the column _no longer has a default value_.
- in the "down", you can just remove the column
- test your migration up and down. If you have no cards in your local or dev
  environment, manually add one or two and test again, you won't know for sure
  if you did it right unless you have some data in there to potentially cause a
  mysql error.
- review all your work, commit, clean up anything you notice in your diffs, and
  submit a MR. Slack me the MR url.
