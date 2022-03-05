---
path: "/week-17"
---

# Week 17 Homework 💻 😷

Instead of regular homework this week, I'm just going to give you a handful of tasks to review and solidify some of the stuff we've been learning. You can make all of the webpages in `~/www/week17` and the node exercises you can do in `~/node/week17`.

---

#### Web Task #1: changing animals

Make a webpage that has a picture of an animal, and every second for four seconds the image changes to a different animal

---

#### Web Task #2: floating/dissappearing image

Make a webpage that has a long paragraph of text with a picture of an image _floated_ to the top left, and when you click the _paragraph_ the image floats to the top right, and when you click the _image_ the image dissappears

---

#### Web Task #3: moving squares

Make a webpage that has four colored squares, stacked on top of each other, each 100px by 100px, but different colors. make it so that after 5 seconds, the squares move to the four corners of the webpage, and then after 5 more seconds they line up side by side

---

#### EXTRA CREDIT ✨ Web Task #4: countdown to goat

Make a webpage that displays the number `30` when loaded, and each second, the number decreases until it hits zero, at which point the webpage turns red and a goat appears. (Hint: there is a function in javascript called `setInterval` that works exactly like `setTimeout` except it runs the function over and over again, so `setInterval(foo, 1000)` runs the `foo` function every one second).

---

#### CLI Task #1: reviewing commands

`ssh` into your home dir, and make a new directory called `cli-practice` and then cd into it. Then, pull out all of your flashcards labeled `SHELL` and work through them each, carefully practicing their usage, creating as many temporary files and directories as you need for practice sake. For each each command:

- view the `man` page (if it has one)
- practice using different _flags_ (if applicable)
- if it's not a command, but just a concept, figure out a couple ways to practice the concept
- if it's a command that accepts _variadic_ arguments, practice it with multiple arguments
- if it makes sense, see if you can figure out and practice using the command (or concept) together with _shell expansion_

---

#### Node Task #1: hashtag

Make a node.js script called `hashtag.js` that takes 3 arguments from the command line and smushes them together with a hashtag in front, so that if I do:

```bash
$ node hashtag.js goat banjo rodeo
```

It should console.log out `#goatbanjorodeo`.

---

#### Node Task #2: knock knock

Make a node.js script called `knock-knock.js` that tells a knock-knock joke by printing lines to standard out, but there should be a second or so between each line, so it feels like it's telling you a real joke

---

#### EXTRA CREDIT ✨ Node Task #3: temperature

Make a node.js script so that you can pass a temperature in Fahrenheight, and it prints out the same temperature in celcius (the formula is `c = (f - 32) x (5 / 9)`) - it should work like this:

```bash
$ node temp.js 32
> 32 degrees Fahrenheight is 0 degrees Celcius
```
