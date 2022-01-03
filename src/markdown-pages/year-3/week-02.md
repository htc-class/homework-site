---
path: "/year-3/week-02"
---

# Year #3, Week #2 💻 🏀

_New stuff we learned this week:_ 🤔

## Javascript: `Map` and `Set`

- Modern versions of Javascript contain two helpful constructors to create maps
  and sets: `new Map()` and `new Set()`.
- Documentation on `Map`
  [can be found here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Documentation on `Set`
  [can be found here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- In typescipt, these are both modeled as _generics_: so to get strong typing
  with them, you write code like this:

```ts
const myMap = new Map<string, number>();
myMap.set(`foo`, 3);
myMap.set(`bar`, -10);
myMap.set(`jim`, `foo`); // 🚨 Typescript ERROR!
myMap.set(3, 4); // 🚨 Typescript ERROR!

const mySet = new Set<string>();
string.add(`foo`);
string.add(`bar`);
string.add(3); // 🚨 Typescript ERROR!
```

## Typescript: Enum

- Typescript **Enums** are a weird exception to the rule that Typescript is a
  strict _superset_ of javascript. But they are similar to enums in other
  languages, and sometimes usesful. For documentation
  [see here](https://www.typescriptlang.org/docs/handbook/enums.html).

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

---

## Homework Plan (3 weeks because Wilhites in California 🏔)

- Monkey Assignment #10
- 1 day Read the Docs! homework
- 2 days review all flashcards in your app.
- 2 days touch typing practice
- 1 day King C reading assignment (chapter 3)
- 1 day King C exercizes (see below)
- 1 day personal project
- 1 day CS50 Mario homework
- 1 day CS50 Cash homework
- watch [Lecture 1](https://htc-viewer.netlify.app/?id=e9Eds2Rc_x8) of CS50
  (from `57:30`, till the end)
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #3 of King C</Checkable>

<Checkable id="king-3">Selected Projects from King C, Ch. 3</Checkable>

<Checkable id="mario">CS50 Mario Assignment</Checkable>

<Checkable id="cash">CS50 Cash Assignment</Checkable>

<Checkable id="monkey-10">Monkey Assignment #10 🐒</Checkable>

<Checkable id="next-personal">Personal Project</Checkable>

<Checkable id="read-docs">
  Read the Docs! -- Map, Set, Typescript Enums
</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #1</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="typing-3">touch typing practice #3</Checkable>

<Checkable id="typing-4">touch typing practice #4</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Read the Docs! Assignment 📚

---

- Slowly and carefully read the
  [MDN reference on javascript's `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
- Slowly and carefully read the
  [MDN reference on javascript's `Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
- Slowly and carefully read the
  [Typescript docs on Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

---

## King C Chapter 3 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 3 of King C.
- Second, make sure you've watched this week's CS50 _before_ working on this
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects (not _exercizes_) from chapter 3:
  `1, 2, 3, 4`. Make a new file for every one.
- Use the `.gitignore` trick I showed in class to exclude all of your binaries
  from git once and for all.
- commit your work, and push up a MR on GitLab, then slack me the URL.

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

## Monkey #10 (Parsing Identifiers) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start in the middle of section **2.6**, in the section labeled **Implementing
  the Pratt Parser**. Work through that section, and the following one, titled:
  **Identifiers**. Stop when you get to the section labeled **Integer
  Literals**.
- As always, try to do as much as you can on your own, leaning on the videos
  when you get stuck. But also, make sure to watch the videos and update your
  code accordingly.
- [Video link #1](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/14--2.6-parsing-identifiers-1.mp4)
- [Video link #2](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/15--2.6-parsing-identifiers-2.mp4)
- Submit a MR, slack the MR url

---

## CS50 Mario Assignment

---

- Before you do this assignment, make sure that you have completed:
  - the King ch. 3 reading
  - the King ch. 3 programming projects
  - watched this week's CS50 lecture segment
- SSH into the HTC pi, create a new directory called `cs50`, and initialize an
  empty git repo.
- add a `.gitignore` similar to the one you have for your King C repo, that
  keeps files that end with `*.c` but ignores all others.
- make a commit with just your `.gitignore`
- like you did last week with King C, create a new repo on gitlab, and connect
  the two together, adding your Gitlab project as a remote.
- then, create a branch called `mario`.
- in your branch, write a C program that prompts the user for an integer, and
  builds a "mario ladder" of that size. A session with the program should look
  something like this:

```bash
$ ./mario
Enter height: 4
   #
  ##
 ###
####
```

- you can use `scanf` _or_ `get_int`.
- if the user enters a negative number: print a message saying they did it
  wrong, and _exit with an error code_.
- commit your work.
- make a new c program called `mario2.c` It should work the same as the first
  program, except it prints a **two-sided ladder**:

```bash
$ ./mario2
Enter height: 5
    # #
   ## ##
  ### ###
 #### ####
##### #####
```

- commit your work, submit a MR, slack the URL.

---

## CS50 Cash Assignment 💵

---

- Before you do this assignment, make sure you've completed the _CS50 Mario
  Assignment_.
- Go back to `master` and create a new branch from master (not from your `mario`
  branch), called `cash`.
- write a c program called `cash.c` that prompts the user for a _float_ value
  representing a cash amount in dollars and cents, like `1.32` or `0.41`. The
  program should then calculate **the least number of COINS** it would take to
  produce that value. Only worry about pennies, nickels, dimes, and quarters. No
  other funky coins, and no bills.
- A session with the program would look like this:

```bash
./cash
> Enter amount: 0.41
4

./cash
> Enter amount: 3.42
17

./cash
> Enter amount: 0.01
1

./cash
> Enter amount: 1.07
7
```

- Check your program by making sure it outputs the answers shown in the above
  code.
- Make it so that if the user enters a negative number, or a non-number, that it
  _repeats the prompt:_

```bash
./cash
> Enter amount: -1
> Enter amount: foobar
> Enter amount: 0.01
1
```

- Next, extract some of your code _out of_ `main()` into a helper function, with
  a _function declaration_ at the top of your file, and the helper function
  _below_ `main()`. More than one helper function is fine, but you must have at
  least one.
- Commit your work.
- Finally, make the binary you created globally available as `<username>_cash`,
  using concepts we reviewed in class and
  [this new stuff](https://homework.howtocomputer.link/week-20) to help you
  remember how. (Hint echo out your PATH or use `cowpath` to see the right spot
  to put the binary -- it should be obvious)
- Submit a MR, and slack the URL. I will also test your binary on the htc pi.
