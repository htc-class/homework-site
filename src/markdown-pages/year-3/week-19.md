---
path: "/year-3/week-19"
---

# Year #3, Week #19 💻 🪁

## Homework Plan

- 1 day Monkey Assignment #27 🐒
- 1 day Monkey Assignment #28 🐒
- 2 day review all flashcards in your (new Netlify) app.
- 1 or 2 days CS50 "Filter" Assignment
- 2 day touch typing practice
- 1 day Flashcard **WebApp** assignment
- 1 day Flashcard **API** assignment
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

## CS50 Filter Assignment

---

- clone down [this repo](https://gitlab.howtocomputer.link/htc/cs50-filter).
  Note, you **must** work **LOCALLY** for this assignment, as you won't be able
  to see the images when you're on the Pi (or at least, I don't think you can as
  easily.)
- Next, _slowly and carefully_ read through the whole set of
  [directions here](https://cs50.harvard.edu/college/2019/fall/psets/4/filter/less/)
- Then, in the project you cloned down, read through `filter.c` for a few
  minutes, try to understand as much as possible of what they're doing in that
  file. If you don't understand it all, that's fine, but try to figure out as
  much as possible, at least at a high level. Remember you can `man` c
  functions, so if you see a function, you can get documentation on it by typing
  `man <functionname>`, like `man fread`
- Look at lines 90-115 of `filter.c` -- this is where they basically switch on
  the command line flag that selects which _type_ of filter (blur, grayscale,
  reflect, etc...) and then call one of the functions in `helpers.c`. The
  functions in `helpers.c` (as described in the cs50 website) are the only
  things you need to change.
- In each filter function, you get handed a width, height, and a
  multidimensional array of pixels. Each pixel is represented by a `RGBTRIPLE`
  struct, containing a color, which is a mixture of red, green, and blue, each
  with a value of `0-255` (or `0x00 - 0xff` in hex)
- Because arrays _decay into pointers_ when passed to functions, you can think
  of it like the array of pixels you're getting is _passed by **reference**_,
  which means that if you alter the pixel color data, the data will be altered
  for the calling function (which is `main`). So basically, you get a chance to
  twiddle the RBG values of each pixel, and then the `main` function will write
  out the altered bitmap to disk for you.
- You can test your work like so: let's say you start with the `grayscale`
  filter. First, make the code by typing `make`. Then run
  `./filter -g images/yard.bmp out.bmp`. Then, open a finder window and check
  the `out.bmp` file. Because your filter is empty right now, it should just be
  an _exact copy_ of the `images/yard.bmp` file. But, as you start doing actual
  pixel manipulation in your functions, you'll see the output file begin to
  change.
- Complete the `grayscale`, `blur`, `reflect`, and `sepia` filters.
- **Extra Credit: ✨** Complete the `edges` filter.
- Commit your work, push up a MR, **review your diffs and cleanup!** and Slack
  me the MR URL.

---

## Monkey #27 - Cleaning Rampage Edition 🐒 🧼

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- For this one, just watch my video and do the same basic steps in your code.
  This is not stuff he shows in the book, it's just that I decided it was time
  to clean up and quasi "namespace" all our imports, as you'll see.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/37--3.10-cleaning-rampage.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Monkey #28 🐒

---

- Do this homework **BEFORE** the API side.
- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where we left of last time, after the cleaning rampage edition, which is
  roughly at the middle of page 143 (online version), or page 181 (print
  edition), where it ways `Easy right? The test passes.`
- work through _the rest_ of **3.10 Functions and Function Calls**
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/36--3.10-function-obj.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards Webapp

---

- Make sure you've addressed all feedback from last week's MRs (both API and
  Webapp), and have merged.
- Open up your Webapp repo, and **make a new branch**.
- Read all of the instructions below before starting step by step.
- This week's feature is to _require login/authentication, and have it work with
  the API_. Here's some bullet points of what I mean by that:
- Add a new piece of top level **state** to your app, with the key of `token`
  which has the type of `string | null`
- We want this piece of state available **immediately**, so find the place where
  you create your "initial state", set `token` to the result of calling the
  `getUserToken` function you made in last weeks assignment.
- At or near the _top_ of your component heirarchy, we need to _check if there
  is a token present_ (by looking into the redux state). If the token is **not**
  there, then you should _redirect_ to the `/login` router. You might need to
  research on the React Router docs website to figure out how to properly
  redirect a request.
- You'll need to wire up your `<Login />` component so that it actually does
  stuff now. For instance, you'll need to track (in state) the email address
  that's being entered, and the password. I will let you decide if you want to
  keep the email address and password in the _redux_ state, or in local state to
  this component. I think either is acceptable. If you use local state, that
  means using `useState()` from react, instead of dispatching actions and
  changing your main `State` type to accomodate the fields. But putting them
  inside redux is great too, your choice.
- When the submit button is clicked, you should _disable_ the submit button
  while the request to the API is in flight.
- When the "submit" button is clicked, you'll need to dispatch an action which
  is a _thunk_. So that you can do async `fetch` things. In that thunk, you'll
  be sending the login request to the API and waiting to see if you get a token
  back.
- If the thunk stuff sounds complicated, remember that you already have one
  thunk action in your system, the one that loads the cards. Model this thunk
  after that one, if it helps.
- Its been a while since you've POST-ed a json-body with `fetch`, if we ever
  even did it. Here's a bit of example code of how to send JSON and headers with
  fetch -- this isn't meant to be copy-pastable by you, but it should show you
  all the moving parts so you can adapt it to work for your app:

```js
const response = await fetch(`https://api.cats.com/cats`, {
  method: `POST`, // <-- here's where you set it to be POST
  headers: {
    // vvv-- this header is required when sending JSON body
    "Content-Type": `application/json`,
    Beep: `boop`, // <-- other headers go here
  },
  // the `body` prop is a STRING created by calling
  // JSON.stringify on some data you want to send as JSON:
  body: JSON.stringify({ beep: `boop`, herp: true }),
});
```

- If the login request comes back successfully, you'll want to dispatch an
  action that you "received a token". The reducer should take the token recieved
  and set it in state.
- Also, after you receive a token and dispatch an action that you got it, you
  should _redirect to_ `/`, so the cards will be visible.
- here's some psuedo-code to help you with the login thunk. Everywhere you see a
  **`???`** would be places you need to fill in logic and code.

```ts
export function login(): Thunk {
  return async (dispatch, getState) => {
    // 1) get `email` and `password` from `getState()`
    // unless you used local state, in which case they
    // should be passed as ARGUMENTS to `login()`
    let state = getState();
    let email = `???`;
    let password = `???`;

    // 2) make the login request to the API
    try {
      // for hints on the innerds of `fetch`
      // see previous code snippet
      let response = await fetch(`???`);
      let json = await response.json();

      // 3) get the token from `json`
      let token = `???`;

      // 4) dispatch that you got a token
      // you'll need to MAKE the `receivedToken`
      // action creator, and handle it as well
      dispatch(receivedToken(token));

      // 5) redirect to `/`
      // ???
    } catch (error: unknown) {
      // 6) handle a failed login with an alert
      window.alert(`???`);
    }
  };
}
```

- when you have a token, you'll need to **send it to the API** so that it can
  send back the right cards. To do that, we're going to use an authentication
  pattern called a _**bearer token**_. With bearer tokens, you send a **header**
  called `Authorization` with a value of `Bearer <some-token-value>`. When using
  `window.fetch` that means passing a header object like this:

```js
fetch(`/some-url`, {
  headers: {
    Authorization: `Bearer d0baf5fb7986e3a76c71`,
  },
});
```

- The API will use that header to determine if you're allowed to retrieve cards,
  and **which** cards to pull from the db, in the next assignment.
- I might have missed something here you'll need to do to make this work, I'm
  not trying to be exhaustive or even chronological in my steps, just dumping
  out things I can think of, and stuff that will be helpful. You'll need to
  think through the whole feature and fill in the gaps.
- When you're done, commit your work, push a MR.
- Carefully review your diffs, and clean up anything sloppy or wrong, or
  debugging code (as always!).
- Push up a draft Netlify deployment
- Slack your MR url and your Netlify draft URL.

---

## Flashcards API Assignment

---

- handle Bearer Token
