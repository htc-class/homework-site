---
path: "/week-18"
---

# Week 18 Homework 💻 🐷

_New stuff we learned this week:_ 🤔

### Vim

- you can set a **mark** by typing `m` then a letter, like `mm` to set a mark called `m` or `mr` to set a mark named `r`
- immediately jump to a mark you've set by typing a backtick plus the letter of the mark, like `m
- marks with _capital letters_ are **global** -- they allow jumping to a mark across files, like `mM` or `mR`
- the `zz` command (from normal mode) **centers the screen on the line your cursor is on**

### Javascript

- use **LOTS OF WHITESPACE** in your javascript programs to make it easier to understand
- you can make **decisions** in javascript using `if / else if / else` control flow statements:

```js
let name = process.argv[2];

if (name === "jared") {
  console.log("Old guys are cool!");
} else if (name === "willow") {
  console.log("Goat banjo rodeo.");
} else {
  console.log("Good morning,", name);
}
```

- you don't have to have a `else if` or and `else` at all, you can just have an `if`:

```js
if (age > 40) {
  console.log("Wow you are old!");
}
```

- to compare if two things are **equal** in javascript, use 3 equal signs next to each other: `x === 5`
- to test if something is _less than_ or _greater than_ use `x < 5` or `x > 5`
- to test if something is **not equal** use `!==`: `x !== 5`
- here's a summary of testing values:

```js
let x = 5;

x === 5; // `true` - x is EQUAL TO `5`
x !== 7; // `true` - x is NOT EQUAL TO `7`
x < 6; //   `true` - x is LESS THAN `6`
x > 4; //   `true` - x is GREATER THAN `4`
x <= 5; //  `true` - x is LESS THAN OR EQUAL TO `5`
x >= 2; //  `true` - x is GREATER THAN OR EQUAL TO `2`
```

- you can also **test booleans directly** like so:

```js
let student = {
  name: "Bob",
  likesGoats: true,
};

if (student.likesGoats) {
  alert("Goat banjo rodeo!");
}
```

### DOM Scripting & HTML

- just like in CSS you can put your javascript in an **external file** by putting a `src` _attribute_ on an empty `<script>` tag, like so:

```HTML
<script src="./my-rad-code.js"></script>
```

- to **add a new element with javascript** you need to do 3 steps:
  - create a new element `document.createElement(<tag-name>)`
  - make any modifications to the new, empty element
  - "give it a daddy" -- that is, _attach it to a parent node_ `parent.appendChild(newElement)`

```js
// first, create a floating, unattached, empty element
let newParagraph = document.createElement("p");

// second, make any changes to the element you want
newParagraph.innerHTML = "goat banjo <b>rodeo!</b>";

// finally, attach  new element to a parent in the DOM
let body = document.querySelector("body");
body.appendChild(newParagraph);
```

- you can use `Element.setAttribute()` to **set attributes** of DOM elements:

```js
// modify an EXISTING dom element
let myDiv = document.querySelector("div");
myDiv.setAttribute("id", "added-by-js");
```

- `setAttribute` is particularly useful when creating new DOM nodes, like images:

```js
// modify a NEW dom element
let newImg = document.createElement('img'):
newImg.setAttribute('src', './frog.jpg');
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #16](https://htc-viewer.netlify.com/?id=O753uuutqH8)

---

## Homework Plan:

- 1 day creating new flash cards
- 1 days reviewing all flash cards
- 1 day short `vim` practice (see below)
- 1 days node practice
- 2 days touch-typing practice
- 2 days Web practice
- 1 day watch [CCCS #16](https://htc-viewer.netlify.com/?id=O753uuutqH8)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] `vim` practice

### Homework day 2

- [ ] touch-typing practice
- [ ] node Homework #1

### Homework day 3

- [ ] watch [CCCS #16](https://htc-viewer.netlify.com/?id=O753uuutqH8)
- [ ] Web Homework #1

### Homework day 4

- [ ] touch-typing practice
- [ ] Web Homework #2

---

## Flashcard Assignment

- review your current stack of flashcards, but do it UPSIDE DOWN -- that is, look at the backs and guess the fronts
- make 3 new `vim` cards:
  - `zz`
  - `mm` (or whatever makes sense to you how to write setting a mark)
  - `m (or whatever makes sense to you how to write jumping to a mark)
- make 5 new `javascript` cards:
  - `===` testing for equality
  - `!==` testing for inequality
  - `document.createElement()`
  - `element.appendChild()`
  - `element.setAttribute()`

---

## Vim Homework

---

- separate all of your `vim` flashcards
- review each of them, selecting 3 only that you don't use enough, but want to use more
- `ssh` in and spend 3 minutes practicing those 3 commands using `vimtutor`

---

## Node Homework

---

- slowly and carefully review the **Javascript** portion of "New Stuff" above ^.
- **NOTE:** for this homework, remember that arguments coming from `process.argv` are _always strings_. If you want to change a string to a number, use the `Number()` function, `let myNum = Number(someVariable);`
- `ssh` into your home dir, then move down into your `node` dir, and create a new directory called `week18`
- make a new file called `pick-a-number.js` that you can execute from the command line like this:

```bash
$ node pick-a-number.js 7
```

- the code should pull the number from `process.argv` and compare to a number you have pre-selected. If the number matches, then `console.log` out something like `YAY! You guessed my number!`. If it doesn't match, log out something like `No bueno, try again`. So if your number was 3, interacting with the program from the CLI would look like this:

```bash
$ node pick-a-number.js 7
> No bueno, try again.
$ node pick-a-number.js 2
> No bueno, try again.
$ node pick-a-number.js 3
> YAY! You guessed my number!
```

- next, make a new node script called `lower-higher.js` that works the same way as the previous script, except this time, if the guess is _too low_ it logs out `No bueno, too low` and if the guess was _too high_ it logs out `No bueno, too high`, and shows the same success message if they get the number right.

- next, make a new file called `htc-greet.js` so that it can be invoked from the shell like this:

```bash
$ node htc-greet.js jared
```

- the script should look at the argument passed in (in the example above, it would be the string `"jared"`) and make a decision:

  - if the name is `jared`, console.log out `Greetings, wise teacher!`
  - if the name matches any other of the students, it should log out a message which includes their name: `Greetings, fellow student Tabitha!`
  - if the name isn't `jared` or a student's name, log out "Greetings, stranger!"
  - _note: make sure there isn't an extra space after the student's name and before the `!`_

- next, you probably have 5 lines of code that are very similar, to log out the message for each of the 5 students in HTC. Fix this by _extracting out a function_ called `greetStudent` -- it should have one _parameter_ called `name` and it should do the greeting part. When you're done, you'll have 5 lines that call this function, passing in the name, like `greetStudent(name)` -- and the script should work exactly the same as before.

- finally, use `chmod` to make your 3 node scripts executable by anybody, then post that you're done on slack. By making them executable by anybody, I or any of the other students can ssh into your directory and run your scripts. 👍

- **Extra Credit: ✨** copy your `htc-greet.js` file to a new file called `user-greet.js`. It should work exactly the same, except instead of the user passing in a string as an argument, the script should determine the user from the `process` itself. So, if done correctly anyone in HTC should be able to simply type `node user-greet.js` and it would correctly greet them. Be sure to make it executable by others as well. (note: my username is actually `ubuntu` not `jared`)

---

## Web Homework #1

---

- first, carefully and slowly review the _DOM Scripting_ portion of "New Stuff" above ^.
- second, do the `vim` homework first -- it only takes about 3 minutes
- `ssh` into your home dir, then go down into `www` and make a new directory `week18`, cd into that dir
- make a new html file called `dogmeat.html` which works like this:
  - it should have an `<h1>` tag that says `What's for Dinner?`
  - below the `h1` should be an image of a kitten
  - below the kitten, there should be an _empty_ `ul` element with no list items
  - after 1 second, a new list item should appear that reads `dogmeat`
  - after 2 seconds, a new list item should appear that reads `catmeat`
  - after 3 seconds, a new list item should appear that reads `dogmeat`
  - after 4 seconds, a new list item should appear that reads `catmeat`
- next, add some cool CSS styling to the h1, image, and list (do this in a `<style>` tag in the `<head>`)
- save and close your webpage, and type `vimtutor` -- then search forward to `Lesson 5.3` and do just that lesson
- close `vimtutor` and return to `dogmeat.html`
- using visual line mode and the `:w <new-file>` syntax you just practiced, extract your CSS and javascript both into external files
- make 3 global vim marks: `H` (html), `C` (css), and `J` (javascript) -- for each of your three files
- for the rest of the homework, practice using vim _marks_ to jump around inside your file, and back and forth between the `.html`, `.css` and `.js` files with the global marks you made
- edit your javascript file so that when one of the list items that says `dogmeat` is added, it gets a blue background and white text, and make the `catmeat` items have a red background with yellow text (or you can pick the colors, but at least two styles on each).
- save and test in your browser
- next, change your code so that the styling for the dog vs cat items is in the CSS file, not in javascript, using two classes `.dog` and `.cat` -- and change your javascript file so that instead of doing the styling directly on the new element, it _sets an attribute_ -- giving the list item a _class_ of either `dog` or `cat`.
- **Extra Credit ✨:** change your webpage to use `setInterval` and a single function instead of multiple calls to `setTimeout`. After it is changed, the list should keep adding `dogmeat` and `catmeat` list items forever, one per second, including the classes and styling. Also add a bit of text somewhere on the page that says "make it stop" and have it so that if you click that text, it stops adding new list items.
- share you link in Slack!

---

## Web Homework #2

---

- `ssh` into your home dir, then `cd` down into `www/week18`
- make three new files: `mouse.html`, `mouse.css`, and `mouse.js`
- make global marks for each of your 3 files so you can jump around between them easily in vim
- create some basic HTML that:
  - links to your external CSS stylesheet `mouse.css`
  - links to your external javascript file `mouse.js`
  - has a small (width 150px) image of a frog positioned in the upper right of the page
  - has a small (width 150px) image of a goat positioned in the lower right of the page
  - has an `h1` that says `Frog Mouse Events:` and under it an _empty unordered list_
  - below the empty unordered list, add another `h1` that says `Goat Click Events:` with it's own _empty unordered list_ below it.
- I didn't teach you this yet, but just like you can do `element.onclick = <some-function>` -- there are other _events_ you can hook to. Two fun ones are `onmouseenter` and `onmouseleave`, they work the same way `someElement.onmouseenter = someFunction`
- write some javascript so that whenever your mouse "enters" the frog image, a list item is added to the first empty list which says "Frog image entered." and likewise, when the mouse leaves the image, a list item should be created that says "Frog image left". Or, you can make up your own silly text, as long as it's different.
- save and test in the browser.
- next, make it so every time the goat image in the lower right is clicked, two things happen:
  - first, the image should change to another animal
  - second, the last empty unordered list you made should get a new list item that says `Switching to aardwolf` or whatever animal you are switching to
- make it so that if I click the image 4 times, it turns back into the goat image, and the cycle continues
- add some javascript so that after 30 seconds, the entire webpage is replaced by a message that says "this web page has self-destructed, sorry".
- **Extra Credit ✨:** another cool _event_ you can listen to is `onmousemove`. And, when a function that is an event listener (like something you set to `element.onclick` or `element.onmousemove`) is invoked, it actually receives a special object called the _event_ as it's first argument. Set up a listener on the `body` element that is invoked everytime the mouse moves. Figure out what the event object looks like somehow (hint: console.log is your friend). Once you've examined the event argument, make it so that there is a paragraph at the bottom of the web page that is constantly displaying an up-to-date phrase showing the x and y coordinates of your mouse as you move it around the body.
- **Extra Credit ✨:** make a 50px by 50px invisible div and absolutely position it somewhere on the page. Now, make it so that if the user mouses over it, it turns green and _disables the self-distruct feature_ from step 10.
- **Extra Credit ✨:** change how you did the last step so that you don't use the `onmouseenter` or `onmouseleave` events on the div -- instead, use the mouse position from the `body.onmousemove` listener to calculate whether they are over the hidden div.

---
