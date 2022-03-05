---
path: "/week-16"
---

# Week 16 Homework 💻 🐋

_New stuff we learned this week:_ 🤔

### Vim

- don't mash on the `h` and `l` keys! instead, use:
  - `w` to move to the _beginning of the next word_
  - `b` to move to the _beginning of the previous word_
  - `e` to move to the _end of the current word_
- the combination `ea` is super handy, it allows you to add to the word under your cursor
- the combination `bi` is like the opposite of `ea` -- it allows you to add to the beginning of the word under your cursor
- `cc` allows you to change the whole line, no matter where you are in the line (thanks Tabitha! 👏)
- if you have a _really long line that wraps onto multiple visual line_ you can move up and down by **visual lines** instead of real lines by doing `gk` and `gj` instead of `k` and `j`
- remember, the _fastest way to get around in vim_ is using the `/` search functionality -- try to get in the habit of doing it more!

### Shell/Unix Wizardry 🧙‍♂️

- passing `-` to `cd` like `cd -` takes you **back to the last directory you were in**
- the unix command `whoami` shows you who you are
- the unix command `groups` should you what groups you are in
- there are a **set of invisible bits** on each file and directory called the **file mode bits** or sometimes _Access Control List_ (ACL) -- these bits control **who is allowed to do what with a file/dir**
- each file controls three _special powers_: **read, write,** and **execute** (abbreviated `r`, `w`, and `x`)
- the special powers are granted to three different types of users: _**u**ser_, _**g**roup_, and _**o**ther_
- you can use the `-l` flag for the `ls` command to see the file mode bits: `ls -l`
- `ls -l` shows the file mode bits from left to right: User, then Group, then Others, like this: `-rwxrwxrwx`
- for a _directory_ `ls -l` shows a `d` first, like `drwxr--r--`
- to change file mode bits (permissions) - you use the `chmod` command, like this `chmod <changes> my-file.txt`
- the changes you apply (`<changes>` above ^) - are in the form of:
  - first, **who** you are making changes for, either `u`, `g`, or `o` (or `a` is a shortcut for `ALL`)
  - second, whether you are **setting** the full permissions (`=`), or **adding** (`+`) or **removing** (`-`)
  - third, which permissions, (example: `rwx` or `r`, or `wx`)
- here are some examples:

```bash
$ chmod u+x myfile # add execute permission for user
$ chmod g-w myfile # remove write permission for group
$ chmod o=rw- myfile # set perms to read/write for others
$ chmod a-w myfile # remove write permision for ALL
$ chmod u+x,g-w,o=rw- myfile # combine lines 1-3 in one cmd
```

### Javascript

- use **intermediate variables** to make things _way easier to understand_:

```js
// 🤔 argh! what!?? -- so many parentheses!!
console.log(add(3, multiply(2, 2)));

// 😇 below is SO much easier to understand!
let multiplied = multiply(2, 2);
let sum = add(3, multiplied);
console.log(sum);
```

- in a function **nothing executes after the** `return` **statement**

```js
let add = function(x, y) {
  return x + y;
  console.log("#goatbanjorodeo"); // 💔 will NEVER execute
};
```

- `setTimeout` is a function (available in `node` and the browser) that will **run a function after a given number of milleseconds**:

```js
// runs `mysweetFunction` after 1 second
setTimeout(mySweetFunction, 1000);
```

- you can run javascript in the browser by placing code between `<script></script>` tags

```HTML
<script>
  console.log('Javascript in the Browser?');
  console.log('What a time to be alive.');
</script>
```

- the `alert` function (only available in the browser, not node) makes a _horrible annoying pop up_ that you have to click, but it's fun!

```js
alert("Don't do this in a real website");
```

- the browser turns your HTML into a _graph of object nodes_ called the **Document Object Model (DOM)**
- javascript may politely ask for (query) one of those nodes by using `document.querySelector()` -- you pass a **CSS selector** to it, like so:

```js
// grab an element by the tag NAME, like `body`
let bodyNode = document.querySelector("body");

// grab an element by it's ID
let myRadDiv = document.querySelector("#my-rad-div");

// grab one or more elements by CLASS
let horses = document.querySelector(".horse");
```

- once you have a node from the DOM, you can change it's style attribute with javascript:

```js
let body = document.querySelector("body");
body.style.backgroundColor = "papayawhip";
```

- NOTE: css styles in javascript are **camel-cased** 🐪
- you can also **change HTML** with javascript by _setting_ the `innerHTML` property of a DOM element:

```js
let body = document.querySelector("body");
body.innerHTML = "<h1>Brendan Eich is cool!</h1>";
```

- you can also **run a function when an element is clicked** by _setting_ the `onclick` property of a DOM element:

```js
let greet = function() {
  alert("Howdy! 👋");
};

let body = document.querySelector("body");
body.onclick = greet;
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #14](https://htc-viewer.netlify.com/?id=DuDz6B4cqVc)

---

## Homework Plan:

- 1 day creating new flash cards
- 1 day reviewing all flash cards
- 1 day `vim` practice (see below)
- 2 day Unix practice
- 2 days touch-typing practice
- 2 days Web practice
- 2 day watch [CCCS #14](https://htc-viewer.netlify.com/?id=DuDz6B4cqVc)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] `vim` practice

### Homework day 2

- [ ] watch [CCCS #14](https://htc-viewer.netlify.com/?id=DuDz6B4cqVc)
- [ ] touch-typing practice
- [ ] Web practice #1

### Homework day 3

- [ ] touch-typing practice
- [ ] Unix practice

### Homework day 4

- [ ] watch [CCCS #14](https://htc-viewer.netlify.com/?id=rL8X2mlNHPM)
- [ ] Web practice #2

---

## Flashcard Assignment

- review your current stack of flashcards
- make 4 new `SHELL` cards:
  - `whoami`
  - `groups`
  - `chmod`
  - `cd -`
- make 5 new `vim` cards:
  - `ea`
  - `bi`
  - `cc`
  - `gj`
  - `gk`
- make 3 new `JS` cards:
  - `alert()`
  - `setTimeout()`
  - `document.querySelector()`

---

## Vim Homework

- be sure you've done your flashcard assignment _first_.
- carefully review the `vim` section of "New Stuff"
- separate out your `vim` flashcards into one pile
- `ssh` into your home dir and open up `vimtutor`
- instead of doing vimtutor, carefully and deliberately practice every flashcard, especially focusing on ones you never remember to use when you're actually coding
- when you're done practicing every card, spend 2-3 minutes practicing searching with `/` and using the `n` and `N` keys to jump back and forth

---

## Unix Homework

---

- slowly and carefuly review the Unix section of "New Stuff"
- `ssh` into your home dir
- copy into your home dir the file `/camel-case.sh`
- open your copy of the file with `vim` and follow the instructions inside
- next, inside your home dir, create a new directory called `permissions` and move into it
- in a single unix command, create three blank empty files called `one`, `two`, and `three`
- modify the file `one` using `chmod` so that the _user_ can read, write, and execute, but the group and world cannot do anything
- type `ls -l` -- the `one` file should show permissions as `-rwx------` - if it doesn't, repeat the step above
- in a single command revoke ALL permissions for the `two` file, so that it is `----------`
- repeat the last step for `three` but this time use the `a` shortcut -- which affects the user, group, and others
- **add** the execute privelege for the _group_ for the file `two`
- **add** the read privelege for _others_ for the file `two`
- **add** the read, write, and execute privelege for the _user_, also for the file `two`
- if you `ls -l two` you should see the permissions `-rwx--xr--`
- next, **remove** the _execute_ privelege for the _group_
- for the file `three` **set** the priveleges of the _user_ to `rwx`
- if you saw a file with the permissions `-rwxrw-r--` answer out loud to yourself these questions:
  - does the user have execute permission?
  - what can the group do?
  - what can everybody else do?
  - is it a file or a directory?
- **Extra Credit ✨**: make a new directory called `grid`, move into it, and create 5 files, then change their permissions using `chmod` until `ls -l` gives you this same cool pattern:

```bash
-rwxrwxrwx
-r---w---x
-rwxrwxrwx
-r---w---x
-rwxrwxrwx
```

---

## Web #1

---

- slowly and carefully review the whole **Javascript** portion of "New Stuff" -- make sure you understand each code sample -- ask questions in slack if anything doesn't make sense
- `ssh` into your home dir, then into your `www` dir, and make a new `week16` dir and move into it
- from the `week16` dir, using `ls` and _relative paths_ hunt around in the root directory, or you in your own `www` directory until you can find an image file of an animal
- copy the animal image you found into your current working directory
- create a file called `wow.html` with vim, and _from scratch_ make it a valid HTML document (hint, the first line should be `<!DOCTYPE html>`)
- inside the `<body>` tag, add a `<h1>` tag with some text, then a `<p>` tag with some text, then an `<img>` tag referencing the image you copied in step 3, then after the image tag, add an _ordered_ list with at least 3 items.
- save your file, and view it in a browser
- next, right _below_ the closing `</body>` tag, insert `<script>` and `</script>` tags, so you can write javascript inside them
- add a `console.log()` statement with some text inside your script tags, save, and view it in the browser -- do you remember how to see the console log statements?
- next, delete the `console.log` line and add a line of javascript so that a horrible annoying pop-up shows up that says "hello there!" -- save and check that it works in the browser
- next, write some javascript to get access to the `<h1>` element node, and change the color of the text to blue or some random color -- save and check that it works in the browser
- next, write a function called `makePretty` that turns the background color of the `p` tag into some cool color you like, but instead of invoking this function, pass it to `setTimeout` so that it runs after _1 second_.
- make a new function (call it whatever you want) that changes the HTML of the `h1` tag to `Changed by <code>JS</code>` -- then make it so that when the `h1` is _clicked_ that function is run. Save and check your in the browser to make sure it works.
- write some more javascript so that if you click the unordered list, it dissappears (hint: in css you would do this with `display: none;` -- replicate that in javascript)
- **Extra Credit: ✨** make it so that if you click the image of the animal, these 6 things happen:
  - the image is "set free" to no longer be in the flow of the document, but instead to overlay the other elements
  - 1 second after he is "set free" he should move to the upper right corner of the window
  - 2 seconds after he is "set free" he should move to the lower right corner of the window
  - 3 seconds after he is "set free" he should move to the lower left corner of the window
  - 4 seconds after he is "set free" pop up a message that says "thanks for setting me free, but I'm homesick"
  - after the pop up is closed, he should go back to where he came from, back in the flow of the document
  - (HINT: you'll want to make 5 or 6 named functions to pull this off, things like `setFree` and `moveToUpperRight` -- and probably one function called `clickAnimal` that runs when clicked and uses `setTimeout` and the other named functions you made)
  - (HINT 2: for absolute positioning, you'll want to set the two sides that are _not_ `0` to `"auto"` to make it work properly)

---

## Web #2

---

- `ssh` into your home dir, then down into `www/week16`
- make two nested dirs (in one command) so that you have `www/week/16/flashcards/v2`
- cd down into the `v2` directory
- from the `v2` directory, copy all of the files from your flashcards v1 website from 2 weeks ago -- copy them into your current directory `v2`
- view the flashcards website from the new directory -- for now, it will be exactly the same as what you made in week 14
- next, delete the 3 html files that were the "answers" (or "backs") of the flashcards
- next, work on the website until all of these things are true:
  - when I view each card "front" i should be able to click the card front, and when I click it, the card should change to show the "back" text instead of the front text
  - each card should link to the next card "front" (since there are no "backs" now)
  - if I sit there and do nothing for 20 seconds, use `alert` pop up a "hint" that gives part of the answer
- **Extra Credit: ✨** add this functionality:
  - after 5 seconds, turn the background of the site yellow
  - after 10 seconds, turn the background of the site orange
  - after 15 seconds, turn the background of the site red
  - after 25 seconds, pop up an alert that says "out of time" and make it so after that, if I click the card, it does NOT show me the answer
