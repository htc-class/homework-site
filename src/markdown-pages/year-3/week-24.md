---
path: "/year-3/week-24"
---

# Year #3, Week #24 🥋

## Homework Plan

- Monkey Assignment #36 🐒
- Monkey Assignment #37 🐒
- 1 day watch CS50
  [CS50 Lecture #5 segment](https://htc-viewer.netlify.app/?id=4IrUAqYKjIA),
  from to `1:30:47` _end_.
- 1 day King C assignment 👑
- 3 days Execute Program
- 1 days Flashcards Cleanup Assignment
- 1 days Flashcards (non-cleanup) Assignment

---

## Monkey #36 🐒

---

- Read slowly and carefully the next section, labled **"Hashes Objects"**
- You probably shouldn't attempt to do this one without watching the video, so
  follow along with the video, since our TypeScript psuedo hashing function
  differs from his a lot.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/46--4.5-object-hash-keys.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Monkey #37 🐒

---

- You know the drill. Work through the final few sections, referring to the
  videos below _as needed_.
- [Video #1 - Evaluating Hash Literals](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/47--4.5-eval-hashes.mp4)
- [Video #2 - Evaluating Hash Index Expressions + Grand Finale](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/48--4.5-eval-hash-index-puts.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url
- Congratulations! You have finished the Monkey book! 😊

---

## Flashcards API Cleanup Assignment #2 🧼

---

- Make sure you've addressed any feedback from the last Flashcards API cleanup
  assignment, and merged, etc.
- Make a new branch called `cleanup-2`.
- Watch and implement the changes in
  [Video #3](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/25--cleanup-response-mock-helpers.mp4)
  which has to do with _making testing of responses simpler and less
  boiler-platey_.
- Commit your work.
- Watch and implement the changes in
  [Video #4a](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/26--cleanup-response-type-pt1.mp4)
  and
  [Video #4b](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/27--cleanup-response-type-pt2.mp4)
  which has to do with _tightening up typescript Response types, and error
  codes_.
- Commit your work.
- The next short video (only 8 minutes), I want you to watch, but you are not
  required to implement the changes, unless you want to.
  [Video #5](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/28--cleanup-logging.mp4)
  -- has to do with _a logging abstraction_.
- Submit a MR.
- Watch and implement the changes in
  [Video #6](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/29--cleanup-middleware.mp4)
  which has to do with _creating a user authentication **middleware**_.
- Commit your work.
- Submit a MR.

---

## Flashcards API (non-cleanup) Assignment

---

- Make sure you've finished your **cleanup #2** assignment first. I'll try to
  review those MRs quickly, so you can merge and get started on this assignment.
- Pull from master, etc. etc., make a new branch.
- Start by modifing the `GET /cards` routes so that it _also sends back the
  **category id**_ for each card. We'll use this later in the web app. Modify
  your types and tests as needed.
- Commit your work.
- Create a `GET /categories` route that returns _all the categories_ that belong
  to the user, with these stipulations:
  - it should be protected using the middleware you created in the last
    assignment
  - because our `categories` table doesn't have **user ids**, you'll need to use
    the user id from the header-authed user to _join on the cards table_ to
    **only get the categories that belong to the authed user**.
  - return all the columns in the `categories` table (you can camel-case them if
    you like, for easier consumption on the web-app side)
  - this will involve a new route responder, and a new db method
  - write a couple tests for you new route
  - write a test route into your `api.http` file
- commit your work
- Next, add a `GET /cards/:id` route, which returns the json data for **a single
  card**, with these stipulations:
  - protect the route with our user auth middleware
  - make sure the authed user owns the card requested
  - return a resource that represents _every column_ in the cards table, not the
    same exact resource we return an array of for `GET /cards` -- maybe call the
    resource `CardRow`. You can camel-case the column names if you want, but
    make sure they're all present.
  - this will involve a new route responder, and a new db method
  - write a couple tests for you new route
  - write a test route into your `api.http` file
- Next, add a `GET /categories/:id` route, which returns the json data for **a
  single category**, with these stipulations:
  - protect the route with our user auth middleware
  - make sure the authed user owns the category requested
  - return the same resource type as `GET /categories` does
  - this will involve a new route responder, and a new db method
  - write a couple tests for you new route
  - write a test route into your `api.http` file

---

## King C Assignment 👑

---

- Slowly and Carefully read chapter 19 of King C.
- No exercizes or projects this week. 👍
