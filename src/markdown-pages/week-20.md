---
path: "/week-20"
---

# Week 20 Homework 💻 🐧

_New stuff we learned this week:_ 🤔

### Unix Wizardry

- `$PATH` is a special environment variable that specifies a **list of directories** to look for _executable programs_.
- the directories in your `$PATH` are **separated by a colon** character `:`, so for example if your path is `/usr/bin:/usr/sbin` that means you have _two directories_ where you shell looks for programs: `/usr/bin` and `/usr/sbin`
- a lot of times you'll see directories named `bin` in your path -- this is short for `binary` which is an old-time-computery word for "executable program"
- you can see your `$PATH` the same way you can see _any variable_ in your shell, by using `echo`: `echo $PATH`.
- if you move an executable file into your path, and make sure that it is executable (using `chmod`) then, it becomes a program you can invoke from anywhere
- if the program isn't written in something the computer directly understands (aka machine code), then you can use a special "hint" to tell the computer what other program to use to run your program, called a **shebang** - which consists of `#!` followed by the path to another executable, like this:

```js
#!/usr/local/bin/node

console.log("GOATBANJORODEO");
```

- to find out **exactly where a given program lives on your computer** you can use the command `which` -- like `which ls` or `which mkdir`
- you can **edit your \$PATH** by editing your `~/.bashrc` file -- if you make changes to that file, you have to tell your shell to _re-read_ that file by using the `source` command: `source ~/.bashrc`

### Javascript

- **regular expressions** in javascript is written _super similar to_ `vim` and `sed`, they look like this:

```js
let regex1 = /a/; // match the letter `a`
let regex2 = /a/i; // match the letter `a` or `A`
let regex3 = /a/gi; // match ALL the letters `a` or `A`
let regex4 = /[0-9]+/; // match one or more digits
```

- strings in javascript are essentially objects, and they have a bunch of useful functions attached to them, one of those is the `replace()` function, which works just like `sed` or `perl -pe`:

```js
let myString = "foobar";
let changed = myString.replace(/a/g, "@");
console.log(changed); // logs out `f@@bar`
```

- _capturing_ and _backreferences_ work basically exactly the same, except you use `$1` instead of `\1`:

```js
let myString = "330555-1212";
let fixed = myString.replace(/^(\d{3})/, "($1) ");
console.log(fixed); // logs out `(330) 555-1212'
```

- strings also have a `match` function on them, that lets you test if they **match a regular expression**, like so:

```js
let myString = "foobar";

// returns `null` because string does not start with `x`
myString.match(/^x/);

// returns array of info, because string starts with `f`
myString.match(/^f/);
```

- because `<string>.match()` returns `null` if the regular expression does not match anywhere, you can use it in test expressions, like this:

```js
if (someString.match(/^a/) !== null) {
  console.log("string starts with a!");
}

if (someString.match(/^z/) === null) {
  console.log("string does NOT start with z!");
}
```

- in a browser, the **prompt** function is almost as annoying as **alert** but it is useful as a quick and dirty way to get some input from the user. It works like this:

```js
let color = prompt("What is your favorite color?");
if (color !== "blue") {
  alert('WRONG! You should have said "blue"');
}
```

### CSS

- `vw` and `vh` are cool units that mean **viewport width** and **viewport height**. Think of them as a _percentage_ -- `50vh` means "50% of the height of the viewport"

```css
#some-element {
  height: 100vh;
  width: 33.3333vw;
}
```

- a **background image** can be supplied in css using the following rule syntax:

```CSS
#some-element {
  background-image: url('./path/to/img.jpg');
}
```

- `background-repeat` controls **how the background image repeats** if there is enough space. The default is `repeat` which means "repeat in both directions". But you can also specify `repeat-x`, `repeat-y`, or `no-repeat`.
- `background-position:` specifies **where the bg image is placed**. You can control the image's placement by giving `<x> <y>` values, like so:

```CSS
#some-element {
  background-position: top left;
  background-position: center right;
  background-position: 10% 20%; /* 10% left, 20% top */
  background-position: 30px 15%; /* 30px left, 15% top */
  /* etc... */
}
```

- NOTE: `background-position` is sometimes hard to notice, if the image is _repeating_.
- `background-size` controls the **size of the background** image. You can use the special keywords `cover` or `contain`, or a `<width> <height>` syntax, like this:

```CSS
#some-element {
  background-size: cover; /* cover whole area, cropping */
  background-size: contain; /* big as possible-no crop */
  background-size: 50px auto; /* 50px wide, auto height */
  background-size: 20px 10px; /* 20px wide, 10px high */
}
```

- `background-attachment` controls whether the image **scrolls with the page or stays fixed in place**. The values are `scroll` (which is the default) and `fixed`. This is easiest to see if the background image is on the `<body>` tag, and the content of the webpage requires scrolling.

---

### Unix Homework

---

- slowly and carefully read the "Unix Wizardry" portion of "New Stuff"
- `ssh` into your home dir
- inspect your `$PATH` variable by printing it out to standard out
- read up on the `which` command by typing `man which` 🍔
- use `which` to find the locations of some of your favorite commands
- play around with the `motivate`, `sneeze` and `shbang` programs we made during class a bit
- use `which` to find the location of the three commands from the last step, then figure out which one is written in machine language by using `cat`
- edit your `~/.bashrc` file with vim -- and once you're there, remember the command to go to the bottom of the file, us it to go to the bottom of the file with one letter typed
- at the bottom of the file, study the way the `$PATH` variable is set. Do you understand what's happening?
- if you had a command called `glub` in _both_ your `/bin` and `/usr/sbin` directories, which one would get executed when you typed `glub` in the shell? Why?
- close your `.bashrc` file, and in your home dir, create a directory called `/my-bin`, and `cd` into it. Type a command to print the _absolute_ path to that directory to std out. Make note of the full path
- now, open your `~/.bashrc` file again in `vim` and **edit your \$PATH** so that your shell checks for commands in your new directory created in the last step -- use the full absolute path. You can decide if you in what order it should check your directory.
- save and close your file and vim and echo out your `$PATH` again. Do you see your new directory? Why not? Type a command so that the next time you echo out \$PATH you will see it. (Hint: did you read the "New stuff" carefully?)
- using your new `/my-bin` directory, and what you know about \$PATH and _shebang_ and `chmod` and writing `node` scripts, make a command called `add` that takes two numbers and prints out the sum, you should be able to use it exactly like this:

```bash
$ add 3 4
> 7
```

- edit your `$PATH` again so that your shell looks in the `/htc` directory that I created during class
- come up with a simple command written in javascript, to be executed by `node`, and put it into the `/htc` dir with the correct permissions, so that we can all use it. Slack us what the name of your command is, and how to use it.
- **Extra Credit: ✨** modify your command from the last step so that if someone passes a single argument of `--help` that it prints out instructions on how to use it.
- **Extra Credit: ✨** make a command _written in bash_ called `makecmd` that takes a single argument, which is a path to a file. When it is executed, the script flips the read and execute bit of the filepath passed to it, and copies the file into your `~/my-bin` directory, thus providing a shortcut to making files into commands that you can execute. It should work like this:

```bash
$ makecmd somefile
# no output, but now `somefile` is copied into your PATH
# and is executable so that the following line works:
$ which somefile
> /home/win/my-bin/somefile
```

- **Kiah Credit: ✨** make a command called `cowpath` which is a executable _bash_ script, that makes a cow say your path, with one dir per line, including the current executing users name. Make it so that we can all use it, like this:

```bash
$ cowpath
 _____________________
/ $PATH for willow is \
| - - - - - - - - - - |
| /usr/local/bin      |
| /bin                |
| /sbin               |
| /usr/bin            |
| /usr/sbin           |
| /htc                |
\ /.npm-global/bin    /
 ---------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

---

## Node Homework

---

- slowly and carefully read the `Javascript` portion of the "New Stuff" above.
- make sure you've done your "Regex Homework" first
- make and cd into a new dir: `~/node/week20`
- make a node script called `foo.js` that takes a single argument, and tests to see if that argument starts with `foo` -- if it does the script should print `I love a good foo`, but if it doesn't it should print `More foo please!`, like this:

```bash
$ node foo.js jimjam
> More foo please!
$ node foo.js foobar
> I love a good foo
```

- make a node script called `check-ssn.js` that takes a single argument and checks if it is a valid social security number, which must be in the format `DDD-DD-DDDD` where `D` is a digit. It should work like this:

```bash
$ node check-ssn.js 1234
> That is not a valid SSN!
$ node check-ssn.js 234-23-2345
> Valid SSN
```

- make a node script called `zeroify.js` that takes a single string argument and prints out the same string, but with all of the lowercase `o` characters turned to `0`:

```bash
$ node zeroify.js foooobar
> f0000bar
```

- modify your script so that it works for both uppercase and lowercase o's.
- copy your `zeroify.js` script to a new file called `unvowelify.js` and then edit the new file, changing the functionality so that every vowel (uppercase and lowercase) is replaced with a dash:

```bash
$ node unvowelify.js foobAramY!
> f--b-r-m-!
```

- use a unix `pipe` to send the output of your unvowelify program into `cowsay` so that a cow says it! 🐮
- **Extra Credit: ✨** make a node script called `phone-fmt.js` that takes a 10 digit number. It should reformat the number to look like `(330) 344-4344` if it is a valid phone number and print it out, or if it's not a valid number, it should send an error message, like this:

```bash
$ node phone-fmt.js 123lolNOPE
> That is not a phone number, try again.
$ node phone-fmt.js 3305551234
> (330) 555-1234
```

---

### Web Homework

---

- be sure to review all of the CSS section of "New Stuff" above
- `ssh` into your home dir, and create a new directory `~/www/week20` and `cd` into it
- copy _all of the files_ from the `/www-assets` folder down into this directory
- delete the `boilerplate.html` file
- run this exact command from your shell: `sudo cp /home/ubuntu/www/bgimg/index.html bg.html` -- this will copy over some HTML I wrote for you already into a file called `bg.html`
- view the new file using `vim` -- you'll see that it has a line in the `<head>` referencing a `./style.css` file -- you'll need to create that file. Do so by typing (in normal mode) `:vsplit ./style.css` -- this will open up a second vertical pane where you can create your css stylesheet
- NOTE: for this task, you _may not_ view the my stylesheet, either in the browser or with `vim` or `cat` or anything like that.
- view this URL in your browser: [jareds version](http://jared.howtocomputer.link/bgimg/index.html) - scrolling down to see all of the sections
- your job is to (without peeking at my CSS) - write CSS so that your webpage looks almost exactly like mine, you won't need to edit the HTML file, since you've got my exact HTML
- (if you are doing the extra credit below, skip this step) -- once you've finished the above step, get one of your parents, and show them each section, explaining out loud and teaching them how background images work in CSS.
- **Extra Credit: ✨** make a new webpage that works like this:
  - on the left is a set of four `<h3>` elements, labeling 4 sections, which are: `background-image`, `background-repeat`, `background-position` and `background-size`.
  - under each `<h3>` make a `<ul>` that has _at least 4 options_ listed for that particular CSS value (like `moon.jpg` and `pillars.jpg` for `background-image`, or `cover` and `contain` for `background-size`, etc).
  - on the right side of the screen, next to the 4 sections, there should be a large blue box taking up most of the screen, it should start with a background image of just the moon, up in the upper left of the box.
  - You should be able to click on each of the four options on each of the four lists, and it should live update the CSS of the box at the right, so if I clicked `pillars.jpg` then the background image should change to that other image, etc.
  - all of the list items on the right should live update the right side when clicked
  - as you get partially through the task of making this work, you must extract out at least one helper function to make your code more compact and easy to write
  - when you are finished, get one of your parents to come to the computer, and show them all the parts, and explain aloud, teaching them how background-images in CSS work
- **Kiah Credit: ✨** make these alterations to the webpage from the section above:
  - instead of a list for each section, use a native dropdown element `<select>` -- make it so that when the select dropdown is changed, the CSS updates (hint: you'll need to use the `change` event on the `<select>` element, and the `event` argument, particularly `event.target.value`)
  - make a smaller box that sits in the lower right of the big box at the right of the page, inside this box should be a representation of the CSS code, properly indented. It should live update when the values on the right are changed. (hint: use an HTML `<pre>` tag, and `element.innerHTML` plus string concatenation)
