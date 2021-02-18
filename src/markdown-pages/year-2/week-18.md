---
path: "/year-2/week-18"
---

# Year #2, Week #18 💻 ⛴

_New stuff we learned this week:_ 🤔

## Customizing a request with window.fetch()

- we've [already learned](/summer-3) about and used `window.fetch` to make _HTTP
  requests_ from javascript. Up until now we've only been making **GET**
  requests. But, of course, you can make any type of request with
  `window.fetch()`. In order to send a **POST** request, you need to make use of
  the _optional second argument_ to fetch, usually called the _init_ object,
  which lets you customize the request in multiple ways. One of the keys of the
  `init` object is `method`, which allows you to override the default method of
  **GET**:

```js
// this defaults to being a "GET" request
fetch(`/cats`);

// the above is the same as writing this...
fetch(`/cats`, { method: `GET` });

// here I make a `PUT` request instead of GET
fetch(`/cats`, { method: `PUT` });
```

- you can also pass **custom headers** with your request, by specifying the
  `headers` property, like so:

```js
fetch(`/cats`, {
  headers: {
    Beep: `boop`,
  },
});
```

- you can also **supply a HTTP "body"** with the `.body` property:

```js
fetch(`/cats`, {
  method: `PUT`,
  body: `goatbanjorodeo`,
});
```

- a very common need is to **POST some JSON** (for instance, to an API server).
  To do that, we need to do 3 things with our request:
  - set the _method_ to `POST`
  - set a `Content-Type` header of `application/json` to tell the server what
    we're sending
  - pass the JSON **_as a string_** in the _body_
- Here's an example of a correctly-formed POST request of some JSON data:

```js
const myData = {
  herp: "derp",
  beep: true,
  jim: ["jam"],
};

fetch(`/cats`, {
  method: `POST`, // a.
  headers: { "Content-Type": `application/json` }, // b.
  body: JSON.stringify(myData), // c.
});
```

- there are lots more options you can pass to fetch, take a few minutes and
  peruse
  [this MDN page](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
  to learn more.

## "REST" resources

- tons and tons of apps, websites, and companies have had to build an HTTP API
  over the years. Because of this, certain _styles_ and _best practices_ have
  emerged in the collective wisdom of the worldwide developer community. One
  style of API design is called **REST**. Rest has flaws and shortcomings in
  certain scenarios, but it's simple to understand, and for straightforward
  use-cases works very well.
- the basic idea behind REST is the concept of a **RESOURCE**. A resource in
  REST is some sort of _"thing"_ or _interesting, uniquely identifiable entity_
  in your application that you are exposing access to. A lot of times these are
  the "nouns" in your application. Things like _a user_, _a blog post_, _a
  comment_, _an account_, _a payment_, etc. Many times these resources are
  similar to _stored records in a database_, but that's by no means a
  requirement.
- often times _resources have RELATIONSHIPS to other resources_, for instance a
  "blog post" resource might have a list of references to "comment" resources.
  Or it likely has a relationship to a "author" resource.
- REST APIs usually have a number of _resource-based_ **endpoints** that return
  either a single resource, or a collection (array) of resources. An
  **endpoint** is a specific URL that the API responds to, like
  `https://api.cats.com/breeds`.
- a "RESTful" api exposes **a set of urls** that map to resources in the system.
  Here's an example. Suppose you have an API with a "user" resource. It's likely
  you would want an _endpoint_ to return a list of all users. Normally, the
  endpoint for this would be _the plural name of the resource_, which would be
  `/users`. The response might look something like this:

```json
// GET https://api.app.com/users
[
  {
    "id": "2100a96a-bcb3-4c8f-8dbf-c82705da51b8",
    "first_name": "Jared",
    "has_beard": true
  },
  {
    "id": "b492a458-15bc-4b97-89d5-a98c1ec590ff",
    "first_name": "Willow",
    "has_beard": false
  }
]
```

- the above sample response returns an ARRAY (or collection) of "user"
  **resources**. It's also very common for REST apis to expose **endpoints for
  _each individual resource_ of a given type.** That would mean, continuing our
  example, that the record for Willow's user would be available at
  `/users/<resource-id>`, which, in our fictional example would be
  `/users/b492a458-15bc-4b97-89d5-a98c1ec590ff`:

```json
// GET https://api.app.com/users/b492a458-15bc-4b97-89d5-a98c1ec590ff
{
  "id": "b492a458-15bc-4b97-89d5-a98c1ec590ff",
  "first_name": "Willow",
  "has_beard": false
}
```

- notice how the above response is _no longer an array_ since we requested only
  a single item, and that the URL took the form
  `/<plural-resource-type>/<resource-id>`.
- the usual convention for **creating a new resource** is to `POST` some JSON to
  the _same url as the main collection fetch_ endpoint. So, in our example, if
  we wanted to _create a new user_ (assuming our API supported that), we would
  post a blob of JSON to `/users`. It's the server's job then to do something
  different when it gets a POST request to `/users` (create a new user), or when
  it gets a GET request (list the existing users).
- POST-ing to create a new resource often returns the same resource again,
  usually with a `201` status. Sometimes only the API server can generate **new
  IDs** for resources, so having a POST request spit back out the JSON for the
  resource can be valuable, in that it gives the newly generated ID.
- there are a lot more variations and subtleties of REST apis, but they're all
  fundamentally **resource-based** and usually share similar conventions of _URL
  endpoints_ as these simple examples.

## Homework Plan (two weeks)

- 2 days review all flashcards (in your app)
- 1 day Flashcard app assignment (pt. 1)
- 1 day Flashcard app assignment (pt. 2)
- 1 day Future Project assignment
- 1 day Akron Snowmen CONTENT assignment
- 1 day Akron Snowmen LAYOUT assignment
- 2 days touch typing practice
- **8** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice #1</Checkable>

<Checkable id="snowmen">Akron Snowmen Assignment</Checkable>

<Checkable id="flashcard-add-card">Flashcard Assignment</Checkable>

<Checkable id="future-project-start">Start Future Project</Checkable>

<Checkable id="typing-2">touch typing practice #2</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

<Checkable id="xp-6">Execute Program #5</Checkable>

<Checkable id="xp-7">Execute Program #6</Checkable>

<Checkable id="xp-8">Execute Program #7</Checkable>

<Checkable id="xp-9">Execute Program #8</Checkable>

---

## Flashcard App Assignment, pt. 1

---

- Slowly and carefully review all of the "New Stuff" above ^^^.
- Make sure you've addressed any feedback I left for you on last week's
  Flashcard MR, then merge your MR.
- Connect with vscode, switch to master, pull in your merged changes, delete
  your old branch, and make a new branch.
- Edit your "add a card" component to have _state_ for the things the use needs
  to enter, so that the fields that you chose actually work, and are tracked by
  state. You'll need as many pieces of state as you have form elements. _Note:
  if you need a refresher on using React state with **form elements**
  [ see this new stuff](/year-2/week-10)_.
- add a click handler to your "submit" button -- for now have it just
  `console.log()` the pieces of state you're tracking for a new card. In the
  next part of the homework we'll submit this to the server, but for now, just
  verify that you **a)** enter card info, and then **b)** console.log all of the
  tracked state when the submit button is clicked.
- when you've got it logging out correctly on a submit click, _commit your
  work_.
- Next, we're going to deal with a problem we left for ourselves from 2 weeks
  ago -- which is that we _hard-coded_ the _dev api url_ into your react
  component. This works fine when we're developing in dev mode, but it means
  that the "built" version of our site doesn't work, because it doesn't have an
  always running "production" API to talk to.
- find the component in which you're making the `fetch()` request to get your
  card data from the API. Extract the hardcoded `http://localhost:<port>` string
  into a variable, and set it to one of two things.
  - if `process.env.NODE_ENV` is **NOT** `"PRODUCTION"` then use the same
    localhost:PORT url you were using. (Look carefully, at this step, it will be
    easier if you test that it is NOT production, than if you test that it IS
    "DEVELOPMENT")
  - otherwise, use `http://api-<user>.howtocomputer.link` where `<user>` is your
    bash username.
- test your work by restarting your dev server (make sure your API server is
  running as well) -- it should still load your cards from the dev localhost url
  properly.
- commit your work.
- now we're going to add some stuff to your `package.json` to support spinning
  up an always-running production API server. Edit your `package.json` to add 2
  new scripts:

```json
{
  "scripts": {
    // [...]
    "preserve-api": "npm run compile-api && pm2 delete \"flashcards-$USER\"; true",
    "serve-api": "NODE_PORT=$PROD_API_PORT pm2 start ./dist/server/index.js --name \"flashcards-$USER\""
    // [...]
  }
}
```

- the new `"serve-api"` script is what we'll use to start a long-running
  production api server. It uses `pm2 start` which is sort of like `nodemon` on
  steroids, in that it will run your server in the background, and re-start it
  if it crashes.
- notice the _lifecycle script_ `preserve-api` -- this will run _before_
  `"serve-api"` and recompiles your server typescript one last time, and then
  the `pm2 delete` part just removes any running pm2 background job so there
  won't try to be two. You don't have to understand this part perfectly. (In
  case you're wondering the `&> /dev/null` part just redirects ALL output to a
  special `/dev/null` file which is like a trash can for output you don't care
  about. And the `; true` is just so that this command always exits
  successfully, even if the previous command exited with an error)
- last, we're going to modify the `start` and `build` scripts to set
  `process.env.NODE_ENV` correctly for each one. For the `"start"` script,
  change the script so that **right after the semicolon** (`;`) you add
  `NODE_ENV=DEVELOPMENT`, and for the `"build"` script, change it to **start**
  with `NODE_ENV=PRODUCTION `.
- let's test that the production build works by running two commands:
  `npm run build` and `npm run serve-api`. After both commands run, you should
  be able to go to your flashcard site's URL and it should correctly load your
  cards from your production API server.
- if everything works, commit your work, otherwise, carefully work through the
  last few steps again, looking for things you might have mixed up.

---

## Flashcard Assignment, pt. 2

---

- For this part of the assignment, we're going to get your app actually **adding
  new cards**.
- connect to your repo, fire up two terminals in vscode, and start up both your
  web-app server, and your API server.
- Start by finding the place where you `console.log()`-ed out the state when the
  "add new card" submit button was clicked. (Step 5 of part 1).
- For the next part, we need to make a **POST request with some JSON** for a new
  card to your api. But to do that, we're going to need the API url again, which
  is different based on whether we're in dev mode or production mode. We took
  care of this in Step 8 of the last part. We don't want to copy paste that code
  (that wouldn't be **DRY**), so instead:
  - create a new file called `./src/utils.ts`
  - make (and export) a function in that file called `apiUrl()`. It should take
    no arguments and return a string.
  - move the logic for figuring out the API url from step 8 of Part 1 into the
    function.
  - import and use the function in two spots -- first, the place where you fetch
    all of the cards from the server, and second, in the place where you're
    about to POST data about a newly added card.
- now that we have a nice function for getting the right api url, let's change
  our API to be more "REST-ful". Instead of requesting just `/` to get the
  cards, let's change it so that we request the **cards resource** at the
  endpoint `<url>/cards`. So, in the place where you fetch the cards, you'll
  need your code to look approximately like this:

```ts
fetch(`${apiUrl()}/cards`).then(() => {
  /* etc. */
});
```

- next move back to the spot in your "add a card" component where you were
  formerly console-logging. Make sure you've imported the `apiUrl()` function,
  and use it to **send a JSON-formatted POST request** to `/cards`. Refer to the
  "New stuff" again for all the details on _how exactly_ to POST json to with
  `window.fetch()`.
- pop open the dev tools and verify that your add-card form is sending a nice
  request, by looking at the "network" tab. (Hint: you can set it to only show
  you **XHR** requests, to make it easier to find. All window.fetch() requests
  are **XHR**). Once you find your request in the dev tools, make sure of 3
  things:
  - that it is sending a `POST` request
  - that it is sending the correct `application/json` Content-Type header
  - that it is sending a properly stringified batch of json in the body
- commit your work.
- next we're going to move over to the API server and actually implement this
  feature.
- the first thing we want to do is _switch our listener funtion so that it only
  sends back the full array of cards from the **/cards** endpoint._ To do that,
  we need to somehow know _what **path**_ was requested in the HTTP request. To
  do that, tiny Ryan Dahl provides a _`.url` property_ on the incoming request
  object. Let's check this out. Add a `console.log()` statement into your server
  code to log out `req.url`. Take a moment and ask yourself: "where will I see
  this console.log output?" Now refresh your browser so that it makes a new
  request for flashcards. Did you see your console.log()? Was it where you
  expected it was? Do you know why?
- Now that you know how to inspect the Path of the HTTP request (using
  `req.url`), modify your listener function code so that your API server _only
  sends back the card data_ **when a GET request is made to EXACTLY** `/cards`.
- make sure your web-app is still working, and commit your work.
- OK, now we want to _catch the POST requests to make a new card_. Add some
  logic in your request listener function to detect when:
  - the method is `POST`
  - **AND** the path (url) is `/cards`
- for now, just log out some TODO message like:
  `console.log("TODO: actually add a card here");`. Try adding a new card from
  your web app. You should see your console.log with your TODO message.
- if it logged out correctly, we just need to replace that console.log with some
  code to extract the JSON data from the POST request, and then save it
  somewhere. Simple enough! Actually, the first part of that (extract the JSON
  data) is a bit gnarly to do without using a framework like _express_, so I'm
  going to be "George" for you, and just give you a function that extracts the
  JSON. Copy paste this function into your `./server/index.ts` file:

```ts
function getRequestJson(req: http.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Array<string> = [];
    req.on(`data`, (chunk) => chunks.push(chunk));
    req.on(`end`, () => {
      try {
        const json = JSON.parse(chunks.join(``));
        resolve(json);
      } catch (error) {
        reject(error);
      }
    });
  });
}
```

- study carefully the _return type_ that function. It returns a `Promise`.
  That's because we sort of have to **wait** for the full HTTP incoming request
  to stream to our server before we can actually parse the JSON. That could take
  a little while, all of the data is not necessarily available at the time we
  start handling the request. You don't have to even look at the inside of this
  function, but just be clear that it returns a **Promise**. I made it a Promise
  with `unknown` inside, because `JSON.parse()` can theoretically return
  anything.
- ok, now, in the spot where you were console.log-ing, use the provided function
  to extract the JSON from the POST body. We don't want to muck around with
  `.then()` functions here, because this is 2021 and we can use `async/await`.
  So make your listener function an `async` function, and add a line like this:

```ts
const json = await getRequestJson(req);
```

- then, below that line, add a line to `console.log()` out the returned JSON.
  Test adding a new card again from your web-app, and verify that your server is
  console.log-ing what you expect.
- commit your work.
- now, the last thing we actually have to do is **save the new card**. to do
  this, we're going to do several steps.
- **First**, find the file with your card data. It's probably a typescript file
  called `card-data.ts` or something like that. Make a copy of this file, but
  rename the new copy to be: "cards.json". This should ruin the syntax
  highlighting and vscode will look weird and get mad at you. That's OK. Delete
  any typescript-y parts of the file (probably just a `export default ` at the
  top), so that _all that is left is what looks like a javascript object
  literal_. If you do it right and save your file, (and prettier is working),
  then prettier should take care of _converting it to valid JSON_. If for some
  reason prettier is not working for you, open a new terminal and type
  `prettier ./server/cards.json --write` to force it to be formatted. Don't
  proceed unless you get the file formatted correctly as JSON (you'll know if
  all of the top level _keys_ are wrapped in double-quotes).
- **Second** we're going to change it so that the server file reads this JSON
  instead of importing it. Go to `./server/index.ts` and remove the line that
  _imported the card data file re renamed_. Then, _add a line to import the core
  node `fs` module_. Up near the top of your file (outside your listener
  function), use the `fs` module (particularly `rs.readFileSync` and
  `JSON.parse()` to get your card data back into a usable javascript object, and
  into a named variable). _**Important NOTE: for the path to your cards.json
  file, use this: `${__dirname}/../../server/cards.json`)**_ For instance, if
  you used to have your card data imported as `cards` or `CardData`, then you
  would create a variable called `cards` or `CardData` which would be the result
  of JSON-parsing the contents of your `cards.json` file. Make sure you're using
  that variable for the `GET /cards` request. Stop here and test your web-app,
  it should still work.
- **Third and finally** - in the block of code where you are handling the "add
  card" incoming POST-ed JSON, after you get the parsed JSON from the request,
  **push the new card onto the end of the cards array, and then WRITE the data
  back to the disk using `fs.writeFileSync()`**. (Hint: make sure when you are
  writing back to the file that you remember to use `JSON.stringify()` so you
  don't end up writing the string `[object Object]` to your file. Hint 2: If you
  want to have your file stored with pretty-printed JSON, call
  `JSON.stringify()` with _two more arguments,_ `null`, and `2`, like this:
  `JSON.stringify(cards, null, 2)`).
- Let's take her for a test drive! At this point, you should be able to **add a
  new card straight from your web app**.
- One last item before we're done -- we don't want `cards.json` file to be
  _under version control_ so, add to your `.gitignore` a line excluding that
  file, so it doesn't get checked in with your next commit.
- test building your site and building & starting your production dev server by
  doing: `npm run build` and `npm run serve-api`. Your built flashcards site
  should work, and you should be able to add new cards to it.
- commit your work, push up a MR and slack us the URL of your flashcards site.

## Akron Snowmen Assigment (CONTENT)

---

- Note: this assignment should be completed and submitted during the _first
  week_ of the two-week chunk.
- connect to your AS repo, switch to master, pull from upstream, delete your old
  branch, and make a new branch. (Note: you probably will have to force delete
  your "nav-links" branch because I only merged one of them).
- create a new branch...
- next, each of you has a task to integrate/synthesize all of the planning work
  you all did last week for **one section**. I've posted in the `#akron-snowmen`
  all of your answers to last weeks homework, _plus_ the content-writing work
  that Harriet and Win did a few weeks ago.
- Read your assignment below, and then spend a few minutes reviewing all of the
  answers provided by each student that pertain to your assignment. Also refer
  to the content writing stuff from Harriet and Win. Then, make your best
  judgment of how to do your task based on everyone's written input, and
  implement the changes requested.
- **Winfield**:
  - You're in charge of the pink block. Write real text for the heading, the
    blurb, and all 6 squares.
  - If you want, you can pick icons, but that's not required.
- **Tabitha**:
  - Decide on a final number and set of nav links.
  - Change the text of each
  - Tweak the order, if necessary.
  - make sure they are pointing and scrolling to the right sections
- **Willow**:
  - You get the hero block. Read carefully some of the copy Harriet and Win
    wrote, and dial in the text of the hero block until it's good enough to show
    to Rod and Kristi.
  - You can change any of the text in the section, including the button.
- **Harriet**:
  - You get the "Get in Touch" block
  - Choose/write/dial-in all of the text for the whole block.
  - including phone number, address, and email
  - get it ready to show to Rod and Kristi
- **Kiah**:
  - your task is the "image and text" blocks.
  - don't worry about the images, but do get the headlines, blurbs, and button
    text totally dialed in and ready to show to Rod and Kristi
- Build your site, and push up a MR, and slack us both URLs.

---

## Akron Snowmen Assignment (LAYOUT COMPONENT)

---

- Note: this assignment should be completed and submitted after the "CONTENT"
  assignment above ^^^.
- _NOTE 2:_ we're going to make a totally **DIFFERENT** branch for this
  assignment than for the "CONTENT" assignment. Don't forget to create a new
  branch in the next step, or you will have problems.
- connect in vscode to your AS repo, checkout master, make sure you pull from
  upstream, and **make a new branch** called `layout-component`
- create a new component in the `components/` dir, called `<Layout />`. The idea
  behind this component is that it should handle _rendering all of the stuff
  common to all pages_, which probably includes the main nav, and the footer,
  and likely also the wrapper div that contains all of the blocks. The component
  should use the special _children_ prop to accept JSX as children.
- create your `<Layout />` component, and use it in two places: 1) use it in
  `./pages/index.jsx` to wrap all of the blocks on the home page, and 2) use it
  to create a _new page_ in a file called `our-team.tsx`. For the "innerds"
  (children) of the new page, you don't need to make anything, just pass it some
  sort of placeholder, like a `<h1>TODO, make a team page</h1>`.
- you probably will have to rename or extract css for the Layout component.
  Think carefully through which CSS should belong on the Layout component, and
  make sure that is created as `./components/Layout.css`.
- make sure both pages (`/` and `/our-team`) render correctly.
- build, submit a MR, and Slack both URLs.

---

## Future Project Assignment

---

- Pick which of your two future projects you'd like to start first (web app, or
  brochure site).
- Ponder how to break the beginning work necessary into chunks. Stroke your
  beard for a while.
- Come up with a plan for 4 weeks of work on your future project. This does NOT
  mean the whole project has to be done in 4 weeks, if it's complicated it might
  take a bunch more than that. This just means I want you to plan out the
  _first_ four weeks of work. It's also OK if you finish the task in 4 weeks. A
  few thoughts:
  - don't make each chunk of work too big, you'll have other HTC homework as
    well, don't overwhelm yourself
  - remember there might be setup tasks like initializing a repo, setting up
    storybook (if you want it), talking to the website owner, etc. These can
    (and probably should) be planned into your 4-week plan as well.
  - I can provide you with boilerplate for stuff like parcel/storybook/react,
    etc.
  - You might want to use Next.js, but you don't have to. In fact, if it's a
    brochure site, you are welcome to build it in plain HTML/CSS with no react,
    if that sounds better to you. Or, you can create it like we're doing with
    Akron Snowmen.
  - for your web-app, you're almost certainly going to want to build it with
    React, unless you just love raw DOM scripting.
- write up your 4-week plan, and submit it in the `#homework` channel.
