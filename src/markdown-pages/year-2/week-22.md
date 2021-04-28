---
path: "/year-2/week-22"
---

# Year #2, Week #22 💻 🚅

_New stuff we learned this week:_ 🤔

## Git: ignoring files after they were added

- Sometimes with git, you accidentally commit a file that you should have
  ignored with `.gitignore`. If you notice that after one or more commits have
  been made, you'll notice that _it doesn't work to just add the file to your_
  `.gitignore`. **Adding a file that is already tracked to your .gitignore WILL
  NOT cause it to be removed from your repo.** Git is "sticky" like that. What
  to do? The `git rm` command will help us out.
- `git rm` is sort of like a shortcut to doing `rm <file> && git add .` -- that
  is to say, it deletes the file on disk, and tells git to delete the file from
  your repo. At that point, you can add the file to your .gitignore, and it will
  no longer be tracked.
- the `--force` or `-f` flag to `git rm` causes it to remove the file no matter
  what state it's in, even if it has modifications that git wants to track for
  you -- so if you're sure you want to remove the file from the git repo, using
  the `-f` option can make things simpler.
- here's an example workflow:

```bash
# (optional) make a backup of the file if it's important
$ cp ./my-file.json ../my-file-backup.json

# remove the file
$ git rm -f ./my-file.json

# now update .gitignore
$ echo "my-file.json" >> .gitignore

# now you can commit
$ git add .
$ git commit -am "remove file that should've been ignored"

# then if you restore the file, it will be ignored
$ mv ../my-file-backup.json ./my-file.json
```

## Javascript: Optional Chaining

- Sometimes, in javascript, you have a nested object with a property that
  **sometimes is not there**. Consider these types:

```ts
type Address {
  street: string;
  city: string;
  country?: {
    code: string;
    name: string;
  };
}

type User {
  name: string;
  age: number;
  address?: Address;
}
```

- Notice how the `User` type _may or may not have_ an `address` property. And
  notice how the `Address` type has an optional sub-object of `country` Imagine
  a function that took a `User` and returned their **country name** (if they
  have one), or returned the string `"<no country>"` if they don't have one. You
  would have to write the function like this:

```ts
function getCountryName(user: User): string {
  if (user.address !== undefined && user.address.country !== undefined) {
    return user.address.country.name;
  } else {
    return `<no country>`;
  }
}
```

- Notice how we have to check for `user.address` **AND** for
  `user.address.country`. That’s because if we just _blast through_ and try
  `user.address.country.name` without checking, we're likely to get a
  `Type Error: cannot read property "country" of undefined` error, crashing our
  app. No bueno.
- The **Optional chaining operator** `?.` was invented just for scenarios like
  this. As MDN says: _"The optional chaining operator (?.) permits reading the
  value of a property located deep within a chain of connected objects without
  having to expressly validate that each reference in the chain is valid."_
  Basically, if you use a `?.` instead of a `.` you **avoid all type errors**,
  and get the deeply nested value if it is present, or just `undefined` if **any
  step along the way evaluates to NULLISH:**

```ts
const hasAddress: User = {
  name: `Bob`,
  age: 33,
  address: {
    street: `123 Mulberry Lane`,
    city: `Hollywood`,
    country: {
      code: `USA`,
      name: `United States`,
    }
  }
}

const noAddress: User {
  name: `Suzy`,
  age: 26,
};

// 🚨 NOT SAFE!
hasAddress.address.country.code; // "USA" (we got lucky)
noAddress.address.country.code; // 🚨 RUNTIME ERROR

// 😎 This is TOTALLY SAFE!
hasAddress?.address?.country?.code; // "USA"
noAddress?.address?.country?.code; // ✅ undefined
```

- since the result of trying to drill into a deeply nested object and hitting an
  `undefined` or `null` value just \_evaluates to `undefined`, we can greatly
  simplify our `getCountryName()` function from above by using a combination of
  the **optional chaining** operator, and the **nullish coalescing operator**:

```ts
function getCountryName(user: User): string {
  // 😍 So clean, so nice.
  return user?.address?.country.name ?? "<no country>";
}
```

- with the optional chaining operator, you can theoretically do NUTS stuff like
  below (although it's not useful, it will never cause a runtime error)

```ts
const empty = {};
// ✅ Useless, but no error!
empty?.foo?.bar?.justKidding?.nope?.goat?.banjo();
// > undefined
```

## javascript: Express web-server framework

- As you've now learned, the build in core node `http` module works, but it gets
  a little unwieldy for a large web server, and isn't the most ergonomic. Stuff
  like handling different routes, CORS headers, reading JSON from requests, etc.
  is possible, but a little clunky, with some sharp edges.
- because of this, many open-source _web-server frameworks and libraries_ have
  emerged in the node ecosystem, the most common one being **express**.
  **Express** is really just a wrapper around the core `http` module, but it
  delivers a lot of nice "quality of life improvements" when building a node
  webserver
- the simplest _Hello world_ express server would look something like this:

```js
import express from "express";

const port = 7777;
const app = express();

// respond to `GET /` requests
app.get(`/`, (req, res) => {
  res.send(`Hello world!`);
});

// start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
```

- the [documentation site](https://expressjs.com/) has loads more details and
  code samples, but some highlights of what express offers include:

```ts
// 😎 Declarative ROUTING, with different functions
// handling different types of requests

// respond to `GET /cats`
app.get(`/cats`, (req, res) => {
  res.send(`Cats are cool.`);
});

// respond to `POST /cats`
app.post(`/cats`, (req, res) => {
  res.status(201).send(`New cat created`);
});

// respond to DELETE /cats/<id> with `id` variable provided
app.delete(`/cats/:id`, (req, res) => {
  // 😍 the `:id` part of the url is provided automagically
  // as part of the `req.params` object. Thanks express!
  console.log(req.params);
  // > { id: "cce8813f-0a28-40c7-8e1b-19e5316c9d5c" }
});
```

- the **response object** has some nice new methods that make returning
  responses simpler, like:

```ts
// 😎 `res.json()` handles JSON.stringify() AND headers
res.json({ beep: "boop" });

// 😎 you can **chain** together calls, like so:
res.status(201).json({ foo: "bar" });
```

- `express` also has a concept of **middleware** which you can think of like
  _attaching functionality to every request_, which cuts down on a lot of
  boilerplate and awkwardness. For instance, if you want to send wide-open CORS
  headers for every request, you can just do this:

```js
import express from "express";
import cors from "cors";

const app = express();

// 😎 automatically send CORS headers on ALL requests
app.use(cors());
```

- another _middleware_ is a **JSON body parser** which allows you to access _any
  incoming JSON_ in `req.body`, like so:

```js
import express from "express";
import bodyParser from "body-parser";

const app = express();

// 😎 attach JSON-parsing middleware to EVERY request
app.use(bodyParser.JSON());

// then you can do stuff like this:
app.post(`/cats`, (req, res) => {
  // 😍 `req.body` holds the object sent as JSON
  console.log(req.body);
  // > { beep: "boop" }
});
```

## npm dependencies and devDependencies

- in the npm world, **there are TWO kinds of dependencies, "DEV" and regular**.
- remember, a _dependency_ is some code, some third-party node module that your
  app uses, it _depends_ on that module.
- but if you think about it, _not every dependency is the same_. For instance,
  if I'm building an web app to create word search puzzles, I might have an
  extensive suite of unit tests to test the core logic of the app. That means I
  would probably need a library like `jest` for my unit tests. But that
  dependency is **only for development**, when I deploy my app to the world, I
  won't ship `jest` alongside of the other dependencies that are actually used
  in the production app, like (for instance) `react`.
- `npm` lets us distinguish between these two types of dependencies in two ways.
  First, in our `package.json` file, there are two sub-objects where we can
  specify dependencies: `dependencies` and `devDependencies`:

```json
{
  // our app can't function in "Production" without these:
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  // but these are just tools for development.
  "devDependencies": {
    "jest": "^26.0.1",
    "prettier": "2.0.1"
  }
}
```

- when you _install a dependency from the command line_, by default the
  dependency is saved to the _regular `dependencies` list_:

```bash
# saves `react` as a regular dependency
$ npm install react
```

- if you want to **install a DEV dependency** use the `--save-dev` or `-D` flag:

```bash
# saves `jest` under "devDependencies"
$ npm install jest --save-dev # or -D
```

- **extra fun fact:** did you know that `npm install` is **VARIADIC?**. That
  means you can do this:

```bash
$ npm install react react-dom classnames
$ npm install jest prettier -D
```

## Typescript: Third-party types with "Definitely Typed"

- when you're developing with Typescript, and you install a package with `npm`,
  you very frequently are installing a package that **was written in vanilla
  javascript**. That means that Typescript has _almost no idea about the
  underlying Type information_ for the package you install, and it will
  implicitly give any function or class you import the type of `any`. That's a
  bummer.
- because Typescript developers love type-safety, a community effort has evolved
  to add special `npm` packages **that add types for popular libraries**. The
  project is called **"Definitly Typed"** and it covers thousands of the most
  popular npm packages.
- it works like this -- if you're installing a package called `foobar` (that
  does not come with it's own types), then the _Definitely typed_ companion
  package would be `@types/foobar`. So you sould do something like this (note
  that `@types/*` packages would always be considered "dev" dependencies):

```bash
# install a plain-js package
$ npm install goat-banjo-rodeo

# then add typescript types for it 😎
$ npm install @types/goat-banjo-rodeo --save-dev
```

- Note: it's not _always necessary_ to use definitely typed for npm packages.
  More and more npm packages are being written (or re-written) _in Typescript_,
  and these packages **ship with their type information included**. Also, for
  some packages _not written in Typescript_ it's possible for the package
  authors to ship Type information along with the javascript, preventing the
  user from needing to use Definitely typed.

---

## Homework Plan

- 1 day add new flashcards & review all flashcards
- 2 days Flashcard App Express assignment
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

## Flashcard Add & Review Assignment

---

- Using your production web-app (make sure it's running, if it's not) **add the
  following new cards**:
  - a card for `git rm` in your `git` category
  - a card for the `?.` **optional chaining** operator in your _javascript_
    category
  - a card for the `-D` or `--save-dev` flag to the `npm` command, in your
    `node` category
- then, **review all your cards.**

---

## Flashcard App Express Assignment

---

- make sure you've addressed all of my feedback from last week, and then **merge
  your MR** (if it's not merged before)
- connect with vscode, switch to `master`, pull from `origin`, and delete your
  old branch, then _create a new branch_.
- if your name starts with `Harr` then re-read the last two steps and
  double-check that you did them.
- slowly and carefully review the "Express", "NPM Dependencies" and "Definitely
  Typed" sections of "New Stuff" above ^^^.
- then, spend about 15 minutes reading through the documentation on the
  [express.js website](https://expressjs.com/). **Focus on** the simpler, more
  straightforward parts of the documentation that you understand, don't worry
  about stuff that doesn't make sense -- there's a lot there that should make
  sense and feel useful after struggling with your home-spun http-core-module
  web server for the last month or two.
- once you're done reading the docs, your task is to **convert your API web
  server to an express app**. Read all of the hints/requirements below _before_
  you get started:
  - you'll need to install **three** regular dependencies: `express`, `cors`,
    and `body-parser`. And, I want you to install all three **with ONE shell
    command**.
  - for typescript goodness, you'll need to also install **three** "DEV"
    dependencies, one for each of the libraries listed above (also do this with
    one command). After you install these, double-check your `package.json` that
    they are listed under `devDependencies`. If you botched it, uninstall them
    with `npm uninstall` and then review the new stuff and try again.
  - to avoid some hinky typescript compile errors, **change your npm "build"
    script to:**
    `"tsc --esModuleInterop --skipLibCheck ./server/index.ts --outDir ./dist/server"`
  - refer to the express section of "New Stuff" for an example of how to setup a
    **CORS Middleware**, and then you'll only deal with cors things once, on the
    one line where you "use" the middleware
  - convert all of your current functionality into **3 separate routing
    functions:**
    - `GET /cards`
    - `POST /cards`
    - `DELETE /cards/<uuid>`
  - I would recommend renaming your `server/index.ts` file to `server/old.ts`
    and for you to make a _new_ `server/index.ts` file, with a clean slate. Then
    you'll be starting with a nice shiny clean slate of a file. Import the
    things you need, and start by just getting the express server up and running
    and returning some text like "Hello world".
  - Once you've got the server running with a test "hello world" response, work
    on _one route function at a time_, referring and copy-pasting from your old
    `server/index.ts` file. But **be careful not to just blindly copy-paste** --
    this is a good opportunity to clean things up and make sure you know what
    every line of code is doing. I would recommend starting with the
    `GET /cards` route. Get that working.
  - make lots of commits, working a little at a time, taking baby steps, and
    console logging.
  - starting and stopping the dev server and the pm2 daemon will be exactly the
    same, so that won't need to change (other than the modification to the build
    script I gave you above), you're just refactoring the server code itself to
    use express.
  - the web client should not need to change it all, it doesn't care if you're
    running express or the core http module, all of it's requests and response
    should work exactly the same.
  - double-check that your app is working totally correctly.
  - **Extra Credit:✨** Study the first half or so of the "Routing"
    documentation page on the Express website, and fIgure out a way to make a
    route handler that will be invoked _for every other request that doesn't
    match one of the 3 you explicitly handled_. When any other request comes in
    other than the 3 you explicitly support, then just send back a 400/Bad
    Request.
- Commit your work, squash any WIP commits, and submit a MR. Also build your
  site and slack both the URLs.

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

## Akron Snowmen Assignment

---

- Connect to your AS repo, switch to `master`, pull from `upstream`, and create
  a new branch.
- Find your name below and work on the tweaks/fixes required. Once you're done,
  build your site, submit a MR, and slack both URLs.
- **Kiah**:
  - your job is to dial in the `ImageAndTextBlock` component, it has a few
    issues, like:
  - At certain screen sizes the spacing of the button at the bottom vs the
    spacing of the text at the top, is all uneven. See
    [this screenshot](http://screenshots.pro.photo/jared/2021-03-26_13-46-12.png)
  - also shown on
    [the same screenshot](http://screenshots.pro.photo/jared/2021-03-26_13-46-12.png)
    at certain screen sizes the images don't seem to be tall enough. Fix that
    too.
  - at various screen sizes, the images we're passing in of people are getting
    cropped in non-optimal ways. See
    [this screenshot](http://screenshots.pro.photo/jared/2021-03-26_13-50-29.png)
    and
    [this other screenshot](http://screenshots.pro.photo/jared/2021-03-26_13-52-11.png).
    The solution (I think), is to make the component accept an `id` prop, which
    becomes the HTML `id` attribute of the element. This would then allow us to
    target each specific image, and change the `object-position` property with
    some media queries, to make sure the faces were always visible.
- **Willow**:
  - your job has 3 parts:
  - part 1: fix the spacing around the Pink Block -- at certain screen sizes it
    is uneven, as
    [shown here](http://screenshots.pro.photo/jared/2021-03-26_13-47-05.png).
    Figure out why that is, and fix the padding or margin to be equal, and
    simple, and double-check that the spacing looks great on all screen sizes,
    from very small to very large. (A trick to test very small screen sizes if
    you don't have a very large screen is to use the browsers zoom feature to
    shrink the size way down, thus simulating a much larger screen).
  - part 2: The first 4 blurbs of text in the pink grid are a bit meager and
    short. Spend a few minutes rewriting and expanding them so they are about as
    long as the "Available 24/7" blurb. Make sure you write high-quality, real
    text that we can actually launch with. If you need to, you can ask Kristi or
    Josue for input.
  - part 3: The hero block on the home screen has problems at smaller screen
    sizes, as
    [shown here](http://screenshots.pro.photo/jared/2021-04-12_12-11-15.png) Fix
    the spacing.
- **Tabitha**:
  - Your job is to dial in the "Get in touch" block, fixing two issues:
  - Issue 1: At small screen sizes, the spacing at the top of the block is
    pretty small, as
    [shown here](http://screenshots.pro.photo/jared/2021-03-26_13-48-23.png),
    and doesn't match the spacing of the other blocks. Fix this.
  - Issue 2: At various screen sizes, the "Send Message" button has alignment,
    margin, and width problems. See
    [this screenshot](http://screenshots.pro.photo/jared/2021-03-26_13-47-46.png),
    and also, the bottom of the screenshot from Issue 2 to see what I mean. Fix
    it so the button is never too wide for the screen, and so that the whole
    block looks perfectly correct at every screen size.
- **Win** and **Harriet**:
  - For your task, you're each going to prepare a _rough draft_ of an interior
    article page. To do so, I want you to:
  - First, email Kristi, Rod, or Josue and ask them 3 questions:
    - if they have any topics for mini "articles" on the Akron Snowmen site that
      they would like included in the final website -- meaning, are there things
      they would like to communicate, topics they would want a viewer to be able
      to read, etc.
    - ask them what "google search terms" they would like to target. That means,
      if they could pick a list of terms that their website would show up for,
      when someone is googling, what would those terms be? And a corallary: what
      searches do they _NOT_ want to show up for?
    - what cities/towns do they most desire to get new work in?
  - Using the info they provide you, pick a topic to write a short article about
    for the website. Before you write it, Slack me the basic idea, so I can
    approve.
  - Write a rough draft of your article. It should be at least 400 words, and it
    should try to include some of the _search terms_ and _cities/towns_ that
    were indicated as desired in the response you get from Rod/Kristi/Josue.
  - Submit your rough draft in slack, in the #akron-snownmen channel for us all
    to read. :)
