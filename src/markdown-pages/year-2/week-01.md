---
path: "/year-2/week-01"
---

# Year #2, Week #1 💻 ⛵️

_New stuff we learned this week:_ 🤔

## Javascript: Ternary

- operators in programming languages can _operate on different numbers of **operands**_. For instance, the `++` operator in javascript is **unary** -- that is, it operates (has an effect) on only **one operand**. In the statement `x++` the `++` only applies to the variable `x`, hence it is **unary**.
- many operators are **binary**, meaning they take **two operands**, examples are `+`, `-`, and many others. For example in the expression `x + y` the `+` operator is **binary** because it works with (operates on) both `x` and `y`.
- in Javascript (and in most programming languages), there is **only one _ternary_ (3-way) operator**, the **conditional** operator. Because it's the only _ternary_ operator, it's usually just referred to as a **ternary** instead of it's more technically correct name the _conditional operator_.
- the conditional (ternary) operator is a combination of `?` and `:` and works basically like this:

```js
testCondition ? evaluateIfTrue : evaluateIfFalse;
```

- you can think of the ternary operator as _syntactic sugar_ over the very common pattern of `if / else`. Consider this snippet:

```js
let role = "";
if (name === "Jared") {
  role = "teacher";
} else {
  role = "student";
}
```

- The above code can be written much more succinctly with a ternary:

```js
const role = name === "Jared" ? "teacher" : "student";
```

- the two expressions after the conditional test can be any valid javascript expression:

```js
const name =
  person.hasBeard === true
    ? getBeardyName(person)
    : `${person.name} ${person.middleName} McNoBeard`;
```

## Javascript: Destructuring in Function Arguments

- We've already learned how to **destructure** objects and arrays:

```js
const person = { name: "Jared", hasBeard: true };
const kids = ["Win", "Harriet", "Dale", "Huck"];

// 👍 Destructure the `person` object
const { name, hasBeard } = person;

// 👍 Destructure the `kids` array
const [win, harriet, dale, huck] = kids;
```

- You can also **destructure _function arguments_**:

```js
const person = { name: "Jared", hasBeard: true };

// 😎  WHOA! We're destructuring inside a function signature
function isBearded({ hasBeard }) {
  return hasBeard;
}

// the above is the same as:
function isBearded(person) {
  return person.hasBeard;
}
```

## Typescript: Generic Types

- it's often useful in typed languages to have special kinds of types that **accept another type** to make them _more flexible and generically useful._ These are called **generic types**. In typescript they are signified using angle brackets `<>`. A good example is the **array type**:

```ts
type ArrayOfStrings = Array<string>;
type ArrayOfNumbers = Array<number>;
```

- you can think of generic types as **a type with a HOLE in it**. Or you can think of it as sort of like a _function that accepts an argument_.
- another example is the type for a `Promise`:

```ts
function fetchUrl(url: string): Promise<Response> {
  return fetch(url);
}
```

- Generic types are very commonly used when typing **components in react** -- the one we'll use most often is the `React.FC` type (which stands for "Function Component"). It gives you all the right types for a function component in react (including the `children` prop), and it **also accepts a type with your own custom props:**

```tsx
type Props = {
  name: string;
};

const Member: React.FC<Props> = ({ name, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>{children}</div>
    </div>
  );
};
```

## React

- React is a javascript library for building web (and native app) user interfaces. It allows you to build and modify complex DOM trees in a very straightforward, declarative way, without having to write a bunch of complicated DOM-scripting stuff.
- one core concept of React is that you can (and should!) **build your own _components_**. Components are like your own custom DOM elements! Here's how you might create a simple button component:

```tsx
import React from "react";

type Props = {
  primary: boolean;
  text: string;
};

const Button: React.FC<Props> = ({ primary, text }) => {
  return (
    <button className={primary ? `important` : ``}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
```

- you would then **use the above component** (probably in another file), like this:

```tsx
import Button from "./Button";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Button primary={true} text="Click Me!" />
    </div>
  );
};
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #38](https://htc-viewer.netlify.app/?id=DEHsvQ3Ylwg)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan

- 1 day review all flashcards
- 1 day touch typing practice
- 1 day ternary homework
- 1 day function argument destructuring homework
- 2 days react homework

---

### Homework (week 1)

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice #1</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="ternary">Ternary Homework</Checkable>
<Checkable id="destruct-fns">Destructuring in functions homework</Checkable>
<Checkable id="react-1">React Homework #1</Checkable>
<Checkable id="react-2">React Homework #2 (coming soon)</Checkable>
<Checkable id="typing-2">touch typing practice #2</Checkable>

---

## Ternary Homework

---

- slowly and carefully read the **Ternary** section of "New Stuff" ^
- fork this repo: https://gitlab.howtocomputer.link/htc/ternary
- connect to the HTC machine, clone your fork, and create a new branch
- refactor all of the functions in `ternary.ts` (above line 48) to use **ternaries** instead of `if / else`
- commit your work, and submit a MR, slack me the URL

---

## Function Destructuring Homework

---

- slowly and carefully read the **Destructuring in Function Arguments** section of "New Stuff" ^
- fork this repo: git@gitlab.howtocomputer.link:htc/destructure-fns.git
- connect to the HTC machine, clone your fork, and create a new branch
- refactor all of the functions in `destructure-fns.ts` to use **destructuring WITHIN the function signature**
- commit your work, and submit a MR, slack me the URL

---

## React Homework #1

---

- slowly and carefully read the **React** section of "New stuff" above ^^^.
- fork this repo: git@gitlab.howtocomputer.link:htc/react-intro.git
- connect to the HTC machine, clone your fork, and create a new branch
- install the npm dependencies (I won't always say this from now on, you'll need to just remember 👍 )
- NOTE: **no copy/pasting for this whole homework** I want you to _type this out yourself_ (to learn it better)
- create a new file called `App.tsx` in the `./src` directory
- then, create your first Component, a super basic shell React component, by typing this in:

```tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to my first React app!</h1>
    </div>
  );
};

export default App;
```

- next, open up the already-existing `src/index.tsx` file. Import React, ReactDOM, and the App component you just created:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);
```

- now, let's try to start up the app in **dev mode** using the script `npm start`. It should tell you two ports you need to forward. Use a keyboard shortcut to bring up vscode's command pallete to forward both ports. If parcel is able to build your app, you should see a link in the terminal, open the URL.
- test to make sure you've got your ports forwarded correctly, by editing the `Welcome to my first React app!` text in `App.tsx`, you should see the browser reload all by itself.
- if everything is working OK, come up with some sort of idea to make a simple website that will let you explore React some. You can do whatever you want, provided it meets these requirements:
  - you must create at least 3 more components, each in a separate file
  - at least one of your components needs to take multiple **props** and be used more than once in your app.
  - at least one of your components should **not be self-closing**, that is, it should use the `children` prop to have _innerds_ inside it.
  - one of your custom components must contain another custom component within it
  - add a stylesheet (like I did in class, by editing the `index.html` file), then use either classes (remember: `className`) or ids to identify components so you can style them. Add some basic styling via the CSS file.
- when you're done, quit the parcel dev server by sending a signal to the process, then run a different npm script to **build** your site so everyone can see it (without needing to forward ports). To do that run the command `npm run build`. It should output your app all built into the `~/www/react-intro` dir, making it available at `http://<yourname>.howtocomputer.link/react-intro`
- submit a MR so I can review your code and make any suggestions for improvements, and also slack the URL of your built website.

---

## React Homework #2

---

- make sure you've completed React Homework #1 first, it has more detailed step-by-step instructions. This homework doesn't hold your hand so much, so refer to the "New Stuff" or the instructions for React #1 if you get stuck.
- read all of these directions through once before starting to work.
- view [this example site](http://jared.howtocomputer.link/react-animals). You're going to be building a copy of this webpage in React. No peeking at the HTML or CSS!
- fork [this repo](https://gitlab.howtocomputer.link/htc/react-animals), then clone it down into the HTC machine, and connect to it with vscode.
- make a new branch
- this repo has an `npm start` and a `npm run build` command, just like the other one. To start working on it, you run `npm start` and make sure to forward the correct ports.
- you'll start with only a blank `./src/index.tsx` page, you'll need to create all the react components and mount your app using `ReactDOM.render()`, plus add CSS to get things to look right. Your work must meet these requirements:
  - You need to make at least 3 separate React components, each in their own file: one `<App />` main component, one `<Animal />` component (used 4 times, it should accept props), and one `<Button />` component for the "Like" and "Dislike" buttons.
  - the `<Button />` component should accept it's text ("Like"/"Dislike") as `children` not a normal prop.
  - hint: don't use the html `button` tag for the Buttons, they are hard to style -- just use a `span` or `a` tag, it will be easier.
  - each of your components should have correct Typescript typings, using `React.FC`.
  - the colors and facts don't have to match mine, but it should basically look the same
  - you must use **flexbox** and **media queries** to make the boxes go from a single column to multiple at `768px`, like the example does.
  - the like and dislike buttons shouldn't do anything or go anywhere
- the images are not included in your repo, instead reference them directly by using these full urls:
  - `http://jared.howtocomputer.link/animals/goat.jpg`
  - `http://jared.howtocomputer.link/animals/whale.jpg`
  - `http://jared.howtocomputer.link/animals/snail.jpg`
  - `http://jared.howtocomputer.link/animals/frog.jpg`
  - you can also use `cat.jpg` and `aardwolf.jpg` images from the same dir, if you want
- when you're done, run `npm run build` and it will output a built version of the site into `~/www/react-animals` that anyone can view.
- Slack your web url and a gitlab MR url in the #homework channel when you're done.
