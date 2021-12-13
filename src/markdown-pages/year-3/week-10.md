---
path: "/year-3/week-10"
---

# Year #3, Week #10 💻 🪀

_New stuff we learned this week:_

## Dependency Injection

- You can make things that are hard to test easier, by a technique called
  "Dependency Injection". This means that instead of your code reaching out to
  the outside world directly for it's dependencies (like database, network
  API's, etc), you explicitly **pass IN** (or "inject") these dependencies from
  the outside.
- Passing in (injecting) dependencies from the outside allows you to swap out
  **mock versions** for testing, allowing you to easily exercize all of the
  hard-to-reach edge cases of your app in a fast, reliable way.

## Homework Plan (2 weeks)

- 1 day Monkey Assignment #17
- 2 day review all flashcards in your (old) app.
- 2 days touch typing practice
- 1 day King C reading assignment (chapter 10) 👑
- 1 day King C exercizes 👑
- 1 day _Read the Docs!_ Jest Assignment
- 1 day Flashcards API Jest Assignment 🃏
- 1 day Flashcards WebApp Jest Assignment 🃏
- 2 days watch all Dan Abramov's Redux Videos
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #10 of King C</Checkable>

<Checkable id="king-10">
  Selected Projects from King C, Ch. 10 👑
</Checkable>

<Checkable id="docs-jest">Read the Docs! (Jest Edition)</Checkable>

<Checkable id="monkey-17">Monkey Assignment #17 🐒</Checkable>

<Checkable id="api-jest">Flashcards API Jest Homework 🃏</Checkable>

<Checkable id="webapp-jest">Flashcards WebApp Jest Homework 🃏</Checkable>

<Checkable id="dan-abramov">Watch Dan Abramov's Redux Videos</Checkable>

<Checkable id="flash-review">Review Flashcards (#1)</Checkable>

<Checkable id="flash-review-2">Review Flashcards (#2)</Checkable>

<Checkable id="typing">touch typing practice (#1)</Checkable>

<Checkable id="typing-2">touch typing practice (#2)</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Monkey #17

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Triple-check that you did the first three steps.
- Start at section **2.8 - Call Expressions**. Work through that section, and
  commit your work when you finish.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](http://jared.howtocomputer.link/monkey/26--2.8-call-expressions.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C Chapter 10 Project 👑

---

- First, make sure you've slowly and carefully read all of chapter 10 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- **NOTE:** For the exercizes that build on the code from the chapter, you don't
  need to re-type that all in, I've got the relavent chunks of code
  [in this snippet](https://gitlab.howtocomputer.link/-/snippets/4) (It has both
  `poker.c`, and if you scroll down, `stack.c`)
- Complete the following programming projects from chapter 10, making a **new
  file** for every one:
- `Project #1`
- `Project #2`
- `Project #3` **Extra Credit: ✨**
- `Project #4`
- `Project #6` Who doesn't love a good _reverse polish notation_ calculator! 🤓
- `Project #7` **Extra Credit: ✨**

---

## Read the Docs! Jest Edition 🃏

---

- Read the following sections of the [**Jest docs site**](https://jestjs.io/)
  - [Using Matchers](https://jestjs.io/docs/using-matchers)
  - [Testing Async Code](https://jestjs.io/docs/asynchronous)
  - [Setup & Teardown](https://jestjs.io/docs/setup-teardown)
  - [Mock Functions](https://jestjs.io/docs/mock-functions) _(you don't have to
    understand perfectly all of this, just try to get a high-level sense of
    what's possible with their mocking helpers, sow a few seeds in your
    brain...)_
  - Then, skim some of [this page](https://jestjs.io/docs/api), and find one
    cool thing you didn't know about, and post a description about it in Slack.

---

## Flashcards WebApp Jest Assignment 🃏

---

- Make sure you've completed the **"Read the Docs! Jest"** assignment _first_.
- Make sure you've addressed any feedback from your last web app MR, and merge,
  pull, etc.
- Then, make a **new branch**.
- Did you make a new branch? Do you love making cookies?
- Take a few minutes and read the short `readme.md` for the
  [`@friends-library/dev`](https://gitlab.howtocomputer.link/htc/fldev) package.
- Install the package.
- Write some tests that cover all of the current things your _reducer_ does. You
  should create some state, then call your reducer with that state and each of
  your actions, and then make assertions about the new state. Remember, our
  reducer actually _mutates_ the state object, so it doesn't return a new state
  object (that is handled under the hood for you in the reduxlite library).
- Be sure you've covered any _edge cases_, like the first and last card, or
  anything else you can think of.
- clean up your code, make sure you've removed any debugging things, and submit
  a MR.

---

## Flashcards API Jest Assignment 🃏

---

- Make sure you've first completed the **"WebApp Jest"** assignment before
  working on this one.
- Make sure you've addressed any feedback from your last _API_ MR, and merge,
  pull, etc.
- Then, make a **new branch**.
- Did you make a new branch? Do you love making cookies?
- Take a minute and add the vscode extension called "Inline SQL" by
  `jtladieras`. It allows you to get syntax highlighting for sql like so:

```ts
const QUERY = /*sql*/ `SELECT * FROM users`;
```

- Now, we'll start by creating a **database abstraction** that we can mock in
  tests. Create a file called `src/db.ts`.
- If you haven't already, lets also create a file dedicated to _types_ for our
  API, called `src/types.ts`. In the types file, let's create an interface for
  our database abstraction, start it out as an empty interface:

```ts
export interface Database {}
```

- next, in the same file, let's make a type called `Response` which is a _tuple_
  of an HTTP status code and some json (you can use `any` for the json, for now
  at least). Bonus points if you remember how to _name_ your tuple members.
- next, let's make a new file in `src/` called `route-responders.ts`. The
  purpose of this file is to export a bunch of functions, one for each route.
  These are the **pure** functions we're extracting out of our messy,
  dependency-filled world. They each will take an instance of our `Database`
  type, and maybe some other parameters. And they will **all** return a
  **Promise** of our `Response` tuple type.
- create (and export) a route responder called `getCards()`. It should take a
  `Database` as an argument, and return a _promise_ of a `Response`. Fill in
  some dummy code to make it type check for now. (Hint: mark the function as
  `async` -- then you won't have to muck around with making your own promises).
- Ok, now we'll flesh out our DB abstraction a bit. Add a requirement to the
  `Database` type, that it has a property called `getAllCards` that returns a
  promise of a `Result` of an array of `Card`s. (Hint: the `Result` type can be
  imported from `@htc/simple-sql`. Hint 2: If you haven't already done so, you
  should have a dedicated type for your `Card` row. Move it into `src/types.ts`
  if it's not already there.)
- Next, let's make our "live" database abstraction. Make a file called
  `src/db.ts`. In it, export a default new class named `LiveDatabase`.
  - Make sure it `implements Database` (which you'll need to import)
  - have it take an instance of `SimpleMySQL` in it's constructor. Make it a
    `private` property called `mysql`.
  - fill in the required `getAllCards()` function using the `this.mysql`
    property, making a real query to the database, and returning the result. Use
    the `/* sql */` comment trick to get syntax highlighting for your SQL (via
    the new extension).
- Below the `LiveDatabase`, let's make and export another class, called
  `MockDatabase` -- it should also implement the `Database` interface. Fill in
  the required function with anything that makes the type-checker happy.
- OK, it's time to write some tests. Install the `@friends-library/dev` library,
  and set up two scripts for testing, one for `npm run test` and one for
  `npm run test:watch`.
- Create a `src/__tests__/route-responders.spec.ts` file. In it, write a couple
  tests for the `getCards()` function exported from `src/route-responders.ts`.
  Pass the function an instance of `MockDatabase`. In order to control what our
  mock returns, you can replace the function you care about in your test, like
  this:

```ts
const mockDb = new MockDatabase();
mockDb.getAllCards = () => Promise.resolve({ ok: false, error: `oh noes!` });
```

- write tests for the error scenario, and the success scenario. Make sure you
  are asserting on what the **status code** is, and what the **json** is. To get
  these to pass, you'll need to actually fill in a real implementation of the
  `getCards()` function in `src/route-responders.ts`, using the injected
  database dependency.
- Next, go into your `src/index.ts` file, and use all your shiny new code
  instead of the inlined function that is there for your `/cards` route:
  - create an instance of your "live" database, by passing it a fully configured
    `SimpleMySQL` object
  - pull the innards out of your `app.get("/cards")` route, and have it call the
    `getCards()` function from `src/route-responders`.
  - use the result you get back from the route responder to set the status code
    and send back json.
  - HINT: make the express function wrapping your route responder `async` so you
    can use `await` in it and not muck around with promises directly.
  - HINT: instead of doing `import { getCards } from './route-responders';` you
    can do `import * as routes from './route-responders';` Then, you can call
    `routes.getCards()`, which reads kind of nice, and you won't end up having
    to import a billion responders as your app grows.
- Test that the app still works when wired together using the `api.http` file
  you created a few weeks ago.
- Finally, a bit of cleanup:
  - move the `MockDatabase()` class from `src/db.ts` into
    `src/__tests__/mock-db.ts`
  - your tests probably create a new MockDatabase for each test. This is not a
    big deal now, since we only have a few tests, but eventually this will get
    pretty repetative. What's something you read about in the jest docs that
    could clean this up? Figure that out and implement it.
  - review all your code for stray comments, `console.log`s, etc.
- Push up a MR, review your diffs, and clean up anything you notice. Then slack
  me the MR URL.

---

## Redux Dan Abramov Homework

---

- Watch all of the videos (total 2 hours, 1 min) of the
  [Fundamentals of Redux Course from Dan Abramov](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)
  Egghead course. You might need to sign up for a free account. I already
  unblocked it on Gertrude, but haven't tested if I need anything else unblocked
  to make it work.
- The video is broken into lots of small chunks, so you can slowly pick your way
  through them over the next two weeks.
