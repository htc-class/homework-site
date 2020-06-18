---
path: "/summer-1"
---

# Summer Homework #1 💻 🍉

_New stuff we learned this week:_ 🤔

## TypeScript

- TypeScript files end with `.ts` (or `.tsx` -- but more on that later).
- in TypeScript, you can explicitly declare the types for your variables, arguments, function returns, and more, like this:

```ts
let name: string = "Jared";
let hasBeard: boolean = true;
let age: number = 41;
let horse: null = null;
let favoriteSpiter: undefined = undefined;
```

- but in typescript you would rarely write `let name: string = "Jared";` because typescript **infers** types:

```ts
let name = "Jared"; // TS knows `name` is a string
let age = 41; // TS knows `age` is a number
```

- in javascript you can set a variable to one type, and then _re-assign it to another type_ (as long as you're not using `const`). In TS, this is **not allowed**:

```ts
let name = "Jared";
name = false; // 💔 ERROR!!
```

- **arrays** in TS are specified by adding `[]` after a type:

```ts
let strings: string[] = ["Bob", "Sally", "Jake"];
let booleans: boolean[] = [true, true, false];
let grabBag: any[] = ["Hi", false, null, 33];
```

- when defining a function in TS, you can (and should!) define the **types of the argument**. The syntax is similar, using a colon again:

```ts
function introduce(name: string, age: number) {
  console.log(`${name} is ${age} years old`);
}
```

- if you define types for your _arguments_, then TS will let you know when you **use the function wrong**:

```ts
function introduce(name: string, age: number) {
  console.log(`${name} is ${age} years old`);
}

introduce("Jared", 41); // 😎
introduce(14, "Winfield"); // 💔 ERROR! wrong types passed
```

- TS allows you to add _type annotations_ for the **return values** of your functions. Although TS is often able to _infer_ the correct return value, being explicit and setting it yourself is always a good practice, because it prevents you from writing bugs. The return type annotatoin comes after the closing `)` of the function, like so:

```ts
function greeting(name: string): string {
  return `Hi there, ${name}!`;
}

function divideTwoNums(x: number, y: number): number {
  if (y === 0) {
    // 💔 ERROR! you promised TS you would return a number
    return "NO DIVIDING BY ZERO!";
  }
  return x / y;
}
```

- TS also has a concept of **union types** which you can think of a type that can be more that one thing. You create one by separating two normal types with the pipe `|` character, like so:

```ts
let age: string | number = 41;
age = "42"; // 😎 OK because `age` can be string OR number
```

- union types are handy for _functions that can return more than one type_. Let's re-write the `divideTwoNums` example above, this time returning `null` if a zero is passed as the divisor.

```ts
function divide(x: number, y: number): number | null {
  if (y === 0) {
    // 😎 OK because return value can be number OR null
    return null;
  }
  return x / y;
}
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #34](https://htc-viewer.netlify.app/?id=z-EtmaFJieY)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan (next class in 3 weeks)

- 1 day new flashcard assignment
- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 day Typescript Homework
- 1 day Node async Homework (coming soon)
- maybe more coming later...

---

### Homework (week 1)

<Checkable id="new-flash">new flashcard assignment</Checkable>
<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="ts">Typescript Homework</Checkable>

_more coming later..._

---

## New Flashcards assignment

- Make 5 new `ts` (typescript) flashcards:
  - declaring types for variables
  - declaring types for function _arguments_
  - declaring _return types_ for functions
  - _union types_
  - _array types_

---

## Typescript Homework

---

- very carefuly and slowly review the **Typescript** portion of "New Stuff" above ^^.
- go to [https://gitlab.howtocomputer.link/htc/ts-intro](https://gitlab.howtocomputer.link/htc/ts-intro), **fork it**, then clone it into `~/node/summer-1` through `ssh`, then connect to the dir through vscode.
- create a new branch
- follow all of the instructions in the _comments_.
- to test your work, from the integrated terminal, type `tsnode homework.ts` -- the Typescript will bark at you and spew error messages if you did anything wrong, or forgot anything.
- once you finished everything and `tsnode homework.ts` shows **no errors**, submit a MR so I can see your code and leave any comments for corrections.
