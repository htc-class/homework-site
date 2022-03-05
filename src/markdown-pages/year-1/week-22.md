---
path: "/week-22"
---

# Week 22 Homework 💻 🦁

_New stuff we learned this week:_ 🤔

### CSS Specificity 💪

- when _two CSS selectors **match the same element**_ one of them has to _win_ -- this is determined by **specificity**
- specificity is calculated by the browser, by _tallying up a weird score,_ often represented as 3 numbers, like `0,1,0` or `1,0,2`
- for every **simple element** in the selector, tally one in the _rightmost column_
- for every **class designation** in the selector, tally one in the _middle column_
- for every **id designation** in the selector, tally one in the _left column_

```CSS
/* 0,0,1 - because only the `div` element counts */
div { color: red; }

/* 0,0,2 - `div` and `p` elements each add one */
div p { color: red; }

/* 0,1,1 - one class, one element */
.foo p { color: red; }

/* 1,0,0 - one id only */
#my-id { color: red; }

/* 1,1,1 - one id, one class, one element */
#my-id .foo p { color: red; }

/* 2,3,4 - whoa! 2 ids, 3 classes, 4 elements */
#my-id #lol .foo .bar .baz div p i b { color: red; }
```

- a winner is determined by comparing the _leftmost column_ first, and moving towards the right only if those columns are equal, so `1,0,0` is stronger than `0,12,0` and `0,1,1` is stronger than `0,1,0`
- in case of an **exact tie**, the _last rule declared wins_.
- an **inline style attribute** is a _fourth column_ and thus is more powerful than (almost) anything declared in a style tag or css file:

```HTML
<!-- 1,0,0,0 - ⛴ -->
<p style="color: red;">Hi.</p>
```

- a **CSS important declaration** is the most powerful of all! It adds a _fifth column_ -- but you should feel a little bad about using it:

```CSS
/* 1,0,0,0,0 - 💥💣 */
p { color: blue !important; }
```

### CSS Child Combinator 👨‍👩‍👧

- the `>` symbol in css is called the **child combinator** - it means that whatever comes after it will only match if it is _the direct child of the thing before it_:

```CSS
/* matches only p's that are DIRECT CHILDREN of .foo  */
.foo > p { color: red; }

/* matches any `p` inside of `.foo` */
.foo p { color: blue }
```

- the `>` child combinator does not add any points when calculating specificity, so `.foo > p` and `.foo p` have the exact same specificity, so the last one declared will win.

### CSS Media Queries

- a **media query** is a way in CSS to _apply certain CSS rules **only if certain conditions are met**_ -- think of it like `if` logic statements embedded in CSS. Cool!
- the syntax of a media query is `@media <type> <feature> { <rules> }`
- the `type` is usually one of: `screen`, `print`, `speech`, or `all`
- if you _omit the type_ it's the same as putting `all`
- the `<feature>` area is where the action is -- in it you can test for [lots of cool things](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features), but the most common is to test for the **width of the screen** so that you can do _Responsive Web Design_, like this:

```CSS
@media (min-width: 1000px) {
  /* any rules here will only apply when
     the window is WIDER than 1000px */
  body {
    background-color: red;
  }
}

@media (max-width: 768px) {
  /* any rules here will only apply when
     the window is less than or equal to 768px */
  body {
    background-color: blue;
  }
}

@media (min-width: 400px) and (max-width: 600px) {
  /* any rules here will only apply when
     the window is BETWEEN 400px and 600px wide*/
  body {
    background-color: purple;
  }
}

@media print {
  /* any rules here will only apply when your
     webpage is PRINTED */
  body {
    background-color: white;
    color: black;
  }
}
```

### Javascript

- arrays in javascript have a special _property_ called `length` that you get for free, it tells you **how many items are in an array**:

```js
let foo = ["a", "b", "c"];
console.log(foo.length); // => 3

let bar = [true, false];
console.log(bar.length); // => 2
```

- because arrays are _indexed by integers_ you can use a simple _for loop_ to access each item in an array one at a time:

```js
let foo = ["a", "b", "c"];

// 🤓 notice THREE things about the loop:
//    1. we start at ZERO
//    2. we test using `foo.length`
//    3. we do `<` and not `<=`
for (let i = 0; i < foo.length; i++) {
  console.log("Item at index " + i + " is: " + foo[i]);
}
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #20](https://htc-viewer.netlify.com/?id=KN8YgJnShPM)

---

## Homework Plan:

- 1 days reviewing all flash cards
- 1 day flexbox review & quiz
- 1 day flexbox nested layout creation
- 1 day CSS specifity quiz
- 1 day CSS Media Query practice
- 1 day node homework
- 2 days touch typing practice
- 2 days watch [CCCS #20](https://htc-viewer.netlify.com/?id=KN8YgJnShPM)

### Homework day 1

- [ ] flashcard assignment
- [ ] flexbox review and quiz
- [ ] touch typing practice

### Homework day 2

- [ ] CSS Specificity Homework
- [ ] CSS Media Query Homework
- [ ] watch [CCCS #20](https://htc-viewer.netlify.com/?id=KN8YgJnShPM)

### Homework day 3

- [ ] Nested flexbox homework

### Homework day 4

- [ ] touch-typing practice
- [ ] watch [CCCS #20](https://htc-viewer.netlify.com/?id=KN8YgJnShPM)
- [ ] node homework

---

### Flashcard Assignment

---

- carefully review your entire current stack of flashcards

---

### CSS Specificity Quiz

---

- carefully and slowly review the entire "CSS Specificity" section of "new stuff"
- `ssh` into your home dir
- copy the file called `specificity.css` from the root directory into your home dir, and open it in vim
- it will lead you through a bunch of questions, read carefully the comments for instructions
- whenever you get one wrong, stop and figure out why you were wrong

---

### Flexbox Review & Quiz Homework

---

- make sure you've done your Flashcard assignment first
- slowly and carefully review all the [flexbox properties here](./flexbox/properties)
- carefully reading the instructions at the top first, complete the [entire quiz here](./flexbox/quiz-2)

---

### Flexbox Nested Layout Homework

---

- make sure you've done the "Flexbox Review & Quiz Homework" above _first_
- `ssh` into your home dir, make a new directory: `~/www/week22`, `cd` into it
- there, recreate the 3 nested flexbox example pages linked below, for each one:
  - don't worry about matching the colors
  - put `min-height: 100vh` on the outermost flex container (probably the `body` tag)
  - don't worry about putting your styles into an external stylesheet, unless you want to
  - make sure to experiment with changing your browser window size on my example and your copy, to make sure the right things grow and don't grow, if you look at it without stretching its size you might make mistakes
  - for anything where you have to set the `width` or `height` or `flex-basis` -- I _always_ used multiples of `100px` -- which should make it easier for you to match my layout.
  - slack us your URLs when you're done 👍
- the layouts you have to match are:
  - [nested layout 1](./flexbox/nested-1)
  - [nested layout 2](./flexbox/nested-2)
  - [nested layout 3](./flexbox/nested-3)
  - [nested layout 4](./flexbox/nested-4) -- **Extra Credit: ✨**
- Hint: always do these in layers, one flex "family" at a time. Find the outermost one visually, and only create enough HTML to lay out the outermost family. Get that working first, before you proceed to working on any of the children that are also flex parents.
- IF YOU GET STUCK, DO THESE STEPS FIRST BEFORE ASKING FOR HELP:
  - run `format` on all of your code
  - make sure you're following the methodology described in the HINT above -- you should be working only one level at a time, and only be adding markup and css for inner nested flex areas as soon as you've gotten the outer layers working first.

---

### CSS Media Query Homework

---

- slowly and carefully review the "CSS Media Queries" section of "new stuff" above.
- `ssh` into your home dir, make a new directory: `~/www/week22`, `cd` into it
- make a new webpage called `mq1.html`, when you're done with it, it should meet these specifications:
  - it should have an external stylesheet
  - it's background should be change color when the screen width is _wider than 500px_
  - when the screen width is _less than 400px_ you should show an `h1` tag with a `p` tag that has some random text about small screen sizes
  - when the screen width is _greater than or equal to 400px_ hide the `h1` and `p` from the above step and show a different headline and paragraph with different text
  - make it so that above 600px wide, the webpage shows a picture of a snail
  - make it so that above 800px wide, the webpage also shows a picture of a frog
- make another webpage called `mq2.html`, that meets these specifications
  - it should have four sections, each with a `h1` and a `p` tag
  - each section should have the name of an animal (one of the ones we have pictures for) in the `h1`
  - each section should have a brief description of the animal in the `p` tag
  - each section should have a different background color
  - at less than 600px, the four sections should stack on top of each other
  - using _flexbox_ make it so that at 600px or wider, the sections turn into a grid-like thing with two rows and two columns
  - also using flexbox, make it so that at 800px or wider, they all four fit on one line
  - make it so that at 900px or wider, an image appears in each section
  - slack us your URL when you're done
  - **Extra Credit: ✨** make it so that if you print the webpage the backgrounds are all set to white, the text to black, and the images are hidden. Test your work by printing the webpage
  - **Extra Credit: ✨ (Kiah only)** review the media features for media queries on MDN - find a cool one that you can figure out how to use, and add it to one of these webpages, or a new one you create to show it off. Slack us the URL so we can check it out.

---

### Node homework

---

- carefully and slowly review the 'Javascript' portion of "new stuff" above
- make sure you've done your Flashcard assignment first
- `ssh` into your home dir, make a new dir: `~/node/week22` and `cd` into it
- make a new node script called `loop-array.js` that meets these criteria:
  - inside it, declare an array with at least 10 items, and the items should be of 4 different javascript types minimum
  - when the script is executed from the shell, it should print out the value of each item in the array
  - at the end of looping through, it should print a line saying how many items there are in the array (don't hard-code this number, use the special feature of arrays that tells you how many are in it)
  - it should work sort of like this from the shell:

```bash
$ node loop-array.js
> item 0 is foobar
> item 1 is false
> item 2 is 43
# etc...
> the array has 11 items total
```

- **Extra Credit: ✨** for the `loop-array.js` file above, make it so that each item also prints out what _type_ of value it is, like `item 0 is foobar and is a string` and `item 1 is false and is a boolean`
- make a new node script called `htc.js` that works like this:
  - it must use a `for loop` and an array to accomplish the task
  - it should print a line for each person (including Jared) in the class
  - for students it should say something like: "Tabitha is a student in HTC"
  - for me, it should say "Jared is the teacher of HTC"
  - all of our names should be in a single array
- **Extra Credit: ✨** make a new node script called `args.js` that allows the user to pass any number of arguments to the script, and it will loop through them, printing them out one by one, and then give the total number of args the user typed, like this:

```bash
$ node args.js foo bar baz
> item 0 is foo
> item 1 is bar
> item 2 is baz
> 3 items total
```
