---
path: "/year-2/week-10"
---

# Year #2, Week #10 💻 🛰

_New stuff we learned this week:_

## Unix Husbandry: `ps` and `kill` 🐖

- the `ps` command allows you stands for **Process Status**. It provides
  information about the _processes_ running on your machine. If you just type
  `ps` you'll see some output like this:

```txt
  PID TTY          TIME CMD
22615 ttys000    0:00.11 -bash
60779 ttys000    0:00.01 man ps
60787 ttys000    0:00.00 /usr/bin/less -is
28118 ttys001    0:00.10 /bin/bash -l
53897 ttys001    0:00.24 npm
```

- The first column gives you the **process id (PID)**. The thrid column shows
  how long it's been running, and the `CMD` column tells you what command
  initiated the process.
- By default, the `ps` command only lists your users processes, and only those
  initiated from a terminal. There are lots of other processes that are running,
  and usually you are interested in all of them. To see all of the processes,
  you type `ps -ax` (or the very common legacy flag format of `ps aux`).
- `ps -ax` gives you TONS of processes, so usually you want to filter out just
  what you're looking for. Piping to `grep` is great for this:

```bash
# find all processes (maybe) having to do with port 6060
$ ps -ax | grep 6060
```

- the unix `kill` command allows you to **terminate** or send some sort of
  **signal** to a process.
- typing `kill -L` lists all the signals you can send to a process:

```bash
 1) SIGHUP  2) SIGINT 3) SIGQUIT 4) SIGILL   5) SIGTRAP
 6) SIGABRT 7) SIGBUS 8) SIGFPE  9) SIGKILL 10) SIGUSR1
 # ... lots more ...
```

- the most common signal you tend to send with `kill` is the strongest one:
  `SIGKILL` (number `9`). If the process ID you want to kill is `4233` then you
  would type `kill -SIGKILL 4233`, but it's more common to use the **number** of
  the signal, so you could express the same thing as `kill -9 4233`.
- so, if you try to use a port and get an error that it's already in use, you
  would do something like this (assuming the port number was `6060`):

```bash
$ ps -ax | grep 6060
# copy the PID, let's pretend it is 5555
$ kill -9 5555
# rejoice, your port should be free now :)
```

## Javascript: Rest Parameters

- We've [already learned](/year-2/week-03) that the `...` operator (called the
  **spread**) operator _spreads_ out an array or object:

```ts
const x = ["a", "b"];
const y = [...x, "c"]; // ['a', 'b', 'c']
```

- well, the exact same symbol (`...`) when used in a _function argument_ has a
  different meaning, in that context it identifies a **rest parameter**,
  essentially _gathering up the REST of the parameters into an **array**._ So,
  weirdly, it's kind of the _opposite_ of the _spread_ operator, in this case it
  sort of "un-spreads" or "gathers". Consider this code snippet:

```js
function log_variadic(...strs) {
  // 👋 in here `strs` is now an ARRAY of ALL the args
  strs.forEach((str) => console.log(str));
}

log_variadic("goat", "banjo", "rodeo");
// > "goat"
// > "banjo"
// > "rodeo"
```

- the variable created using a rest paramater is **always an array**, so in
  typescript, it should be typed as such:

```ts
function log_variadic(...strs: Array<string>): void {
  strs.forEach((str) => console.log(str));
}
```

- you can also name one or more individual arguments _before_ gathering the rest
  up, like so:

```ts
function family(parents: string, ...kids: string[]): void {
  console.log(`Parents: ${parents}`);
  kids.forEach((kid) => console.log(`Kid: ${kid}`));
}

family("Frank, Stacey", "Tabitha", "Charlie");
// > "Parents: Frank, Stacey"
// > "Kid: Tabitha"
// > "Kid: Charlie"
```

- but you **_can't_** use more than one rest param, or put it any other position
  than **last** in the argument list:

```ts
// 🚨 ERROR!! TWO rest params NOT ALLOWED
function bad_1(...parents: string[], ...kids: string[]) {
  // no bueno
}

// 🚨 ERROR!! Regular arg AFTER rest param NOT ALLOWED
function bad_2(...kids: string[], parents: string) {
  // no bueno
}
```

## Typescript: Index Signatures for objects

- sometimes you know the keys and values an object might have in advance, and
  you can create _very specific types_ for them:

```ts
type User = {
  name: string;
  admin: boolean;
};
```

- but sometimes you want to use an object as sort of a _grab-bag_ to hold stuff,
  and you don't know the keys until runtime. This use-case is often called a
  **dictionary** or **hash-table** or **map** in other programming languages.
  The idea is simple, you want to use an object as a flexible data structure to
  hold key/value pairs, like this:

```js
const dictionary = {};
dictionary.foo = "bar";
dictionary.bar = "baz";
let key = "lol";
dictionary[key] = "goat";
// etc...
```

- how would we _type_ this in Typescript? Well, to answer that, let's first
  remind ourselves of how you set object keys from variables in javascript.
  Consider this snippet:

```js
const name = Math.random() < 0.5 ? "jared" : "rachel";
// how do we use this VARIABLE as an object KEY? 🧐

const lastNames = {
  [name]: "wilhite", // 😎 ahhh... like this.
  frank: "artinian",
};
```

- Typescript designed the way you would _type_ this sort of object to look
  really close to the javascript above. The typescript type for that would be
  this:

```ts
type LastNames = {
  [firstName: string]: string;
};
```

- the `key` part on the left hand side is just a helpful hint for humans, it's
  not used anywhere by Typescript to compile or typecheck. We could have made it
  `key` or `k` or `hamSandwich`;
- the type of object keys in Typescript has to be a `string` or a `number`.
  That's because under the hood, the only thing that's really allowed as an
  object key in javascript is a `string`, and numbers can be used because they
  convert back and forth to strings in a very intuitive way, so Typescript winks
  at this behavior

---

## React: Form Elements

---

- It's very common in a React application to want to \_take control of
  **user-input** from **form elements**. This is most commonly accomplished by
  **managing the state of form elements witth `useState`**:

```tsx
import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [name, setName] = useState(``);
  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </form>
  );
};
```

- Almost all form/input html elements in React will accept a `value` prop and
  have an `onChange` handler. The function passed to `onChange` will always
  receive an **event object** as it's first argument. Most commonly you'll need
  to read the value from the input element from `event.target.value` and use it
  to update your state, as shown above.
- one exception is the **checkbox** input type. For these, you need to pass a
  _boolean_ to the `checked` prop, like so:

```tsx
import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [likesGoats, setLikesGoats] = useState(true);
  return (
    <form>
      <label>Do you like goats?:</label>
      <input
        type="checkbox"
        checked={likesGoats} /* <-- 👋 */
        onChange={() => setLikesGoats(!likesGoats)}
      />
    </form>
  );
};
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan (2 weeks)

- 2 days review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1 day Flashcard correction assignment
- 1 day classnames assignment
- 1 day React forms assignment
- 2 days touch typing practice
- **8** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards #1</Checkable>

<Checkable id="review-flash-2">review all (app) flashcards #2</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="flash-app">Flashcards App Assignment</Checkable>

<Checkable id="flash-correct">Flashcard correction Assignment</Checkable>

<Checkable id="classnames">Variadic Classnames assignment</Checkable>

<Checkable id="react-forms">React Forms Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

<Checkable id="xp-7">Execute Program #7</Checkable>

<Checkable id="xp-8">Execute Program #8</Checkable>

---

## Flashcard App Assignment

---

- merge your MR from last week, connect to your repo through vscode, checkout
  master, then pull changes from `origin` and delete last weeks branch.
- create a new branch
- add a "shuffle" feature - a button (or maybe a keyboard shorcut? or both?)
  that you can use to shuffle your cards into random order, to help your
  learning. Hint: you'll probably want to review the `Array.sort()` method from
  [week 35 of last year](/week-35).
- commit your work.
- add some new cards:
  - `ps` in the "bash" category (include an example of how it is commonly used
    with `aux` or `-ax` and `grep`)
  - `kill` in "bash" (if it's not already there -- include an example of the
    most common usage with `-9 <pid>`) -- `...` for `Rest Parameter` in
    "javascript" - get creative with how to prompt for this, make sure it won't
    be confused with the **spread** operator
  - add one for **index signatures** in "typescript", be sure your answer
    includes a good example type.
- commit your work
- add 17 more cards from your original stack
- commit your work, build, open a MR, slack the URLs

---

## Flashcard correction assignment

_I've noticed some of your cards have definitions for terms and concepts that
aren't 100% accurate. That's totally understandable, but I don't want you
memorizing incorrect or incomplete definitions, so I'm going to have each of you
**tweak some of your card data.** How it will work is I'm going to open a PR on
each of your Flashcard repos, leaving comments for which cards to improve. You
don't need to merge my PR, just use the diff as a guide to make your own PR
improving some of your cards._

---

- Wait for me to submit a MR to your Flashcards app repo.
- checkout a clean branch of your own, and improve all of the cards I pointed
  out in my MR.
- research on old "New Stuff" if necessary to find better explanations.
- submit a MR with your improvements, and slack the URL.

---

## Classnames Variadic Homework

---

- slowly and carefully read the "Variadic/Rest Params" section of "New Stuff"
  above ^^^.
- with vscode, connect back to your `classnames` repo from last week.
- add a test to the `classnames.spec.ts` file that will fail because your
  implementation of classnames is not variadic.
- fix your failing test by converting the function to accept any number of
  parameters, using a **rest parameter**.
- commit your work
- **Extra Credit: ✨** - it would be good if your function wouldn't double
  classes, so that `cx('foo', 'foo');` produced `"foo"` instead of `"foo foo"`.
  Write a failing test for this feature first, then get the test to pass. (Hint:
  something from [week 23](/week-23) might be useful...)
- push your work up again (you should still be on the same branch as last week).
- re-slack me the URL so I can check your work.

---

## React Forms Homework

---

- slowly and carefully read the "Forms" section of "New Stuff" above ^^^.
- if you get stuck and can't remember some of the HTML for various form
  elements, refer to [week-24 from last year](/week-24) - where we first learned
  about form elements.
- fork and clone [this repo](https://gitlab.howtocomputer.link/htc/react-forms)
  and then connect with vscode.
- install the dependencies
- start a new branch
- **Harriet!** do the last step please!
- edit the `App.tsx` file (or create your own component files, if you wish) so
  that your webpage meets the following criteria:
  - Include a _text input_ that, when typed in, the text typed in appears
    somewhere on the page, but it is all capitalized. The text in the input
    should not be capitalized, just the text displayed somewhere.
  - Include a labeled _text input_ that only lets you type in **vowels**.
  - Include a set of at least 3 _labeled radio buttons_
    (`<input type="radio" />`) that each are a _color_. When you press each
    radio button, the background of the page should change to that color.
  - make a _select input_ that allows you to control what animal's image is
    shown somewhere on the screen. Let the user select from **aardwolf, cat,
    whale, snail, or frog**. Use these URLs for your `<img>` `src`:
    - `http://jared.howtocomputer.link/animals/aardwolf.jpg`
    - `http://jared.howtocomputer.link/animals/cat.jpg`
    - `http://jared.howtocomputer.link/animals/whale.jpg`
    - `http://jared.howtocomputer.link/animals/snail.jpg`
    - `http://jared.howtocomputer.link/animals/frog.jpg`
  - make a _password input_ that reveals an image of a goat if the word `"goat"`
    appears anywhere in the users input. Use
    `http://jared.howtocomputer.link/animals/goat.jpg` for the image source.
  - **Kiah Credit: ✨** - make a _textarea_ that is limited to 100 characters of
    input. It should display the number of characters remaining as the user
    types. When the user has added 100 chars, it should turn red and stop
    accepting input.
- commit your work
- build your site `npm run build`, (the resulting URL will be
  `http://<you>.howtocomputer.link/react-forms`)
- push up an MR, and slack your build url and MR url.
