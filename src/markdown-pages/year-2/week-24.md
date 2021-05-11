---
path: "/year-2/week-24"
---

# Year #2, Week #24 💻 ⛽️

_New stuff we learned this week:_

## Environment Variables and `.env`

- It's very common for applications to need a set of **configurable variables**
  that change based on whether the application is being developed, or used in
  production, or used in a staging environment. A common practice is to use
  **environment variables** for this. Environment variables are name/value pairs
  that get made available to a _process_ when it starts.
- You get some environment variables for free, like `$USER` and `$HOME`. You can
  also put environment variables in files that are _sourced_ by bash, or your
  terminal, typically in places like your `~/.bashrc` or `~/.bash_profile`.
  Environment variables declared in files like those need to be **exported** so
  that they take affect, and are handed off to any child processes, like so:

```bash
export VISUAL=vim
```

- You can see all of the environment variables attached to your shell process by
  using the unix command `printenv`.
- `node` makes your environment variables available to you in an _**object**_ on
  the `process` global: `process.env`.
- Of course, as we've done many times, you can also start up a process and pass
  it a unique, or custom environment variable by prepending the command with a
  bash variable, like:

```bash
$ NODE_ENV=production node ./src/server/index.js
$ DEBUG=true clang -o hello hello.c
```

- a very common practice has emerged in many programming languages of adding a
  `.env` **file** to your project root, and then **NOT committing** it to source
  control, in fact, explicitly ignoring it with `.gitignore`. That way, you can
  put secrets like database passwords, API keys, etc, and they can be used by
  the app, but won't be available on places like Github and Gitlab. The format
  for a `.env` file looks sort of like the output of `printenv`:

```txt
db_name=pets
db_pass=oh_so_secret123!
db_host=127.0.0.1
rad_pets_api_key=4f0626d4-6999-4535-8c82-34cce12c9a9a
rad_pets_api_secret=ca3d983137d747c7a8757787c401b733
debug=false
```

- the idea then is that you have a different `.env` file in the different spots
  where your app runs -- on your local machine you would have test/sandbox/debug
  settings. On a staging server you might talk to a replica of your production
  database, and for your production build, you would have all of your live,
  production settings.

---

## Homework Plan 🏕

- 1 day Flashcards MySQL Assignment
- 1 day Flashcards env Assignment
- 1 day Personal Project assignment
- 1 day touch typing practice
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="flash-mysql">Flashcard MySQL Assignment</Checkable>

<Checkable id="flash-env">Flashcard Env Assignment</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="next-personal">Personal Project Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## Flashcard App Assignment #1 (mysql)

---

- This week's first task is to switch to _fully using_ our new MySQL database we
  created last week. To do that, we're going to use a little node/typescript
  library I created to wrap another library for talking to MySQL through node. I
  published it as an `npm` package called `@htc-class/simple-mysql`.
- make sure that your master branch is up to date with all of your latest work,
  and then branch off and create a new branch for this work.
- type a command to install `@htc-class/simple-mysql` as a new dependency of
  your project. Should it be a _regular_ dependency? Or a dev dependency?
- Review the documentation I put in the `readme.md` file for the library. The
  url is
  [https://gitlab.howtocomputer.link/htc/simple-mysql](https://gitlab.howtocomputer.link/htc/simple-mysql).
  Pay special attention to the _types_.
- Use the library to replace all the usage of your old `.json` file with SQL
  statements through the library I wrote. To start out, just _hardcode_ your
  database credentials, but we'll fix that in the next assignment.

---

## Flashcard App Assignment #2 (.env)

---

- Before you get into the meat of this assignment, type a command to show all of
  your environment variables, and browse through them for a minute.
- cat out (or open with vim) your `~/.bashrc` file, to see how some of them are
  being set. Your web dev **ports** are _not_ in that file, but there's a clue
  in there where you could find them? Can you figure out where those variables
  (like `PROD_API_PORT`, etc.) are defined from looking at your bashrc?
- Now, for this assignment we want to remove the hardcoded database access
  information from your app (db name, user, password), and replace it with
  values read from _environment variables_.
- To make this happen, you're going to make a very simple clone of the `dotenv`
  npm package, so you understand exactly how it works.
- First, spend a few minutes reading the "readme" for the project (but don't
  worry, we're only going to implement the bare minimum functionality we need,
  not all the fancy stuff and edge cases they've worked out.) The library is on
  Github, so you don't have access to it, but I copied the readme and
  [put it here](https://gitlab.howtocomputer.link/htc/readme/-/blob/master/dotenv.md).
  Take a few minutes to read through the documentation, and see if you can
  figure out how the gist of how it works.
- Your task is relatively straightforward: create a function called
  `loadEnv(path: string): void` that takes a string argument with a _path_ to a
  `.env` file. The function should:
  - read the file into memory
  - split it up into lines
  - pitch any empty lines
  - split each line (like `DB_PASS=super-secret`) into variable _names_ and
    variable _values_ (`DB_PASS`, and `"super_secret"`).
  - for each variable you read in this fashion, make it available as a normal
    env variable by **augmenting the `process.env` object**
- If you've done it right, you should be able to use it like this in your
  Flashcards server file:

```ts
// [...] other imports above ^^^
import loadEnv from "./load-env";

const pathToEnvFile = "<you figure this out>";
loadEnv(pathToEnvFile);

// [...] then somewhere below...

const db = new SimpleSQL({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// [...] etc...
```

- Finally, _modify the code_ so that when you're working in dev mode, it uses
  the `<you>_flashcards_dev` database, and when you build it, it uses the
  `<you>_flashcards_prod` database. (Hint: we are already setting an environment
  variable to signify dev vs. prod mode, use the same env var to set this up
  too.)
- When you've got it all working, build for production, and then, at your
  production URL, add a new card for `printenv` in the `bash` category.
- Commit your work, submit a MR, and slack all the links.

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
