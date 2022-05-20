---
path: "/year-3/week-25"
---

# Year #3, Week #25 🎽

---

## Homework Plan

- 1 day King C assignment 👑
- 3 days Execute Program
- 2 days Flashcards Web App Final Assignment

---

## Flashcards Webapp Assignment

---

- Make sure you've addressed all the feedback from your last API MR, and
  corrected the stuff I pointed out (most of you have some changes to make), and
  merged, etc.
- Read all of these steps/hints, etc, before starting
- In your web-app, implement 4 new functionalities:
  - The ability to **add a new card** (with route: `/cards/new`)
  - The ability to **add a new category** (with route: `/categories/new`)
  - The ability to **EDIT an existing card** (with route: `/cards/:id`)
  - The ability to **EDIT an existing category** (with route: `/categories/:id`)
- You can put the links to these routes anywhere you want, where I put them that
  made it sort of easy is shown below:<br /><br />
  ![final web app screenshot](/images/final-web-app-screenshot.png)<br />
- You might want to make a `<EditCardScreen />` _container_ component, and
  another one for `<EditCategoryScreen />`
- You can retrieve the _dynamic_ portion of the react-router-dom URL by
  importing `useParams()` and doing something like this:

```ts
import { useParams } from "react-router-dom";

// ... then, INSIDE the function component
const { id } = useParams<{ id: string }>();
```

- I also ended up making a _container_ to wrap my `EditCard` and `EditCategory`
  presentational components.
- Remember the trick that our api will _create_ a resource when _there is NO
  `id`_ present, and will _update_ when the id is present.
- If you get a blank screen of doom when trying to develop your new routes (with
  an error in the console), check your `index.html` file and change the
  reference to `index.js` to `/index.js`.
- If you want, you can follow along with me:
  - [Video #1 - Edit Card, pt. 1](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/34--web-edit-card-1.mp4)
  - [Video #2 - Edit Card, pt. 2](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/35--web-edit-card-2.mp4)
  - [Video #3 - Edit Category](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/36--web-edit-category.mp4)
- When you finish, merge your recent API changes into `master` on your

---

## King C Assignment 👑

---

- Slowly and Carefully read chapter 20 of King C.
- No exercizes or projects this week. 👍

---

## Speller

---

- **Note:** `Speller` is technically part of _next week's homework_, but since
  canoe trip, and etc, and some of you are working ahead, I put it here, you're
  welcome to start it.
- **Note #2:** Steps 3-6 are listed first because you'll need to do them in
  order to follow along with reading the assignment on the Harvard site, which
  tells you to read the code and look in the various directories.
- **FORK this repo**:
  [https://gitlab.howtocomputer.link/htc/cs50-speller](https://gitlab.howtocomputer.link/htc/cs50-speller),
  then _clone YOUR fork_.
- make a new branch
- make sure you did the last step
- to get all of the texts and dictionaries and "keys", you'll need to run a
  command I put into the Makefile. run `make download` in your terminal. It will
  take a few seconds, but when it's done, you should have some (git-ignored)
  directories: `keys/`, `dictionaries/` and `texts/`.
- Make sure you've watched all of CS50, thru to the end, first.
- Also, make sure you've read (if you haven't already),
  [this page](https://craftinginterpreters.com/hash-tables.html) (thru section
  `20.3`)
- **Slowly and carefully** read the
  [assignment from the CS50 site](https://cs50.harvard.edu/college/2019/fall/psets/5/speller/).
- If you're feeling a little daunted, ask your parent to allow you to watch
  these Youtube videos, which are the "walkthrough" videos made by CS50 for this
  assignment (about 25 minutes total):
  - [Walkthrough #1 - speller](https://htc-viewer.netlify.app/?id=_z57x5PGF4w)
  - [Walkthrough #2 - load](https://htc-viewer.netlify.app/?id=-BX4wLZRwbc)
  - [Walkthrough #3 - hash](https://htc-viewer.netlify.app/?id=mMj9ZmcB6ls)
  - [Walkthrough #4 - size](https://htc-viewer.netlify.app/?id=3cD-_NGTw9A)
  - [Walkthrough #5 - check](https://htc-viewer.netlify.app/?id=qPz_Mr69yE0)
  - [Walkthrough #6 - unload](https://htc-viewer.netlify.app/?id=qkC4l0pUvCk)
- To compile your code, I recommend using the default Makefile tarket by running
  just `make`.
- Complete the task as outlined in the CS50 website.
- Check that you're getting the correct results by comparing your output with
  the `keys/*` files.
- Submit a MR, slack me the URL.
- If you want to be part of a friendly HTC competition for speed, clone your
  solution down onto the HTC pi (so that we're all benchmarking on the same
  hardware), and run your speller code against the "bible" text. My total speed
  was `3.45` seconds on the PI. See if you can beat that. :)
