---
path: "/week-29"
---

# Week 29 Homework 💻 🐡

_New stuff we learned this week:_ 🤔

## Vim

- `<CTRL-a>` will move your cursor to the next _number_ on that line and **Add one to it**.
- `<CTRL-x>` will move your cursor to the next _number_ on that line and **Subtract one from it**.
- both `<CTRL-a>` and `<CTRL-x>` take **an optional number before** that will change how much is added or subtracted, so `33<CTRL-a>` will _add 33 to the next number on the line_.

## Javascript

- `let` is a keyword that:
  - creates a _block-scoped variable_
  - and _permits re-assignment_
- `const` is a keyword that:
  - creates a _block-scoped variable_
  - and _does NOT allow re-assignment_
- `var` is a keyword that:
  - creates a _FUNCTION-scoped variable_
  - and _permits re-assignment_

```js
let foo = "bar";
foo = "baz"; // 😎 `let` permits re-assignment

const jim = "jam";
jim = "lol"; // 💔 ERROR: `const` forbids re-assignment
```

- watch out! `const` doesn't mean _un-changeable_ -- non-primitive types can be mutated, like objects and arrays. You just can't _re-assign_ the variable.

```js
const nums = [1, 2, 3];
// 😎 OK: `const` permits mutation of values
nums.push(4);

const person = { name: "Jared", age: 41 };
// 😎 OK: `const` permits mutation of values
person.age = 42;

// 💔 ERROR: can't re-assign
person = { name: "Rod", age: 55 };
```

- my recommendation: use almost entirely `let` and `const` -- avoid `var`, it is needlessly tricky.

## Git

- git allows you to _share code with other repositories_ using several commands:
  - `git clone <other-repo>` (create a new repo by copying another one)
  - `git fetch <other-repo>` (sync data with other repo, fetch the latest changes)
  - `git pull <other-repo>` (perform a `git fetch` and then automatically merge in changes from same branch on other repo)
- git _references other repositories_ by several types of URLs, based on different protocols, like:
  - `https://some-server.com/friends-library/friends-library.git` _(https)_
  - `git@some-server.com:friends-library/friends-library.git` _(ssh)_
  - `/path/to/some/repo/.git/` _(local filepath)_
- a git **remote** is a _nickname_ or _short label_ for one of those URL types
- you create a remote by typing the command `git remote add <nickname> <URL>`, like this:

```bash
$ git remote add jared /path/to/some-repo/.git/
# creates a new "remote" called "jared"
```

- you can **see a list of your remotes** by typing `git remote` or `git remote -v` (for more information)
- the **git clone** command allows you to create a brand new git repository by _copying some other repository:_ `git clone <other-repo-URL>`
- git clone **creates a new directory** named after the other repository, so you run the command in the _directory one above where you want the new repo to appear_:

```bash
$ cd ~
$ git clone /path/to/some-repo/.git/
# creates a new directory `~/some-repo` which is a git repo
```

- when you use `git clone` git automatically _assigns the other repo the remote name **origin**_.
- you can **rename a remote** using `git remote rename <old-name> <new-name>`

```bash
$ git remote rename origin ham-sandwich
# "origin" remote is now called "ham-sandwich"
```

- when you're ready to **share your work** with a remote repo, use the `git push <remote> <branch>` command. This command _pushes the work in your branch to the remote_. You can think of it like a `git merge` done backwards -- it's like the remote chose to merge in your work.
- if you `git push <remote> <branch>` and the branch does not exist, **git will create it for you when you push**.
- if your `git push` command would not result in a _fast-forward_ merge, git will **reject the push attempt.** You can override git and **force** the merge to happen by adding `--force` or `-f` for short.

## CSS

- for `margin` and `padding` you can supply **all four sides at once** (think of a clock starting at the top and going around ⏰) using this syntax:

```css
div p {
  /* margin: <top> <right> <bottom> <left>; */
  margin: 10px 4px 10px 4px;
}
```

- you can **group unrelated selectors** with a comma `,` to create _shared styles_ like this:

```css
div p,
#foo .bar {
  color: red;
  background: yellow;
}
```

- another way to specify a color in CSS is using `rgb(<red>, <green>, <blue>)` where each color is a number from `0` to `255`. `0` means "none" of that color, and `255` means "as much of that color as possible."
- so `rgb(0, 255, 0)` will be green, because it's like saying "hey mix together _no red_, _all green_, and _no blue_"
- you can use `rgb()` anywhere you specify a color in CSS:

```CSS
div.some-class {
  color: rgb(0, 0, 0); /* black */
  background-color: rgb(255, 0, 0); /* red */
  border-color: rgb(0, 0, 255); /* blue */
}
```

- there's another way to specify color, which is very similar to `rgb` called `rgba` which adds a fourth "argument" -- an **alpha** or transparency setting between 0 (invisible) and 1 (not see-through at all), like this: `rgba(<red>, <green>, <blue>, <alpha>)`:

```CSS
p#goat {
  /* half see-through yellow */
  color: rgba(255, 255, 0, 0.5);
}
```

- things that have slight transparency can be _hard to see,_ depending on what the background is.
- in a similar way, if you want to sent the **transparency of an ENTIRE element** you can use the `opacity` css property. It takes a value from 0 to 1, just like the `a` in `rgba`:

```CSS
input.hard-to-see {
  opacity: 0.2;
}
```

- using only CSS you can create **psuedo-elements** using the `::before` and `::after` pseudo-selectors:

```CSS
div p::before {
  /* the `content` property is REQUIRED */
  content: "♥";
}
```

- the generated content created by `::before` and `::after` are sort of like special HTML tags created _inside_ the element itself, like this:

```html
<p>
  <before>before content goes here</before>
  The normal HTML content.
  <after>before content goes here</after>
</p>
```

- by default, generated content has a display of `inline` but you can style it like any other element:

```css
div p::before {
  content: ""; /* empty content is OK */
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: papayawhip;
}
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #27](https://htc-viewer.netlify.com/?id=TEAtmCYYKZA)

---

## Homework Plan:

- 1 day adding to and reviewing flashcards
- 2 days touch-typing practice
- 3 days Git / CSS homework
- 1 day watch [CCCS #27](https://htc-viewer.netlify.com/?id=TEAtmCYYKZA)

### Homework day 1

<Checkable id="flash">flashcard assignment</Checkable>
<Checkable id="git-css-1">Git / CSS homework #1</Checkable>

### Homework day 2

<Checkable id="type-1">touch typing practice</Checkable>
<Checkable id="git-css-2">Git / CSS homework #2</Checkable>

### Homework day 3

<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="git-css-3">Git / CSS homework #3</Checkable>
<Checkable id="type-2">touch typing practice</Checkable>

---

### Flashcard Assignment

---

- add 2 new `vim` flashcards
  - `<CTRL-a>`
  - `<CTRL-x>`
- add 3 new `javascript` flashcards
  - `let` - your definition should include _scope_ and _re-assignment_
  - `const` - your definition should include _scope_ and _re-assignment_
  - `var` - your definition should include _scope_ and _re-assignment_
- add 7 new flashcards in the `git` category:
  - `git clone <git-url>`
  - `git remote [-v]`
  - `git remote add <nickname> <git-url>`
  - `git remote rename <oldname> <newname>`
  - `git fetch <remote>`
  - `git pull <remote>`
  - `git push <remote> <branch>`
- add 4 new CSS flashcards:
  - `rgb()` color syntax
  - `rgba()` color syntax
  - `opacity` property
  - `::before` and `::after` pseudo-selectors

---

## Git / Css Homework #1

---

- carefully review entire "New Stuff" above ^.
- if you haven't made your `git` flashcards, do that first, and review them until you have the new commands memorized before proceeding.
- `ssh` into your home dir, create and move into a new `~/www/week29` dir.
- I created a git repository that I want you to clone, the url is: `/home/ubuntu/www/week29/earthrise/.git` -- clone my repository.
- after the clone is complete, `ls` to look around - what did `git` create for you?
- do you know why the directory was called `earthrise`?
- `cd` into the new `earthrise/` dir, and do a `git log` to see what commits I've made so far.
- use `ls` to see what files I created.
- type a command to see your git "remotes"
- type in the variation of the command that allows you to see more information about the remotes.
- why do you already have a remote? and why is it named what it is?
- type a git command to rename the remote to "jared"
- type a git command to view your remotes again, it should show `jared` now.
- because we cloned into your web root dir (`~/www`) - you will be able to view the `index.html` file in your browser, go ahead and look at it now.
- let's create a new branch for you to do some work. This time, don't use the shortcut -- create the new branch in _two_ steps, and name the branch _your own name_ (this will be important later to prevent branch name conflicts between students).
- type a command to see all your branches, it should also verify that you've checked out your new branch
- next, create three new empty directories: `imgs/`, `css/` and `js/`.
- type `git status` -- you'll notice that git acts as if you didn't create the empty directories, like they don't exist. 🤔
- edit the website I made, moving the image into the `imgs/` dir, extract the CSS into a new file in the `css/` dir, and move the js into the `js/` dir. Modify the HTML of `index.html` so that it points to the new files correctly.
- once the webpage works the same with the new file organization, run `format` on the html, javascript, and CSS, and _commit all your work_.
- you might have noticed already, but the javascript I wrote has an error in it. Figure out what the error is and fix it, then commit your work again.
- next, look at my CSS and see how I used a bunch of `margin-<direction>` and `padding-<direction>`. Edit those to use the shorthand, collapsing four lines into one to significantly shorten the CSS. Commit your work when you're done.
- next, look some more at my CSS and you'll see that I apply the same styles to both the paragaraphs and the h1 tag. Use one of the things we learned new this week to remove the duplication, creating a single set of shared styles that affect both elements. Commit your work when you're done.
- now, using your powers of `git reset` git rid of the last two commits (but not the work you did) and recommit them as a single commit, with an appropriate commit message.
- spend a few minutes playing with margin and padding on the `.overlay` element - but do it using the new `<CTRL-a>` and `<CTRL-x>` trick you learned. Be sure to use the variation where you type a number first, to cement that in your mind.
- use git commands to throw away any changes you made while experimenting with the vim commands in the previous step.
- next, it would be nice if the white overlay div wasn't blocking the view of the image behind it. Experiment with _both_ `opacity` and using `rgba` color values to achieve this goal. (hint: you might want to disable my javascript in order to do this). When you have it looking good, commit your work.
- now, you'll share your work with my repository. Review the `git push` command, and push your branch up to my remote repository (hint: this is where you'll probably need to use `sudo`).
- Slack the #homework channel when you've pushed your branch, and I'll check out your branch in my repo, so that your changes are visible from my web page.
- next, spend a little time modifying the webpage using CSS or javascript, so that it is even cooler. Commit your work.
- **Extra Credit: ✨** modify the javascript I wrote so that it slowly changes the alpha transparency of the overlay background color, instead of the blue value. Commit your work.
- **Kiah Credit: ✨** modify the javascript again, so that the opacity only cycles when the user has their mouse over the overlay.
- You may have to wait for to do these final steps -- but after at least one other of the students has slacked that they pushed their branch to my repo, type a git command to add a new remote which is _their_ repository. (Hint: their git url will be exactly like the one you used to clone, except changing out `ubuntu` for their username).
- once you have added another student's repo as a remote, use `git fetch` to retrieve all of their work, syncing your local git repo to have all their commits and branches.
- after you git fetch, you should be able to checkout their branch (which should be named their name). Check out their branch and view it in your browser.
- check out your own named branch again, and then _push_ your branch to their remote, so they can see your work too.

---

## Git / CSS Homework #2

---

- `ssh` into your home dir, then cd into the `~/www/week29` dir you made for part 1 of the homework.
- make a new directory, named whatever you want, and `cd` into it, then initialize a new git repository in that directory.
- create a new `index.html` file with vim, and **from memory** try to create the full, valid structure of an HTML page. When you finish, `cat` out the `/www-assets/boilerplate.html` file to check your work, and fix anything you forgot.
- in your html, add 3 divs, each with an `h1` tag, and 3 paragraph tags below it. The h1 in each section should say `let`, `const`, or `var`, and the 3 paragraph tags in each div should have 3 statements about that keyword - how it's scoped, whether it permits re-assignment, and when to use it. When you've got the HTML created, commit your work.
- use the css `::before` psuedo-selector to add some sort of a symbol or character _before_ each fact (paragraph). Style the generated content so it's a different color from the text following, and has a little spacing to make it look nice.
- commit your work
- next, use both `before` and `after` selectors to wrap each keyword (let, var, const) with angle brackets, so it looks like `<let>`, `<var>`, and `<const>`, then commit your work.
- now, using Flexbox and media queries, make it so that the 3 divs are stacked on top of each other, but at a certain breakpoint, they line up side by side. Commit your work.
- set the background color of the whole page to some color, using `rgb` notation.
- next, set the background color of all 3 sections to have some semi-transparent color, using `rgba` format. This should allow you to see the body background through it slightly.
- next, adjust the margin and padding of your 3 sections until they are spread apart from each other a little bit, and that the text of each section has some breathing room inside of it's colored background.
- commit your work.
- **Extra Credit: ✨** using only CSS, make it so that each section box has a colored strip at the bottom of it, that has the characters `:wq` centered inside of it.
- take a few minutes (but don't get carried away) modifying the CSS of your page so that it looks sort of like a terminal - dark background with greens and whites, etc.
- commit your work.
- **Extra Credit: ✨** Using only a single new element in your HTML, try to make the shape of a Micky-Mouse silhouette - a big round circle, with two smaller circles positioned as ears. Only one element is allowed, but you can use as much CSS as you want.
- When you're done, post your web url and your git url (your git url is the full path to the repo's `.git` folder) in the #homework channel of slack.

---

## Git / CSS Homework #3

---

- for each student in the class, after they finish Homework #2 and post their git url, clone their repository into your own `~/www/week29` dir.
- view their webpage at your own URL.
- rename their remote from `origin` to their name.
- make a new branch and switch to it (this time, using only **one git command**)
- fix some bugs if you see them, or make some stylistic improvements, changing their site distinctly in a few ways.
- push your branch back to their remote, and slack them back in the homework channel so they can checkout your branch and try it out.
- When people push branches to your repository, merge at least one of them into your master branch, as if you were "accepting your changes". If you do this early enough (or someone else does their homework late enough) then people afterwards when they clone your repo, will get your work, _and_ the work from the other student that you merged in.
