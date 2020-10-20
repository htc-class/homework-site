---
path: "/year-2/week-05"
---

# Year #2, Week #5 💻 ️🛺

_New stuff we learned this week:_

## Acronyms, Acronyms, Acronyms!

### IIFE

- a javacript function can be **immediately invoked** if you use _parentheses_
  around the function, and then another set of parentheses to invoke:

```js
(function() {
  console.log("Hello World!");
})();
```

- this technique is called an **Immediately Invoked Function Expression
  (IIFE)**, and used to be used often **to control scope** before we had
  block-scoped variables with `let` and `const`.

### ASI

- Javascript doesn't require you to add a semicolon at the end of the line, like
  `C` does. Brendan Eich was trying to be nice to newbies or something. But if
  you omit semicolons, then javacript **inserts them for you**, which is called
  **Automatic Semicolon Insertion**. Usually this doesn't cause a problem, but
  there are a few times where it can cause unexpected behavior.
- for instance, the following javacript (if it wasn't fixed automatically by
  prettier) would result in a weird outcome:

```txt
function foobar() {
  return
  {
    foo: 'bar'
  }
}
```

- after **ASI** does it's job, the above code would be _changed_ to:

```js
function foobar() {
  return; // 🚨 WHOOPS!
  {
    foo: "bar",
  };
}
```

- this is why **multi-line JSX expressions** that are returned from functions
  must be **grouped using parens:**

```jsx
return (
  <div>
    <h1>Hello World!</h1>
  </div>
);
```

### SPA

- some websites aren't really **sites** they're more like applications disguised
  as a website. For these types of "sites", we don't really need _multiple_
  pages, as the user clicks around and does stuff, we'll just change what they
  see with _javascript_. Sites like these are called **SPAs** which stands for
  **Single Page Applications**.
- SPAs usually send down just a small _HTML shell_ that loads the javascript
  necessary to run the app. But things like search engine bots and programs to
  help disabled users often don't run javascript, which can be a problem.
- plus, if there aren't unique URLs for each _state_ of the app, you can't
  refresh your page and get back to the same spot, or share a URL with your
  buddy.

### SEO

- **SEO** stands for **Search Engine Optimization** -- which means crafting your
  website so that computers from search engine companies (like Google and
  DuckDuckGo) can figure out from your HTML what your site is all about, and
  recommend it to people when they search.
- without a decent amout of extra work, SPAs can be pretty bad for SEO, so for
  things where SEO really matters, developers usually don't build SPAs.

### SSG

- a while back, people realized they wanted the _convenience_ of writing
  websites with reusable components with something like React, but they also
  wanted the performance and SEO benefits of building sites with a bunch of
  plain old HTML files, so they came up with the idea of **Static Site
  Generators**, or **SSG**. A SSG basically loops over a bunch of page files (or
  maybe some other data source) and converts your code into a folder full of
  plain old HTML files. These files can be uploaded to a web host. If you change
  something on your site, you can just re-generate your files, which takes only
  seconds.
- examples of SSGs include: _Gatsby_, _Nextjs_, _Hugo_, _Eleventy_, and MANY
  others.
- in the React world, SSGs are made possible by the fact that `ReactDOM` has a
  method: `renderToSTring` which, instead of creating a virtual DOM, just hands
  you back a **plain string of HTML**, like this:

```jsx
const html = ReactDOM.renderToString(<h1>Hi!</h1>);
console.log(html); // "<h1>Hi!</h1>"
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan

- 1 day (non-app) flashcard homework
- 1 day touch typing practice
- 1 day Git review
- **4** days _Execute Program_ homework
- 1 or 2 days Flashcard App homework

---

<Checkable id="non-app">non-app flashcard homework</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="flashcard-app">Flashcard App homework</Checkable>

<Checkable id="git-review">Git Review</Checkable>

---

## (non-app) Flashcard homework

---

- slowly and carefully review all of your flashcards
- re-review the ones you got wrong
- add 2 more cards in the `javascript` category:
  - `ASI`
  - `IIFE`
- add 3 cards to a new `web` category:
  - `SPA`
  - `SEO`
  - `SSG`

---

## Git Review

---

- starting with week 26, slowly and carefully read all of the `git` sections of
  "New Stuff" from the main 4 weeks of last year where we were learning git.
  Here are the links:
  - [Week 26](https://homework.howtocomputer.link/week-26)
  - [Week 27](https://homework.howtocomputer.link/week-27)
  - [Week 28](https://homework.howtocomputer.link/week-28)
  - [Week 29](https://homework.howtocomputer.link/week-29)

---

## Flashcard App homework

---

- slowly and carefully review all of the "New Stuff" above ^.
- DO NOT start this homework until you have done the "Git Review" homework
- Get on to GitLab, and _merge your own MR_ from last weeks homework.
- connect to the flashcard app again with vscode
- switch over to your master branch, then type a command that will update the
  `master` branch so that it pulls in the commits you just merged into master on
  GitLab. (If you can't figure this out, check the git review links above, and
  remember, gitlab is a _remote_ for your local working git repo)
- type another command now to view the commits on your master branch. you should
  be able to verify that your merged in commits are now in master for you
  locally. don't do the next step until you've confirmed that.
- type a command to delete the branch you were working on for last weeks
  homework.
- create a new branch from master called `create-spa` and switch to that branch
- start up your storybook server and forward your port
- modify the `Button` component, making two changes. Make sure typescript is
  happy and that storybook still renders the button after you make these
  changes:
  - **first,** the current `Button` component accepts a `string` prop called
    `label` which is the _text_ that appears on the button. This means you have
    to do stuff like: `<Button label="Click me">`. Change it so that it uses the
    special `children` prop. Once you're done, you should use the component like
    this: `<Button>Click Me</Button>`. You'll have to change your
    `Button.stories.tsx` file as well. If you're confused by this step, rewatch
    the [children prop](http://jared.howtocomputer.link/children_prop.mp4) video
    I made.
  - **second** make the `Button` component accept a prop called `onClick` which
    is a function that takes zero arguments and returns `any`. The Button
    component should wire this up to the native html `<button>` elements
    `onClick` handler so that whatever function you pass it gets run when a user
    clicks the button.
- next, modify the `<Chrome>` component so that it renders _two_ buttons, one
  that says `<< Prev` and one that says `Next >>`. Make it so that these buttons
  are displayed on the left and right of where the `Card` component is (or will
  be) displayed. **REQUIRED:** use one of the special values
  for`justify-content` to make this look evenly spaced and centered.
- next, get a literal pencil and paper, and **design a data structure** to hold
  the information about your flashcards. A **data structure** is just a fancy
  word for a combination of javascript primitives like _strings_, _numbers_,
  _booleans_, _arrays_, and _objects_.
  - hint, remember your flash cards have (at least) a "category", a value for
    the "front" of the card, and a value for the "back"
  - hint 2, remember, you have more than one card
  - hint 3, there is no true _right_ answer for this, there are several good
    ways to design this
  - **requirement:** design at least 2 data structures that would work, then
    weigh the pros and cons of each, and pick which one you think will work best
    in your App.
- once you've got your data structure designed, create a `card-data.ts` file in
  your `./src` dir which will export your cards as the _default export_. It
  might look something like this:

```ts
// these are all two simple, none of these would work
// just demonstrating that you would export
// whatever your structure is
export default "my data structure is a string";

// or...
export default ["my", "structure", "is", "array"];

// or...
export default { my: "structure", is: "an object" };
```

- populate your `card-data.ts` file with the info from **at least 3 real
  flashcards**.
- Now, stop and read the rest of the steps/requirements before doing anything
  else.
- To finish the assignment, you're going to actually get your web app (not
  storybook) working (at least sort of). This means you'll have to re-write the
  placeholder `App.tsx` component to render your `Chrome` component.
- when it's working:
  - it should start by displaying the category and "front" of the first card you
    entered in step 14.
  - if you click the card component, it should switch to showing the "back" or
    answer for that card
  - if you click the "Prev" or "Next" buttons, you should move back and forth
    between which card is showing
  - you _don't_ need to worry about going past the end (or going before the
    beginning) of your list of cards. If someone mashes on your "Next" button
    too many times, it's OK if it just errors, we'll fix that later.
  - the bottom part of the Chrome component should show the real number of
    cards, and your position.
- now that you know the requirements, step away from the computer and get out a
  pencil and paper again (I mean it -- it's important to learn to think through
  problems clearly without writing code first). This time, on pencil and paper,
  figure out **what STATE** you will need to make this thing work. _Hint:_ you
  will need more than one piece of state -- meaning, more than piece of data
  created and managed by `useState`. What will be the _types_ of the pieces of
  state? How will you use that state to pass the right props to the components
  you've built?
- Once you think you have designed your state correctly, re-read the
  requirements on step 17 and ask yourself how you will accomplish each part
  using the combination of your custom data structure and the state you've
  designed. Does it cover all the needs and features? If not, go back to step 18
  and try another design. It's OK if you do this several times, designing the
  state of an App is hard, and you often don't get it right the first time.
- Before you go and try to build this, here are a few more hints and
  requirements:
  - commit early and often, that way if you mess something up, you can always
    throw away your work with `git reset` and go back to an earlier point in
    time when you were happy with your work.
  - remember **BABY STEPS** -- if you try to do this all at once, you will
    certainly struggle. Instead, ask yourself "what's the smallest piece of this
    I could try to get working", and then tackle that. When you succeed, commit
    and repeat.
  - your `App` component should hold **all the state** for your app, and be in
    charge of passing down props into your other components. This includes
    passing down functions to do things when buttons (or the card) is _clicked_.
    These functions should be arrow functions wrapping some call to update your
    state. If this feels confusing, review your own code from the "React audios"
    homework, you did the same thing there.
  - you're probably going to need to alter your `Chrome` component so that it
    takes a couple more props -- functions to handle what happens when the Prev
    and Next button are pressed.
  - you're also probably going to need to alter the `Card` component so that it
    accepts a function to do something when clicked. This is what will "flip"
    the card, showing the back.
  - hint: when you "flip" a card to show the back, the Card component doesn't
    really need to know about that, you can just pass in a different value for
    the prop that displays in the middle of the card. It's good to keep your
    components as dumb as possible.
  - you'll want to spin up your dev server with `npm start` while you're working
    on this, fixing errors and taking baby steps. restart the dev server if
    something seems wonky.
  - read your error messages carefully and pay attention to red squiggles in
    vscode, they will usually lead you to the problem if you take a moment to
    digest what they are saying to you.
- When you've got it done, go back to your `*.stories.tsx` files, and fix any
  errors in there. (these would be caused if you added new props while you were
  working on the app, and didn't pass those props in your story files. For
  functions, you can just pass dummy, empty functions, like
  `<Button onClick={() => {}}>`)
- then, I want to you increase the number of cards from 3 to **15 real cards**.
- modify line `8` of your `package.json` file so that when you run the
  `npm run build` it builds to a folder called `www/flashcards` instead of
  `www/parcel-boilerplate`
- commit any remaining uncommited work
- then, build your site by running `npm run build`.
- push up a MR from your `create-spa` branch and slack me both the web url of
  the app, and the MR url in the #homework channel.
- **Kiah Credit: ✨** fix the error that would result from trying to click
  "Prev" or "Next" too many times. There are several ways to do this, decide
  what seems best and implement your design.
