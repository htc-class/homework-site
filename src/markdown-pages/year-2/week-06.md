---
path: "/year-2/week-06"
---

# Year #2, Week #5 💻 🏎️

_New stuff we learned this week:_ 🤔

## CSS in JS

- Because of common problems building large websites with large teams of
  software engineers, techniques have been invented to programatically control
  CSS in order to eliminate common problems and improve production performance.
  These techniques are called `CSS-in-JS`. This is an _umbrella term_, there are
  multiple applications of this technique. There is some controversy about this
  subject, but much of the web development world is currently using some form of
  CSS-in-JS, and most people believe the advantages outweigh the disadvantages,
  but it's important to consider your own context and _whether you have the
  problems the technique was **designed to solve**_.
- **CSS Modules** are one implementation of _CSS-in-JS_. It involves (usually)
  _naming your file_ as `<Something>.module.css`, and then you _import the
  stylesheet in your javascript (or typescript) file_, using the **class names
  as property keys** which you then _add to your jsx_, like so:

```css
/* Button.module.css */
.btn {
  color: red;
}

.btnInner {
  display: flex;
}
```

```tsx
/* in Button.tsx */
import React from "react";
import styles from "./Button.module.css"; // 🧐 Whoa...

const Button: React.FC = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.btnInner}>Click Me!</span>
    </button>
  );
};
```

## React Danger ⚠️

- In a React component, the following code won't work as you might expect:

```tsx
import React from "react";

const App: React.FC = () => {
  const title = `Hello <em>world!</em>`;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
```

- Instead of rendering the html of `Hello <em>world!</em>`, you'd get a plain
  string (including the angle brackets): `"Hello <em>world!</em>"`.
- The reason is that _turning arbitrary strings into HTML is a **very common
  source of security problems**_.
- That said, sometimes **you really need to do this** and you know the html is
  coming from a _trusted source_. In that case, you can use the
  `dangerouslySetInnerHTML` prop available on every primitive html element in
  JSX:

```tsx
import React from "react";

const App: React.FC = () => {
  const title = `Hello <em>world!</em>`;
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};
```

- the React authors (wisely) force you to type `dangerouslySetInnerHTML` and to
  use the weird object `{{ __html: '<your html string>' }}` to help make it so
  you don't every _accidentally create a big security vulnerability_ in your
  application.
- **don't ever do this with USER INPUT** or Bobby Tables will hack your
  computer, OK?

## Markdown

- **Markdown** is a plain-text format that is easy for humans to read (and
  type), and easily converts into HTML.
- You already know a bunch of Markdown from formatting comments in _Slack_.
  Markdown is everywhere! Like in comments and descriptions of Pull Requests and
  Merge Requests in Github and Gitlab, and many other places.
- Because Markdown easily converts to HTML, many people like to use to compose
  web pages, and so almost all _Static Site Generators_ support writing markdown
  and converting into HTML.
- in fact, I'm writing this page in Markdown right now! 😎
- You can even **embed React components in Markdown**, which is called `MDX`.
- Here's a bit of Markdown syntax for you:

```md
# A Level 1 Heading (like an H1)

Here is some text, that forms a paragraph.

This feels weird, I'm writing Markdown in my Markdown.

- Underscores _make italics_.
- Asterisks **make bold**.
- Tildes make ~strikethrough~.
- Backticks make `code spans`.

## Lists (this is a level-2 heading, like H2)

- dashes create
- an unordered list

1. This would
2. Be an Ordered
3. List, of course
```

## Misc.

- `npx` is a command that comes along with `npm`. It allows you to run an npm
  module as a command for a **one-time task**. `npx` will download the command
  and then run it, and then essentially throw it away. This means you don't have
  to globally install a bunch of tools you might rarely use, and helps ensure
  that the next time you use a tool, you'll get the updated version. Many large
  frameworks (like _Nextjs_, _Storybook_, _Gatsby_, etc.) publish a command to
  bootstrap all of the boilerplate. `npx` is a great fit for these
  initialization tasks. `npx` does another thing too, but we'll learn about that
  at another time.
- **`TTFB`** is an acronom that stands for **Time To First Byte**. It's a _web
  performance_ metric that quantifies **the amount of time between when an HTTP
  request is made for a web page, and when the server responds with the first
  byte of content**. TTFB is a useful way of talking about the work required on
  the server (if any) prior to delivering HTML to requesting clients.
- In the React world **hydration** or **re-hydration** refers to the process of
  HTML sent down by the server getting _handed off to and picked up by
  client-side javascript (react), so that the client can take over and act as if
  it had rendered the whole DOM in the first place._ Hydration allows frameworks
  like Next and Gatsby to do really powerful stuff that makes sites really fast.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)

---

## Homework Plan

_No **Execute Program** this week if you've run out of your free lessons, until
I can see if there's a way we can keep going without it costing too much_.

- 1 day flashcard homework
- 2 days Nextjs tutorial homework
- 2 days touch typing homework
- 4 days Execute Program (if you have free lessons left)

---

<Checkable id="flashcard">flashcard app homeowk</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="nextjs">nextjs tutorial homework</Checkable>

---

## Flashcard App Assignment

---

- Merge your MR from last week's work. To do that, go to the gitlab url and
  click the green "Merge" button.
- Connect in vscode to your Flashcard app dir, and follow these steps:
  - first, switch to your `master` branch
  - run this command `git pull origin master` -- if you don't understand what
    this command does, find the appropriate "New Stuff" page and review.
  - assuming you've merged your work on GitLab, when you pull down
    `origin master`, you should get all of the commits from your `create-spa`
    branch
  - type `git branch -d create-spa`. If you merged on GitLab and pulled, it
    should delete successfully. If it won't delete, Slack me so I can help you
    figure out where you went wrong...
  - create and checkout (in one git command) a new branch called `categories`.
- Now, build **Feature #1**:
  - make it so that the "prev" and "next" button stop working when appropriate.
    That means if you're on the first card, the "prev" button should _do
    nothing_, and likewise if you're on the last card, the "next" button should
    do nothing.
  - then, somehow make it so that the _appearance_ of the button changes when it
    doesn't do anything. Maybe grey it out, or change the color, or you could
    also try this css for fun: `cursor: ban;`
  - commit your work when you're done
- Now build **Feature #2**:
  - before you start, make sure you have **at least 3** _categories_ or _types_
    of flashcards in your data source.
  - finish reading all of these instructions before going on...
  - somewhere in the app, I want you to make a list of clickable categories. If
    I click on one of the categories, I should only see cards from that
    category.
  - make it so that it has a "default" category -- one that is selected by
    default when you load the page.
  - as you start working on this, you might decide you want to change your data
    structure -- that's OK! Or you might not, that's also OK. Do what seems best
    to you, to make the feature straightforward to build. You can change your
    mind mid-stream if you want, as well.
  - make sure things don't break if I'm on Card 7 of one category and then
    switch to another category that only has 5 cards. What should happen in that
    scenario to guard against an error? Make a decision and implement your
    design.
  - hint: you're going to need to introduce a new piece of state to get this
    working.
  - the number of cards shown on the bottom of the screen should change based on
    what category is selected.
  - commit your work when you're done.
  - **Kiah Credit: ✨** make it so that the categories are _multi-selectable_
    meaning, I can press and select two or more categories at once, and I'll see
    cards from **all** the categories I've selected.
- build your app and Submit a MR, slack both of the URLs when you're done.

---

## Nextjs Tutorial Assignment

---

- Slowly and carefully read through all of the "New Stuff" above ^^^.
- If your name is Willow or Kiah, have your dad unblock two domains:
  - `next-learn-starter.now.sh` (this is the example of what you'll be building)
  - `nextjs.org`
- `ssh` into your home dir on the HTC Pi, and _from your home dir_ run this
  exact command:

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

- running that comand will take a few minutes. While you're waiting, notice how
  that command used `npx`. Do you understand why?
- once the command finishes, `cd` into the new `~/nextjs-blog` folder that it
  created, and use `vim` directly to edit `package.json`. Change the `"dev"`
  script so that it reads: `"dev": "next dev --port $DEV_PORT",` -- adding the
  `--port $DEV_PORT` part.
- now, with vscode, start a remote connection and choose the folder
  `~/nextjs-blog` to connect to.
- now you're ready to start the tutorial, and because you edited the "dev"
  script, you can use the simple command `npm run dev` when they tell you to.
- **IMPORTANT!!** _Before_ you start the tutorial, read through all of these
  instructions slowly and carefully, even if they don't fully make sense at
  first reading, they will when you get to the steps they relate to.
  - there are a decent number of _diagrams_ throughout the tutorial. Don't just
    skim over these, take your time to study them and make sure you understand
    them. If you're confused, reach out on Slack.
  - You won't get a notice in the terminal, but you will need to **forward your
    port**, like usual. If the terminal says something like
    `Started server at http://localhost:5050` then you will have to forward port
    `5050`.
  - the tutorial has a bunch of points where people can start mid-way. You're
    starting from the beginning, so you will be skipping these pages. You will
    see something that says something like:
    `"If you’re continuing from the previous lesson, you can skip this page."`
    You will always be continuing from the previous lesson, so you can skip
    those pages. 👍
  - for the step when it tells you to bring in your profile image, `cp` a file
    down from `/www-assets` and use one of those.
  - it should explain this pretty well, but in _markdown_ there is a special
    syntax called **frontmatter**. Think of it like a special place to write
    information **about** the markdown file. It's used for stuff like dates and
    URL paths. For instance, here's a link to the **frontmatter** of
    [one of these homework pages.](https://gitlab.howtocomputer.link/htc/homework-site/-/blob/master/src/markdown-pages/year-2/week-05.md#L2)
    They are going to have you use a library called `matter` -- it's just an npm
    package that can parse frontmatter and turn it into a nice javascript
    object, like `{ path: '/year-2-week-5' }`
  - later on in the tutorial, when it talks about a "Plain react app" -- think
    "SPA App", that's what they mean.
  - There is a section called "Styling Tips" that says "just read this, don't do
    it". Make sure you just read that section and don't try to do it, OK? It has
    stuff you haven't heard of like `SASS` and `Tailwind`.
  - answer the quiz questions at the end of each page. If you get it wrong, try
    to go back and review to figure out why you didn't get it right!
  - be careful, sometimes they give you code chunks that you can copy/paste the
    whole thing, but later on in the tutorial they show just parts that they
    added to the code, so if you try to copy paste the whole thing and replace
    your existing code, stuff will break. Just read carefully and it should be
    straightforward what to do at every point.
  - every time you get to the end of a page and have to click "Next ->", if you
    have added any code, **stop and commit your work**.
  - don't go on to another page _unless you've got your app working up thru the
    end of that page's instructions_. If yours is not working, don't proceed
    until you figure it out. Reach out on Slack if you get totally stuck.
  - **DO NOT DO** the last _TWO sections_ ("API Routes" and "Deploying Your
    App")
- Provided you've read all of the stuff above, you can start the tutorial
  [on this page.](https://nextjs.org/learn/basics/create-nextjs-app)
