---
path: "/year-2/week-03"
---

# Year #2, Week #3 💻 🚜️

_New stuff we learned this week:_ 🤔

## Javascript: Spread Syntax

- the **spread syntax** in javascript allows you to **expand** arrays and objects:

```js
const kids = ["Tabitha", "Charlie"];
const parents = ["Frank", "Stacey"];

// 😎 use spread to create a new bigger array
const artinians = [...parents, ...kids];
// > ['Frank', 'Stacey', 'Tabitha', 'Charlie']
```

- spreading an array is equivalent to listing each item one by one. So this:

```js
const langs = ["Typescript", "Rust", "Erlang"];
const langsCopy = [...langs];
```

- is exactly the same as if we did this:

```js
const langs = ["Typescript", "Rust", "Erlang"];
const langsCopy = [langs[0], langs[1], langs[2]];
```

- **spreading an object** works about how you would expect, it expands into keys and
  values in the new object:

```js
const wilhite = {
  lastname: "Henderson",
  address: "8206 Wilhite",
};

const stalin = {
  ...wilhite,
  firstname: "Stalin",
};
// 😎 the `wilhite` object got SPREAD into `stalin`, making:
// {
//   lastname: "Henderson",
//   address: "8206 Wilhite"
//   firstname: "Stalin"
// }
```

- when you're **spreading** arrays, you can always add your own items:

```js
const costaDogs = ["Chester", "Caeser"];
const msfDogs = [...costaDogs, "Fern", "Stella"];
```

- when you are spreading objects, you can **override spread properties** by supplying them
  AFTER the

```js
const jared = {
  name: "jared",
  age: 41,
  hasBeard: true,
};

// 😎 look! overriding the `hasBeard` prop
const beardlessJared = {
  ...jared,
  hasBeard: false,
};
```

## Javascript: Shorthand Object Properties

- take a look at this bit of code:

```js
const name = "jared"
const age = 41;
const hasBeard = true;

const person {
  name: name,
  age: age,
  hasBeard: hasBeard,
};
```

- lines 6-8 of the above example are kind of a bummer, they are repeating the same thing
  for the property name as the variable containing the value we want. Thankfully,
  Javascript provides a **shorthand syntax** for this situation. It works like this: \_if
  the property name you're trying to set is the same as a **variable** you have that holds
  the value, you can **omit the property name** like this:

```js
const name = "jared"
const age = 41;
const hasBeard = true;

const person {
  name,
  age,
  hasBeard,
};
```

- this works anywhere you are creating or using an object, so these examples all work:

```js
function foo() {
  console.log("Foo");
}

module.exports = { foo };
```

```tsx
const Btn: React.FC = () => {
  const color = red;
  return <button style={{ color }}>Hi</button>;
};
```

## Javascript: Truthy vs Falsy

- in computer programming, **forcing one TYPE to become another type is called COERCION**.
  The most important type coercion to understand (because it's very common) is **boolean
  coercion**.
- you can force any value to become a `boolean` by wrapping it in the `Boolean` function:
  `Boolean("hello")`. This **coerces** the value inside _will become either `true` or
  `false`_.
- because a boolean value can only be `true` or `false` every value in javascript falls
  into one of **two categories**: values that coerce to `true` and values that coerce to
  `false`. These two categories are usually referred to as **truthy** and **falsy**.
- the easiest way to remember what is _truthy_ and what is _falsy_ is by _memorizing what
  is falsy_. There are only a few values that are _falsy_, so by definition, **everything
  else is truthy**. Here are the `falsy` values in javascript:

```js
// "falsy" values:
false;
0;
0n; // 0 as "Big Integer" -- a new language feature
``; // empty string
null;
undefined;
NaN; // Not a Number
```

- most everything on that list makes sense, the only real "gotchas" are `0` and the empty
  string. These are a bit counter-intuitive, and they can cause real bugs if you're not
  careful. It's also a bit sad that an empty array `[]` is truthy -- it feels like it
  might be better if it were falsy.
- when conditional logic is evaluated in javascript (stuff like `if`, `else` and `ternary`
  statements), the test expressions are _coerced_ to be a boolean first:

```js
let myName = "";
if (myName) {
  // will this line execute?
  // is `myName` truthy or falsy?
}
```

## Javascript: Logical OR Operator

- in javascript `||` is the **Logical OR** operator. Very early on, we learned it for use
  in conditional tests, like this:

```js
if (x === 3 || x === 5) {
  // do something
}
```

- in an example like the above, it's pretty easy to understand, it works just like it
  reads in English: _"If x is 3 **OR** x is 5..."_.
- but there is a bit more to this operator. The way it truly works is this, considering
  the syntax:

```
expr1 || expr2
```

- if `expr1` is **truthy**, the result or return of the whole expression is `expr1`.
  Otherwise the result is `expr2`. That means that you can use the `||` operator _outside
  of conditionals_ like this:

```js
let x = true || 5;
```

- the way to think about the above expression is like this:
  - first look at the left side (which is `true`)
  - is it truthy? (yes, because `true` is truthy)
  - therefore, the result of the expression is the LEFT SIDE, which is `true`
  - so, `x` is `true`;
- in the same way, consider this expression:

```js
let y = undefined || "hello";
```

- the way to think about the above expression is like this:
  - first look at the left side (which is `undefined`)
  - is it truthy? (no, because `undefined` is falsy)
  - therefore, the result of the expression is the RIGHT SIDE, which is `"hello"`
  - so, `y` is `"hello"`;

## Javascript: Object bracket notation

- the most common way to _access object properties_ is using **dot notation**:

```js
const dog = {
  name: "Fern",
  bitesKids: true,
};

let name = dog.name; // "Fern"
```

- but you can also _access object properties using **square bracket notation** with
  **string keys**_:

```js
const dog = {
  name: "Fern",
  bitesKids: true,
};

let name = dog["name"]; // "Fern"
let bites = dog["bitesKids"]; // true
```

- usually, it's preferable to use dot notation, it looks nicer and it's _less to type_.
  But objects **can have keys that don't allow you to use dot notation**:

```js
const dog = {
  "first-name": "Fern",
  "bites-kids": true,
};

// 🚨  Syntax error
// let name = dog.first-name;

let name = dog["first-name"]; // "Fern"
```

- in the above example, you're not allowed to do `dog.first-name` -- the hyphen `-` makes
  it **invalid javascript**. Notice also that I had to put _quotes around the property
  names_ when I declared the object as well.
- finally, when you have a property name (string) as a _variable_ you have to use the
  variable inside of square bracket notation:

```js
const dog = {
  name: "Fern",
  bitesKids: true,
};

let randProp = Math.random() < 0.5 ? "name" : "bitesKids";
let randValue = dog[randProp]; // "Fern" OR true
```

## Javascript: Object.keys() / Object.values()

- the global `Object` object has a bunch of useful static methods on it. One very useful
  one is `Object.keys(<someObj>)` - which _returns an array of all of the KEYS of an
  object_:

```js
const person = {
  name: "Jared",
  age: 41,
  hasBeard: true,
};

// -> ['name', 'age', 'hasBeard']
Object.keys(person);
```

- a common pattern is to use `Object.keys()` combined with `Array.forEach()` to _do
  something with each pair of values in an object:_

```js
const person = {
  name: "Jared",
  age: 41,
  hasBeard: true,
};

Object.keys(person).forEach(key => {
  const val = person[key]; // 😎 get the value for this key
  console.log(`${key} is ${val}`);
});
```

- also useful, (although usually a bit less often used) is `Object.values()` which
  **returns an array of the objects VALUES**, which is sort of the opposite of
  `Object.keys()`:

```js
const person = {
  name: "Jared",
  age: 41,
  hasBeard: true,
};

// -> ["Jared", 41, true]
Object.values(person);
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #40](https://htc-viewer.netlify.app/?id=5TNAz1HYg18)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan

- 2 day review all flashcards
- 2 day touch typing practice
- 8 days _Execute Program_ homework (2 weeks)
- 1 day "tidbits" homework
- 2 day React Homework

---

### Homework (week 1)

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable> <Checkable id="cccs">Watch
CCCS</Checkable> <Checkable id="xp-1">Execute Program #1</Checkable>
<Checkable id="xp-2">Execute Program #2</Checkable> <Checkable id="xp-3">Execute Program
#3</Checkable> <Checkable id="xp-4">Execute Program #4</Checkable>
<Checkable id="tidbits">Tidbits Homework</Checkable> <Checkable id="react-1">Start React Homework</Checkable>

<br />

### Homework (week 2)

<Checkable id="review-flash-2">review all flashcards</Checkable>
<Checkable id="typing-2">touch typing practice</Checkable> <Checkable id="xp-5">Execute Program #5</Checkable>
<Checkable id="xp-6">Execute Program #6</Checkable> <Checkable id="xp-7">Execute Program
#7</Checkable> <Checkable id="xp-8">Execute Program #8</Checkable>
<Checkable id="react-2">Finish React Homework</Checkable>

---

---

## Tidbits Homework

---

- slowly and carefully (remember sad Jared writing all of this in his office each week!) review the "New Stuff" above ^^^.
- `ssh` in to the HTC pi and make a new dir: `~/y2-w3`
- fork [this repo](https://gitlab.howtocomputer.link/htc/tidbits), and clone your fork into the `~/y2-w3` dir you made above, then connect with vscode
- **make a new branch!!**
- install your dependencies
- run `npm run test` or `npm run test:watch` to run the tests (they will all be failing)
- edit `./src/tidbits.spec.ts` until all of the tests are passing
- after the tests are all passing, continue down and fill in the answers to the two sections below
- commit your work, create a MR, slack me the MR so I can check your work.

---

## React Homework

---

- do the **Tidbits** homework first 👍
- slowly and carefully review all of the React items from [week 2 homework](hjttps://homework.howtocomputer.link/year-2/week-02)
- play around with [this example website](http://jared.howtocomputer.link/react-audios/). Try out the two buttons, see what they do. You're going to be making a copy of this website. (Don't get scared, you have 2 weeks, and it's not that bad, I have hints below!)
- read all of the requirements and hints below before starting
- fork [this repo](https://gitlab.howtocomputer.link/htc/react-audios), clone your fork into `~/y2-w3`, connect with vscode
- install dependencies, fire up your dev server, and forward your ports
- **hints and requirements**
  - the three colors I use in the example are:
    - lightest gray: `#eaeaea`
    - darker gray: `#ccc`
    - blue: `#5f8c9e`
  - you must have (at least) **3 components**: `App.tsx` (file is already created for you), plus an `Audio.tsx` and a `Button.tsx`
  - only the `App` component will use `useEffect` to fetch an array of data. The code to do this will be _almost identical_ to the `api.cats.com` example in the week 2 "New Stuff" linked above.
  - the api url you will need to fetch is: `https://api.friendslibrary.com/app-audios`
  - your `App` component will need to have some **state** -- an **array of audio data**. Set the initial value to an empty array. When the API response comes back, set the state so that it's the array of json-decoded data. Again, this is **almost identical to the example**.
  - your `App` component will need to **map over the array of audios,** passing props to the`Audio` component.
  - you will want to `console.log` over what comes back from the API, so you can figure out how to pass the right props to the `Audio` component. The images I used are one property of each audio data object.
  - the `Audio` component will use `useState` **twice** -- once to keep track of if that audio has been "read", and one to keep track if it has been _removed_.
  - the `Button` component must take a prop called `primary` which is a boolean. If this prop is true, it should display blue, like the "Mark as read" button. If this prop is false, it should display like the white "remove" button. Use the `style` prop to accomplish this inside the `Button` component
  - the `Button` prop will also need to accept a prop which is a **function to be called when it is clicked**. Use the typescript type: `() => any` in your `Props` type. The `Button` component will have no state, it is dumb, it will just call whatever function you pass it as a prop, whenever it is clicked. The `Audio` component will pass a different function to the `Button` component for each of the two times its used.
  - to "remove" an audio when the user clicks "remove" you don't have to actually remove it, you should just fake it by hiding the component with CSS via the style prop...
  - take **baby steps!!** I recommend working in small chunks, _committing everytime you get a small thing working_. Here are **examples of the baby steps I would use**:
    - get the dev server up and forward my ports, make sure it's visible
    - get the `useEffect` API call in `<App />` working, console.log out the result
    - setup the _state_ for App.tsx, setting an `audios` variable using `useState`
    - map over the audios, rendering just the title of each audio, so you have a list of audios.
    - create the Audio component, decide what props you need
    - get the audio component looking good _without the buttons_
    - create the button components _without a click handler_, get it looking good when the `primary` prop is true or false
    - wire up the click handlers

---

## Execute Program Homework

---

- same as last week (except you don't have to register now)
- no more than 3 lessons per day
- at least one lesson on **four different days of the week**

---
