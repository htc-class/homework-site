---
path: "/summer-2"
---

# Summer Homework #2 💻 🥬

_New stuff we learned this week:_ 🤔

## TypeScript

- functions that _do not explicitly return anything_ should get the return type annotation of `void`:

```ts
function logHowdy(): void {
  console.log("Howdy!");
}
```

- but `undefined` is a valid type as well, so if you explicitly return `undefined` you can declare that as well:

```ts
function returnsUndefined(): undefined {
  return undefined;
}
```

- `true` and `false` are also **types** in TS, and can be used in any place you would use a normal type:

```ts
let name: string | false = "jared";
name = false;

function getLastName(name: string): string | true {
  if (name === "Beyonce") {
    return true;
  } else if (name === "Kiah") {
    return "Henderson";
  }
  return "Artinian";
}
```

- **specific strings** are also valid types, which are especially useful in _union types_:

```ts
function returnsGoat(): "goat" {
  return "goat";
}

function orderStatus(orderId: string): "pending" | "paid" {
  if (orderId === "123abc") {
    return "pending";
  }
  return "paid";
}
```

- you can create your own **custom named types** (the convention is to use _PascalCase_) like this:

```ts
type OrderStatus = "pending" | "paid";
```

- **tuples** are arrays of defined width and type, and can by typed like this:

```ts
type PersonData = [string, number, boolean];

let jared: PersonData = ["Jared", 41, true];

function getWillow(): PersonData {
  return ["willow", 14, false];
}
```

- **objects** can be declared as custom types by specifying the _type of each property_:

```ts
type Person = {
  name: string;
  hasBeard: boolean;
};

const win: Person = {
  name: "Winfield",
  hasBeard: false,
};

// as with all other types, you don't NEED to name the type
function getPet(): { type: string; name: string } {
  return {
    type: "turtle",
    name: "Stalin",
  };
}
```

- Typescript is **structurally typed** -- which means that _"if it looks like a duck, walks like a ducks, talks like a duck...**it's a duck**"_. That means, for instance, that this works:

```ts
class Duck {
  name: string;
  beakLength: number;

  constructor(name: string, beakLength: number) {
    this.name = name;
    this.beakLength = beakLength;
  }
}

// 😎 LOOK! **classes** are also TYPES
function getDuckName(duck: Duck): string {
  return duck.name;
}

// this works because we're passing it an instance
getDuckName(new Duck("Daffy", 11));

// 😎 WORKS! It's not an instance of the `Duck` class
// but it has the same STRUCTURAL TYPE, so TS is OK 👍
getDuckName({ name: "Ducky", beakLength: 4 });
```

## Javascript ES Modules

- historically _javascript has lacked a good **module system**_ for sharing code between multiple files.
- because of this `node` adopted and popularized a _function-based approach_ called **commonjs** which used `module.exports` and a `require()` function to share code between files.
- **TC39** (the committee responsible for the evolution of the javascript language) decided to add a new syntax for importing/exporting, called "ES Modules". The syntax looks like this:

```js
import fs from "fs";
import { createServer } from "http";
import { sayGoat } from "./my-goat-module";
```

- instad of using `module.exports`, with ES Modules you use the new `export` keyword, like so:

```js
export function sayGoat() {
  console.log("goat");
}
```

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #35](https://htc-viewer.netlify.app/?id=-4E2-0sxVUM)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan (next class in 3 weeks)

- 1 day (per week) review all flashcards
- 1 day (per week) touch typing practice
- 1 day Typescript Homework
- more coming soon...

---

### Homework (week 1)

<Checkable id="review-flash-1">review all flashcards</Checkable>
<Checkable id="typing-1">touch typing practice</Checkable>
<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="ts-1">Typescript Homework</Checkable>

---

## Typescript Assignment

- very carefuly and slowly review the **Typescript** portion of "New Stuff" above ^^.
- go to [https://gitlab.howtocomputer.link/htc/ts-intro-2](https://gitlab.howtocomputer.link/htc/ts-intro-2), **fork it**, then clone it into `~/node/summer-2` through `ssh`, then connect to the dir through vscode.
- create a new branch
- follow all of the instructions in the _comments_.
- to test your work, from the integrated terminal, type `tsnode types.ts` -- the Typescript will bark at you and spew error messages if you did anything wrong, or forgot anything.
- once you finished everything and `tsnode types.ts` shows **no errors**, submit a MR so I can see your code and leave any comments for corrections.

---
