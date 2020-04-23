---
path: "/week-30"
---

# Week 30 Homework 💻 🦛

_New stuff we learned this week:_ 🤔

### JSON

- the **JSON** file format is a cross-language file/data format invented by Doug Crockford that is very similar to javascript objects -- in fact JSON stands for _Java Script Object Notation_. It looks very similar to writing a javascript object:

```json
{
  "name": "Jared Henderson",
  "age": 41,
  "beard": true,
  "wife": "Rachel",
  "kids": ["Win", "Harriet", "Dale", "Huck"],
  "address": {
    "city": "Wadsworth",
    "state": "Ohio"
  },
  "favoriteHatType": null
}
```

- notable differences from true javascript objects:
  - _ALL_ property names are wrapped in **"**double-quotes**"**
  - only strings, booleans, objects, arrays, and numbers permitted
  - no functions allowed
  - **_no comments_** (thanks for nothing, Doug)
- JSON files end with the **extension** `.json`, like `package.json`
- JSON has become really popular because it's easy for computers to parse and read, _and_ humans can read it pretty darn easily too!
- every actively-used computer language has a way to read/write JSON
- JSON is the primary data interchange format between modern computer systems (APIs)
- many computer programs use JSON format for their _configuration files_. NPM is one example, they handle all configuration in a file called `package.json`.
- in _javascript_ you can take a properly formatted string of JSON and turn it into a real object with `JSON.parse()`:

```js
const jsonString = '{"name":"jared"}';
const person = JSON.parse(jsonString);
// `person` is now the OBJECT: { name: 'jared' };
console.log(typeof person); // > `object`
```

- in _javascript_ you can create a JSON string out of most anything, by passing it to `JSON.stringify()`:

```js
const person = { name: "jared" };
const jsonString = JSON.stringify(person);
// `jsonString` is `{"name": "jared"}`
```

- or you can create a _pretty-printed_ string, by passing more args to `JSON.stringify()`:

```js
const person = { name: "jared" };
const jsonString = JSON.stringify(person, null, 2);
// `jsonString` has pretty newlines, and indentation:
// {
//  "name": "jared"
// }
```

### Git

- to _checkout a branch from a remote repo_ you use this syntax:

```bash
# git checkout -b <new-branch> <remote>/<remote-branch>
$ git checkout -b feature-x origin/feature-x
```

- ^ this is probably the hardest git command to remember, so memorize hard!

#### .gitignore

- sometimes there are files that you _don't want git to manage_ -- a good example is a `node_modules/` dir. You can **instruct git to ignore directories or files** using a `.gitignore` file, which looks like this:

```bash
# ignore node_modules dir
node_modules/

# ignore my secret passwords!
suuper-secret-passwords.txt

# you can use `*` like in shell-expansion
# ignore all .zip files
*.zip
```

- the `.gitignore` file _itself_ is committed to git.
- generally, each repo has one main `.gitignore` in the root directory, but you can have them in sub-directories too, sometimes that makes good sense.

#### git stash

- **git stash** is like having a handy _junk drawer_ to hold on to some work for a minute that you don't want to throw away, but is getting in the way.
  - `git stash` -- creates a _stash_ of all your uncommitted work
  - `git stash -u` -- includes _un-TRACKED_ work, meaning files not yet even added to git
  - `git stash list` -- shows you a list of your stashes
  - `git stash pop` -- removes the most recent stash and restores it
- restoring a stash _can result in a merge conflict_, if so, git will leave you _conflict resolution markers_ and the stash will stick around.
- stashing is really helpful when doing an _interactive rebase_ in case you forgot some work and want to add it to a previous commit, that is not the latest commit.

#### git rebase (part 1)

- the `git rebase` command has 2 main functions, and I wish they had two separate names.
- the first function (for which the name makes sense) **moves the _base_ commit of a branch to be the tip of another branch**, as shown here _(thanks to Lydia Hallie for sweet git gifs)_:

![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--EIY4OOcE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/dwyukhq8yj2xliq4i50e.gif)

- when you do this kind of rebase, git temporarily sets aside all of your commits, and then **re-plays** them one by one, until it's done.
- if replaying any of your commits causes a merge-conflict, you have to stop and sort that out, but git will help you, telling you to type `git rebase --continue` when you're done.
- you perform this kind of rebase _from the branch you want to reconnect_ - so usually you're on some sort of other branch, like `feat-x` and then _from_ that branch, you do `git rebase master` to keep a linear history.

#### git rebase (part 2)

- the second way you use `git rebase` is **interactively**, and in my opinion, this should be called `git rewrite-history` or something like that, because it has very little to do with a _base_ commit.
- to start an interactive rebase you type `git rebase -i <commit-sha>`. The SHA is always at least one commit back from the HEAD, or else there's no point in rebasing.
- when you do an interactive rebase, git pops up `vim` and lists all the commits from the one you mentioned, up to HEAD, like this:

```bash
pick 359e84bd add my rad feature
pick bab7110d fix kiah bug
pick 5d838859 fix kiah bug, for real this time
pick 5478bc63 more goat banjo rodeo

# Rebase 25be4e70..5478bc63 onto 25be4e70 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# d, drop <commit> = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
```

- the rebase message give you most of the instructions, the key thing is you can edit the column of words that starts with `pick`
- the commits can be re-ordered just by re-arranging the lines
- commits can be _discarded_ by changing `pick` to `drop` (or just by deleting the line)
- the _biggest gotcha_ about interactive rebasing is to realize that the rebase messages shows your commits **in chronological order - oldest to newest** -- this is the reverse of `git log`, which can be confusing at first.
- once you've edited the rebase file to your liking, just do `:wq` and git will go off to work, re-writing the history for you. Often, (like if you squashed commits), while git is finishing the rebase work, it will open up vim again, and prompt you to edit the commit message.

![interactive rebase](https://res.cloudinary.com/practicaldev/image/fetch/s--P6jr7igd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/msofpv7k6rcmpaaefscm.gif)

### Javascript

- sometimes it feels funny (to some people) to create a _named function only to be used once_. Instead, you can make and use a function **with no name -- an ANYONMOUS function**:

```js
function alertLol() {
  alert("LOL");
}
body.addEventListener("mousemove", alertLol);

// this could be re-written with an ANONYMOUS function 🕶
body.addEventListener("mousemove", function() {
  alert("LOL");
});
```

- there's an _even shorter syntax_ for making anonymous functions, called **arrow functions**

```js
// now with an ARROW function
body.addEventListener("mousemove", () => {
  alert("LOL");
});
```

- arrow functions have **a couple syntactic variations:**

```js
// no arguments
() => {
  console.log("arrow functions are cool");
};

// multiple arguments
(first, last) => {
  console.log("Hello", first, last);
};

// if you have ONLY ONE ARGUMENT, you can OMIT the parens
name => {
  console.log("Greetings", name);
};

// if function has ONLY ONE EXPRESSION
// you can ALSO OMIT the curly braces!
name => console.log("Greetings", name);

// with NO curly braces
// the result of the expression is RETURNED
(a, b) => a + b; // returns the sum of `a` and `b`
```

- the _brevity_ of arrow functions really shines when you're doing "dot-chaining" -- stuff like map, filter, reduce:

```js
// the arrow functions make this really readable
// ... that is, AFTER you get used to them
[1, 2, 3]
  .map(num => num * 2)
  .map(num => "Doubled: " + num)
  .map(str => str.toUpperCase())
  .join(" | ");
```

---

## Homework Plan:

- 1 day adding to and reviewing flashcards
- 1 day JSON practice
- 1 day Arrow function practice
- 1 day Web / Git practice
- 2 days touch typing practice
- 2 days watch [CCCS #33](https://htc-viewer.netlify.com/?id=jhXCTbFnK8o)

### Homework day 1

<Checkable id="flash">flashcard assignment</Checkable>
<Checkable id="json">JSON Practice</Checkable>

### Homework day 2

<Checkable id="type-1">touch typing practice</Checkable>
<Checkable id="web-git">Web / Git practice</Checkable>

### Homework day 3

<Checkable id="cccs">Watch CCCS</Checkable>
<Checkable id="arrow">Arrow Function practice</Checkable>
<Checkable id="type-2">touch typing practice</Checkable>

### Homework day 4

<Checkable id="cccs-2">Watch CCCS again</Checkable>

---

### Flashcard Assignment

- add 2 new `js` flashcards
  - `JSON.parse()`
  - `JSON.stringify()`
- add 7 new `git` flashcards
  - `git checkout -b <new-branch> <remote-name>/<remote-branch>`
  - `.gitgnore` file
  - `git stash [-u]`
  - `git stash list`
  - `git stash pop`
  - `git rebase <other-branch>`
  - `git rebase -i <sha>`

---

## JSON Practice

---

- carefully review the "JSON" and "gitignore" section of "New Stuff" above.
- ssh into your home dir, then, make and move into a new dir: `~/node/week30`
- now make a new dir there called `json-practice`, then move into it, and _initialize it as a new git repository_.
- create a new file with vim called `me.json`, and in it I want you to try typing from scratch some JSON. **Without copy/pasting,** recreate the JSON example near the top of the JSON secton of "new stuff", where I make a big JSON structure about myself -- but change all the details so it's about YOU. Change out `wife` and `kids` for an array of `parents` and `siblings`.
- once you're done making your json file, save and close it. Back in the shell you can test if you made good JSON by _piping_ it into a utility called `jq`. Do that by running the command: `cat me.json | jq`. If you get a syntax-highlighted, colorized output, YAY! -- you made good JSON. If you get an error, your JSON is no bueno. Try to fix the error in vim, until `jq` gives you no errors. (Hint: the most common thing you'll mess up _commas_ -- there can be no comma after the _last object property_ or _last array item_ -- look carefully at lines 6, 9, and 11 of my example in "new stuff").
- once you've got valid JSON, commit your `me.json` file.
- next, create a new file with vim called `dream-house.json`. In it, write a valid JSON string that contains details about your mythical "dream house". Some requirements:
  - it should use all possible JSON value types: `string`, `boolean`, `array`, `null`, and `object`
  - it should have at least 12 top-level properties
- validate your `dream-house.json` by piping it into `jq` -- fix any errors until it is valid.
- **Extra Credit: ✨** add a new property to your dream-house JSON called `futureRooms` which is an `array` of _at least 3 objects_ describing details of rooms you plan to add on in future home renovations. Each room object should have at least 4 properties, and use 3 different value types.
- add your `dream-house.json` and commit your work.
- make and checkout a new branch called `js-json`
- create a new node script called `parse-me.js`, when invoked from the shell, it should:
  - use the built-in `fs` module to read the contents of `me.json` into a variable
  - call a javascript function to _parse_ the JSON string, capturing the result into another variable called `me`
  - console.log the `me` variable
  - when executed you should see a multi-colored node console log of an _object_ created by parsing your `me.json`
- when you get it working, commit your work
- now, edit your `parse-me.js` file, add some code so that you turn the `me` variable _BACK into a JSON string_ using another javascript function, and log that string instead of the `me` object. When you execute your script from the shell now, you should get a single string, instead of a multi-colored object.
- the string you see logged out now has lost all of your new lines and spacing, because that's the default setting of `JSON.stringify()`. Modify your script so that the JSON string created is pretty-formatted with new lines and spaces.
- commit your work
- now, check out your `master` branch again.
- edit your `me.json` file so that you change the `age` property to some different number, then commit your work.
- now switch _BACK_ to your `js-json` branch, and invoke the `parse-me.js` script from the shell. You should NOT see your new silly age. Why don't you see it?
- type `git log --all --oneline --decorate --graph` so you can see how your branch diverged from `master` before the commit where you changed your age. Study the graph until it makes sense to you.
- now, do a normal git rebase so that your commits on the `js-json` banch are _re-connected_ to the _tip_ of the `master` branch.
- run `git log --all --oneline --decorate --graph` again so that you can see the result of the rebase
- next, make a script called `connect.js` that does the following
  - reads and parses the JSON from `me.json` and `dream-house.json` file, so you get a `me` variable and a `dreamHouse` variable, both of which are _objects_ created by _parsing_ the JSON file contents.
  - it then, combines the two data structures, adding a `dreamHouse` _property_ on the `me` object, whose _value_ is the `dreamHouse` object you got from
  - finally, it logs out the combined object
- **Extra Credit: ✨** modify the `connect.js` script so that it also _writes_ the combined data to a new file called `combined.json`, and the combined file should be pretty printed.
- commit all your work.
- re-write the history of your git branch so that the two commits from step 13 and 16 (having to do with the first `parse-me.js` script) are _combined into one commit_. Some hints:
  - you'll need to do a `git log` to pick a commit SHA that is _BEFORE_ those to commits, then use that to run `git rebase -i <sha>`
  - read the instructions that pop up carefully
  - you'll need to edit _something_ in the `pick` column... 🤔
  - remember the _order is REVERSED from git log_
  - if you get scared or need a hug: `git rebase --abort`
- switch over to your `master` branch. Ask yourself, if you merge in your `js-json` branch now, what _type_ of merge will you get, "fast-forward" or "regular (3-way)"? Why?
- perform the merge and read the git output so see if you were right
- what type of merge would have have gotten if you _had not done the regular rebase in step 21?_
- **Kiah Credit: ✨** make a node script called `create-json.js` that takes any arbitrary number of _pairs_ from the command line args and spits out a valid JSON string, it should correctly identify and handle 3 data types: `string`, `boolean` and `number`, so that I could use it like this:

```bash
$ node create-json.js foo:bar jim:33 lol:true
> '{"foo":"bar","jim":33,"lol":true}'
```

---

## Git/Web Homework

---

- carefully review the `git` sections of "new stuff" above ^
- ssh into your home dir, make and cd into a new dir: `~/www/week30`
- in that dir, clone a repo that i made for you, the git url is: `/home/ubuntu/www/week30/members/.git`, then `cd` into the new `members` dir which contains the repo.
- quiz: does this git repo have any remotes yet? Answer to yourself, and then type a command to see your git remotes to test if you were right. If you were wrong, do you know why you were wrong?
- run a `git log --oneline` to see the commits that I already made
- create and checkout a new branch called `rewrite-practice`
- on your new branch, rewrite the git history, so that the 4 commits I did near the beginning working on javacript (starting at d0c6165 and ending at 3669273) are combined into a single commit with a new commit message: "set up members js"
- when you're done, view your git log to see that those four commits have been replaced with one.
- Ack! I left in a dumb commit I meant to remove ;) -- it has the commit message `TEMP: add todo.md` -- rewrite the history again so that that entire commit and it's work _never existed_.
- next, the final two commits, adding the goat image, and prepping the student work, you decide you want to reverse the order, so that the goat image commit is _last_. Rewrite the history again, swapping the order of these two commits. Run git log afterwards to make sure it worked.
- now, edit the styles.css file and change the background color to something else
- I have a commit created the stylesheet and set the background to `papayawhip`. Let's pretend that instead of making a _new commit_ with a new background color, you want to re-write the history so that your changes get applied to that commit that I made. To do that, follow these steps:
  - first, we need to temporarily store the work you just did changing the background color. Type a git command that will temporarily store this work somewhere so you can start an interactive rebase
  - then, start an interactive rebase, using a commit SHA before the one about the stylesheet and background color
  - next, in the vim window that pops up, type something to instruct git that you want to change the commit with the message: "stylesheet + background papayawhip", and save and close the file
  - git will rewind the commits, and then pause back in time, when I made that commit. At this point, we need to remove the stashed work from the junk drawer. Type a git command to do this.
  - you might get a merge conflict, if you do -- edit the index.html with vim and fix the conflict
  - once you've applied your stash and resolved any conflicts, we need to "amend" the commit with our work before finishing the interactive rebase. To do that, type `git add styles.css` to add your changes, and then type `git commit --amend` -- this tells git that you want to add your work to the _same commit_. Git will pop up a vim window to let you edit the commit message: change it so it no longer says `papayawhip`
  - see if you can read the output git gives you to figure out the final command you need to type to instruct git to finish the interactive rebase (if you can't figure it out, scroll down to the very last step of this section for the answer)
  - once you've type the command to keep going with the rebase, git should finish successfully
- OK, we're done practicing re-writing history. Check out the master branch again.
- next let's make a new branch to get some real work done, name the new branch `<yourname>-feature`
- add an empty `<ul>` tag under the `<h1>` tag in `index.html`
- then jump over and edit `app.js` -- this is where you'll do the rest of the work.
- I've supplied you with an array of objects in the `window.HTC.members` variable. Use this array to add 6 list items on the page, one for each HTC member. You'll be doing this with javascript, not editing the `index.html` file. Here's a couple of requirements:
  - when you're done, the `<ul>` element you made should contain six `<li>` elements, each one like this: `<li>Member: Tabitha Artinian</li>`
  - start by _mapping over_ `window.HTC.members`, and transform the array of objects into an array of strings, like `"Member: Tabitha Artinian"`
  - then take the array of strings map over them again, this time turning converting the array of strings into an array of DOM nodes, each node should be an `li` element with the `innerHTML` set to be what the string was before
  - finally, use `Array.forEach` on the array of dom nodes, and insert each one into the DOM
- when you've got it working, commit your work
- commit your work
- now, change your code so that each list item says `Student: Tabitha Artinian` or `Teacher: Jared Henderson`, based on who the member is.
- commit your work
- now, add some CSS in the `styles.css` file to make it look snazzy.
- **Extra Credit: ✨** style the "teacher" list item differently than the student list items. (Hint, set a special class on the teacher list item using `node.setAttribute()`)
- **Kiah Credit: ✨** make it so each list item has a _nested_ list containing one list item for each _sibling_ of the HTC member.
- commit your work
- add at least one other student's repo as a git remote, and push your branch to them
- post your web url and git url in slack
- answer to step 12.g.: `git rebase --continue`

---

## Arrow Functions / Node Homework

---

- carefully review the Javascript portion of "new stuff" above
- ssh into your home dir, and cd into the `~/node/week30` dir (create it if you haven't already)
- copy into that dir the file with the path `/arrow-test.js`
- edit the `arrow-test.js` file with vim, following the instructions
- make a new directory called `arrow-fun` and `cd` into it
- initialize it as an empty git repository
- type in the command `npm init -y` to initialize this directory with the `npm` (node package manager) tool
- figure out what file `npm` added for you... what format is it in?
- type a command to pipe the new file into the `jq` utility, and see how much of the file you can understand.
- add and commit the new package.json file
- now, we'll install a node package to help us with our task, to do so, run the command `npm i is-odd`
- run git status to see what's new
- do a `git add .` and then commit ALL the new files
- OOPS! Let's pretend we didn't mean to commit the `node_modules/` dir. Type a command that will eliminate the last commit, but won't throw away any work or files.
- now, create a .gitignore file and make it so that git **ignores the node_modules** directory.
- type `git status` now -- it should only show the `.gitignore` file and the new `package-lock.json` file.
- add these two files and commit your work.
- now, for fun and practice, add a `super-secret.txt` file with some secret thing in it, but hide it from git by modifying your `.gitignore` file. When you type `git status` you should _not see any changes_.
- now, create a file called `array.js` that when invoked from the command line:
  - takes any number of numeric arguments
  - filters the numbers so that only _ODD_ numbers are _kept_
  - _squares_ each odd number (square means multiply by itself)
  - prints out a line for each number that says `The value squared is <X>`
  - uses only ARROW functions (but see hints below!)
  - uses `Array.filter`, `Array.map`, and `Array.forEach` each at least once.
  - so that you can invoke it from the command line like this:

```bash
$ node array.js 2 3 4 5 6
> The value squared is 9
> The value squared is 25
```

- here are some hints to accomplish this task, if you need them:
  - you're going to want to import the `isOdd` function, by sending your tiny Ryan Dahl to go get it for you. Review [week 25 new stuff](https://homework.howtocomputer.link/week-25) if you need to
  - if the arrow function requirement seems hard, start by creating named regular functions for each step, and get the script working that way first, then commit your work and try converting one of the functions to an arrow function. Convert them one by one instead of trying to create them as arrow functions from scratch.
