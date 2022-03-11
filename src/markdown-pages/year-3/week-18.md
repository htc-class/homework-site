---
path: "/year-3/week-18"
---

# Year #3, Week #18 💻 ⛳️

## Homework Plan

- 1 day Monkey Assignment #26 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 15 👑
- 1 day King C programming exercizes 👑
- 1 day touch typing practice
- 1 or 2 days Flashcards assignment
- 1 day watch CS50
  [CS50 Lecture #4 segment](https://htc-viewer.netlify.app/?id=cF6YkH-8vFk),
  from `58:44` to _end_.
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

## Monkey #26 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _3.9 Bindings and the
  Environment_ section, which is labeled **3.10 Functions and Function Calls**.
- ⚠️ **DONT COMPLETE all of 3.10**. Instead, _stop_ 🛑 in the middle of page 143
  (pdf) or 181 (print), where he gets the tests passing and starts by saying
  `Easy right? The test passes.`.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/36--3.10-function-obj.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C: Chapter 15 (Writing Large Programs) 👑

---

- First, make sure you've slowly and carefully read all of chapter 15 of King C.
  assignment.
- Make sure you've addressed any feedback from last week's King C assignment,
  merge, and _make a new branch_.
- Complete Programming `Project #1`, following these steps:

  - All the files needed (including a `quote.txt` file for testing) are in
    [this snippet](https://gitlab.howtocomputer.link/-/snippets/15). Put them in
    a separate folder within your chapter 15 folder.
  - Before you make any changes to the file, get it to build using `cc`,
    outputting to a file called `justify`. (Hint: in the book he basically gives
    you the command, just find where it is and change `gcc` to `cc`)
  - Once you get it to compile, run it against the `quote.txt` file by typing
    `./justify < quote.txt` (The `<` redirection character uses the contents of
    a file as the input to the program it "points" to)
  - figure out another unix-command that will have the exact same effect as
    `./justify < quote.txt`
  - next, recreate the `Makefile` he lays out on Page 367, changing `gcc` to
    `cc` again. Type a command to "make" the program using the Makefile, and
    double-check that it works.
  - look in the directory... do you see some new files? do you understand what
    they are and why they're there?
  - Finally, do what he says in the assignment: "Improve the program by having
    `write_line` alternate between putting the larger gaps at the end of the
    line and putting them at the beginning of the line." (read the below bullet
    points first)
  - What he means by "alternate between..." is this: right now the program is
    weighted towards _adding more spaces towards the **end** of the line_, if
    the spaces can't be divided evenly, like so:

  ```txt
  foo bar  baz  lol
  jim jo it  so  my
  ```

  - when you've completed the task, it will alternate each line, putting extra
    spaces at the end, then the beginning, resulting in this:

  ```txt
  foo bar  baz  lol
  jim  jo  it so my
  ```

  - the reason why the program works the way it does is that when you divide two
    `int`s in C, any decimal number that would result is **implicitly ROUNDED
    DOWN**:

  ```c
  int x = 3 / 2; // `x` = 1
  ```

  - this causes extra spaces to keep getting deferred till later in the
    `write_line` function
  - to change this to _alternating_, you will have to keep track of some
    variable to flip back and forth to know whether you should weight extra
    spaces early or late.
  - when you are trying to weight _early_, you'll need to **ROUND UP** when
    dividing instead of down
  - `<math.h>` has two functions `floor` and `ceil` that will be useful
  - you can _cast_ an `int` to a float like this `(double) x`.

- Complete `Project #2`, using the same files as project 1.
- Complete `Project #3`, following these steps:
  - Make a new folder inside your "chapter 15" folder called `qsort/` and
    _inside that_ folder, add a file called `qsort/qsort.c` containing
    [this code](https://gitlab.howtocomputer.link/-/snippets/16).
  - Make the changes he describes.
  - To test that your program works, for this project I want you to use a bare
    `cc ...` CLI command, _not_ a makefile. Put the command you used in a
    comment just above your `main()` function, so I can see the command you use
    when I look at your MR.
- Complete `Project #4`, following these steps:
  - Make a new folder inside your "chapter 15" folder called `remind/` and
    _inside that_ folder, add a file called `remind/remind.c` containing
    [this code](https://gitlab.howtocomputer.link/-/snippets/16).
  - Make the changes he describes.
  - To test that your program works, for this project I want you to use a
    `Makefile`, and commit it with your work.
- Complete `Project #5`, using your code from Chapter 10 project 6 (RPN
  calculator), copying the code into a new folder in your "chapter 15" folder,
  and splitting it apart as required. You can use `cc` _or_ `make` for this one.
- before you commit, make sure you remove any `*.o` files and executable files
  (unless they were already ignored by your `.gitignore`)
- commit your work, create a MR
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

## Flashcards

- Make sure you've addressed all feedback and merged any open MRs for both the
  webapp and api side of your project.
- create new branches for _both_ your API and webapp, you'll be touching both in
  this assignment.
- Read this whole assignment through before starting.
- **Part 1:**
- when we did your last set of migrations in your api, we didn't update any of
  your API _code_, so there's at least one error in your API right now you'll
  need to fix, because your `GET /cards` function is probably still trying to
  read a column out of the database like `created` or `date` or `time` that no
  longer exists. Find this and fix it. Make sure you update any types in your
  API to match.
- on a similar note, you might need to check your web app code -- if your api
  returns different keys now (it might, or it might not, based on if you alias
  your columns), then your webapp will have to adapt. Be sure any types for your
  webapp are updated. Running `npx fldev ts:check` might be helpful if you
  update your types, to find all typescript errors.
- get your "dev" versions of your web-app and API going, and make sure they are
  talking to each other and things are working correctly.
- Make it so you can flip your cards:
  - the state should go in redux, not local react state
  - you'll need to decide how the user flips a card... what action flips it?
- commit your work
- **Part 2:**
- next, as a preparation for future work, I want you to make a new file called
  `lib/token-storage.ts`, and a corresponding test file:
  `lib/__tests__/token-storage.ts`.
- in your non-test file, start with this code:

```ts
// returns a token from LocalStorage,
// or null if it doesn't exist, or is expired
export function getUserToken(now: Date = new Date()): string | null {
  throw new Error(`Method not implemented.`);
}

// sets a token in local storage, with an optional expiration date
export function setUserToken(token: string, expires?: Date) {
  throw new Error(`Method not implemented.`);
}
```

- now, implement these two functions, with tests covering all these cases:
  - getting a token when there is nothing in storage should return null
  - getting a token that is not expired should return the token
  - getting a token that is expired should return null
  - setting a token should allow it to be retrieved later with getUserToken
  - setting a token with no expiration means the token is only valid for the
    current session
  - setting a token with an expiration should allow it to be retrived before it
    expires
  - setting a token with an expiration should cause null to returned from
    getUserToken after the expiration is past.
- note, in order to "control time", the `getUserToken` function allows you to
  pass in a date value representing now. If you don't pass one in, it defaults
  to using the actual current time, via a default argument.
- note 2: in order to get jest to allow you to use `localStorage` inside your
  functions, add this to the top of your test file:

```ts
/**
 * @jest-environment jsdom
 */
```

- note 3: tokens with no expiration only are good for the "session" which means
  they should be stored in `sessionStorage` -- this means your implementation
  will need to use both sessionStorage and localStorage -- you'll need to figure
  out which ones (or both?) to check for a stored token, and in which one to set
  a token. 🤔
- note 4: review in the old "new stuff" the week when we did localStorage --
  sessionStorage is exactly the same, except it only lasts for the session.
- commit your work
- push up MRs for both API and web app side
- review your diffs
- slack me your MR urls
- after I review your "API" MR and you merge, I want you to "deploy it to
  production", which means update the repo on the pi to be running the latest
  merged changes and restart the PM2 daemon. Once you've done that, deploy to
  netlify and Slack the netlify preview deploy URL.
