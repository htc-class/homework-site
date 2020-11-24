---
path: "/year-2/week-09"
---

# Year #2, Week #9 💻 🚂

_New stuff we learned this week:_ 🤔

## Webfonts

- the **font** you specify in a CSS `font-family` declaration _will only be
  visible to the user **if they have that font installed on their system**_.
  Sadly, there are only a few fonts that are reliably found on nearly all
  computers. These fonts are generally referred to as **web-safe fonts**. They
  are _safe_ for the web because they will be available for almost everybody.
- the web-safe fonts are (approximately):
  - **"Arial"** _(sans-serif)_
  - **"Arial Black"** _(sans-serif)_
  - **"Verdana"** _(sans-serif)_
  - **"Tahoma"** _(sans-serif)_
  - **"Trebuchet MS"** _(sans-serif)_
  - **"Impact"** _(sans-serif)_
  - **"Times New Roman"** _(serif)_
  - **"Didot"** _(serif)_
  - **"Georgia"** _(serif)_
  - **"American Typewriter"** _(serif)_
  - **"Andalé Mono"** _(monospace)_
  - **"Courier"** _(monospace)_
  - **"Lucida Console"** _(monospace)_
  - **"Monaco"** _(monospace)_
  - **"Bradley Hand"** _(cursive)_
  - **"Brush Script MT"** _(cursive)_
  - **"Luminari"** _(fantasy)_
  - **"Comic Sans MS"** _(cursive)_
- One way to deal with the fact that a user might not have a font installed on
  their system is by using the concept of **fallback fonts** -- that is,
  specifying a list of fonts in a CSS declaration:

```css
html {
  font-family: Baskerville, "Times New Roman", serif;
}
```

- from the above code, if the user doesn't have `Baskerville` (which generally
  only Mac users do), they will get `Times New Roman` -- also a _serif_ font.
  Sometimes this is _good enough_.
- however, because many web designers really wanted to be able to design their
  pages with specific fonts, eventually a standard called **Web fonts** emerged.
  It works like this: first you declare a `font-face` in your css like this:

```css
@font-face {
  font-family: "Goat Banjo Rodeo";
  src: url("goatBanjoRodeo.woff");
}
```

- a `font-face` declaration is comprised of a **name** for the font (line 2
  above), and one or more **sources** for a font-file for that font. The most
  common and modern source format is a `.woff` file, however, not all older
  browsers support that format, so you can supply a number of different sources,
  letting the browser choose which one they understand, like this:

```css
@font-face {
  font-family: "Goat Banjo Rodeo";
  src: url("fonts/gbr.eot");
  src: url("fonts/gbr-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/gbr-webfont.woff2")
      format("woff2"), url("fonts/gbr-webfont.woff") format("woff"), url("fonts/gbr-webfont.ttf")
      format("truetype"), url("fonts/gbr-webfont.svg#gbf") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

## classnames npm package

- it's very common in react to be applying a number of classes to an item, often
  with variables (from css modules) or conditionally based on some state. This
  can lead to some ugly-looking junk trying to set the `className` prop of
  components:

```tsx
const Block: React.FC = () => {
  const [ok, setOk] = useState(false);
  return (
    // this next line is yucky
    <div className={`${style.wrap}${ok ? " ok" : ""}`}>
      <h1>Howdy</h1>
      <p>Partner</p>
    </div>
  );
};
```

- the npm _classnames_ package is a widely-used solution to this problem. It
  gives you a bunch of flexibility for passing values to it, and always produces
  a nice string of _space-separated css classes_:

```js
import classnames from "classnames";

// pass it plain old strings:
classnames("foo", "bar");
// -> "foo bar"

// or an array of strings:
classnames(["foo", "bar"]);
// -> "foo bar"

// it pitches falsy things and non-empty strings:
classnames(undefined, null, false, "", "foo");
// -> "foo"

// good for CONDITIONALLY adding a class:
let isOpen = true;
let isBlue = false;
classnames("menu", isOpen && "open", isBlue && "blue");
// -> "menu open"

// also accepts object syntax where KEYS are the classnames
// and VALUES are booleans controlling if class is added
// so we could rewrite the above example as:
classnames("menu", {
  open: isOpen,
  blue: isBlue,
});
// -> "menu open"

// you can MIX AND MATCH all the ways of passing args:
classnames(["foo"], "bar", null, { lol: true });
// -> "foo bar lol"
```

## CSS Transitions

- by default, when certain CSS values change dynamically, the browser _renders
  the change **instantaneously**_. Consider this CSS:

```css
a {
  color: red;
}

a:hover {
  color: blue;
}
```

- when a user hovers over an `<a>` tag, the color will **instantly** change to
  blue. But if we wanted the transition to blue slowly, we could indicate that
  by adding `transition-<x>` properties, like so:

```css
a {
  color: red;
  transition-duration: 200ms; /* LENGTH of transition */
  transition-property: color; /* WHAT to transition */
  transition-timing-function: linear; /* SHAPE of trans. */
  transition-delay: 100ms; /* DELAY before transition */
}

a:hover {
  color: blue;
}
```

- examples of `transition-timing-function` include `linear`, `ease`, `ease-in`,
  `ease-out`, `ease-in-out`, and more...
- some css properties **can not be transitioned** -- and it's fairly intuitive
  to figure out which ones those are. If there is no way to mathematically
  calculate _intermediate states_, then it probably can't be transitioned. For
  instance, moving from `display: none` to `display: flex` is not
  transitionable, because there is no way to smoothly transition from one to
  another. But you can transition from `opacity: 0` to `opacity: 1` to achieve a
  "fade-in" effect.

## Typescript: Type "Narrowing"

- Typescript can **NARROW** types inside of _conditional statements_.
- Study this code block, reading the comments, until it makes sense.

```ts
type MyUnion = string | boolean | Array<string>;

function takesUnion(val: MyUnion) {
  // on this line TS only knows that `val` is
  // one of 3 things: string, boolean, or array of strings
  if (Array.isArray(val)) {
    // inside these rabbit ears
    // 😎 TS KNOWS that `val` must be `Array<string>`
    // so you can safely do:
    val.forEach((item) => console.log(item));
  } else if (typeof val === "string") {
    // 😎 in here TS KNOWS that `val` is a string!
    // so this works and typechecks!
    val.toLowerCase();
  } else {
    // 😎 and in here TS KNOWS `val` must be a boolean!
    let x: boolean = val; // OK √
  }
}
```

- now
  [watch this short video i made](http://jared.howtocomputer.link/type_narrowing.mp4)

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [CSS Transitions Video](https://htc-viewer.netlify.app/?id=Nloq6uzF8RQ)
- [Type Narrowing Video](http://jared.howtocomputer.link/type_narrowing.mp4)

---

## Homework Plan

_🦃 &nbsp;A bit lighter on homework this week because of Thanksgiving. But make
sure to **do FOUR separate days of Execute Program!**_

- 1 day review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1 day classnames assignment
- 1 day touch typing practice
- 1 day touch watch CSS Transitions video
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="transitions">CSS Transitions Video</Checkable>

<Checkable id="classnames">Classnames Assignment</Checkable>

<Checkable id="flashcards">Flashcard App assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Flashcard App Homework

---

- Slowly and carefully review the "New Stuff" above ^^^.
- Watch the _CSS Transitions_ Video first.
- Merge your MR from last week, switch to master, pull changes from `origin`,
  delete your branch from last week, and make a new branch.
- Integrate _2_ _webfonts_ from Google Fonts into your Flashcards app.
- commit your work.
- Add _2_ _CSS Transitions_ to your Flashcards app -- but **no using the
  `transition:` _shorthand_ property!** Use the longer-form `transition-<x>`
  format. Shorthands are (almost always) evil!
- commit your work.
- add **5 new `css`** cards:
  - `@font-face`
  - `transition-duration`
  - `transition-property`
  - `transition-timing-function`
  - `transition-delay`
- add **15 new cards** from your old physical/digital location.
- commit your work.
- build your site, push up a MR, put links in Slack.

---

## Classnames Homework

---

- Slowly and carefully review the "classnames" section and the "type narrowing"
  section in New Stuff above ^^^.
- visit [this url](https://gitlab.howtocomputer.link/htc/classnames), copy the
  git clone url, clone the repo and open up the cloned repo through vscode.
- install the dependencies
- create a new branch
- read ALL the rest of these instructions before getting started!
- run the test with `npm run test` or `npm run test:watch` (for watch mode)
- one by one get the tests passing, changing the next `xit()` to `it()` one by
  one.
- hints/clarifications:
  - the real `classnames` package takes _variadic_ arguments, meaning, it can
    take _as many arguments_ as you pass it. I haven't taught you how to do that
    in JS yet, so for this assignment, we're limiting the function to take 1 - 3
    arguments. I already created the function signature types for you, and made
    the last two arguments _optional_ by using the `?` char. You will have to
    slowly morph the `Input` type, making it a **Union** of all the things that
    the function can accept.
  - because the function takes up to 3 arguments, each of which can be all of
    the same things, you might find it's helpful to create a helper function,
    something like `handleSingleArgument()` and then call it 3 times, using it
    somehow to build up the final output of the function.
  - you might want to review some of the Array functions
    [from here](https://homework.howtocomputer.link/week-23).
  - you can use the function `Array.isArray(x)` to test if something is an
    array. Don't use `typeof` because it returns `object` for arrays.
  - if you have a **Union type** in typescript, something like
    `type Foo = string | boolean;` you can **test the type** using various
    tricks (like the `typeof` operator and `Array.isArray()`). Typescript is
    smart enough to **narrow** the type _inside_ an `if` block.
  - if you haven't read the "Type Narrowing" section above **including watching
    the video I made** (linked above) -- stop and do that now. It will be very
    helpful for this assignment.
- commit your work when you finish, submit a MR, slack the MR url.
