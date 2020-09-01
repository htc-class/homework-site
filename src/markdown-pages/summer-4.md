---
path: "/summer-4"
---

# Summer Homework #4 💻 🥒

_New stuff we learned this week:_ 🤔

## While Loop

- the `while` loop is a very simple loop that continues to execute as long as the condition is true:

```js
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}
```

- a normal `for` loop just sort of pulls up the initialization and increment steps of a `while` loop into one line, so it's usually preferred. But sometimes there are things that can only be expressed with a while loop, so it's pretty handy.
- one interesting case for using a `while` loop is to create an infinite loop (this needs to be done carefully, with some mechanism for breaking out of the loop):

```js
while (true) {
  // wheee!!! infinite loop
}
```

- the `break` keyword allows you to **break** out of a loop (works for `while` loops and `for` loops):

```js
let x = 0;
while (true) {
  console.log(x);
  x++;
  if (x > 100) {
    break; // BREAK out of `while` loop
  }
}
```

## Case Statement

- the `case` keyword in javascript (and most `c`-like languages) allows you to make a **multi-way logical decision**. It's basically a more readable form of a long `if / else if` chain, for when the number of options gets bigger than 3 or so:

```ts
function greetMom(htcStudent: string): void {
  switch (htcStudent) {
    case "Tabitha":
      console.log("Greetings, Stacey!");
      break;
    case "Win":
      console.log("Greetings, Rachel!");
      break;
    case "Harriet":
      console.log("Greetings, Rachel!");
      break;
    case "Willow":
      console.log("Greetings, Jessie!");
      break;
    case "Kiah":
      console.log("Greetings, Jessie!");
      break;
    default:
      console.log("Greetings, unknown mother!");
      break;
  }
}
```

- the **`break`** keyword causes javascript to _exit the switch statement_. If you leave it out, the condition **falls through** into the next case. This is _usually a bug_, but sometimes it can be desired. We could rewrite the above function to be shorter, taking advantage of **fall-through** for the siblings, like so:

```ts
function greetMom(htcStudent: string): void {
  switch (htcStudent) {
    case "Tabitha":
      console.log("Greetings, Stacey!");
      break;
    case "Win":
    case "Harriet" /* fall through 🪂 */:
      console.log("Greetings, Rachel!");
      break;
    case "Willow":
    case "Kiah" /* fall through 🪂 */:
      console.log("Greetings, Jessie!");
      break;
    default:
      console.log("Greetings, unknown mother!");
      break;
  }
}
```

- the `default` keyword handles things if _none of the cases match_. It is not required, but is often very useful. It's like the _last_ `else` of an `if / else if / else` set.
- because the `return` keyword _always causes the function to **immediately exit**_, the `return` keyword can be substituted for `break` when it makes sense. Imagine we wanted to re-write the above function to just _return the mother's name_, we could use `return` instead of `break` to make it more succinct:

```ts
function getMom(htcStudent: string): string {
  switch (htcStudent) {
    case "Tabitha":
      return "Stacey";
    case "Win":
    case "Harriet" /* fall through 🪂 */:
      return "Rachel";
    case "Willow":
    case "Kiah" /* fall through 🪂 */:
      return "Jessie";
    default:
      return "Unknown mother";
  }
}
```

## Generators & Iterators 💪

- **generators** are super-powered functions that return **iterators**, they have _magic powers_ of being **pausable** and **resumable**.
- you declare a generator using the special `*` symbol after the `function` keyword.

```js
function* myGenerator() {
  // yield stuff here
}
```

- a generator function is _not immediately called_ when invoked, unlike normal functions. Instead, it returns an **iterator** -- which is a special **object with a `.next()` method**:
- when you call the `.next()` _method_ of an _iterator_, you get an object that has two _properties_: `.value` and `.done`. The typescript type would be:

```ts
type ReturnedByDotNext = {
  value: any;
  done: boolean;
};
```

- iterators **yield** values, using the special new `yield` keyword. Whatever they _yield_ becomes the `.value` property of the object returned by the iterator's `.next()` method. When there is nothing left to yield, `iterator.next()` returns `{ value: undefined, done: true }`:

```js
function* myGenerator() {
  yield "goatbanjorodeo";
}

const myIterator = myGenerator();

// `one` is: { value: 'goatbanjorodea', done: false }
const one = myIterator.next();

// `two` is: { value: undefined, done: true }
const two = myIterator.next();
```

- iterators (created by generators), usually yield more than one value, so you can sort of think of them as a fancy way to _create an array_:

```js
// sort of like a fn that returns [0, 1, 1, 2, 3, 5]
function* fibGenerator() {
  yield 0;
  yield 1;
  yield 1;
  yield 2;
  yield 3;
  yield 5;
}
```

- there is a built-in language construct for **looping over an iterator**, the `for...of` loop:

```js
function* goatbanjorodeoGenerator() {
  yield "goat";
  yield "banjo";
  yield "rodeo";
}

// 😎 cool! new syntax
for (let word of goatbanjorodeoGenerator()) {
  console.log(word); // `goat` `banjo` `rodeo`
}
```

- you can make **instances of any class into an iterable** by adding the special method `[Symbol.iterator]`:

```js
class Life {
  constructor() {
    this.kingdoms = ["plant", "animal", "fungus"];
  }

  // WHOA, this is the weird part
  // a method whose name is a SYMBOL 🧐
  [Symbol.iterator]() {
    let index = 0;
    // but here we just return an OBJECT with
    // a `.next()` function making our own iteratable
    return {
      next: () => {
        if (index < this.kingdoms.length) {
          const value = this.kingdoms[index];
          index++;
          return { value: value, done: false };
        } else {
          return { value: undeifned, done: true };
        }
      },
    };
  }
}

const life = new Life();
// 😎 we have our dream, we can `for...of` over our object
for (let kingdom of life) {
  console.log(life); // `animal` `plant` `fungus`
}
```

- but the cool thing is lots of useful things **already are iterables** because under the hood, they _implement the `[Symbol.iterator]` method_. This includes **arrays** and **strings**:

```js
let myArray = ["goat", "banjo", "rodeo"];

// 🤑 way more ergonomic than a normal `for` loop
for (let word of myArray) {
  console.log(word); // `goat` `banjo` `rodeo
}

for (let letter of "goat") {
  console.log(letter); // `g` `o` `a` `t`
}
```

## Symbols in JS

- **symbols** were created so that the javascript language could evolve, _adding methods with names_ **guaranteed not to conflict with any userland code**.
- you can **make your own symbols** like this:

```js
const foo = new Symbol("foo");
```

- symbols are **automagically unique**, so two symbols constructed with the same string _are still different_:

```js
new Symbol("foo") === new Symbol("foo"); // FALSE
```

- there are some built-in Symbols added by javascript itself, like `Symbol.iterator` and `Symbol.replace`. These allow both the language itself, and your code, to implement new language features, like in the `class Life` example above.

## Async / Await

- one advanced feature of generators is that you can **pass arguments BACK into the function**. Consider this snippet of code:

```js
function* myGenerator() {
  yield "goat";
  let last = yield "banjo";
  yield last;
}

const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next("rodeo"));
```

- step **very carefully** through the execution with me:
  - on line 8, the first time we call `iterator.next()` the function yields out `"goat"`, so we log: `{value: 'goat', done: false}`
  - on line 9, the first time we call `iterator.next()` the function yields out `"banjo"`, so we log: `{value: 'banjo', done: false}`
  - but then **on line 10** we **pass a value BACK into the generator**. This value (the string `"rodeo"`) gets **substituted for the last `yield` expression**, making it as if line 3 read: `let last = "rodeo";`
  - so, while executing line 10 `last` is set to `"rodeo"` and the final call to `iterator.next()` logs out `{value: 'rodeo', done: false}`;
  - NOTE: this _does work,_ my example in class failed because I was off-by-one -- I was passing the value to the wrong invocation of `iterator.next()`. Sorry about that! 😬
- once javascript had **generators** with their magical powers of _being RESUMABLE functions_ and the power to **pass values back in at a later time**, someone had the bright idea to use them to **make async code LOOK synchronous**. What follows is an **oversimplified** version of how this might work:

```js
function* syncLookingJsonFetcher() {
  // look at this line very carefully.
  // `fetch()` returns a PROMISE,
  // so we are YIELD-ing a promise to the outside world
  // but then we are setting the `response` variable
  // to whatever the outside world passes back
  // in the second time they call `.next()`
  const response = yield fetch("http://api.mysite.io");

  // now imagine `response` is the actual HTTP response
  // (how we do that comes below)
  // we can now do the same trick to get the JSON,
  // we YIELD out another PROMISE
  const json = yield response.json();

  // now we have our dream, we could use `json`
  // and all the code above LOOKS synchronous
}

// NOTICE we're OUT of the generator function here
// this is the "OUTSIDE WORLD"

// our sweet function needs help from the outside world
// this is ugly, but it will sort of work:
const iterator = syncLookingJsonFetcher();

// start by getting hold of the promise yielded on line 8
const fetchPromise = iterator.next().value;

fetchPromise
  .then(response => {
    // when that promise resolves,
    // PASS it back INTO the generator
    iterator.next(response);

    // now we need to call `.next()` to get
    // the `.json()` promise out from line 14
    const jsonPromise = iterator.next().value;

    // return the promise so we can CHAIN
    return jsonPromise;
  })
  .then(json => {
    // now pass the resolved JSON back INTO the generator
    // and it becomes the value of `json` on line 14
    iterator.next(json);
  });
```

- carefully read that whole snippet of code through, line by line. I think it's the hairiest chunk of javascript I'll ever give you. Read it a couple times, see if you can get to the point where you have a decent idea of what's actually happening.
- now that you've seen that awful code, you can be thankful that Javascript **added a bunch of syntatic sugar** into the language to make doing that super easy, and they basically wrote the whole "outside world" section for you. The end result is **async / await**:

```js
// here's that same horrible code from above
// rewritten with async / await

// NOTICE the `async` keyword before `function`
// this is like the `*` in a generator function
// it's a clue to Javascript that this is a special
// generator-like function under the hood
async function doApiThings() {
  // here notice that instead of `yield` we `await`:
  const response = await fetch("http://api.mysite.io");

  // then we can await on the second promise too:
  const json = await response.json();

  // now we can do whatever we want with the json!
  insertStuffInDom(json);
}

// of course you do need to call your async function :)
doApiThings();
```

- here's that again _without all the comments_:

```js
async function doApiThings() {
  const response = await fetch("http://api.mysite.io");
  const json = await response.json();
  insertStuffInDom(json);
}

doApiThings();
```

- finally, we don't have a `.catch()` or an _error_ argument (like in nodeback-style), so we use `try / catch` to **handle errors with async / await**:

```js
async function doApiThings() {
  try {
    const response = await fetch("http://api.mysite.io");
    const json = await response.json();
    insertStuffInDom(json);
  } catch (error) {
    // do error handling things here
    alert("Oh noes!");
  }
}

doApiThings();
```

- note: the `await` keyword can ONLY be used (currently) inside an `async` function. You may get an error if you try to use `await` outside of an `async` function. In 6-18 months this won't be true anymore (javascript is adding what's called "Top-level await"), but support is limited now.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #37](https://htc-viewer.netlify.app/?id=3XkL0qQ21Oo)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan (next class in 3 weeks)

- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 day Case statement homework
- 1 day Generators homework
- 1 day Async/Await homework

---

### Homework (week 1)

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="case">Case statement homework</Checkable>
<Checkable id="generators">Generators homework</Checkable>

### Homework (week 2)

<Checkable id="review-flash-2">review all flashcards</Checkable>
<Checkable id="typing-2">touch typing practice</Checkable>
<Checkable id="async-await">Async/Await homework</Checkable>

---

## Generators Homework

---

- slowly and carefully review the **"Generators"** section of "New Stuff" ^
- go to [this url](https://gitlab.howtocomputer.link/htc/generators) and create a FORK of the repo
- connect to the HTC machine with vscode and clone the repo into a folder called `~/node/summer-4/`
- create a **new branch** to work on
- Type a command to install the dependencies.
- check the `package.json` to see the two scripts I made for you, these will come in handy.
- open up the `src/generators.spec.ts` file and the `src/generators.ts` files
- one by one, changing each `xit()` to a `it()`, make all the tests pass. You'll need to create functions in `generators.ts` and export/import them as needed.
- make sure to have good, strict Typescript types for _arguments_ (but you can _skip adding return types for the generators, that's too complex for now_).
- commit your work.
- push up a Merge Request to Gitlab, and post it in Slack.

---

## Case Statement Homework

---

- slowly and carefully review the **"Case Statement"** section of "New Stuff" ^
- go to [this url](https://gitlab.howtocomputer.link/htc/case) and create a FORK of the repo
- connect to the HTC machine with vscode and clone the repo into a folder called `~/node/summer-4/`
- create a **new branch** to work on
- Type a command to install the dependencies.
- check the `package.json` to see the two scripts I made for you, these will come in handy.
- open up the `src/case.spec.ts` file and the `src/case.ts` files
- one by one, changing each `xit()` to a `it()`, make all the tests pass. You'll need to create functions in `case.ts` and export/import them as needed.
- make sure to have good, strict Typescript types for _arguments_ AND _function returns_.
- commit your work.
- push up a Merge Request to Gitlab, and post it in Slack.

---

## Async/Await Homework

- slowly, and repetitively, and very carefully read the "Async/Await" portion of "New Stuff" above. Try to get a working understanding of **HOW async/await** works by building on top of generators.
- then, clear your mind of all of the complicated generator theory stuff, and review the last two code snippets in the "New Stuff" -- those really simple code snippets are very similar to all you will need to do this homework.
- just to be clear: for this homework you will NOT create ANY generator functions, you will ONLY use `async` functions.
- connect in vscode to your `~/www/summer-3` web/promises git repo.
- keep all of the functionality the same, but rewrite it with NO promises, rather, using `async / await`. That means don't change anything about the HTML or CSS, you should be able to re-use all that code. The only thing you're going to be changing is that instead of using promises directly and calling `.then()` on them, you're going to do your async fetching and unpacking of JSON using `async / await`.
- hint: you'll need some sort of main `async` function, inside it you can `await` on calls to `fetch()` and `await` on turning http responses into `json` just like the examples in the New Stuff above.
- make sure to handle errors using `try / catch`.
- even if your browser supports "top-level await", I want you to wrap all of your usages of `await` inside an `async` function.
- commit your work, and slack me the GitLab url when you are done
