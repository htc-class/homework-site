---
path: "/year-2/week-15"
---

# Year #2, Week #15 💻 🚂

_New stuff we learned this week:_ 🤔

## Try/Catch/Throw

- Javascript has a built in `Error` object, which you can create instances of
  using the `new` keyword, like so:

```js
const myError = new Error(`uh oh!`);
```

- `Error` object instances have a `.name` and a `.message` property. The `.name`
  is not usually helpful, it's always just the string `"Error"` unless you
  manually override it. But the `.message` property is useful, giving the string
  that was passed to the constructor:

```js
const myError = new Error(`Unexpected goat`);
myError.name; // > "Error" - not super useful
myError.message: // > "Unexpected goat" - more useful 👍
```

- it's not that often that you capture an **error** object into a variable like
  shown above. Much more commonly you **THROW** an error:

```js
throw new Error(`oh noes!`);
```

- to understand throwing errors, it's helpful to remember that javascript
  sometimes crashes because of errors, stuff like, if you try to do something
  illegal or impossible in your code, when the javascript engine reaches that
  code, it just crashes and breaks and stops execution, like in this example
  (which is only possible because we're not using typescript):

```js
let myString; // whoops, forgot to initialize it

// 🚨 RUNTIME Error!!!
// Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
myString = myString.toUpperCase();

// we'll NEVER get here - line 5 causes a runtime error
console.log(myString);
```

- so errors crash and terminate your program. Wouldn't it be cool if you could
  crash and terminate your program from within code? You can, by **throwing an
  Error**.

```ts
function printAgeGreeting(age: number): void {
  if (age > 40) {
    console.log(`Howdy old person`);
  } else if (age > 0) {
    console.log(`Hello spring chicken`);
  } else {
    // 🚨 will crash your program with an error!
    throw new Error(`Unexpected negative age!!!`);
  }
}
```

- but **why would you ever want to crash your own program** by throwing an
  error?
  - For one, you would prefer your program to crash if you get _truly
    unexpected_ data of some sort. In that case it's often better to crash the
    program than to keep dealing with the weird data, and letting it percolate
    into other parts of your system, or maybe get stored in your database.
  - the other reason you might want to throw an error is that **you're planning
    to CATCH it somewhere else in your code**.
- How do you **catch an error?** If you have some code you want to run that
  **might throw**, you can _wrap it in a_ `try/catch` _block_:

```js
try {
  thisFunctionMightThrow();
} catch (err) {
  console.warn(`Oops, an error occurred: ${err.message}`);
}
```

- you can have some code throw an error **DEEP** in your program, nested many
  function calls down. If it's not immediately caught, the error will keep
  propogating upward. So, in theory, you can catch every error in an application
  if you wrap just the outermost spot that kicks off the javascript with a
  try/catch.
- if you never catch an error, it makes it all the way to the node or browser
  runtime, and crashes your program.

## TypeScript: Complex/Composite Types

- we're already very comfortable annotating variables and functions with
  **primitive types** in TypeScript:

```ts
let num: number = 5;
let bool: boolean = true;
let name: string = "jared";
let empty: undefined = undefined;
let soNull: null = null;
```

- And we know how to _type arrays of primitives_:

```ts
let name: Array<string> = ["jared", "willow", "tabitha"];
let bools: Array<boolean> = [true, false, true, true];
let mixed: Array<boolean | number> [1, 4, true, 6];

// or if an array is of an explicit LENGTH
// we can make it a TUPLE
let tuple1: [boolean, string] = [false, "howdy"];
let tuple2: [number, number, string] = [3, 3, "three"];
```

- in a sense arrays are a simple **composite type** -- a type make of other
  types, or a _list of values_ each of which can have it's type described in TS.
- we've also [briefly looked at](/summer-2) how to type objects. Objects can be
  thought of as a **composite type** as well, it's where each key is a string
  and each value is some primitive type:

```ts
type Car = {
  make: string;
  model: string;
  mileage: number;
  convertable: boolean;
};
```

- and object/composite types can be **infinitely nested** creating the ability
  to make arbitrarily complex (or specific) types:

```ts
type Person = {
  name: string;
  age: number;
  primaryVehicle: Car; // <-- look 😎
  vehicles: Array<Car>; // <-- here too
};
```

- the above works great for _very specifically defined objects with **known
  keys**_, but what if you want an object that might have lots of different keys
  at runtime? For that case, you use an **index signature**:

```ts
type Definitions = {
  [word: string]: string;
};

const myDict: Definitions = {};

// ✅ works
myDict.goat = "barnyard animal";
myDict.helicopter = "transportation device";
```

- the `word` part on the left hand side above is just a helpful hint for humans,
  it’s not used anywhere by Typescript to compile or typecheck. We could have
  made it `key` or `k` or `hamSandwich`.
- making _richly expressive composite types_ is an incredibly useful tool for
  managing complexity in apps, especially when you **design your types** before
  writing your code.

## TypeScript: Generics

- a **"Generic"** in typescript is a type with some kind of a _"hole"_ in it --
  meaning a _type that contains some sort of information about the STRUCTURE of
  a composite type, but is flexible to permit different INNER types._
- the simplest generic we've already seen a lot is the array type: `Array<T>`
  where `T` is any type:

```ts
type Strings = Array<string>;
type Booleans = Array<boolean>;
type Mixed = Array<string | number | boolean>;
type Arrays = Array<Array<any>>;
```

- generic types always use angle brackets to hold one (or more) types: `<T>`, or
  `<T, K>`, these are called _type arguments_, because if you squint at them
  they're sort of like arguments to a function, except they are _arguments to a
  type_.
- we can make our own generic types, by using a _stand-in type name_ (usually
  `T` for "type"), like so:

```ts
type Pants<T> = {
  leftPocket: T;
  rightPocket: T;
};
```

- the above declaration declares a type of an object with a `leftPocket` and a
  `rightPocket` property, both of which are of type `T`. What's type `T`?
  Exactly!! That's for the user to decide. The type is **generic** -- it's
  flexible to adapt to different types:

```ts
const numberPants: Pants<number> = {
  leftPocket: 4,
  rightPocket: 5,
};

const booleanPants: Pants<boolean> {
  leftPocket: true,
  rightPocket: false,
};

const arrayPants: Pants<Array<string>> {
  leftPocket: ["goat", "banjo"],
  rightPocket: ["herp", "derp"],
};
```

- because `Pants<T>` is a valid type, it can even be passed in as it's own `T`,
  if you love **recursive pants**:

```ts
// Recursive Pants are Recursive 👖 👖 👖 👖 👖 👖
const recursivePants: Pants<Pants<number>> = {
  leftPocket: { leftPocket: 1, rightPocket: 2 },
  rightPocket: { leftPocket: 1, rightPocket: 2 },
};
```

- generic types can have **more than one type**, just separate them by _commas_:

```ts
type MixedPants<T, K> = {
  leftPocket: T;
  rightPocket: K;
};

const myMixedPants: MixedPants<string, null> = {
  leftPocket: "Jared",
  rightPocket: null,
};
```

- generic types can also supply default values:

```ts
// 😎 if `T` is not supplied, it will be `string`
type EasyPants<T = string> = {
  leftPocket: T;
  rightPocket: T;
};

// 😎 look ma, no angle brackets!
const easy: EasyPants = {
  leftPocket: "hamburger",
  rightPocket: "goat",
};
```

- generic types don't have to be objects, you can plug them in to any spot where
  you want a configurable "hole" in your type:

```ts
//                                      v-- type arg
type GenericTuple<T> = [string, number, T];

let myTuple: GenericTuple<boolean> = ["foo", 3, false];
```

- other things can have generic types in TS too, like classes, and
  **functions**. Generic functions are somewhat common, and are quite powerful.
  They work just like generic types, except you put the type argument before the
  parentheses, like this:

```ts
// this function wraps things in an array
function arrayIfy<T>(input: T): Array<T> {
  return [input];
}

arrayIfy("goat");
// > ["goat"]
arrayIfy(false);
// > [false]
arrayIfy([undefined]);
// > [[undefined]]
```

- in all the above cases, TS correctly infers the type you passed in. However,
  sometimes TS will "widen" the type it infers in a way you don't want. In that
  case, you can specify the type of what you're passing in at the call site,
  like this:

```ts
type Player = "red" | "black";

// 👎 TS gives us the type Array<string>
let attempt1 = arrayIfy(`red`);

// ✅  help TS out by specifiying the type:
let attempt2 = arrayIfy<Player>(`red`);
```

## CSS: calc() Function 🧮

- the CSS **calc** function lets you perform calculations on the right-side of a
  css declaration, anywhere a number-like value is expected.

```css
p {
  /* 300px */
  width: calc(100px * 3);
}
```

- the beauty of the `calc()` function is that you can mix-and-match units to
  calculate stuff that can only be determined when the browser is rendering:

```css
p {
  /* 😎 */
  width: calc(100vh - 5rem + 30px);
}
```

- it's OK to use `calc()` **inside** of css variable declarations, **AND** to
  use css variables inside of `calc()`:

```css
root: {
  --inner-width: calc(35% + 150px);
  --main-width: calc(100vw - (var(--inner-width) / 2));
}
```

## CSS: box-sizing

- the CSS `box-sizing` property controls **how the total width and height of an
  element is calculated**.
- the default value for `box-sizing` is `content-box` which means that the width
  and the height of an element **DO NOT INCLUDE border or padding**. So, for
  example, take this CSS:

```css
/* width of <p> will end up being 524px 🤔 */
p {
  width: 500px;
  padding: 10px;
  border: 2px solid hotpink;
}
```

- calculating the width or height of elements and remembering to add in padding
  and border is complicated and easy to mess up, and gets almost impossible if
  your padding is expressed in units like `em` or `rem`.
- because of this, CSS introduced `box-sizing: border-box;` which forces the
  width to be calculated to **INCLUDE padding and border**:

```css
/* width of <p> will end up being 500px 😎 */
p {
  box-sizing: border-box; /* <-- ✅ */
  width: 500px;
  padding: 10px;
  border: 2px solid hotpink;
}
```

- look carefully at that above example -- do you see how in one sense the
  _padding_ and _border_ dimensions sort of get **subtracted** from the total
  width? That's important to realize.
- basically, everybody wishes that the _default value was `border-box`_ but we
  can't break the web, so the default is still `content-box`. For that reason,
  many frameworks and developers always start their CSS with a little snippet
  flipping the default around, which looks like this:

```css
* {
  box-sizing: border-box;
}
```

---

## Homework Plan (two weeks)

- 2 days review all flashcards (in your app)
- 1 day Flashcard app refactor assignment _(coming soon)_
- 1 day Typescript Assignment
- 1 day Request/Response homework
- 1 day Akron Snowmen assignment
- 2 days touch typing practice
- **8** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typescript-generics">Typescript Assignment</Checkable>

<Checkable id="req-res">Request/Response Assignment</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-6">Execute Program #5</Checkable>

<Checkable id="xp-7">Execute Program #6</Checkable>

<Checkable id="xp-8">Execute Program #7</Checkable>

<Checkable id="xp-9">Execute Program #8</Checkable>

---

## Typescript Assignment

---

- slowly and carefully review **BOTH** typescript sections from the "New Stuff"
  above ^^^.
- _create a FORK_ of
  [this repo](/https://gitlab.howtocomputer.link/htc/ts-generics), then clone
  down your fork with vscode.
- create a new branch
- open the `types.ts` file, and slowly work through each problem, reading the
  comment-instructions and working on the types until you have _the strictest
  possible type that makes the section typecheck correctly_.
- when you're done, commit your work and open up a MR, slack the URL as usual.

---

## Request/Response Homework

---

- if you haven't done the typescript assignment, do that first
- _create a FORK_ of
  [this repo](/https://gitlab.howtocomputer.link/htc/parse-request), then clone
  down your fork with vscode.
- create a new branch
- install the dependencies
- run the tests in watch mode with `npm run test:watch` or run them manually
  with `npm run test`.
- start with the `src/create-request.spec.ts` file, working one test at a time,
  changing `xit` to `it` and `xtest` to `test` as needed.
- as you work on getting the tests to pass, you should be crafting and improving
  the `Request` **TYPE** in the `src/request.ts` file as well.
- you'll need to probably use all of your tricks, splitting strings, maybe
  regex, for loops, anything goes.
- take babysteps and think carefully through each step of the process.
- when you have `create-request.spec.ts` tests all passing, commit your work and
  move on to `src/req-string.spec.ts`. Those tests will guide you through
  creating a function that takes your `Request` object and turns it _back_ into
  a string.
- work through each test, one by one, getting them to pass.
- hint: if you want to _isolate_ just one test and maybe `console.log`
  something, change the test wrapping function to `it.only(...)` or
  `test.only(...)` and jest will run **just that test**.
- **NO `any` or `unknown` TS types allowed ANYWHERE** (when you're done).
- when you've got them all passing, commit your work, create a MR, and slack the
  URL.

---

## Akron Snowmen Homework

---

- connect to your AS repo in vscode, switch to `master`, pull from `upstream`
  and then you can force-delete your branch from last week. You can force-delete
  it because I'm not merging the student MR's for that project.
- create a new branch for this weeks work.
- find the description of work assigned to you below, and complete it. Then
  build, submit a MR, and slack both URLs.
- **hint:** a really good pattern for making components flexible and re-usable
  in various contexts is to have them accept an _optional_ `className` **prop**.
  That way, a component using it can pass a custom className prop if it needs to
  add special styles.

---

### Akron Snowman Sub-Assignments

---

- **Kiah**:
  - carefully study the sizing of the button on the example site, testing it at
    different screen sizes, from mobile, to large-screen
  - do whatever work is necessary to get the width and appearance of the button
    working correctly in all of the components of our site
  - you will likely have to extend the `Button` component to accept some kind of
    prop or props to allow the component that uses it to control what width or
    widths it should display at.
- **Willow**:
  - add Icons to the Grid block. You can try to match the ones on the example
    site, or pick others.
  - fix the color of the Pink block, and dial in the spacing and appearance of
    that whole block to more perfectly match the example site.
  - be sure to check all screen-sizes, the block should render correctly at all
    screen sizes.
- **Win**:
  - carefully study the "body" text on the example site -- "body" text means
    non-header text, sort of the paragraph-like longer blurbs of text. They all
    have about the same appearance.
  - create a `<BodyText>` component that encapsulates all of the styling
    necessary to make these chunks look exactly right.
  - create a storybook story for the component
  - be sure the line-height looks right.
  - check for anything needed for different screensizes
  - integrate your new `<BodyText />` component everywhere it should be used in
    all of the other components.
- **Harriet**:
  - Carefully compare the sizing of the image and text portions of the
    `<ImageAndTextBlock>` component on our site, and the example site.
  - spend some time dialing in the css so that the widths and heights are
    exactly correct, and match the example site at ALL screen sizes.
- **Tabitha**:
  - carefully study the Footer component on the example site, especially how
    it's items are aligned and spaces at all screen-sizes, not just small-medium
    and large.
  - especially take note of how the footer looks together with the nav bar
    appearing on the right.
  - make any needed adjustments to the HTML/CSS of the footer to get it looking
    exactly correct in it's new spot in the overall layout.
