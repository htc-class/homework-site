---
path: "/year-3/week-12"
---

# Year #3, Week #12 💻 🏸

_New stuff we learned this week:_ 🤔

## Tidbits about `pm2`

- start up a daemon with the `start` subcommand: `pm2 start <some-executable>`
- pm2 doesn't like accepting a command like `npm run foo`, so you can work
  around this by making a simple shell script (ending with `.sh`) that is
  executable thanks to a **hashbang**.
- **naming** a pm2 process is helpful, by adding `--name 'foobar'`. This allows
  you to refer to it by name, and delete it by name, like `pm2 delete foobar`.
- `pm2 list` lists your pm2 processes
- `pm2 show <name>` give you more info
- `pm2 logs <name>` lets you see logging produced
- beware of _uptime_ for detecting crashes.

## Jest hates import.meta.env

- to work around the fact that Jest can't handle `import.meta.env`, make a file
  responsible for handling env, and have it export functions that we can _mock_
  for jest:

```ts
// env.ts
export function getApiUrl(): string {
  if (import.meta.env.MODE === `production`) {
    return `http://live-api.com`;
  } else {
    return `http://localhost:7070`;
  }
}
```

Then, in any jest file that calls into a module that loads that file, you'll
need to provide a mock:

```ts
// __tests__/some.spec.ts
jest.mock(`../../env`, () => ({ getApiUrl: () => `/` }));
```

---

## Homework Plan

- 1 day Monkey Assignment #19 🐒
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day watch CS50
  [CS50 Lecture #3 segment](https://htc-viewer.netlify.app/?id=fykrlqbV9wM),
  from `37:21` to `1:01:56`
- 1 day Flashcards API pm2 assignment
- 1 day Flashcards WebApp Redux-Heavy assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-19">Monkey Assignment #19 🐒</Checkable>

<Checkable id="flashcards-pm2">Flashcards API pm2 Assignment</Checkable>

<Checkable id="flashcards-redux-heavy">
  Flashcards WebApp Redux-Heavy Assignment
</Checkable>

<Checkable id="cs50-vid">Watch CS50 Lecture #3 Segment</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## Monkey #19

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Slowly and carefully read the first 3 sections of chapter 3:
  `3.1 - Giving Meaning to Symbols`, `3.2 - Strategies of Evaluation`, and
  `3.3 - A Tree-Walking Interpreter`. Try to re-read and slowly think,
  scratching your beard until you understand as much as possible of what he's
  saying.
- Next, start at section **3.4 -- Representing Objects**. Work through that
  section.
- Then, go on, and start section **3.5 -- Evaluating Expressions**. Work up
  _through_ the sub-section labeled **Completing the REPL**, stopping at the end
  of that section, where it says **Boolean Literals**. This would be page 114 of
  the PDF, or page 145 of the printed book.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/29--3.4-eval-integer-literals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards API pm2 Assignment

---

- Make sure you've addressed any feedback from your last API MR, and merge.
- get back on master, pull from origin master and **create a new branch**.
- use the knowledge you gained in class, and the hints from "New Stuff" above to
  make an npm "serve" script setup that daemonizes your API application with
  `pm2`. Hints/requirements:
  - make sure you give your pm2 process a `name`
  - you'll need to make a bash script for `pm2` to execute, I recommend calling
    it `./serve.sh`. It should invoke `ts-node` correctly, setting the
    `NODE_ENV` env var to `production`. It will need a **hashbang**.
  - your `"serve"` script should also terminate the process if it exists. You
    can use the command `pm2 delete <name>` to do this. It's OK if deleting the
    process errors if it doesn't exist. If you don't want to see the error
    output, you can redirect stdout and stderr to dev/null with `&> /dev/null`.
- once you have it working, test it out. You should be able to access a url like
  `http://api-tabitha.howtocomputer.link/cards` and see the json output. If it's
  not working, use `pm2 list` and `pm2 logs` to investigate. You'll need to make
  sure that your server is listening on the right port, your production api port
  (see `~/.user_env`).
- experiment a little with starting, stopping, and viewing logs for you process
  by using some of the `pm2` sub-commands listed in the "new stuff", and that we
  went over in class.
- when you've got everything working, commit your work, and push up a MR. Slack
  the MR url, and also, slack the production url of your `/cards` route so I can
  test it in my browser.

---

## Flashcards WebApp Redux-Heavy Assignment

---

- Make sure you've completed the **API pm2 assignment** first, before doing this
  assignment.
- Make sure you've addressed any feedback and merged your MR from the last
  flashcards webapp assignment.
- get back on master, pull from origin master and **create a new branch**.
- take a few minutes and carefully read the
  [typescript quickstart](https://redux-toolkit.js.org/tutorials/typescript)
  tutorial from the redux-toolkit docs site.
- next, you'll be following along with a video I made of me converting my
  flashcards webapp from `@htc-class/reduxlite` to `react-redux`. But your app
  will look somewhat different, you won't be able to 100% copy what I'm doing.
  You'll need to understand what I'm doing, and apply it to your files and file
  structure. So work slowly, pausing the video each time I do something
  significant and implementing it on your app.
  [Video link is here](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/05--converting-to-real-redux.mp4).
- once you've got your app working again with real redux, **commit your work**.
- next watch and copy
  [this short video](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/06--logging.mp4)
  where I show how to add logging to your redux app (which reduxlite did for
  you).
- commit your work again.
- next, make sure you included the `Thunk` type shown in my video, which is
  this:

```ts
type Thunk = (dispatch: Dispatch, getState: () => State): unknown
```

- use your knowledge of Thunks to make it so your flashcards app **fetches its
  cards from your API**. To do this you will need to:
  - create and export a thunk-creator function from your `rootSlice.ts` file. It
    should be a function that takes no arguments, and _returns a thunk_, that
    is, a function that returns a function. I would recommend calling it
    `loadCards`.
  - in the thunk returned by your thunk-creator, you'll fetch the cards from
    your API, using `fetch()`. You can refer to your old flashcards app to jog
    your mind how to do that. Start by hardcoding the url to your dev flashcards
    api. (Note: you'll need to have it running for this to work).
  - the thunk function you return should be `async` so you can `await` on the
    fetch and json-decoding.
  - once you have an array of cards from your API, you'll need to dispatch an
    action that sends the cards back into your system. This means you'll need
    another action-creator defined within your call to `createSlice`. It will be
    a little more powerful though, it will **take a payload**. Look at the
    `counterSlice.ts` example code
    [here](https://redux-toolkit.js.org/tutorials/typescript), specifically the
    `incrementByAmount` action creator, for an example of how to do an action
    that **takes a payload**.
  - now, delete the hard-coded cards you currently have in your state, if you
    haven't done that yet.
  - then, use your new `loadCards()` thunk creator in the component where you
    need to fetch your cards, which should be in some _container component_ in
    your app. **Hint:** you'll need to use `useEffect()` and pass the right
    depedency argument so that it runs _only once_. **Hint #2:** `loadCards()`
    is a thunk-creator, that is to say, an action-creator, so it needs to be
    invoked and the result passed to `dispatch` for it to do anything.
  - I would recommending adding a guard to your container component for when you
    have 0 cards (that is, before the load request finishes), and bail early
    with a loading message instead of rendering the presentational component.
    But the early return should be _after_ the `useEffect()` call.
  - If you have trouble, check the console for errors, be sure to log out what
    your API returns, and verify that it matches what you want on the client
    (object keys and types, etc.).
- once you've got that basically working, I want you to remove the hard-coded
  API url. Instead, create a file called `src/env.ts` and have it export a
  function called `getApiUrl()` which tests the current environment using
  `import.meta.env`. See the "New Stuff" above for an example. It should return
  your dev URL unless the `MODE` is `production` in which case it should return
  your production url, which is something like
  `http://api-kiah.howtocomputer.link`.
- once you've got all that working, commit your work again.
- next, get your tests passing again. you'll have to fix a handful of things:
  - import your reducer from the new spot
  - the real redux reducers **return a new state**, so you'll have to capture
    that into a variable and assert on the new state, instead of asserting that
    the state was mutated as formerly, like
    `const nextState = reducer(state, action);`
  - you'll have to _mock_ the `env.ts` file, as described in the "New Stuff"
    above to get Jest to not have a cow about `import.meta.env`
- when your tests are all green commit your work again.
- finally, deploy your site to netlify, using what you learned last week, with
  the below hints: requirements:
  - You'll need to use an environment variable to make sure that you end up with
    the right API url getting used.
  - you must create a `netlify.toml` file to specify where the dir is for
    publishing.
  - Create two new npm scripts: `deploy:staging` and `deploy:production` that
    takes care of first running a "build" command of some sort to produce newly
    built files, and then invoking `netlify` with the right arguments (for a
    draft url vs production).
  - since you already got your API daemonized with pm2, your production deploy
    should talk to your pm2 API url, and it should work -- meaning, you should
    be able to view your site on netlify and have it be pulling real card data
    from your production api.
- make another commit covering your deployment scripts and netlify.toml files.
- push up a MR, review your diffs, clean up anything you see, then slack me the
  MR url, and your new shiny netlify production url which is talking to your
  production API.
