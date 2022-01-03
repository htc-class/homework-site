---
path: "/year-3/week-06"
---

# Year #3, Week #6 💻 🏐

_New stuff we learned this week:_ 🤔

<img src="/images/parse-monkey.jpg" style="margin-bottom: 2em;" />

## Homework Plan

- 1 day Monkey Assignment #13
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day King C reading assignment (chapter 7)
- 1 day King C exercizes
- 1 day Flashcards API Assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #7 of King C</Checkable>

<Checkable id="king-6">Selected Projects from King C, Ch. 7</Checkable>

<Checkable id="monkey-13">Monkey Assignment #14 🐒</Checkable>

<Checkable id="mysql">Flashcards API homework</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## King C Chapter 7 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 7 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects (not _exercizes_) from chapter 3,
  making a new file for every one:
  - `2`
  - `4`
  - `5`
  - `6`
  - `10`
  - `11`
  - `12`
  - `13`
  - `14` **Extra Credit✨** (write psuedocode and extract functions to simplify)
  - `15`
- commit your work, and push up a MR on GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Monkey #14 (Boolean Literals) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start at section **2.8 - Extending the Parser**. Work through that section,
  and commit your work when you get to the section labled **Boolean Literals**.
  The first video covers the first segment only.
- Next, work through the **Boolean Literals** section. The second video covers
  this section.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link #1](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/20--2.8-extending-the-parser.mp4),
  [Video link #2](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/21--2.8-boolean-literals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards API Restart

---

- Create a new folder, initialize an empty git repository
- add an empty `.gitignore` file, and make your first commit on the `master`
  branch
- connect this new repo to a new project on GitLab
- make a new branch so I can see the rest of your work as MR.
- make a simple "hello world" express app that sends back the json
  `{"message":"hello world"}` at the path `/`.
- some requirements/hints:
  - as discussed in class, we won't be creating a compiled "dist" dir of
    compiled javascript, we'll be using `ts-node` to keep it simple
  - put the main file in `src/index.ts`
  - you'll need to setup a `tsconfig.json` file. Check out the typescript docs
    for more info, or refer to previous projects.
  - you'll need to bring in some npm packages to make this work, probably
    including some `@types/*` packages.
  - you'll need to initialize the project with `npm` as well
  - **don't** install `nodemon`, we'll take a different approach with this repo.
    For now, don't worry about restarting automatically, we'll add that soon,
    just manually start/stop your server while you’re working on this.
  - add `.vscode/` dir with a `settings.json` file, configured how you like it
    -- at least exclude the `node_modules` directory from showing up in your
    sidebar and searches.
  - add two helper scripts in your `package.json` -- one for running the api
    server in dev mode, and one for "production" mode. They should start your
    API on two different ports, using `NODE_ENV` and your two ports assigned in
    `~/.user_env`.
  - add one small **feature** -- make sure it supports CORS out of the box. To
    test this, run the command:
    `curl -H "Access-Control-Request-Method: GET" -H "Origin: http://fake-origin.com" --head http://localhost:<YOUR_PORT>`
    -- you should see **at least one access-control-** header. Take a screenshot
    of you’re the output of this command, and include it in your MR.
- when you think you're done, commit your work, submit a MR. Make sure you
  attach your CORS screenshot. And then **carefully review your code**, cleaning
  up anything before I see it. Then Slack me the MR URL.
