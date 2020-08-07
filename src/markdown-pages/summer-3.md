---
path: "/summer-3"
---

# Summer Homework #3 💻 🥥

_New stuff we learned this week:_ 🤔

## ES Module Syntax

- The long-term replacement for **CommonJS** (`require()`/`module.exports`) is something called **ES Modules**. (The "ES" stands for "Ecmascript", which is technically the name of Javascript).
- ES Modules are **already supported** in _TypeScript_, most _modern browsers_, but _sorta only halfway in Nodejs_ (full node support will eventually be here).
- to create a **NAMED Export**, you just put the keyword `export` in front of whatever identifier you want to export, like this:

```js
// in file: beaver.js
export function sayBeaver() {
  console.log("Beaver");
}

export const BEAVER_NAME = "Walter";
```

- to **consume a NAMED import** you almost always _destructure while using the `import` keyword_, like so:

```js
// in file: main.js
import { sayBeaver, BEAVER_NAME } from "./beaver";
```

- if you don't like the _name provided by the NAMED export_, you can **alias** it when importing:

```js
import { sayBeaver as logBeaver } from "./beaver";
```

- if you want to import **all the NAMED exports** from a file as a single _object_, you can use this syntax:

```js
import * as beaverUtils from "./beaver";

beaverUtils.sayBeaver();
console.log(beaverUtils.BEAVER_NAME);
```

- if a module has **one primary, main export** it's customary to make it the **default export** using the `default` keywordt:

```js
// file: beaver-class.js
export default class Beaver {
  speak() {
    console.log("I am a beaver");
  }
}
```

- to _consume a default export_, you just import it without destructuring or using the `*` symbol:

```js
// file: main.js
import Beaver from "./beaver-class";
```

- a file with a default export _can also have NAMED exports_:

```js
// file: harriet.js
export default function() {
  return "Harriet Henderson";
}

export const nickname = "Ritty";
```

- if you want to import **both a default export and a NAMED export**, you do it like this:

```js
import harriet, { nickname } from "./harriet";
```

- when using Typescript, you can **import/export Types** as well:

```ts
// file person.ts
export type Person = {
  name: string;
  hasBeard: boolean;
};

export function makeJared(): Person {
  return { name: "jared", hasBeard: true };
}
```

```ts
// main.ts
import { makeJared, Person } from "./person";
```

## Promises 🍔

- **Promises** are a programming language concept or abstraction that allows easier handling of **asynchronous tasks**.
- to **make your own promise** you create a new _instance_ of the `Promise` class, and pass it an **executor** function:

```js
const promise = new Promise(myExecutorFunction);
```

- inside the Promise's constructor, your executor function is invoked, and is passed **two arguments -- a `resolve` function, and a `reject` function**:

```js
const promise = new Promise((resolve, reject) => {
  // do something async here, then, based on the outcome
  // call either `resolve` (success), or `reject` (failure)
});
```

- once you've got a promise, you can start **then-ing**:

```js
promise.then(val => {
  // do something with the value resolved from promise
  // `val` is what the `resolve()` function was called with
});
```

- there are **two ways** to handle error conditions with promises. The **first** (and less common) way is to pass a **second function** to the `.then()` method, like so:

```js
promise.then((val) => {
  console.log('it worked, got val:`, val);
}, (err) => {
  console.error('something went wrong!');
});
```

- but a much more common (and ergonomic) way of handling errors is to **chain a `.catch()`**:

```js
promise
  .then(val => {
    console.log('it worked, got val:`, val);
  }).catch(err => {
    console.error('something went wrong!');
  });
```

- anything returned from a function passed to `.then()` will be converted into a promise (unless it already is a promise), which means you can **chain then's together**:

```js
promise
  .then(val => {
    return val.toUpperCase();
  })
  .then(val => {
    return `${val} #goatbanjorodeo`;
  })
  .then(val => {
    return [val, val];
  });
```

- a `.catch()` will **catch any errors** from any promise **before it in the chain**.

```js
promise
  .then(val => {
    if (Math.random() > 0.5) {
      throw new Error("Horrible problem!");
    }
    return val.toUpperCase();
  })
  .then(val => {
    return `${val} #goatbanjorodeo`;
  })
  .then(val => {
    return [val, val];
  })
  .catch(err => {
    // this will catch any error from anywhere in the chain
  });
```

- the `window.fetch()` api is a **browser API** for making _HTTP requests from javascript_. It returns a `Promise<Response>`, and many of the methods of the `Response` object it returns, also return promises (like the useful `.json()` method):

```js
fetch("https://api.coolservice.com")
  .then(response => {
    // response.json() returns a promise,
    // so we KEEP CHAINING ⛓
    return response.json();
  })
  .then(json => {
    console.log(json);
  });
```

- the npm package `node-fetch` allows you to make http requests from node using the exact same api as the browser's `window.fetch()`:

```js
import fetch from 'node-fetch';

fetch("https://api.coolservice.com)
 .then(res => res.json())
 .then(json => console.log(json));
```

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #36](https://htc-viewer.netlify.app/?id=fOvTtapxa9c)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan (next class in 3 weeks)

- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 day setting up SSH access to new HTC VM
- 1 day Import/Export/RegExp homework
- 1 day Node Promise Homework
- 1 day Web Fetch/Promise Homework

---

### Homework (week 1)

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="ts-1">SSH Homework</Checkable>

### Homework (week 2)

<Checkable id="review-flash-2">review all flashcards</Checkable>
<Checkable id="typing-2">touch typing practice</Checkable>
<Checkable id="es-modules">import/export/regex es-modules Homework</Checkable>
<Checkable id="node-promise">Node Promise Homework</Checkable>

### Homework (week 3)

<Checkable id="review-flash-3">review all flashcards</Checkable>
<Checkable id="typing-3">touch typing practice</Checkable>
<Checkable id="web-promise">Web Fetch/Promise Homework</Checkable>

---

## SSH Assignment

---

- modify your computers `~/.ssh/config` file so that it connects to the new HTC VM through **port 555**.
- make a nice alias by changing the `Host` to something short like `htc`, which requires that you also set the `HostName` to `howtocomputer.link`
- test your SSH connection to the new VM, you should see the cool HTC ascii-art that I showed you in class
- once you are able to SSH in, Slack me that you got in successfully, once I hear back from all of you, I'll nuke the old VM 🔫

---

## Import/Export/RegExp Homework

---

- slowly and carefully review the **"ES Module Syntax"** section of "New Stuff" ^
- go to [this url](https://gitlab.howtocomputer.link/htc/mountmellick) and create a FORK of the repo
- connect to the HTC machine with vscode and clone the repo into a folder called `~/node/summer-3/`
- create a **new branch** to work on
- take a look at the `package.json` file... This repo has some _dependencies_, so you'll need to install those. Type a command to install the dependencies.
- open up the `src/mm.spec.ts` file and the `src/mm.ts` files
- make an empty function called `mm` in the `src/mm.ts` file, and export it as a **named export**.
- to start running the tests, check the `package.json` file again, and see that I created **two scripts** for you. Run the `test` script by typing `npm run test` into the integrated terminal.
- figure out what the other script does, and try it as well
- slowly work through the tests (except the last--till you read the next step) in `mm.spec.ts`, changing each `xit()` into a `it()` function, and get them to pass one by one. (Hint: after the first one or two tests, you should realize this requires a **regular expression** to solve. [See here for a brush-up on regular expressions in javascript](https://homework.howtocomputer.link/week-20)).
- to make the last test pass, you'll need to change your `mm.ts` file so that the _regular expression you created_ to make all of the tests pass is **captured in it's own variable and ALSO EXPORTED**. The `mm()` function should use this variable, but the `mm.ts` file should also **export the variable**.
- make sure that you have added _type annotations_ to the argument and return of the `mm()` function.
- commit your work.
- now, change the `mm.ts` file so that the `mm()` function is a **default export**. You'll have to modify your `mm.spec.ts` file as well, to import _both a default and a named import_.
- make another commit.
- push up a Merge Request to Gitlab, and post it in Slack.

---

## Node Promises Homework 🍔

---

- make sure you've watched _both_ videos I recorded about Promises: [video 1](http://jared.howtocomputer.link/promises_1.mp4), and [video 2](http://jared.howtocomputer.link/promises_2.mp4)
- very carefuly and slowly review the **Promises** portion of "New Stuff" above ^^.
- go to [https://gitlab.howtocomputer.link/htc/promises](https://gitlab.howtocomputer.link/htc/promises), **fork it**, then clone it into `~/node/summer-3` through `ssh`, then connect to the dir through vscode.
- create a new branch
- Note: this whole homework is essentially the same as the `nodeback` homework from earlier this summer, but this time with **Promises 🍔**.
- Note: for this whole homework, you need to use the **promise-ified** versions of the `fs.*` module functions. No directly using `fs.readFile` or `fs.readFileSync`, etc.
- write some code in `file.ts` such that you can pass it the _lowercase last name_ of one of the four quakers who have files in the `./quakers` file. When you do, it should `console.log` the contents of the file.
- test your script by using `tsnode` (since this is a typescript file), it _should work like this_:

```bash
$ tsnode file.ts ellwood
> To begin, therefore, with mine own beginning.
> I was born in the year of our Lord 1639,
> ETC...
```

- be sure your script works by just passing `ellwood` and `webb` etc, NOT `quakers/ellwood.adoc`.
- use template literals for any string concatenation (no more `+` for strings, forever!)
- if you have any typescript errors `vscode` should tell you, and then `tsnode` will bark at you, so fix all of those. 👍
- commit your work.
- next, **handle the error case,** where you pass the name of a file that _does not exist_. Start by just console.logging an error message and returning early.
- commit your work.
- next, instead of logging the error case, make it so that your script _writes the error message (including the non-existent filename) to a file called `./errors.txt`_. You'll need to _promisify_ another one of the `fs` functions, like I did for you with `readFilePromise`. The error file should read something like `No file for "goatbanjorodeo" found` if I try `tsnode file.ts goatbanjorodeo`.
- commit your work when you've got it working.
- **Extra Credit: ✨** Instead of _overwriting_ the `errors.txt` file with a message about a file not existing, figure out how to **append** a new line to the `errors.txt` file, so that it keeps a running log of _all of the errors_ that you could view later. Commit your work when done.
- **Kiah Credit: ✨** Modify the script so that it can take any number of filenames passed as cli/shell arguments, like `tsnode file.ts ellwood webb gratton`. The logging of file contents and writing of lines to the error file should work the same, just supporting a variable number of arguments from the user.
- push up a MR, slack me the URL so I can leave you comments.

---

## Web Promises Homework 🍔

---

- make sure you've watched _both_ videos I recorded about Promises: [video 1](http://jared.howtocomputer.link/promises_1.mp4), and [video 2](http://jared.howtocomputer.link/promises_2.mp4)
- very carefuly and slowly review the **Promises** portion of "New Stuff" above ^^.
- read all these steps before starting out
- for this homework you're going to build a web page by loading data from an external API that you access using the `fetch()` api supplied by the browser.
- make the website in a new folder (which should also be a git repository) in your `~/www` dir
- you can choose from using one (or more, if you're ambitious) of these API endpoints:
  - `https://api.howtocomputer.link/friends-library/friends` -- a list (array) of all of the Quaker authors available on Friends Library.
  - `https://api.howtocomputer.link/friends-library/documents` -- a list (array) of all the _books_ available on Friends Library, includes a usable cover-image for each edition too (note, the `/friends` url above contains references to these books)
  - `https://api.howtocomputer.link/friends-library/documents/<document-id>` -- a single record for a single book (an object) for one of the books on Friends Library
  - `https://api.howtocomputer.link/friends-library/downloads` -- a list (array) of the 500 most recent downloads from the Friends Library site (including location data)
  - `https://api.friendslibrary.com/app-audios` -- a list (array) of all of the audio books available on Friends library, including links to MP3s, and "album artwork" image (this is actually a real API endpoing that I'm using for the native apps I'm developing currently, but you guys can use it too!)
- the basic idea is that you will use `fetch()` to request one of these endpoints, then turn the response into a JSON object (see example in "New Stuff" above), and then once you have JSON (which will be an ARRAY of things), you will probably `.forEach()` over the array and use your DOM-scripting skills to insert dynamically generated HTML for each item in the list.
- here are some example ideas:
  - Create a nicely-styled list of all the Quaker authors, including a description of each. Maybe format the women authors in pink, and have the men authors be blue. Link each author to their page on the Friends Library site. Or maybe filter out all of the men-friends and make a page showcasing all of the female authors. Or use the `residence` field to make a page showing off only the Quakers who lived in Ireland.
  - Create a list of all books available on the Friends Library website. Show images for each edition available for each book, and link each book to it's page on the Friends Library site.
  - Create a dashboard displaying information about the 500 most recent downloads. Consider grouping them into countries, or counting them and giving statistics. The download resources don't have human-readable information about what BOOK was downloaded, but they DO have the document ID and edition type -- you could use these facts to make additional requests to get more information about the items downloaded.
- you might want to start by just creating an HTML page with a link to a javascript file, and in that javascript file, start playing around with fetching one of these endpoints, and turning the response into JSON. Once you have the JSON, try `console.log()`-ing it out. Or maybe just log the _first_ one. Then you can start brainstorming some interesting ways to present these resources in a website, in some sort of a list of repeating HTML elements.
- you'll probably want to end up making a javascript function that takes in ONE of the resources, and builds up the HTML you want from it. Then you can MAP over the resources, calling this function, and then inserting it into the DOM.
- if you are feeling rusty on your DOM-scripting, review the new stuff from [week 18](/week-18).
- don't go CRAZY, but try to make your page look sort of nice, using CSS. Try to use Flexbox, and some of your other CSS skills.
- make sure to make a lot of git commits.
- push your code to a new repository on GitLab so it's safe.
- **Kiah Credit: ✨** make sure your web-page uses at least TWO of the endpoints listed above, cross-referencing them. This will involve more usages of Fetch, and more promises. Example: list recent downloads, but for each download, look up information like the name of the document using another endpoint, and merge that data together to make something more interesting and useful. Or, show a list of Quaker authors, but for each of them also give detailed information about each book they wrote, only availabe from a different API endpoint.
- slack us the URL of your web-page when you're done!
