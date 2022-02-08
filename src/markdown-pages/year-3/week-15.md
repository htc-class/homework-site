---
path: "/year-3/week-15"
---

# Year #3, Week #14 💻 🏏

## Homework Plan

- 1 day Monkey Assignment #23 🐒
- 1 day review all flashcards in your (new Netlify) app.
- 1 day touch typing practice
- 2 days Flashcards API assignment (Login/Signup)
- **3** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="login-signup">Flashcards API (Login/Signup)</Checkable>

<Checkable id="monkey-23">Monkey Assignment #23 🐒</Checkable>

<Checkable id="flash-review">Review Flashcards</Checkable>

<Checkable id="typing-1">touch typing practice</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

---

## Flashcards API Homework (Login/Signup)

---

- 🔎 Read through the whole assignment first before beginning.
- Read the "node password hashing" section of "New Stuff" from
  [last week](/year-3/week-14).
- Make a new branch.
- In your main `src/index.ts` file, add a line under where you add the CORS
  middleware that says: `app.use(express.json())` -- this will allow express to
  parse JSON bodies sent to your routes.
- Next, make a shell route handler in index.ts that listens for `POST` requests
  to `/signup` with this code in it:

```ts
app.post(`/signup`, async (req, res) => {
  console.log(`json body received:`, req.body);
  res.json({ temp: true });
});
```

- Next add a "sign up" request in your `api.http` file, with this content:

```txt
###

# Signup

POST http://localhost:YOUR_PORT_HERE/signup HTTP/1.1
Content-Type: application/json

{
  "email": "foo@bar.com",
  "password": "cafed00d"
}

###
```

- Be sure to change `YOUR_PORT_HERE` to be your port.
- Start your dev server, send the new request -- you should see the JSON body
  logged out in your terminal, and it should return the json `{"temp": true}`.
- Take a brief tour of your `route-responders.ts` and database/mock database
  files to remind yourself how they work. Remember, the idea behind the concept
  of a route responder is to _extract a testable function_ out from the messy
  world of HTTP requests and side effects. And the reason we have a database
  abstraction is so that we can _mock_ various responses for the sake of
  testing. We're going to be adding two new route responders and two new methods
  on our database abstraction to implement login/signup, so make sure you're
  clear and fresh on how this works.
- Next, you'll actually implement the signup feature, now that you've got the
  shell of a route roughed in, and the JSON body getting parsed. It should meet
  these criteria (read them all ahead of time):

  - The work should not be done right inside the function in index.ts -- rather,
    the `req.body` should be passed as an _input_ to a new _route responder_
    which returns a status and some json, so it is testable.
  - The route responder should be fully tested, including all of the error
    states, like invalid json, user already exists, database borks unexpectedly,
    etc.
  - You'll need to create three new methods on your `Database` abstraction type:
    `createUser`, `createUserToken`, and `getUserByEmail`. Unlike the
    `getAllCards` method, all three of these will end up having one or more
    arguments as input.
  - When the route is invoked, check if there is a user with that email address
    already in the database, if so, the route should error with status code 400
    and some appropriate error message.
  - If a user does not exist with that email address, create a new user in the
    `users` table with the given email address and password.
  - Don't insert the plain text password, insert the hashed version instead
    (refer to new stuff above, you'll need to install `bcrypt` as a dependency
    and `@types/bycrypt` as a dev dependency)
  - Once the user row is created, also create a new row in `user_tokens`. It
    should have the foreign key set up correctly (ie, the `user_id` row should
    be set to the new users `id` value).
  - The json you return when things go well should be: `{"token":"SOME_UUID"}`
    where SOME_UUID is the id of the `user_tokens` row you created. This is what
    will eventually be used to authenticate the user, and will be stored in a
    cookie in the web app.
  - your jest tests should all be passing, and then (if you haven't done so
    before), put the route-responder into the `/signup` function in index.ts and
    hook it up. Test that it works by starting your dev server and sending the
    request from `api.http`. (Note, if you send the request twice, the second
    one should fail because the email address would be a duplicate, unless you
    change the email address. Verify this.)
  - because this is a pretty involved feature to implement, and you've only once
    worked with route responders and your database abstraction, I've made monkey
    style videos for you to use. I would like you to try to work on your own
    somewhat, and only use the videos until the idea clicks for you, then try to
    keep working on your own, same as with monkey. Try to avoid just watching
    the videos and copying what I do, try to internalize the concepts and use
    the video to keep you on the right track.
  - videos for this section are:
    [video 1](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/09--login-signup-pt1.mp4)
    and&nbsp;
    [video 2](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/10--login-signup-pt2.mp4).

- when you've got all that working, review your code, clean things up, and
  commit. _(**NOTE:** this is a logical stopping point, to break this up into 2
  days)_
- Next, create another route following basically the same steps, but this time
  for json POST-ed to `/login`. Differences/requirements (read all ahead of
  time):
  - the posted json body should be in exactly the same format
  - I want you to also have a test request in `api.http`
  - when the route is hit, instead of _creating a user_, it should try to
    _select_ an existing user from the database with that email address.
  - if the email address is not found, send a 404 with an error message.
  - if the user is found in the db, _compare_ the plain text password sent in
    the JSON body with the _hash_ stored in the database (see "new stuff" for an
    example of how to do this). If the passwords don't match, return 400 with an
    error message.
  - if the passwords _do_ match, create a new token, much like you did for the
    other feature, and send back the same response.
  - as with the other one, this should be encapsulated in a route responder, and
    the database access should be done behind a method on the db abstraction.
  - the route responder should be thoroughly tested, with cases covering not
    finding the user, passwords not matching, generic database problems, and the
    happy (successful) path.
  - [video for this section](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/flashcards/11--login-signup-pt3.mp4)
- when you've got it all working, review your code, clean things up, and commit.
- Push up a MR, review your diffs, clean stuff up, and slack me the URL.

---

## Monkey #23 🐒

---

- Address all feedback from prior MR's, and merge.
- Create a new branch.
- Double-check that you did the first two steps.
- Start where you left of last time, **after** the _3.6 Conditionals_ section,
  which is labeled **3.7 Return Statements**. Complete the section.
- Commit your work.
- As always, make sure to try to do as much as you can without the videos, but
  always also watch the videos and update your code to (mostly) match.
- [Video link](https://flp-assets.nyc3.digitaloceanspaces.com/storage/htc-videos/monkey/33--3.7-eval-return-statements.mp4)
- Submit a MR, **Review your diffs and fixup!!**, then slack the MR url

---
