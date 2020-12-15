---
path: "/year-2/week-11"
---

# Year #2, Week #11 💻 🚠

_New stuff we learned this week:_ 🤔

## CSS: Position (adding `fixed` and `sticky`)

- `position: static;` is the default value of every element's `position`
  property. `static` means that:
  - the element takes up space in the normal flow of the layout
  - trying to apply `top/left/right/bottom/z-index` _has no effect_.
- `position: relative;` is just like **static**, except:
  - `top/left/right/bottom` work to nudge the item away from it's normal
    location
  - the element becomes a _"cage"_ for any `absolute`-ly positioned elements
    _inside_ it.
- `position: absolute;` means that the element:
  - is **removed** from the normal layout and flow of the document, other
    elements move into it's spot to take it's place, and it _floats above, on
    top of them_.
  - it can be positioned with `top/left/bottom/right` -- these controls are
    _relative_ to the _first non-static positioned ancestor_ (or the window, if
    none).
  - you can control how they stack above or below other items with `z-index`
- `position: fixed` is similar to _absolute_, except:
  - it is always positioned **relative to the browser window** (it breaks out of
    all cages, except the window)
  - it doesn't scroll with the window or webpage at all, it stays **fixed** in
    place.
- `position: sticky;` is kinda whacky. It behaves _just like_
  `position: relative;` **until it touches the top of the browser** at which
  time it **STICKS** there, even as you keep scrolling. It will also _un-stick_
  if you scroll back up, going back to it's regular spot.
- _Note:_ with `position: sticky;` you need to specify **at least one of**
  `top/left/bottom/right` for the element to actually stick when it hits the top
  of the window. This is required so that the browser knows _where_ it should
  stick it at that point. If you omit this, the element will behave just like a
  `position: relative;` element:

```css
.sticky-div {
  position: sticky;
  top: 0; /* <-- REQUIRED for `sticky` to work */
}
```

## CSS: Psuedo-classes

- A CSS pseudo-class is a **keyword added to a selector** that specifies a
  **special STATE of the selected element(s).** We've already seen two of these,
  `:root` and `:hover`:

```css
/* vvvvvv----there is a PSUEDO-CLASS 😎 */
div:hover {
  /* bg=hotpink ONLY when div is HOVERED */
  background-color: hotpink;
}
```

- _pseudo_ sort of means "fake". Think of it like this, a _psuedo-class_ is
  almost like as if the browser adds an invisible, fake class to an element when
  it's in a given state. You can target that special fake class, using the
  `:<psuedo-class>` syntax.
- these are easy to confuse with **psuedo-elements** (like `::before` and
  `::after`). _Pseudo-elements_ aren't special **states**, they are actually
  like **fake elements** that you conjure up out of thin air, using only CSS.
  Wizardry! Psuedo-**classes** use **one colon** `:` and Psuedo-**elements** use
  **two colons** `::`.
- there are a
  [whole bunch of useful and interesting psuedo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes),
  we will just highlight a few of the most commonly used.
- the `:link` and `:visited` and `:active` psuedo-classes are usualy applied to
  links:

```css
a:link {
  /* :link matches an UNVISITED link */
  color: blue;
}

a:hover {
  /* :hover matches when link HOVERED */
  text-decoration: underline;
}

a:visted {
  /* :visited only matches if user has BEEN to the URL */
  color: purple;
}
```

- another really useful pseudo-class is `:focus`. This matches when an element
  when it **has focus**. This is most commonly associated with _form elements_.
  A form element is _focused_ if it is selected and ready to receive input.
  Focus styles are particularly important for _accesibility_ -- that is, helping
  people with disabilaties use web forms, for instance if someone can only use a
  keyboard, it is very important to show visually which form element is
  currently active, because they can't click into it.

```css
/* :focus styles on form elements are very important 👍 */
input:focus {
  border: 2px solid blue;
}
```

- the **`:first-child`** pseudo selector matches the **first element** among a
  _group of sibling elements._

```html
<style>
  /* match all paragraphs that are first among siblings */
  p:first-child {
    color: red;
  }
</style>
<div>
  <p>I will be red!</p>
  <p>I will be not be red.</p>
</div>
```

- similarly, the `:last-child` pseudo-selector matches the **last element**.
- but what if you wanted to match the **7th** paragraph? Have no fear --
  `:nth-child` has your back. `nth-child` is function-like, it takes an
  _argument_, like this:

```css
p:nth-child(7) {
  /* match the SEVENTH child-paragraph */
  color: red;
}
```

- `:nth-child()` is pretty powerful, it can also accept _expressions in terms of
  `n`_, like `:nth-child(3n)` which will match **every 3rd item**. For instance,
  `:nth-child(2n)` will match every **even** child element.
- `:nth-child()` also accepts **two keywords:** `even` and `odd`:

```css
p:nth-child(odd) {
  color: green;
}
p:nth-child(even) {
  color: red;
}
```

## TypeScript: Type Widening

- Typescript is really good at _inferring_ types:

```ts
// TS infers `x: number`, which is usually what you want!
let x = 42;
```

- but to _infer_ TypeScript has to make a choice about what type to infer. For
  `x = 42` it could infer: `x: 42` or `x: number`. Because you usually want
  `x: number` -- that's what TS does. It **widens** the type for you. This is
  the case with all the primitive types -- TS will infer the basic primitive
  type instead of the _type literal_:

```ts
/* TS infers `boolean`, not `true` */
let foo = true;

/* TS infers `string`, not `"Bob"` */
let name = "Bob";

/* TS infers Array<string>, not ["Tabitha", "Charlie"] */
let kids = ["Tabitha", "Charlie"];
```

- but sometimes this _type widening_ can bite you! Consider this snippet:

```ts
type HtcMember = {
  role: "teacher" | "student";
  name: string;
};

function greetMember(member: HtcMember): void {
  console.log(`Hi ${member.role} ${member.name}!`);
}

let jared = {
  role: "teacher",
  name: "Jared",
};

// 🚨 TS ERROR, due to `jared`'s INFERRED (widened) type
greetMember(jared);
```

- in that snippet, TS **widened** `jared.role`'s type to `string`, which doesn't
  match the `HtcMember` type definition. No bueno!
- one solution is to use `as const` to force TS to choose the **most specific
  (non-widened) type**, like so:

```ts
let jared = {
  role: "teacher" as const, // <-- 👋
  name: "Jared",
};

// ✅ works now because of `as const` above
greetMember(jared);
```

- another solution is to explicitly tell TS that your object is of the
  `HtcMember` type:

```ts
//       vvvvvvvvvvv <--- 👋
let jared: HtcMember = {
  role: "teacher",
  name: "Jared",
};

// ✅ works now because of `: HtcMember` above
greetMember(jared);
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [Linting & Pre-commit Hook](http://jared.howtocomputer.link/lint.mp4)

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1 day CSS Position assignment
- 1 day Akron Snowmen assignment (coming soon)
- 1 days touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="add-flash">Flashcards App Assignment</Checkable>

<Checkable id="css-position">CSS Position Assignment</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Flashcard App Assignment

---

- Merge your MR(s) from last week
- Slowly and carefully review all of the "New Stuff" above ^^^.
- Make 2 new flascards in the `TypeScript` category
  - _type widening_
  - `as const`
- Make 11 new flashcards, in the `CSS` category:
  - _psuedo-class_
  - _psuedo-element_
  - `position: fixed`
  - `position: sticky`
  - `:link`
  - `:visited`
  - `:active`
  - `:focus`
  - `:first-child`
  - `:last-child`
  - `:nth-child()`

---

## CSS Position Assignment

---

- Slowly and carefully review the CSS section of "New Stuff" above ^^^.
- read _all of the directions here_ before getting started
- fork [this repo](https://gitlab.howtocomputer.link/htc/css-position), clone,
  and connect with vscode.
- **create a new branch**
- spin up your dev server with `npm start`
- your task is to create a web app to teach and explain and experiment with
  css's `position` attribute. I have already done a big chunk of the work,
  making a skeleton of the markup, styling, and adding non-working dummy
  controls.
- you must make all of the purple lines with form inputs work and actually
  control the demo HTML/CSS below. Right now none of these do anything, you'll
  need to fix that.
- the web page is broken into 5 sections - one for `static`, `relative`,
  `absolute`, `fixed`, and `sticky`. **YOU MUST** extract these 5 sections each
  into their **own component**. This will make managing all of the necessary
  state _much easier_ than if you tried to do it all within the `App.tsx` file
  only.
- once you think you're done, build with `npm run build`, then open a MR, and
  slack me the URLs.
- after I review your work, and you make any changes I suggest, you need to pick
  a member of your family (over the age of 12) to **teach about css position**.
  Sit them down with your completed web app, and show them all the different
  values for `position` explaining the differences. Use all the controls that
  you got working, and let them try them as well.
- Slack me the name of the family member that you taught when you're done.

---

## Akron Snowmen Homework

---

- watch
  [this RAD VIDEO I made for you](http://jared.howtocomputer.link/lint.mp4).
- get your parent to unblock [this url](https://snowmen-example.netlify.app/) if
  necessary.
- connect with vscode into your _Akron Snowmen_ repo on the HTC server, and pull
  the latest changes from upstream.
- create and check out a **new branch**.
- carefully read all the instructions below **first**.
- referring to the example site (link in step 1 above), build the component
  assigned to you below.
- your component should go in `src/components`
- your component should have a _storybook story_ file
- don't worry about integrating it into the Next app, you're only working in
  storybook this week. That means you'll be using `npm run storybook` and
  `npm run build-storybook` only, **not** `npm start` or `npm run build`.
- start by shrinking the example app down to about 450 pixels. Get your
  component looking right at that screen size _first_.
- if you need to use media queries (some or most of you will), use **only these
  breakpoints:**
  - `640px`
  - `768px`
  - `1024px`
  - `1280px`
- I put all (I think) of the shades of colors that I used into the `globals.css`
  file as CSS Variables, use those, whenever possible.
- if your component requires an **image**, use
  `http://jared.howtocomputer.link/img/pillars.jpg` for now. We will switch out
  images later.
- don't peek at the code or CSS from the example site at all. 👍
- the Font used everywhere is "Arial"
- for most of the fonts that look grey, they are actually just white with their
  opacity turned down to about 50% i think.
- when you're done build your storybook site, and submit a MR, Slack both URLs.
- as other student's finish, I want you to leave **at least 2 comments** on each
  students MR. One should be something you like, and one should be something you
  think should be changed (worded kindly, of course).
- when the other students finish commenting on your MR, make some (or all) of
  the changes they request, if they seem good to you.
- component assignments are _below:_

---

### Components

- **Harriet**: _Main nav links_
  - start with them the way they look at a small screen
  - use a _psuedo element_ for the pink/purple stripe
  - change the layout, width, etc at larger screens, to match the site
  - use a `linear-gradient` with purple -> pink to match the cool effect on the
    example.
  - get the spacing right, but use padding instead of setting the _height_.
- **Willow**: _Button_ (the white rounded doo-job used all over the site)
  - you can destroy the current `Button` component and take it over.
  - the border will probably require that you use `rgba()` to get the
    color/transparency right.
  - resist the urge to set the height of the button, use padding around the text
    to force the right height instead.
  - check out the hover state from the example carefully -- to recreate that
    you'll need rgba and a css _transition_.
  - note how the button has (at least) two different widths, at different screen
    sizes. try to think of a way to accommodate this.
- **Tabitha**: _Form component_ (near the bottom of the page)
  - don't worry about the address stuff on the side or bottom, just focus on the
    form itself.
  - _do_ add the "Get in touch" headline and text above.
  - start at small screen size where all the inputs are full width
  - at a media query (one of the ones listed above) make _name_ and _email_
    share a line
  - replicate the `:focus` state
  - don't worry about the form submitting, or going anywhere
  - leave the "Send Message" button unstyled for now, we'll eventually pull in
    Willows `Button` component.
- **Win**: _Image + Text Component_ (will be used 3 times for the area
  underneath the Hero)
  - just used the pillars.jpg I mentioned above.
  - you'll want to use a CSS background image, _not_ an html `<img />` for this
  - start with the layout for mobile first
  - it should accept a prop to display as different colors
  - it should take a prop for the Title, and the text innerds
  - don't worry about the button for now, we'll pull in willow's button soon,
    but get everything else looking right.
  - at the media queries necessary, change the layout orientation.
- **Kiah**: _Pink "features" table_
  - the grid in the Pink area. Not the whole block, _just_ the grid-like thing.
  - don't worry about the icons for now, but do make white circles that match.
    We'll add the icons later inside the circles.
  - start at mobile break point and get it working
  - flex it into two columns at the appropriate breakpoint
  - use css nth-child or other pseudo-selectors to get the lines between and
    outside working correctly.
  - it should have a _sub-component_ that takes a `title` prop, so that you're
    not duplicating the same markup 6 times. This sub-component should be in
    another file.
  - note how the outside of the area has slight rounded corners. Be sure to
    preserve this at all screen sizes, which will affect how you use other
    borders.
