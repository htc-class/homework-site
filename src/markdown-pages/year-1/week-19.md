---
path: "/week-19"
---

# Week 19 Homework 💻 🦍

_New stuff we learned this week:_ 🤔

### Javascript

- `&&` means **AND** and `||` means **OR** in javascript logic expressions, which means you can do things like this:

```js
if (myNumber === 5 || myNumber === 8) {
  // do something if `myNumber` is 5 OR 8
}

if (myNumber > 15 && myNumber < 20) {
  // do something if `myNumber` is between 15 and 20
}
```

- **closure** is one of the most powerful concepts in programming. Brendan Eich snuck it into javascript because he's a language wizard.
- **closure** means that _functions always have access to the scope they were **born in**_.
- **closure** is like a _backpack_ that functions keep with them, with a photo-album of all the variables they knew about when they were a tiny baby. 🎒 🖼 🐣
- remember what _Nate_ said: _"Dude, you haven't programmed unless your functions return functions."_
- **closure** gives functions a sort of _memory_ that ends up being super powerful. You can do things like this:

```js
let makeAddThree = function() {
  let num1 = 3;

  let innerFunction = function(num2) {
    return num1 + num2;
  };

  // whoa! your function returns a function, dude! 😲
  return innerFunction;
};

let addThree = makeAddThree();

// `sum` is 7 because `addThree` remembers
// the `num1` variable it had access to when it was
// "born", it kept it in it's CLOSURE backpack 🎒
let sum = addThree(4);
```

- remember, _parameters_ are in the scope of the function, so **closure** makes it so inner returned function remember them too, allowing cool stuff like this:

```js
let makeAdder = function(num1) {
  let innerFunction = function(num2) {
    return num1 + num2;
  };

  return innerFunction;
};

let add2 = makeAdder(2);
let add3 = makeAdder(3);

// x = 4 because `add2` remembers `num1` as 2 (line 9)
let x = add2(2);
// y = 5 because `add3` remembers `num1` as 3 (line 10)
let y = add3(2);
```

- a **for loop** in javascript is a simple way to run some code over and over again, a set number of times:

```js
for (let i = 1; i <= 10; i = i + 1) {
  // this line will run TEN times!
  console.log("the value of `i` is:", i);
}
```

- a shortcut for writing `i = i + 1` is to write `i++` -- remember that _Bjarne Stroustrup_ (sorry Win, he's Danish, not Norwegian) named the `C++` computer language as a joke of saying "add 1 to C"
- the inside of the parenthases in a `for loop` contains an _initializer_, a _test_, and a statement that usually increments or decrements the main variable. These expressions can vary greatly, for instance, here's a loop that counts _backwards_ from `99` to `0`:

```js
for (let i = 99; i >= 0; i = i - 1) {
  console.log(i, "bottles of beer on the wall");
}
```

- a better way to **listen for events** in a webpage is to use `element.addEventListener()` -- like so:

```js
let myDiv = document.querySelector("#my-div");
myDiv.addEventListener("click", someRadFunction);
myDiv.addEventListener("mouseover", someOtherFunction);
```

- listeners added via `addEventListener` are executed in the order they were added
- listeners added via `addEventListener` can be **removed** by using `element.removeEventListener()`, like so:

```js
myDiv.removeEventListener("click", someRadFunction);
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #17](https://htc-viewer.netlify.com/?id=6-tKOHICqrI)

---

## Homework Plan:

- 1 day reviewing all flash cards
- 1 or 2 days node practice
- 2 days touch-typing practice
- 1 or 2 days Web practice
- 1 day watch [CCCS #17](https://htc-viewer.netlify.com/?id=6-tKOHICqrI)

---

### Homework day 1

- [ ] review all flash cards
- [ ] start Node homework

### Homework day 2

- [ ] touch-typing practice
- [ ] finish Node homework

### Homework day 3

- [ ] watch [CCCS #17](https://htc-viewer.netlify.com/?id=6-tKOHICqrI)
- [ ] start Web homework

### Homework day 4

- [ ] touch-typing practice
- [ ] finish Web homework

---

### Node Homework

---

- First, slowly and carefully read through "New Stuff" -- make sure you read all of the code samples and fully understand what each sample is showing, and how it works.
- `ssh` into your home dir, and then make a `week19` dir inside of `~/node` and `cd` into it.
- make a node script called `square.js` -- when you execute it from the shell, it should print out ten lines of text, showing the _square_ of the numbers 1 - 10. Use a `for loop`. A _square_ is just a number times itself, so you can just do something like `i * i` to calculate the square. The output should look like this:

```bash
$ node square.js
> 1 squared is 1
> 2 squared is 4
> 3 squared is 9
# and so on...
```

- make a node script called `lucky-number.js` that takes a single argument from the command line of a number (between 1 and 20). The program should loop from 1 to 20, checking if that is the number. If it's not the number, print a message saying it's not a match, and if it is the number, print a different message. Using the script from the shell should look like this:

```bash
$ node lucky-number.js 3
> 1 is not your number
> 2 is not your number
> GOATBANJORODEO - 3 is your number!
> 4 is not your number
> 5 is not your number
# etc, and so forth...
```

- **Extra Credit: ✨** modify `lucky-number.js` so that after it hits the correct number, it _stops_ checking the other numbers.
- make a new script called `number-or.js` that takes **2 arguments** from the command line, and works like `lucky-number.js` except it prints the "success" message for _either_ of the numbers. Using it should work like this:

```bash
$ node number-or.js 1 3
> GOATBANJORODEO - 1 is one of your numbers!
> 2 is not one of your numbers
> GOATBANJORODEO - 3 is one of your numbers!
> 4 is not one of your numbers
> 5 is not one of your numbers
# etc, and so forth...
```

- make a new script called `between.js` that accepts 2 numbers from the command line, and loops from 1 to 100, and **only** prints a line for each number that is _between the two numbers supplied_, it should work like this:

```bash
$ node between.js 33 37
> 34 is between 33 and 37
> 35 is between 33 and 37
> 36 is between 33 and 37
```

- 2020 is a leap year, and leap years come every 4 years. Create a node script called `leap-years.js` that starts from 2020 and works backward printing every leap year since 1800. (Ignore the fact that technically every 100 years we skip a leap year). Your script should output like this:

```bash
$ node leap-years.js
> 2016 was a leap year
> 2012 was a leap year
> 2008 was a leap year
> 2004 was a leap year
# etc, till 1800
```

- **Extra Credit: ✨** make a node script called `bar-graph.js` that takes a single number from the command line, and prints out a set of horizontal lines, like a bar graph, with the first line being as wide as the number supplied, and each line decreasing by one. Make the bars out of the capital `X` character. (Hints: you're going to need 2 loops, one inside another -- and you'll need `process.stdout.write()`) If you do it right, here's what it would print if I passed it the number `6`:

```bash
$ node bar-graph.js 6
> XXXXXX
> XXXXX
> XXXX
> XXX
> XX
> X
```

- **Extra Credit: ✨** Come up with another interesting use of a loop, and make up your own script using it. When you're done, make it readable and executable by everyone, and copy it into the root dir, and slack us with instructions on how to invoke your script.

- **Triple Extra Credit (only required for Kiah):** make a node script called `mario.js` that makes a super-mario style double staircase thingy as tall as the number provided as an argument from the command line. So, for instance, if I passed `3` I should get what I show first, and if i pass `6` I should get the second example:

```bash
$ node mario.js 3
>   X X
>  XX XX
> XXX XXX
```

```bash
$ node mario.js 6
>      X X
>     XX XX
>    XXX XXX
>   XXXX XXXX
>  XXXXX XXXXX
> XXXXXX XXXXXX
```

---

## Web Homework

---

- First, slowly and carefully read through "New Stuff" -- make sure you read all of the code samples and fully understand what each sample is showing, and how it works.
- `ssh` into your home dir, make a new dir at `~/www/week19` and `cd` into it
- make 3 new files, `web.html`, `web.js`, and `web.css`
- edit the HTML file so it pulls in the javascript and css external files (refer to prior weeks "new stuff" if you need a reminder how to do this)
- add an empty `ul` tag in your HTML, and then write some javascript (using a loop) that immediately adds 20 list items with the same text in each one
- next, modify your javascript, so that each list item added includes which number it is, so that the text is something like `I'm list item #1` and then `I'm list item #2` etc...
- now, extract out a function called `addListItem` to do the work of the last step -- it should take one argument, which is the number item it is, and, it should add the list item with the same text as the last step.
- next, change the `addListItem` function so that it **returns a function** that remembers the number passed in. Once you've done that, you should change your loop so that instead of all of the list items being added immediately, they are added one per second using `setTimeout`. Because your `addListItem` function now _returns a function_ you can do something similar to: `setTimeout(addListItem(i), 1000);` (Hint: you won't be able to use `1000` directly for the delay, you'll have to do something a little fancier).
- exit vim and copy into your current directory all of the images located in `/www-assets` -- you'll notice there are two new images
- add to your html an `img` tag referencing the new `snail.jpg` you copied down.
- use the new `addEventListener` API we leared this week to attach **two** different functions to the `click` event of the snail image.
  - the first function should _also add a list item to the `ul` on the page_ that says "image was clicked"
  - the second function should use `alert` to pop up a message that says "snails are cool"
- next, write some javascript so that for every second for 6 seconds, the image changes to another animal, using all 6 images available. To do this, make a function that takes an argument and returns a function, thus fulfilling Tabitha's dream from a few weeks ago.
- alerts are kind of annoying. add a bit of text somewhere on the page, so that if you click it, it stops the page from alerting everytime the image is clicked -- make sure to use `removeEventListener` for this
- **Extra Credit: ✨** add another `click` listener to the image tag. This listener should turn the background of the page some other color, but **only if the image clicked was the snail or the whale.** To do this, you'll can check the `src` attribute using a new function: `someElement.getAttribute(<attr-name>)` -- you would use it like this: `img.getAttribute('src');`
- finally, look at your flashcards and pull out every one that is related to HTML or CSS. Modify your page so that you use every single tag and css rule for every card. Don't worry about making the page look good, just practice using every concept. Share your URL in slack when you're done.
- **Extra Credit: ✨** make another webpage called `root-beer.html` Start with mostly empty HTML, but have javascript add 99 `ul` elements, each one ending up like this:

```html
<ul>
  <li>99 bottles of root beer on the wall,</li>
  <li>99 bottles of root beer.</li>
  <li>Take one down, pass it around,</li>
  <li>98 bottles of beer on the wall.</li>
</ul>
```

- **Extra Credit (continued): ✨** The last verse should say `No more bottles of root beer on the wall, / No more bottles of root beer. / Go to the store, buy some more. / 99 bottles of root beer on the wall.` Be sure to make leverage functions and closure and loops to accomplish this task.
- **Triple Extra Credit (only required for Kiah): ✨** modify the root beer web page so that each line of each verse appears a few hundred milleseconds after the previous one, like you would sing the song.
- **Triple Extra Credit (only required for Kiah): ✨** make a new webpage called `grid.html` where javascript adds 100 absolutely positioned squares in a grid pattern like a Checkerboard. Use `window.innerWidth` and math to know when to start a new row. Use the `rgb` color format and math and closure to make it so that each square has a slightly different color. Make it so that any of the squares can be clicked and when they do, they will pop up an alert that says: `I was the Xth square added, and my color is rgb(X, X, X)`. Share your URL in slack when you're done.
