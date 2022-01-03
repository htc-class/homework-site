---
path: "/year-3/week-09"
---

# Year #3, Week #9 💻 🎱

_New stuff we learned this week:_

## Redux

- Redux is a pattern of application design invented by Evan Czaplicki as "The
  Elm Architecture" (TEA), and popularized by Dan Abramov when he ported it to
  Javascript for use in React.
- Redux has a few key concepts:
  - strict uni-directional data flow
  - immutable state
  - a reducer that takes a previous state, and action, and deterministically
    produces a new state
- Redux suffers from being a bit boilerplate-y, but the benefit is that it
  drastically simplifies complex application logic.
- For more info on integration, see the readme from
  (@htc-class/reduxlite)[https://gitlab.howtocomputer.link/htc/reduxlite].

---

## Homework Plan

- 1 day Monkey Assignment #16 🐒
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day CS50 "Substitution" assignment
- 1 day read King-C ch. 9 👑
- 1 day King-C projects 👑
- 1 day Flashcards Redux assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-15">Monkey Assignment #16 🐒</Checkable>

<Checkable id="substitution">CS50 Substitution</Checkable>

<Checkable id="king-c-read">King C: Read chapter 9 👑</Checkable>

<Checkable id="king-c">King C: Chapter 9 Programming Projects 👑</Checkable>

<Checkable id="redux">Flashcards Redux Assignment</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## CS50 **Substitution** Assignmnent

---

- Make sure your branches from last CS50 Assignment (Caesar, Redability) are
  merged (after addressing any feedback outstanding).
- Create a new branch named `substitution`
- Read and complete the
  [Substitution Assignment detailed here](https://cs50.harvard.edu/college/2019/fall/psets/2/substitution/).
- I would like to see you extract at least one helper function to complete the
  task.
- You should use `get_string()` to read in the "plaintext" from the user. You
  can use the fake `string` type, or `char *`, whatever you want.
- When you think you've got it done, **re-read** the _Specification_ section,
  and make sure you meet all of the criteria. Especially double-check little
  details and edge cases like:
  - returning a non-zero exit code when an error
  - printing the `Usage: ./substitution key` when wrong number of argument
    supplied, or if any non alphabetic characters supplied.
  - double-check that uppercase letters stay uppercase, and lowercase lowercase.
  - make sure non-letter values remain untouched.
- when your program is complete, submit a MR, then **review your diffs and clean
  up your code**, then slack me the URL.

---

## Monkey #16

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Triple-check that you did the first three steps.
- Start at section **2.8 - Function Literals**. Work through that section, and
  commit your work when you finish.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/25--2.8-function-literals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C Chapter 9 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 9 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects from chapter 8, making a **new
  file** for every one:

- `Project # 1`

  - Assume the user must enter **5** numbers.
  - You might find the macro `INT_MIN` from `limits.h` useful, it's the smallest
    number possible for an `int`.
  - a session should look like this:

  ```txt
  Enter 5 numbers: 55 32 1 -34 7
  Ordered: -34 1 7 32 55
  ```

- `Project #6`

  - a session with the program should look like:

  ```txt
  Enter a value for X: 3
  Polynomial: 762
  ```

- `Project #8`

- commit your work, and push up a MR on GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Flashcards Redux Assignment

---

- Make sure you've addressed any feedback from last week's flashcards web-app
  assignment and merged.
- Switch to `master`, pull, and **create a new branch** (unless you love making
  cookies!).
- Take a few minutes and slowly and carefully read the
  [readme](https://gitlab.howtocomputer.link/htc/reduxlite) for the
  **ReduxLite** package I made for you guys. Read **all the text** and study
  each code snippet.
- read all the rest of these instructions before starting, then come back and
  work through them step by step.
- Start by making a "presentational" dumb component for the **front of a
  flashcard**, called `<CardFront />`. It should have **no state**, just take
  props. You can copy it over from your old flashcards app, BUT I want you to
  convert the styling to be done with **Tailwind** instead of raw css.
- Make a couple of StoryLite stories (or one story with multiple sub-stories)
  for your `CardFront` component, it should show the component in as many
  different combinations of states as make sense, like:
  - with a date
  - without a date
  - with a long category/short category
  - with a long title/short title
  - ...anything else you can think of
- Make sure that your card front looks good **down to `385px` wide**, so it's
  friendly on phones. If you need to alter the layout for very small screens,
  you can.
- You should start by making it look good at `385px` and then layer on
  media-queries (with tailwind) to make it look good at larger screens.
- once you have your CardFront looking good, with some good StoryLite stories,
  **commit your work**.
- Next, pull over your "forward" and "back" buttons from your old flashcards
  app, again, making at least one story for each one, and converting the CSS to
  Tailwind. This should probably just be a single component that takes a prop of
  which direction it is going, but if you want it to be two components, that's
  OK too. It should take a prop of a function `() => unknown` that it will call
  when it is clicked.
- Next, make a component called `<CardViewer />` that renders a card front
  inbetween a forward and a back button. Start by hard-coding the props to pass
  to `<CardFront />`, and have the buttons do nothing for now, pass them empty
  functions.
- Finally, follow the instructions in the ReduxLite readme to integrate
  ReduxLite for your state management, with these hints/guidelines:
  - you'll need to do all the steps described in the readme's **initial setup**
    and **connecting your App...** sections.
  - you'll need at least two **actions** to start with, one representing
    "forward button clicked" and another representing "backward button clicked".
  - for now, don't worry about getting the cards from your API, instead, your
    **initial state** should have 3 hard-coded flashcards in it
  - You'll need to think through the **shape of your state,** decide which
    properties it has, and of what type they are, and edit the
    `src/redux/state.ts` file accordingly.
  - you'll need to write your reducer function to handle the two actions that
    can be emitted, updating the state.
  - you'll also need to create a `<CardViewerContainer />` component (in the
    same file with the `CardViewer` component) which takes no props, but uses
    `useSelector()` and `useDispatch()` to create all the props that the
    non-container component needs.
  - when you're done, the app should render and you should be able to click the
    forward and back buttons. The 3 hard-coded cards should **cycle**, if you
    get to the last one and press "forward", it should go to the first card.
- When you've finished, push up a MR, review your diffs, clean them up, and
  Slack me the MR url. Also, build your app and slack me the url so I can look
  at the app, and your stories.
