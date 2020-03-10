---
path: "/week-25"
---

# Week 25 Homework 💻 🦗

_New stuff we learned this week:_ 🤔

### Javascript: Array.reduce()

- **Array.reduce()** takes a function that operates on each item of an array, _accumulating_ a single value (or, you could say _reducing_ the array to a single value). The accumulator function receives the accumulated value as its first argument, and the next item as it's second argument:

```js
[2, 2, 3].reduce(addItems, 0); // returns 7

function addItems(accumulation, nextItem) {
  return accumulation + nextItem;
}
```

- the _second_ argument passed to `Array.reduce()` is the _initial value of the reduction_:

```js
let initialValue = "MY GIRLS: ";
["Harriet", "Dale"].reduce(makeSingleLine, initialValue);
// returns `MY GIRLS: Harriet Dale

function makeSingleLine(accumulation, item) {
  return accumulation + " " + item;
}
```

### Javascript: Primitive Types and Argument Passing

- in Javascript, there are 7 so-called **"primitive" types**. You already know about 5 of them, and we'll save the last two for later, they are much less rarely encountered. The basic primitive types are:
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
- everything else is _not a primitive type_, including:
  - `functions`
  - `objects`
  - `arrays`
  - etc...
- primitive types are **passed to functions BY VALUE** which means the function **gets a COPY of the value**:

```js
let age = 41;

function subtract20(num) {
  num = num - 20;
}

subtract20(age);
// `age` is STILL `41` because
// primitive types are PASSED BY VALUE
// that is to say, COPIED
```

- non-primitives are **passed to functions BY REFERENCE** which means the function **gets a reference to the ACTUAL value, NOT a copy**:

```js
let jared = { age: 41 };

function setAge10(obj) {
  obj.age = 10;
}

setAge10(jared);
// `jared.age` is now `10` because the
// `setAge10` function got passed a REFERENCE
// to the actual `jared` object, NOT a copy
```

### Javascript: Code Sharing (web)

- when Brendan Eich invented Javascript, he didn't create a built-in way to _share code_ easily, and that missing feature is only just now being fully remedied, many years later.
- in the browser, a simple workaround/hack that was used for years (and still is used) is to share code by using a variable in the _top-most scope_ -- this is called a **global variable**
- in the browser, variables in the global scope are also **properties of a magic variable called** `window`
- in order to avoid "polluting the global scope", it was common to add a _single_ variable which is an object, and attach things to that, like this:

```js
// explicitly set up a global variable to hold goodies
window.JARED = {};

// add some goodies
window.JARED.greet = function(name) {
  alert("Hello there " + name + "!");
};

window.JARED.addNode = function(tag, html) {
  let node = document.createElement(tag);
  node.innerHTML = html;
  return node;
};

window.JARED.boys = ["Win", "Huck"];
```

- with a little bit of care, you can now load helpers and functions from **multiple javascript files:**

```HTML
<head>
  <script src="./lib-dom.js"></script>
  <script src="./lib-string.js"></script>
  <script src="./lib-array.js"></script>
</head>
```

- you just probably want to make sure that you don't accidentally overwrite the global variable, so each of the above `lib-*` files might have a bit of code like this at the top:

```js
if (window.SHARED === undefined) {
  window.SHARED = {}:
}

// then go on adding goodies
window.SHARED.goatbanjo = 'rodeo';
```

### Javascript: Code Sharing (node)

- when Ryan Dahl invented nodejs, he wanted to make it easy to share and re-use code, which was not easy to do in the browser. So he, and the early contributors to nodejs came up with a _convention for code sharing_ called **commonjs**. It looks like this:

```js
let coolModule = require("./cool-module");

coolModule.doCoolThing();
```

- `commonjs` works because behind the scenes, every node javascript file is **wrapped in a function** and then invoked, and the function is passed 5 special variables:
  - `exports` (an object that lets you "export" out stuff form your module)
  - `require` (a fancy function node gives you for pulling in other code)
  - `module` (a helpful bag of info about the "module", including a property `exports` which is a reference to `exports`)
  - `__filename` -- a string with the full path to the file
  - `__dirname` -- a string with the full path of the file's directory
- so, if you made the following node script (called `hello.js`):

```js
console.log("Hello World!");
```

- what actually happens behind the scene is something like this:

```js
// first, node WRAPS your file in a function with 5 params:
function hello(exports, require, module, __filename, __dirname) {
  console.log("Hello World!");
}

// then it calls it with 5 arguments
hello({}, require, module, "/home/hello.js", "/home");
```

- NOTE: from now on a rocket ship 🚀 in a js code sample means "take notice, we're talking about code now in a _different file!_
- `__filename` and `__dirname` are fun and hande, but the most powerful and important parts are the `exports` (most often accessed off of the `module` object as `module.exports`) and `require` parameters, this is what allows you to share code between files in node, like this:

```js
// file1 - lib.js
function add17(num) {
  return num + 17;
}

module.exports = add17;

// 🚀 then, in file2 - math.js
let add17 = require("./lib");
console.log(add17(5)); // logs out `23`
```

- the `require` function passed to each node file takes a "string" argument which is a _relative path_ to a file you want to use. You do _NOT_ supply the file extension, node adds it for you:

```js
// no file extensions because Ryan Dahl was being "cute"
let module1 = require("./path/to/module1");
let module2 = require("./module2");
let banjo = require("./rodeo");
```

- you can set `module.exports` to whatever you want, often it is set to be a single function (like in the `add17` example above), but another _very_ common practice, is to make it an object, so you can export _multiple things from one file_ like this:

```js
// in `math.js`
let halve = function(num) {
  return num / 2;
};

let double = function(num) {
  return num * 2;
};

// 😎 Cool Mom! I exported TWO functions!
module.exports = {
  halve: halve,
  double: double,
};

// 🚀 ...later on, in `do-stuff.js`...
let math = require("./math");
math.halve(22); // > 11
math.double(7); // > 14
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #23](https://htc-viewer.netlify.com/?id=7Jr0SFMQ4Rs)

---

## Homework Plan:

- 1 day adding to and reviewing all flash cards
- 1 day Argument Passing review & "test"
- 2 days Node Homework
- 1 day Web Homework
- 2 days touch typing practice
- 1 day watch [CCCS #23](https://htc-viewer.netlify.com/?id=7Jr0SFMQ4Rs)

### Homework day 1

- [ ] flashcard assignment
- [ ] Node Homework #1
- [ ] touch typing practice

### Homework day 2

- [ ] Argument Passing Review & Test
- [ ] Web Homework #1
- [ ] watch [CCCS #23](https://htc-viewer.netlify.com/?id=7Jr0SFMQ4Rs)

### Homework day 3

- [ ] Node Homework #2
- [ ] touch typing practice

---

### Flashcard Assignment

---

- add 4 new `javascript` flashcards:
  - `Array.reduce(fn, initialValue)` -- make sure the back includes a description of what arguments get passed to the function, and what `initialValue` is
  - "Primitive Types" (the back should contain a list of 5 types, and say that they are _passed by value_ to functions)
  - "Pass by Value"
  - "Pass by Reference"
- add 5 new `nodejs` flashcards:
  - "commonjs"
  - `module.exports`
  - `require`
  - `__filename`
  - `__dirname`
- carefully review all of your flashcards, repeating any that you get wrong!

---

### Argument Passing Review & Test

---

- carefully and slowly review the "Primitive Types and Argument Passing" section of "New Stuff" above ^^.
- `ssh` into your home dir
- copy the file `/arg-pass-test.js` into your home dir, and edit with vim
- follow the instructions -- any that you get wrong, study till you figure out why it was wrong, or Slack if you can't figure it out.

---

### Node Homework #1

---

- NO `for` loops at all in this weeks homework!
- slowly and carefully review the "Array.reduce()" and "Code Sharing (node)" sections of the "New Stuff" above
- _Hint: parts of these problems might be good to use RunJS for, faking out `process.argv` and then finalizing it as a node script when you've got it working 👍_
- `ssh` into your home dir, then make and move into a `~/node/week25` dir
- make a little math helper library in a file called `math.js` -- it should export an object with _TWO functions_ -- one that takes two numbers and adds them together, and one that takes a single number and squares it (multiplies it by itself);
- next, make another helper library module called `convert.js` -- it should export an object with two functions, one which converts strings to numbers, and one which converts numbers to strings
- next, make a simple node script called `sum.js` that takes any number of _numeric arguments_ from the shell, and adds them together -- it must:
  - import and use 2 of the four functions you created in steps 5 and 6
  - use both `Array.map` and `Array.reduce`
- When it's working, it should function like this:

```bash
$ node sum.js 1 1 3
> 5
$ node sum.js 5 10 100 1
> 116
```

- make a script called `sum-squares.js` that is similar to the previous script, but it squares all of the numbers before adding them together. It must:
  - import and use THREE of the four functions you created in steps 4 and 5
  - use both `Array.map` twice and `Array.reduce` once
- when it's working, it should function like this:

```bash
$ node sum-squares.js 1 2 3
> 14
$ node sum-squares.js 5 6
> 61
```

- **Extra Credit: ✨** revise the above script so that it pitches out non-numeric arguments without erroring, so that `node sum-squares.js 1 2 lol 3` still produces `14`
- make a script called `count-goats.js` that takes any number of string arguments from the shell, and console.logs out the number of times `goat` occurs -- it should work like this (the counting **must** take place by means of `Array.reduce()`):

```bash
$ node count-goats.js foo goat bar goat goat banjo
> 3
$ node count-goats.js foo bar baz
> 0
$ node count-goats.js goat banjo rodeo
> 1
```

- **Extra Credit: ✨** revise the `count-goats.js` file so that it is _not_ case senstitive, `GOAT` and `gOAt` and `goat` should all be counted

- make a script called `unique.js` that removes duplicates from the list of arguments provided, and logs out a nice summary of the unique items. It must:
  - use Array.reduce() to reduce the array to one containing no duplicates
  - print the number of unique items, plus the items on a single line separated by commas (as shown below)
- when it's working correctly, it should look like this:

```bash
$ node unique.js Win Huck Huck Dale
> 3 unique items: Win, Huck, Dale
$ node unique.js Michigan Ohio Ohio Utah Ohio Utah Florida
> 4 unique items: Michigan, Ohio, Utah, Florida
```

- **Kiah Credit: ✨** - make a script called `tally.js` that counts all the occurrences of strings in the argument list and prints them out nicely, it must use Array.reduce for the main work, plus other good stuff to format it correctly. When working, it should look like this:

```bash
$ node tally.js foo foo bar baz baz baz
> Totals: foo (2), bar (1), baz (3)
```

---

### Web Homework

---

- slowly and carefully review the "Javascript: code sharing (web)" section of "New Stuff".
- `ssh` into your home dir, then make and move into a dir: `~/www/week25/`
- make a webpage called `share.html` that meets the following criteria (read ALL of these before starting):
  - it should have an empty list, and a button with the text "add item"
  - when the button is clicked, the user should be prompted for some text (using `prompt`) and whatever they type in should be added as a new list item in the (previously empty) list
  - the webpage should have an H1 with the text "change bg color" which, when clicked, changes the backgound color of the web page
  - the webpage should load _THREE_ javascript files, one called `add-item.js`, one called `change-bg.js`, and the third called `do-stuff.js`
  - the `do-stuff.js` file has _already been created for you_ -- copy it down from `/do-stuff.js` into your current folder (you'll also want to look at it to see how to finish the task, but you may not modify it)
  - the two js files that you have to create from scratch should each create and _share_ a single function, on the `SHARED` global variable such that the code in `do-stuff.js` works to fulfill the other requirements above
  - the two files you create should use the safety precaution shown at the very end of the "new stuff" section on web code sharing
  - **Extra Credit: ✨** in the `change-bg.js` file use an array and array methods to make it so you can click the `h1` 10 times, and get a different bg color each time
  - **Extra Credit: ✨** use the power of scope to make it so that adding a list item prepends a number to each new list item, and the number goes up by one each time a user adds an item

---

### Node Homework #2

---

- `ssh` into your home dir, and `cd` back down into `~/node/week25`
- make your own helper module called `string.js` that exports X functions:
  - a function that changes a string to uppercase
  - a function that adds 3 exclamation points to a string
  - a function that replaces all of the lowercase `o` chars in a string with the char `@`
  - a function that filters out the word `goat`
- next, create a script called `yell-args.js` that takes any number of string arguments and:
  - removes the any that are just `goat`
  - uppercases them and adds 3 exclamation marks
  - it should use 3 of the functions you made from `string.js`, importing them with `require`
- when done, it should work like this:

```bash
$ node yell-args.js tofu goat rodeo sandwich
> TOFU!!!
> RODEO!!!
> SANDWICH!!!
```

- create a script called `weird-args.js` that works similar to the other one, except replaces `o` with `@` using the exported function you made, and it should not uppercase, and it should format them onto one line, like this:

```bash
$ node weird-args.js tofu goat rodeo sandwich
> t@fu!!! r@deo!!! sandwich!!!
```

- **Extra Credit: ✨ EVERYTHING PAST THIS POINT IS EXTRA CREDIT ✨**
- add a function to `string.js` that works like the function that adds 3 exclamation marks, except that it is a function maker (a function that returns a function) which leverages _closure_ to create a function that adds 3 of any character. So if the function was called `makeAppend3` you could use it like `someArray.map(makeAppend3('*'))`. Use your new function to change`weird-args.js` so that the _FIRST_ argument pass becomes what is added three times, like this:

```bash
$ node weird-args.js % tofu goat rodeo sandwich
> t@fu%%% r@deo%%% sandwich%%%
node weird-args.js * tofu goat rodeo sandwich
> t@fu*** r@deo*** sandwich***
```

- create a script called `find-by-sibling.js` that works like this:
  - it should `require` a file I created in the root dir, called `/htc-members.js` (console.log out what it exports, to help figure out what it is)
  - it should use array methods (NO LOOPS!) to find all of the students that have a sibling named whatever is passed in as a command line arg
- if done correctly it should work like this:

```bash
$ node find-by-sibling.js Charlie
> Found 1 -- Name: Tabitha Artinian
$ node find-by-sibling.js Huck
> Found 2 -- Name: Win Henderson, Name: Harriet Henderson
```

- **Kiah Credit: ✨** make a module called `print-found.js` that exports a single function -- the function should a single argument, which is a function for selecting from HTC members. The function passed as an argument should be used in place of the whatever you used in `Array.filter()` for the `find-by-sibling.js` task, and the function should take care of the rest of the work that `find-by-sibling.js` did. Once you make this sweet function, use it to drastically simplify the code of `find-by-sibling.js` and then make three more scripts (they should be dead simple to make once the function exists):
  - one called `find-by-parent.js` that works the same as `find-by-sibling.js` except you pass it a parent name
  - one called `find-teacher.js` that takes no arguments, but prints `Found 1 -- Name: Jared Henderson`
  - one called `find-students.js` that takes no arguments, but prints out a similar list of all students
  - again, the 3 new scripts should be dumb simple if you construct the helper module correctly 👍
  - in case that's all not clear, if I had your module I could use it to make a script that found all of the people whose first name was `Jared` and the code would _only_ be this:

```js
let printFound = require("./print-found");

function findJared(member) {
  return member.name === "Jared";
}

printFound(findJared);
// logs out: > Found 1 -- Name: Jared Henderson
```
