---
path: "/week-34"
---

# Week 34 Homework 💻

_New stuff we learned this week:_ 🤔

## npm

- `npm` is the **package manager** for node, it's name originally stood for `Node Package Manager`. We've already use it a fair bit.
- `npm` lets you:
  - install third party dependencies
  - publish your own packages for others to use
  - and a bunch more...
- if you're going to use `npm` in a repo or project, `npm` will create for you a **main configuration file**: `package.json` -- a json file containing information about your project, it's dependencies, scripts you can execute, and more.
- `npm init` will walk you through a series of steps to **initialize** your repo/dir with npm. You can also pass the `-y` flag to automatically take the defualts for every option: `npm init -y`
- `npm install <package-name>` tells `npm` to go get a third-party package, (like `cowsay`) and it _installs it into a_ `./node_modules/` _dir that it creates for you._
- anything you install with `npm install <package>` will be listed as a **dependency** in your `package.json` file
- npm also creates a file called a **lock file** -- `package-lock.json` -- this file just records in extreme detail _exactly which versions of every package it installed_. This file is used when you run `npm install` with no `<package-name>`, see below:
- `npm install` by itself tells npm to install all of the dependencies listed in your `package.json` file. If it finds a `package-lock.json` it will install exactly what is listed there. This helps a lot when you have a team of people working on the same project. It eliminates problems where it works on one person's computer, but not someone else.
- the `package.json` file contains a `scripts` key/object -- you can use that to create sort of mini-aliases for commonly used commands. These commands are in a way nicer than bash aliases because they are sort of _scoped_ for just that package, and by nature of the fact that they are in the `package.json` file, they are tracked by git, and thus shared by anyone else using your package.
- any script you define in the package.json file can be executed by typing `npm run <script-name>`. So if your `package.json` looked like this:

```json
{
  "name": "rad-app",
  "scripts": {
    "welcome": "echo WELL HELLO THERE!"
  }
}
```

- you could then execute the command `npm run welcome` and it would print to your terminal `WELL HELLO THERE!`.
- npm scripts are just shell commands
- any `npm` package you install that has a **binary** executable file (something you can invoke as a command from the SHELL), get's put in `./node_modules/.bin/<binary-name>`
- `yarn` is an alternative to `npm`. For a while it was _much faster_ than `npm`, and introduced the concept of a **lock file** (called `yarn.lock` instead of `package-lock.json`). But nowadays npm has a lock file and is super fast too. `npm` is more commonly and widely used. Many of the commands are the same.

## javascript classes

- inside an object the special keyword **`this`** refers to **the object itself**.
- consider this code snippet:

```js
const person = {
  name: "Jared",
  introduce: function() {
    console.log("Hi, my name is", person.name);
  },
};
```

- on line 4 of the above snippet, I used the variable name `person` to get access to the string "Jared" -- `person.name`. But I could have used the special shortcut keyword `this` -- which means the same thing as `person` -- because `this` refers to the object itself, like so:

```js
const person = {
  name: "Jared",
  introduce: function() {
    // on the next line `this` means "this object" 😎
    console.log("Hi, my name is", this.name);
  },
};
```

- but, if you want to make a bunch of similar objects, it quickly gets repetative. Consider the following code:

```js
const jared = {
  name: "Jared",
  introduce: function() {
    console.log("Hi, my name is", this.name);
  },
};

const tabitha = {
  name: "Tabitha",
  introduce: function() {
    console.log("Hi, my name is", this.name);
  },
};

const kiah = {
  name: "Kiah",
  introduce: function() {
    console.log("Hi, my name is", this.name);
  },
};
// ... and so on.  😕
```

- javascript **classes** are a way to create objects with pre-defined behavior, via _methods_ and _data_. We can improve the last snippet a bunch by using a **class** like so:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log("Hi, my name is", this.name);
  }
}

const jared = new Person("Jared");
const tabitha = new Person("Tabitha");
const kiah = new Person("Kiah");
```

- once you have a class, you create **instances** of the class with the `new` keyword, and then treat the class name like a _function_, which it really is.
- when you invoke class as a function with the `new` keyword, any arguments you pass to it are processed by the `constructor` method you define inside the class.
- classes can **extend** other classes. This is often referred to as **inheritance**. Think of it like classes have children, and those children _inherit_ the methods of their parents. But they can add their own methods, or even override the ones they get from their parent. Consider this code:

```js
class HtcMember {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log("Hi, my name is", this.name);
  }

  sayRole() {
    console.log("I am a member of the HTC class.");
  }
}

class HtcTeacher extends HtcMember {
  sayRole() {
    console.log("I am the teacher of the HTC class.");
  }

  teach() {
    console.log("I am on a bunny trail...");
  }
}

const win = new HtcMember("Win");
const jared = new HtcTeacher("Jared");

// jared INHERITS `introduce` and `sayRole` from HtcMember
jared.introduce(); // > Hi, may name is Jared
jared.sayRole(); // > I am the teacher of the HTC class

// `jared` has another method: `teach` from `HtcTeacher`
jared.teach(); // > I am on a bunny trail...

// `win` doesn't have a `teach` method
win.teach(); // 💔 Error
```

- sometimes you want to call the **parent class's METHOD** from a child class, to do that, you use the special `super` keyword. 🦸‍♀️

```js
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  drive() {
    console.log(this.type + " goes VROOM");
  }
}

class BumperCar extends Vehicle {
  constructor(color) {
    super("Bumper Car"); // 🦸‍♀️ call the PARENT constructor
    this.color = color;
  }

  drive() {
    super.drive(); // 🦸‍♀️ call the PARENT's `drive` method
    console.log(this.color + " Bumper Car goes CRASH!!!");
  }
}

const sedan = new Vehicle("Sedan");
sedan.drive(); // > Sedan goes VROOM

const redBumperCar = new BumperCar("Red");
redBumperCar.drive();
// > Bumper Car goes VROOM
// > Red Bumper Car goes CRASH!!!
```

- if you're trying to call the parent's **constructor** you just use `super` on it's own, like `super(<...args>)`. But if you're calling a parent's **other method**, you use `super.<methodName>()`, like `super.drive()` in the example above.
- objects created by instantiating a class are still **javascript objects** so you can set and read properties on them just like any other object:

```js
class Vehicle {
  constructor(type) {
    this.type = type;
    this.isForSale = false;
  }

  drive() {
    console.log("Vroom vroom");
  }
}

const vehicle = new Vehicle("Car");
console.log(vehicle.isForSale); // > false
console.log(vehicle.type); // > Car
vehicle.type = "Plane";
console.log(vehicle.type); // > Plane
```

## Unit Testing & Jest 🃏

- **unit testing** is a computer word for _writing automatable tests of small pieces (units)_ of code.
- everybody _tests their code_, but not everybody keeps those tests around.
- having unit tests makes it _really safe to_ **refactor** _your code_.
- **refactoring** means to _change how the code is written, without changing how it works_.
- the most common _testing framework_ for javascript is called **jest**. It can be installed with npm: `npm install jest` (but I already installed it globally for us on the HTC VM).
- jest tests make heavy use of FUNCTIONS, in specifically _arrow functions_:

```js
const add = require("./add");

it("should give me 4 if I add 2 and 2", () => {
  const sum = add(2, 2);
  expect(sum).toBe(4);
});
```

- the basic format of a jest test is: `it(<test-description>, <test-function>)`
- you can use `test()` instead of `it()`, they both are the same
- jest gives you a function called `expect` which returns an object. This allows you to write what are called _assertions_ that almost read like english:

```js
expect(2 + 2).toBe(4);
expect("foo" + "bar").toBe("foobar");
```

- when you're writing jest tests, you should make a lot of small tests with descriptive titles, like this:

```js
it("should give me 4 if I add 2 and 2", () => {
  const sum = add(2, 2);
  expect(sum).toBe(4);
});

it("should return zero if not passed two numbers", () => {
  const sum = add('foo', 'bar);
  expect(sum).toBe(0);
});

it("should handle negative numbers", () => {
  const sum = add(-3, -7);
  expect(sum).toBe(-7);
});
```

- you can run your tests by typing `jest <test-filename>`.
- by _convention_ all jest tests are put in a `__tests__` dir next to the file you're testing, and named `<file>.test.js` or `<file>.spec.js`.
- you can **skip a test** by prefixing `x` to the `it` or `test` function
- there are a bunch of other **matchers** besides `.toBe()` here are a couple useful ones:

```js
const goat = {
  name: "Linus",
  beard: true,
  breed: undefined,
  age: 3,
};

test("the goat", () => {
  expect(goat.name).toBe("Linus");

  // you can also do `.toBeGreaterThan()`
  expect(goat.age).toBeLessThan(5);

  // Look, you can FLIP the assertion with `.not`
  expect(goat.beard).not.toBe(false);

  // you could also have done `.toBe(undefined)`
  expect(goat.price).toBeUndefined();

  // allows you to test for just SOME object properties
  expect(goat).toMatchObject({
    name: "Linus",
    age: 3,
  });
});
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #31](https://htc-viewer.netlify.com/?id=bPVaOlJ6ln0&vl)
- [GitLab](https://gitlab.howtocomputer.link)
- [Flexbox Froggy](https://flexboxfroggy.com/) 🐸

---

## Homework Plan:

- 1 day flashcard assignment
- 2 day touch typing practice
- 3 days JS homework
- 1 day doing other students testing challenges
- 1 day Flexbox review with [Flexbox Froggy](https://flexboxfroggy.com/) 🐸
- 1 day watch [CCCS #31](https://htc-viewer.netlify.com/?id=bPVaOlJ6ln0&vl)

---

### Homework day 1

<Checkable id="flash">flashcard assignment</Checkable>
<Checkable id="js-1">JS Homework #1</Checkable>

### Homework day 2

<Checkable id="type-1">touch typing practice #1</Checkable>
<Checkable id="cccs-1">Watch CCCS</Checkable>
<Checkable id="js-2">JS Homework #2</Checkable>

### Homework day 3

<Checkable id="type-2">touch typing practice #2</Checkable>
<Checkable id="js-3">JS Homework #3</Checkable>

### Homework day 4

<Checkable id="froggy">All levels of Flexbox Froggy</Checkable>
<Checkable id="js-student">Student testing challenges</Checkable>

---

## Flashcard Assignment

- add 9 new flash cards in the `js` category for:
  - `npm init`
  - `npm init -y`
  - `npm install`
  - `npm install <package>`
  - `npm run <script>`
  - `class` keyword
  - `extends` keyword
  - `super()`
  - `super.<method-name>()`

---

## JS Homework #1

---

- slowly and carefully review the "New Stuff" -- studying each of the code samples
- go to [this gitlab repo](https://gitlab.howtocomputer.link/htc/week-34-objects-1), fork the repo, and copy the clone url from _your fork_.
- `ssh` in to your home dir, create the dir `~/node/week34/` then `cd` into it. Clone down the repo using the URL you copied in the last step.
- **DON'T SKIP THIS** then move into the newly created dir, and **switch to a new branch**
- now connect to the remote host with vscode and open the newly created folder called `~/node/week34/week-34-objects-1/` which was created by cloning
- type the command to show the vscode sidebar, then browse around the files that I've given you.
- we'll start with the `__tests__/Person.spec.js` test file. To run the tests in that file, open the integrated terminal in vscode and type `jest Person.spec.js`. You should see a bunch of _skipped_ steps.
- Open both the `__tests__/Person.spec.js` file and the `Person.js` file in vscode. Then, start by removing the first `x` before the `it`, to _stop skipping the first test_. The first test passes for you. Run your tests to see.
- next, unskip the second test, and re-run your tests. Make sure you see the failing test before you get it to pass. **You should always see the test FAIL before you fix it.**
- then, start un-skipping each test one by one, and changing the `Person.js` file to get the tests passing. Read my comments in the test file for clues/hints. Each time you un-skip a test, see it fail before you fix it. 👍
- if you want you can add the `--watch` flag after the command in the terminal and jest will automatically re-run your tests anytime your file changes. Thanks Jest!
- you shouldn't change _anything_ in the `Person.spec.js` file **except for removing the `x`s**.
- when you have all of the tests passing, push the branch you created up to your fork, submit a MR, and slack me the URL -- I will leave you some comments on your code and probably will have you change a few things.

---

## JS Homework #2

---

- go to [this gitlab repo](https://gitlab.howtocomputer.link/htc/week-34-objects-2), fork the repo, and copy the clone url from _your fork_.
- `ssh` in to your home dir, cd into the `~/node/week34/`. Clone down the repo using the URL you copied in the last step.
- **DON'T SKIP THIS** then move into the newly created dir, and **switch to a new branch**
- now connect to the remote host with vscode and open the newly created folder called `~/node/week34/week-34-objects-2/` which was created by cloning
- run the `Bank` tests by typing `jest Bank.spec.js` into the integrated terminal, then one by one make the tests pass
- run the `Student` tests by typing `jest Student.spec.js`, then one by one unskip and make the tests pass.
- push up a Merge Request and Slack me the URL so I can leave you feedback and possibly have you change some things.

---

## JS Homework #3

---

- carefully and slowly review the `NPM` section of "New Stuff" above
- ssh into your home dir, and cd into the `~/node/week34` dir.
- create a new directory called whatever you want and cd into it
- initialize an empty git respository
- connect vscode to this new directory
- initialize the directory with NPM
- commit your package.json file
- connect this repo to your GitLab account by pushing it up as a new Project. If you can't figure out how, week 33 Web Homework #2 explains it step by step. 👍
- create a file in the project root called `my-function.js`. Inside the file create and export a single function that does something moderately complex -- make something up. It should require some if statements, or logic, or array mapping, etc. Think like the `maxTen()` function I made in class.
- create another file at the path `./__tests__/my-function.spec.js`. In it, write at least 5 tests for your function.
- get all of your tests passing, running jest with `jest my-function.spec.js`
- commit your work
- type a command to install the `jest` testing framework for this repo (yes, it's already installed globally, but we're going to pretend it isn't).
- gitignore your `node_modules/` dir
- figure out where the binary executable file is that npm installed (hint: look in your node_modules dir, there is a special directory where npm puts **bin**ary files).
- once you found where the jest executable is, use the relative path to it (starting with `./`) use it to run your tests, like `<path-to-jest> my-function.spec.js`
- write an npm script that runs the test file for you, and figure out how to run it using `npm` instead. Name the script: `test` (hint: npm probably already stubbed you out a spot to put this test)
- commit your work
- now, delete your function and add an `x` before every `it()` or `test()` function you made, then commit your work again.
- push your work up to gitlab
- share your GitLab URL in Slack
- when other students share their gitlab URLs, clone their repos and make their tests pass.
