---
path: "/week-27"
---

# Week 27 Homework 💻 🐒

_New stuff we learned this week:_

## Git

- because a _branch_ in git is just a _pointer to a commit_, more than one branch can point to a single commit. Git **keeps track of what branch is checked out** with a pointer called **HEAD**.

![alt](https://i.stack.imgur.com/eAo7u.png)

- `git merge <other-branch>` _merges another branch_ into **the branch you have checked out**. Like Harriet said, it's a _Lasso_. 🤠
- if no more commits have been added to the branch you are merging _into_ -- git can do a **fast forward merge** - where it just moves up the branch and HEAD pointer to the end of the merged-in branch.

![alt](https://www.bogotobogo.com/cplusplus/images/Git/Fast_Forward_Merge/FastForwardMerge.png)

- if git can't do a "Fast-forward" merge, a **merge commit** is created, with TWO parents, unifying the two branches:

![alt](https://www.bogotobogo.com/cplusplus/images/Git/Fast_Forward_Merge/TypicalMerge.png)

- if git panics while merging because _both branches touched the same line_ -- it will inform you that a **conflict** has occurred, and will _change the file/s_ adding **conflict markers**, which look like this:

```HTML
<p>
<<<<<<<< HEAD
  Virtuozo Landscaping
=========
  Virtuoso Landscaping & Tennis Camp
>>>>>>>>> feature-x
</p>
```

- to **resolve a git conflict** you must edit the file, manually resolving the differences, and _removing the conflict markers_, **then** `git add <conflicted-file>`.
- if you get a _git conflict_ while merging, git won't automatically create the _merge commit_ -- you will have to finish the job by doing `git commit -m "merge in feature-x"`.
- `git log --all` shows information about commits from other branches and stuff
- `git log --oneline` gives you a more _succinct summary of your git statuses_.
- `git log --graph` makes git _draw cool graphs_
- here's an example of running `git log --oneline --graph` on the teaching repo we were using (I have no idea why it wasn't working during class, lol):

![alt](http://screenshots.pro.photo/jared/2020-03-24_11-03-16.png)

- one handy git shortcut is `git commit -am "<commit message>"` -- the `-am` part is the same as saying "add all the modified files to the truck at the same time". One _GOTCHA_ -- if a file is _brand new_, never been tracked by git, then `git commit -am` won't add it, you'll have to do `git add .` then `git commit -m`.
- another handy shortcut is doing `git checkout -b <new-branch>` - this means "create a new branch _and_ switch to it". Think of the `-b` as meaning "I know it doesn't exist yet, create it for me".

## CSS

- the `:hover` css _psuedo-class_ matches when the user is hovering over an element:

```CSS
/* matches only <a> elements when they are BEING HOVERED */
a:hover {
  color: orange;
}
```

- you can select _children_ of hovered things, like this:

```CSS
/* turn <li> bg to pink when #menu div HOVERED */
div#menu:hover li {
  background-color: pink;
}
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #25](https://htc-viewer.netlify.com/?id=M5BZou6C01w)

---

## Homework Plan:

- 1 day adding to and reviewing all flash cards
- 1 Vim homework
- 1 day Web/Git Homework
- 1 day prepping Student Assignment
- 1 day doing Student Assignments
- 2 days touch typing practice
- 1 day watch [CCCS #25](https://htc-viewer.netlify.com/?id=M5BZou6C01w)

### Homework day 1

- [ ] flashcard assignment
- [ ] vim homework

### Homework day 2

- [ ] prepare Student Assignment
- [ ] touch typing practice

### Homework day 3

- [ ] Web/git assignment
- [ ] touch typing practice

### Homework day 4

- [ ] do other Student Assignments
- [ ] watch [CCCS #25](https://htc-viewer.netlify.com/?id=M5BZou6C01w)

---

### Flashcard Assignment

---

- add 6 new flashcards in the `git` category:
  - `git merge <other-branch>`
  - `git commit -am "<commit-message>"` (the -a shortcut)
  - `git checkout -b <new-branch>` (the -b flag shortcut)
  - `git log --oneline`
  - `git log --graph`
  - `git log --all`
- add 1 new flashcard in the CSS category for `:hover`
- carefully review all of your flashcards, stopping to reinforce any you get wrong

---

### Vim Assignment

---

- pull out all of your `vim` flashcards
- review each one
- `ssh` into your home dir
- do the complete `vimtutor`, with these qualifications:

  - you need to accomplish all of the _tasks_ vimtutor gives you, but you don't have to do them _the WAY_ they say to do it, if you know a better, faster way, use it
  - you can skip the part about customizing the .vimrc near the end
  - after you're done, check your vim flashcards -- if there are any of them that you _didn't_ use, practice those commands for 90 seconds or so to reinforce them

---

### Student Assignment

---

- using your flashcards, or by reviewing old weeks "new stuff" (posted on the homework website), pick a topic that we haven't worked much on in recent weeks, that you think we should "dust off" and practice a little. It could be something like CSS Floats, or `chmod` or regular expressions, or _ANYTHING!_
- find that concept in the "new stuff" and review it and practice it a little bit
- come up with a short-ish homework assignment for the rest of the students to do to practice that concept. It should several clearly described steps.
- post your Assignment in Slack so the other students can get to work! (me too, I'll do all of them 👍)
- NOTE: you may announce what topic you'd like to use in Slack to let other students know your intention, but other students are still free to choose a similar or overlapping topic, if they want.

---

### Web/Git Assignment

---

- Carefully review all of the "New Stuff" above -- make sure you stare at the pictures a little bit to be sure they make sense, OK?
- `ssh` into your home dir, make and move into a new dir: `~/www/week27/`
- initialize that new directory as a `git` repository
- create a new webpage called `hovers.html` - in it, use the css `:hover` psuedo class one time, to experiment with how it works.
- check your status with `git status`
- add your new file with `git add`
- commit your work
- next, think of a totally different way of using the `:hover` selector, and implement your idea
- use `git diff` to check your changes
- stage your changes, but _DON'T COMMIT_ yet!!!
- sometimes, when git needs text or information from you, it will pop up `vim` -- to practice this, you can make your next commit **without supplying a message** -- git will pop up vim so you can enter the message, do do that, type exactly (and only) `git commit` and press enter. `vim` will pop up -- write a commit message and tell git you're done by a `:wq`.
- make a new branch and check it out _in a single command_
- experiment with `git log --oneline` and `git log --graph` -- do you understand all of the data git is trying to tell you? See if you can make sense of all of the information.
- what is `HEAD` right now? Can you tell from looking at `git log`?
- carefully "spelunk" into your `.git/` directory and see if you can find where Linus Torvalds stores `HEAD` -- and cat it out when you find it.
- now, add a third example of using the `:hover` class -- it should work like the _second_ example I give in the CSS section, where something happens _inside of the hovered element, to it's children_.
- use `git diff` to view your changes
- _in one command_ add and commit your work
- now, move back to the `master` branch and merge in the branch you just created -- take note: git should be able to create a "fast-forward" merge, if doesn't say that you probably did something wrong.
- do a `git log` -- is there a new _merge commit_? Why or why not? 🤔
- delete the branch you created after it is merged.
- next, we're going to set you up for a non-fast-forward merge. To do that, follow these steps:
- create and check out a new branch
- on that new branch, make some change to your webpage, and commit your work
- then, move back to `<master>` and do some _unrelated work_ there, and commit. Don't work on the same lines of your files, that would create a conflict, and we're going to do that _next_.
- before you merge in your new branch, use `git log --graph --all` to visualize what's happening
- merge in your new branch, it should _not_ say "fast-forward"
- use `git log --graph --oneline --all` to see the graph of your commits
- repeat steps 23-27, but this time **do work in both branches on the SAME LINE OF CODE** -- this will create a merge conflict. When you get to step 25:
  - use `vim` to edit the conflicting file `git` is complaining about
  - then mark it as resolved by `git add`-ing it
  - then, manually make a merge commit
- use `git log --graph --oneline --all` to see the graph of your commits
- take a screenshot of your git commit graph and post it in slack
- use git log to show your old commits, then copy one of the short (or long) SHA's from an old commit
- detach your HEAD by checking out that old commit: `git checkout <SHA>`
- read and laugh at the output git gives you. When you're ready to re-attach your head, checkout master again by doing `git checkout master`. Phew!
