---
path: "/week-15"
---

# Week 15 Homework 💻 🦉

_New stuff we learned this week:_ 🤔

### Javascript

- **functions** are just _values_ like anything else, so you can:
  - put them into an array
  - make them a property of an object
  - pass them as arguments into another functions
  - return them from a function
- the magic of a _function_ is that it can be **invoked** using _parentheses_
- the `return` keyword _sends something OUT_ from a function, like so:

```js
let multiply = function(a, b) {
  return a * b;
};

let result = multiply(5, 3); // result is `15`
```

- a **function without a return statement** always returns `undefined`
- if you **don't pass in arguments to a function** it's like you passed them in as `undefined`:

```js
let logsArgument = function(someArg) {
  console.log(someArg);
};

logsArgument(); // 😲 logs out `undefined`
logsArgument(3); // logs out `3`
```

- a **pure function** has no _side-effects_ and returns a value that will _always be the same, given the same inputs._ Here's an example:

```js
let superPureFunction = function(a, b, c) {
  return a + b + c;
};
```

- a **side-effect** is something _observable_ that a program does, without side-effects there's really no reason to write a program, unless you just like making the CPU do work. Here's an example:

```js
let sideEffecty = function() {
  console.log(Date.now(), "seconds since Jan 1, 1970.");
};
```

#### Variable Scope

- the term **scope** means the _part of a program_ where a variable exists and can be accessed -- like a _cage_ for a variable.
- most variables in javascript are **block-scoped** which means that curly braces (ears) create scopes
- because functions are also blocks, functions create scope:

```js
let myFn = function() {
  let x = 42; // variable X exists in the scope of `myFn`
};
```

- variable scopes can _see_ into _outer_ or _containing_ scopes, but outer scopes can't see into inner scopes:

```js
let y = 2;

let myFn = function() {
  let x = 42;
  return x + y; // ✅ this scope can "see" outer scope
};

myFn(); // ✅ no error
console.log(x); // 💔 `x` not visible to this scope
```

- **arguments** to a function live _inside of the function scope_ even though they are defined a tiny bit before the first curly-brace ear:

```js
// `x` and `y` ----v--v  are scoped WITHIN `add` function
let add = function(x, y) {
  return x + y;
};
console.log(x); // 💔 NOPE: `x` lives in inner `add` scope
```

### CSS

- all elements by default have a `position` attribute of `static`
- _static elements_ have to **share space** with other elements, within the **flow** of the webpage
- **absolutely positioned elements** are created by setting `position: absolute;` -- these elements _no longer share space_ or fit within the flow of the document, instead **they get a jetpack 🚀** and fly up and are free!
- you can **control the location** of _absolutely positioned elements_ by using `top`, `left`, `right`, and `bottom`, (usually only **two** of the four) like so:

```CSS
#my-jetpack {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

- when an element is `position: absolute;` -- the browser has to put it in a **cage**. The cage is the **first parent element that is NOT `position: static`**.
- `position: relative;` makes an element behave **just like** `position: static;` except _it becomes a cage for absolutely positioned elements_.
- if a absolutely positioned element has no cage, the _browser window itself becomes the cage._
- you can control the **stacking order** of absolutely-positioned elements with the css `z-index` property:

```CSS
#foo {
  position: absolute;
  z-index: 1;
}
#bar {
  position: absolute;
  z-index: 2; /* 😲 goes ABOVE `#foo` if they overlap */
}
```

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #14](https://htc-viewer.netlify.com/?id=rL8X2mlNHPM)

---

## Homework Plan:

- 1 day creating new flash cards
- 1 days reviewing all flash cards
- 2 days `vim` practice (see below)
- 2 days javascript practice
- 2 days touch-typing practice
- 1 days Web practice
- 2 day watch [CCCS #14](https://htc-viewer.netlify.com/?id=rL8X2mlNHPM)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] `vim` practice #1

### Homework day 2

- [ ] watch [CCCS #14](https://htc-viewer.netlify.com/?id=rL8X2mlNHPM)
- [ ] touch-typing practice
- [ ] Javascript practice #1

### Homework day 3

- [ ] `vim` practice 2
- [ ] touch-typing practice
- [ ] Javascript practice #2

### Homework day 4

- [ ] watch [CCCS #14](https://htc-viewer.netlify.com/?id=rL8X2mlNHPM)
- [ ] Web Homework

---

## Flashcard Assignment

- review your current stack of flashcards
- make 5 new `CSS` cards:
  - `position: static;`
  - `position: relative;`
  - `position: absolute;`
  - `z-index: <num>;`
  - `top`, `bottom`, `left`, `right` - one card for all four
- make 2 new `vim` cards:
  - `w` - from normal mode, moves to the beginning of the next **w**ord
  - `b` - from normal mode, moves **b**ack to the beginning of the previous word, the opposite of `w`

---

## Vim Homework #1

---

- be sure you've done your _Flashcard Assignment_ homework first, because I threw in two semi-new commands that I want you to practice
- sort your flashcards, and pull out a stack of all of your `vim` cards
- slowly and carefully review each vim command
- `ssh` into your home dir, and open `vimtutor` by typing `vimtutor`
- instead of actually doing `vimtutor` -- work through your stack of `vim` flashcards one by one, and **practice each command at least 5 times** -- use the text of `vimtutor` just as raw material for practicing your chumps and changes, etc...

---

## Vim Homework #2

---

- review your `vim` stack of flashcards that you practiced from _Vim Homework #1_
- `ssh` into your home dir
- complete `vimtutor` (except the `.vimrc` stuff in lesson 7), but this time:
  - consciously practice all of your vim skills
  - don't ever hold down `h`, `j`, `k`, or `l` -- instead use more powerful things like `b` and `w` and `{` and `}`, etc, from your practice
  - do all of the _tasks_ that `vimtutor` tells you to do, but you don't have to do them **the way** they tell you, do them in the best way you know how. For instance when they say to use `c$` -- ignore them and use `C` instead

---

## Javascript Homework #1

---

- slowly and carefully review the _Javascript_ portion of "New Stuff" -- make sure you study each code sample and can understand every line. If something doesn't make sense, ask a question in Slack.
- `ssh` into your home dir
- start up the `node` `REPL` by typing `node` and then `<ENTER>`
- type in this statement: `typeof console.log` -- but before you hit enter, guess what you think will be printed
- press Enter -- were you right?
- now try typing this statement `typeof console.log()` -- but before you hit enter, guess what you think will be printed, then hit enter. Were you right?
- try again with `typeof console` -- guess beforehand and check if you were right
- close the node repl by typing `.exit`
- `cd` into your `~/node` dir and make a new directory called `week-15`
- `cd` into the `week15` dir and create a new file with vim called `fns1.js`
- declare 3 functions: `add`, `multiply`, and `print`. `add` should take 2 numbers and return the sum of them added together, `multiply` should be the same except it multiplies 2 numbers, and `print` just takes a value and `console.log`s it.
- at the bottom of the file, below the declaration of the 3 functions, on 3 new lines, **invoke** each function once, passing in some arguments
- save and close the file, then execute it from the shell (by typing `node fns1.js`) -- can you explain why you only see one line of output?
- edit the `fns1.js` file again, and change 2 of the lines where you invoked your `add` and `multiply` functions, making it so you will see the output of these functions when you execute the file from the shell.
- save, close, and execute the file -- you should see 3 lines of output, and no errors
- use `cp` to make a copy of `fns1.js` but call the copy `fns2.js`
- edit `fns2.js` with `vim` and delete the 3 lines near the bottom where you used the declared functions -- but do this with **a SINGLE vim command**
- at the bottom of the file, declare a variable called `arrayOfFunctions` and make it an array with all three functions (`add`, `multiply` and `print`) in it.
- use _array square bracket access notation_ to print out the word `WOW` by invoking the `print` function from within `arrayOfFunctions` -- if you did it right, you should not use the function name `print` in your invocation at all.
- save, close, and execute `fns2.js` from the shell and test if it worked, you should get the string `WOW` barfed to standard out
- use a combination of `cat` and `head` to print to standard out the part of your `fns2.js` that contains JUST the function declarations - not the part with `arrayOfFunctions` and below.
- repeat the above command, but redirect it's output to a file called `fns3.js`
- edit `fns3.js` with vim, and below the function declarations, create an `object` called `myObject` with 3 properties, named `doAdd`, `doMultiply` and `doPrint` -- the _value_ of the `doAdd` property should be the `add` function, and so on for the other 2 functions.
- now, below the spot where you declared `myObject` -- use the `myObject.doPrint` function to print out the word 'BEEP'
- save, close, and execute the `fns3.js` file, you should see the word `BEEP` barfed to standard out
- next, edit the `fns3.js` file, and delete the line where you printed `BEEP`. Then, using only the functions that exist on the `myObject` object, and using ALL THREE functions on the object, write a few lines of javascript so that when you execute it from the shell it looks like this:

```sh
$ node fns3.js
2 + 3 equals 5
2 * 3 equals 6
Robots say BEEP BOOP.
```

- next use `cp` to copy `fns3.js` to a new file called `fns-argv.js`, then edit the new file with `vim`
- only changing the bottom part of the file where you use the functions on the `myObject` object, alter the code so that the NUMBERS and the ROBOT TEXT can be passed in as _command line arguments_ such that when you invoke from the shell, it works like this:

```sh
$ node fns-argv.js 4 3 Howdy
4 + 3 equals 7
4 * 3 equals 12
Robots say Howdy
```

- use your shell's `history` command to find the command you used to do step 21. Re-type the same command, but this time redirect to a file called `fns-fns.js`
- edit the `fns-fns.js` file with `vim` and declare a new function called `log3functions`, this new function should:
  - take 3 arguments named `fn1`, `fn2` and `fn3`
  - invoke all three functions, always passing two arguments, the numbers `5` and `2`
  - use console.log() to print the result of each invocation
- next, on a new line at the end of the file, _invoke_ the `log3functions` function, and pass in the other 3 functions you declared at the top of the file as the 3 arguments
- before you execute the file, make a prediction about what exactly you will see logged out to standard out, write down your prediction
- save, close, and execute the file -- if your prediction wasn't correct, study the file again and try to figure out why it printed what it did
- **Extra Credit:✨** change the `log3functions` function so that it accepts a single argument, which is an array of 3 functions, and invokes them all like before, then change the invocation so that everything works exactly the same as the step before.
- **Extra Credit:✨** design a function called `doMath` that takes 3 arguments, a function, and two numbers, make it work so that:
  - `print(doMath(add, 3, 4));` will log out `7`
  - `print(doMath(multiply, 3, 4));` will log out `12`
- slack me when you're done, so I can look at your js files

---

## Javascript Homework #2

---

- re-review the Javascript portion of "new stuff" -- slowly going over the "scope" part and examples
- `ssh` into your home dir, then `cd` into `node/week15`
- I placed a folder in the computers root dir called `node` -- without leaving your current directory, list out the contents of that dir using an _absolute path_
- repeat the last step, but this time use a _relative path_
- copy both files from the `/node` dir into your current working directory
- open the `scope-test.js` file with vim, and replace every instance of `???` with either "Error" or "OK" based on whether that line would cause an error based on "scoping" rules
- save your work and close
- open the `purity-test.js` file with `vim` and replace every `???` with what you think is the right answer
- save, close, and slack me so I can check your work and help you with anything you got wrong

---

## Web Homework

---

- make sure you've done both the _Flashcard_ assignment, and "Vim Homework #1" before doing this assignement
- try to use all of your practiced vim skills as you write HTML and CSS
- carefully review the `CSS` section of "New Stuff" before proceeding
- `ssh` into your home dir, then `cd` into `www` and make a new dir called `week15`
- create a new html file, using `cp` to copy over one of the files from `week14` flashcard site area, so you don't have to type out all of the boilerplate of the html structure and stylesheet link, etc.
- use `mv` to rename the copied file `house.html`
- use `touch` to create a new file called `house-styles.css`
- edit your `house.html` and `house-styles.css` so that the final page meets **these requirements:**
- the `<link>` tag in the `<head>` should connect to the `house-styles.css` file
- all your CSS should be in `house-styles.css`
- you should be using `vim`'s `vsplit` or `split` features to work on both your HTML and your CSS at the same time in the same window
- the webpage should have a gray box that with a width and a height that you specify, that box represents (part of) your house
- use a bunch of empty `div` tags (they will need a width, height, and background-color), plus absolute positioning to create a "blueprint" of 3 of the rooms of your house, showing the shape of the rooms, and the doors
- add a `p` tag for each room labeling the room (like "family room", "bedroom", "bathroom") etc. -- the labels should be positioned about in the center of each room
- pick one room to add a piece of "furniture" to, like a table or couch, but build the furniture in such a way that you can move it around as a group, like it was a single unit, to get it just in the right spot
- add a label for the piece of furniture, and put it right over the piece of furniture, use `z-index:` to ensure that the label is always "above" the furniture
- **Extra Credit: ✨** make another "story" of your house in a different div, with at least one room and one piece of furniture, both labelled, then absolutely position your second story _over_ your first story -- tweak colors and background colors so we can see both stories at the same time, like an x-ray view.
- Slack your web-page when you're done so we can see!
