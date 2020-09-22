---
path: "/year-2/week-02"
---

# Year #2, Week #2 💻 🚔️

_New stuff we learned this week:_ 🤔

## React: Mapping over Arrays

- a very common pattern in React is to _map over an array, producing a series of components_. Imagine you have this dataset:

```js
const cars = [
  { name: "Honda Accord", color: "blue", miles: 80000 },
  { name: "Jeep Cherokee", color: "yellow", miles: 20000 },
  { name: "Ford Taurus", color: "black", miles: 50000 },
];
```

- if you wanted to make a component out of the data from each element in the array, you can **map over the array, returning a React component for each item:**

```tsx
const App: React.FC = () => {
  return (
    <div>
      <h1>Cars</h1>
      <ul>
        {cars.map(({ name, color }) => {
          return <Car name={car.name} color={car.color} />;
        })}
      </ul>
    </div>
  );
};
```

- the only problem with the above code is that React _will complain_ about not getting separate **keys** for each item in the array. React needs this for it's internal housekeeping and updating of your component. To keep React happy, you have to give every mapped-over component a **key unique for that array** (not unique for the whole component or your whole app), like this:

```tsx
/* ... */
cars.map(({ name, color }) => {
  return <Car key={name} name={name} color={color} />;
});
/* ... */
```

- notice that I _re-used_ the `name` property for both the `key` and the `name` prop. That's fine! I know the name is unique, and it was handy, so I used it!
- just like in a normal arrow function, if you have just one expression and want to return it, you can **omit the curly braces and `return` statement**. That means the above could be written like this as well:

```tsx
/* ... */
cars.map(({ name }) => <Car key={name} name={name} />);
/* ... */
```

- the mapping function is just a regular-old javascript function, so you can write code in there and return any arbitrary JSX you like:

```tsx
/* ... */
cars.map(({ name, color, miles }) => {
  const isClunker = miles > 75000;
  return (
    <div key={name} className={isClunker ? `clunker` : ``}>
      <h2>{name}</h2>
      <h3>Color: {color}</h3>
    </div>
  );
});
/* ... */
```

- notice above on line 5 _I still had to provide the `key` prop_, which must go on the _outermost element of whatever you're returning from the map function._

## React: Events

- in vanilla DOM-scripting, if you want to listen for and respond to user events like **clicks**, you need to use `element.addEventListener('click', someHandler)`. In React, we put these handler functions directly **in the JSX**, and React behind the scenes turns them into DOM event listeners for us! The most common event to listen for is a "click". Every normal HTML element in React supports a `onClick` prop which takes a function:

```tsx
function logHello() {
  console.log("Hello!");
}

const App: React.FC = () => {
  return (
    <div>
      <h1 onClick={logHello}>click me!</h1>
    </div>
  );
};
```

- but it's much more common to use **arrow functions** for click handlers:

```tsx
const App: React.FC = () => {
  return (
    <div>
      <h1 onClick={() => console.log("Hi")}>click me!</h1>
    </div>
  );
};
```

- there are other event props you can use like `onDoubleClick`, `onContextMenu` (right-click), `onMousenter`, `onMouseleave`, etc. Some special html elements get their own special event props that make sense for them, for instance on `<input />` elements you can do `onChange`.
- a **very common use** of event handlers in React is to **update component state** using a setter provided by `useState()` (see below for more)

## React: useState

- another super basic tool that React gives you is **the ability to manage the STATE of your components over time**. The most basic way to do this is using a built-in **hook** provided by React called `useState`. The basic API is this:

```js
import React, { useState } from "react";

/* ... later on, down inside a Component ... */
const [currentVal, setNewVal] = useState(initialValue);
```

- that is to say, calling `useState()` returns you back a **tuple**. The first element is _always guaranteed to be the **current value of that piece of state**_. The second element is _a function to **change (set) the state**_. Here's a simple example:

```tsx
const [timesClicked, setTimesClicked] = useState(0);
```

- very commonly, you would use some sort of event handler (like an `onClick` function) to update the state. Here's an example of a simple **counter** component that displays how many times a button has been clicked, and updates the count when the button is clicked:

```tsx
const Counter: React.FC = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  return (
    <div onClick={() => setTimesClicked(timesClicked + 1)}>
      <p>I have been clicked {timesClicked} times.</p>
    </div>
  );
};
```

## React: Fragments

- in your first week playing with React, you may have come across this cryptic error: `jsx expressions must have one parent element`. That error turns up when you create a component that _is not contained within one element_, like this:

```tsx
const BadComponent: React.FC = () => {
  return (
    <h1>This is bad!</h1>
    <p>This will cause an error!</p>
  );
}
```

- it's hard to see why that's a problem, but it has to do with how JSX is turned _back into javascript_ under the hood. The problem is that the `BadComponent` is returning **TWO elements**, an `h1` and `p`. To fix it, we can just wrap it in some other element, like a `<div>` (note lines 3 and 6):

```tsx
const GoodComponent: React.FC = () => {
  return (
    <div>
      <h1>This is good!</h1>
      <p>Error will be gone, thanks div!</p>
    </div>
  );
};
```

- the sad thing about this is **sometimes we don't want an extra `div` in our markup!**. In that case, React lets us use a special **dissapearing element** called a **Fragment**. It works like this:

```tsx
const GoodComponent: React.FC = () => {
  return (
    <React.Fragment>
      <h1>This is good!</h1>
      <p>Error will be gone, thanks div!</p>
    </React.Fragment>
  );
};
```

- using `React.Fragment` instead of a `div` keeps away the error messages, without adding an extra div in the final markup. Hooray! 😊
- and if you don't like typing `React.Fragment` -- you can also do it just like this:

```tsx
const GoodComponent: React.FC = () => {
  return (
    <>
      <h1>This is good!</h1>
      <p>Error will be gone, thanks div!</p>
    </>
  );
};
```

- those weird `<>` and `</>` are the same as writing `<React.Fragment>` and `</React.Fragemtent>`, and they are less to type, and look a bit more like the reality that these tags are actually nothing.

## React: Style Prop

- in normal HTML, you can write **inline css** using the **style attribute** like so:

```html
<div style="color: red; margin-top: 3em;">
  <h1>Foobar</h1>
</div>
```

- in React, every primitive HTML element supports a `style` **prop**, but the difference is you pass it an **object** with camel-cased CSS rules, like so:

```tsx
const Component: React.FC = () => {
  return (
    <div style={{ color: "red", marginTop: "3em" }}>
      <h1>Foobar</h1>
    </div>
  );
};
```

- **TAKE NOTE:** make sure you notice the **double curly braces, they are required**. The outer curly braces switch you into javascript mode, and the inner braces are the outside of the object.

## React: useEffect

- React has another _hook_ called `useEffect` that is used for doing **side-effecty** sorts of things. Here's an example where we update the `Counter` component from an example in the `setState` section, so that we run the "side-effect" of setting the web page's `<title>` tag:

```tsx
import React, { useEffect } from "react";

const Counter: React.FC = () => {
  const [timesClicked, setTimesClicked] = useState(0);

  // here's us making a side-effect
  useEffect(() => {
    // update document title tag using the browser's API
    document.title = `You clicked ${timesClicked} times`;
  });

  return (
    <div onClick={() => setTimesClicked(timesClicked + 1)}>
      <p>I have been clicked {timesClicked} times.</p>
    </div>
  );
};
```

- `useEffect` is a function that takes one or two arguments. The first argument is a **function to run** and the second argument is a _list of dependencies that react uses to know how often to run your effect_. We'll learn more about it in the weeks to come. For now, if you learn two facts, it's good enough to get started:
  - fact one: if you do not supply the second argument (like in the example above) your effect function will run **every time the component renders**
  - fact two: if you supply an empty array as the second argument (`[]`), then your effect will run once and only once, the first time the component renders.
- `useEffect()` It can be used for lots of things, but a very common use-case is to make a network request to an API to fetch some data, when it is often combined with `useState()`:

```tsx
import React, { useEffect } from "react";

const App: React.FC = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("http://api.cats.com")
      .then(response => response.json())
      .then(catsJson => setCats(catsJson));
  }, []); // <- notice 2nd argument! will run EXACTLY ONCE

  return (
    <div>
      <h1>Cats</h1>
      {cats.map(cat => (
        <Cat name={cat.name} key={cat.name} />
      ))}
    </div>
  );
};
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #39](https://htc-viewer.netlify.app/?id=zTi3_l5h5PQ)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan

- 1 day review all flashcards
- 1 day touch typing practice
- 4 days _Execute Program_ homework
- 2 days react homework

---

### Homework

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="xp-1">Execute Program #1</Checkable>
<Checkable id="xp-2">Execute Program #2</Checkable>
<Checkable id="xp-3">Execute Program #3</Checkable>
<Checkable id="xp-4">Execute Program #4</Checkable>
<Checkable id="react-cars">React #1: Cars</Checkable>
<Checkable id="react-flashcards">React #2: Flashcards (coming soon...)</Checkable>

---

## Execute Program Homework

---

- visit [Execute Program's website](https://www.executeprogram.com) and register for an account (it's free). You'll need to supply your email, and probably click a link that is sent to that email address.
- once you click the link in your email, select the **Typescript** course
- get started reading and answering the prompts
- four times this week, come back to Execute Progam (it will send you an email reminder every day) and do **at least one new lesson** plus **any reviews that it makes you do**.
- when you come back to do Execute Program on a new day, it will start by making you quickly review something from a lesson you have already completed. Always do the review first (I don't think it gives you another option), but after the review is done, do at least one NEW lesson each day. So, every day (except the very first) will consist of:
  - whatever review the program gives you
  - at least one new lesson
- if you have time and interest, you can do more than one lesson in the beginning, but:
  - don't do more than 3 per day, it will hurt your learning to go so fast
  - after a while, the program will only let you do one new lesson each day with paying, so you'll be stuck at that point.

---

## React Homework #1: React Cars 🚗

---

- slowly and carefully review all the "New Stuff" above.
- make a fork of [this repo](https://gitlab.howtocomputer.link/htc/react-cars)
- `ssh` into your home dir, create a directory called `~/y2-w2`
- `cd` into that dir and clone **your fork** of the repo
- checkout a new branch **Harriet, that means you too!**
- connect to that directory with Vscode
- You're going to be creating a simple React app copying [this webpage](http://jared.howtocomputer.link/react-cars/)
- **read these hints and requirements FIRST**
  - after you connect with vscode, checkout `./src/data.ts` -- that's going to be your data source for your app. It's an ARRAY of objects.
  - you'll need to _mount the react app_ with `ReactDOM.render()` in `index.tsx`. If you forgot how to do that, refer to last weeks "New Stuff"
  - I want you to create **3 components**: `<App />`, `<Car />`, and `<SeePrice />`, each in a separate file.
  - in the `App` component, you will need to **map over the data** passing props down to a `<Car />` component for each item in the data array.
  - don't forget the special `key` prop!
  - you must use the `color` property of each car object to set the background color of your `<Car />` component **using the `style` prop**.
  - you'll need to attach a click handler to the `SeePrice` component, so that it `alert`s the price, like my example.
  - make sure your `SeePrice` component changes color on hover, like mine
  - spin up the dev server with `npm start` while you're working, and when you're done, run `npm run build`, just like last week.
- **Kiah Credit: ✨** add some **state** to this app: make a button that says "Give me a discount". After the user clicks it, all the prices should be cut in half.
