---
path: "/year-3/week-20"
---

# Year #3, Week #20 💻 🏹

## Homework Plan

- 1 day Monkey Assignment #29 🐒
- 2 day review all flashcards app.
- 1 or 2 days CS50 "Recover" Assignment 🥸
- 1 day touch typing practice
- 1 day Flashcard **WebApp** assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="flash-app">Flashcards WebApp Assignment</Checkable>

<Checkable id="monkey-29">Monkey Assignment #29 🐒</Checkable>

<Checkable id="cs50-recover">CS50 Recover Assignment 🥸</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## Monkey #29 🐒

---

- Address all feedback from prior MR, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, after _3.10 Functions and Function Calls_.
- _Read_ section **3.11 Who's Taking out the Trash?**
- _Read_ section **4.1 Data Types and Functions**
- Work through all of **4.2 Strings**
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/39--4.2-strings.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards Webapp Assignment

---

- Address all feedback from prior MR's on both sides, and merge.
- Create a new branch.
- Implement the "Signup" feature. This will be very similar to the "Login"
  feature from last week, with minor variations. Use your work from last week as
  a pattern for working through this feature.
  - You'll need to `POST` to the `/signup` route instead of `/login`, but the
    _shape_ of the JSON you _send_ and _receive_ is both exactly the same.
  - You'll need to make another thunk, which should end up being nearly
    identical to the the login thunk
  - Once you've got both thunks hooked up and working, DRY up your code by
    extracting a helper function that will do all the work that is the same
    between the two thunks, and take an argument to handle the small difference
    between the two thunks. Each thunk should call out to this helper function.
- Commit your work.
- Next, implement the "remember me for two weeks" feature (if you haven't
  already done so).
  - If it is checked when the user logs in, an expiration date should be set
    when calling `setUserToken()`.
  - Probably you don't need new Redux state for this temporary piece of info, it
    should be enough to pass a boolean to the `login()` thunk, and use that to
    set the expiration when storing the token in localStorage.
  - So, you'll need a piece of _local_ state (using `useState()` to track this
    variable within the component) and then when the "submit" button is clicked,
    you'll pass along this info to the thunk. That means the `login()` thunk
    will need to be modified to _accept an argument_.
- Commit your work.
- Finally, if you haven't already done it, add links to/from the login and
  signup routes, each linking to the other, so that if someone already has an
  account they can navigate from the /signup screen easily to /login, and vice
  versa.
- Commit your work.
- Deploy a Netlify draft URL.
- Push up a MR to GitLab.
- Review your diffs, clean up anything you notice.
- Slack me the MR url and the Netlify draft URL.

---

## CS50 Recover (More Comfortable)

---

- Fork, then clone
  [this repo](https://gitlab.howtocomputer.link/htc/cs50-recover).
- Study the
  [Harvard writup](https://cs50.harvard.edu/college/2019/fall/psets/4/recover/).
- Do it, starting with the shell of `main` provided in `recover.c`
- Hints:
  - `filter.c` from last week is really useful, refer to it for opening files,
    reading/writing files, pulling bytes out of a file with `fread`, etc.
  - use the Harvard `man` pages, especially for functions like `fopen`, `fread`,
    and `sprintf`.
  - This can be done with or without `malloc`. Neither way is substantially
    easier or harder, I would prefer you use malloc.
  - you'll need to think through how you're going to manage memory.
  - I would strongly recommend sketching out helper functions you with George
    would write for you.
  - Write psuedo code for yourself in comments detailing how to tackle the
    problem little by little, then try to slowly implement it.
  - a small preparatory task to help you get rolling would be to see if you
    could check every "block" of memory, and test each one to see if it started
    a jpeg, and count the jpegs you find. You should get 50. If you can do that,
    you will have written a bunch of useful code that will help you with the
    rest of the process.

## CS50 Recover (Less Comfortable)

- Fork, then clone
  [this repo](https://gitlab.howtocomputer.link/htc/cs50-recover).
- Study slowly and carefully the
  [Harvard writup](https://cs50.harvard.edu/college/2019/fall/psets/4/recover/).
- Read all of the hints I wrote for the "More comfortable" homework
- After you've cloned and opened the repo, type `git fetch` and then
  `git co -b recover-<yourname> origin/less-comfortable` to switch to a branch
  that has more code roughed in to help you accomplish the task.
- Slowly and carefully read the comments I wrote **up to line 100**.
- Then, jump down into the `main` function and complete steps 1 and 2, as
  written up in comments.
- Complete the rest of the steps.
- I do have a video for you to lean on, but I only want you to use the video
  after you have really given it a good try without. And every spot in the video
  where I say to stop the video, I want you to do so and try to continue on your
  own without it, returning to the video only if and when you need idt, and when
  you've worked hard to try to solve it on your own for a while.

## Recover rough notes

- tell them to look at "filter" for help with file manipulation
- go over `NULL` (in class!)
- tell them to read: `https://manual.cs50.io/3/fread` (especially bout
  "remembering" position)
- a good initial "baby step" is to iterate through the "blocks" of memory, and
  count how many jpeg "starts" you find. (should be 50)
- pretty hard, probably worth giving a skeleton
