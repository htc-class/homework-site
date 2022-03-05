---
path: "/week-23"
---

# Week 23 Homework 💻 🐻

_New stuff we learned this week:_ 🤔

### Javascript: creating functions

- the first way I taught you to create _functions_ is technically called a **function expression** -- it looks like this:

```js
// this is a FUNCTION EXPRESSION
let sayHello = function(name) {
  console.log("Hello there, " + name + "!");
};
```

- another way you can create a function is with a **function declaration** -- which looks like this:

```js
// this is a FUNCTION DECLARATION
function sayName(name) {
  console.log("Hello there, " + name + "!");
}
```

- for the most part, function expressions and function declarations are about the same -- the main difference is that function declarations can be written after the function they declare is used, which is not true with function expressions, as shown here:

```js
// 💔 ERROR: `greetBob` is undefined, it can't be used here
// because it is declared below as a FUNCTION EXPRESSION
greetBob();

let greetBob = function() {
  console.log("Hi Bob!");
};

// 😎 But this works because `greetSally` is created
// as a FUNCTION DECLARATION, so it's "pre-loaded"
greetSally();

function greetSally() {
  console.log("Hi Sally!");
}
```

- but **function expressions** are great because of some stuff you haven't learned yet, and because they help teach you that _functions are just variables like anything else!_

### Javascript: free objects!

- a _function_ which is the _property_ of an object is called a **METHOD**.
- a _property_ which is the _property_ of an object is called, well, a **PROPERTY**
- lots of things in javascript are **object-like**, meanind _they have methods and properties_ even though they are not strictly an object:

```js
let nums = [1, 2, 3, 4];

// 😎 look ma, free object!
// `nums` is an ARRAY, but it has a PROPERTY of `length`
// so it is "object-like"
nums.length; // => 4

let name = "Jared";

// 😎 look ma, free object!
// `name` is a STRING, but it has a METHOD of `match`
// so it is "object-like"
name.match(/^J/);
```

### Javascript: more string methods 🎻

- **String.toUpperCase()** and **String.toLowerCase()** do about exactly what you would expect:

```js
let name = "Jared T. Henderson";

name.toLowerCase(); // returns `jared t. henderson`
name.toLowerCase(); // returns `JARED T. HENDERSON`
```

- **String.includes(test)** allows you to check if a string **contains (or includes) another string** -- it returns a boolean:

```js
let myString = "#goatbanjorodeo";

myString.includes("banjo"); // returns `true`
myString.includes("snail"); // returns `false`
```

- **String.startsWith(test)/endsWith(test)** -- work about exactly the way you would expect, checking if your string starts or ends with another string:

```js
let myString = "Jared Henderson";

myString.startsWith("Jared"); // returns `true`
myString.startsWith("Henderson"); // returns `false`

myString.endsWith("Jared"); // returns `false`
myString.endsWith("Henderson"); // returns `true`
```

- **String.split(separator)** _turns a string into an array, splitting it by whatever separator you pass_:

```js
let name = "Jared T. Henderson";
name.split(" "); // returns ['Jared', 'T.', 'Henderson']

let birthday = "02/23/79";
birthday.split("/"); // returns ['02', '23', '79']

// the separator can be longer than a single character
let weird = "Bob~banana~Kiah~banana~Huck";
weird.split("~banana~"); // returns ['Bob', 'Kiah', 'Huck']

// if you pass an EMPTY STRING as the separator
// it splits the string into all of its letters! 🤓
"Jared".split(""); // returns ['J', 'a', 'r', 'e', 'd']
```

### Javascript: array methods 🔮

- **Array.push(item)** _adds a new item to THE END of an array_:

```js
let myArray = ["shadrach", "meshach"];

myArray.push("abednego");
// MUTATION ALERT!! 👺
// `myArray` is now ['shadrach', 'meshach', 'abednego']
```

- **Array.pop()** _retrieves the last item from THE END of an array, shortening the array_:

```js
let myArray = [1, 2, 3];

let popped = myArray.pop(); // `popped` is 3
// MUTATION ALERT!! 👺
// `myArray` has changed, is now: [1, 2]
```

- **Array.join(separator)** _returns a new string created by smashing together all of the parts of an array, and putting a `separator` between them:_

```js
let myArray = ["goat", "banjo", "rodeo"];

myArray.join("--"); // returns "goat--banjo--rodeo"
myArray.join(""); // returns "goatbanjorodeo"
myArray.join(", "); // returns "goat, banjo, rodeo"
```

- **Array.includes(needle)** _returns a boolean, answering if some value is found in the array_:

```js
let myArray = ["Paul", "John", "Ringo", "George"];

myArray.includes("Elvis"); // returns `false`
myArray.includes("Ringo"); // returns `true`
```

- **Array.map(fn)** _returns a new array created by applying a function to every item in the array_:

```js
function shout(str) {
  return str.toUpperCase() + "!!!";
}

let myArray = ["Bob", "Huck", "Suzy"];
let shouted = myArray.map(shout);
// `shouted` is: ["BOB!!!", "HUCK!!!", "SUZY!!!"]

function double(num) {
  return num + num;
}

let myNums = [1, 2, 3];
let doubled = myNums.map(double);
// `doubled` is: [2, 4, 6]
```

- **Array.filter(predicateFn)** _returns a new array where only the items that cause the predicate function to return true remain, (that is, a FILTERED array):_

```js
let myArray = [1, 2, -3, 4];
let filtered = myArray.filter(greaterThanZero);
// `filtered` is: [1, 2, 4];

function greaterThanZero(num) {
  return num > 0;
}
```

- **Array.forEach(fn)** _allows you to execute some function on each item of an array, mostly used for side-effects_:

```js
let groceries = ["toast", "tofu", "kiwi"];

groceries.forEach(printReminder);
// > Remember to buy TOAST!
// > Remember to buy TOFU!
// > Remember to buy KIWI!

function printReminder(thing) {
  return "Remember to buy " + thing.toUpperCase() + "!";
}
```

- **Array.slice(num)** lets you slice off the beginning of an array, like this: _(it's actually a lot more flexible and powerful than this, but start by learning just this part, which is really useful for clipping off the first two parts of `process.argv` 👍)_

```js
let nums = [1, 2, 3, 4, 5];
nums.slice(1); // returns [2, 3, 4, 5]
nums.slice(2); // returns [3, 4, 5]
```

---

## Useful Links:

- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #21](https://htc-viewer.netlify.com/?id=OtDxDvCpPL4)

---

## Homework Plan:

- 1 days reviewing all flash cards
- 1 day creating new flash cards
- 1 day vim assignment (see below)
- 2 days Node homework
- 1 day Web Homework
- 2 days touch typing practice
- 1 day watch [CCCS #21](https://htc-viewer.netlify.com/?id=OtDxDvCpPL4)

### Homework day 1

- [ ] flashcard assignment
- [ ] Node homework #1
- [ ] touch typing practice

### Homework day 2

- [ ] vim Homework
- [ ] Node Homework 2

### Homework day 3

- [ ] touch typing practice
- [ ] watch [CCCS #21](https://htc-viewer.netlify.com/?id=OtDxDvCpPL4)

### Homework day 4

- [ ] Web Homework

---

### Flashcard Assignment

---

- carefully review your entire current stack of flashcards
- add 11 new flaschards in the `JS` category:
  - `String.toUpperCase()` / `String.toLowerCase()`
  - `String.includes()`
  - `String.startsWith()` / `String.endsWith()`
  - `String.split()`
  - `Array.pop()`
  - `Array.push()`
  - `Array.join()`
  - `Array.includes()`
  - `Array.forEach()`
  - `Array.filter()`
  - `Array.map()`

---

### Vim Homework

---

- separate out all of your `vim` flashcards
- `ssh` into your home dir, then `cd` into your `www` dir
- poke around and look for an HTML file that is pretty beefy, preferably one with CSS and javascript inside it
- make a copy of the file you found in step 3 and edit it with `vim`
- go through each of your `vim` flashcards, and practice every command:
  - for every command you use all the time, spend about 30 seconds practicing it
  - for commands you forget about and rarely use, spend about 2-3 minutes practicing it and thinking about how you could remember to use it more often, and when it would be handy
- for the rest of the week, every time you find your self holding down, or repeatedly mashing on the `h`, `j`, `k`, or `l` keys, slap yourself

---

### Node homework #1

---

- slowly and carefully read all of the "New Stuff" sections above -- carefully reading each code sample, making sure you understand each one
- do your flashcard assignment first
- `ssh` into your home dir, and make a new `~/node/week23` dir, `cd` into it and do all of the below tasks in that dir.
- make a node script called `yell.js` -- it should take a single string from argv and uppercase it and add exclamation points to the end, like this:

```bash
$ node yell.js howdy
> HOWDY!!!
```

- make a new script called `yell-lines.js` that works similar, but takes any number of words from the user, and yells them one per line, like this:

```bash
$ node yell-lines.js Do your homework
> DO!!!
> YOUR!!!
> HOMEWORK!!!
```

- make another script called `yell-single.js` that yells any number of words, but keeps it all on one line, like this:

```bash
$ node yell-single.js Eat your tofu
> EAT!!! YOUR!!! TOFU!!!
```

- make a node script called `spell.js` -- it should take a single string from the user, and teach them how to spell the word they typed (I know this is stupid). When invoked, it should work like this:

```bash
$ node spell.js Coffee
> Coffee is spelled C-O-F-F-E-E
$ node spell.js flexbox
> flexbox is spelled F-L-E-X-B-O-X
```

- make a script called `easy-password.js` that takes a single argument from the user, pretending to check it as a password. If the password begins with `foo` or ends with `bar` give them a success message, otherwise a failure, like this:

```bash
$ node easy-password.js foogoat
> That is correct!
$ node easy-password.js candybar
> That is correct!
$ node easy-password.js lol
> Wrong password!
```

- make a node script called `rodeo.js` that prints `#goatbanjorodeo` if the user supplies a string that contains the word `goat` anywhere in it, or prints `No comment.` if not, like this:

```bash
$ node rodeo.js goatherd
> #goatbanjorodeo
$ node rodeo.js foobargoatbaz
> #goatbanjorodeo
$ node rodeo.js foobar
> No comment.
```

- _without using regular expressions_ change the `rodeo.js` script so that it detects the word no matter what case, so `fooGOat` and `goATlol` and `lolGOAT` should all produce `#goatbanjorodeo`

---

### Node Homework #2

---

- slowly and carefully read all of the "New Stuff" sections above (yes, again) -- carefully reading each code sample, making sure you understand each one
- your flashcard assignment should be done FIRST
- `ssh` into your home dir, and `cd` into the `~/node/week23` dir
- make a node script called `todo.js` that takes a list of words from process.agv and formats them into a todo list, printing them like this:

```bash
$ node todo.js brush floss coffee
> [ ] - brush
> [ ] - floss
> [ ] - coffee
```

- copy your `todo.js` file to a new file called `buggy-todo.js`. Then, using `Array.push()` and `Array.pop()` reformat the users list so that the last item they supplied is _removed_ from the todo list, and _two silly items that they didn't ask for are added_, like this:

```bash
$ node buggy-todo.js brush floss coffee
> [ ] - brush
> [ ] - floss
> [ ] - go fishing
> [ ] - adopt a peacock
```

- copy your `todo.js` file again to a new file called `todo-line.js` and change how it works so that it makes a single-line summary of the todos, like this:

```bash
$ node todo-line.js brush floss coffee
> Todays tasks: BRUSH, FLOSS, COFFEE
```

- make a script called `groceries.js` that pretends to store items from the user, but prints a warning if they forgot to include `tofu`. It should work like this:

```bash
$ node groceries.js apples bananas tofu grapes
> 4 grocery items saved.
$ node groceries.js coffee toothpaste waffles
> What! You forgot TOFU!!!
```

- make a script called `without.js` that takes a list of arguments, but the first argument is treated as a word that must be _excluded from the list._ It should then print out the list with that item removed, like this:

```bash
$ node without.js tofu banana tofu waffles coffee
> Your list (excluding TOFU) is: BANANAS, WAFFLES, COFFEE
$ node without.js goat goat banjo rodeo goat goat sasquatch
> Your list (excluding GOAT) is: BANJO, RODEO, SASQUATCH
```

- **Extra Credit: ✨** make a script called `without-last.js` that works exactly like `without.js` except the word to remove is supplied as the _LAST_ word.

- **Extra Credit: ✨** `Array.forEach` (and also `.map` and `.filter`) actually receive _3 arguments when invoked_. Figure out what the other two arguments are, then re-do step 4 from [last week's](./week-22) Node Homework, but WITHOUT using a loop.

---

### Web Homework

---

- `ssh` into your home, and make a new dir: `~/www/week-23` and `cd` into it.
- make a new webpage called `todos.html`, it should meet all of these criteria:
  - it should have an HTML `<button>` element that says `Click to Add Todos`
  - when this button is clicked, it should get a list of todo words from the user using the `prompt` function (see [week 20's "new stuff"](./week-20)]), and each word should become a new "TODO" created as list items of an ordered list
  - the word "goat" should be ignored, not included in the list
  - one silly item should be added to the end of the list
  - each item should be prefaced with `Todo item:` (you must use `array.map()` for this)
  - use `Array.forEach` to append each new list item into the parent `ul` element
  - your code must use `array.push()`, `array.filter()`, and `array.forEach()` at least
  - to see how it should work, visit my [example page](http://jared.howtocomputer.link/todos.html) (but you may NOT LOOK at the javascript).
  - **Extra Credit: ✨** if any of the words looks like a phone number (like 555-1254 or 304-234-2345) then the list item should read `Todo item: call 555-1254`
  - **Kiah Credit: ✨** if the todo item has the word `red` anywhere in it (uppercase or lowercase letters shouldn't matter) make the background of that list item red
  - **Kiah Credit: ✨** make it so that every item in the list can be removed individually, by clicking something
  - **Kiah Credit: ✨** make it so that if the user adds more items to the list, there are no duplicates
