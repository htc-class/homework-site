---
path: "/year-3/week-16"
---

# Year #3, Week #16 💻 🪃

## Homework Plan

- 1 day Monkey Assignment #24 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 13 👑
- 1 day King C programming projects 👑
- 1 day touch typing practice
- 1 day React Router Tutorial Assignment
- 1 day Flashcards Webapp (React Router) Assignment
- 1 day watch CS50
  [CS50 Lecture #4 segment](https://htc-viewer.netlify.app/?id=cF6YkH-8vFk),
  from **beginning** to `24:03`
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

## Monkey #24 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _3.7 Return Statements_
  section, which is labeled **3.8 Abort! Abort! There's Been a Mistake!, or:
  Error Handling**. Complete the section.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/34--3.8-error-handling.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C: Chapter 13 (Strings) 👑 🎻

---

- First, make sure you've slowly and carefully read all of chapter 13 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Then, do the following programming projects: `1, 3, 4, 5, 9, 13, 16, 18`. For
  project #3, start from
  [this code](https://gitlab.howtocomputer.link/-/snippets/14)
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## React Router Tutorial Assignment

---

- Before you start, read through all the steps of this assignment, then come
  back and do each one.
- Start by taking a few minutes to read through and examine each code snippet on
  [this page](https://reactrouter.com/docs/en/v6/getting-started/overview). You
  don't have to fully understand everything, just get yourself oriented. The
  next steps will walk you through using these concepts, so they'll click more
  when you build something with them.
- Next, head over to the
  [tutorial page](https://reactrouter.com/docs/en/v6/getting-started/tutorial).
  You are going to be completing this tutorial in its entirety.
- You should work locally for this. By that, I mean, you _must_ work locally for
  this project. If you don't, installing the dependencies will take you WAY too
  much time.
- Read the top portion of the tutorial, stopping when it says "Recommended:
  StackBlitz".
- Don't try to open that url, it's not unblocked, you're going to be doing it
  locally, using a bundler.
- `cd` into a dir where you do your local HTC stuff (probably `~/htc`). Instead
  of running one of the commands they suggest, run this instead, so you get
  typescript:

```bash
npx create-react-app router-tutorial --template typescript
```

- the installation will take a minute or two.
- when it's done, `cd` into the `router-tutorial` directory, and create a new
  git repository. Add a `.gitignore` ignoring the `node_modules/` dir, and
  commit things as they currently stand.
- before you go any further, create a new project on Gitlab, and push up your
  `master` branch. Becase you didn't clone it down from GitLab, you'll need to
  connect your local repo manually, using `git remote`. If you can't remember
  how to do that, search the homework new stuff.
- Once you've got things pushed up to GitLab, **CREATE A NEW BRANCH**. If you
  forget this step, you owe me some delicious vegan cookies. 🍪
- then, start following the tutorial where it says
  `Then install React Router dependencies`.
- **NOTE**: your file will be `src/App.tsx` not `src/App.js`, since the command
  I gave you started you up in typescript mode. For all of the steps, I want you
  to be creating Typescript files with types, instead of the vanilla js they
  show.
- slowly and carefully work through all of the steps, trying out everything in
  your browser as you proceed. The only section _you can skip_ is the one called
  **Custom Behavior** -- that's sort of a digression, and not really something
  you are supposed to implement.
- when you've finished, commit your work.
- check if you've got `netlify` installed locally by running `which netlify`. If
  you don't, try running `npm install netlify-cli -g`. (If you get permission
  errors, install it locally by running `npm install netlify-cli`, then prefix
  the deploy commands with `npx` to use your local copy.)
- once you've ensured `netlify` is installed locally, check to make sure you've
  got the auth information by catting out your `~/.bashrc` file. If you don't
  see exported bash variables for netlify, ssh into the htc pi, cat out your
  `~/.user_env` file, and copy the relavent variables to your local `~/.bashrc`.
- now that you've got netlify ready to use locally: **deploy your react router
  tutorial site to netlify**.
- submit a MR, _review and clean up your diffs_, and slack me both the MR url
  and the Netlify url.

---

## Flashcards WebApp (React Router) Assignment

---

- Make sure you've completed the "React Router Tutorial" assignment completely
  first (although you don't need to wait until I review that one to start this
  assignment).
- in your flashcards web app repo, make sure you've addressed all feedback from
  any prior Merge Requests, merge, and pull, and **check out a new branch**.
- Add react-router, and add 3 main routes to your `src/index.tsx` file. One for
  `/` (cards), one for `/signup`, and one for `/login`.
- the `/signup` and `/login` routes should render your signup and login
  components, centered in the screen.
- the `/` route should render your cards
- don't worry about switching between the screens in any way, we'll get to that
  later. For now, just make it work so that if you update the URL in the
  browser, the different pages are loaded and visible.
- commit your work
- submit a MR
- review your own diffs, and clean up anything you notice.
- if your name rhymes with "Marriot" double-check that you did the previous
  step.
- deply a draft URL to netlify
- slack me the MR and Netlify draft URL
