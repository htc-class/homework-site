---
path: "/year-2/summer-1"
---

# Year #2, Summer #1 💻 🗻

_New stuff we learned this week:_

## Vim Macros

- To start recording type `q<char>`
- Then, record a sequence of movements. End by typing `q` (in normal mode).
- To re-run your macro, type `@<char>`.
- To re-run the last macro you ran, you can use the shortcut: `@@`.
- You can run a macro `X` number of times, with `<num>@<char>`, like `33@q`.

## Beginner JavaScripter's Guide to Go

- Go is a C-based language that is garbage-collected, and statically typed. It
  was developed at Google partially by the originator of the C language, and has
  become widely popular. It is fairly minimal, with an emphasis on a rich and
  well-designed standard library.

```go
import "fmt"

func isAdmin(name string) bool {
  return name == "jared"
}

name := "tabitha"
if isAdmin(tabitha) {
  fmt.Printf("Hello, %s\n", name)
}
```

- Go uses the **walrus operator** `:=` as a shorthand for _declaring AND
  assigning_ a variable:

```go
var foo int // declare an int variable named `foo`
foo = 32    // set the `foo` variable to equal 32

// the above is the same as:
foo := 32 // declare a foo variable, setting it to 32
```

- Go has arrays, but much more commonly used is a **slice**. You don't have to
  understand the difference, you can just think of a slice as an array. For
  instance, this TypeScript:

```ts
let ages: number[] = [42, 16, 14, 12];
```

- would translate into this Go snippet:

```go
ages := []int{42, 16, 14, 12}
```

- In Go, you sometimes want to create a slice without filling it up, which you
  would do using the `make()` function:

```go
// make a slice (array) with spots for 4 integers
ages := make([]int, 4)

ages[0] = 42
ages[1] = 16
ages[2] = 14
ages[3] = 12
```

- you can get **sub-ranges** of slices (arrays) using _bracket-notation_ plus
  the `:`, like Python:

```go
ages[1:3]
// > [16, 14]
```

- Go has **functions**, denoted by the keyword `func`. Their syntax is very
  similar to TypeScript, except without the **colons**:

```go
func add(x int, y int) int {
  return x + y
}
```

- Go has a concept called a `Struct`, which is _sort-of_ like a javascript
  **object**.

```go
// you MUST declare the struct `type` first
type Person struct {
  name     string
  age      int
  hasBeard bool
}

// then you can make one
jared := Person{
  name: "Jared",
  age: 42,
  hasBeard: true
}

// or written on one line:
kiah: = Person{name: "Kiah", age: 16}
```

- Structs in go can have _methods_, but they are defined after the main type
  definition with kind of a funky syntax:

```go
type Rect struct {
  width int
  height int
}

// here we add a METHOD to the `Rect` struct
func (r *rect) area() int {
  return r.width * r.height
}

// [...] and then use it...
square := Rect{width: 10, height: 10}
square.area()
// > 100
```

- Go uses **capital letters** to denote what is _exported_:

```go
// math.go

// this function will NOT be exported
func add(x int, y int) int {
	return x + y
}

// this function WILL be exported, because of capital `A`
func Add5(x int) int {
  return add(x, 5)
}
```

- Go functions can return multiple values, which look sort of like tuples, if
  you squint:

```go
func getPerson(name string) (hasBeard bool, age int) {
  if name == "jared" {
    return true, 42
  } else if name == "willow" {
    return false, 14
  }
  return false, 0
}

hasBeard, age := getPerson("win")
if hasBeard {
  // do something
}
```

- In Go, you use the `range` keyword to _iterate over elements_, sort of like a
  `for...of` loop in javascript:

```go
nums := []int{2, 3, 4}
sum := 0
for index, num := range nums {
    sum += num
}

sum
// 9
```

- Notice in the above example we didn't use the `index` of each item. To
  indicate that we don't care about that variable, a go programmer would use the
  `_` variable name, which means "ignore":

```go
// ignore the `index`
for _, num := range nums {
    sum += num
}
```

- Go has a built-in concept called a **map**, which is like a `Record<T, U>` in
  typescript. In Go it's written like this:

```go
ages := map[string]int{
  "tabitha": 13,
  "kiah": 16,
  "jared": 42
}
```

- Once you have a **map**, like the above example, you can iterate over them
  with the `range` keyword, like so:

```go
for name, age := range ages {
  // do something with `name` and `age`
}
```

- or, to access something out of a map, you do like this:

```go
age, ok := ages["tabitha"]
// age=3, ok=true

// but if you try to get a nonexistent item out of
// a map, you get `nil` and false
age, ok := ages["santa claus"]
// age=nil, ok=false
```

- in Go, the way you express an `any` type, is `interface{}`

---

## Homework Plan (3 or 4 weeks)

- 1 day New Flashcards Assignment - (5 - 10 minutes)
- Monkey Assignment #1 - (< 30 minutes total)
- Monkey Assignment #2 - (1 - 1.5 hrs)
- Monkey Assignment #3 - (1 - 1.5 hrs, ???)
- 3 days review all flashcards in your app.
- 2 days touch typing practice
- 1 day Personal Project assignment
- **6** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="monkey-1">Monkey Assignment #1 🐒</Checkable>

<Checkable id="monkey-2">Monkey Assignment #2 🐒</Checkable>

<Checkable id="monkey-3">Monkey Assignment #3 🐒</Checkable>

<Checkable id="flash-new">New Flashcards Assignment</Checkable>

<Checkable id="flash-review-1">Review Flashcards #1</Checkable>

<Checkable id="flash-review-2">Review Flashcards #2</Checkable>

<Checkable id="flash-review-3">Review Flashcards #3</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="next-personal">Personal Project Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-5">Execute Program #5</Checkable>

<Checkable id="xp-6">Execute Program #6</Checkable>

---

## Monkey #1 🐒

---

- Slowly and carefully read through the **Introduction** of "Writing an
  Interpreter in Go" (hereafter known as "the book" or "the monkey book"). Try
  to understand as much as you can, but don't sweat it if some of the stuff he
  says goes a little over your head.
- Your parents are buying you a copy of the Monkey book, if you haven't gotten
  it yet, and want to start, you can use
  [this pdf version](http://jared.howtocomputer.link/monkey/monkey.pdf) for now.
  Please download a copy of this PDF, since I'm going to delete it very soon, so
  it's not publicly available, since it is the author's copyrighted book -- I'm
  only temporarily putting it up there while you guys wait for your purchased
  copies to arrive.
- next, I made a 15 minute video of me _setting up our monkey repo_. This is
  something I normally do on my own and don't show you, but you guys are ready
  to start seeing under the hood, so you know how this stuff works. You're going
  to watch this video, but you won't have to do any of the work I did, for this
  video, I just want you to watch. The link is
  [here](http://jared.howtocomputer.link/monkey/01-setup.mp4). Be sure to
  _fullscreen_ the video so you can see my code clearly, and please let me know
  if the fonts are too small, I'll adjust future videos if so.
- That's all for this assignment.

---

## Monkey #2 🐒

---

- slowly and very carefully, read the "Go" section of "New Stuff" ^^^. Pause and
  try to understand all of the code snippets.
- SSH into the htc computer, and clone
  [this repo](https://gitlab.howtocomputer.link/htc/monkey-typescript).
- type a shell command to make it so you can start over as if you hadn't git
  cloned, as if this were a brand new git repo.
- git init and create a new repo on Gitlab for yourself. Add the Gitlab repo as
  a remote, and push up the master branch.
- npm install and run your tests, you should see a single passing test.
- Slowly and carefully read the beginning of chapter 1 of the book, stopping
  part-way through page 16, where it says
  `Running the tests, we can see that they pass...`. Try to understand the
  **go** code as much as you can, but don't worry if you don't get all of it.
  You'll find that you get better at understanding go code the more you
  practice.
- Starting in Monkey homework #3 (the next one after this), you'll be trying to
  code the section _first_, before you watch the video. But because getting the
  project started is so difficult, for this assignment you're actually going to
  _watch my video first,_ and then just type in the code that I wrote.
- **Very optional extra credit**: If you're feeling adventurous, you can try to
  implement in Typescript/Jest the chunk of the book you just read. Don't be
  discouraged if you find it too hard and give up though, but it might be fun to
  try.
- Next, watch two videos of me working up through page 16.4.
  [First video](http://jared.howtocomputer.link/monkey/02-begin-lexing.mp4),
  [Second video.](http://jared.howtocomputer.link/monkey/03-begin-lexing-2.mp4)
- After watching the videos, pull open your Monkey repo in vscode, **create a
  new branch**, and type in all the code I added in the homework. I don't care
  if you first try to do it from memory and then check against my video, or if
  you just scrub to the right spots of the video and pause it and copy. But get
  all the code written and the tests passing. It's important you do this
  yourself, because (apart from the project setup) I want you to understand
  every line of code in this project as much as possible, so I want you to type
  it all with your own fingers.
- Double-check that your tests pass, and submit a MR to yourself. Post the MR in
  slack so I can review it.

---

## Monkey #3 🐒

---

- One more time, I want you to slowly and carefully review the "Go" section of
  "New Stuff" above ^^^.
- Also, read and review the "Vim Macros" section as well.
- If you haven't done your "New Flashcards" assignment yet, do that right now
  (should only take 5 minutes).
- Make sure you've addressed any feedback I give you on your Monkey #2
  assignment MR, and merge that branch. Then pull from master, delete your
  branch from assignment 2, and **make a new branch**.
- Slowly and carefully read the monkey book, starting at page 16.4 (where we
  left off), up through the _end of section 1.3_ (which ends at page 21.1).
  Again, try to understand what he's doing conceptually, and try to follow as
  much of the **go** code as you can't, but don't worry if you don't understand
  it all.
- Once you've read the section, go back to the beginning of the section, and try
  to start implementing it in Typescript in your monkey repo. If you get stuck
  and can't get forward, stroke your beard for a little while and try
  console.logging and thinking deeply about the problem before you give up. But
  if you can't get past a spot, then start watching
  [the next video](http://jared.howtocomputer.link/monkey/04-extending-the-lexer.mp4).
  Watch it just long enough to get yourself _unstuck_, then keep coding on your
  own.
- Keep repeating the last step until you finish the section -- that is, try to
  code on your own until you get stuck, try to unstick yourself, then watch the
  video until you're unstuck if necessary. Eventually you should have finished
  the whole section, and watched the whole video. _Also, look for opportunities
  to use **vim macros**_.
- review your code using `git diff` and look for things you can clean up, like
  debugging code and console.logs, clean that stuff up, and submit a MR. Slack
  your MR url so I can take a look.
- If you finish this assignment well before our next class and want more, let me
  know, I can give you more videos 👍.

---

## New Flashcards Homework

---

- Add 5 new flashcards to your `vim` category:
  - `q<char>`
  - `q` (while recording)
  - `@<char>`
  - `@@`
  - `<num>@<char>`

---

## Personal Project Homework

---

- Refer to your work plan you created a few weeks ago, and select the next item
  on your list. If you're ahead or behind of where you thought you would be,
  make any modifications you think appropriate, then **Slack me your goal for
  this week.** 📅 👋
- Make sure you've addressed all of my feedback from last week, merge your MR,
  connect with vscode, pull from origin, and _create a new branch_.
- Implement the feature or chunk of work you planned.
- When you think you're done, check things like:
  - did you leave in any `console.log()`s?
  - does it look good at all screen sizes?
  - do your storybook stories work and cover your components (if you're using
    storybook)
  - are your components and variables named well?
  - is there anything you want to clean up, refactor, or DRY up before you
    submit?
- when you're happy with the code, build your site, submit a MR, and Slack both
  the URLs.
- after I review, address any feedback I give you.
