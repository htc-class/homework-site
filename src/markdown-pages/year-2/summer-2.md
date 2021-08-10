---
path: "/year-2/summer-2"
---

# Year #2, Summer #2 💻 🏰

_New stuff we learned this week:_

## Programming Language Operators

- **Operators** in programming languages are special symbols that produce a
  result from one, two, or three _expressions_.
- **unary** operators operate on **one** expression:

```ts
// `-` is a UNARY operator
-1;

// `!` is a UNARY operator
!(hasBeard || isOld);

// `++` is a UNARY operator
i++;
```

- **binary** operators operate on **two** expressions:

```ts
// `+` is a BINARY operator
2 + 2;

// `%` is a BINARY operator
totalAmount() % 20;
```

- **ternary** operators operate on **three** expressions, most languages only
  have one of these:

```ts
// `? :` is a TERNARY operator
let x = isValid ? x : 10;
```

- Operators can be in (at least) 3 positions.
- **Prefix** operators go _before_ an expression:

```ts
// PREFIX operators
-3;
!true;
++i;
```

- **Postfix** operators go _after_ an expression:

```ts
i++;
i--;
```

- **Infix** operators are the most common and go _between_ expressions:

```ts
2 + 2;
x += 5;
7 * 3;
```

## TypeScript Non-Null Assertion Operator

- In typescript, sometimes values can also be `null` or `undefined`. When a
  value can also be null or undefined, TS _forces us to deal with that
  possibility_:

```ts
let name: string | undefined = `jared`;

jared.toLowerCase(); // 🚨 TS ERROR
```

- The reason TS complains about line 3 above is that in line 1 we explicitly
  said the type _might contain_ `undefined`. But, int this case we _KNOW_ that
  it's not undefined, because we set it's value to `"jared"`. In cases like
  this, it is _SOMETIMES_ appropriate to _force typescript to REMOVE the
  null/undefined possibility_ by using the **non-null assertion operator**,
  which is `!`:

```ts
let name: string | undefined = `jared`;

jared!.toLowerCase(); // ✅ no error
```

- But, be advised, you SHOULD not use the `!` operator willy nilly just to
  shut-up the compiler. (I'm looking at you Harriet!) You _want_ the compiler
  forcing you to deal with these edge cases. Rather, you should only use this
  operator when you know for sure something can't be undefined, but Typescript
  can't figure the same thing out, like in this example:

```ts
let myStrings: Array<string> = [];

// simulate a run-time condition that adds
// an unknown number of strings to our array...
if (Math.random() > 0.5) {
  myStrings.push(`banana`);
}

if (myStrings.length > 0) {
  // ✅ OK, because we checked that there
  // is a value, in a way the compiler doesn't understand
  myStrings[0]!.toLowerCase();
}
```

## TypeScript Interfaces

- Up until now we've declared all of our custom TS types using the `type`
  keyword:

```ts
type status = "single" | "married";

type Person = {
  name: string;
  hasBeard: boolean;
};
```

- But TypeScript provides _another way to define custom types_ using the
  `interface` keyword. For "object-like" types, the `interface` keyword works
  exactly like the `type` keyword, except you don't use an equals sign:

```ts
// same as above ^^^ example, minus the `=`
interface Person {
  name: string;
  hasBeard: boolean;
}
```

- So what's the difference? The `interface` keyword can't do some things that
  the `type` keyword can, but it also **can** do some things the `type` keyword
  can't. Here are some examples of both:
- Here are some things that are **illegal** with the `interface` keyword:

```ts
// 🚨 can't use `interface` as an alias to a primitive value
interface MyNumber number;

// 🚨 can't make a UNION
interface status 'married' | 'single';

// 🚨 can't use the & operator
interface Parent = Person & { kids: string[] }
```

- One thing interfaces can do that types can't do, is that they can be
  _re-opened more than once to add more properties,_ which is called
  **declaration merging**:

```ts
interface Pet {
  name: string;
}

// ...somewhere else, probably in another file...

// ✅ OK: interface can be "re-opened" to add more props
interface Pet {
  age: number;
}
```

## TypeScript: Implementing Interfaces

- In TS, _classes_ can **implement** interfaces (or types). This allows you to
  describe a lightweight **contract** about how an object behaves, allowing
  multiple different classes or objects to _implement_ that interface, and other
  functions to accept the interface, instead of the _concrete implementation_:

```ts
// define an interface
interface HasTrigger {
  squeeze: () => void;
}

// classes can now "implement" this interface
class Gun implements HasTrigger {
  public squeeze() {
    console.log(`Bang!`);
  }
}

class Hose implements HasTrigger {
  public squeeze() {
    console.log(`Sploosh!`);
  }
}

// classes can implement MULTIPLE interfaces:
interface Named {
  name: string;
}

class Gun implements HasTrigger, Named {
  public name: "AK-47";

  public squeeze() {
    console.log(`Bang!`);
  }
}
```

---

## Homework Plan (probably 3 weeks)

- 1 day New Flashcards Assignment - (10 - 15 minutes)
- Monkey Assignment #3 - (30 - 45 minutes)
- Monkey Assignment #4 - (30 - 45 minutes)
- (Optional) Monkey Assignment #5 - (2 - 3 hrs, _OPTIONAL_)
- 3 days review all flashcards in your app.
- 2 days touch typing practice
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-1">Monkey Assignment #4 🐒</Checkable>

<Checkable id="monkey-2">Monkey Assignment #5 🐒</Checkable>

<Checkable id="monkey-3">Monkey Assignment #6 🐒</Checkable>

<Checkable id="flash-new">New Flashcards Assignment</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="flash-review-3">Review Flashcards #3</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="next-personal">Personal Project Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Monkey #4 (Extending Token Set) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Work your way through the entire **Section 1.4 - Extending Our Token Set and
  Lexer** (starts at page 27 of the printed book, or page 21 of PDF).
- Video link is
  [here](http://jared.howtocomputer.link/monkey/05--1.4-extending-our-token-set-and-lexer.mp4).
- Use the video only when you need it, but **watch the entire thing
  eventually**.
- Submit a MR, slack the MR url.

---

## Monkey #5 (REPL) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Read the entirety of **Section 1.5 - Start of a Repl** in the book, trying to
  understand the code as much as possible. (Page 33 in printed book, Page 26 on
  PDF).
- Watch the video linked below, then type in the code I coded to get your REPL
  working.
- [Video link here](http://jared.howtocomputer.link/monkey/06--1.5-start-of-a-repl.mp4).
- Customize your REPL just a little bit, either in the prompt text, colors, or
  something else.
- Submit a MR, slack the MR url.

---

## (Optional) Monkey #6 (Parsing Let Statements) 🐒

---

- This task is optional, only if you want to keep going before our next class.
  👍
- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Read slowly and carefully through Chapter 2, sections 2.1 - 2.3.
- Then start reading Section 2.4 and try to follow, coding along to the best of
  your ability, using the videos linked below as needed.
- STOP before the end of Section 2.4, (page 53.6 of printed book, 41.7 of PDF),
  before he adds error messages to the parser.
- Video links:
  [part 1](http://jared.howtocomputer.link/monkey/07--2.4-parse-let-statements-1.mp4),&nbsp;
  [part 2](http://jared.howtocomputer.link/monkey/08--2.4-parse-let-statements-2.mp4),&nbsp;
  [part 3](http://jared.howtocomputer.link/monkey/09--2.4-parse-let-statements-3.mp4)
- Submit a MR, slack the MR url.

---

## New Flashcards Homework

---

- Add 6 new flashcards to a new `programming languages` category: (note: if your
  web-app doesn't allow this because of how you built your form, then you'll
  need to make a change either in your database, or in the web app to allow for
  it)
- make sure the "answers" for each of the operator cards **includes an
  example**.
  - `unary` (operator)
  - `binary` (operator)
  - `ternary` (operator)
  - `prefix` (operator)
  - `postfix` (operator)
  - `infix` (operator)
- make 3 new cards in the "TypeScript" category
  - `!` non-null assertion operator
  - `interface` keyword
  - `implements` keyword
