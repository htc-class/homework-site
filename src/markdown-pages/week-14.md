---
path: "/week-14"
---

# Week 14 Homework 💻 🐈

_New stuff we learned this week:_ 🤔

#### Vim

- `split <somefilename>` splits your vim window _horizontally_ loading the other file in the new section
- use `<CTRL-w><CTRL-w>` to switch between split screens
- yanking and putting works across vim split screens
- you can also do `vsplit <somefilename>` to split _vertically_

#### CSS

- a `display: inline` element doesn't let you set `width` and `height`
- `display: inline-block` is like `display: inline` except it respects `width` and `height` -- and it does _NOT_ make a new line like `display: block`
- the `float` CSS property places an element on the _left_ or _right_ side of its container, allowing text and inline elements to **wrap around it.** The main values are: `float: left`, `float: right` or `float: none`
- The `clear` CSS property sets whether an element must be **moved below (cleared) floating elements that precede it**: `clear: left` or `clear: right` or `clear: both`
- "back in my day" web developers really only had floats and tables to try to **lay out** web pages -- these were hacky and problematic, and led to the introduction of `flexbox` and `css grid` -- which we will cover later
- CSS styles can be put into an **external stylesheet** and referenced by many web pages using a `link` tag inside the `head`:

```html
<head>
  <link href="main.css" rel="stylesheet" />
</head>
```

### Unix Wizardry

- an operating system is always running many tasks at once, these tasks are called **processes**. Each **process** has unique things like a `pid` (process identifier), a `ppid` (parent process identifier), and an _environment_.
- you can inspect the running processes by using the command `ps` (process status)

### Javascript

- javascript (js) **arrays** are like lists of things -- they can contain items of any type, and can be any length, they are _created_ by using _square bracket notation_:

```js
let myArray = [1, 2, 3];
```

- arrays can have any types within them, even other arrays:

```js
let myArray = [1, true, null, "hello!", [3, 4]];
```

- items in an array are **accessed** using **square bracket notation**, specifying the _numeric index_ of the item you want, and the indexes **start at `0`**

```js
let myArray = [1, false, "bob"];
console.log(myArray[0]); // prints `1`
console.log(myArray[1]); // prints `false`
console.log(myArray[2]); // prints `"bob"`
```

- javascript **objects** are like a list of labeled _things_ -- like drawers with labels. The labels are called "property names" or "properties" and the things in the drawer are the _values_. You create them with curly braces like so:

```js
let myObject = {
  name: "Jared",
  age: 40,
  hasBeard: true,
  kidsAges: [13, 12, 9, 6],
};
```

- items in a js object can be **accessed** using **dot notation**:

```js
let myObject = {
  day: "Tuesday",
  temp: 31,
};
console.log(myObject.day); // prints `"Tuesday"`
console.log(myObject.temp); // prints `31`
```

- **functions** in javascript are like little _mini-programs_. They are declared like this:

```js
let mySweetFunction = function() {
  console.log("I am a function. Beep boop. 🤖");
};
```

- once a function is **declared** it won't do anything unless you **invoke** (use) it. You invoke a function in javascript by adding parenthases after the function variable name:

```js
mySweetFunction(); // logs out `I am a function ...`
```

- functions can take _zero or more_ **arguments**, which are variables or values _passed into the the body of the function_. This function takes _two arguments_, `a` and `b`:

```js
let adder = function(a, b) {
  console.log("Sum is: ", a + b);
};
adder(2, 3); // logs out `Sum is: 5`
```

### Node.js

- `node` gives you some access to the computer **process** through the `process` variable:

```js
process.pid;
process.ppid;
process.title;
process.env;
```

- the `process` variable is an _object_ with a property called `stdout` (standard out) which is a _function_ you can use to _write to stdout_ like so:

```js
process.stdout.write("barf me to standard out please");
```

- when you _execute_ a node.js program and pass _arguments_ from the command line, these are available to javascript as an _array_ on the `process` object called `process.argv`. So if execute a `*.js` script with extra arguments, like this:

```sh
$ node my-script.js foo bar
```

```js
// inside `my-script.js` I can access them like this:
console.log(process.argv); // logs `["node", "my-script.js", "foo", "bar"]
console.log(process.argv[2]); // logs `"foo"`
console.log(process.argv[3]); // logs `"bar"`
```

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [Regexr](https://regexr.com/) -- Regular expression playground
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #13](https://htc-viewer.netlify.com/?id=l26oaHV7D40)

---

## Homework Plan:

_Note: we won't be meeting Dec 21, so you can spread this out for 2 weeks_

- 1 day creating new flash cards
- 2 days reviewing all flash cards
- 1 day `vimtutor`
- 2 day javascript practice
- 2 days touch-typing practice
- 2 days Web practice
- 2 day watch [CCCS #13](https://htc-viewer.netlify.com/?id=l26oaHV7D40)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] `vimtutor` -- everything

### Homework day 2

- [ ] watch [CCCS #13](https://htc-viewer.netlify.com/?id=l26oaHV7D40)
- [ ] touch-typing practice
- [ ] Web homework #1

### Homework day 3

- [ ] review all flash cards
- [ ] Javascript Practice #1

### Homework day 4

- [ ] watch [CCCS #13](https://htc-viewer.netlify.com/?id=l26oaHV7D40)
- [ ] Web Homework #2

### Homework day 5

- [ ] touch-typing practice
- [ ] Javascript Practice #2

---

## Flashcard Assignment

- review your current stack of flashcards
- make one new `SHELL` flashcard for the command `ps`
- make 3 new `VIM` flashcards for `:split <filename>` and `:vsplit <filename>` and `<CTRL-w><CTRL-w>`
- make 3 new `CSS` flashcards for:
  - `display: inline-block`
  - `float: left` or `float: right` or `float: none`
  - `clear: left` or `clear: right` or `clear: both`
- make 2 new `NODEJS` cards for:
  - `process.argv`
  - `process.stdout.write()`

---

## Web Homework #1

---

- make sure you've done the complete `vimtutor` from this weeks homework _first_
- carefully read and review the `Vim` and `CSS` sections of "New Stuff" above ^
- `ssh` into your home dir and `cd` down into your `www` dir
- use `cp` and the correct flag to _recursively_ copy the entire `week13` directory, making a new directory called `week14`. (hint: not sure how? read up in `man cp`)
- `cd` down into your new `week14` dir and use `vim` to open the `animals.html` file
- move your cursor just _below_ the opening `<style>` tag and enter _visual line_ mode by pressing `<SHIFT-v>`, then press `j` until _all of your CSS rule-sets_ are highlighted
- now the command `:w styles.css` (you'll see a `'<,'>` thing indicating you're in visual line mode) -- this will make a _new file_ in your current directory called `styles.css` containing your highlighted text
- now type `:split styles.css` and it should bring up a new section in vim showing you the new file you created
- _(if you're lost or something went wrong in the last three steps, exit out of vim, and open up `vimtutor` -- skip to section 5.2, and then practice sections 5.2 and 5.3 until you feel more comfortable)_
- with both of your sections open, practice using `<CTRL-w><CTRL-w>` to bounce back and forth between sections
- in the `animals.html` file, use _visual line_ mode again (enter into that mode by `<SHIFT-V>`) to select the _entire `<style>` tag_ and then delete it with the `d` operator
- now, inside the `<head>` tag, add a `<link>` tag (for exact syntax see "New Stuff" above ^) linking to your _external stylesheet_ `styles.css`
- save your `animals.html` and view it in a browser to make sure looks the same as it did before. If the page looks white and unstyled, something is probably wrong with your `<link>` tag
- next, pick one of your animal _chunks_ to delete - and delete it by first selecting the whole chunck with _visual line_ mode, and then pressing `d`
- next, pick one more of your animals to delete, and this time delete the whole chunk using `dat` -- if your first attempt doesn't work, just use the `u` key to undo and try again, it matters _where_ your cursor is when you're doing things like `dat`
- you should have two animals left now, for each one _convert the lists_ into a single `<p>` tag containing just all of the text from all 5 facts. See if you can use some of your vim skills to make this task a little faster.
- next, move the `img` tag so that it is _inside_ the first `p` tag that you just made, for both animals
- over in your `styles.css` file, re-style the images so that one is floated left, and the other right, and that they are small enough for the text to wrap around them nicely. You might want to increase the font-size of the paragraph text as well
- now, tweak the size of the image and the font-sizes on the page until you get it to the point where the _second_ paragraph tag from each chunk is partially flowing _around_ the image, and partially below it
- finally, apply some css to the _second_ paragraph to make sure it is _entirely_ below the floated image, and not at all wrapping around it. Do this for both animals.

---

### Web Homework #2

---

- **NOTE: read through ALL the directions in this section before starting**
- pick 3 of your favorite flashcards that you've made so far for HTC
- `ssh` into your home dir
- in **one** command, from your home dir, make a new directory called `flashcards` _inside_ your `www` dir, with another directory inside of that called `v1`
- in one command `cd` down into the `v1` dir you created above
- in this directory, you're going to make a crude, mini _website_. Instead of telling you exactly what steps to do to build this, I'm going to give you some basic requirements of what you'll need to have when you're done, see below:
- when you're done:
  - you will have 6 `<something>.html` files, each having a `<link>` tag to a shared external `CSS` stylesheet
  - 3 of the html pages will contain the _fronts_ of your "flashcards"
  - 3 of the html pages will contain the _backs_ (or "answers" sort-of) of your "flashcards"
  - the pages should have a non-white background, and there should be an HTML element styled to look sort of like a flashcard -- white and rectangular
  - each flashcard "front" and "back" should have the "category" displayed somewhere (by category I mean like `REGEX` or `VIM` or `HTML`, like on your real flashcards)
  - the pages should link to each other sequentially, so that you can post in Slack the URL to the first card "front", and I should be able to click to see the answer page, then click from there to see the next "front", and so on.
  - there should be no `<style>` tags or _inline style attributes_ -- all CSS must go in a single external stylesheet
  - any part of the flashcard fronts or backs that is _code_ or _code-like_ should be marked-up and styled so that it _sort of_ looks like the red/grey inline code blocks on this homework page, like this one: `foo bar baz`
  - the last card "back" should have a celebratory message and a picture of an animal, plus a link back to the beginning card "front"
- I would highly recommend starting with **just one html** file and your external stylesheet. Make a single card "front" and get it looking the way you want it. Then you can just `cp` that file 5 times and make small adjustments to the copied file, changing the card contents and linking them together.
- post the link to your first card "front" in slack so we can see and test our knowledge against your flashcards!

---

### JS Homework #1

---

- carefully review the `Javascript` and `Nodejs` sections of "New Stuff" above ^^
- `ssh` into your home dir, make a new dir called `node`, cd down into that, and make a new dir called `week14`, then `cd` into that
- make a new file with vim called `array.js`
- in that file, type three lines of javascript declaring 3 variables named `strings`, `numbers` and `booleans` -- each should be an array containing 3 or more values of the type indicated by the name, so for instance, for `strings` you could do:

```js
let strings = ["goat", "banjo", "rodeo"];
```

- on lines `4-6` use `console.log()` to log out each of the three variables you just made
- save, close, and execute the file by typing in the shell: `node array.js` -- you should see the three arrays you made logged out.
- open the file again in vim and this time, make a new variable called `arrayOfArrays` -- and make it an array _containing_ the three arrays you alread made. You don't have to re-type the whole arrays, just use the _variable names_ in the new array.
- add a `console.log()` statement to log out your new `arrayOfArrays` mega-array.
- save, close, and execute the file to see your big new array logged out in the shell
- edit the file again, and delete all of the `console.log` statements, leaving just the variable declarations, there should be 4 lines of code when you're done deleting.
- next, add three new lines of `console.log()` statements, but in these, use _square bracket notation_ to log out the _first_ item of `strings`, the _second_ item of `numbers`, and the _third_ item of `booleans`.
- **Extra credit: ✨** add three more lines of `console.log` accessing the _same_ values, but access them _within_ the `arrayOfArrays` variable
- save, close, and execute in the shell. if you get errors, fix them until it logs out what you expect
- next make a new file called `object.js`
- in `object.js` declare a variable called `myObject` that is an object containing 6 properties - you can name them whatever you want, but each one should contain a _value_ of a different type, including: `number`, `string`, `boolean`, `null`, `undefined`, and `array`.
- add a line to `console.log()` out your `myObject` variable
- save, close, and execute the script from the shell
- edit the `object.js` file again and remove the console.log, but add 5 more lines logging out _each property one at a time using dot notation_ (vim's `yyp` is your friend here to make it faster)
- save, close, and execute the file in the shell, it should log out what you expected
- edit the `object.js` file again, and position your cursor on the first character of the first `console.log` line. Use the vim command `ct(` to change `console.log` to `process.stdout.write`
- next, move down a line and use the `.` command to repeat the last change -- note it will only work correctly if your cursor is on the beginning `c` character
- make sure you understand why `ct(` worked, you should be able to express in english what it means -- if you don't know why it worked, ask me in Slack.
- save, close, and execute the file from the shell -- you should get an error message. Try reading the error message to see what you think it means before continuing.
- edit the file again and fix the error -- the error is caused because `process.stdout.write` _only_ takes strings, so to fix it, wrap the values you're writing in a special function called `String()` that converts values to strings, so for instance like this:

```js
process.stdout.write(String(myObject.foo));
```

- save, close and execute the file -- you should have no errors, but you'll notice that all of the values got globbed together on one line -- `process.stdout.write` does not add newlines like `console.log()` does
- edit the `object.js` file again, and add 3 new lines to put newlines between each of your `process.stdout.write()` calls -- pass the string `"\n"` in -- that's the "newline" character in js (and most programming languages)
- save, close, and execute the file -- it should look like it did back when we were using `console.log()`
- make a new file called `process.js` - in it, `console.log()` out 3 things:
  - the process id
  - the process parent id
  - the process title
  - **Extra credit: ✨** figure out one or two of the property names of the process's environment `process.env` and log those out too`
- save, close and execute -- you should see values that make sense and no errors
- edit the `process.js` file again, and this time add an additional log statement, where you log out `process.argv`
- save, close, and execute the file -- do you understand what the `process.argv` is?
- try executing the file with random arguments, like `node process.js foo bar 1 3 hello`
- based on what you learned above, and what you know about _array square bracket notation_ for accessing array items, change `process.js` so that when you execute it by typing `node process.js WOW` you log out just the string `WOW`

---

### Javascript Homework #2

---

- `ssh` into your home dir, and `cd` into the `node/week14` dir
- with vim, create and edit a new file called `fns.js`
- in that file create a new function that takes no arguments, but logs out the string: `My name is <yourname>.` but use your own name.
- below the function declaration, _invoke_ the function 3 times in a row
- save, close, and execute the file -- it should look like this:

```sh
$ node fns.js
My name is Tabitha.
My name is Tabitha.
My name is Tabitha.
```

- edit the file again, and change the function so that it takes _one argument_ called `name`, then change the three invocations so that you pass in three names: `"Shadrach"`, `"Meshach"`, and `"Abednego"`
- save, close, and execute the file -- it should look like this:

```sh
$ node fns.js
My name is Shadrach.
My name is Meshach.
My name is Abednego.
```

- make a new file called `greeting.js`, in it make a function called `greet` that takes no arguments, but rather reads a single argument from `process.argv` and displays a greeting message that says, `Hi there <somename>, glad to see you!`. If you've done it write you should be able to invoke it from the shell with different names and get different outputs, like this:

```sh
$ node greeting.js Bob
Hi there Bob, glad to see you!
$ node greeting.js Leo
Hi there Leo, glad to see you!
```

- finally, make a new file called `multiplier.js` -- write javascript in it such that you can execute it from the shell with **3 arguments** - one string and two numbers, and it should work like this (see hints below for help):

```sh
$ node multipler.js Betty 3 4
Hola Betty! 3 times 4 is 12.
$ node multipler.js Sally 5 10
Hola Betty! 5 times 10 is 50.
```

- hints for last problem:
  - the `*` operator does multiplication in javascript, not `x`
  - if you need to turn a string into a number, use the `Number()` function: `Number(someString)`
  - you'll need to use `process.argv` and square bracket notation to pull the right arguments from the user
- **Extra Credit:✨**: edit the code in `multiplier.js` so that you have a function that only does the muliplication, then use that function when displaying the result (hint: you'll need to use the `return` keyword)
