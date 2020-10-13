---
path: "/year-2/week-04"
---

# Year #2, Week #4 💻 ️🛸

_New stuff we learned this week:_ 🤔

## Storybook

- **Storybook** is a library for building and testing components in _isolation_.
  Think of it like a **workbench** for building lego pieces to make complex
  websites.
- once storybook is installed, it references _story files_ which are in a
  special directory (usually called `stories/`) and they file name is in the
  format: `<something>.stories.tsx`.
- A story file has some boilerplate, you'll always need some basic things, which
  look about like this:

```tsx
import React from "react";
import { Meta } from "@storybook/react";
import MyComponent from "../MyComponent";

const storiesMeta: Meta = {
  title: "MyComponent",
  component: MyComponent,
};

export default storiesMeta;
```

- For each story file, you'll be testing/building a single component (usually),
  and so you'd change out `MyComponent` for whatever you're working on.
- To create individual _stories_, you just start **making NAMED exports**, each
  of which is _a function that returns some JSX,_ which is basically just you
  passing some props to the component for that story:

```tsx
// ... ^^^ boilerplate above

export const MyRadStory = () => {
  return <MyComponent prop1={true} prop2="goats" />;
};

export const AnotherStory = () => {
  return <MyComponent prop1={false} prop2="banjo" />;
};
```

- One cool feature of Storybook is that you can set a different **layout** for
  your story files, using the `parameters` property of the `storiesMeta` default
  export. Two really useful alternates to the default are: `centered` and
  `fullscreen`:

```tsx
// ... ^^^ import boilerplate above

const storiesMeta: Meta = {
  title: "MyComponent",
  component: MyComponent,
  parameters: {
    layout: "centered", // or `fullscreen`
  },
};
```

## Css-in-Js

- Fancy bundler/compilers (like _Parcel_ and _Webpack_) have a neat trick up
  their sleeve. They allow you to **import CSS _as if_ it was a javacript
  file:**

```tsx
import React from "react";
import "./MyComponent.css"; // 😎 WHOA!
```

- This allows you to cleanly separate CSS for each component, and the bundler
  will take care of making a real CSS stylesheet for you that the browser can
  understand.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan

_(very light due to conference)_

- 1 day review all flashcards
- 1 day touch typing practice
- **3** days _Execute Program_ homework
- 1 day _Storybook_ homework

---

<Checkable id="review-flash-1">review all flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="storybook">Storybook homework</Checkable>

---

## Storybook Homework

---

- connect with vscode to your `~/y2-w4/flashcards` dir and initialize a git
  repository. Connect it to a new repo (project) on Gitlab.
- commit the work you did in class and push what you did in class, warts and
  all. Doing this will allow you to make a MR, which will make it easier to see
  what you worked on this week.
- now, make a **new branch**
- start up storybook by running the correct npm script (look in the
  package.json) if you don't remember what that was. You'll need to forward the
  port
- next, finish up the basic styling of your `Card` component, getting it to look
  like a flashcard. Don't go crazy, making it look amazing, but use Flexbox and
  a few tweaks to make it look like a flashcard.
- commit your work
- next, add a new component called `Chrome`. (In softward development, "chrome"
  refers to the stuff that sort of lives _around_ your app, like a "dashboard"
  of a car holds all of the controls and guages and read-outs).
  Requirements/hints for the Chrome component:
  - it needs to have a `Chrome.stories.tsx` file
  - it should import it's css as shown in "New Stuff" above
  - use the `layout: "fullscreen"` option shown in "New Stuff" above
  - it should have a strip across the top that has the name of the app,
    something like "HTC Flashcards".
  - you'll need to add `min-height: 100vh` to the Chrome component css, to make
    sure it takes up the full window.
  - it should have a strip across the bottom that shows your "progress", like "2
    of 13" if you were looking at the second card of 13 total.
  - in order to show the "2 of 13" the `Chrome` component should accept two
    props.
  - the Chrome component should not be self-closing -- it should allow you to
    pass some jsx in as the `children` prop. Eventually, we'll pass our `Card`
    component in as the child.
  - using flexbox, make sure that whatever component gets passed in as
    `children` is **centered** within the chrome.
  - here's an example of a very basic version for you to look at if you're
    having trouble understanding what I mean:
    http://jared.howtocomputer.link/sb-flashcards/?path=/story/chrome--basic-chrome
- when you've got your component working, commit your work, and build your
  storybook site by running `npm run build-storybook`. That will make your
  storybook site publicly available at
  `http://<youruser>.howtocomputer.link/sb-flashcards`
- push up a MR
- slack your MR url and your storybook site url
