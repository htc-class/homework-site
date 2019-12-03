---
path: "/week-12"
---

# Week 12 Homework 💻 🐝

_New stuff we learned this week:_ 🤔

#### Vim

- to move quickly within a line, use `f<char>` or `t<char>`
- to move quickly anywhere in the file, search is your friend: `/<search><ENTER>`
- the `{` and `}` keys move backwards and forwards by _paragraph_.
- remember `.` _repeats_ the last edit you made -- use it for great good

#### Regex

- `\b` means _word boundary_, and matches beginning/end of lines, spaces, tabs -- basically everything that you untuitively think marks the beginning or end of a _word_.
- `\w` is a special token that means _a word-like character_. Technically it's alphanumeric plus underscore. It's exactly equivalent to writing out the _character set_ `[A-Za-z0-9_]`
- a `?` character that is _directly after a_ `*` or `+` quantifier makes it _LAZY_ -- it will no longer match as many characters as possible, it will rather stop _as soon as possible_.

#### HTML

- a `<div>` tag is a _generic, block-level element_ -- think of it like a bucket to put other tags in
- a `<span>` is a _generic, inline element_ -- think of it like a way to wrap a tight box around a bit of text
- an HTML `<table>` tag is used to represent _tabular data_. `<tr>` is for a _row_ and `<td>` is for a _cell_. A simple table markup is as follows:

```HTML
<table>
  <tr>
    <td>Name:</td>
    <td>Age:</td>
  </tr>
  <tr>
    <td>Jared</td>
    <td>40</td>
  </tr>
</table>
```

#### Styling web-pages

- you can apply _styling_ to an HTML element by using a special _attribute_ called `style`, like this: `<div style="color: red">`
- multiple styles can be added to a single element by _separating them with a *semicolon*_ `<div style="color: red; margin: 1em">`
- html elements have a `display` property that controls how they are drawn on the page. `block` elements (`display: block`) take up their own line and use the full width of their parent element. `inline` elements (`display: inline`) hug tight around the text inside them, and don't make their own line.
- two useful _units_ are `px` (pixels) and `em` (width of an `M` char).
- every element on a webpage creates a _box_ and the box can have _padding_ surrounded by a _border_ which is surrounded by _margin_. Together this is called the _BOX MODEL_.
- _colors_ can be specified in several ways, the easiest is with _color keywords_ like `red`, `green`, `salmon`. For a list, [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table).
- `background-color` controls the, um..., _background color_, example: `background-color: rebeccapurple`
- `padding` adds _space between_ an element and it's (optional) border, example: `padding: 20px` or `padding: 2em`
- `margin` adds _space around_ an element, example: `margin: 15px` or `margin: 1em`
- _borders_ can be added by specifying _3 properties_:
  - `border-width` -- example `border-width: 10px`
  - `border-color` -- example `border-color: papayawhip`
  - `border-style` -- example `border-style: solid` (or: `dashed`, `groove`, `inset`, [and more...](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style))
- `color` controls the _text color_ -- it's horribly named, just memorize it, example: `color: red`
- `font-size` controls the _font size_, example: `font-size: 20000px`
- `font-family` controls what we normally call the _font_. It takes a _list_ of font-families in order of preference. The browser will use the first one installed on the users system. Example: `font-family: BizarroLOL, Nope, Georgia, Times, serif`

---

## Useful Links:

- [Regexr](https://regexr.com/) -- Regular expression playground
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [CCCS #10](https://htc-viewer.netlify.com/?id=nwDq4adJwzM)

---

## Homework Plan:

- 1 day creating new flash cards
- 2 days reviewing all flash cards
- 2 days CLI practice
- 2 days touch-typing practice
- 2 days Web practice
- 1 day watch [CCCS#10](https://htc-viewer.netlify.com/?id=nwDq4adJwzM)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] CLI Homework #1

### Homework day 1

- [ ] watch [CCCS#10](https://htc-viewer.netlify.com/?id=nwDq4adJwzM)
- [ ] touch-typing practice
- [ ] Web Homework #1

### Homework day 1

- [ ] review all flash cards
- [ ] CLI Homework #2

### Homework day 1

- [ ] touch-typing practice
- [ ] Web Homework #2

---

## Flashcard Assignment

- review your current stack of flashcards
- make 2 new `VIM` flashcards for `{` and `}`
- add 3 new `REGEX` flashcards for the 3 new _regex_ concepts we learned this week
- add 5 new `HTML` flashcards for the 5 new _tags_ we learned: `<div>`, `<span>`, `<table>`, `<tr>`, `<td>`
- make 9 new flashcards labeled `CSS` (don't worry about what that means yet) for these styling concepts:
  - `color`
  - `font-size`
  - `font-family`
  - `margin`
  - `padding`
  - `border-style`, `border-width`, `border-color` (one card for all three is good)
  - `background-color`
  - `em` (the _unit_)
  - `px` (the _unit_)

---

### CLI Homework #1

---

- `ssh` into your home dir and make a new `week12/` dir, then `cd` down into it
- copy the file from `/regex/ishmael.txt` into the `week12/` dir
- `cat` out the file so you can see what's in it
- _note, if you're having trouble with any of these steps, try using [regexr.com](https://regexr.com)_
- pipe the file into `perl` (`perl -pe 's/<search>/<replace>/<flags>'`) with a regex that changes _every word_ that begins with a lowercase `w` into the word `WOMBAT`. Use the `\b` flag we learned this week at least (you might want to use _all 3_ new concepts). There should be _**5** WOMBATS_ in the text after your replacement.
- write a new regular expression that _removes everything after the first word_ on each line
- **Extra Credit:** ✨ write a new regex that _removes everything after the SECOND word_ on each line
- write a new regular expression that _changes every 3-letter word_ to `<3>`
- write a new regex that changes every _capitalized word that is at least two letters long_ into `###` -- if you did it right, you should have **SIX** `###` on your screen
- change your regex from the last step so that the `###` is _prepended_ with the capital letter that started the word, so for instance, the text should start with `C### me I###.` and so forth...
- **Extra Credit:** ✨ write a regex so that every capitalized word at least two letters long _has it's initial capital letter moved to the end of the word_. So the text should start: `allC me shmaelI. omeS`, etc.
- write a new regex that changes all the occurrences of the word `I` to `ME` -- but be sure to _avoid_ changing the beginning of words like `It` and `Ishamel`.
- write a new regex that changes all words that are _at least 9 characters long_ into: `BIGSCARYWORD` -- there should be **4** of them.
- write a new regex that _removes all of the punctuation marks_ in the text.

---

### CLI Homework #2

---

- `ssh` into your home dir, then `cd` into the `week12/` dir
- type a command to barf to standard out the full path to the directory you're currently in
- redirect the output of the command from step 2 into a new file called `here.txt`
- make a new empty file (without vim) called `names.txt`
- use three commands (without `vim`, instead combine `echo` and the redirect which _appends_) to add 3 new lines to `names.txt` containing your first, middle and last name - be sure to capitalize the first letter of each
- `cat` out your `names.txt` file and pipe it to `perl` with a regex that removes _every letter EXCEPT the capital letters at the beginning of your name_.
- repeat step 6, but this time, redirect the output into a file called `initials.txt`
- in one command, make a directory called `sweet` inside of the `week12` dir, and another inside of that called `path` -- all in one command
- change directories down into the `path/` folder you just made
- from the `path/` dir, use `cat` and a _relative_ path to see the contents of the `here.txt` file you made in step 3.
- print out your current working directory
- repeat the last step, but this time **append** the output of the last command to the `here.txt` that you made in step 3 (hint: you'll need to use a _redirect_ and the relative path up to where that file is)
- repeat step 10 -- there should be two lines in the file now, with two different paths
- make a new file in the `path/` dir (where you currently are) using `vim` -- give it 3 short lines. Save it as `horse.txt`
- use `cd` and an _ABSOLUTE PATH_ to move back to your `week12/` dir in one shot.
- from the `week12/` dir, move the `horse.txt` file you made in step 13 into your current directory.
- in one command, remove the `sweet` dir and the `path` dir inside of it.
- use a single `cat` command and _shell_ expansion to print out to standard out the contents of _all of the files in your current directory_
- repeat step 18, but this time pipe the output through `perl -pe` and write a regular expression and replacement that causes _every line_ to begin with `<<<` and end with `>>>`
- repeat step 19, but this time _redirect_ the output to a file called `combined.txt`
- type a set of commands to see the first 3 lines only of `combined.txt` barfed to standard out
- repeat the last step, but showing only _the last 3 lines_
- **Extra Credit:** ✨ type a set of commands that will barf to standard out _only the three lines containing your initials_ (they will be wrapped in `<<<` and `>>>`)
- type a command that will print to standard out all of the recent bash commands you've executed
- repeat the last step, but pipe to `perl` so that every instance of the command `cat` becomes `kitty` (**Extra Credit:** ✨first add something to your command to filter out all of the commands that don't contain `cat`, so that every line ends up containing `kitty`)
- type a command that makes a new file called `dir-contents.txt` that contains a listing of the contents of the current directory
- repeat the last step, but this time name the file `dir-contents-all.txt` and have it _also include HIDDEN files_.
- `cat` out the files from the previous two steps to make sure you got the correct content in them.
- in one command, using shell expansion, delete _just the two files you made in step 26 and 27_
- make a new _bash variable_ called `MOOD` that contains your current mood (hint: check week 8 homework notes if you don't remember)
- echo out a string to standard out that says "I am feeling <mood>" -- but use the variable you created instead of typing `<mood>` so that it prints something like `I am feeling silly`

---

### Web Homework #1

---

- `ssh` into your home dir, then `cd` into your `www` dir
- make a new dir called `week12` inside of `www` (this is different from the dir for the CLI homework, since this is also inside of `www`)
- `cd` into your `www/week12` dir, then copy all the files from `/www-assets` into your current working dir
- now, copy your local copy of `boilerplate.html` into a new file called `whacky.html` and open that new file to edit it in `vim`.
- write some HTML and some random text, you must use **ALL** of the following tags:
  - `<h1>`
  - `<h2>`
  - `<p>`
  - `<div>`
  - `<ul>`
  - `<li>`
  - `<img>`
  - `<span>`
  - `<i>`
  - `<b>`
- view your page in a browser at: `http://<yourname>.howtocomputer.link/week12/whacky.html`
- now, use **ALL** of the below listed styling concepts at least once to make your webpage look hideously whacky:
  - `color`
  - `font-size`
  - `font-family`
  - `border-width`, `border-style`, `border-color`
  - `margin`
  - `padding`
  - `background-color`
- now, figure out one HTML element that has a _default display value_ of `block`, and change it to `inline`
- now, figure out one HTML element that has a _default display value_ of `inline`, and change it to `block`
- share the link to your whacky page in slack so we can all see it!

---

### Web Homework #2

---

- `ssh` into your home dir, then `cd` down into `www/week12`
- make another copy of `boilerplate.html` saving it as `table.html`
- make a _table_ displaying data about 5 quaker books, here's the data: (Title, Author, edition, pages, and price)
  - Walk in the Spirit, Hugh Turford, updated, 122, \$4.99
  - Journal of George Fox, George Fox, original, 1322, \$15.34
  - Saved to the Uttermost, Robert Barclay, updated, 288, \$6.34
  - Letter to a Backslidden Brother, Catherine Payton, modernized, 17, \$1.43
- add a _row on top of the table_ labeling what the 4 colums are
- add some _styling to the top row_ so it looks different than the rows containing the book data
- add a _header_ above the table describing what it is
- add a `<p>` tag below the table encouraging people to check out the books, and have part of your sentence be a link to the MSF early quakers page, the URL is `https://www.marketstreetfellowship.com/early-quakers/`
- add an _image of a goat_ at the bottom of the page
- make a _stylish border_ around the goat image using style tags
- style at least 5 other tags to make the whole page look super nifty
- share your link in slack so we can see your web page!
