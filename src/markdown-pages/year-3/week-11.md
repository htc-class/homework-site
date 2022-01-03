---
path: "/year-3/week-11"
---

# Year #3, Week #11 💻 🏓

_New stuff we learned this week:_ 🤔

- All about [Netlify](https://docs.netlify.com/)
- `typedef`'s in C:

```c
typedef int age; // `age` is now an alias for `int`
typedef char* string; // lol cs50
```

- the very basics of **struct**s in C:

```cs
struct htc_student {
  char *name;
  int age;
  bool has_beard;
};

struct htc_student jared;
jared.name = "Jared";
jared.age = 42;
jared.has_beard = true;
```

- in order to not always type `struct my_struct`, you can make a `typedef`:

```c
typedef struct htc_student htc_student;

// or, combine the typedef WITH the declaration:

typedef struct {
  char *name;
  int age;
  bool has_beard;
} htc_student;
```

---

## Homework Plan

- 1 day Monkey Assignment #18 🐒
- 1 day review all flashcards in your app.
- 1 day touch typing practice
- 1 day read King-C ch. 11 👑
- 1 day watch CS50
  [CS50 Lecture #3 segment](https://htc-viewer.netlify.app/?id=fykrlqbV9wM),
  from beginning to `37:21`
- 1 day King-C exercizes/projects 👑
- 1 day Flashcards Redux assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-18">Monkey Assignment #18 🐒</Checkable>

<Checkable id="read-docs-netlify">Read the Docs! Netlify Edition</Checkable>

<Checkable id="personal-project">Personal Project Netlify Assignment</Checkable>

<Checkable id="king-c-read">King C: Read chapter 11 👑</Checkable>

<Checkable id="king-c">King C: Chapter 11 Programming Projects 👑</Checkable>

<Checkable id="cs50-vid">Watch CS50 Lecture #3 Segment</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## Monkey #18

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start at section **Removing TODOs**, right after _Call Expressions_. Work
  through that section, and commit your work when you finish.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link (Removing TODOs)](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/27--2.8-removing-todos.mp4)
- Next, watch my video where I work through the final section of updating the
  **RLPL** to be a **RPPL**. You don't have to do this one on your own first,
  you can watch my video and update your code to match mine, then have fun
  playing around with your RPPL. Commit your work.
- [Video link (RLPL -> RPPL)](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/28--2.9-rppl.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C Chapter 11 Exercizes/Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 11 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- First do the programming **exercizes** `5`, `6`, `7`, and `8`. For each one, I
  want you to also include a `main()` function that demonstrates by using
  `printf` that the function works, by showing multiple calls to the functions,
  with various edge cases. An example for exercize 8 would be something like:

  ```c
  include <stdio.h>

  int main(void) {
    int[5] ex_1 = {5, 3, 2, 99, -4};
    int[1] ex_2 = {33};
    int[4] ex_3 = {-44, -1, -20, -30};
    int[3] ex_4 = {1, 1, 1};

    printf("%d should be 99\n", *find_largest(ex_1, 5));
    printf("%d should be 33\n", *find_largest(ex_2, 1));
    printf("%d should be -1\n", *find_largest(ex_3, 4));
    printf("%d should be 1\n", *find_largest(ex_4, 3));
  }

  int *find_largest(int a[], int n) {
    // your implementation here...
  }
  ```

- Next, do programming **projects** `3` and `4` -- using code you wrote from
  prior weeks as your starting point. commit your work, and push up a MR on
  GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Netlify Read the Docs!

---

- Spend about 20-30 minutes skimming and selectively reading sections of the
  **Netlify Docs**.
- Look at all of th main sections on the left. You don't have to read them all,
  but try to read just enough about each of them that you get a sense of what
  the feature _is_, so you can file it away in the back of your brain.
- Do read fairly carefully these two sections:
  [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
  and [CLI tool page](https://docs.netlify.com/cli/get-started/)
- Pick out one other section, or feature, that looks interesting or promising as
  something you might want to use in the future, then post briefly about it in
  Slack.

---

## Personal Project (Netlify) Assignment

---

- Make sure you've done the **Netlify Read the Docs** assignment _first_.
- Refer to your work plan you created a few months ago, and select the next item
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
- once you're happy with your changes, commit all your work
- run your build script so that you've got a fresh set of files ready to deploy
  in the next step.
- next, in your project root run `netlify deploy`, picking to create a new site
  in the `HTC` team, and give your site a meaningful name. You'll have to
  manually (for now) supply the _path to the dir with the built assets_,
  something like `./build` or `./dist` -- depending on your where your project
  builds to.
- once it deploys successfully, slack me the URL of the deploy, I'll have to
  unblock it for you on Gertrude.
- next, refer to
  [this page of the netlify docs](https://docs.netlify.com/configure-builds/file-based-configuration/)
  to learn about setting up a `netlify.toml` file. Create one of those files in
  your project root, which should specify **just one thing**: the build dir (so
  you don't have to supply it manually when deploying any more)
- test by running `netlify deploy` -- if you did it right, it should no longer
  prompt you for the directory of built assets to deploy.
- next, using the prompts from the netlify cli tool's output, and what you
  learned in the "read the docs" assignment, type a command that will allow you
  to make a "production" deploy of your site.
- commit your `netlify.toml` file
- next, log in to the netlify HTC admin panel, by going to
  [https://app.netlify.com](https://app.netlify.com) and choosing to login with
  `email`. For email and password, `cat` out your `~/.user_env` file when logged
  in to the HTC Pi, for the credentials (in a comment).
- once logged in, find your site, and click around at some of the many options
  and features. This is called the "Web UI" for your site. You can do a lot of
  things from the web, although almost all of them you can also configure in
  your `netlify.toml` file as well. You're welcome to try out some of the things
  you find, if any of them seem doable or interesting.
- create a MR, slack your MR URL, _and_ your new shiny Netlify url.
- after I review, address any feedback I give you.
