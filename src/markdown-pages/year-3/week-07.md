---
path: "/year-3/week-07"
---

# Year #3, Week #7 💻 🏉

_New stuff we learned this week:_

## VSCode Rest Client

- Create a file ending with `.http`
- Separate requests with `###`:

```txt
# list cats
GET https://api.cats.com/cats HTTP/1.1

###

# delete a cat

DELETE https://api.cats.com/cats/33
```

- You can create and use _variables_ like so:

```txt
# list cats
GET {{endpoint}}/cats HTTP/1.1

###

@endpoint = https://api.cats.com
```

- Here's an example showing **custom headers**, and sending a `POST` request
  with a body:

```txt
# create a cat

POST {{endpoint}}/cats HTTP/1.1
Content-Type: application/json

{
  "name": "Scout",
  "age": 2
}
```

## Homework Plan (2 weeks)

- 1 day Monkey Assignment #15
- 2 day review all flashcards in your (old) app.
- 2 days touch typing practice
- 1 day King C reading assignment (chapter 8)
- 1 day King C exercizes (Part 1)
- 1 day King C exercizes (Part 2)
- 1 day Flashcards API Assignment
- 1 day Read the Docs! Tailwindcss Assignment
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #8 of King C</Checkable>

<Checkable id="king-8a">
  Selected Projects from King C, Ch. 8 (Part I)
</Checkable>

<Checkable id="king-8b">
  Selected Projects from King C, Ch. 8 (Part II)
</Checkable>

<Checkable id="monkey-13">Monkey Assignment #15 🐒</Checkable>

<Checkable id="f2">Flashcards API homework</Checkable>

<Checkable id="flash-review">Review Flashcards (#1)</Checkable>

<Checkable id="flash-review-2">Review Flashcards (#2)</Checkable>

<Checkable id="typing">touch typing practice (#1)</Checkable>

<Checkable id="typing-2">touch typing practice (#2)</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Monkey #15 (Grouped Expressions, If/Else Expressions) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start at section **2.8 - Grouped Expressions**. Work through that section, and
  commit your work when you finish that section. The first video covers the
  first segment only.
- Next, work through the **If/Else Expressions** section. The second and third
  video covers this section.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link #1](http://jared.howtocomputer.link/monkey/22--2.8-grouped-expressions.mp4),
- [Video link #2](http://jared.howtocomputer.link/monkey/23--2.8-if-else-pt-1.mp4),
  [Video link #3](http://jared.howtocomputer.link/monkey/24--2.8-if-else-pt-2.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Flashcards (new) API Homework

---

- Make sure you've 100% addressed the feedback I left last week, then merge your
  MR.
- Create a new branch.
- This week we're going to implement a `GET /cards` route that sends back JSON
  of all of your cards. It respond with the exact same JSON content as your
  current flashcards app does. But NO COPY pasting from your other project. I
  want you to re-implement it from scratch in this new repo. Some hints and
  requirements:
  - You'll need to bring in the `@htc-class/simple-mysql` package
  - When you run your _dev_ script, it should talk to the _dev_ database, and
    the _prod_ should talk to _prod_.
  - I want you to go find the function you made to load environment variables
    from a `.env` file, as described in the flashcards homeword #2 from
    [this page](https://homework.howtocomputer.link/year-2/week-24). Pull that
    function over into this repo, and use it to load your environment variables.
  - **DO NOT** commit your `.env` file. It should be gitignored.
  - add a `api.http` file for the **VSCode Rest Client** extension. Make sure it
    has a request to your `GET /cards` endpoint.
  - make the code as clean and clear as possible, remember, I'm going to be very
    picky in reviewing the merge request.
- take a screenshot of the output of the response from your VSCode rest client
  request, and either put it in the MR, or slack it with the MR URL.
- Review your diffs, clean up anything you see.
- Slack me the MR.

---

## King C Chapter 8 Projects (Part I) 👑

---

- First, make sure you've slowly and carefully read all of chapter 8 of King C.
  assignment.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects from chapter 8, making a **new
  file** for every one:
  - `1`
  - `2`
  - `3`
  - `5`
  - `7` **Extra Credit✨**
- commit your work, and push up a MR on GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## King C Chapter 8 Projects (Part II) 👑

---

- Complete the following programming projects from chapter 8, making a **new
  file** for every one:
  - `9`
  - `12`
  - `15`
  - `16`
  - `17` **Kiah Credit✨**
- commit your work, and push up a MR on GitLab
- before you slack me the URL, review your own diffs, clean up anything you
  notice, then slack me the URL.

---

## Read the Docs! (Tailwind Edition)

---

- Spend about 20-40 minutes perusing the docs for
  [**Tailwindcss**](https://tailwindcss.com/). Try to get a feel for the
  different utilities, customization options, etc. You might find you learn some
  cool css along the way as well!
- Pick one utility class or concept that seems creative, new, or especially
  cool. Take a screenshot and post it on Slack with a brief explanation of how
  it works.
