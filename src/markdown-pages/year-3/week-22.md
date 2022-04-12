---
path: "/year-3/week-22"
---

# Year #3, Week #22 💻 🤿

## Homework Plan

- Watch
  [Tidbits](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/tidbits/tidbits--omit-pick-array-copy.mp4)
  addendum video
- 1 day watch CS50
  [CS50 Lecture #5 segment](https://htc-viewer.netlify.app/?id=4IrUAqYKjIA),
  from `30.23` to `1:08:24`
- 1 day Monkey Assignment #31 🐒
- 1 day Monkey Assignment #32 🐒
- 2 days review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 17 👑
- 1 day King C programming exercizes/projects 👑
- 2 days touch typing practice
- 2 days Flashcards API assignment
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="cs50-linked-lists">Watch CS50 Video</Checkable>

<Checkable id="flash-api">Flashcards API Assignment #1</Checkable>

<Checkable id="flash-api-2">Flashcards API Assignment #1</Checkable>

<Checkable id="monkey-26">Monkey Assignment #31 🐒</Checkable>

<Checkable id="monkey-28">Monkey Assignment #32 🐒</Checkable>

<Checkable id="flash-review">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="typing-1">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-5">Execute Program #6</Checkable>

---

## Flashcards API assignment #1

---

- Make sure you've first watched the
  [tidbits](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/tidbits/tidbits--omit-pick-array-copy.mp4)
  video.
- Make sure you've addressed all feedback from any prior MRs, and merged.
- read all these instructions from beginning to end before starting
- this homework has a video, you can use it if you need it, but try first to do
  it without (link at the end)
- Implement a new API route: `POST /categories`, as I described in class, with
  the presence or lack of an `id` field being the differentiator between whether
  we are _editing_ a category, or _creating_ a category
- _Regarding the methods/functions etc, outlined below: you are encouraged to
  change the **names** of the methods, arguments, or even the **shape/types** of
  the arguments, to match your naming convention and personal coding style. The
  naming and type signatures aren't a requirement, but they do show you **what
  information you almost certainly will need for each function**_.
- Below are a some hints and requirements:
- you will need to end up adding **_3_** new _database methods_:

  - one to return a `User` row/resource from a _token_:

  ```ts
  getUserFromToken: (token: string) => Promise<Result<Omit<UserRow, 'password'>>>;
  ```

  - one to insert a new category:

  ```ts
  insertCategory: (name: string) => Promise<Result<CategoryRow>>;
  ```

  - edit an existing category:

  ```ts
  editCategory: (
    id: string,
    name: string,
  ) => Promise<Result<Pick<CategoryRow, 'id' | 'name'>>>;
  ```

- you will need add a new "route responder" for editing a category:

```ts
updateCategory(
  db: Database,
  authorizationHeader: string | undefined,
  body: any
): Promise<Response>;
```

- the route responder method shown above takes a `authorizationHeader` param for
  a basic authorization sanity check, using `db.getUserFromToken(...)`. That
  method on the db will be used more extensively in Part 2 of this homework, but
  we'll also use it in this `updateCategory()` route responder to do a _sanity
  check_ that we have a valid authenticated user making the request. What I mean
  by that is, inside the route responder you should:
  - pull the _bearer token_ from the header (like you do in the `GET /cards`
    route)
  - then call `db.getUserFromToken()`
  - if you get a valid user, fine, proceed (without using any of the actual user
    data)
  - if you can't find a valid user, immediately return with an "unauthorized"
    message/status -- only valid authenticated users are allowed to use this
    route.
  - you might find some commonality between this responder and the `getCards`
    responder, in the code that pulls the token from the header, and it might be
    worth factoring out some duplication in a helper method.
- the route responder takes as it's `body` argument the _parsed JSON body_,
  which is why it's an `any`. In order to extract valid, _type-safe_ info from
  the parsed json blob, I want you to make a function like this (where if the
  data is not valid, it returns `null`):

```ts
function validCategoryData(body: any): null | {
  id?: string; // 👋 `id` is optional
  name: string;
};
```

- the route responder will call that method with the `body: any` argument it
  gets passed. If it gets `null` back, the request was not valid, so it can
  return a "400/Bad Request" response. If it gets some non-null valid data, it
  will use that to safely pass arguments on to the database methods.
- your route responder should be **extensively tested**, including
  - asserting that you get a "400/Bad Request" response if you pass in invalid
    `body` data.
  - asserting that the database method to _insert a category_ is called when an
    `id` is NOT present
  - asserting that the database method to _edit a category_ is called when an
    `id` IS present
  - covering failure and error cases
- you must add a two new requests to your `api.http` that allows you to test
  adding and updating a category.
- commit your work
- Push up a MR
- Review your diffs
- Slack me the MR
- When I approve your MR **don't merge it**, then you may continue to part 2.
- [video link here](/TODO)

---

## Flashcards API Assignment #2

---

- Make sure you've addressed all feedback from from your WIP/partial MR in part
  1 of the assignment.
- read all these instructions from beginning to end before starting
- this homework _does not have a video_, but is conceptually very similar to
  part 1, only with a couple more bits of data because the `cards` table has
  more columns than the `categories` table. But all the concepts are the same,
  so you should be able to follow the outline of your work for part 1, and do it
  mostly the same.
- Implement a new API route: `POST /cards`, as I described in class, with the
  presence or lack of an `id` field being the differentiator between whether we
  are _editing_ a card, or _creating_ a card
- Below are a some hints and requirements:
- you will need to end up adding **_2_** new _database methods_:

  - one to insert a new card:

  ```ts
  insertCard(
    userId: string,
    categoryId: string,
    front: string,
    back: string,
  ): Promise<Result<Pick<Card, 'id' | 'title' | 'back'>>>;
  ```

  - edit an existing card: `editCategory(id: string, name: string)`

  ```ts
  editCard(
    id: string,
    categoryId: string,
    front: string,
    back: string,
  ): Promise<Result<Pick<Card, 'id' | 'title' | 'back'>>>;
  ```

- you will need add a new "route responder" for editing a card:

```ts
updateCard(
  db: Database,
  authorizationHeader: string | undefined,
  body: any
): Promise<Response>;
```

- This route responder also uses `db.getUserFromToken()`, but for **2 reasons**
  -- authentication, and getting the users id for foreign key relations --
  (unlike the `updateCategory()` responder, which used it _only_ for
  authentication)
- the route responder also takes as it's `body` argument the _parsed JSON body_,
  which is why it's an `any`. Make another input/body validator function:

```ts
function validCardData(body: any): null | {
  id?: string; // `id` optional again
  categoryId: string;
  front: string;
  back: string;
};
```

- the route responder will call that method with the `body: any` argument it
  gets passed. If it gets `null` back, the request was not valid, so it can
  return a "400/Bad Request" response. If it gets some non-null valid data, it
  will use that to safely pass arguments on to the database methods.
- your route responder should be **extensively tested**, including
  - asserting that you get a "400/Bad Request" response if you pass in invalid
    `body` data.
  - asserting that the database method to _insert a card_ is called when an `id`
    is NOT present
  - asserting that the database method to _edit a card_ is called when an `id`
    IS present
  - covering failure and error cases
- you must add a two new requests to your `api.http` that allows you to test
  adding and updating a card.
- commit your work
- Push up a MR
- Review your diffs
- Slack me the MR

---

## Monkey #31 🐒

---

- Address all feedback from prior MR, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start at the _beginning_ of the section titled: **4.4 Arrays**
- Stop at the beginning of the sub-section titled **Parsing Index Operator
  Expressions**, at the top of page 169 (PDF), or the middle of 213 (printed),
  right where he says `We can mark “parsing array literals” as “done”.`
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/41--4.4-parse-array-literals.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## Monkey #32 🐒

---

- Address all feedback from prior MR, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start at the _beginning_ of the sub-section titled: **Parsing Index Operator
  Expessions** (p. 169 pdf, p. 213 printed)
- Stop at the _beginning_ of the sub-section titled **Evaluating Array
  Literals** (p. 172 pdf, p. 217 printed), right where he says
  `Lexer done, parser done. See you in the evaluator!`
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/42--4.4-parse-index-expression.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C Assignment 👑

---

- Make sure you've first watched the
  [tidbits](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/tidbits/tidbits--omit-pick-array-copy.mp4)
  video.
- First, watch the CS50 video segment assigned for this week
- Slowly and carefully read **Chapter 17** of King C _skip the last two
  sections_, on restricted pointers and flexible array members (section `17.8`,
  and `17.9`) - but **DO READ THE Q&A** (it gives you part of the answer for the
  homework).
- Merge your `king-c` repo branch from a few weeks ago, and **CREATE A NEW
  BRANCH**.
- Read the whole assignment before starting
- **Project #1**:

  - Write a program that sorts a series of words entered by the user, a session
    would look like this:

  ```txt
  Enter word: zoo
  Enter word: foobar
  Enter word: cat
  Enter word: Apple
  Enter word:

  You entered 4 words: Apple cat foobar zoo
  Meow!
  ```

  - When the user enters an empty word (i. e., presses "Enter" without entering
    a word), stop storing words and print the sorted list.
  - The list of words must be stored in a heap-allocated **Linked List**.
  - You may assume that each word is no longer than 20 characters long.
  - Use the `read_line()`&nbsp;
    [function here](https://gitlab.howtocomputer.link/-/snippets/25) to get a
    word from the user.
  - Your program must not leak memory.
  - You must check for `NULL` pointers whenever you malloc and exit/return when
    necessary.
  - You must make a function called `make_node` that takes a `char[]` (or a
    `char*`) and returns a _pointer to a node_. This function should be used by
    your program.
  - when adding to your list, the new node should be put _at the beginning_.
  - You must make a function called `count_list` which counts the number of
    items in the list, starting with the _head_ node. You must use this function
    to calculate the number when writing the line `You entered 4 words.` shown
    in the example above.
  - make a function `bool in_list(char* word, node* list)` function that allows
    you to search for a string contained anywhere in the list. Use this function
    to test if the user has written the word `cat` or `Cat`. If so, print
    `Meow!` as the last line.
  - **Extra Credit: ✨** Add a line of output printing the words in _sorted
    order_. Do the sort using `qsort`, as described/shown in the chapter. Hint:
    you can't pass a linked list to `qsort`, so determine the number of items,
    and convert the list to a variable-length-array, then pass that to `qsort`.
    The code in the chapter and in the Q&A section will be very helpful for
    this.

- **Project #2 Extra Credit ✨**

  - write a program that stores integers from the user, and then prints them in
    sorted order:

  ```txt
  Enter number: 7
  Enter number: 3
  Enter number: 99
  Enter number: -2
  Enter number:

  You entered 4 numbers: -2, 3, 7, 99
  ```

  - To achieve this, store the numbers entered by the user in a **sorted linked
    list**.
  - When the user enters a blank line, just iterate through your linked list,
    printing out each number, they should _already be sorted_, since you're
    keeping them sorted at the time of insertion.
  - your program must not leak memory
  - make sure you've handled the case where you need to enter a number between
    two existing numbers, like when the user enters 5, 7, 6.
  - hint: some of the code in the chapter comes very close to supplying what you
    need to make this work.
