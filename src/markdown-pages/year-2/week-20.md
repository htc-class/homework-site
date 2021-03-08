---
path: "/year-2/week-20"
---

# Year #2, Week #20 💻 🚇

_New stuff we learned this week:_ 🤔

## Conditional Rendering in React

- In React, it's common to _sometimes want to render_ a component, and _other
  times skip rendering_. There are several ways to accomplish this, some are
  better than others, and there are also a couple common _pitfalls to avoid_.
- Imagine you had this component, which rendered a headline, and then might also
  have a secondary headline, if a `user` prop is present:

```tsx
const Header: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <header>
      <h1>Bob's Discount Hunting Shack</h1>
      <h2>{user}</h2>
    </header>
  );
};
```

- the above code _sorta_ works, but when `user` is missing (it's optional, after
  all), the HTML still renders out an empty `<h2></h2>` element, which is funky,
  and feels a little sad, and could cause problems. We can do better. Let's
  instead introduce a conditional. But first, here's an approach that **won't
  even compile:**

```tsx
const Header: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <header>
      <h1>Bob's Discount Hunting Shack</h1>
      {if (user) { <h2>{user}</h2 >}} 🚨🚨 WONT COMPILE
    </header>
  );
};
```

- you see, we're not allowed to us `if` statements inside JSX, we can only use
  `expressions`. The difference between a statement and expression is a little
  squirrelly, but the simple way to think about it is that **an expression
  returns a value**, and a **statement doesn't**. Remember, JSX is just
  _syntactic sugar_ over a bunch of calls so `React.createElement()`, so we
  can't do complex logic. The above code doesn't work for the same reason you
  can't put an `if` statement into a normal _function call expression:_

```ts
function add3(x: number): number {
  return x + 3;
}

let name = "jared"

// 🚨 NO BUENO, YOU CAN'T DO THIS EITHER!
add3(if (name === "jared") { 5 } else { 6});
```

- OK, so we can't use `if/else` statements, but we **can use logical operators
  and ternaries**. First let's look at ternaries, if you're going to render
  using a ternary, it's straightforward _if you have something you want to
  render no matter:_

```tsx
const Header: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <header>
      <h1>Bob's Discount Hunting Shack</h1>
      <h2>User: {user ? user : "not logged in"}</h2>
    </header>
  );
};
```

- but what if we want to _render **nothing**_? In that case, it's good to know
  that `null`, and `undefined`, and `false`, and the empty string `""` are all
  valid things that can be rendered inside of a React component, and they all
  produce **no HTML**:

```tsx
// ✅ this component is VALID, and renders an empty div
const EmptyDiv: React.FC = () => {
  return (
    <div>
      {null}
      {undefined}
      {false}
      {""}
    </div>
  );
};
```

- armed with this knowledge, we can improve our original example, and only
  render the `<h2>` when we have a user:

```tsx
const Header: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <header>
      <h1>Bob's Discount Hunting Shack</h1>
      {user ? <h2>{user}</h2> : null}
    </header>
  );
};
```

- we could also use the **nullish coalescing operator** or one of the other
  logical operators:

```tsx
const Header: React.FC<{ user?: string }> = ({ user }) => {
  return (
    <header>
      <h1>Bob's Discount Hunting Shack</h1>
      {user ?? <h2>{user}</h2>}
    </header>
  );
};
```

- one **pitfall to be aware of** is that **not all falsy values render nothing**
  in react. Specifically, _numbers can be rendered in a react component_, and
  the number 0 will render, even though it's _falsy_. That means that code like
  below is a common source of bugs. This component will render a weird `0` digit
  when there are no specials:

```tsx
// 🚨 Line 5 below has a bug
const Mart: React.FC<{ specials: [string] }> = ({ specials }) => (
  <div>
    <h1>Sally's Stuff Mart</h1>
    {specials.length && <h2>We have specials!</h2>}
  </div>
);
```

- the way to fix that bug is to explicitly ensure the left-hand-side will always
  be a _boolean_, by changing it to: `{specials.length !== 0 && [...etc]}`

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 2 days Flashcard App assignment
- 1 day Akron Snowmen assignment
- 1 day Personal Project assignment
- 1 day touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="snowmen-assignment">Akron Snowmen Assignment</Checkable>

<Checkable id="delete-card">Flashcard App Assignment</Checkable>

<Checkable id="next-personal">Personal Project Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Flashcard App Assignment

---

- This week we're going to add the ability to **delete a flashcard** from your
  app.
- In order to delete a card, we're going to need some way to _uniquely identify_
  each card. Right now we don't have that, other than by the _index_ of the
  array of cards. But that feels a little scary. So we're going to start by
  adding an `id` property to each card.
- there are a lot of ways to assign ids to things in computer-land, the most
  intuitive and maybe easiest is just to use **integers**. However, this has
  some drawbacks, like you have to keep track of which integer you're on when
  adding a new one, you can end up with "holes" in your id scheme, and it can be
  a security risk in some contexts. Years ago almost everything was integer
  based for identification, but you rarely see that today. So we're going to be
  modern and not use integers.
- instead of integers we'll use UUIDs, as we went over in class
- to start, make sure you addressed all my feedback on your MR from last week,
  then merge.
- then, connect to your flashcards repo, switch to master, pull, delete your old
  branch, and **make a new branch**
- run an npm command to **install a new dependency** called `uuid`. If you can't
  remember how [check out this old new stuff](/week-34)
- after you install `uuid` do a `git diff` and see if you can understand why
  both your `package.json` and your `package-lock.json` file changed. Do you
  understand the basic idea of why you have changes in both files now?
- where would you expect that `npm` installed the new package? Verify your guess
  by using `ls` and `cat` to find the files for the package. (You won't be able
  to see them through vscode, because I some files from being accessed by
  vscode, if you recall.)
- the `uuid` package (if you were to look on it's Github readme, or npm
  documentation, which you can't likely read because it's probably blocked for
  you), allows you to create UUIDs from code in javascript/typescript, but it
  **also exposes a CLI command** to get a UUID from the shell. Do you remember
  where npm puts "executable" (or "binary") files? That's right! In the
  `./node_modules/.bin` dir. `ls` that dir to see if you can see that there is
  an executabe file called `uuid`. Do you see it?
- lets experiment with getting a UUID from the shell by typing
  `./node_modules/.bin/uuid` go ahead, and try it. You should see a uuid like
  `cad5a6c5-3d9f-45c8-924d-fe2cbbd153db` printed to your terminal. Go ahead, try
  it a few more times! You could do it for the rest of your life and never get
  the same uuid. Cool, huh?
- one more thing as an "npm learning moment" -- the `npx` command has two
  purposes in life (which is confusing, but hey...). One of those purposes is as
  a _shortcut to invoking binaries_ in the `./node_modules/.bin` dir. So, for a
  less gnarly looking command, try this instead: `npx uuid` and you should see
  that you also get a uuid to your terminal.
- OK, npm learning digression is over, back to our task. We want to get one of
  these UUIDs added to EVERY one of our cards. Now, we could just set there with
  our terminal open and generate one after another, copy them and paste them
  into our `card-data.json` file, but that sounds like a BIG pain, right? We're
  better than that. Instead, we're going to create a _temporary helper script_
  that we'll use to add UUIDs to our flashcards, and when it's done it's
  mission, we'll delete it and never commit it to our repo. I do this kind of
  thing all the time, to prevent error-prone and tedious manual labor that
  computers are better suited for than humans.
- create a file in the _root_ of your project called `add-uuids.js` -- we'll do
  this in straight up javascript to make it so we don't have to fiddle with
  compiling. But, so we get some help from typescript, add this as the _very
  first line_ in the project:

```ts
// @ts-check
```

- then, we're going to import the `uuid` package, but since this is the
  wild-wild west, not Typescript, we'll use the old `commonjs` style, so add
  this as line 2:

```js
// @ts-check
const uuid = require("uuid");
```

- next, we'll call the "version 4" function, which is the normal version of
  getting a uuid, by adding this code: `console.log(uuid.v4());` on line 3 or 4.
- test your script by calling `node ./add-uuids.js` and you should see a uuid
  logged out to the screen.
- now for the part where you're on your own: you're going to make this script
  add a new uuid to every flashcard you have in your `card-data.json` file.
  Please start by _very slowly and carefully reading the ENTIRE
  hints/requirements section below_:
- requirements/hints:
  - use `cp` or vscode's GUI to **make a backup** of your `card-data.json` file
    in case you horribly screw this up.
  - do not try to write the whole script in one go and then test if it works,
    instead, go line by line, `console.log`-ing each step making sure the script
    is doing what you want it to do. I would try to get it all the way to the
    part where it has added UUIDs to each card, and then I would just log the
    data **without writing** it back to the file. Then, only if everything
    looked hunky dory, would I finally use the script to _write updated data to
    the file_.
  - each time you do a little more, and want to console.log your progress,
    you'll be invoking the file from the shell by doing `node ./add-uuids.js`
  - you'll need to import the `fs` module, by adding `const fs = require("fs");`
  - you'll need to use `JSON.parse()` to turn the file contents into an array
    (after you read the file contents into a string)
  - after you get the card data into an array, you'll need to `.forEach` or loop
    through each card **adding a new property called `id`** which has the value
    of calling `uuid.v4()`.
  - after you modify the array, adding an id to each card, you'll need to
    stringify the array back into a string with JSON.stringify and then _write
    the file back to disk_, although I would do a "practice run" of just logging
    out the modified data one last time before I wrote the file to the disk.
  - if you mess up majorly and corrupt your `card-data.json` file, don't worry,
    just restore the file you made as a backup (you did make a backup, right?)
  - to make `JSON.stringify()` create **pretty-printed JSON**, you need to pass
    `null` and `2` as the last two args, like this:
    `JSON.stringify(someVariable, null, 2)` -- if you don't do this, your
    `card-data.json` file will all be one line. This isn't a huge deal though,
    as it's probable that if you view the file with vscode that prettier will
    fix it up for you. But it's a good trick to know, nonetheless.
- when you're all set, double-check that your `card-data.json` file looks like
  valid json, and that each card has a `"id":` property which is a UUID.
- then, you can delete the script you made
- make a commit -- it should only be the `package.json` and `package-lock.json`
  file, but that's OK.

---

## Flashcards Homework, pt. 2

---

- connect in vscode to your flashcards app
- in part 1 of the homework, we ensured that every _existing card_ in your app
  had a uniqe `id` property. Next we're going to modify the server code so that
  **every card you add ALSO gets an id**.
- there are two ways we could go about this -- a) we could assign the new card a
  uuid in the _browser_, and _send it to the server_ -- or b) we could do the
  opposite, and create it _directly on the server_. There are pros and cons to
  both methods, but for our use case, there's no real benefit to creating the
  id's on the client (browser), so we'll keep thinks easy and go with option b),
  create them on the server.
- So, modify your `server/index.ts` file to import the `uuid` package, and _add
  a new id_ to each card that is created. Note: back now in Typescript, you'll
  import the module using **ES Module** syntax, like normal, not how we did in
  our throwaway javascript script, so it will look like this:

```ts
import uuid from "uuid";

uuid.v4(); // > 5a92a665-6865-4c04-9be0-fdade72a7c57
```

- once you've got it working, check by adding a new card from your browser, and
  verify by peeking at your `card-data.json` file that the new card was added
  with a new UUID.
- commit your work
- for our final task of the week, we're going to add a "delete" button on each
  card so that you can **delete a flashcard from the browser.** Read all of the
  following hints/requirements before tackling the feature.
  - when the delete button is clicked, you should use `fetch()` to send a
    `DELETE` request to a path like: `/cards/<uuid>`, i.e.:
    `cards/5a92a665-6865-4c04-9be0-fdade72a7c57`.
  - in your server code, you will need to detect when the _HTTP Method_ is
    `DELETE` and then _somehow extract the id from the **url**_.
  - once you've got the url extracted from the full url path, use that to **find
    and remove the card with that id**, saving the card data back to disk
    _without_ the deleted card. _(Hint: probably the easiest way to do this
    would be to use `Array.filter()` to create a filtered version of the array
    containing only the cards whose Ids do not match. But if you want to be more
    fancy, you could do it more efficiently with `Array.slice()`)_
  - after you've successfully deleted a card, the server should send bacy a "204
    No content" response to the client.
  - if the client (or a hacker!) tries to _delete a card that does not exist_,
    the server should somehow figure this out, and return a `404 Not Found`
    error.
  - **Extra Credit: ✨** Prevent people from _accidentally deleting a card with
    a stray click_ by first **prompting them to confirm** that they _really want
    to delete the card_ before sending the `DELETE` request. (Hint: **prompt**
    them, cough cough...)

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

## Akron Snowmen Homework

---

- spend a few minutes carefully reviewing the state of the Akron Snowmen website
  at [this url](http://jared.howtocomputer.link/akron-snowmen), where I've built
  the site as it exists in `upstream`. Jot down one or two small things that
  seem like they could/should be improved. Things like...
  - any small spacing tweaks where things just don't look _exactly right_
  - view the site at different screen sizes, are there any points where we could
    _dial in the media queries_ just a bit to improve things?
  - if you see something _big_ that needs changing, maybe post it in slack, but
    we are looking for **small wins** for this assignment
  - is there any text that needs improving?
  - links that don't point to the right thing?
  - or, instead of looking just at the website, scan through the **code** -- is
    there anything that you want to clean up or DRY up a bit? Rename any props
    or variables for greater clarity?
  - or _anything else you find_.
- pick 1-3 of these little things (depending on their size, I don't want this
  assignment to take you more than 30-45 minutes **max**) that you want to fix
- connect to your AS repo in vscode, switch over to master, pull from
  `upstream`, and create a new branch
- for each thing you want to fix, fix the thing and **commit your work once for
  each task**.
- when you're done, build the site, submit a MR, and post both URLs in Slack.
- **THEN**, check if any other students have already submitted their Mrs for
  this task. _I want **every student** to **review and comment** on **every MR**
  for this task_. Look carefully at the code changes, and test the outcome by
  viewing the posted built URL. Give any constructive feedback you have, but of
  course, be kind and encouraging. But also _don't be afraid to nicely call out
  something that doesn't seem right_.
