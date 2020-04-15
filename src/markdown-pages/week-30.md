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
# b, break = stop here (continue rebase later with 'git rebase --continue')
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
- 2 days CHANGE
- 3 days CHANGE
- 1 day watch [CCCS #33](https://htc-viewer.netlify.com/?id=jhXCTbFnK8o)
