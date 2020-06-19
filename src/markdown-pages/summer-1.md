---
path: "/summer-1"
---

# Summer Homework #1 💻 🍉

_New stuff we learned this week:_ 🤔

## TypeScript

- TypeScript files end with `.ts` (or `.tsx` -- but more on that later).
- in TypeScript, you can explicitly declare the types for your variables, arguments, function returns, and more, like this:

```ts
let name: string = "Jared";
let hasBeard: boolean = true;
let age: number = 41;
let horse: null = null;
let favoriteSpiter: undefined = undefined;
```

- but in typescript you would rarely write `let name: string = "Jared";` because typescript **infers** types:

```ts
let name = "Jared"; // TS knows `name` is a string
let age = 41; // TS knows `age` is a number
```

- in javascript you can set a variable to one type, and then _re-assign it to another type_ (as long as you're not using `const`). In TS, this is **not allowed**:

```ts
let name = "Jared";
name = false; // 💔 ERROR!!
```

- **arrays** in TS are specified by adding `[]` after a type:

```ts
let strings: string[] = ["Bob", "Sally", "Jake"];
let booleans: boolean[] = [true, true, false];
let grabBag: any[] = ["Hi", false, null, 33];
```

- when defining a function in TS, you can (and should!) define the **types of the argument**. The syntax is similar, using a colon again:

```ts
function introduce(name: string, age: number) {
  console.log(`${name} is ${age} years old`);
}
```

- if you define types for your _arguments_, then TS will let you know when you **use the function wrong**:

```ts
function introduce(name: string, age: number) {
  console.log(`${name} is ${age} years old`);
}

introduce("Jared", 41); // 😎
introduce(14, "Winfield"); // 💔 ERROR! wrong types passed
```

- TS allows you to add _type annotations_ for the **return values** of your functions. Although TS is often able to _infer_ the correct return value, being explicit and setting it yourself is always a good practice, because it prevents you from writing bugs. The return type annotatoin comes after the closing `)` of the function, like so:

```ts
function greeting(name: string): string {
  return `Hi there, ${name}!`;
}

function divideTwoNums(x: number, y: number): number {
  if (y === 0) {
    // 💔 ERROR! you promised TS you would return a number
    return "NO DIVIDING BY ZERO!";
  }
  return x / y;
}
```

- TS also has a concept of **union types** which you can think of a type that can be more that one thing. You create one by separating two normal types with the pipe `|` character, like so:

```ts
let age: string | number = 41;
age = "42"; // 😎 OK because `age` can be string OR number
```

- **union types** are handy for _functions that can return more than one type_. Let's re-write the `divideTwoNums` example above, this time returning `null` if a zero is passed as the divisor.

```ts
function divide(x: number, y: number): number | null {
  if (y === 0) {
    // 😎 OK because return value can be number OR null
    return null;
  }
  return x / y;
}
```

## Node Async Philosophy

- Ryan Dahl created nodejs not primarily because he wanted to write javascript on the server, but because he wanted to build **highly performant, asynchronous web servers that avoided _blocking I/O_**.
- For that reason, almost all of the node _core modules_ are **asynchronous** -- that is, they don't **block** for things like reading/writing from the filesystem, etc. -- instead, they **schedule work for LATER** by putting **callback functions** on the **EVENT LOOP.**
- the standard node callback is invoked by a core module passing in an **Error first** (or `null` if there is no error), and then the **data second**, like so:

```js
const fs = require("fs");

fs.readFile("./goats.txt", (err, buffer) => {
  if (err !== null) {
    console.error("OH NO!");
    return;
  }

  // do something with `buffer` variable here...
});
```

- this **error-first callback convention** is often called **nodeback** or **errback**.
- the concept of _passing functions to functions_ to **do work later** (after some event, like the operating system comes back with some file contents) is called **CONTINUATION PASSING** -- because you _pass the continuation of your work around as a function_.
- the opposite of this **asynchronouse** (or just **async**) approach is to do similar work in a _blocking_ or _synchronous_ (**sync**) fashion. All node core modules have `<method>Sync()` versions of their API, like `fs.readFileSync()`. If you're not building a web server, or for some reason performance doesn't matter for what you're doing, it's fine to use the `*Sync()` versions of the core modules.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #34](https://htc-viewer.netlify.app/?id=z-EtmaFJieY)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan (next class in 3 weeks)

- 1 day new flashcard assignment
- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 day Typescript Homework
- 1 day Node async Homework
- maybe more coming later...

---

### Homework (week 1)

<Checkable id="new-flash">new flashcard assignment</Checkable>
<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="ts">Typescript Homework</Checkable>

### Homework (week 2)

<Checkable id="review-flash-2">review all flashcards</Checkable>
<Checkable id="typing-2">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="async">Node Async Homework</Checkable>

_more coming later..._

---

## New Flashcards assignment

- Make 5 new `ts` (typescript) flashcards:
  - declaring types for variables
  - declaring types for function _arguments_
  - declaring _return types_ for functions
  - _union types_
  - _array types_

---

## Typescript Homework

---

- very carefuly and slowly review the **Typescript** portion of "New Stuff" above ^^.
- go to [https://gitlab.howtocomputer.link/htc/ts-intro](https://gitlab.howtocomputer.link/htc/ts-intro), **fork it**, then clone it into `~/node/summer-1` through `ssh`, then connect to the dir through vscode.
- create a new branch
- follow all of the instructions in the _comments_.
- to test your work, from the integrated terminal, type `tsnode homework.ts` -- the Typescript will bark at you and spew error messages if you did anything wrong, or forgot anything.
- once you finished everything and `tsnode homework.ts` shows **no errors**, submit a MR so I can see your code and leave any comments for corrections.

---

## Node Async Homework

---

- very carefuly and slowly review the **Node Async** portion of "New Stuff" above ^^.
- go to [https://gitlab.howtocomputer.link/htc/nodeback](https://gitlab.howtocomputer.link/htc/nodeback), **fork it**, then clone it into `~/node/summer-1` through `ssh`, then connect to the dir through vscode.
- create a new branch
- for this whole assignment **you may NOT use the `*<Sync>` versions of any of the `fs` module methods.**
- write some code in `nodeback.ts` such that you can pass it the _lowercase last name_ of one of the four quakers who have files in the `./quakers` file. When you do, it should `console.log` the contents of the file. **IMPORTANT: start by creating a _named_ function to pass as the _callback_ -- DO NOT use an inline arrow function to start.**
- test your script by using `tsnode` (since this is a typescript file), it _should work like this_:

```bash
$ tsnode nodeback.ts ellwood
> To begin, therefore, with mine own beginning.
> I was born in the year of our Lord 1639,
> ETC...
```

- be sure your script works by just passing `ellwood` and `webb` etc, NOT `quakers/ellwood.adoc`.
- use template literals for any string concatenation (no more `+` for strings, forever!)
- if you have any typescript errors `vscode` should tell you, and then `tsnode` will bark at you, so fix all of those. 👍
- commit your work.
- next, handle the error case, where you pass the name of a file that _does not exist_. Start by just console.logging an error message and returning early.
- commit your work.
- now, convert your named callback function to an _arrow function_ and move it _inline_, like the example in the New Stuff.
- commit your work.
- next, instead of logging the error case, make it so that your script _writes the error message (including the non-existent filename) to a file called `./errors.txt`_. You'll need to use `fs.writeFile()` for this, and another nodeback/callback. Start by writing the callback as a named function. The error file should read something like `No file for "goatbanjorodeo" found` if I try `tsnode nodeback.ts goatbanjorodeo`.
- commit your work when you've got it working.
- now, convert your second callback into an _inline arrow_ function and commit your work. Are you starting to see the **pyramid of doom**? The nesting of callback functions?
- **Extra Credit: ✨** Instead of _overwriting_ the `errors.txt` file with a message about a file not existing, figure out how to **append** a new line to the `errors.txt` file, so that it keeps a running log of _all of the errors_ that you could view later. You'll need to add yet another level of nesting to your callback of pyramid of doom to accomplish this. Commit your work when done.
- **Kiah Credit: ✨** Modify the script so that it can take any number of filenames passed as cli/shell arguments, like `tsnode nodeback.ts ellwood webb gratton`. The logging of file contents and writing of lines to the error file should work the same, just supporting a variable number of arguments from the user.
- push up a MR, slack me the URL so I can leave you comments.
