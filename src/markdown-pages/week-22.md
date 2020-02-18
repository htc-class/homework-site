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
@media (width > 1000) {
  /* any rules here will only apply when
     the window is WIDER than 1000px */
  body {
    background-color: red;
  }
}

@media (width <= 768px) {
  /* any rules here will only apply when
     the window is less than or equal to 768px */
  body {
    background-color: blue;
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
