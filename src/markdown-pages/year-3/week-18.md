---
path: "/year-3/week-18"
---

# Year #3, Week #18 💻 ⛳️

## Homework Plan

- 1 day Monkey Assignment #26 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 15 👑
- 1 day King C programming exercizes 👑
- 1 day touch typing practice
- 1 day watch CS50
  [CS50 Lecture #4 segment](https://htc-viewer.netlify.app/?id=cF6YkH-8vFk),
  from `24:03` to `58:44`
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

## Monkey #26 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _3.9 Bindings and the
  Environment_ section, which is labeled **3.10 Functions and Function Calls**.
- ⚠️ **DONT COMPLETE all of 3.10**. Instead, _stop_ 🛑 in the middle of page 143
  (pdf) or 181 (print), where he gets the tests passing and starts by saying
  `Easy right? The test passes.`.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/36--3.10-function-obj.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C: Chapter 15 (Writing Large Programs) 👑

---

- First, make sure you've slowly and carefully read all of chapter 15 of King C.
  assignment.
- Make sure you've addressed any feedback from last week's King C assignment,
  merge, and _make a new branch_.
- Complete Programming `Project #1`, following these steps:
  - All the files needed (including a `quote.txt` file for testing) are in
    [this snippet](https://gitlab.howtocomputer.link/-/snippets/15). Put them in
    a separate folder within your chapter 15 folder.
  - Before you make any changes to the file, get it to build using `cc`,
    outputting to a file called `justify`. (Hint: in the book he basically gives
    you the command, just find where it is and change `gcc` to `cc`)
  - Once you get it to compile, run it against the `quote.txt` file by typing
    `./justify < quote.txt` (The `<` redirection character uses the contents of
    a file as the input to the program it "points" to)
  - figure out another unix-command that will have the exact same effect as
    `./justify < quote.txt`
  - next, recreate the `Makefile` he lays out on Page 367, changing `gcc` to
    `cc` again. Type a command to "make" the program using the Makefile, and
    double-check that it works.
  - look in the directory... do you see some new files? do you understand what
    they are and why they're there?
  - Finally, do what he says in the assignment: "Improve the program by having
    `write_line` alternate between puting the larger gaps at the end of the line
    and putting them at the beginning of the line."
- Complete `Project #2`, using the same files as project 1.
- Complete `Project #3`, following these steps:
  - Make a new folder inside your "chapter 15" folder called `qsort/` and
    _inside that_ folder, add a file called `qsort/qsort.c` containing
    [this code](https://gitlab.howtocomputer.link/-/snippets/16).
  - Make the changes he describes.
  - To test that your program works, for this project I want you to use a bare
    `cc ...` CLI command, _not_ a makefile. Put the command you used in a
    comment just above your `main()` function, so I can see the command you use
    when I look at your MR.
- Complete `Project #4`, following these steps:
  - Make a new folder inside your "chapter 15" folder called `remind/` and
    _inside that_ folder, add a file called `remind/remind.c` containing
    [this code](https://gitlab.howtocomputer.link/-/snippets/16).
  - Make the changes he describes.
  - To test that your program works, for this project I want you to use a
    `Makefile`, and commit it with your work.
- Complete `Project #5`, using your code from Chapter 10 project 6 (RPN
  calculator), copying the code into a new folder in your "chapter 15" folder,
  and splitting it apart as required. You can use `cc` _or_ `make` for this one.
- before you commit, make sure you remove any `*.o` files and executable files
  (unless they were already ignored by your `.gitignore`)
- commit your work, create a MR
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.
