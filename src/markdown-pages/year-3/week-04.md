---
path: "/year-3/week-04"
---

# Year #3, Week #4 💻 ⚾️

_New stuff we learned this week:_ 🤔

## SQL Joins

- A SQL **JOIN** statement allows you to _query more than one table at once_,
  _merging the results into one set_. You can sort of think of it like mixing
  paint colors, you take a little blue and a little green, and make purple! Same
  with joins - you pluck some stuff from one table, some stuff for another, and
  return a record set that is the combination result.
- For the database to know **how to join** the tables, you have to tell it how
  to connect them with an `ON ...` clause:

```sql
SELECT name FROM orders
LEFT JOIN order_items
ON order_items.order_id = orders.id
```

- You can _alias_ columns to make them make more sense in your joined result,
  because `id` is a perfectly good column name for a single table, but if you're
  joining two tables, you might want _both `id` columns_ with them named more
  clearly:

```sql
SELECT orders.id as order_id, order_items.id as order_item_id
FROM orders
LEFT JOIN order_items
ON order_items.order_id = orders.id
```

- You can alias _tables_ as well, if it's helpful:

```sql
-- a bit cryptic, but hey, it works!
SELECT o.id as order_id, i.id as order_item_id
FROM orders AS o
LEFT JOIN order_items AS i
ON i.order_id = o.id
```

- The different _types_ of JOINs have to do with how the database engine handles
  _partial matches_. Left join is more permissive, it supplies NULL where it
  can't make a match with the second table, where as an _INNER_ join won't
  return a result when it can't perform the join.

## C: Functions that take pointers

- A **pointer** is a **variable containing a _memory address_**.
- You can get a pointer for any variable by using the _address of_ operator `&`.

```c
int my_number = 3;
int *pointer_to_my_number = &my_number;
```

- A pointer is a _type_ in it's own right. In modern languages with generics,
  this is expressed as something like: `Pointer<Int>`. But in C, you add a `*`
  after the type instead, so it's `int *`:

```c
// `p_int` is a variable of type: "pointer to int"
int *p_int;

// `p_char` is a variable of type: "pointer to char"
char *p_char;
```

- Once you have a pointer, you very often need to "follow the treasure map" to
  the area of memory pointed _to_, to look up and use the value there. To do
  this, you use the `*` symbol AGAIN (called the **indirection operator**), but
  this time, _before_ the value:

```c
int three = 3;
int *p_three = &three;

// here we'll use the value POINTED TO by `p_three`:
// the `*` here is NOT part of the type, it rather
// is the "INDIRECTION OPERATOR"
int sum = *p_three + 2; // = `5`
```

- Probably the most confusing part about pointers in C is that you use `*` in
  the **type**, and you also use it in the **indirection operator**. For the
  type, it comes AFTER the type (like `int *x;`), and when using just as a the
  indirection operator, it just comes before the variable with no type (like
  `*x;`)
- Pointers have many uses, one of them is that it solves a problem with C, that
  _functions can not return more than one value._ Imagine for some reason that
  you wanted a function that you could pass two integers to, and have it return
  the _sum_ AND the _product_ of both. There's no way to return a `tuple` in C,
  so one way you can handle this is by passing pointers to two variables:

```c
void sum_and_product(int x, int y, int* sum, int *product) {
  *sum = x + y;
  *product = x * y;
}
```

- You would use the `sum_and_product()` function like so:

```c
int x = 5;
int y = 3;
int sum, product;

sum_and_product(x, y, &sum, &product);
```

- Notice how in the above snippet we pass the `x` and `y` ints normally, but
  pass _pointers_ two two other variables. The function will then mutate these
  variables by following the memory address and storing the sum and product in
  each. This pattern should be familiar, because it's exactly how `scanf` works.
  It takes multiple pointers so that it can give the calling code multiple
  results, which would otherwise be impossible in C.

---

## Homework Plan (2 weeks)

- 1 day Monkey Assignment #12
- 2 day review all flashcards in your app.
- 2 day touch typing practice
- 1 day King C reading assignment (chapter 5)
- 1 day King C exercizes
- 1 day MySQL/Flashcards homework
- 1 day CS50 "Credit" homework
- watch [Lecture 2](https://htc-viewer.netlify.app/?id=8PrOp9t0PyQ) of CS50, up
  until `35:30`
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="read-king">Carefully read chapter #5 of King C</Checkable>

<Checkable id="king-3">Selected Projects from King C, Ch. 5</Checkable>

<Checkable id="monkey-12">Monkey Assignment #12 🐒</Checkable>

<Checkable id="mysql-join">MySQL/Flashcards JOIN Assignment</Checkable>

<Checkable id="cs50-vid">Watch CS50 Video Segment</Checkable>

<Checkable id="cs50-credit">CS50 Credit Assignment</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## King C Chapter 5 Projects 👑

---

- First, make sure you've slowly and carefully read all of chapter 5 of King C.
  assignment.
- Second, make sure you've read the C "New Stuff" above, slowly and carefully.
- While you're working on the exercizes listed below, keep in mind that I want
  you _at least once_ to extract a helper function that **takes one or more
  pointers**, as demonstrated in the example functions in new stuff. Try to find
  a spot where it would actually help you accomplish the task. You can do it
  more than once, but I want you to do it at least once.
- Merge your `king-c` repo branch from last week, and **CREATE A NEW BRANCH**.
- Complete the following programming projects (not _exercizes_) from chapter 3:
  `1, 2, 4, 5, 7, 9, 19, 11`. Make a new file for every one.
- commit your work, and push up a MR on GitLab, then slack me the URL.

---

## Monkey #12 (Prefix Operators) 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Start in the middle of section **2.6**, in the section labeled **Prefix
  Operators**. Work through that section, and stop when you get to the section
  labeled **Infix Operators**.
- As always, try to do as much as you can on your own, leaning on the videos
  when you get stuck. But also, make sure to watch the videos and update your
  code accordingly.
- [Video link](http://jared.howtocomputer.link/monkey/16--2.6-parsing-prefix-operators.mp4)
- Submit a MR, slack the MR url

---

## CS50 Credit Assignment

---

- Before you do this assignment, make sure that you have completed:
  - the King ch. 5 reading
  - the King ch. 5 programming projects
- Merge your `cs50` MR from 2 weeks ago, then **CREATE A NEW BRANCH** called
  `credit`.
- Before you read the assignment, there are two variations of requirements.
  **Kiah Credit: ✨** is to do the assignment exactly as written, supporting
  credit card numbers of various length. For everyone else, you can complete the
  assignment **only supporting 16 digit card numbers**, which makes it a chunk
  easier.
- Also, same as in the King assignment this week, I want you to extract one
  function. You can decide if it will accept pointers or not, whichever seems
  most helpful.
- Slowly and carefully read the [assignment here](/year-3/cs50-credit).
- Complete the assignment in a file called `credit.c`.
- Be sure to check some of the card numbers shown at the bottom of the page
  (only do the 16 digit numbers, unless you're doing the Kiah credit).
- Commit your work, submit a MR, slack me the URL.

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

## MySQL / Flashcards Assignment

---

- Slowly and carefully review this weeks New Stuff^^^ on SQL joins.
- Fire up your flashcards dev app, make sure it's running and talking to your
  API without any problems. If something's broken or error-ing, fix it. :)
- **CREATE A NEW BRANCH** and switch to it.
- Make sure you did the previous step.
- Harriet, did you do the previous step?
- Next, (referring to last weeks new stuff, if necessary), make a backup of your
  prod database using `mysqldump`, just in case you mess something up horribly
  working on this assignment, you can always restore it from that.
- At the end of last week's assignment, we got a foreign key relationship set up
  between your `cards` table and the new `categories` table. But we left in the
  old column called `type` (or maybe something else), that is now redundant --
  it is taken over by the `name` column of the `categories` table now. Connect
  with Sequel Pro, find the column, and then execute a MySQL query to **delete
  that column**.
- next, in Sequel Pro still, practice writing a SQL statement including a
  **JOIN** that retrieves the name or type of the category by joining with the
  `categories` table. If you craft the query just write, you won't have to
  change any of your typescript code to accommodate the change in database
  schema. But, if you end up with different field names from your join, you can
  also adjust the typescript code to match. I would advise trying to do the
  former.
- once you've got the query returning the right results by joining the two
  tables, replace the query in your server typescript code, and verify that
  everything still works.
- Creating a new card might now be broken, that's OK - as long as
  selecting/fetching the cards works, and your app still functions to review the
  cards, that's enough. We'll fix the other parts of the app in some future
  homework.
- Commit your work, submit a MR, slack the URL.
