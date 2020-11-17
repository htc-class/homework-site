---
path: "/year-2/week-08"
---

# Year #2, Week #8 💻 🛺️

_New stuff we learned this week:_ 🤔

## Git `upstream` and `origin` remotes 📡

- when creating a new git repo **by cloning** the source you cloned _from_ is
  automatically named by git **"origin"**.
- when using a git workflow where you have **forked a repo and cloned from the
  FORK** it is common to also add the _original (non-fork) source repository_ as
  an additional remote. The common convention to name this remote is `upstream`.
- when changes from other collaborators are merged into the primary (non-fork)
  repository, you can get those changes by **pulling directly from `upstream`**
  by running `git pull upstream master`.
- therefore, a common workflow would be, whenever you wanted to start a new
  batch of work on a repo, you would:

```bash
git checkout master
git pull upstream master # get the latest changes
# start your new work on top of latest changes
git checkout -b rad-new-feature
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [Akron Snowmen (current site)](https://www.akronsnowmen.com)

---

## Homework Plan

- 1 day review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1-2 days Akron Snowmen assignment
- 2 day touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="snowmen">Akron Snowmen homework</Checkable>

<Checkable id="flashcards">Flashcard App assignment</Checkable>

---

## Flashcard App Homework

---

- merge your MR from last week
- pull down your changes into your local `master` branch
- delete the old feature branch
- create a new feature branch for this week
- add two new cards into your `git` category (create it if you haven't already)
  for `upstream` and `origin` remote names
- add 20 more cards from your old physical (or digital) stack of flashcards
- commit your work
- add a feature to your flashcards app that allows you to **visually see**
  whether you're viewing the front of a card, or the back. This could be a text
  label, a color, some other styling -- whatever seems good to you.
- commit your work
- next, shrink the screen size that you normally view your flashcard app at
  until things start to looking bad. You don't have to get crazy small like for
  a phone, but just small enough to see where you current design starts to break
  down. Make some changes to your app so that things look better at that smaller
  screen size. You don't need to make everything perfect, just make it
  noticeably better than it was before. You might find you need media queries,
  but there also might be other ways to make the app look good at both sizes
  that don't require them. While you're doing this, try to avoid
  over-complicating your code, or repeating yourself. Remember, you're going to
  be building on this code for a long time. Take some time to clean things up if
  you spot opportunities for improvement in your code.
- commit your work.
- rebuild your flashcards app, and submit a MR. In the MR, tell me what screen
  size (in pixels) you worked on improving, so I can view it at that same size
  and see your work.

## Akron Snowmen Assignment

- review "new stuff" above ^^
- connect to the project from vscode
- switch to master and retrieve the changes that were merged in during class
- create a new branch called `layout-attempt`.
- create a new component called `<Layout />` that accepts a `title` prop of type
  `string` and the special `children` prop. The purpose of this component is to
  wrap all of the page "innerds" with the stuff that will be on every page, like
  the logo, hamburger, horizontal nav, footer, and slideover menu.
- the idea is that each **page** in the `pages/` dir will look something like
  this:

```tsx
// ./pages/index.js
export default HomePage;
import React from "react";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout title="Akron Snowmen">
      <h1>Here is the homepage</h1>
      <p>Here is some content for the homepage!</p>
    </Layout>
  );
};

export default HomePage;
```

- when it's done, it should look
  [about like this](http://jared.howtocomputer.link/akron-snowmen).
- here are some **important hints and requirements**:
  - instead of working in Storybook, for this assignent we'll be building inside
    of nextjs, like I was in class. So fire up your dev server with
    `npm run dev` and work that way.
  - you're going to need to do some CSS and flexbox stuff to get the components
    to work together and be laid out correctly. In order to do this, I do
    **not** want you to edit the CSS of components themselves (like
    `Footer.module.css`). Instead, when you find that you want to add css to
    layout the components, **wrap the component in a `<div>` instead** and apply
    styling to the div, using styles exported from a `Layout.module.css` file.
  - **hint:** if you set the `width` prop of Kiah's `Logo` component to `193` it
    will be the same height as Win's hamburger component.
  - **hint:** to get the footer to stick to the bottom of the page, make it's
    parent flex container set to `justify-content: flex-start`, but then add
    `margin-top: auto;` to the footer. This will make it stick to the bottom.
    However, because you want to obey what I said in point **a)** above, wrap
    the footer component in a div and set that div to `margin-top: auto;`
  - your Layout component will need to track **one piece of state** -- whether
    or not the slideover menu is showing. This piece of state will control the
    prop passed to the Hamburger component, and it will show/hide the slideover
    component.
  - to get the Slideover Menu showing and hiding like in my example, make an
    outer wrapping div with `position: relative;`. Then make a wrapping div for
    the Slideover menu, and set that div's width to `300px` and
    `position: absolute`. Then give it a `style` prop that makes it
    `display: none` or `display: block` based on the one piece of state you're
    tracking.
  - Win's Hamburger component doesn't have an `onClick` prop yet. That's OK.
    Instead of adding one, wrap his Hamburger in a div, and add an `onClick`
    handler to the wrapping div. When clicked, it should change state to show
    the slideover menu.
  - Make another onClick handler on the div wrapping the SlideoverMenu
    component, when clicked, it should close the menu by toggling your one piece
    of state.
- when you finish, build your nextjs site by running `npm run build` (and you
  can view it at `http//:<yourname>.howtocomputer.link/akron-snowmen)`. Submit a
  MR and slack your website url and MR url.
- this assignment is a bit tougher than it looks. reach out if you get stuck,
  i'll give more hints, and I might at some point tell you that you've done
  enough and you can stop trying (that's why I told you to name the branch
  `layout-attempt`).
