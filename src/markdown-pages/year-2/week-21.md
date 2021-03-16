---
path: "/year-2/week-21"
---

# Year #2, Week #21 💻 🚙

_New stuff we learned this week:_ 🤔

## Basic Responsive Images 🖼

- if you set an **explicit width** for an HTML `<img>` tag, this can cause
  problems, especially if viewed on a device not wide enough to show the whole
  image:

```css
img {
  /* 🥵 img will be chopped off on screens < 640px */
  width: 640px;
}
```

- very often it is desirable to have images _change size based on the size of
  the screen in which they are viewed_, so that, for instance, a small phone can
  still see the entirety of an image.
- to make this work, we can set the `width` attribute of an image to a _relative
  unit_, and then it will automatically become **responsive** -- that is, it
  will change it's size along with the screen size. We can accomplish that with
  some basic CSS like this:

```css
img {
  /* 😕 better, but still has problems */
  width: 100%;
}
```

- the code above is better, but suffers from a couple problems. For one, we're
  now controlling the _width_ with CSS, but setting it independently of the
  _height_, which can cause the image to get _stretched and distorted_. Luckily,
  the fix for this is easy, we can tell the browser to **keep the aspect ratio
  consistent** by supplying `height: auto;`, like so:

```css
img {
  /* 🧐 getting close now... */
  width: 100%;
  height: auto; /* keeps aspect-ratio same */
}
```

- the remaining problem with the above code is that **at large screen sizes**
  the browser will render the image at 100% width, even if that width is _larger
  than the source image_, which results in ugly pixelation. What works better is
  to specify `100%` as the `max-width` which will cause the browser _not to
  upsize the image_:

```css
img {
  /* 😍 shrink proportionately for small screens
     but don't let grow larger than img orig size */
  max-width: 100%;
  height: auto;
}
```

- this technique is often layered with other visual/layout tweaks, such as
  changing an image to float at larger screen sizes, like so:

```css
img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 720px) {
  img {
    float: left;
    margin: 1em 1em 1em 0;
  }
}
```

## Object.entries()

- We're already somewhat familiar with some of the
  [static methods](/year-2/week-17) on the global `Object` class in javascript,
  including `Object.keys()` and `Object.values()`, which _both return
  **arrays**_, the former of the object's _keys_, the latter, of it's _values_:

```ts
const person = {
  name: "Jared",
  age: 42,
  hasBeard: true,
};

Object.keys(person); // ["name", "age", "hasBeard"]
Object.values(person); // ["Jared", 42, true]
```

- another useful method is `Object.entries()` which returns _an array of
  arrays_, each array being a **pair** of `[key, value]`, like so:

```ts
const person = {
  name: "Jared",
  age: 42,
  hasBeard: true,
};

Object.entries(person);
// > [["name", "Jared"], ["age", 42], ["hasBeard", true]]
```

- `Object.entries()` is often useful when _iterating_ over an object. Since it
  returns an array, you can use `for...of`, like so:

```ts
for (let pair of Object.entries(someObj)) {
  console.log(`key=${pair[0]}, val=${pair[1]}`);
}
```

- a neat trick is to _immediately destructure_ the pair returned from each
  iteration of `Object.entries()`, like so:

```ts
// 😎 destructure for greater clarity and expressiveness
for (let [key, value] of Object.entries(someObj)) {
  console.log(`key=${key}, val=${value}`);
}
```

---

## CSS: Basic linear-gradient

- a CSS **linear gradient** creates a _image_ consisting of a _transition
  between two or more colors_. The simplest example of a gradient that fades
  evenly from _red_ (on the top) to _blue_ (on the bottom) would be:

```css
#some-element {
  background: linear-gradient(red, blue);
}
```

- you can also control the _direction_ of the gradient, with an optional first
  value to the `linear-gradient()` function, in the format of _either_
  `<angle>`, or `to <keyword>`, as shown in the examples below:

```css
#some-element {
  /* <to-KEYWORD> syntax: */
  /* gradient angles from bottom right "to" top right */
  background: linear-gradient(to left top, red, blue);
  /* gradient angles from left "to" right */
  background: linear-gradient(to, red, blue);

  /* <angle> syntax */
  /* 0deg is the same as `to top` */
  background: linear-gradient(0deg, red, blue);
  /* angle at 45 degrees from bottom left to top right */
  background: linear-gradient(45deg, red, blue);
  /* you can also specify the angle in "turn"s */
  background: linear-gradient(0.25turn, red, blue);
}
```

- If you don't specify otherwise, the browser will **evenly transition between
  your colors across the whole dimensions of the element**. If you want instead
  _to control how and when the colors transition_, you can specify more
  information than just the color, in what's known as a `color-stop`, which is a
  color followed by one or two \_optional **stop positions**, usually specified
  in percentages, as shown in these examples:

```css
#some-element {
  /* Color stop: A gradient going from the bottom to top,
   starting blue, turning green at 40% of its length,
   and finishing red */
  background: linear-gradient(0deg, blue, green 40%, red);

  /* Multi-position color stop: A gradient tilted 45 degrees,
   with a red bottom-left half and a blue top-right half,
   with a hard line where the gradient changes from red to blue */
  background: linear-gradient(45deg, red 0 50%, blue 50% 100%);
}
```

- one useful _hack_ to know is that you can create a "background-image" of a
  solid color out of a linear gradient, by just supplying the same color twice
  (especially useful when you're want to layer a color over a background image):

```css
#some-element {
  /* same as a solid red background image */
  background-image: linear-gradient(red, red);
}
```

- there are more options and tons of interesting combinations you can come up
  with to create an infinite variety of interesting linear-gradients, you can
  read more and play with interactive examples
  [on the mdn page here.](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient>)

---

## CSS: Multiple Background Images

- CSS supports adding **multiple background images to the same element**. The
  syntax is simple, you just do it like this:

```css
.some-element {
  background: <background1>, <background2>, ...<backgroundN>;
}
```

- a concrete example might be:

```css
.some-element {
  background: url("./cat.png"), linear-gradient(blue, red);
}
```

- any of the `background-X` declarations support the same syntax, so you can
  specify them without the `background` shorthand notation:

```css
.some-element {
  background-image: url("./cat.png"), url("./dog.png");
  /* cat.png goes in "top left", dog.png in "top right" */
  background-position: top left, top right;
}
```

- a common use case is to **overlay a semi-transparent color** on top of an
  image, using _multiple backgroung images_, and faking a background "image"
  with `linear-gradient()`, like so:

```css
.some-element {
  background: url("cat.jpg"), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
```

- CSS multiple background images **stack FRONT to BACK, or FRONT-FIRST**, so a
  value of `background: url("cat.png"), url("dog.png");` would put `cat.png`
  _ABOVE_ `dog.png`.

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 days Flashcard App assignment
- 1 day Akron Snowmen assignment
- 1 day CSS Gradient Exploration
- 1 day Personal Project assignment
- 1 day touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="snowmen-article">Akron Snowmen Assignment</Checkable>

<Checkable id="obj-data-flash">Flashcard App Assignment</Checkable>

<Checkable id="next-personal-2">Personal Project Assignment</Checkable>

<Checkable id="css-gradients">CSS Gradient Exploration</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Flashcard App Assignment

---

- make sure you've addressed any feedback I left on last weeks merge request,
  then merge.
- carefully read and review the "Object.entries()" section of "New Stuff" above
  ^^^.
- connect with vscode, checkout master, pull, and make a new branch
- please read one time through all of the steps before you start any work, then
  come back and work on it step-by-step. 👍
- this week's homework won't walk you with as much detail through the process,
  it's a fairly straightforward task that I'll just describe, that you'll need
  to figure out how to do. A bunch of it is quite similar to last week's
  flashcard assignment, so if you need to, review that assignment.
- the _first part_ of the task is this: **we're going to convert our
  `card-data.json` data structure to be an _OBJECT_** instead of an array, it
  should look basically like this:

```json
// card-data.json
{
  "5a62d167-46be-4046-a73d-0273cb10e846": {
    "front": "vim",
    "back": "best editor ever",
    "category": "self-evident truths",
    "created": "2021-03-11T17:10:41.589Z"
  }
  // [...] with many more like it...
}
```

- after we're done, we'll be able to lookup a card in **constant time** with a
  "Big O" of `0`. Your friends will be so proud!
- to do this, I want you to make another throw-away `.js` script, like you did
  last week, and programatically loop over all of the cards, building up the
  object one by one. As with the last assignment, take it step by step, logging
  things out, and only actually **write the file to disk** when you're satisfied
  it's going to work correctly. Also, you should probably _make a backup of the
  file before you start as well_. (But be careful not to commit the backup file
  to git, OK?)
- **Requirement**: notice in my example above how I _did not repeat the UUID_ in
  the card object, and that it is only **in the KEY or left-hand-side of the
  object**. This is how I want you to do it too.
- once you've got the data structure converted, you've now broken your app,
  because the `server/index.ts` file was expecting the card data in the other
  format. We'll fix that now.
- start by fixing the `GET /cards` route. To do this, I don't want you to change
  the client (web app) code _at all_. Instead, I want you to change the card
  data back into an array for this route, so that the web-app is none the wiser
  about the backend change we're making. That means, you'll need to create an
  array of all your cards **AND** as you're creating that array, you'll need to
  _insert the id field back into the card object,_ like before. **REQUIREMENT:**
  you MUST use `Object.entries()` in your solution to this part of the homework.
- once you think you've got the `GET /cards` route working correctly, fire up
  your web app in dev mode and check that it really is working. The web-app
  should work as is, with the code untouched.
- commit your work.
- next, fix the `POST /cards` card creation endpoint. Again, don't change the
  web-app code at all, let it send the data in the exact same way. Just change
  the server so that it inserts the new card into the OBJECT instead of pushing
  it into an array.
- test that adding a card works in your web-app, and commit your work.
- finally, change the `DELETE /cards/<id>` route. This is where our
  constant-time big O of 0 really shines. We'll shave nanoseconds off of the
  time it takes to delete cards, it will be great! 🚀 😊
- verify from the web-app that deleting cards still works, and commit your work.
- last but not least, use the "delete" feature you built last week (and made
  FAST this week), to carefully delete all of the "trash" cards you made while
  testing the "add card" feature. For now, _don't delete cards you've memorized
  like `cd`, we'll do that soon_. For now, just get rid of all the test cards.
- build your site, make sure your production daemon is running, submit a MR,
  then slack me 3 things:
  - your built URL
  - your MR URL
  - a phrase telling me you deleted the test cards so I know you read the
    directions carefully and didn't miss that step.

---

## Personal Project Homework

---

- Refer to your work plan you created a few weeks ago, and select the next item
  on your list. If you're ahead or behind of where you thought you would be,
  make any modifications you think appropriate, then **Slack me your goal for
  this week by WEDNESDAY at 9AM!!!!** 📅 👋
- Make sure you've addressed all of my feedback from last week, merge your MR,
  connect with vscode, pull from origin, and _create a new branch_.
- Implement the feature or chunk of work you planned.
- When you think you're done, check things like:
  - did you leave in any `console.log()`s?
  - does it look good at all screen sizes?
  - do your storybook stories work and cover your components (if you're using
    storybook)
  - are your components and variables named well?
  - is there anything you want to clean up, refactor, or DRY up before you
    submit?
- when you're happy with the code, build your site, submit a MR, and Slack both
  the URLs.
- after I review, address any feedback I give you.

---

## Akron Snowmen Assignment

---

- Be sure you've addressed any changes requested on last weeks individual
  assignments, so that I can merge your work in before you start this
  assignment. If you haven't, address the feedback now and slack me to let me
  know.
- once your changes from last week are merged in, connect with vscode, switch to
  master, pull from upstream, delete your old branch, and _create a new branch_.
- carefully and slowly read and review the "responsive images", "linear
  gradients", _and_ "multiple css background images" section of "New Stuff"
  above ^^^.
- This week, we're going to build the components necessary to make a few
  "article"-type pages. That includes:
  - `<ArticleHeadline>`
  - `<ArticleImage />`
  - `<ArticlePage />`
- Fire up Storybook, and create a new Component, and Story file for the
  `<ArticleHeadline>` component. Then read **all these requirements** before
  starting. The component should:
  - look good at all screen sizes. You MUST start by designing it for
    mobile-size screens and then tweak it to look good at other screen sizes,
    not vice-versa.
  - take the magic `children` prop for passing the _text_ of the headline in.
  - it should accept an _image_ as a prop, which it will display as a background
    image behind the headline
  - it should accept a string for a css _background color_ value which will be
    _overlaid over the image_ (using the multiple background images technique
    taught in class).
  - the background image should be positioned using `background-size: cover`
  - the color passed as a prop should be stacked on top of the image, so that
    the text is legible.
  - make sure that the text looks good if a long headline is passed in, causing
    the text to _wrap to two lines_.
- Next, we're going to make an `<ArticleImage>` component. This component is
  meant to _make it easy_ for us to _add nicely aligned, responsive images into
  our article page_. Read **all the requirements below**:
  - The component should take an `image` prop, which is a `string` which should
    be the image to display. (It could be a full web URL, but we're going to be
    **importing images** in our js/ts files and doing it that way)
  - You must create a Storybook story file for the component
  - You must start by working on the MOBILE view of the component (**mobile
    first!!**).
  - In the mobile view, the image should be the full-width of the containing
    element, and be responsive to adapt to different screen-sizes, as discussed
    in the "Responsive Images" section of "New Stuff" above.
  - In your story for the mobile view, _embed the component inside a div with
    some dummy text, both **before** and **after** the image._ Then, using this
    before/after text, make sure that at the mobile viewport size, there is
    appropriate margins added to the image to make the text not get too close to
    the image, and to look generally decent.
  - the component should also take a `direction` prop that is a _union of two
    possible strings_: `'left' | 'right'`.
  - at _larger screen sizes,_ the image should _stop taking up the full width_
    and instead **FLOAT to the side indicated by the `direction` prop.**
  - when floating, the image should have appropriate margins applied so that
    text doesn't run right into the image itself. These margins will be
    different than those needed for small screens, since text will also be
    floating _around_ the image, and will be able to possibly touch the image's
    **side** if you're not careful.
  - make sure you have a Storybook Story for the component that shows it working
    when aligned both `left` and `right`.
  - NOTE: at small screen sizes, the component should render _exactly the same_
    no matter what value the `direction` prop is, since that prop only comes
    into play when floating the image to one side _at larger screen sizes_.
- Commit your work.
- Finally, we're going to make a _very simple_ `<ArticlePage>` component, that
  is just a thin wrapper around the `<ArticleHeadline>` component, with some
  nice padding for a big text area below.
- Create a new component called `<ArticlePage>`, and create a new Storybook
  story for it. First read through, then work through these requirements:
  - start by giving it _image_, _color_, and _headline_ props (strings for all
    three)
  - it should also take the magic `children` prop, for the main "body" or
    text+images of the "article".
  - The JSX innerds of this component should be basically in two parts.
    **First**, right after an opening `<div>`, the component _should render a
    `<ArticleHeadline>` component_. Pass the component the 3 props I mentioned
    above.
  - after the ArticleHeadline, it should have another `div`, and inside that
    div, render the `children` prop.
  - The inner div which contains the `children` prop should get a css class, and
    be styled a little bit, mostly to give it a little padding so that the text
    and images placed in it are nicely spaced away from the headline, left,
    right, and bottom of the page.
  - when you're all done, you should be able to use the component like this:

```tsx
const SaltArticlePage: React.FC = () => (
  <Layout>
    <ArticlePage title="About Salt" image={SaltTruck} color="pink">
      <ArticleImage image={Salt_1} direction="left">
      <BodyText>
        Salt is good, unless it loses its saltiness, etc.
        Lorum ipsum dolor set...
      </BodyText>
      <ArticleImage image={Salt_2} direction="right">
      <BodyText>
        Lorem ipsum dolor set
      </BodyText>
      <BodyText>
        Lorem ipsum dolor set
      </BodyText>
    </Article>
  </Layout>
)
```

- Commit your work
- Finally, **create a new page** in the `./pages/` dir, next to `index.tsx` and
  `our-team.tsx`. Make a fake article page, you can use dummy text. Insert at
  least two images, and test that everything is working and looks good when
  using the new components. Fix or tweak anything that doesn't look right.
  _NOTE:_ this page should not use the `<ArticleHeadline>` component directly --
  instead it should just use the `<ArticlePage>` component, which passes props
  down to an ArticleHeadline component. It should however use the
  `<ArticleImage>` component, as part of the `children`, as shown in my example
  above.
- Commit your work. Build the site, submit a MR, build the storybook site, and
  submit all the URLs in a Slack message.

---

## CSS Gradient Exploration Assignment

---

- Start by slowly and carefully reading and studying the code samples from the
  "Linear Gradient" section of "New Stuff" above ^^^.
- Next, take a few minutes and read
  [this whole page](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient),
  pausing to try out several of the techniques shown in the "CSS Demo" section
  up near the top.
- Then, slowly and carefully read through
  [this page as well](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients).
  It's not critical that you perfectly understand all of the techniques and
  variations of gradients, or that you memorize them, but I do want you to study
  it until **you have a basic sense of how gradients work, and what kinds of
  things are possible with them**.
