---
path: "/week-35"
---

# Week 35 Homework 💻

_New stuff we learned this week:_ 🤔

## JS: Template Literals

- _ES6_ (a big update to the javascript language), introduced a new feature called **Template Literals** or **Template Strings**. They are a way to **embed javascript expressions** in a string.
  - template literals are surrounded by the BACKTICK character
  - embedded variables or expressions are surround by `${` and `}`

```js
const name = "Jared";
const age = 41;

// old way of concatenating with + sign 🙁
let oldWay = "My name is " + name + ", I am " + age;

// new way 😎 🚀
let newWay = `My name is ${name}, I am ${age}`;
```

- template literals can also be **multi-line**, which ordinary strings can't:

```js
let motivation = `
 __________________
< Do your HTC guys!>
 ------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
`;
```

- template literals are most often used to _embed **variables**_, but they can accept any **javascript expression**:

```js
let str1 = `On my birthday, I'll be ${age + 1} years old.`;

let str2 = `I was born in ${calculateBirthYear(age)}`;

let str3 = `HI! MY NAME IS ${name.toUpperCase()}!!!`;
```

## JS: Destructuring

- **destructring** is a special syntax that lets you _more concisely create variables from objects and arrays_.

```js
const animal = {
  type: "dog",
  name: "Fern",
  lovesChocolate: true,
};

// without destructuring:
let type = animal.type;
let name = animal.name;

// WITH destructuring: 😎 🚀
let { type, name } = animal;
```

- when _destructuring an object_, you can pluck just the things you want, and in **any order**:

```js
let { lovesChocolate, type } = animal;
```

- you can also **destructure Arrays**:

```js
let student = ["Tabitha", 12, "A+"];

// without destructuring:
let name = student[0];
let age = student[1];
let grade = student[2];

// WITH destructuring: 😎 🚀
let [name, age, grade] = student;
```

- when destructuring an array, you can **omit positions** by just supplying a comma with no variable name:

```js
let [, , grade] = student;
```

- and you _don't have to use the full length of the array_:

```js
let [name] = student;
```

- when destructuring arrays, you can name the variables **anything you want** since they don't have to correspond to _object property names_:

```js
let [firstName, numOrbitsOfSun, letterGrade] = student;
```

## JS: Array.sort()

- arrays in javascript have a **built in SORT method**. It is a _higher order function_ (that is, a function that takes or returns a function). You pass it a **comparison function** which receives **two items of the array at a time**. The compare function is supposed to return `-1`, `1` or `0`. `0` means "leave them unchanged", and I can never remember the difference between `1` and `-1` so I just try one.

```js
const pets = [
  { name: "Fern", age: 8 },
  { name: "Stalin", age: 2 },
  { name: "Dumpy", age: 6 },
];

const sortedByAge = pets.sort(sortByAge);

function sortByAge(petA, petB) {
  if (petA.age === petB.age) {
    return 0;
  } else if (petA.age < petB.age) {
    return -1;
  } else {
    return 1;
  }
}
```

- often times the _compare function_ is written inline as an _arrow function_:

```js
const sortedByNameLength = pets.sort((a, b) => {
  if (a.name.length === b.name.length) {
    return 0;
  } else if (a.name.length < b.name.length) {
    return -1;
  } else {
    return 1;
  }
});
```

- beware, **array.sort() MUTATES the original array!**

```js
const sorted = pets.sort(sortByAge);
// `sorted` is a sorted array, but also...
// `pets` got mutated, and IS SORTED NOW AS WELL 👺
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #32](https://htc-viewer.netlify.app/?id=_GzE99AmAQU)
- [GitLab](https://gitlab.howtocomputer.link)
- [Tabitha's challenge](https://gitlab.howtocomputer.link/Tabitha/tabithas-thingy)
- [Kiah's challenge](https://gitlab.howtocomputer.link/Kiah/yoohoo)
- [Win's challenge](https://gitlab.howtocomputer.link/Winfield/js-homework-3)
- [Harriet's challenge](https://gitlab.howtocomputer.link/Ritty/harriet-js-3-encryption-function)

---

## Homework Plan (next class in 3 weeks)

- 1 day new flashcard assignment
- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 days doing student testing practice from week 34
- 1 day destructuring/template literal homework
- 1 day array.sort homework

---

### Homework (week 1)

<Checkable id="new-flash">new flashcard assignment</Checkable>
<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="student-js">complete student js challenges from week 34 (links above ^)</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>

### Homework (week 2)

<Checkable id="review-flash-2">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="destructure">short destructuring/template literal assignment</Checkable>

### Homework (week 3)

<Checkable id="review-flash-3">review all flashcards</Checkable>
<Checkable id="typing-2">touch typing practice</Checkable>
<Checkable id="sort">short array.sort assignment</Checkable>

---

## New Flashcards assignment:

- add 4 new `js` flashcards:
  - `template literals`
  - `destructuring objects`
  - `destructuring arrays`
  - `Array.sort()`

---

## Destructuring Assignment

---

- very carefully and slowly review the **Destructuring** section of "New Stuff" above ^^.
- ssh into your home dir, create a new directory at `~/node/week35/` and `cd` into the dir
- in that dir, clone this repo: `git@gitlab.howtocomputer.link:jared/destructuring-1.git`
- connect vscode to that new dir created by cloning
- create a new branch
- read through the `destructuring.js` file, following the steps
- when you're done, push up a MR and Slack me the URL so I can check your work and have you fix anything

---

## Array.sort Assignment

---

- very carefully and slowly review the **Array.sort()** section of "New Stuff" above ^^.
- ssh into your home dir, then `cd` into the `~/node/week35/` dir
- in that dir, clone this repo: `git@gitlab.howtocomputer.link:htc/array-sort.git`
- connect vscode to that new dir created by cloning
- create a new branch
- run the tests using `jest sort.spec.js` or `jest sort.spec.js --watch`
- **hint:** 🔮 if you want to work on **just one test at a time, in _isolation_**, change the `test()` or `it()` function to be `test.only()` or `it.only()` and jest will temporarily skip all the other tests and _only run that one_. This helps with debugging, console.logging, etc, so you can focus on one thing at a time.
- when you've got all the tests passing, push up a MR and Slack me the URL so I can check your work and have you fix anything
