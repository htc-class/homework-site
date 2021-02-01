---
path: "/year-2/week-16"
---

# Year #2, Week #16 💻 🚑

_New stuff we learned this week:_ 🤔

## Anchor Element Goodies ⚓️

- the good old **anchor element** `<a>` can link to more than just web pages.
  They can also link to an **email address**, which when clicked will open up
  the users default email program:

```html
<a href="mailto:rod@akron-snowmen.com">Big Jefe</a>
```

- they can also link to a **telephone number** which will open the phone app if
  the user is browsing on a mobile phone, and on a desktop, the operating system
  will take it's best guess how to handle the link:

```html
<a href="tel:15558675309">Call Jenny</a>
```

- anchor tags can also link **to a LOCATION WITHIN a webpage**. To do that, you
  just add a _hash symbol_ and a _valid id_ that exists on the page:

```html
<a href="/cats#faqs">Read the FAQs</a>
```

- a new CSS attribute allows us to **smoothly scroll** to a location identified
  by an html ID -- something that used to be possible only with javascript:

```css
html {
  scroll-behavior: smooth;
}
```

## CORS (Cross Origin Resource Sharing)

- CORS (Cross Origin Resource Sharing) is a mechanis that allows a **server** to
  _indicate which other origins (think domains) a browser should permit to fetch
  resources from it._ It's a **security thing** since bad guys try to do bad
  things on the web.
- terminology: an **origin** is a combination of:
  - **scheme**: `http` or `https`
  - **host**: the _domain_ -- `example.com` or `goats.biz`, etc.
  - **port**: the _port_ requested, eg `80` or `443` or some custom port.
- if javascript tries to make an HTTP request (usually using `window.fetch()`)
  to **the same domain**, all is good, the browser doesn't step in. The idea is
  that if you're requesting data from the same domain, you probably wrote the
  javascript and control the server, so there should be no security risk.
- however, if javascript _tries to make an HTTP request to a DIFFERENT domain_,
  then the browser get's a little bossy, and steps in front of the request,
  sending a special **preflight** `OPTIONS` request to the server asking if the
  server would be OK with receiving a request from that domain.
- this "prefight" `OPTIONS` request indicates to the server what type of request
  javascript **wants to make**, and the server signals it's
  approval/dissapproval by returning **a set of headers, called CORS headers**.
  These headers include:
  - `Access-Control-Allow-Origin` -- a list of _origins_ that are allowed, or
    `*` for **everyone is allowed**.
  - `Access-Control-Allow-Methods` -- a list of _HTTP methods (GET, POST, etc)_
    allowed, or `*` for **all methods allowed**.
  - `Access-Control-Allow-Headers` -- a list of _HTTP Headers_ allowed, or `*`
    for `**all headers allowed**.
- so for example, if a server wants to indicate that _only GET requests from
  example.com are accepted_, it would send back these headers:

```txt
Access-Control-Allow-Origin: 'https://www.example.com'
Access-Control-Allow-Methods: 'GET'
Access-Control-Allow-Headers: '*'
```

- or, if a server didn't have any security concerns at all, and wanted to let
  the whole world access it via javacript, it would send back:

```txt
Access-Control-Allow-Origin: '*'
Access-Control-Allow-Methods: '*'
Access-Control-Allow-Headers: '*'
```

## NPM lifecycle scripts

- we've [already learned](/week-34) that npm supports declaring little helper
  **scripts**, which are _shell commands_, via the `"scripts"` sub-object in
  `package.json`:

```json
{
  "name": "rad-app",
  "scripts": {
    "build": "parcel build index.html"
  }
}
```

- sometimes though, you need to do run several shell commands to get your job
  done. In that case, one thing you can do is combine your shell statements with
  `&&` or `;` like so:

```json
{
  "name": "rad-app",
  "scripts": {
    "build": "tsc src/*.tsx && parcel build index.html && prettier . --write"
  }
}
```

- this works, but it can get a little unweildy if you have several things that
  you want do do, or especially if _several scripts need to do the SAME
  preparatory work_. In that case, npm **lifecycle scripts** can be a great way
  to clean up and organize your scripts.
- the basic idea behind _lifecycle scripts_ is that before running an arbitrary
  npm script called (for example) `goat`, npm will check if there is a
  **`pre<scriptname>`** (in this example, that would be `pregoat`) script
  defined, and if there is, it will run that first. Then, after it runs `goat`,
  it will check if there is a **`post<scriptname>`** (`postgoat`) script, and
  run that afterwards. This allows us to clean up the 3-part script shown in the
  example above to become this:

```json
{
  "name": "rad-app",
  "scripts": {
    "prebuild": "tsc src/*.tsx",
    "build": "parcel build index.html",
    "postbuild": "prettier . --write"
  }
}
```

## node Environment variables with `process.env`

- sometimes we want to do slightly different things in our node.js code, for
  instance we might want to talk to a development API when we're developing, and
  talk to the production API when our website is deployed.
- the way to handle this scenario is through the concept of an **environment**,
  or _environment variables_. Think of it like a set of facts given to a
  process. Every unix process has an environment, whether you realize it or not.
  You can view the environment of your shell's process by typing the `printenv`
  command.
- in node.js land, the environment is exposed through the global `process`
  variable, which we learned about a long time ago. The `process` variable has a
  `env` property that lets us see which environment variables are defined for
  the running node process:

```js
console.log(process.env);
console.log(process.env.GOAT_BANJO);
```

- we can set environment variables for node as simple _bash variables_ **when we
  kick of the node process**, which means that _instead of running this
  command:_

```bash
node myscript.js
```

- we would execute something like this:

```bash
GOAT=banjorodeo node myscript
```

- if we kicked off the node process starting with `GOAT=banjorodeo ` as shown
  above, we could `console.log(process.env.GOAT)` and get the string
  `"banjorodeo"` back out.
- trying to access a env variable that doesn't exists works just like trying to
  access any non-existent property of any object in javascript -- we just get
  back **undefined**:

```js
console.log(process.env.THIS_WAS_NEVER_SET);
// -> `undefined`
```

- a very common use case for node environment variables is for passing
  development or production URLs to an app, like so:

```json
{
  "name": "rad-app",
  "scripts": {
    "dev": "API_URL=http://localhost:1111 next dev",
    "build": "API_URL=https://api.goats.com next build"
  }
}
```

- one thing a bit tricky to wrap your brain around is that often we're trying to
  pass **node environment variables** to a **web app**, where the javascript
  runs in a **browser**. In the browser **there is no `process.env`**. So how
  does this work? The answer is that _bundlers_ (like parcel and webpack) **copy
  important environment variables INTO the generated bundle**, creating a fake
  `process` object. Thanks bundlers!

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Flashcard app API assignment (part 1)
- 1 day Flashcard app API assignment (part 2)
- 1 day Akron Snowmen assignment
- 1 day watch parse http request videos (32 min. total):
  [video #1](http://jared.howtocomputer.link/parse_request_1.mp4)&nbsp;&nbsp;
  [video #2](http://jared.howtocomputer.link/parse_request_2.mp4)&nbsp;&nbsp;
  [video #3](http://jared.howtocomputer.link/parse_request_3.mp4)
- 1 days touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="videos-parse-req">Watch parse-request videos</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="flash-api">Flashcard API Assignment, part 1</Checkable>

<Checkable id="flash-api-2">Flashcard API Assignment, part 2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Akron Snowmen Assignment

---

- slowly and carefully review the "Anchor element" section from the "New Stuff"
  above ^^^.
- connect to your Akron Snowmen repo in vscode, then:
  - switch to `master`
  - pull from `upstream`
  - create a new branch called `nav-links`
- using the info from new stuff above, connect the four links in the nav bar to
  four sections of the page (it doesn't matter if the nav link text perfetly
  matches the section linked to, we'll sort that out later) so that if you click
  any of the links it _smoothly scrolls_ to that section.
- commit your work
- next, figure out how to make it so that the correct nav link is shown as
  "active" (underlined) at the right time. Some hints/requirements:
  - when the page loads, the first nav element should be considered active
  - when you click a nav link and scroll to another section, the nav link that
    was clicked should become "active"
  - you're probably going to need some react _state_ in some component -- but
    before you start typing code, stroke your beard for a minute or two and
    think about which component should own the state, and what the state should
    look like.
  - assuming you create a piece of state, give it the _strictest typescript
    type_ you can come up with.
- when you've got it all working, double-check that the storybook dir has no
  errors, and that you can still view _all of the stories_.
- commit your work
- build your branch, and submit a MR and slack both urls, then address any
  feedback I give you in MR comments.

---

## Flashcard API Assignment (part 1)

---

- slowly and carefully review the "process.env", "CORS", and "npm lifecyle"
  sections of the new stuff above ^^^.
- make sure you've addressed all of my feedback on the MR from last week, then
  **merge**.
- switch to master, pull from `origin`, and then delete your branch from last
  week.
- create a new branch called `api`
- add two lines to the `"compilerOptions"` sub-object of your `./tsconfig.json`
  file (make sure you obey `.json` rules, especially trailing commas):
  - `"allowSyntheticDefaultImports": true` and
  - `"outDir": "./dist"`
- create a new file called `server/index.ts` with the following code in it:

```ts
import * as http from "http";

const listenerFn: http.RequestListener = (req, res) => {
  const statusCode = 200;
  const statusMsg = `OK`;

  res.writeHead(statusCode, statusMsg, {
    "Random-Header": `beep boop`,
  });

  res.end(`goat banjo rodeo`);
};

const server = http.createServer(listenerFn);

const PORT = Number(
  process.env.NODE_ENV === `DEVELOPMENT`
    ? process.env.DEV_API_PORT
    : process.env.PROD_API_PORT
);

server.listen(PORT, () => {
  console.log(`listening on port`, PORT);
});
```

- study the code for a few minutes... 🤔 ...do you understand what all the parts
  mean? Look carefully at lines 16-20, do you follow how I'm using `process.env`
  to set a port based on the value of `process.env.NODE_ENV`?
- (by the way, `DEV_API_PORT` and `PROD_API_PORT` are environment variables I
  set up for you on the HTC machine. To see where I defined them, `cat` out
  `~/.user_env` from your terminal. Do you see where the variables are defined?
  Then `cat` out `~/.bashrc` -- do you see where the `.user_env` file is
  included automatically?)
- Ok, next let's build and run your server. Since we wrote it in typescript,
  we'll have to compile it javascript, since node doesn't understand TS (and
  we're not using deno).
- first, we're going to make a folder inside of `dist` for our built-server file
  to go. to do that, just type a bash command that will make an empty directory
  called `server` that lives **inside** of your `./dist` folder.
- now that you've ensured there's an empty `./dist/server` dir, run the
  following command to build your server file into javascript:
  `tsc ./server/index.ts --outDir ./dist/server`. That command just tells
  typescript to _compile the_ `./server/index.ts` file and put the compiled
  javascript into `./dist/server/`. You shouldn't get any errors.
- now use the `ls` command to peek into your `./dist/server/` dir -- you should
  see a `index.js` file there. cat it out for fun--can you follow most of what
  the typescript compiler did to make it into plain javascript? Cool, right? 😎
- now that we have a built js file, we can run our node server. To do that, run
  the command: `node ./dist/server/index.js`. You should see a message:
  `listening on port <your-port>`. Hit your server in your browser (you may need
  to forward that port) by going to `http://localhost:<yourport>`. You should
  see the text `"goat banjo rodeo"`.
- next, pop open the dev tools and refresh the page. See if you can find the
  `Random-Header` of `beep boop` we set on line 8 -- it will be a "Response
  header" since the server sent that header.
- now, change the message `goat banjo rodeo` on line 11 to something else, then
  view the page in the browser again. It should not have changed. :( Do you know
  why? Think about it for a minute...
- the reason it didn't change is that the node process is still serving up the
  compiled `./dist/server/index.js` file. We'll need to both recompile and
  restart the node server to see our change. To do that, do these steps:
  - kill the node server with `<Ctrl-C>`
  - recompile the javascript (using the same command as above)
  - restart your dev server by running the same command you used to start it the
    time before
  - you should see your new http response
- kill your node server again. this time, i want you to re-start it, but in a
  way that causes it to be run on a different port -- on your `DEV_API_PORT`.
  Study lines 16-20 of `./server/index.js` to figure out what you need to do,
  and refer to the `process.env` section of new stuff if necessary as well.
- ok, this all this compiling, starting and restarting is taking too much time
  and mental energy. Let's add som NPM scripts to make our life easier. Start by
  adding one to compile the server typescript. Add a script `"compile-api"` to
  your `package.json`, the script should be
  `"tsc ./server/index.ts --outDir ./dist/server/index.js"`. NOTE: this is the
  same as the compile command we've been running manually, we're just packaging
  it up in an NPM script so we can run it by typing `npm run compile-api`
  instead.
- but, it would also be nice to make it so we never get an error if the
  `./dist/server/` dir doesn't exist, so let's use a _lifecycle script_ to make
  sure that that directory is always there before we compile. To do that, add
  another script called `"precompile-api"` with the command
  `"mkdir -p ./dist/server"`.
- cool, now every time we run `npm run compile-api` npm will take care of
  running the `precompile-api` script for us. Thanks NPM!
- OK, the next thing we want to take care of is running the api server, and it
  would be really nice if there was a way we could _automatically restart the
  dev server whenever a change was made_. Luckily, someone out there in the open
  source community took care of this for us, by creating an _npm package_ called
  `nodemon` which works like `node` except it "**mon**itors" the file and
  restarts every time it changes. Thanks random internet person! **Type
  `npm install nodemon`** to install the nodemon package.
- alright, now for some real npm script wizardry. Add a script called
  `"dev-api"` to your `package.json` -- with this command:
  `"npm run compile-api -- --watch & NODE_ENV=DEVELOPMENT nodemon ./dist/server/index.js"`.
- let's break that last command down to inspect the wizardry:
  - `npm run compile-api -- --watch` runs our compile command, but the added
    `-- --watch` passes another flag to the `tsc` command, putting it into
    **watch mode** -- this compiles the typescript, but keeps the compiler
    watching, so it will recompile anytime you make a change. You've seen me use
    the `--watch` flag in class a few times.
  - then, the second part of the command, which is
    `NODE_ENV=DEVELOPMENT nodemon ./dist/server/index.js` is not too hard to
    understand. All we've done is set an environment variable (making
    `process.env.NODE_ENV` equal `"DEVELOPMENT"`), and we've changed out `node`
    for `nodemon`. Using `nodemon` works just like the `node` command except it
    will automatically restart when the file it's running changes. So that
    means, when we modify the `server/index.ts` file, typescript (which is
    watchingn for changes) will notice, and recompile -- then nodemon (which is
    watching `./dist/server/index.js`) for changes will notice that it's file
    changed, and restart. Pretty sweet!
  - finally, the last new thing here is that I specifically joined these two
    sub-commands with `&` and **NOT** `&&`. The basic meaning of the `&` char in
    bash is to run the command before it in the background. But you can think of
    it like this: **joining the two commands with `&` makes them BOTH RUN at the
    same time.** This means we don't have to fire up two terminal instances, one
    for our typescript compiler watcher, and one for the nodemon watcher. With
    the `&` char, we get to run both in the same terminal. Pure wizardry!
- OK, now let's take our `dev-api` script for a spin by running
  `npm run dev-api` in the vscode terminal. If we did everything correctly, you
  should be able to view your "api" in a browser. Then, go to `server/index.ts`
  and make a change to line 11 where we set the output. Go head and change that
  text again, and watch the terminal output. You should see that typescript
  noticed the change and recompiled, and nodemon also noticed the change and
  restarted. Now view the page in the browser again -- it should have the
  updated text, and you didn't need to recompile or restart node. 👍
- make sure the `dev-api` script is working, if it didn't work, study the
  previous steps very carefully, and then reach out in Slack for help.
- commit your work.
- advance to Part 2 (when you're ready).

---

## Flashcard API Assignment (part 2)

---

- connect to your flashcards repo, and make sure you committed your work at the
  end of working on part 1.
- OK, now we're going to work on starting to **integrate** your API server to
  serve your flashcard data to your app. We'll go step by step.
- start by firing up your API dev server by running `npm run dev-api` (the
  command we built in part 1). Forward the port (if necessary) and check that
  it's serving correctly by opening it up in a browser. The URL will be
  `http://localhost:<PORT>` where `<PORT>` is the port that nodemon reports the
  server is listening on.
- Now, what we want to do is have your api return **JSON** of your flashcards
  data instead of the random string you typed in in part 1. Start by **moving
  the file** that contains your card data **into the `./server` directory.** You
  will get typescript compilation errors if you don't do this. While you're at
  it, make sure it does **NOT** have a `tsx` extension -- tsx is only for React
  components, and this file should be pure data with a `.ts` extension, not
  `.tsx`.
- Now, modify your `./server/index.ts` file so that:
  - it imports your card data
  - it sends your card data to in the response as a **json string**
  - it sets the `Content-Type` header to `application/json` -- which is how the
    server tells the browser that it's sending it JSON instead of HTML.
- our fancy `npm run dev-api` script should have taken care of recompiling and
  restarting the server -- but if you have any syntax or typescript errors in
  your source code, it might get fouled up -- in which case you'll need to kill
  that script and re-run it. But if you did it right, you should be able to load
  the page up in a browser again and see a big JSON blob of your card data.
- use the dev tools inspector to verify that you correctly send the header
  `Content-type: application/json`.
- commit your work
- ok, next, we need to address the fact that we pulled the card data file out of
  it's old spot, and the flashcard web app was importing it somewhere. Go find
  that file (which should show a typescript red squiggle) and **delete the
  import**, because we're no longer going to be getting the card data from a
  typescript file, instead, we're going to be **fetching it from our API with a
  HTTP request.**
- (Aside: if you have **more than one place** in your app where the card data
  was imported, you'll need to fix this by passing the data as props instead of
  importing it more than once.)
- when you find the file where the card data was imported and you delete the
  import, you should get some errors later on in the file because the data
  variable no longer exists. Temporarily fix that error by hard-coding the
  variable to have the value of an empty array. So, for example, if your
  variable was called `cardData`, add a line somewhere that says:
  `const cardData = [];`.
- OK, now we've deleted all the data from our web-app, but it theoretically
  should be able to be run and visited in a browser, it just will have zero
  cards. Let's try to run the web-app now to see if it's still working (albeit
  with no data). To do that, start your web-app with `npm run start`. If you
  encounter errors in the terminal, see if you can fix them. If they are not
  easy to fix, don't go worry too much, we might need to keep going to get
  things un-broken. But it's also very possible that your web-app will build and
  run just fine with an empty set of cards.
- _(Note on terminology: up until this week, your flashcard app was just a
  single SPA web app. So I could always say 'start your dev server,' 'kill your
  dev server,' build, etc. and it was always the main and only flashcard app I
  was talking about. But now, this week, we're breaking the app into TWO parts,
  an **API SERVER** which is new, and the **SPA web app** which talks to the
  API. So, now there are two different parts of your app you will need to start
  and stop. I'll try to be clear which I'm talking about by saying "start your
  web-app" or "start the api server", etc. Try not to get confused!)_
- Now, to finish the homework, you'll need to have your web app **fetch the card
  data** from your API. Once you've got it working, the flashcards app should
  work the same way it always did, except that it will take a half-second to
  load the data from the API server instead of immediately loading and rendering
  with your cards. Before you start trying to implement this, **carefully read
  through the following list of hints and requirements**:
  - your card data will need to be tracked as **react state** from now on.
    Initialize it to an empty array (representing zero cards).
  - study the **last code example block** from the new stuff on
    [this page](/year-2/week-02). It shows nearly exactly how you will need to
    set up your state, and update it when the fetch request comes back.
  - implement a rudimentary **loading state** for your app, which should show
    whenever you don't have any card data yet from the server. To do this, just
    return early from your component with a message like `<p>Loading...</p>`.
    You would want to do this only when the `cardData.length === 0`.
  - remember, to have this working you'll need to have two terminal instances
    going at the same time: one with your api server running `npm run dev-api`
    and another running your web-app dev server `npm run start`.
  - When you try to fetch your API data for the first time, you **should get a
    CORS error.** That's good, I want you to get the CORS error first and see
    it, before you fix it. To fix the CORS error, see the "Fixing CORS error"
    section below.
  - once you've got it working (in dev mode), commit your work and then add the
    5 new cards detailed below in the **new cards** section. You don't need to
    build, because we'll need to do a few more steps to deploy an always-running
    production API for your built app to talk to, and we'll do that next week.
- **Fixing the CORS error:**
  - to make the browser allow your API request, your server has to **implement
    CORS**.
  - that just means two things: first, it has to respond to the `OPTIONS`
    request with a set of permissive CORS headers, and 2) it should also send
    the permissive CORS headers on non-OPTIONS requests as well.
  - start by modifying your `listenerFn` in `./server/index.ts`. Test if the
    method is `OPTIONS` by using `req.method`. If the method **is** `OPTIONS`
    **_return early,_** with a status code of `204`, a status message of
    `No Content`, and a set of super-permissive CORS headers (see New Stuff
    above ^^^).
  - if the method is NOT `OPTIONS` you still need to add the permissive CORS
    headers, but the status code and message should remain `200` and `OK`.
  - you should notice now that you're handling two types of requests that share
    3 of the same headers. Find a way to make sure you don't duplicate the CORS
    headers twice in your code, rather make it so you could update your CORS
    headers in one place and have both request types receive the change.
- **New Cards:**
  - in the `css` category, add a `box-sizing` card (forgot this one last week)
  - in the `HTML` category, add a card for `CORS`.
  - in the `HTML` category, add a card for the HTTP method `OPTIONS` (be sure to
    use the term "preflight" in your definition)
  - in the `node` category, add a card for "npm lifecycle scripts"
  - in the `node` category, add a card for `process.env` (in your definition,
    show how to set an env variable when invoking node)
