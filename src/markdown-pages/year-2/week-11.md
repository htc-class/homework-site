---
path: "/year-2/week-11"
---

# Year #2, Week #11 💻 🚠

_New stuff we learned this week:_

## CSS: Position (adding `fixed` and `sticky`)

- `position: static;` is the default value of every element's `position`
  property. `static` means that:
  - the element takes up space in the normal flow of the layout
  - trying to apply `top/left/right/bottom/z-index` _has no effect_.
- `position: relative;` is just like **static**, except:
  - `top/left/right/bottom` work to nudge the item away from it's normal
    location
  - the element becomes a _"cage"_ for any `absolute`-ly positioned elements
    _inside_ it.
- `position: absolute;` means that the element:
  - is **removed** from the normal layout and flow of the document, other
    elements move into it's spot to take it's place, and it _floats above, on
    top of them_.
  - it can be positioned with `top/left/bottom/right` -- these controls are
    _relative_ to the _first non-static positioned ancestor_ (or the window, if
    none).
  - you can control how they stack above or below other items with `z-index`
- `position: fixed` is similar to _absolute_, except:
  - it is always positioned **relative to the browser window** (it breaks out of
    all cages, except the window)
  - it doesn't scroll with the window or webpage at all, it stays **fixed** in
    place.
- `position: sticky;` is kinda whacky. It behaves _just like_
  `position: relative;` **until it touches the top of the browser** at which
  time it **STICKS** there, even as you keep scrolling. It will also _un-stick_
  if you scroll back up, going back to it's regular spot.

## CSS: Psuedo-classes

- A CSS pseudo-class is a **keyword added to a selector** that specifies a
  **special STATE of the selected element(s).** We've already seen two of these,
  `:root` and `:hover`:

```css
/* vvvvvv----there is a PSUEDO-CLASS 😎 */
div:hover {
  /* bg=hotpink ONLY when div is HOVERED */
  background-color: hotpink;
}
```

- _pseudo_ sort of means "fake". Think of it like this, a _psuedo-class_ is
  almost like as if the browser adds an invisible, fake class to an element when
  it's in a given state. You can target that special fake class, using the
  `:<psuedo-class>` syntax.
- these are easy to confuse with **psuedo-elements** (like `::before` and
  `::after`). _Pseudo-elements_ aren't special **states**, they are actually
  like **fake elements** that you conjure up out of thin air, using only CSS.
  Wizardry! Psuedo-**classes** use **one colon** `:` and Psuedo-**elements** use
  **two colons** `::`.
- there are a
  [whole bunch of useful and interesting psuedo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes),
  we will just highlight a few of the most commonly used.
- the `:link` and `:visited` and `:active` psuedo-classes are usualy applied to
  links:

```css
a:link {
  /* :link matches an UNVISITED link */
  color: blue;
}

a:hover {
  /* :hover matches when link HOVERED */
  text-decoration: underline;
}

a:visted {
  /* :visited will only match if the user has been to the URL */
  color: purple;
}
```

- another really useful pseudo-class is `:focus`. This matches when an element
  when it **has focus**. This is most commonly associated with _form elements_.
  A form element is _focused_ if it is selected and ready to receive input.
  Focus styles are particularly important for _accesibility_ -- that is, helping
  people with disabilaties use web forms, for instance if someone can only use a
  keyboard, it is very important to show visually which form element is
  currently active, because they can't click into it.

```css
/* :focus styles on form elements are very important 👍 */
input:focus {
  border: 2px solid blue;
}
```

- the **`:first-child`** pseudo selector matches the **first element** among a
  _group of sibling elements._

```html
<style>
  /* match all paragraphs that are first among siblings */
  p:first-child {
    color: red;
  }
</style>
<div>
  <p>I will be red!</p>
  <p>I will be not be red.</p>
</div>
```

- similarly, the `:last-child` pseudo-selector matches the **last element**.
- but what if you wanted to match the **7th** paragraph? Have no fear --
  `:nth-child` has your back. `nth-child` is function-like, it takes an
  _argument_, like this:

```css
p:nth-child(7) {
  /* match the SEVENTH child-paragraph */
  color: red;
}
```

- `:nth-child()` is pretty powerful, it can also accept _expressions in terms of
  `n`_, like `:nth-child(3n)` which will match **every 3rd item**. For instance,
  `:nth-child(2n)` will match every **even** child element.
- `:nth-child()` also accepts **two keywords:** `even` and `odd`:

```css
p:nth-child(odd) {
  color: green;
}
p:nth-child(even) {
  color: red;
}
```

- psuedo-classes can be combined with any other
