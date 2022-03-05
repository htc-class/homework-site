---
path: "/week-26"
---

# Week 26 Homework 💻 🦞

_New stuff we learned this week:_ 🤔

## Git

- `git` is a _version control system_ -- meant to help you keep track of changes to a set of files over time
- `git` was created by _Linus Torvalds_ (the creator of Linux) in order to manage the ongoing development of the Linux kernal. It was especially created to be _fast_, _non-linear_, and _distributed_.
- `git` tracks files within a given _directory_ -- you can start a new project in `git` by typing `git init` in the directory you want to start tracking.
- a `git`-tracked directory is called a **repository** (or **repo**) for short
- `git` works all it's magic by creating and modifying a set of files inside a directory called `.git/` inside the repository directory. The `.git/` dir is created when you `git init`.
- `git` watches the directory you're working in (called the **working tree**) and notices when you add new files, delete files, or make changes. To see what `git` thinks about the current state of things, you use `git status` -- which prints out a status report of new, deleted, modified, and "staged" files
- git will also show you the **differences** between the current version of your files, and the most recent saved (committed) versions, using `git diff`
- "saving" your work in `git` is done by making a **commit** -- a commit is a deliberate set of changes that you want to record, and they have names and descriptions, like "fix bug #32" or "add goat banjo rodeo to title tag". Commits also become points to which you can go back in time. A commit represents _a meaningful unit of work_.
- use `git log` to print out on the screen the commits in your repo. `git log` is like looking at a _chronological list of save points_.
- before you can _commit_ your work (create a _commit_) -- you have to **tell git what changes you want to be included** -- because you might not want to include all of your changes in a commit. To tell `git` what changes to include, you use `git add <path-to-file>`
- any files that you _add_ using `git add` become **staged** -- that is to say they are _designated to go into the next commit_, and they turn GREEN when you type `git status`
  - example: `git add new-file.js` (_stages_ just `new-file.js`)
  - example: `git add .` (_stages_ everything in the directory `.`)
- think of **staging** files as _putting them on a truck, to go out with the next shipment_ 🚚
- once you have some staged files, you're ready to **commit** which saves your work (_sending off the truck_ 🚚). You commit work by running the command `git commit -m "some sweet commit message"`
- a git **branch** is technically just a simple _pointer to a commit_ but it represents _the possibility of a fork in the road_
- to **list all of your current branches** use `git branch`
- to **make a new branch** do: `git branch my-rad-branch`
- to **delete a branch**: `git branch -d my-rad-branch` (safe -- won't delete the branch if there are commits that would be lost)
- to **force-delete a branch**: `git branch -D my-rad-branch` (UN-safe -- will delete the branch even if it means commits would be lost)
- to **switch to another branch** you use the **checkout** command: `git checkout my-rad-branch`. This _changes the files in place in your repo_ which is magically awesome! 🔮🔮

### Git command summary:

- `git init` - initialize a directory to be under git's control, turning it into a _repository_
- `git status` - view the status of your working directory -- a summary of what modified and staged files you have in your current repo
- `git log` - view a list of your commits (most recent first)
- `git diff` - see differences between files and last commit
- `git add <path>` - _stage_ modified files to be included in next commit
- `git commit -m "<message>"` - save all staged changes, storing them with a message
- `git branch` - list all branches
- `git branch <new-branch>` - create a new branch
- `git branch -d <some-branch>` - safely delete a branch
- `git branch -D <some-branch>` - dangerously force-delete a branch
- `git checkout <some-branch>` - checkout a branch

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #24](https://htc-viewer.netlify.com/?id=m8i38Yq1wX4)

---

## Homework Plan:

- 1 day adding to and reviewing all flash cards
- 1 days Node Homework
- 1 day Web Homework
- 2 days touch typing practice
- 1 day watch [CCCS #24](https://htc-viewer.netlify.com/?id=m8i38Yq1wX4)

### Homework day 1

- [ ] flashcard assignment
- [ ] Node Homework

### Homework day 2

- [ ] touch typing practice
- [ ] watch [CCCS #24](https://htc-viewer.netlify.com/?id=m8i38Yq1wX4)

### Homework day 3

- [ ] Web Homework
- [ ] touch typing practice

---

### Flashcard Assignment

---

- add **10** new flaschards in a new `git` category -- they should match the 10 commands in the "Git command summary" section of "New stuff" above
- review your new `git` cards a few times until you have them memorized
- review the rest of your flashcard pile all the way through, repeating any you forgot

---

### Node Homework

---

- slowly and carefully review the "New Stuff" above
- make sure you've done your "Flashcard Assignment" first
- if you get stuck with any of the `Array.*` methods, or node code sharing, review the New Stuff from [week 25](./week-25) and [week 23](./week-23).
- `ssh` into your home dir
- type `git config --global --edit` and hit enter, this will bring up `vim` -- and you'll be able to edit your git _username_ and _email_. Fill out your name and email, removing the `#` comment markers. You only have to do this once per computer you use git on.
- make and move into a new dir: `~/node/week26/`
- type a command to turn this directory into a _git repository_
- take a minute and go "spelunking" into the `.git` directory. Poke around and `cat` some things out, but don't change anything.
- now, create a node script called `subtract.js` that uses `Array.reduce()` to subtract numbers, starting from zero, with these specifications:
  - it should use the `convert.js` module you made last week to convert the arguments from `process.argv` into numbers
  - when complete, it should work like this:

```bash
$ node subtract.js 3 5 10 20
> -38
$ node subtract.js 100
> -100
```

- now, ask `git` what it sees that is new
- put `subtract.js` on the _truck_
- commit your work with a commit message
- view the list of your commits
- next change your `subtract.js` file so that the _first_ numeric argument supplied becomes the initial value (instead of subtracting from zero), so it works like this:

```bash
$ node subtract.js 1000 5 5 5
> 985
$ node subtract 50 1 2 3
> 45
```

- ask `git` what it sees that is new
- ask git to show you the differences in the actual code that you changed
- put your work on the truck, and send it off with a commit message
- view the list of your commits
- make a new node _module_ called `unflat.js`, it should _export_ an array whose members are arrays of numbers -- so it's an array of arrays. It should have at least 3 sub arrays. An example would be: `[[1, 2], [2, 3, 50], [5]]`
- make a new node script called `flatten.js` that:
  - imports the `unflat` module you just created
  - uses `Array.reduce()` to change the array of arrays into a single, flattened array
  - hint: you'll need to use `Array.concat()` inside your _reducer_ function
  - it should console.log out the flattened array, so, using the example array I gave above, the script would work like this:

```bash
$ node flatten.js
> [1, 2, 2, 3, 50, 5]
```

- once you've got it working, put both new files on the git truck, and commit your work
- view the list of your commits
- next, we're going to make a new git "branch" in order to add a new "feature" to our node repo. Create a new branch called "siblings"
- type a command to see all of your branches -- can you tell what branch you're on?
- switch over to the new branch you just created
- list the branches again and confirm you're on the new branch
- quick view your commits -- can you see how git is trying to show you that your new branch currently is pointing to the same commit that the `master` branch is also pointing too? See if you can find that little bit of data in the output of `git log`
- now, on your new branch, make a node script called `siblings.js` that:
  - imports the `/htc-members.js` module file I created last week
  - uses `Array.reduce()` to build up a list of _all siblings_ of all HTC members
  - console.log's them out on one line, (with commas separating), like this: `Charlie, Eden, Ezra, <...>`
  - it should work like this:

```bash
$ node siblings.js
> Charlie, Kiah, Eden, Ezra, Willow, Eden, Ezra, Harriet, Huck, Dale, Win, Huck, Dale, Jamie, Janna, Jason
```

- once you've got it working, add the new file to your staging area, and commit
- view the list of your commits and see if you can see how the branch you're on has now _moved AHEAD_ of the `master` branch
- now, change the `siblings.js` script so that it removes duplicates from this list, so it works like this:

```bash
$ node siblings.js
> Charlie, Kiah, Eden, Ezra, Willow, Harriet, Huck, Dale, Win, Jamie, Janna, Jason
```

- when you've got it working, check `git status` and `git diff` and make sure you like everything you see, then commit.
- now, switch back to the `master` branch
- `ls` to see that the `siblings.js` file is GONE!!!
- then, switch back to the `siblings` branch, and `ls` again -- it's back!!! Phew.
- **Kiah Credit: ✨** - modify the `siblings.js` file so that it only prints out siblings of HTC members that _are not in HTC_, then commit your work.
- **Kiah Credit: ✨** make a new node module file called `array-map.js` that exports a single function: `arrayMap` that re-implments Array.map using Array.reduce under the hood. I should be able to import it and calle it like this: `arrayMap([1, 2, 3], sum, 0)` and it should return `5`.
- **Kiah Credit: ✨** Do the same thing as above, but a new module re-implementing `Array.filter()` using `Array.reduce()` so I could do: `arrayFilter([1, 2, 3], isOdd)` and get back `[1, 3]`. Slack me when you've got both modules made.

---

### Web Homework

---

- `ssh` into your home dir, make and move into a dir: `~/www/week26`
- make your new dir into a git repo
- as you are working on fulfilling the requirements below, pause at least 4 times at logical stopping points to commit your work with meaningful commit messages
- make a webpage called `index.html` that meets the following requirements:
  - the javascript and CSS for it should all be _on the same page_, not in separate files
  - it has a lovely background color
  - it has a small html form with inputs of at least 3 types
  - the form should submit to: `http://server.howtocomputer.link/week24/echo`
  - it should have a button, that, when clicked, prompts the user for a CSS color keyword, and then takes that color keyword and uses it to change the background color of the site.
  - it should have 3 divs that contain an h1 and a p, each with a `git` command as the h1 and a brief description of what that command does
- when you're done doing all of that, you should have 4 commits already
- next, modify your webpage so that the 3 divs containing info about git line up side by side (using flexbox)
- commit your work
- modify it again, so that they only line up side by side when the screen is larger than 768px, and commit your work
- next, extract the javascript into a file at the path `~/www/week26/assets/script.js` and also extract the CSS into a css file at the path `~/www/week26/assets/styles.css`. Modify the `index.html` file so that these two files are connected properly.
- commit your work
- next, make a new branch called `some-changes` and switch to it. On the new branch, change a couple of key parts of the CSS or HTML so that the webpage is visibly different. Commit your work, and view your webpage in a browser.
- now switch back to the `master` branch and refresh the page in your browser, it should look like it did before you made your new branch. Do you see how `nginx` is just serving whatever files are in the directory, and `git` is just switching out the files in place when you change between branches?
- make yet another new branch, this one called `temp-lol`, and switch to that branch. Make a few changes creating bugs and general chaos. Commit your work and view your webpage in a browser. It's OK if your webpage is broken.
- now, switch back to the master branch and delete your `temp-lol` branch.
