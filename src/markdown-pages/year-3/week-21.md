---
path: "/year-3/week-21"
---

# Year #3, Week #21 💻 🎣

## Homework Plan

- 1 day Monkey Assignment #30 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day read King C chapter 16 👑
- 1 day King C programming exercizes/projects 👑
- 1 day touch typing practice
- 1 day Flashcards assignment
- 1 day watch CS50
  [CS50 Lecture #5 segment](https://htc-viewer.netlify.app/?id=4IrUAqYKjIA),
  from beginning to `30.23`
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

## Monkey #30 🐒

---

- Address all feedback from prior MR, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Complete the entire section titled: **4.3 Built-in Functions**
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/40--4.3-builtin-len.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---

## King C Assignment 👑

---

- Slowly and carefully read **Chapter 16** of King C.
- Merge your `king-c` repo branch from a few weeks ago, and **CREATE A NEW
  BRANCH**.
- **NOTE:** Some of the below are from _excercizes_ and some are from
  _projects_, read carefully.
- Complete **Exercize 16.3**
  - Use a **`structure tag`** _not_ a `typedef`.
  - first write a `print_complex` function that prints out a complex struct in
    some usable way
  - including a `main()` function and some calls to `print_complex` showing that
    the other functions you made work correctly
- Duplicate your file from the previous step and complete **Exercize 16.4** --
  which is basically just asking you to replace the **tag** with a **typedef**.
- Complete **Exercize 16.6**
  - first write a `print_time` function that prints out a time struct in some
    usable way
  - including a `main()` function and some calls to `print_time` showing that
    the function you made works correctly
- Complete **Exercize 16.7** including a `main()` function and some `printf`
  statements showing that your functions work.
  - first write a `print_fraction` function that prints out a fraction struct in
    some usable way
  - write a `unify_denominators` function that takes two fractions and makes
    their denominator the same, without changing their value. Because a function
    can't return two values, to make this function useful, it will need to work
    with _pointers_.
  - _Note 1:_ You already have a function that computes the GCD of two numbers,
    from _Chapter 6, project #3_, copy that function and use it here (you may
    modify it if you like).
  - _Note 2:_ read the directions completely -- make sure all your functions
    return fractions reduced to _lowest terms_.
  - _Note 3:_ for the _subtraction_ function, you'll get funny results if the
    result ends up negative. The reason is that your `GCD` function probably
    doesn't work with negative numbers. To fix that, have your `gcd` function
    convert it's inputs to positive values, using the `abs()` function from
    `stdlib.h`.
  - _Note 4:_ Dividing two fractions is the same as multiplying one fraction by
    the _reciprocal_ of the other, so `1/2 / 2/3 == 1/2 * 3/2`.
- Complete **Exercize 16.14**
  - first write a `print_shape` function that prints a shape in a meaningful
    way, differently for a circle or a rectangle, showing both it's _center_ and
    it's _size_.
  - Use the `struct shape` shown in the previous exercize. You might find it
    easier to define separate type definitions for `rectangle` and `circle`
    _outside_ of the union shown in the text.
  - assume `0` means "rectangle" and `1` means "circle" for the `shape_kind`
    discriminant.
  - if you include `<math.h>`, you can use a predefined macro `M_PI` for pi.
  - including a `main()` function and some `printf` statements showing that your
    functions work.
- Complete **Programming Project #1**. Use
  [this snippet](https://gitlab.howtocomputer.link/-/snippets/22) for the
  `country_codes` array.
- Complete **Programming Project #4** Using
  [these files](https://gitlab.howtocomputer.link/-/snippets/23) to start.
  - use your knowledge from last chapter to either craft a `cc` command to
    compile the multiple sources, or create a `Makefile`
  - the `price` should be of type `double` so it can represent dollars and
    cents: `1.99`.
  - when formatting the price for printing, only and always show 2 digits after
    the decimal point.
  - take a screenshot of the "print" command, showing that you got it lined up
    nicely, like the other columnns, include the screenshot in the MR.

---

## Flashcards WebApp Assignment

---

- Make sure you've addressed any feedback and merged MR's for both web-app and
  api side from last week.
- After pulling, check out a new branch for your web-app
- Make an `<AppChrome />` component:
  - it should take any component as `children`, centering it within the screen.
  - it should have a _storylite_ story
  - it should have a "top" strip and a "bottom" strip
  - the "top" area should have the _name_ of your app
  - somewhere on it, it should have a "logout" button that takes a
    `onClick: () => unknown` prop
- Commit your work
- Make a `<EditCard />` component
  - it should have a _storylite_ story
  - it should use your `<TextInput />` component which you made for your
    Login/Signup components
  - it should allow you to enter the "front/title" and "back/answer"
  - the area where you input the "back/answer" should be an html `<textarea>`
    element. You can decide if you want to make your `<TextInput />` support
    that via a _prop_, or if you want to introduce a whole new _component_.
  - it should have a "select" element that allows you to _choose a category_
  - use MDN if you need help with `<textarea>` or `<select>`
  - you're not going to hook this component up to state, or submit it to the API
    this week, but think through what props it will need to take to actually
    work, including allowing you to select an existing category -- try to make
    the props correct enough that you won't need to change them when we wire
    this up. Pass empty functions in from your storylite stories rather than
    make the function props optional.
  - it will need some sort of "submit" or "save" button
  - note: I had you name it "EditCard" instead of "CreateCard" because we're
    going to use it to _both_ create and edit.
- Commit your work.
- Make a `<EditCategory />` component:
  - it should have a _storylite_ story
  - it should allow the user to enter (or edit) the _name_ of the category
  - re-use your `<TextInput />` component
  - it will need some sort of "submit" or "save" button
- Commit your work.
- Modify your app so that when an authenticated user is on the `/` route
  (viewing their cards), the cards are displayed _inside_ the new
  `<AppChrome />` component with the logout button.
- Commit your work.
- Implement the _logout button_ (hint: there are 3 aspects of successfully
  logging the user out)
- Commit your work.
- Push up a Netlify draft URL.
- Push up a MR.
- Review your own diffs, clean up anything you find.
- Slack me the MR and Netlify draft URL.
