---
path: "/year-2/summer-3"
---

# Year #2, Summer #3 💻 🏰

_New stuff we learned this week:_ 🧐

## Assembly

- **Assembly language** is just one tiny step above _machine code_ on the ladder
  of abstraction. It allows you to write sort-of-readable instructions _directly
  to the CPU_, thinks like "put this value into that register", and "make
  such-and-such **system call**". Here's a simple "Hello world" in one flavor of
  assembly:

```asm
global _main

section .text

_main:
    mov     rax, 0x2000004 ; write syscall
    mov     rdi, 1 ; stdout
    mov     rsi, msg ; the string to write
    mov     rdx, 12 ; the length of the string
    syscall

    mov     rax, 0x2000001 ; exit syscall
    mov     rdi, 0 ; the exit code
    syscall


section .data

msg:    db      "Hello, HTC!", 10
```

## C 🪚

- C is a **super common** language, the _lingua franca_ of computer languages.
  It was created in the late 60's, and is still _incredibly widely used_. It's
  blazing fast and has lots of sharp edges. Some people refer to it as "portable
  assembly" because it's just a bit above assembly language on the ladder of
  abstraction. Here's a simple "Hello world" program in C:

```c
#include <stdio.h>

int main(void) {
  printf("Hello HTC!\n");
  return 0;
}
```

---

## Homework Plan (2 or 3 weeks...)

- Monkey Assignment #6
- 3 days review all flashcards in your app.
- 2 days touch typing practice
- 1 day personal project assignment
- watch [Lecture 0](https://htc-viewer.netlify.app/?id=jjqgP9dpD1k) of CS50
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-3">Monkey Assignment #6 🐒</Checkable>

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

## Monkey #6 (Parsing Let Statements) 🐒

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

## Personal Project Homework

---

- Refer to your work plan you created a few weeks ago, and select the next item
  on your list. If you're ahead or behind of where you thought you would be,
  make any modifications you think appropriate, then **Slack me your goal for
  this week.** 📅 👋
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
