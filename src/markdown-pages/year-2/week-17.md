---
path: "/year-2/week-17"
---

# Year #2, Week #17 💻 🛶

_New stuff we learned this week:_ 🤔

## **static** keyword

- in Javascript, the `static` keyword defines a static **method** or static
  **property**. Static methods and properties are often used for _utility
  functionality_ related to the class, but that doesn't make sense to be
  available as a normal _instance property or method_. Consider the following
  class definition:

```ts
class Car {
  // normal "instance" property
  type: string;

  // 👋 static PROPERTY
  static numWheels: number = 4;

  // 👋 static METHOD
  static makeTesla(): Car {
    return new Car(`Tesla`);
  }

  constructor(type: string) {
    this.type = type;
  }

  // normal "instance" method
  logType(): void {
    console.log(this.type);
  }
}

// 😎 static members are accessed from the CLASS name
Car.numWheels;
// > `4`

const myTesla = Car.makeTesla();
myTesla.type;
// > `"Tesla"`
```

- static properties **can't use the `this` keyword**, because they are not
  called in the context of an object instance:

```ts
class Car {
  // [...]
  static makeTesla(): Car {
    this.logType(); // 🚨 ERROR: can't use `this` here
    // [...]
  }
}
```

- **static methods** are really just like normal **functions** except they are
  _attached to the class_ for readability, and organization, and to avoid
  polluting the global namespace. You've already seen a lot of static methods,
  for instance:
  - `Math.random()`
  - `Object.keys()`
  - `Array.isArray()`
- **static properties** are really kind of like global-ish constants or
  variables, but again, they are attached to classes for readability,
  organization, and to avoid polluting the global namespace. For instance
  javascript defines a few useful static constants on the `Math` class, like:
  - `Math.PI`
  - `Math.E`

## Javascript Class/Object Misc Tidbits:

- the `instanceof` operator in javascript can be used to test whether some
  variable is an **instance of** a given class:

```js
const now = new Date();
const truck = new Car();

car instanceof Date;
// > false

now instanceof Date;
// > true
```

- the `instanceof` operator is most often used in logical `if` statements:

```js
if (someVar instanceof Date) {
  // do stuff now that you know what it is an instance of
  console.log(someVar.toISOString());
}
```

- in _Typescript_ classes are **both values AND types**, so the class name can
  be used _anywhere a type can be used_:

```ts
class Car {
  // [...]
}

// ✅ works: class is used in Type position
const myCar: Car = new Car();

// ✅ works: class used as type for argument
function takesCar(car: Car): string {
  return car.type;
}
```

- by default, if you convert any object (including an _instance of a class_) to
  a string, you get an unsatisfactory result of `[object Object]`:

```js
const me = {
  name: "Jared",
  age: 41,
};

String(me);
// > "[object Object]"

// console.log() automatically converts objects to strings
console.log(me);
// > "[object Object]"
```

- but, javascript lets us **define a `toString()` method** to _override the
  default way an object is converted to a string_:

```js
const me = {
  name: "Jared",
  age: 41,

  // 😎 custom string conversion
  toString() {
    return `Name: ${this.name}, age: ${this.age}`;
  },
};

// much nicer 👍
console.log(me);
// > "Name: Jared, age: 41"
```

## Typescript: Access Modifiers

- sometimes, when you're creating a class, you need to make some helper method,
  but you don't want that helper method exposed as part of the _public API_ of
  the class, meaning, you'd **like to HIDE** it from the code that uses the
  class:

```ts
class Product {
  isAvailable(): boolean {
    return this.numInWarehouse() > 0;
  }

  // hmmm... we need this method, but we really don't want
  // to expose it to the outside world
  numInWarehouse(): number {
    const records = this.database.read();
    return records.length;
  }
}
```

- with the above code snippet, we'd really like to only have consumers of our
  class call `isAvailable()`, and not to be able to call the method
  `numInWarehouse()` -- that's our business, not theirs. In the past there
  weren't great solutions for this. One common _convention_ was to _prefix the
  method or property_ with an underscore, which is sort of like a _no
  trespassing sign_. But it's just a suggestion, you can't stop someone from
  accessing it:

```ts
// attempt 1
class Product {
  isAvailable(): boolean {
    return this._numInWarehouse() > 0;
  }

  // here we're using the `_` to signal that this is
  // meant to be private
  _numInWarehouse(): number {
    const records = this.database.read();
    return records.length;
  }
}

// but it doesn't stop people from actually doing this:
const hats = new Product();
const hahaSecret = hats._numInWarehouse(); // 😢
```

- to help this problem, Typescript came along and introduced **access
  modifiers:** `public`, `protected`, and `private`:

```ts
// attempt 2
class Product {
  // 😎 we declare that `.isAvailable()` is PUBLIC
  public isAvailable(): boolean {
    return this.numInWarehouse() > 0;
  }

  // 😎 we declare that `.numInWarehouse()` is PRIVATE
  private numInWarehouse(): number {
    const records = this.database.read();
    return records.length;
  }
}

// now, users get a Typescript error
// if they try to use `.numInWarehouse()`
const hats = new Product();
const ackTsError = hats.numInWarehouse(); // 🚨 TS Error
```

- typescript access modifiers are pretty great, and are usually good enough to
  hide implementation. However, when the typescript is converted to javascript,
  the modifiers are removed, so it still doesn't technically STOP someone from
  using your protected method or property:
- the `protected` modifier works just like `private` except that a **child
  class** can access those members. You can think of `protected` as "private for
  non-children".
- [**in the near future**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
  fully private fields will be supported **in the javascript language**,
  allowing total privacy:

```js
// attempt 3 (in the future)
class Product {
  // all properties and methods are public by default
  isAvailable(): boolean {
    return this.numInWarehouse() > 0;
  }

  // we use a hash `#` for TRUE privacy
  #numInWarehouse(): number {
    const records = this.database.read();
    return records.length;
  }
}

const hats = new Product();

// now this is literally IMPOSSIBLE in javascript
// this would produce a runtime error. 😎
const nope = hats.numInWarehouse(); // 🚨 runtime error
```

## Javascript: Getters and Setters

- in a normal javascript object, you can read the value of a property by just
  calling `.<prop>` where `<prop>` is the property name, and you can set a value
  using the same dot-notation:

```js
const me = {
  name: `Jared`,
  age: 41,
};

// READ or "GET" a property:
const myName = me.name;

// WRITE or "SET" a property:
me.age = 42;
```

- sometimes, though, it's handy to be able to run a function to get a value,
  sort of to **compute** the value of something just-in-time, when it is read.
  Consider this code, it would be a bummer if we had to do this:

```js
const myRectangle = {
  width: 5,
  height: 10,
  area: 50, // 🐖 eeewwww, this is smelly
};
```

- in the above code snippet, having the `area` property defined as a constant is
  sort of stinky, because, if we change the width, we have to remember to update
  the area too. Really, we shouldn't keep track of the area, we **should
  DERIVE** or **compute** that value. One way to do this is with a _regular old
  METHOD_:

```ts
const myRectangle = {
  width: 5,
  height: 10,
  area(): number {
    // better :)
    return this.width * this.height;
  },
};
```

- the above code is perfectly good, except it sort of breaks the symmetry of the
  API of our rectangle object, the `width` and `height` members are just plain
  old properties, but the area is a method. So our users have to remember that
  distinction, which isn't great. **Our dream** would be that we could hide the
  computation of of the area somehow, so that we could still derive it lazily,
  but to the user of the object it would _appear like a normal property_. This
  is possible with a **`getter`**, which looks like this:

```ts
const myRectangle = {
  width: 5,
  height: 10,
  // 😎 new syntax!
  get area(): number {
    return this.width * this.height;
  },
};

// now we can do this:
myRectangle.area;
// > 50 ✅
```

- the compliment to a _getter_ is a **SETTER** -- which works just like a
  getter, except is a hidden function that runs when a value is set. It can be
  useful for a wide variety of purposes, one of which is doing some sort of
  runtime validation of a set value. Take for instance the idea of a class where
  you can set an **age** property, but you don't want to allow a _negative age_.
  You could enforce that constraint with a setter, like so:

```ts
class Person {
  public name: string;

  // 🧐 what's this all about...
  private _age: number;

  constructor(name: string) {
    this.name = name;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error(`Negative age!!`);
    }
    this._age = newAge;
  }
}

const me = new Person();
me.age = 41; // ✅ OK
me.age = -3; // 🚨 throws Error
```

- notice in lines 16-18 above, how we guard against setting a negative number as
  an age.
- also notice, how, since we're defining `age` with a getter and setter, _I was
  forced to create a private hidden property to track the stored age_ (see line
  5). That's because I can't use `this.age`, since the getter/setter defines
  those.

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1 day Akron Snowmen assignment
- 1 day HTTP Response Class assignment
- 1 day Future Project Planning assignment
- 1 days touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="snowmen-copy">Akron Snowmen Assignment</Checkable>

<Checkable id="flash-add-scr">Flashcard App Assignment</Checkable>

<Checkable id="parse-response">HTTP Response Class Assignment</Checkable>

<Checkable id="future-projects">Future Project Planning Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## HTTP Response Class Assignment

---

- Carefully and slowly read and review the following sections of "New Stuff"
  above ^^^:
  - **Static** properties and methods
  - **getters** and **setters** (_computed properties_)
  - **Typescript Access Modifiers**
  - **Object Misc.** (`toString()` method and `instanceof` operator)
- clone [this repo](https://gitlab.howtocomputer.link/htc/parse-response),
  connect with vscode, install dependencies
- create a new branch
- make sure you did the last step
- open up the `src/Response.spec.ts` file, start up your tests with `npm test`
  or `npm run test:watch` and start working through each test, one by one, like
  usual.
- when you've got them all passing with _no typescript errors_, commit your
  work, submit a MR, and slack your MR url.

---

## Flashcard App Assignment

---

- make sure you've addressed all the changes I requested on last week's
  API/server work, then _merge your MR._
- switch to master, pull from origin, and delete the branch from last week.
- make a new branch
- **in Storybook** design a new component which is a _form for adding a new
  card_ to your app. You'll need to think through some things, like:
  - what input do you need to collect to make a new card?
  - what form elements will you use to collect the info?
  - what do you want the form to look like?
- start by building this components with no props, and no ability to _submit_ or
  actually _do anything_, just design what it will need to have, and make it
  look the way you want.
- commit your work.
- next, you're going to need to figure out a way for your flashcard app **to
  have two _modes_**. What I mean by that is, it will need to support **EITHER**
  a) showing the user the flascards for them to practice, or b) letting the user
  ADD a card. Think through how you want this to work. Maybe draw a sketch or
  two on a piece of paper or a whiteboard. This, by the way, is called **UI
  Design** (UI stands for "User Interface"). Here are some possibilities
  (although you don't need to be limited to these):
  - the app could load into a state where the user is presented with two
    buttons, one that says "Review" and another that says "Add Card". In this
    scenario, the user would always have to explicitly choose which "mode" they
    want before proceeding.
  - alternatively, you could have the App start in "review" mode (like it always
    has), and just have a button somewhere on the periphery that says "Add
    Card". Then, only when the user clicked that button, the screen would switch
    to the "Add a Card" screen.
  - or... something totally different that you come up with.
- once you've decided on your approach, implement your design. Make it so the
  user can get into the "Add Card" mode **AND get out again**. For now, the add
  card mode will be useless, it won't work. That's OK, we'll hook it up to our
  API in future weeks. This is just a baby step towards cool stuff in the
  future.
- hints/requirements:
  - you're probably going to have to rework your main, outer App component, or
    create a new wrapping component that can display EITHER the "AddCard"
    component, or the normal "Review Card". Before you start typing, stroke your
    beard for a few minutes and decide what would be the cleanest way to
    implement that.
  - you're going to need to introduce some new **state** to track what mode
    you're in. Think carefully through _what component should OWN that state_,
    and try to give it the strictest typescript type you can come up with.
  - not required, but this feature might be a great place to use another **icon
    or two** for the buttons within the "add card" mode, and the button to get
    into that mode.
  - while you're working, make lots of **WIP** commits, so you can experiment
    and get back to a good state if you mess something up.
  - remember, now your app has **two parts**, a web-app and a **JSON API
    server**, so while you're working on the app itself (not storybook), you'll
    need to fire up the parcel dev server, and the api server. Review last
    week's homework if necessary.
- when you've got everything working and looking the way you want (by _working_
  I mean switching between modes, NOT actually adding cards) **rebase to squash
  your WIP commits**, build, and submit a MR. Slack all the URLs, as usual.

---

## Future Project Planning Assignment

---

- For this assignment you will be brainstorming and then deciding on **TWO**
  different long-ish-term projects you'll be working on on your own: a
  **brochure website** and **a web app**.
- For the **brochure website**, think of someone you know who could legitimately
  use a simple website. Enough that they (or someone close to them) would be
  willing to pay `$15` per year for a domain. The website should not be
  complicated, with no major interactivity, with the exception of maybe a simple
  contact form that generates an email. Talk to the person who would want the
  site, make sure they're up for it, and are willing to spend some time with you
  to help you understand what the content would be, providing input and
  guidance. Write down you top choice, or if you have several good ideas, write
  them all down. Here are some types of ideas to get your brain moving:
  - a website for Addrienne Pearl's massage business
  - a website for Eden's Rabbit-selling business
  - a website for the Wilhite Times
- For the **web app** -- this could be anything with a bit of interactivity,
  more likely to be a SPA using react. Something like the Tic-Tac-Toe project,
  or your Flashcards app. This doesn't have to be actually useful, although it
  could be. It can be primarily for you to use, or just because building it
  would be an interesting challenge. It should be hard enough to stretch you,
  but not impossible to build -- or at least there should be a reasonably
  possible _first version_ with options for future enhancements. Some random
  ideas:
  - MSF Soccer Scheduler
  - interactive 2-person checkers or chess game
  - game to teach vim
  - personal todo list app
- When you've got your ideas selected, Slack us your choices, _PLUS any ideas
  you liked but decided not to do_. Other students can be inspired by your
  choices, and can take for themselves any ideas you mention that you indicate
  you will NOT be doing.

---

## Akron Snowmen Assignment

---

- NOTE: this homework should be done **alone**, not with any other student/s.
- spend a few minutes looking over the
  [current Akron Snowment site](https://www.akronsnowmen.com) -- not because
  everything there is important and should be re-created on the new site, but
  simply _so you have a feel for what's currently there, and to jog your mind a
  bit for the next step_.
- open a new file somewhere on your computer, and save it somewhere safe. Use
  whatever program you want.
- Think hard for a few minutes about the following questions, and write fairly
  detailed answers to each:
  - What should the nav items on the homepage **actually say** for text?
  - Do we need any more **main sections of the homepage** (with nav items)? If
    so, which ones?
  - What should each of the Image/Text blocks be about? (Don't write the text,
    just decide the SUBJECT of each block.)
  - Do we need any more Image/Text blocks? If so, what subjects?
  - What should the main SUBJECT of the Pink block be?
  - What is your best attempt to pick the 6 "topics" covered by the squares in
    the pink block? What makes the most sense to call-out and provide a
    scannable list of? What would grab the attention of someone shopping for a
    snow removal company?
  - Soon we'll add some more interior pages to this site, so it's not just a
    single homepage. What pages do you think it needs?
  - Make a detailed list of photographs we wish we had for the homepage, and for
    any interior pages you documented above. If you had a professional
    photographer working for you for free, which images would you send them to
    photograph so you could finish the site?
- When you finish, **send me a DIRECT MESSAGE** with your answers. Do not post
  them publicly. I want each of you to submit your answers _before you see any
  of the other student's answers_.
