---
path: "/year-2/week-14"
---

# Year #2, Week #14 💻 🦽

_New stuff we learned this week:_ 🤔

## Local Storage

- in the browser `window.localStorage` is another mechanism for **storing
  information locally in the browser** similar to cookies.
- Local Storage is different from Cookies in a few key ways:
  - unlike cookies, information in Local Storage is _not sent to the server_ in
    a `Cookie:` header.
  - there is no directive from the server like the `Set-Cookie: <x>` header,
    localStorage is **always and only accessed by javascript**.
  - because of the two above points, local storage is never used for
    _authentication_ or _login_ tasks.
  - unlike cookies, local storage has a **usable API!** 🎉
  - while cookies can only hold `4 kilobytes`, local storage can store _much
    more_, up to usually `5 megabytes`
  - there is no need for **expiration** with local storage, data is never
    deleted unless the user requests the browser to do so (which almost never
    happens)
- Saving and accessing data with local storage is a joy compared to using
  `document.cookie`:

```js
// set something into the storage
localStorage.setItem("herp", "derp");

// retrieve from storage
localStorage.getItem("herp");
// > "derp"
```

- however, local storage **ONLY saves STRINGS**, so if you pass it something
  that is not a string, javascript will _convert it to a string first_:

```js
// 🚨 this won't work as expected!
localStorage.setItem("myObj", { herp: "derp" });

localStorage.getItem("myObj");
// "[object Object]" <-- probably not what you wanted
```

- to remove an item from local storage, you just do:

```js
// easy cheesy
localStorage.removeItem("herp");
```

- or you can remove **all items at once**:

```js
// blows away ALL items
localStorage.clear();
```

- `localStorage` has a lookalike cousing called `sessionStorage`. It works
  _exactly_ the same, but all the data is automatically deleted when the
  **session** ends (i.e. when the page or browser is closed).

## Recursion (see also: Recursion)

- **Recursion** in computer science is a method of solving a problem where the
  solution depends on solving smaller instances of the same problem.
- at a more granular level, recursion usually means a **function calling
  ITSELF**.
- many problems that can be solved with recursion _can also be solved with
  **iteration**_, but some problems (especially stuff with nested, tree-like
  graph structures) can only be solved (with any degree of simplicity) through
  recursion.
- here's a simple program that prints a "Mario Ladder" using recursion:

```ts
function drawMarioLadder(height: number): void {
  if (height === 0) {
    // here's the "BASE CASE"
    return;
  }

  // recursively call itself 🤔
  drawMarioLadder(height - 1);

  for (i = 0; i < height; i++) {
    process.stdout.write("#");
  }
  process.stdout.write("\n");
}

drawMarioLadder(4);

// #
// ##
// ###
// ####
```

- in order to prevent _infinite loops_ recursive algorithms must always have a
  **base case** -- a point at which the recursion must stop.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [Font Awesome](https://fontawesome.com/)
- Cookie videos: [#1](http://jared.howtocomputer.link/cookies_1.mp4)&nbsp;&nbsp;
  [#2](http://jared.howtocomputer.link/cookies_2.mp4)

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Local Storage assignment
- 1 day Recursion assignment
- 1 day Akron Snowmen assignment
- 1 day watch Cookies videos (26 min. total)
  [#1](http://jared.howtocomputer.link/cookies_1.mp4)&nbsp;&nbsp;
  [#2](http://jared.howtocomputer.link/cookies_2.mp4)
- 1 days touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="local-storage">Local Storage Assignment</Checkable>

<Checkable id="recursion">Recursion Assignment</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="cookie-vids"> Watch Cookie Videos (links ^^^)</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## LocalStorage Assignment

---

- Carefully review the "Local Storage" section of "New Stuff" above ^^^.
- If you haven't watched the "Cookies" videos yet, **do that FIRST.**
- Merge your Merge Request from your "Tic Tac Toe" or "Connect 4" homework from
  last week. I closed/reopened all of your MR's because they were targeting
  upstream, and I forgot to tell you to target origin. Check slack for your new
  MR url.
- connect in vscode, switch to master, pull from **ORIGIN** (_NOT upstream_) to
  get your changes you just merged in.
- delete your branch from last week
- create a new branch
- re-work last week's features having to do with cookies, and replace the
  storage mechanism with _Local Storage_
- commit your work, build, and submit a MR.

---

### Akron Snowmen Assignment

---

- connect to your Akron Snowmen repo with vscode.
- switch to master, pull from **upstream**, and delete your branch from last
  week.
- create a new branch called `integration`
- in the `pages/index.tsx` file, pull in all of the components students have
  been working on the last few weeks, and assemble the home page, using
  [the example site](https://snowmen-example.netlify.app/) as a guide, and
  remembering the things we talked about in class on Monday.
- hints/requirements:
  - start with the mobile view, ignoring the nav menu totally. Drop in all of
    the blocks and get them looking basically correct.
  - then, wrap a div around all the main blocks, and get to work making the nav
    work. remember: `position: fixed`, using a margin, etc., the stuff we talked
    about in class.
  - if you need to, you can modify and style some of the other components
  - not every block and fine detail needs to perfectly match the example site
    (yet). If the components as the other students left them are not exactly the
    same, that’s OK. In this assignment I'm mostly looking for how you assemble
    the pieces together and get the nav fixed layout working.
- when you're done, commit your work, build, and submit a MR.

---

## Recursion Assignment

---

- Carefully review the Recursion section of "New Stuff" above ^^^.
- if you didn't understand anything in new stuff (base case), go back to step 1
  (recursion).
- connect to the HTC machine with vscode, clone
  [this repo](https://gitlab.howtocomputer.link/htc/recursion), open the folder
  and install the dependencies.
- review the two helper functions I made for you at the bottom of
  `src/recursion.ts` -- the functions are `isEmpty()` and `rest()`. Make sure
  you understand what they do. I gave them to you because **you are NOT ALLOWED
  to use `Array.length` or any array functions like `Array.filter()`, etc.**.
  Because you're not allowed to use these, I've given you these two helper
  functions to _a)_ check if an array is empty, and _b)_ get everything except
  the first item of the array.
- **hint:** if you accidentally create an _infinite loop_ your jest tests will
  just appear to hang, and you can't stop them. If this happens, click the
  "trash" icon in vscode to kill the terminal instance, and then just add a new
  one. Then, be more careful about your _base cases._
- work through the `src/recursion.spec.ts` file, turning each `xit()` into a
  `it()` call, and getting the tests to pass. Every single function **MUST BE
  implemented using recursion and a base case**. No cheating! No for-loops
  allowed, and no using `Array.length` or any array method functions.
- when you've got all the tests passing, and Typescript is happy, commit your
  work and submit a MR, then slack the MR url.
