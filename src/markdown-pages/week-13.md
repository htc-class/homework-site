---
path: "/week-13"
---

# Week 13 Homework 💻 🐥

_New stuff we learned this week:_ 🤔

#### Vim

- `C` is a shortcut for `c$` meaning "change to the end of the line"
- `D` is a shortcut for `d$` meaning "delete to the end of the line"
- the `p` command "put" works differently based on whether you've yanked _lines_ or _characters_. `p` always puts _after_, and `P` always puts \_before

#### Regex

- `\s` stands for _whitespace_ and matches spaces, tabs, and newlines
- `\S` stands for _everything BUT whitespace_ (opposite of `\s`)
- `\D` stands for _everything BUT digits_ (opposite of `\d`)
- `\W` stands for _everything BUT word-ish characters_ (opposite of `\w`)

#### HTML

- HTML does weird things if you don't properly close out elements
- you can check the _correctness_ of your HTML and find common mistakes by typing `validate <myfile>`.
- you can _format_ your HTML files (and find errors) using the command `format <myfile>`
- all HTML elements may have an `id` _attribute_, like `<div id="foo"></div>`
- `id` attributes are supposed to be _totally unique for the page_.
- all HTML elements may have a list of _classes_, separated by spaces, like `<div class="foo bar">`
- _classes_ do not need to be unique on the page
- `id`'s and `class`es allow elements to be _targeted_ by _CSS_ (and javascript) -- think of them like "handles" to grab hold of elements

#### CSS

- HTML pages can be _styled_ using `CSS` - which stands for _Cascading Style Sheets_
- a _Style Sheet_ can be _embedded_ in the `<head>` portion of an HTML page using the `<style></style>` tag
- `CSS` consists of _rule-sets_
- a CSS _rule-set_ is composed of a _selector_, and one or more _declarations_ inside of curly braces.
- CSS _declarations_ are made up of a _property_ and a _value_
- the example below shows a _CSS rule-set_ -- the `h1` is the _selector_ and the `color: red;` is the _declaration_:

```CSS
h1 {
  color: red;
}
```

- in CSS, you can target elements by using their _tag-name_ like the `h1` in the example above
- in CSS you can also target an element by it's `id` using the syntax `#<id>` like `#foo { color: red; }`
- in CSS you can also target an element by it's `class` using the syntax `.<class>` like `.bar { color: red; }`
- you can target multiple things at once by making a _list of **selectors**_ as shown here:

```CSS
h1, h3, #some-id, .my-class {
  color: red;
}
```

#### Javascript

- javascript (js) is an all-purpose programming language created by _Brendan Eich_ that is extremely widely-used primarily because it is _the only programming language that works in web browsers_.
- javascript for many years could only run _inside of a browser_, but that changed when `nodejs` (or just `node`) was created in 2009 by _Ryan Dahl_
- now, javascript is run primarily in the browser, or in _node_.
- a `REPL` is an acronym that stands for "Read Evaluate Print Loop" -- it's like a _playground_ for a programming language. Both the browser and node have one. In the browser, you open the _developer tools_ and go to `console` and in node you just type `node` from the command line.
- in js you can _declare_ a variable by using the `let` keyword: `let x = 42;`
- a _number_ in js is written with plain old digits, like `42`
- a _string_ in js is written as characters wrapped with `"` or `'`, like `'foo'` or `"bar"`
- a _boolean_ in js is written with the two special keywords `true` and `false`
- there is a special primitive type in js called `undefined` which means "not defined" -- it is written with the keyword `undefined`. It is used for sort of "the absence of a value". For instance, if you wrote `let x;` then `x` would have the value of `undefined`.
- there is a special primitive type in js called `null` which means "nothing" and is written with the keyword `null`
- `null` and `undefined` are very similar, but not technically the same
- the `typeof` operator in js evalutes to a _string_ containing the _type_ of whatever comes after it, so: `typeof 42` evaluates to `"number"`
- in js `console.log(<something>)` is basically like _barfing to standard out_.
- in node, javascript can be written in `<filename>.js` files and _executed_ by typing `node <filename>.js`
- here are some examples of declaring javascript variables of different types, plus using the `typeof` operator:

```JS
let myNumber = 42;
let myString = "goat banjo rodeo";
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;
console.log(myString);
console.log(33);
console.log(false);
console.log(typeof myNull);
console.log('I like goats:', myBoolean);
```

## Useful Links:

- [Regexr](https://regexr.com/) -- Regular expression playground
- [RegexOne](https://regexone.com/)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #11](https://htc-viewer.netlify.com/?id=RU1u-js7db8)

---

## Homework Plan:

- 1 day creating new flash cards
- 2 days reviewing all flash cards
- 1 day Regex practice at [RegexOne](https://regexone.com/)
- 1 day javascript practice
- 2 days touch-typing practice
- 2 days Web practice
- 1 day watch [CCCS#11](https://htc-viewer.netlify.com/?id=RU1u-js7db8)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] Web Homework #1

### Homework day 2

- [ ] watch [CCCS#11](https://htc-viewer.netlify.com/?id=RU1u-js7db8)
- [ ] touch-typing practice
- [ ] Regex Practice

### Homework day 3

- [ ] review all flash cards
- [ ] Javascript Practice

### Homework day 4

- [ ] touch-typing practice
- [ ] Web Homework #2

---

## Flashcard Assignment

- review your current stack of flashcards
- make 2 new `VIM` flashcards for `C` and `D`
- make 4 new `REGEX` flashcards for `\s`, `\S`, `\D`, `\W`

---

### Regex Homework

---

- sort out your `REGEX` category flashcards and review them
- complete all of the lessons on [RegexOne](https://regexone.com/) -- try to use the concepts introduced in each lesson to complete the task, and don't do the minimum required to get the "continue" button to turn green, try to fully and perfectly complete each step
- **STOP** at _Lesson X: Infinity and beyond!_ -- do not "continue to Additional Problems"

---

### Web Homework #1

---

- slowly and carefully review the _HTML_, _CSS_, and _Vim_ sections of the "New Stuff Learned this Week" above ^
- `ssh` into your home dir, then `cd` down into the `www` dir
- use `cp` and a flag to make it work _recursively_ to copy the _entire_ `week12/` dir, creating a new directory called `week13` that has all of the same files in it (if you don't know the flag, `man cp`)
- `cd` down into `week13` and edit your `whacky.html` file with `vim`, then _convert all of your inline styles_ to `CSS` by creating a new `<style>...</style>` tag in the `<head>` and moving all of the style _declarations_ from your `style` _attributes_ up into _CSS rule-sets_ in the `<style>` tag. You may have to add a few `id`s and `class`es in order to target the elements you want to style
- view your `week13/whacky.html` file in a browser, and compare it to `week12/whacky.html` -- they should look the same, keep working until they do.
- now, run `validate whacky.html` and fix any errors it reports
- next try running `format whacky.html` -- see if it finds any errors, and check to see if your html/css was re-formatted by the tool
- repeat steps **4** through **7** but this time with your `table.html` file
- edit both your `whacky.html` and `table.html` file and add to each a new CSS rule-set modifying the `body` tag, adding both a `background-color` and some `padding`

---

### Web Homework #2

---

- slowly and carefully review the _HTML_, _CSS_, and _Vim_ sections of the "New Stuff Learned this Week" above ^
- `ssh` into your home dir, then `cd` down into `www/week13`
- without leaving your current directory, use `ls` to look around in the `/www-assets` dir -- you should see two new images -- copy them down into your current directory in _one command_ (remember, `cp` takes a _variable_ number of arguments, so you can do `cp <path1> <path2> <destination-dir>`)
- make a copy of the `boilerplate.html` file, copying it to a new file called `animals.html`
- edit the `animals.html` file, making **4 chunks of html code** one for each type of animal you have a picture for (goat, cat, frog, aardwolf). Each html chunk should contain:
  - an `<div>` wrapping the whole section, or chunk
  - an `<h1>` with the name of the animal
  - an `<img>` tag with the picture of the image
  - a `<ul>` with **5 list items** containing facts (you can make them up) about each animal
  - a `<p>` tag with a sentence or two about whether you like or dislike that animal
- now, create a `<style>` tag in the `<head>` section and write CSS rule-sets for `h1`, `ul`, `img`, and `p` -- each ruleset should be different, and have at least two _declarations_ (a declaration is like `color: red;`)
- next, modify your HTML by adding some `id`s, so that you can add 4 new rule-sets to make each `h1` a different color, then add the css rules to do so
- next, make the background-color of the two chunks showing baby animals (aardwolf and cat) a unique color -- you'll need to add some `class` attributes in order to do this.
- (for this step, try to use `vim`'s `.` to speed up the repetative part) next, add a combination of html `class` attributes and a css rule-set so that _every other_ list item in each list has a background color of `pink` (or some other color) -- so that it has a zebra-striped appearance
- style the `img` tags so that the four images are approximately equal size -- you can use css declarations `width: 200px;` to accomplish this -- you may need to add classes or ids to target what you want
- add any other cool styling effects you want
- run `validate` and `format` commands on your `animals.html` file, fixing anything it points out
- share your link in Slack so we can see your web-page

---

### Javascript Homework

---

- slowly and carefully review the **Javascript** portion of "New Stuff Learned this Week" above ^
- `ssh` into your home dir
- start up the `node` `REPL` by typing `node<enter>`
- try directly typing in a _string_, _number_ and _boolean_ value (meaning, for a _number_ you'd just type `13` and then hit enter) -- the REPL will spit the value back out to you. Notice how the node REPL colorizes and formats different _types_ differently to help you out
- next, declare a variable called `today` that contains a _string_ with the current day of the week
- on a new line, type just the name of the variable `today` and notice that the REPL spits back out the variable's _value_
- next make another variable called `temp` that contains a _number_ with the current temperature (just guess)
- use the `console.log()` to barf out the value of the `temp` variable to standard out
- repeat the last step, but with the variable `today` you created above
- next, make a new _boolean_ variable called `raining` that is either `true` or `false`
- use `console.log()` to barf out `raining` to standard out
- use `console.log()` to barf out the string 'foobar' without creating a variable, just put `'foobar'` directly inside the parens.
- try to `console.log()` two variables at once, separating them with a comma: `,` -- try to do it with the variables `today` _AND_ `temp`
- `console.log()` is _variadic_ (like `cp`!) -- you can pass it any number of values, not just 2. Knowing this, try to pass`console.log()`a set of variables and strings (separated by commas) so that it barfs out`Today is Thursday and the temperature is 33 and it is raining: false` -- except it should use the three variables you made above
- we didn't cover this in class, but the `typeof` keyword in javascript evaluates the _type_ of whatever comes after it. Experiment with it by typing `typeof 32` and `typeof 'foobar'` into the REPL
- for your 3 variables you created above, use the `typeof` keyword to have the REPL show you the type of each
- now, make a new variable called `myNull` and set it's value to `null`
- type `typeof null` -- are you surprised by what the REPL spits back? Make a mental note...
- make 3 new variables: `x`, `y`, and `z` with the values of 3, 4, and 5
- try some basic math with these new variables, like `x + 3` and `y / 2`
- another operator in javascript is `===` -- it is used to _test equality_ -- whether two things are equal to each other. Try it out by typing `x === y`.
- what _type_ did the last step return? Does that make sense to you? Verify your answer by typing `typeof x = y`
- **Extra Credit** ✨ -- see if you can verify the _pythagorean theorem_, which says that for a right triangle or something, x squared plus y squared equals z squared where z is the hypoteneuse. if you do it right, the REPL should spit back `true`. (hint you'll need to use `===` and the multiplication operator, which is `*`)
- quit the node REPL by typing `.exit` or CTRL-C twice
- create a new file called `me.js` using `vim`
- use what you learned above to write 3 lines of code declaring 3 variables:
  - `name` should be a string with your name
  - `age` should be number with your age
  - `likesGoats` should be a boolean
- then on lines 3-6 write a single call to `console.log()` on each line, passing TWO values (separated by a comma) to each call. Write them so that when you later execute (run) the program, you will see 3 lines of text spit out like this: `My name is Harriet`, `I am 12 years old`, and `I like goats: true`.
- when you think you're done, save the file and close
- run or execute the file by typing `node me.js` -- if there are any errors try to understand what the error messages mean and fix them on your own, if possible
- if you can't get the errors figured out, try typing `format me.js` and see if you get some more help from that command
- still stuck? send a slack
- keep fixing and tweaking until your program spits out the correct three lines of text
