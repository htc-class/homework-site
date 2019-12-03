---
path: "/week-12"
---

# Week 12 Homework 💻 🐝

_New stuff we learned this week:_ 🤔

#### Vim

- to move quickly within a line, use `f<char>` or `t<char>`
- to move quickly anywhere in the file, search is your friend: `/<search><ENTER>`
- the `{` and `}` keys move backwards and forwards by _paragraph_.
- remember `.` _repeats_ the last edit you made -- use it for great good

#### Regex

- `\b` means _word boundary_, and matches beginning/end of lines, spaces, tabs -- basically everything that you untuitively think marks the beginning or end of a _word_.
- `\w` is a special token that means _a word-like character_. Technically it's alphanumeric plus underscore. It's exactly equivalent to writing out the _character set_ `[A-Za-z0-9_]`
- a `?` character that is _directly after a_ `*` or `+` quantifier makes it _LAZY_ -- it will no longer match as many characters as possible, it will rather stop _as soon as possible_.

#### HTML

- a `<div>` tag is a _generic, block-level element_ -- think of it like a bucket to put other tags in
- a `<span>` is a _generic, inline element_ -- think of it like a way to wrap a tight box around a bit of text
- an HTML `<table>` tag is used to represent _tabular data_. `<tr>` is for a _row_ and `<td>` is for a _cell_. A simple table markup is as follows:

```HTML
<table>
  <tr>
    <td>Name:</td>
    <td>Age:</td>
  </tr>
  <tr>
    <td>Jared</td>
    <td>40</td>
  </tr>
</table>
```

#### Styling web-pages

- you can apply _styling_ to an HTML element by using a special _attribute_ called `style`, like this: `<div style="color: red">`
- multiple styles can be added to a single element by _separating them with a *semicolon*_ `<div style="color: red; margin: 1em">`
- html elements have a `display` property that controls how they are drawn on the page. `block` elements (`display: block`) take up their own line and use the full width of their parent element. `inline` elements (`display: inline`) hug tight around the text inside them, and don't make their own line.
- two useful _units_ are `px` (pixels) and `em` (width of an `M` char).
- every element on a webpage creates a _box_ and the box can have _padding_ surrounded by a _border_ which is surrounded by _margin_. Together this is called the _BOX MODEL_.
- _colors_ can be specified in several ways, the easiest is with _color keywords_ like `red`, `green`, `salmon`. For a list, [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table).
- `background-color` controls the, um..., _background color_, example: `background-color: rebeccapurple`
- `padding` adds _space between_ an element and it's (optional) border, example: `padding: 20px` or `padding: 2em`
- `margin` adds _space around_ an element, example: `margin: 15px` or `margin: 1em`
- _borders_ can be added by specifying _3 properties_:
  - `border-width` -- example `border-width: 10px`
  - `border-color` -- example `border-color: papayawhip`
  - `border-style` -- example `border-style: solid` (or: `dashed`, `groove`, `inset`, [and more...](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style))
- `color` controls the _text color_ -- it's horribly named, just memorize it, example: `color: red`
- `font-size` controls the _font size_, example: `font-size: 20000px`
- `font-family` controls what we normally call the _font_. It takes a _list_ of font-families in order of preference. The browser will use the first one installed on the users system. Example: `font-family: BizarroLOL, Nope, Georgia, Times, serif`

---

## Useful Links:

- [Regexr](https://regexr.com/) -- Regular expression playground
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)

---

## Flashcard Assignment

- review your current stack of flashcards
- make 2 new `VIM` flashcards for `{` and `}`
- add 3 new `REGEX` flashcards for the 3 new _regex_ concepts we learned this week
- add 5 new `HTML` flashcards for the 5 new _tags_ we learned: `<div>`, `<span>`, `<table>`, `<tr>`, `<td>`
- make 9 new flashcards labeled `CSS` (don't worry about what that means yet) for these styling concepts:
  - `color`
  - `font-size`
  - `font-family`
  - `margin`
  - `padding`
  - `border-style`, `border-width`, `border-color` (one card for all three is good)
  - `background-color`
  - `em` (the _unit_)
  - `px` (the _unit_)

---

### CLI Homework #1

---

- `ssh` into your home dir and make a new `week12/` dir, then `cd` down into it
- copy the file from `/regex/ishmael.txt` into the `week12/` dir
- `cat` out the file so you can see what's in it
- _note, if you're having trouble with any of these steps, try using [regexr.com](https://regexr.com)_
- pipe the file into `perl` (`perl -pe 's/<search>/<replace>/<flags>'`) with a regex that changes _every word_ that begins with a lowercase `w` into the word `WOMBAT`. Use the `\b` flag we learned this week at least (you might want to use _all 3_ new concepts). There should be _**5** WOMBATS_ in the text after your replacement.
- write a new regular expression that _removes everything after the first word_ on each line
- **Extra Credit:** ✨ write a new regex that _removes everything after the SECOND word_ on each line
- write a new regular expression that _changes every 3-letter word_ to `<3>`
- write a new regex that changes every _capitalized word that is at least two letters long_ into `###` -- if you did it right, you should have **SIX** `###` on your screen
- change your regex from the last step so that the `###` is _prepended_ with the capital letter that started the word, so for instance, the text should start with `C### me I###.` and so forth...
- **Extra Credit:** ✨ write a regex so that every capitalized word at least two letters long _has it's initial capital letter moved to the end of the word_. So the text should start: `allC me shmaelI. omeS`, etc.
- write a new regex that changes all the occurrences of the word `I` to `ME` -- but be sure to _avoid_ changing the beginning of words like `It` and `Ishamel`.
- write a new regex that changes all words that are _at least 9 characters long_ into: `BIGSCARYWORD` -- there should be **4** of them.
- write a new regex that _removes all of the punctuation marks_ in the text.
