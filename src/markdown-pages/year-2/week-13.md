---
path: "/year-2/week-13"
---

# Year #2, Week #13 💻 🏎

_New stuff we learned this week:_ 🤔

## Cookies 🍪

- The HTTP protocal is inherently _stateless_ -- which means there is no
  built-in **connection between requests**. It's like every web server in the
  world has _amnesia_.
- But lots of things on the web **need state** - for stuff like keeping track if
  you're logged in, holding game scores, remembering what's in your shopping
  cart, etc.
- One of the main ways that we've worked around the stateless nature of HTTP is
  using **cookies**. Cookies are **little bits of text that your browser can
  store, to be used later**.
- A web server can **instruct a browser** to set a cookie by using the
  `Set-Cookie` **header**, like so:

```txt
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: goat=banjorodeo
```

- the above HTTP response from a server instructs the client (the browser) to
  **set a cookie** named `goat` to the value of of `banjorodeo`.
- If the browser chooses to store the cookie (which it might not, based on user
  preferences), then it will **send back the same cookie** with each subsequent
  request to that domain, like this:

```txt
GET /sample_page.html HTTP/2.0
Host: www.radsite.com
Cookie: goat=banjorodeo
```

- this _back-and-forth_ interplay between a server instructing a cookie to be
  set, and the client passing it along in subsequent requests, allows us to
  overcome the stateless nature of HTTP. The most common example is for a site
  where you need to **log in**. In that case, once the server verifies your
  username and password, it can give you a special secret token (usually a
  random string of letters and numbers). From then on, the client will keep
  sending back that special string, even though it is meaningless to the client.
  On the server side though, the server is able to match up the special token to
  know who owns the token, and the token then proves that they previously logged
  in successfully. This allows you to keep doing things without having to
  re-login in every single request. Cool!
- **Javascript can also READ and CREATE cookies** (with a few limitations, for
  security reasons). The API for doing this is absurdly awful:

```js
// add a cookie called `herp` whose value is `derp`
document.cookie = "herp=derp";

// strangely, this doesn't' overwrite, it sets a 2ND cookie
document.cookie = "beep=boop";

// just accessing `document.cookie` reads all the cookies
console.log(document.cookie);
// -> "herp=derp; beep=boop"
```

- Cookies can be set to **expire** after a given amount of time. This is usually
  done for security reasons, and is the reason why you often have to re-login to
  sites every couple weeks. It's because your cookie expires, so you need to get
  a new one. No one wants an old cookie! To do this in javascript you would
  write:

```js
document.cookie = "herp=derp; Expires=Thu, 21 Oct 2021 07:28:00 GMT";
```

- **Note:** if you _don't set an expiration_ for a cookie, it will only last for
  the current **"session"**, which means when the tab or browser is closed, the
  cookie will go away.
- Cookies can also be set to only be valid for a **specific path** or portion of
  a website:

```js
// this cookie will only be good for paths like:
// example.site/docs
// example.site/docs/red
// example.site/docs/red/green
document.cookie = "herp=derp; path=/docs";
```

- To **delete a cookie** you actually have to re-set it with it's expiration
  date in the past, lol.

```js
// this will delete a cookie ¯\_(ツ)_/¯
document.cookie = "herp=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

## Icon Fonts

- **Icons** are small graphics, usually used to quickly convey meaning to
  someone scanning a webpage or trying to use some functionality. They're all
  over the web.
- Icons can be implemented in lots of ways, including just using plain old html
  images, or css background images, or svgs.
- One technique that has become very popular is to have a **special font that
  consists totally of ICONS instead of regular letters**. There used to be a
  common system font called _"Zapf Dingbats"_ that sort of worked like this.
- There are now a number of free and paid (or mixed) fonts out there that work
  like this, allowing you to easily embed icons in your web pages.
- one really nice thing about **icons AS FONTS** is that you can change their
  color and style them with CSS, giving you way more flexibility than just a
  static PNG or JPG image.
- But, instead of making you insert weird characters (like a "Z" to get a
  picture of a person) that make no sense to Google or assistive technologies
  like screen readers, most icon fonts instead rely on CSS pseudo-selectors,
  creating **classes** that map to icons, like this:

```css
.dancing-lady::after {
  content: "z"; /* 💃 */
}
```

- Then, you can just create some empty element and add a class to it, like
  `<i class="dancing-lady">`. The actual CSS is a bit more complicated than
  that, but it really boils down to just setting up a character as a
  pseudo-element.
- [**Font Awesome**](https://fontawesome.com/) is a very popular and well-done
  icon font that supplies many of it's icons for Free. We'll be using Font
  Awesome for some of our projects going forward. To embed an icon with font
  awesome, you usually just need to link to some CSS or JS in the `<head>` of
  your page, and then, you use a few classes on empty elements (usually `i`),
  like so:

```html
<i class="fa fa-cloud-download"></i>
```

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [GitLab](https://gitlab.howtocomputer.link)
- [Execute Program](https://www.executeprogram.com)
- [Font Awesome](https://fontawesome.com/)
- Tic-Tac-Toe videos:
  [#1](http://jared.howtocomputer.link/tic_tac_toe_1.mp4)&nbsp;&nbsp;
  [#2](http://jared.howtocomputer.link/tic_tac_toe_2.mp4)&nbsp;&nbsp;
  [#3](http://jared.howtocomputer.link/tic_tac_toe_3.mp4)

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Akron Snowmen assignment
- 1 day cookies (flashcards app) Homework 🍪
- 1 day icons Homework
- 1 day watch Tic-Tac-Toe videos
  [#1](http://jared.howtocomputer.link/tic_tac_toe_1.mp4)&nbsp;&nbsp;
  [#2](http://jared.howtocomputer.link/tic_tac_toe_2.mp4)&nbsp;&nbsp;
  [#3](http://jared.howtocomputer.link/tic_tac_toe_3.mp4)
- 1 days touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="icon">Icon/Flashcard Assignment</Checkable>

<Checkable id="cookies">Cookies Assignment</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="tic-tac-toe-vids">
  Watch Tic-Tac-Toe Videos (links ^^^)
</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Akron Snowmen Assignment

---

- Check your MR for feedback I left -- I've requested at least one change from
  each of you. Make the requested change.
- Slowly and carefully review the **Interactive Rebase** portion of
  [week 30 new stuff](/week-30).
- squash your commits into one or more meaningful commits with **GOOD COMMIT
  MESSAGES**.
- push your branch back up. It should fail. Do you understand why?
- change your git command so that the push works.
- slack the MR url again so I can merge.

---

## Icons / Flashcard App Assignment

---

- Slowly and carefully review the **Icon Fonts** section of "New Stuff" above
  ^^^.
- If your name is not Tabitha, get your parent to unblock these three domains:
  `https://fontawesome.com` and `https://ka-f.fontawesome.com` and
  `https://kit.fontawesome.com`.
- check if you have an unmerged MR from the last time you worked on your
  flashcards app. If so, merge it. Then, connect to the HTC machine with vscode,
  switch over to master, pull from origin, and delete the old branch.
- make sure you are on master and have merged any unmerged work and have pulled
  before moving one.
- create a new branch.
- add this script tag to the `<head>` portion of `./index.html`:

```html
<script
  src="https://kit.fontawesome.com/2f8568b58b.js"
  crossorigin="anonymous"
></script>
```

- next, decide two different (at least, you can do more) places where you would
  like to incorporate an **icon** into your flashcard app.
- browse [font awesome](https://fontawesome.com/) for a bit (but don't get
  carried away, OK?) and find the icons you want to use.
- incorporate the icons, and style them to nicely fit your app.
- commit your work.
- finally, **add 20 more** new cards from your old stack of non-app flashcards,
  and _commit that work separately_.
- build, submit a MR, and slack both urls, as usual.

---

## Cookies Homework 🍪

---

- slowly and carefully read the "Cookies" section of "New Stuff" above ^^^.
- connect with vscode to your tic-tac-toe or connect-4 project.
- if you had any last-minute tweaks, bugfixes, or styling improvements you
  wanted to make, go ahead and do those, but don't get too lost in the details.
- push up any new work you added from the last step.
- review your own diffs on your MR webpage -- do you see anything you want to
  fix before you merge? Are there millions of `console.log()` statements strewn
  about? Or silly names you'd like to fix before moving on? Do so. If necessary,
  do an _interactive rebase_.
- merge your MR.
- switch to master, pull your merged changes, and delete the old branch.
- make a new branch.
- add a **new feature** the game should keep track of how many games each side
  has won, using a cookie.
- hints/requirements:
  - It should display the current score of games somewhere (like "X has won 3
    games, O has won 1 game").
  - if nobody has played or won any games, they both should say zero.
  - you should not need to introduce any new state for this feature
  - make sure the cookie lasts beyond quitting the browser, to do this, you'll
    need to set an expiration. Here's a valid-formed future date you can use:
    `Thu, 07 Feb 2030 12:00:00 GMT`
  - you could set two cookies, one for each player, or you could design your
    cookie so that one cookie holds both sides' scores, it's up to you to
    decide.
  - the trickiest part of this might be figuring out how to set or modify the
    cookie only once when a game is won, and not multiple times every time react
    re-renders. _**Hint**_ you might need to use `useEffect()` and it's
    dependency array second argument to get this right (I'm not actually sure, I
    haven't fully thought it through...🤔 but you guys are smart, you can figure
    it out.)
- once you've got it working, pop the hood on the browser and go to the
  `Application` tab of the dev tools. Experiment with manually creating,
  modifying and deleting the cookie.
- **Extra Credit: ✨** Add another cookie based feature -- have the browser
  **save the game state** so that you can quit the browser and re-open it and
  the board and turn will be exactly as it was when you left it.
  Hints/requirements for Extra credit:
  - you'll need to do some thinking about _HOW to save the game state_ into the
    cookie string. Do you want to JSON encode it? Or change it in/out of some
    other simple string representation?
  - to boot up the app with the right saved state, you'll need to leverage check
    the cookie (or cookies) when setting the **default values** passed to
    `useState()`
- **Kiah Credit: ✨** add a button somewhere that allows the user to reset all
  of the data stored in cookies, wiping the running tally of won games and the
  game state. Should this feature require some new state or not?
- **Optional Extra Task ✅** if you've finished the other parts of this task,
  and it sounds fun, add one or more **icons** to your game app.
- build your game, submit a MR, slack both urls.
