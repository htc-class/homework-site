---
path: "/year-3/week-01"
---

# Year #3, Week #1 💻 ⚽️

_New stuff we learned this week:_ 🤔

## C: Preprocesser Directives

- a **preprocessor directive** in C is _any line beginning with_ `#`.
  Preprocessor directives are replaced _before compilation_.
- an include statement is something like `#include <stdio.h>` or
  `#include "../foo.c"`. You can think of it like an _import_ statement in
  javascript, except that what is really going on under the hood is that the
  preprocessor **copies and pastes the file right into that spot** before
  compilation.
- a `#define` directive (sometimes called "pound define"), creates a **macro**,
  which is like your own instruction to the preprocessor to **copy paste** the
  tokens following wherever it finds that macro. That means that the following C
  code:

```c
#define MY_MAGIC_NUMBER 42
int x = 10 * MY_MAGIC_NUMBER;
```

- actually gets replaced to become the below _before compilation_:

```c
// blank line here now actually
int x = 10 * 42;
```

## C: A Few Basic Types

- The C language supports two categories of _numeric_ types, **integers** and
  **floating point** numbers. There are several different _sizes_ of each kind
  of number, but to get started we can just learn the two simplest: `int` and
  `float`.
- `int` types hold positive or negative **integers**. Exactly how large depends
  on the machine and architecture and word-size of the computer you're currently
  running on. But for most modern computers, an int is **4 bytes**, or 32 bits,
  which means that they can store from `-2,147,483,648` to `+2,147,483,647`.
- to declare an int variable, you write:

```c
int some_variable;
```

- or, you can declare it and **initialize** it at the same time:

```c
int my_age = 42;
```

- if you _never initialize_ your int variable, it will hold **garbage**, that
  is, whatever random bits might have happened to be in in that section of
  memory. 🗑
- **floats** are similar to integers, except they can hold a decimal portion.
  When initializing or assigning a float value with a _literal_, it's a good
  practice to include the character `F` after the literal:

```c
int some_float;
some_float = 3.14F;
// [...]
int another_float = 7.7234F;
```

- C has a **character** type: `char`, which holds a single character. A
  character in C is only 1 byte, which means there are only 256 total possible
  characters. This datatype was invented during the days of ASCII, when it was
  thought to be enough. For modern string processing, the char type is outdated
  and unusable for all but the simplest western languages.
- You write a character literal with **single quotes**:

```c
char my_char = 'a';
// or...
char another_char;
another_char = 'Z';
```

- the `sizeof` operator in C returns an integer which is how many bytes that
  type takes on your machine:

```c
sizeof(int); // 4
sizeof(char); // 1
```

## Variables in C

- Every variable in C is by default mutable, you can always change it's value:

```c
int age = 42;
age++;

char some_char = 'W';
some_char = 'A';
```

- later versions of C added the `const` keyword, which allows you to declare
  that a variable cannot be re-assigned, much like declaring a variable with
  `const` in javascript. The compiler will error if you try to change it. The
  `const` keyword is technically a **qualifier for the TYPE**, so you put it
  _before the type_:

```c
const int max_games = 10;
max_games = 100; //🚨 Compiler error
```

- The _type_ of a variable is only necessary when **declaring** a variable, and
  never should be indicated again.

```c
int age = 42;

if (is_birthday) {
  // notice we don't write `int age...`
  age = age + 1;
}
```

- That's because you _can't change the TYPE of a variable in C_:

```c
int x = 9;
// [...later on...]
age = 'c'; // 🚨 ERROR, can't change from int to char
```

## C: printf basics

- `printf()` is like `console.log()` for C. It prints stuff to the terminal
  (technically, to standard out). The `f` stands for **formatted** because
  printf's first argument is a _format string_ which can have special
  _placeholders_ that control the formatting of variables passed in the rest of
  the arguments.

```c
printf("Hello, world!\n");
```

- to use printf, you must include the `stdio.h` header with the
  `#include <stdio.h>` preprocessor directive.
- printf is a variadic function that takes any number of arguments to **replace
  placeholders** in the first string, (called the format string).
  - `%s` for a "string" (`char *`)
  - `%c` for a charactater `char`
  - `%d` or `%i` for an `int`
  - `%f` for a float

```c
int age = 42;
char x = 'x';
float pi = 3.13F;

printf("Age: %d, fav. char: %c, pi is %f\n", age, x, pi);
// prints > "Age 42, fav. char: x, pi is 3.14"
```

## Make

- to compile a c program, run `cc <file>`. This, by default, creates an
  executable binary file with the name `a.out`. If you want to customize the
  name of the output file, use the `-o` flag:

```bash
# creates a ./hello executable file
$ cc -o hello hello.c
```

- the `make` utility originated as a unix utility program for compiling and
  building C programs. It can also make lots of other types of programs, and
  functions as sort of a general purpose scripting tool as well.
- If you find yourself typing long commands to the c compiler, like
  `clang -o foo foo.c -Wall -lcs50`, you can simplify this using `make`.
- what `make` does can be configured using a `Makefile`, but we won't get into
  that until later. I have preconfigured `make` on the HTC pi to have some
  sensible defaults.

---

## Homework Plan

- Monkey Assignment #9
- 1 days review all flashcards in your app.
- 2 days touch typing practice
- 1 day King C reading assignment (chapter 2)
- 1 day King C exercizes (see below)
- 1 day personal project
- watch [Lecture 1](https://htc-viewer.netlify.app/?id=e9Eds2Rc_x8) of CS50
  (from `21:52` to `57:30`, till the "cookie break" 🍪)
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #2 of King C</Checkable>

<Checkable id="king-2">Selected Projects from King C, Ch. 2</Checkable>

<Checkable id="monkey-7">Monkey Assignment #9 🐒</Checkable>

<Checkable id="next-personal">Personal Project</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## King C Chapter 2 Programming Projects

---

- First, make sure you've slowly and carefully read all of the New Stuff above
  ^^^.
- Second, make sure you've slowly and carefully read all of chapter 2 of King C.
- Third, make sure you've watched this week's CS50 _before_ working on this
  assignment.
- SSH into the HTC pi, and create a new directory called `king-c` somewhere in
  your home dir.
- Initialize it as an empty git repo.
- **Inside** your repo dir, make another new directory called `chapter-2`.
  Inside that directory, create a file called `hello.c` that prints the message
  "Hello, world!" to standard out. Compile and run your program.
- When you've got it working, make a commit. **Make sure NOT** to commit the
  compiled binary code. It should just be source code. Do this by either a)
  deleting the compiled binary, or b) creating a `.gitignore` file.
- Create a brand new repository on GitLab called `king-c`. Once you've got it
  created, add it as a remote for the git repo you just made locally on the HTC
  pi.
- push up your first commit with the "Hello world" C program.
- Then, make a new branch called `ch-2-projects`.
- Complete the following programming projects (not _exercizes_) from chapter 2:
  `1, 2, 3, 4, 5`. Make a new file for every one, even number 3, which is a
  modification of number 2.
- **Extra Credit: ✨** Complete exercize 7.
- Pick one of the exercizes that required user input, and switch from using
  `scanf` to using `get_int()` or `get_float()` from the **cs50** library.
  You'll have to include the `cs50.h` header file. For fun, try to compile this
  file **without** using make. How do you get rid of the error you see? They
  briefly showed how to do it before introducing `make` in the CS50 video.
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

## Monkey #9 (Preparing the AST) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start at the beginning of section **2.6**. The first few pages are not coding,
  but are very important information for understanding languages and
  interpreters, so read them carefully.
- when you get to the section labelled **Preparing the AST**, that's when you'll
  start coding. Work through _just that one section_ of coding work, ending when
  it changes to the next section, which is called **Implementing the Pratt
  Parser**.
- [Video link](http://jared.howtocomputer.link/monkey/13--2.6-preparing-the-ast.mp4)
- Submit a MR, slack the MR url
