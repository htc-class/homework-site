---
path: "/year-2/summer-4"
---

# Year #2, Summer #4 💻 🛖

_New stuff we learned this week:_ 🧐

## Favicons

- A **favicon** is the little icon that appears in the tab display of most
  browsers (although it can also appear other places).
- You can instruct the browser where you find your favicon by adding something
  like this to the `<head>` of your website:

```html
<link rel="icon" href="./path/to/my-icon.png" type="image/png" />
```

- if you don't supply an explicit `<link>` to your favicon, the browser will
  look in `/favicon.ico`
- the `.ico` extension was originally the only supported format by Internet
  Explorer and most browsers, so you had to convert your icon to that format.
  These days, almost everyone uses `.png`s for favicons.

## Typescript: Abstract Classes

- In Typescript, you can declare a class **abstract**, which means you _can't
  directly instantiate it_, it can only be used as a **parent class**.

```ts
abstract class Mammal {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}

// 🚨  ERROR!! Can't instantiate an `abstract` class
const skunk = new Mammal(`Betty`);

// ✅ Instead, use it as a super (parent) class
class Dog extends Mammal {
  public speak(): void {
    console.log(`ruff ruff`);
  }
}

const steve = new Dog("Steve");
```

## Basic C Concepts 🪚

- There are currently three main compilers for C: **MSVC**, which is Microsoft's
  own C/C++ compiler; **GCC**, which is dwindling in importance as LLVM/Clang
  grows stronger, and **clang/LLVM**.
- every C program **must contain a `main`** function. This special function is
  invoked when the program is executed:

```c
#include <stdio.h>

int main(void) {
  printf("Hello, world!\n");
  return 0;
}
```

- the integer number returned by `main` becomes the program exit code.

---

## Homework Plan (3)

- Monkey Assignment #7
- Monkey Assignment #8
- 3 days review all flashcards in your app.
- 4 days touch typing practice
- 1 day favicon assignment
- 1 day King C reading assignment
- watch [Lecture 1](https://htc-viewer.netlify.app/?id=e9Eds2Rc_x8) of CS50
  (only up to `21:52`)
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #1 of King C</Checkable>

<Checkable id="monkey-7">Monkey Assignment #7 🐒</Checkable>

<Checkable id="monkey-8">Monkey Assignment #8 🐒</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="flash-review-3">Review Flashcards #3</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="typing-3">touch typing practice #3</Checkable>

<Checkable id="typing-4">touch typing practice #4</Checkable>

<Checkable id="next-personal">Favicon assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Monkey #7 (Parser Error handling) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- start where we left off last video (page 53.6 of printed book, 41.7 of PDF)
  and complete the last chunk of section **2.4** where he deals with parser
  errors. (Hint: if you want to manually make a jest test fail _throw your own
  Error_)
- Stop at the beginning of section **2.5**.
- [Video link](http://jared.howtocomputer.link/monkey/10--2.4-parser-errors.mp4)
- Submit a MR, slack the MR url.

---

## Monkey #8 (Parsing Return Statements) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start at the beginning of section **2.5**. As you start working, see if you
  can spot a good opportunity to refactor some of the `ast.ts` classes using
  base classes, inheritance, and maybe the `abstract` keyword.
- Stop at the beginning of section **2.6**.
- [Video link #1](http://jared.howtocomputer.link/monkey/11--2.5-parse-return-statements-1.mp4)
- [Video link #2](http://jared.howtocomputer.link/monkey/12--2.5-parse-return-statements-2.mp4)
- Submit a MR, slack the MR url.

---

## Favicon Homework

---

- Pick at least one of your projects (like your personal project, or your
  Flashcards app, etc.) and add a Favicon.
- create a MR with the changes, and slack the URL.
