---
path: "/year-3/week-13"
---

# Year #3, Week #13 💻 🏒

_New stuff we learned this week:_ 🤔

## Pointer Arithmetic in C

- The magic formula: `array[i] == p + i` (where `p` is a pointer to `a[0]`)
- All arguments are **passed by VALUE** in C, including arrays, because they
  **DECAY INTO POINTERS**.
- There are 3 forms of pointer math allowed in C:
  - Adding an `int` to a _pointer_, which produces another _pointer_
  - Subtracting an `int` from a _pointer_, which produces another _pointer_
  - Subtracing _two pointers_, which produces an `int` representing the number
    of items of the type pointed to by the pointer between the two pointers.
- When you add and subtract integers to/from pointers, the pointers are
  automagically **scaled** according to the `sizeof` the type pointed to. This
  is the same as what happens with integers used for array access, you probably
  just never thought of it before.
- If you have any questions, simply refer to this diagram:

<img src="/images/pointer-arithmetic.png" style="margin-bottom: 2em;" />

## Homework Plan (2 weeks)

- 1 day Monkey Assignment #20 🐒
- 2 day review all flashcards in your (new Netlify) app.
- 2 day touch typing practice
- 1 day read King-C ch. 12 👑
- 1 day King-C ch. 12 projects 👑
- 1 day watch CS50
  [CS50 Lecture #3 segment](https://htc-viewer.netlify.app/?id=fykrlqbV9wM),
  from `1:01:56` to **end.**
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-20">Monkey Assignment #20 🐒</Checkable>

<Checkable id="king-c-read">King C: Read chapter 12 👑</Checkable>

<Checkable id="king-c">King C: Chapter 12 Programming Projects 👑</Checkable>

<Checkable id="cs50-vid">Watch CS50 Lecture #3 Segment</Checkable>

<Checkable id="flash-review">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="typing-1">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-5">Execute Program #6</Checkable>

---

## King C Chapter 12 Exercizes/Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 12 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Then, do the following programming projects:

- `Project #1a`, and `Project #1b`, each in a **SEPARATE** file.
- `Project #2a`, and `Project #2b`, each in a **SEPARATE** file.
- `Project #7` **NOTE:** _Do this one BEFORE Project #6_, it's easier and good
  practice for #6.

  - [here is the starting code](https://gitlab.howtocomputer.link/-/snippets/9)
  - hint: do the same trick of initializing an array without requiring user
    input while you're working on this one, then remove it and uncomment the
    part that uses `scanf`.

- `Interlude` (not in the book): modify the `anagrams` assignment from chapter 8
  (project `#16`) to use pointers instead of array indexing with integers.
- `Project #6`

  - [here is the starting code](https://gitlab.howtocomputer.link/-/snippets/8)
  - hint: the _type_ of the `part_element` variable should **NOT** be changed.
  - hint: your function prototypes should be:

  ```c
  void quicksort(int a[], int* low, int* high);
  int* split(int a[], int* low, int* high);
  ```

  - hint: comment out the first 3 lines of `main` and replace them with the
    following, so you don't have to keep entering numbers to test, then remove
    when you've got it working.

  ```c
  int i = 0;
  int a[N] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
  ```

- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Monkey #20 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _Completing the REPL_
  section, which is labeled **Boolean Literals**.
- Complete the next 3 short section:
  - **Boolean Literals**
  - **Null**
  - **Prefix Expressions**
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/30--3.5-eval-bools-prefix-expressions.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Monkey #21 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _Prefix Expressions_ section,
  which is labeled **Infix Expressions**. Complete the section.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/31--3.5-eval-infix-expressions.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards WebApp Assignment

---

- First, make sure you've addressed any feedback from your last MR, then merge.
- Make a new branch
- As I went over and briefly sketched out in class, your task is to make **2 new
  components**: 1) a Login component, and 2) a Signup component, following these
  hints/requirements:
  - Work purely in Storylite, don't integrate these components anywhere in the
    actual live app yet
  - both forms must look good down to `385px`
  - you must build them first at `385px`, then modify them to look different at
    larger screen sizes
  - because these two components will be very similar, you should reduce
    duplication by composing them both out of re-usable smaller components, and
    minimize duplication as much as possible to keep things DRY.
  - you must, at the very least, extract a `<Button />` component (if you don't
    have a usable one already), and a `<TextInput />` component.
  - since you're only working in storybook, there should be no state involved
    with this, these are just dumb components that receive props. Later, when we
    integrate them, we'll wrap them in containers and supply them with their
    props that way. In Storylite, you'll be manually setting any props
  - make sure you have stories written for your sub-components (Button,
    TextInput, and any others you want)
  - the Button component must take a `disabled` boolean prop, which when set to
    `true` causes the button to change its visual appearance so it is looks
    disabled. It should also change the cursor when hovered to the "not allowed"
    symbol (hint: see tailwind)
  - you must have a storylite story showing the button in it's `disabled` state
  - your TextInput component should receive an optional `invalid` boolean prop.
    When passed `true` the TextInput should render in a state showing the user
    that the input is invalid (imagine if they typed `lol` for their _email_ and
    tried to submit, you'd want to indicate that the input is wrong/invalid).
    Make sure you have a story to cover the invalid state as well.
  - the "Login" component should have a checkbox with a label that says
    something like "remember me for 2 weeks".
  - both main components should take props setting the values for both input
    fields, which you should use in your stories. Make sure you have at least
    one story when there is no input, and one story where the fields are filled
    out (which will allow you to style the font of the text entered into the
    input)
  - spend a little time reading
    [MDN about :focus styling](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus),
    as well as
    [the tailwind docs about the same](https://tailwindcss.com/docs/hover-focus-and-other-states).
    Also, checkout and familiarize yourself with the css `outline-*` properties,
    by looking at
    [the tailwind docs for them](https://tailwindcss.com/docs/outline-width)
    (look at all four `outline-*` props) -- these are really useful for
    hover/active/focus styline
  - make sure your TextInput has a _focus/active_ state alternate styling.
  - make sure your Button has a _focus/active_ state alternate styling.
  - The "Login" component should have an email + password text input, plus a
    button to submit, plus the "remember me for two weeks" checkbox.
  - The "Signup" component should have an email, password, and button to Submit.
- When you've got it all looking good, submit a MR, **review your diffs** and
  clean up anything you notice. Then build it to a draft url on Netlify. You
  should be able to see your storylite stories on netlify. Slack me the MR url
  and the Netlify Draft URL.
