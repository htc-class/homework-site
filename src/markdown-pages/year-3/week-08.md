---
path: "/year-3/week-08"
---

# Year #3, Week #8 💻 🥏

_New stuff we learned this week:_

## C Strings

- strings in C are essentially **arrays of `char`s** with a `null` byte at the
  end, like this:

```c
char hello[] = {'H', 'e', 'l', 'l', 'o', '\0'};
```

- You can also express a string using a string literal. The below is the same as
  above:

```c
char* hello = "Hello";
```

- `<string.h>` has the function `strlen()` which takes a `char *` and will
  return the _length of a string_ **without** the null byte.
- `<stdlib.h>` has a function `atoi` which takes a string like `"72"` and
  returns an integer `72`.

## C: Argv/Argc

- Until now, we've been writing our `main` function using the signature:

```c
int main(void) {
}
```

- But C programs can also receive command line arguments, with the following
  signature, where `int argc` is the **count** of the arguments, and
  `char *argv[]` is an **array of strings**:

```c
int main(int argc, char *argv[]) {
}
```

---

## Homework Plan

- 1 day Monkey Assignment #16 🐒
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day CS50 "Caeser" assignment
- 1 day CS50 "Readability" assignment
- 1 day Snowpack assignment 🏔
- 1 day Flashcards Webapp assignment
- 1 day watch [Lecture 2](https://htc-viewer.netlify.app/?id=8PrOp9t0PyQ) of
  CS50, from `1:06:00` to _end_.
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-15">Monkey Assignment #16 🐒</Checkable>

<Checkable id="watch-cs50">Watch CS50</Checkable>

<Checkable id="caeser">CS50 Caeser</Checkable>

<Checkable id="readability">CS50 Readability</Checkable>

<Checkable id="snowpack">Snowpack Assignment 🏔 </Checkable>

<Checkable id="f2-web-app">Flashcards Webapp Assignment</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## CS50 **Caeser** Assignmnent

---

- Slowly and carefully read the "New Stuff" above -- I put one thing in there
  that we **did not cover in class** that will be useful for this assignment.
- Make sure you've watched the CS50 video before starting.
- Make sure your branch from last CS50 Assignment (Mario, Credit) is merged
  (after addressing any feedback outstanding).
- Create a new branch named `caeser`
- Read and complete the
  [Caeser Assignment detailed here](https://cs50.harvard.edu/college/2019/fall/psets/2/caesar/).
  (Note: this link won't work _unless_ you're using Safari, because of Gertrude)
  Take it bit by bit, as they coach you to do, starting by handling the number
  of command line arguments, then validating the key, etc.
- You should use `get_string()` to read in the "plaintext" from the user. You
  can use the fake `string` type, or `char *`, whatever you want.
- When you think you've got it done, **re-read** the _Specification_ section,
  and make sure you meet all of the criteria. Especially double-check little
  details and edge cases like:
  - returning a non-zero exit code when an error
  - printing the `Usage: ./caeser key` when wrong number of argument supplied,
    or if any non number characters supplied.
  - make sure you handle keys larger than 26 properly
  - double-check that uppercase letters stay uppercase, and lowercase lowercase.
  - make sure non-letter values remain untouched.
- when your program is complete, submit a MR, then **review your diffs and clean
  up your code**, then slack me the URL.

---

## CS50 **Readability** Assignmnent

---

- Make sure you've completed the **Caeser** assignment first (although it's OK
  if it hasn't been reviewed or merged yet).
- Make a new branch off of master called `readability`. **Don't** put this work
  on the same branch as your "Caeser" assignment.
- Re-read the last step and actually do it! Harriet, Willow, I'm looking at you!
- Read this complete assignment until the end before starting.
- Read and complete the
  [Readability assignment detailed here](https://cs50.harvard.edu/college/2019/fall/psets/2/readability/),
  with the following hints/requirements:
  - hard-code one or two sentences to test and build your program. Only when you
    have everything working go back and replace the hardcoded user input with a
    prompt to `get_string()`.
  - your hardcoded test data should be typed as either a `string` or `char *`
    (which are the same thing), and can be expressed in C with string literals,
    like: `char* input = "It was a bright and cold day in April...";`
  - Don't use `getchar` anywhere
  - remember there are some useful string-related functions in `<string.h>`
    including `strlen`.
  - Work through the task in the baby-steps outlined in the assignments --
    namely, start by counting (and temporarily printing) the number of letters.
    Then count the words, then the sentences. Only when you have that all done
    do you plug it into the formula.
- When you think you're done, plug in **_all_** of the test examples in the
  **"How to test your code"** section at the bottom of the page. Make sure you
  get the right answers (including exactly `Grade 16+`) for the last one. Fix
  your code if you get the wrong answers to anything.
- when your program is complete, submit a MR, then **review your diffs and clean
  up your code**, then slack me the URL.

---

## Monkey #16

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Triple-check that you did the first three steps.
- Start at section **2.8 - Function Literals**. Work through that section, and
  commit your work when you finish.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/25--2.8-function-literals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Snowpack Assignment 🏔

---

- Read the following page of the Snowpack docs site:
  [https://www.snowpack.dev/concepts/how-snowpack-works](https://www.snowpack.dev/concepts/how-snowpack-works)
- SSH into the HTC pi, and create a temporary directory somewhere that you'll
  delete later.
- in that directory, follow all of the steps of the
  [Getting Started](https://www.snowpack.dev/tutorials/getting-started)
  tutorial.
- after you finish, also do the following steps:
- use `ls` to inspect what snowpack put in your "build" dir. Do you understand
  the files it output somewhat?
- switch your javascript files (both `index.js` and `hello-world.js`) to be
  **TypeScript**. Make sure the project still works in dev mode and builds
  correctly. If it's not working, search the docs site for help.
- Next, figure out how to change it so your build command outputs the built
  files in a folder called "public" instead of "build". (Hint: you'll have to
  configure snowpack, which is done using the `snowpack.config.js` file -- there
  is a page on the docs site dedicated to all of the options available.)
- Finally, find the page on the snowpack site that describes how to install
  **Tailwindcss**. Follow all of the steps carefully, until you have Tailwindcss
  working in your tutorial site.
- When you have it working add a couple of tailwind classes to some of the HTML
  you're rendering, then take a screenshot of your code together with the web
  page, so that I can see the tailwind styles taking effect, and **also** I'd
  like to see the confetti as well. Slack the screenshot.

---

## Flashcards Web App Assignment

---

- Make sure you've fully completed the "Snowpack Assignment" first.
- Now that you have a basic understanding of how to use Snowpack + Tailwind +
  Typescript, I want you to create a brand new repository for your flashcards
  web-app (version 2.0). But instead of having you set it up from scratch, I'm
  going to have you pull down and use a boilerplate I created. You already know
  90% of what's in the boilerplate now that you've completed Part I of this
  assignment, so nothing in it should be confusing. The main advantage to the
  boilerplate is that I did some fiddly work so that the source files can be in
  a `src/` directory (instead of the project root), and I added some extra
  plugins for fast dev and environment variables.
- SSH into the HTC pi and then check out the
  [readme for my boilerplate here](https://gitlab.howtocomputer.link/htc/snowpack-typescript-tailwind-boilerplate).
- Follow the instructions, **EXCEPT** for don't use the folder name
  `my-rad-project` -- pick a folder name that you want to use.
- _(🤔 Aside: `git clone` by default creates a folder with the same **name** as
  the end of the git url. So if you run
  `git clone git@github.com:goat-banjo-rodeo` then you'll get a folder called
  `goat-banjo-rodeo`. But, if you want your folder named something else, you can
  pass the name of your desired destination directory last, like
  `git clone git@github.com:goat-banjo-rodeo secret-project`. If you do that,
  `git` will clone into a dir called `secret-project`. Take a minute and figure
  out where in my instructions I'm using that technique.)_
- If you followed the instructions fully, you shoud have blown away your `.git/`
  dir that you got from cloning. Initialize a new git repo, and hook it up to a
  brand new repo on GitLab named however you like.
- Commit all of the "work" so far -- really this is just commiting the files
  from the boilerplate. But we want to commit and push at this point so I can
  see the changes you make, that are coming next.
- Push up your initial commit to the `master` branch.
- Make and check out a new branch.
- If your name is Harriet or Willow, double-check that you did the last step. If
  you forget, you have to bake me some cookies. 👩‍🍳
- Fire up the dev server and make a few changes to the `App.tsx` file. Enjoy the
  blazing speed of unbundled development, thanks to ESM, Snowpack, and Fred
  Schott.
- Run the build command once. Where did it spit the built files? Delete the
  built files when you're done inspecting them.
- Modify the package.json _build_ command so that it spits out your built
  website into your `$USER/www` dir. Use what you learned in the Snowpack
  assignment. If you need to, check your personal project or your old flashcards
  app for a clue how to specify the path to the built dir.
- For your last step, I want you to install and integrate the **StoryLite**
  package I demonstrated in class. Instructions
  [can be found here](https://gitlab.howtocomputer.link/htc/storylite). Make at
  least one "story" with a proof-of-concept, hello-world component. Don't spend
  any time on the component itself, we're going to throw it away in the coming
  week's assignment. But use to make sure you can get StoryLite rendering.
- Be sure you set up your root `App` component so that it switches back and
  forth between displaying your app, and displaying StoryLite, using the query
  param `?storylite=1` in the URL.
- When you've got it working, experiment briefly with going into StoryLite's
  "fullscreen" mode, and also closing out of StoryLite with the "x" button.
- Take a screenshot of your StoryLite "story", and either slack it with your MR
  url, or include it in the MR description.
- Commit your work, push up a MR.
- Review your diffs, clean up anything you notice, then slack me the URL.
