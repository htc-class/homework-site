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
- more coming soon...

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

---

## SSH Assignment

---

- modify your computers `~/.ssh/config` file so that it connects to the new HTC VM through **port 555**.
- make a nice alias by changing the `Host` to something short like `htc`, which requires that you also set the `HostName` to `howtocomputer.link`
- test your SSH connection to the new VM, you should see the cool HTC ascii-art that I showed you in class
- once you are able to SSH in, Slack me that you got in successfully, once I hear back from all of you, I'll nuke the old VM 🔫

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
