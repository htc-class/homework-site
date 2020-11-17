---
path: "/year-2/week-07"
---

# Year #2, Week #7 💻 🏎️

_New stuff we learned this week:_ 🤔

## CSS Variables

- CSS supports **variables**. The syntax works like this, you attach variables
  to a given _element_ (think of this element as being the _scope_ for the
  variable). The css variable is available then for any descendent of that
  element. The variable name is declared with two dashes: like so:

```css
.some-element {
  --main-bg-color: blue;
}
```

- Adding this CSS would mean that anywhere _within_ the `.some-element` DOM
  heirarchy, you could use that variable using the `var()` syntax, like so:

```css
.some-element p {
  background-color: var(--main-bg-color);
}
```

- if you want your variables to be **available to the whole page** a common best
  practice is to attach the variables to the special `:root` _psuedo-class_ like
  so:

```css
:root {
  /* This will be avaialable EVERYWHERE */
  --accent-color: hotpink;
}
```

- the `var()` function also accepts a **fallback value**, as it's second
  argument in case there is no valid variable:

```css
.some-element {
  /* will render red if `--main-bg-color` not set */
  background-color: var(--main-bg-color, "red");
}
```

## React: Global Keyboard Events

- sometimes we want our websites or web apps to respond to **keyboard events**
  at times other than when the user is typing text into a form. Unfortunately,
  the browser doesn't give us a good way to listen for keyboard events on
  non-form elements, so the solution is to **add a document-level event listener
  function** to listen for keyboard events. In vanilla JS, the way we would do
  that is this:

```ts
function onKeydown(event) {
  console.log(event);
}
document.addEventListener("keydown", onKeydown);
```

- the `event` object that your `keydown` listener gets passed is full of useful
  information, here is a **very incomplete** typescript type for what data it
  holds:

```ts
type KeyboardEvent {
  altKey: boolean; // was the `alt` key held down?
  shiftKey: boolean; // was the `shift` key held down?
  keyCode: number; // ascii key code, e.g. `72` for "a"
  key: string; // "a" if you typed "a"
  // ...and lots more info...
}
```

- by inspecting the `event` object, we can do things based on what key was
  pressed:

```ts
function onKeydown(event) {
  if (event.keyCode === "a") {
    alert("You typed an 'a'!");
  }
}
document.addEventListener("keydown", onKeydown);
```

- in the _React_ world, adding a listener to the document is definitely a
  **side-effect**, so we would need to set this up using the `useEffect`
  **hook**:

```tsx
const MyComponent: React.FC = () => {
  useEffect(() => {
    document.addEventListener(`keydown`, (e) => {
      if (e.keyCode === `a`) {
        alert(`You typed an "a"!`);
      }
    });
  }, []);
  return <h1>Hello, world!</h1>;
};
```

- if you **use a setState function INSIDE** your effect, that function is
  technically a **dependency** and therefore _needs to be listed_ in the
  dependency array to `useEffect`:

```tsx
const MyComponent: React.FC = () => {
  const [typedA, setTypedA] = useState(false);
  useEffect(() => {
    document.addEventListener(`keydown`, (e) => {
      if (e.keyCode === `a`) {
        setTypedA(true); // <-- we use it here, so...
      }
    });
  }, [setTypedA]); // 😎  <-- `setTypedA` is a _dependency_
  return <h1>Hello, world!</h1>;
};
```

- sometimes you need to **clean up after a side-effect**. Adding a listener to
  the document is a good example, because we don't want to keep adding listeners
  over and over again -- rather, when our effect function is **re-run** we would
  like to _clean up the previous effect_, if necessary. To that end, the
  `useEffect` function actually has a Typescript something like this:

```ts
type UseEffect = (
  effectFn: () => any,
  dependencies: Array<any>
) => void | () => any;
```

- by studying the above type, you can see that `useEffect` must return either
  _nothing_ (`void`), or a _function_. The function option is a **cleanup
  function**. For our example with adding an event listener for keystrokes, we
  would change our code like this to clean up after ourselves:

```tsx
const MyComponent: React.FC = () => {
  const [typedA, setTypedA] = useState(false);
  useEffect(() => {
    // here we capture our function in a variable
    // so that we can REMOVE it later
    const listener = (e) => {
      if (e.keyCode === `a`) {
        setTypedA(true);
      }
    };

    // add the listener
    document.addEventListener(`keydown`, listener);

    // return a clean-up function
    return () => {
      document.removeEventListener(`keydown`, listener);
    };
  }, [setTypedA]);

  return <h1>Hello, world!</h1>;
};
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

_🤔 This might end up being a two-week section, I'll keep you guys posted if we
will have class next week, and if not, I will slightly modify the homework, but
the core two pieces will be the same._

- 1 day review all flashcards
- 1 day Flashcard App assignment
- 1-2 days Akron Snowmen assignment
- 2 day touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework
- 1 day watch
  [event bubbling/capturing video](https://htc-viewer.netlify.app/?id=0sfPDJiMTXk)

---

<Checkable id="review-flash-1">review all (physical) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="event-vid">Watch Event Bubble/Capture Video (link above
^)</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="snowmen">Akron Snowmen homework</Checkable>

---

## Flashcard App Homework

---

- _slowly_ and _carefully_ review all of the "New Stuff" above ^^^
- merge your MR from last week, switch over to master, pull in your work, and
  delete the branch from last week
- create a new branch for this weeks work
- create two new **virtual cards** for your flashcard app in the `css` category.
  One for **declaring** a _CSS variable_, and one for **using** a CSS variable.
- then, add 15 more cards from your physical stack of cards to your app.
- commit your work at this point.
- don't skip step 6 ^
- next, before you work on the new feature, look over your code and try to find
  some good opportunities to **clean things up a bit**. We've been working on
  this app for a few weeks already, and we're only going to keep adding more
  things. What files are getting really long? Do you see any places where you
  could _extract a component_? Maybe reduce some duplication and **DRY**-up your
  code? Maybe rename some variables or add some helpful whitespace or comments?
  Decide on a at least a couple small improvements you could make and do them.
  These shouldn't change the functionality of the app at all, just improve the
  code so it's easier to work with going forward. These types of changes are
  called **refactoring**. _Refactoring_ means **improving the QUALITY of the
  CODE without changing what it DOES**. When you've finished, make sure you
  didn't break anything, and **commit your work**.
- make sure you actually commited your work after the last step, I'll want to
  review _just the refactoring commit_ by itself, separate from the other
  changes.
- make sure you slowly read the rest of the requirements before starting the
  next section
- next, a small **new feature: CSS variables**
  - identify 3 good candidates in your CSS for _css variables_. These could be
    colors you re-use in multiple files, or special numbers you use for spacing
    -- or really anything you find yourself repeating in your CSS.
  - extract 3 (or more) of these candidates out into **css variables**
  - make sure everything still works, and _commit your work_
- next we'll add this week's final **new feature: keyboard events:**
  - add support for at least one set of keyboard events as an alternate method
    of moving _forward_, _backward_, and _flipping the card_.
  - make sure you _add all dependencies to your `useEffect` invocations_.
  - make sure you _clean up your event listeners_.
  - remember: **baby steps** -- don't try to do them all at once, or even one
    whole key listener. Instead do stuff like just add a listener and log out
    the event object, and build up little by little.
  - commit often, so you have lots of _restore points_ if you botch something.
  - when you've finished, commit your work (squash WIP commits if you want, but
    don't squash the commits from step 6, 8, and 11), and push up a link to your
    MR and built site, as usual.
- finally, brainstorm at least **two ideas** for features you'd like to add soon
  to the Flashcards app. Don't get too wild and crazy (yet). They should be
  about the size of a homework assignment, and you should be close to being able
  to do them, maybe with a little help and explanation. **Post your ideas in
  Slack**, I think I'll pick from your ideas in the next few weeks as we keep
  iterating on this app.

---

## Akron Snowmen Homework

---

- connect with vscode to the akron snowmen repo you checked out in class on
  Monday night
- **don't** run `npm install` just yet...
- type a command to **add a new REMOTE** to your git repo. The remote name
  **must** be `upstream` and the remote url is
  `git@gitlab.howtocomputer.link:htc/akron-snowmen.git`. If you don't remember
  how to add a remote, try using `git`s built in help (`git help <subcommand>`),
  or find the spot in the past homework where we went over that.
- once you've successfully added the new remote, type this command (it's OK if
  you don't know exactly what this means, or why we're doing it, i'll go over it
  in the next class): `git pull --rebase upstream master`
- now you can type `npm install` to (finish) installing your dependences. (did
  you know: `npm i` is a shortcut for `npm install` 👍)
- type `<cmd> <shift> f` (use `alt` instead of `cmd` if your name is willow) to
  bring up vscode's **global search** feature. If it appears in your _sidebar_,
  drag it into your bottom pane, like I showed you monday night. Use the search
  feature to find where I added some _css variables_. (Hint, i used the `:root`
  selector, like a good boy).
- briefly peruse the variables I added in that file, you might want to use them
  later.
- visit the discussion over in our new `#akron-snowmen` channel in Slack. Over
  there we're going to try to come up with a list of components that would be
  good to tackle in week one.
- propose one or two new ideas for components
- leave a comment requesting 2 or 3 components that look like you'd like to
  tackle them -- don't start until I actually assign you one or more of these
  components. I'm going to weigh the complexity and student's comfort level and
  make the final call (for this week at least) on who is working on what
  component
- once i've assigned you one or more components to work on, **create a new,
  well-named branch** to start your work
- fire up storybook, and create your component in the `components/` dir. Be sure
  to start storybook in **mobile phone mode** because we're going to be diligent
  about designing this site **mobile first.**.
- create your component(s) with css using css modules. If your components might
  be in multiple different states, make sure they accept **props** to put them
  in those various states, and make sure you have a **story** for every state.
  Note: I don't mean use `useState` state, I just mean something like if you're
  making the hamburger, it might need to be _open_ or _closed_. I **do not want
  you to use `useState` in any of your components this week**. If you need to
  use any of the main colors, be sure to use the css variables I created for
  you.
- when you finish, _publish your storybook site_ using
  `npm run build-storybook`. After you run this command, you should be able to
  see it at `http://<yoursubdomain>.howtocomputer.link/storybook-snowmen`.
- commit your work, and submit a MR. When creating your MR, take a few minutes
  to write a carefully crafted paragraph or two describing the work you did,
  other students will be reading this. If you had to do anything weird, explain
  the trade-offs you made in the MR comment body. Tell us what we should check
  out, what you want more input on, etc.
- post in the `#akron-snowmen` channel a link to your built storybook site, and
  your MR.
- for every student who submits a MR, I want you each also to:
  - read their MR writeup
  - test out their storybook site
  - carefully read through the code they're submitting, if this gets merged,
    you're going to be building on top of this code, so make sure it makes
    sense, and you think it's at least mostly well written, as far as you can
    tell.
  - leave at least one truthful positive piece of feedback as a comment on their
    MR.
  - if you see any mistakes, or have any suggestions for making the component or
    the code better, leave some _kindly worded_ constructive criticism as
    comments on the MR.
- when other students comment on your MR, address any feedback they give you, if
  it makes sense and you agree it would make the code better, if you disagree,
  or don't understand, leave some polite comments in reply to their comments
  until you reach an understanding and agreement.
- nobody merge any MRs this week -- I'll handle merging things (for now).
