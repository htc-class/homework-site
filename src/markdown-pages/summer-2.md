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

// like with all other types, you don't NEED to name the type
function getPet(): { type: string; name: string } {
  return {
    type: "turtle",
    name: "Stalin",
  };
}
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
