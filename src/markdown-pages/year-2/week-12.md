---
path: "/year-2/week-12"
---

# Year #2, Week #12 💻 🛸

_New stuff we learned this week:_ 🤔

## CSS: Object-Fit and Object-Position

- when applying an image as a _css background image_, [we've learned](/week-20)
  that we can control the **fit**, **sizing**, and **placement** of the
  background image within the containing element:

```css
.my-div-with-img-background {
  background-image: url(./cats.jpg);
  background-size: cover; /* <-- 👋 */
  background-position: center; /* <-- 👋 */
}
```

- we can achieve the same sort of control over regular `<img />` tags as well,
  by controlling the dimensions of the image element and describing how we want
  to **fit the image** within those dimensions using `object-fit` and
  `object-position`:

```html
<style>
  img {
    width: 200px;
    height: 200px;
    object-fit: cover; /* <-- 👋 */
    object-position: center; /* <-- 👋 */
  }
</style>

<img src="./cats.jpg" />
```

- values for `object-fit` include:
  - `contain` (like `background-size: contain`)
  - `cover` (like `background-size: cover`)
  - `fill` (stretch/force image to match dimensions)
  - `none` (do nothing, act like a normal image)
- `object-position` can be set like so:
  - `object-position: 50% 50%;` (this is the default)
  - `object-position: right top;`
  - `object-position: left bottom;`
  - `object-position: 100px 30px;`
- For more info, and interactive demos, see MDN for
  [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) and
  [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)

## HTML: image srcSet

- When it comes to HTML images, we have a thorny problem. Some users of our
  websites will be viewing from a very small screen, like a phone. While others
  have massive ultra-high-definition 6k monitors. _How big should we make our
  images then?_ If we make them beautiful for large monitors, they will load
  slowly and not look any better for people on phones. If we optimize for
  phones, they images will load fast for everyone, but look _terrible_ on big
  screens. What to do!??
- the browser makers have helped us out by extending the HTML spec so that
  `<img />` tags now supports some new attributes, one of which is `srcset`:

```html
<img
  srcset="cats-small.jpg 480w, cats-full.jpg 800w"
  src="cats-full.jpg"
  alt="My rad cat"
/>
```

- the `srcset` attribute lets us specify _more than one_ image, with information
  about their actual size. Then, the browser will pick the right source to load
  based on the width of the screen of the user viewing the page.
- because we sometimes do tricky things and display images at different sizes
  based on media queries, there's also another attribute called `sizes` which
  allows us to **explicitly tell the browser what image to use at which screen
  sizes**:

```html
<img
  srcset="cats-small.jpg 480w, cats-full.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  src="cats-full.jpg"
  alt="My rad cat"
/>
```

## Javascript: Equality and non-primitive types

- In javascript, primitive values are tested for equality by **value**:

```js
let x = 3;
let y = 3;

x === y;
// -> true

let str1 = "foo";
let str2 = "foo";

str1 === str2;
// -> true
```

- However, _non-primitives_ are tested for equality (when using
  **triple-equals**) by **reference** -- which basically means "is it actually
  the same THING in memory":

```js
let arr1 = [0];
let arr2 = [0];

arr1 === arr2;
// -> false 🧐

let obj1 = {};
let obj2 = {};

obj1 === obj2;
// -> false 🧐
```

- sort of the flip-side of this is that you can have **two variables** that
  **REFERENCE THE SAME** data structure (like an array or object), and _if you
  mutate one of them, you're mutating the other at the same time_ because they
  are just two variables **pointing to the same piece of memory**. Consider this
  snippet of code:

```js
let kids = [`Win`, `Harriet`];

// 🚨 careful! `students` is not a NEW array
// its just another name for the `kids` array
let students = kids;

// 😎 this is `true` because they are THE SAME ARRAY
students === kids;
// -> true

// now we mutate the `students` array
students.push(`Tabitha`);

// the `kids` array got mutated too
console.log(kids);
// -> ['Win', 'Harriet', 'Tabitha'`]
```

## Non-primitive state in React

- Before React calls your _render_ function to re-reconcile the virtual DOM
  against the real DOM, if **first checks if any of the props have changed using
  `===`**. If no props have changed, it skips re-rendering, for speed's sake.
- This works as expected for primitive values in state, like _numbers, booleans,
  strings, etc_. But if you have a piece of state that is an array or object,
  and you only mutate the state, React won't see that anything has changed, and
  won't re-render, causing a weird _bug_:

```tsx
const App: React.FC => () => {
  const [pets, setPets] = useState([`Fern`, `Scout`]);
  return (
    <div onClick={() => {
      // 🚨 BAD! `<Pets />` component below won't re-render
      // because the `pets` array isn't a NEW array
      pets.push(`Dumpy`);
      setPets(pets);
    }}>
      <Pets pets={pets} />
    </div>
  );
}
```

- The way to work around this limitation is to use **array or object SPREADING**
  to create a new object or array:

```tsx
const App: React.FC => () => {
  const [pets, setPets] = useState([`Fern`, `Scout`]);
  return (
    <div onClick={() => {
      // ✅ WORKS! spreading creates a NEW array
      // so react will notice the change and re-render
      setPets([ ...pets, `Dumpy` ]);
    }}>
      <Pets pets={pets} />
    </div>
  );
}
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [Object Fit Video #1](https://htc-viewer.netlify.app/?id=5CZyxnCdXuk)
- [Object Fit Video #2](https://htc-viewer.netlify.app/?id=6yAAV-uP0po)

---

## Homework Plan (2 weeks)

- 1 day watch
  [Object Fit Video #1](https://htc-viewer.netlify.app/?id=5CZyxnCdXuk)
- 1 day watch
  [Object Fit Video #2](https://htc-viewer.netlify.app/?id=6yAAV-uP0po)
- 2 days review all flashcards (in your app)
- 1 day Akron Snowmen assignment
- 2 days touch typing practice
- **8** days [_Execute Program_](https://www.executeprogram.com) homework
- **OPTIONAL:** Tic-Tac-Toe Challenge 💪

---

<Checkable id="review-flash-1">review all (app) flashcards #1</Checkable>

<Checkable id="review-flash-2">review all (app) flashcards #2</Checkable>

<Checkable id="object-fit-1">Watch Object Fit Video #1</Checkable>

<Checkable id="object-fit-2">Object Fit Video #2 (must be on different day from
#1)</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

<Checkable id="xp-7">Execute Program #7</Checkable>

<Checkable id="xp-8">Execute Program #8</Checkable>

---

## Akron Snowmen Assignment

---

- connect with vscode into your `akron-snowmen` dir
- switch your branch to master and pull from upstream
- delete any branches you have hanging around (practice good git hygiene!)
- run `npm install` to make sure you have the `husky` pre-commit hook stuff
  working from here on out.
- create a new branch for this weeks' work.
- find your name below and complete the assigned work
- when you finish, submit a MR
- for each other student, leave at least one detailed comment **requesting a
  change in the code**.
- incorporate at least one of the other student's suggestions on your MR.
- **Important:** - once again this week, we're _only working in Storybook_.
  Starting the next week, we'll begin putting things together in Next, but not
  this week. You should only be using `npm run storybook` and
  `npm run build-storybook`
- when you're finished, submit a MR, build the Storybook site, and submit _both_
  URLs on slack.

---

### Akron Snowman Sub-Assignments

---

- **Tabitha**:
  - change the `Image` component so that it uses `next/image` `<Image />`
    component, instead of a background image.
  - use `objectFit` and `objectPosition` props to get it looking right
  - refer to
    [this documentation](https://nextjs.org/docs/api-reference/next/image) if
    necessary
  - images are in the `public/` dir, and should be referenced like this
    `/plow.jpg`, _without_ the `public/` dir in the path, that's how Next works.
  - also, win's comonent is really the whole block that contains an image and
    the text, so `Image` isn't the best name for it, rename the component and
    the files.
  - make sure that the storybook stories still work
- **Win**:
  - Make a `ContactBlock` component, matching the purple block on the example
    site.
  - Much of the content will be just you pulling in and using Tabitha's `Form`
    component, but you'll need to create the rest of the block, and make sure
    everything has the correct layout and media queries, etc.
  - remember mobile-first
  - create a storybook story fot it
- **Harriet**:
  - create a `PinkBlock` component to house Kiah's `PingGrid` comopnent, making
    it match the example site
  - use the Button component
  - create a storybook story for it
- **Willow:**
  - create a `Footer` component, to match the one on the example site.
  - start with mobile first
  - create a storybook story for it
- **Kiah:**
  - create a `HeroBlock` component for the main big first (non-nav) block on the
    example site
  - use `next/image` and css positioning wizardry to make the snow plow image be
    behind the text, don't use css background images for this one (at least for
    now)
  - mobile first
  - create a storybook story for it
  - incorporate the `Button` component in it.

### Tic Tac Toe Challenge 💪

_Starter kit and instructions coming tomorrow (Wednesday, 12/23)_
