---
path: "/week-32"
---

# Week 32 Homework 💻 🐭

_New stuff we learned this week:_

### Unix Wizardry

- typing `<Ctrl+r>` activates a **search mode into your history of shell commands**. Press it then start typing a _semi-unique_ word or combination of letters to _instantly find a command you've recently run_. Type `<Enter>` to run the command you see appear, or `<Ctrl+c>` to cancel
- typine `^<find>^<replace>` will **re-run the most recent shell command substituting `<find>` for `<replace>`,** like so:

```bash
$ cat /this/is/a/reall/long/path/i/dont/want/to/retype.js
> # some output from `cat`
$ ^cat^vim
$ vim /this/is/a/reall/long/path/i/dont/want/to/retype.js
# the line above runs automatically, because of `^cat^vim`
```

### VSCode

- VSCode is a free text-editor/lightweight IDE made by Microsoft. It's become so good that almost everyone uses it now who develops in the web world, and in many other worlds as well.
- just because VSCode allows you to use your mouse, doesn't mean you should do so! Treat it like vim. Every time you use your mouse, you should feel a small wave of shame and sadness.
- once you pull down my VSCode settings, you'll have a bunch of nice extensions installed, and a bunch of good keyboard shortcuts (many of which are vim-inspired). Definitely focus on learning the main keyboard shortcuts:
  - _NOTE_ in the examples below, I'm putting `Cmd` as short for Mac's _Command_ key, but if you're on Windows or Linux, you would use the _Control_ key instead, so think of `Cmd` as meaning "Command or Control"
  - _NOTE #2_ - but, if I say that the shortcut is `Ctrl` -- that means the shortcut uses the _Control_ key **on Mac, Windows and Linux**.
  - `<Cmd+Shift+P>` - open up the **Command Pallete**, in which you can start typing to see lots of wild stuff vscode can do for you
  - `<Cmd+t>` opens up the **Fuzzy finder** -- it allows you to quickly switch between files.
  - once you have the Fuzzy finder open and activated, `<Ctrl+j>` and `<Ctrl+k>` (like vim!) move your selection up and down.
  - `<Cmd+b>` toggles the visibility of the main sidebar
  - `<Ctrl+s>` toggles the visibility of the "activity bar"
  - `<Ctrl+BACKTICK>` toggles **and focuses** the integrated terminal (BACKTICK is `)
  - `<Cmd+j>` toggles the whole bottom pane
  - pressing `<Cmd+/>` will _comment out_ whatver line or lines you have selected
- When you're editing a file, all your `vim` commands will **just work**. (Well, almost everything).
- Vscode has the ability to let us edit code **through ssh**, so that we're running vscode on our computer, but we're actually working on a different computer that we have made an ssh connection to. We're going to use the feature heavily, because we'll still be doing our development on the HTC virtual machine, but we'll have all the goodies that vscode gives us.
- vscode comes with a sweet **binary executable file** which we can use from our terminal to type `code .` or `code ~/some/path` and vscode will open up that folder for you to work in.

## HTML

- the `<header>` HTML tag is is used to define the _header_ for a document or a section. It's a _block-level_ element. Often there is just one on a page, but there can also be sub-`<header>` tags if it makes sense for another chunk of your webpage to also have a _header_.
- the `<nav>` HTML tag is a _block-level_ element represents a section of a page whose purpose is to _provide navigation links,_ either within the current document or to other documents. Common examples of navigation sections are menus and tables of contents.
- the `<footer>` HTML tag is a _block-level_ element that represents a _footer_ for a webpage, or a section of a webpage. A footer typically contains information about the author of the section, copyright data or links to related pages.
- the `<section>` HTML tag is a _block-level_ element used to group together **related elements.** It's sort of like a div, but has a bit more _meaning_, in that it groups together something into a kind of a logical unit.
- the `<main>` HTML tag is a _block-level_ element that represents the dominant, or most-important **content** of the entire webpage.
- the `<article>` HTML tag is a _block-level_ element that represents a self-contained **thing** on a website that **would make sense on it's own**, if it got snipped out and handed to someone by itself. Examples include: a forum post, a magazine or newspaper article, a product that can be purchased, or a blog post.
- the `<aside>` HTML tag is a _block-level_ element that represents a section of a page that consists of content that is only **somewhat, or indirectly related to the main content**, and which could be considered separate from that content. Such sections are often represented as _sidebars_ in printed typography. A good rule of thumb is that a webpage should still be _totally usable and make sense **if you removed the aside**._

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #29](https://htc-viewer.netlify.com/?id=AEaKrq3SpW8)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan:

- 1 day something_goes_here
- 2 day something_goes_here
- 1 day something_goes_here
- 1 day something_goes_here
- 2 day something_goes_here
- 2 days watch [CCCS #29](https://htc-viewer.netlify.com/?id=AEaKrq3SpW8)

---

### Flashcard Assignment

- add 2 new `unix` flashcards:
  - `<Ctrl-r>`
  - `^<find>^<replace>`
- add 7 new flashcards in a new category called `vscode`. **IMPORTANT** make sure you write down the correct key for _your_ computer: if you're not on a Mac, change `Cmd` to be `Ctrl`.
  - `<Cmd+Shift+P>`
  - `<Cmd+t>`
  - `<Cmd+b>`
  - `<Ctrl+s>`
  - `<Ctrl+BACKTICK>`
  - `<Cmd+j>`
  - `<Cmd+/>`
- add 7 new flashcards in the `html` category, for:
  - `<header>`
  - `<nav>`
  - `<footer>`
  - `<section>`
  - `<main>`
  - `<article>`
  - `<aside>`

---
