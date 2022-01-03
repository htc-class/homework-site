---
path: "/year-3/week-05"
---

# Year #3, Week #5 💻 🎾

_New stuff we learned this week:_ 🤔

## Debugging in C with VSCODE

- To do true (not `printf`) debugging with C in vscode, you'll need to set up a
  debug **launch configuration**, which is a `json` file.
- Create a folder in the root of your directory called `.vscode`.
- inside that directory, create a file called `launch.json`, with the contents
  shown below:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://code.visualstudio.com/docs/editor/debugging#_launch-configurations
  "version": "0.2.0",
  "configurations": [
    {
      "name": "debug a.out",
      "type": "lldb",
      "request": "launch",
      // you will need to change this path!
      "program": "${workspaceFolder}/path/to/a.out",
      "args": [],
      "cwd": "${workspaceFolder}",
      // optional, but useful, if you want to not have to
      // manually rebuild your file before debugging
      "preLaunchTask": "make_debug_target"
    }
  ]
}
```

- This launch configuration is meant to be generic and re-usable, but you could
  also configure it to a specific file or project, and give it a special name.
- To make the `preLaunchTask` part work correctly, you'll need to create another
  file in the same directory called `tasks.json` with the following contents:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "make_debug_target",
      "command": "/usr/bin/cc",
      // you will need to change this path!
      "args": ["-g", "path/to/file.c"],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

- If you set it up correctly, you should be able to add breakpoints to your
  target source code C file, and then run the launch configuration in the
  debugger.

---

## Homework Plan

- 1 day Monkey Assignment #13
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day King C reading assignment (chapter 6)
- 1 day King C exercizes
- watch [Lecture 2](https://htc-viewer.netlify.app/?id=8PrOp9t0PyQ) of CS50,
  from `35:30` to `1:06:00`.
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #6 of King C</Checkable>

<Checkable id="king-6">Selected Projects from King C, Ch. 6</Checkable>

<Checkable id="monkey-13">Monkey Assignment #13 🐒</Checkable>

<Checkable id="personal-project">Personal Project</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## King C Chapter 6 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 5 of King C.
  assignment.
- Second, while working on these exercizes, at least once, you must set up and
  use the **C debugger in vscode,** as shown in class -- you'll also need to
  post a screenshot in your MR or in slack showing that you got it working (with
  it paused at a breakpoint, and local variables visible).
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects (not _exercizes_) from chapter 3,
  making a new file for every one:
  - `1`
  - `2`
  - `3` _Hint:_ extract a simple function (no need for pointers) from project
    #2, and use that to make this one quite easy.
  - `5`
  - `6`
  - `8`
  - `10` _Hint:_ extract a function from your code from last week, it should not
    need any pointers, just take enough arguments to analyze two dates, and
    return some value that means either "date 1 is earlier" or "date 2 is
    earlier". Use that function to make this one pretty easy.
  - `11` **Extra Credit✨**
- commit your work, and push up a MR on GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.
- either in Slack, or in your MR, post a screenshot of a debugging session with
  a C program paused, and local variables displayed.

---

## Monkey #13 (Infix Operators) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start in the middle of section **2.6**, in the section labeled **Infix
  Operators**. Work through that section, and stop when you get to the next
  major section labeled **2.7 - How Pratt Parsing Works**.
- As always, try to do as much as you can on your own, leaning on the videos
  when you get stuck. But also, make sure to watch the videos and update your
  code accordingly.
- [Video link #1](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/18--2.6-parsing-infix-operators-1.mp4),
  [Video link #2](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/19--2.6-parsing-infix-operators-2.mp4)
- After you finish, I want you to **slowly and carefully read the next
  section**, labeled _2.7 - How Pratt Parsing works_. Try to go slow enough to
  understand as much as possible of what he is explaining, study the diagrams,
  and refer to your code. It's OK if you don't follow 100%, but I want you to
  make a _real effort_ to understand.
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

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
