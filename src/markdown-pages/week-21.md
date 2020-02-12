---
path: "/week-21"
---

# Week 21 Homework 💻 🏹

_New stuff we learned this week:_ 🤔

## Flexbox 🏹 🔫

- For a full review of Flexbox, see [this page.](/flexbox-properties)

## CSS

- CSS selectors can be combined with a _space_, so the selector `#some-div img` means "target `img` elements inside the element with the `id` of `some-div`.
- there can be any number of levels of combining selectors in this way, like these:

```CSS
body #my-div .foobar ul li {
  /* target lists inside of unordered lists
     inside of elements with class "foobar"
     inside of an element with the id of "my-div"
     inside the body element */
}

p em {
  /* target only `em` tags that are INSIDE of `p` tags */
}
```

## Random for Tabitha 🤷‍♀️

- `font-family: monospace;` 👍

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #19](https://htc-viewer.netlify.com/?id=TQCr9RV7twk)

---

## Homework Plan:

- 1 day creating new flash cards
- 1 day reviewing all flash cards
- 1 day touch-typing practice
- 1 day Flexbox review (see below)
- 1 day Flexbox quiz (see below)
- 1 day watch [CCCS #19](https://htc-viewer.netlify.com/?id=TQCr9RV7twk)
- (more TBA...)

### Homework day 1

- [ ] create new flash cards
- [ ] review all flash cards
- [ ] Flexbox review

### Homework day 2

- [ ] watch [CCCS #19](https://htc-viewer.netlify.com/?id=TQCr9RV7twk)
- [ ] Flexbox quiz

### Homework day 3

- [ ] touch-typing practice
- [ ] Web Homework (added Wednesday)

---

### Flashcard Assignment

- review your current stack of flashcards
- make 10 new `CSS` cards:
  - `display: flex`
  - `flex-direction`
  - `justify-content`
  - `align-items`
  - `align-self`
  - `order`
  - `flex-grow`
  - `flex-basis`
  - `flex-wrap`
  - `align-content`

---

### Flexbox Review

---

- carefully read and work through [the review page](./flexbox-properties)
- each chunk has a few _numbered steps_ -- **carefully do all the numbered steps**

--

### Flexbox Quiz

---

- work through all of the problems on [the quiz page](./flexbox-quiz)
- by editing the CSS style tag, make the blue section look like the purple section

---

### Web Homework

---

- Make sure you've done the Flexbox Review _and_ Flexbox Quiz sections of the homework first.
- view [this page](./holy-grail) -- which is a full implementation of _The Holy Grail Layout_ -- and change your browser size bigger and smaller to see how it looks at various screen sizes -- (but DON'T peek at the HTML _or_ CSS!)
- make a webpage called `holy-grail.html` in new `week21/` dir in your `www/` dir - when you're done it should look and work like the example linked above, with the following stipulations:
  - the colors/font, text, padding, spacing don't have to perfectly match
  - the middle section (green on my page) must come _BEFORE_ the sidebar and ads section **_in the HTML_**. (This is a key part of the layout being "the Holy Grail" -- for search engines, web site creators want to be able to put the most important content FIRST, even if in the design there is a sidebar to the left of it).
  - the middle (green) section should flex as the browser window sizes flexes, while the "ads" and "sidebar" area should remain a fixed width.
  - hint: to help make sure that the footer is all the way at the bottom, even without hardly any text propping open the `body` tag, add `min-height: 100vh` to whatever is your outermost _flex container_ (which probably should be the `body` tag itself 👍)
  - when you're done, post your link in Slack so that we can all check it out!
