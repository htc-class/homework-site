---
path: "/week-29"
---

# Week 29 Homework 💻 🐡

_New stuff we learned this week:_ 🤔

## Git

- git allows you to _share code with other repositories_ using several commands:
  - `git clone <other-repo>` (create a new repo by copying another one)
  - `git fetch <other-repo>` (sync data with other repo, fetch the latest changes)
  - `git pull <other-repo>` (perform a `git fetch` and then automatically merge in changes form same branch on other repo)
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
