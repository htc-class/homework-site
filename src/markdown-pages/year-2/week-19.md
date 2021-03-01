---
path: "/year-2/week-19"
---

# Year #2, Week #19 💻 🚦

_New stuff we learned this week:_ 🤔

## Javascript Dates 📅

- Working with Dates & Times in Javascript is done (for now) through the global
  `Date` object.
- at it's most fundamental level, a Javascript date is **the number of
  milliseconds elapsed since midnight, Jan 1, 1970.** This is related to what is
  called **the unix epoch**, a system of counting time (in seconds, not
  milliseconds) since the same moment in 1970. You can retrieve this number of
  milliseconds by calling a _**static method**_ on the Date class: `Date.now()`:

```ts
Date.now();
// `1613787272648`
```

- `Date.now()` can be useful for performing _simple math_ for things like
  tracking how long some task took:

```ts
const start = Date.now();
await fetch(`/api.cats.com/breeds`);
const finish = Date.now();
const elapsed = finish - start;
console.log(`Network request took ${elapsed}ms!`);
```

- But perhaps even more common than using `Date.now()` is **instantiating a Date
  _instance_** with `new Date()`. Creating a `Date` object/instance in this way
  allows you to work with a point in time as an object, and access various
  information about it through a slew of _instance methods_ it provides:

```ts
const now = new Date();
now.getDate(); // `18` - day of month (1-31)
now.getDay(); // `3` - day of week (0-6)
now.getFullYear(); // `2021`
now.getHours(); // `14` - hour of day (0-23)
now.getMonth(); // `1` - month of year (0-11) ¯\_(ツ)_/¯
// etc... getMinutes(), .getSeconds(), .getTime(),
// etc... getTimezoneOffset(), and more...
```

- One useful date method is `.toLocaleString()` which (theoretically) produces a
  nice _human-readable_ version of a date/time that is _appropriate for your
  language (locale)_:

```ts
new Date().toLocaleString(); // "2/18/2021, 3:53:17 PM"
```

- Another handy method is `.toISOString()` which returns a string geared for
  computers to understand. A common use case for this method is to return a
  string \*\*that is suitable for storing as a string in a _database_ so that it
  can be turned back into a valid Date object again after getting pulled out of
  the database:

```ts
await saveBlogPostToDatabase({
  id: `123`,
  title: `All about goats`,
  author: `Kiah Henderson`,
  time: new Date().toISOString(), // <-- 👋
});

// then, many moons later... ⏳
const goatPost = await fetchPostFromDatabase(`123`);

// here we create a new date object referencing the
// moment in time when we saved the blog post long ago ^^^
const publishedDate = new Date(goatPost.time); // <-- 😎
```

- the example above shows that the `Date` _constructor_ accepts an (optional)
  argument. If you just call `new Date()` it gives you a date representing
  **that instant**. But it also accepts a dizzying variety of inputs, only _a
  few of which_ are shown here:

```ts
let today = new Date(); // now
let birthday = new Date("February 23, 1979 03:24:00");
let birthday = new Date("1979-02-23T03:24:00");
let birthday = new Date(1979, 1, 23); // the month is 0-indexed
let birthday = new Date(1979, 1, 23, 3, 24, 0);
let birthday = new Date(628021800000); // passing epoch timestamp
```

- the Javascript `Date` object is considered by basically everyone to be
  _fundamentally flawed_. That's probably because Brendan Eich created the
  language in 10 days, and copied a flawed Date API from Java that was soon
  after scuttled and replaced. But because we can't _break the web_ we're stuck
  with `Date`. For that reason, instead of _fixing it_, TC39 is working on a new
  API called `Temporal` which in a few years will likely completely replace the
  usage of the `Date` object.

### Javascript: Destructuring w/ Defaults

- we [already know](/week-35) that we can destructure arrays and objects in
  javascript:

```ts
// destructure an OBJECT
const person = {
  name: "Jared",
  hasBeard: true,
};
const { name, hasBeard } = person;

// destructure an ARRAY
const coordinates = [121, 423];
const [x, y] = coordinates;
```

- but **sometimes our objects/arrays have OPTIONAL values**. In that case, we
  can **fill in missing** values _while destructuring_, like so:

```ts
type Book = {
  title: string;
  numPages: number;
  isModernized?: boolean; // <-- note optional property
};

const turford = {
  title: "Walk in the Spirit",
  numPages: 121,
  // 👋 note: no `isModernized` property
};

// ✅ here we supply a DEFAULT VALUE while destructuring:
const { title, numPages, isModernized = true } = turford;
```

- You can supply defaults while **destructuring arrays** as well:

```ts
// in this type, BOTH values might be undefined
type Coordinates = [number?, number?];

const myCoord: Coordinates = [10]; // 👋 note missing second

// ✅ here we supply a DEFAULT VALUE while destructuring:
const [x = 0, y = 0] = myCoord;
console.log(x, y); // > 10, 0
```

### React: Default Props

- When we write regular functions in javascript, it's sometimes useful to supply
  **default values** to arguments, to make a more ergonomic, convenient API for
  the caller of our function, so they don't have to pass so many arguments,
  unless they want to. Like this function, for example:

```ts
function greet(name = "friend"): void {
  console.log(`Hello, ${name}`);
}

greet(); // `"Hello, friend"`
greet("Suzy"); // `"Hello, Suzy"`
```

- the same thing is true for React components. Sometimes you want to make a
  component customizeable, but you know that _most of the time it gets used_ the
  customization will not be used, so you don't want to force a prop to always
  get passed. The way to handle this (in Typescript/React, at least), is by
  making an **optional prop:**

```tsx
type Props = {
  name?: string; // <-- note the `?` 👋
};

const Greet: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name ?? "friend"}</h1>;
};

// then we can do both...
<Greet />
<Greet name="Suzy" />
```

- take careful not that on line 6 above, the type of `name` was
  `string | undefined` because of the `?` in the type. Because of that, I used
  the **nullish coalescing** operator to use either the string value of the
  name, or fall back to `"friend"`.
- but there is perhaps a better way to handle the optional `name` prop. Instead,
  we can **supply a default value WHILE DESTRUCTURING** the props, to guarantee
  that we have a type `string` within the component function body, like so:

```tsx
type Props = {
  name?: string;
};

// 😎 supply a default value during destructuring
const Greet: React.FC<Props> = ({ name = "friend" }) => {
  return <h1>Hello, {name}</h1>;
};
```

---

## Homework Plan

- 1 days review all flashcards (in your app)
- 1 day Flashcard App assignment
- 1 day Akron Snowmen assignment
- 1 day Personal Project assignment
- 1 day touch typing practice
- **4** days [_Execute Program_](https://www.executeprogram.com) homework

---

<Checkable id="review-flash-1">review all (app) flashcards</Checkable>

<Checkable id="typing">touch typing practice</Checkable>

<Checkable id="snowmen-copy">Akron Snowmen Assignment</Checkable>

<Checkable id="flash-validation">Flashcard App Assignment</Checkable>

<Checkable id="future-projects">Personal Project Assignment</Checkable>

<Checkable id="xp-1">Execute Program #1</Checkable>

<Checkable id="xp-2">Execute Program #2</Checkable>

<Checkable id="xp-3">Execute Program #3</Checkable>

<Checkable id="xp-4">Execute Program #4</Checkable>

---

## Flashcard App Assignment

---

- make sure to slowly and carefully read and review the "Javascript Dates"
  section of "New Stuff" above ^^^.
- make sure you've addressed all of my feedback from last assignment, then
  _merge your MR_.
- connect with vscode, switch to master, pull from origin, delete your old
  branch and **start a new branch**
- first we're going to start by adding some _client side **validation**_ to your
  "add a card" form. We don't want users to be able to submit new cards with
  empty strings, which is probably possible right now. Let's make it so that the
  form prevents some types of submissions for happening. Work on your form until
  these requirements are met:
  - if a user tries to submit the form with any of the fields _empty_, the form
    should not submit
  - the "submit" or "add card" _button_ should be greyed-out or disabled (both
    visually and functionally) somehow if any of the form elements that are
    required are empty. As soon as valid input is detected, it should become
    "enabled" visually and functionally.
  - a few spaces should _not_ count as valid input, so for instance, if for the
    name of the card I put 3 spaces, that should be still considered invalid,
    and the form should not submit.
  - also, extra leading and trailing whitespace should be removed from the
    input, so if I try to submit for the front of the card the string `" pwd "`
    it should actually send and store just the string `"pwd"`.
  - also, for your card "category", if you're _not_ using a select dropdown
    which guarantees that no _new_ category will be created, then you need to
    either **a)** chang your card category input to be a safer dropdown, or
    **b)** add an extra layer of validation on the client that no unknown
    category can be supplied. A is much easier than B. :)
- commit your work
- next, move over to your server, and let's add some similar validation there
  too. It's tempting to think that since we added validation on the client
  (browser) side, that we don't also need it on the server, but that's not
  generally true. For instance, there might be a bug in our javascript that lets
  bad data through, or a hacker might try to craft an HTTP request and send it
  directly to our API, thus bypassing our client-side validation. Therefore...
- add some validation on the server that meets these requirements:
  - if a card is submitted with an empty (or only whitespace) card front or
    back, do not save the card. Instead send back a `400 Bad Request` response.
  - **Extra Credit: ✨** check the _category_ that is submitted against current
    known categories, if the category is not already present in the card data,
    reject the request as well, also with a 400.
- commit your work
- for our final feature of the week, we're going to add "created" times to our
  newly added cards, created through the API. Here are some requirements for
  this feature:
  - for each new card added, the _server_ should **add the time it was created**
    in a `"created"` property of the card. You'll need to use a `Date` object,
    and I would recommend storing the date by making the `.created` property be
    the string returned by `dateObj.toISOSTring()`, as shown in the "new stuff"
    above ^^^.
  - then, on the client, you're going to want to _display these dates_ somehow,
    when reviewing cards. **BUT**, only _some_ of your cards will have the date,
    -- only the cards you add after this feature is complete. So we'll need to
    modify your `<Card />` component so that it _optionally takes a date_, and
    the card needs to look good _with_ and _without_ a date. This is a perfect
    time to use Storybook. So...
  - fire up your Storybook server, and add a new story for your "Card"
    component, which will be for the purpose of designing how you want the Card
    to look when there **IS a date**. And, of course, you'll need at least one
    story for a card **with no date** (which should already be covered by an
    existing story).
  - modify the `props` that your "Card" component takes, to indicate that it
    also takes a date, but that the date might not always be there. Make sure to
    express this correctly with a good Typescript Type.
  - you can decide what the _type_ of the prop will be, you might want to pass
    it the _ISO string_ you get from the server, or you might want to _turn that
    string back into a `Date` object_ **before** it gets passed down as a prop,
    in which case the _type_ can be `Date`, either way is fine. (Remember,
    classes are both _values AND types_ in Typescript, so `Date` is a perfectly
    valid _type_ as well.)
  - for your new story where you pass your Card component a date, figure out
    _where_ and _how_ you'd like to display your date. You can use any
    combination of methods on the Javascript Date object, or
    [look here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    for more documentation on formatting Dates. You might want to just show the
    _day_ that the card was created, or maybe the time as well. You might want
    to _prefix_ it with a word like `Added: 2/23/21`, or anything else that
    seems good to you, you decide.
  - make sure that your card looks good (and does not Error) when you have _no
    card_ -- you should have a storybook story covering this case as well.
  - once you've got it rendering nicely in Storybook, wire things up in your
    web-app by **passing the created date** to the card prop. Test that things
    are working by adding a new card, you should see the date it was added when
    that card comes up for review, while all of the old cards should show no
    date.
- commit your work
- build your site, build storybook, submit a MR, slack _all 3_ of the URLs

---

## Akron Snowmen Website

---

- Make sure you've slowly and carefully read the "Destructuring with defaults"
  and "Default prop values" section of "New Stuff" above ^^^.
- Connect to your Akron Snowmen repo, switch over to master, pull from
  `upstream` delete your branch from last week.
- Create a new branch.
- Fire up Storybook, because you're going to make _2 new components_.
- the First component I want you to make is a "Hero" block for a new "Team" page
  we're going to build. "Hero" is just a fancy web-developer word for the most
  important, biggest block at the top of the screen. We already have a "Hero"
  for our homepage. The idea for this hero is to have a big, cool-looking main
  block for "Team" page as well.
- peek in the `public/` directory, you'll see that I added 3 images there that
  Rachel took last week.
- _starting with a mobile screensize,_ design a Hero block that uses at least
  one of the new images, and has some text about the Akron Snowmen team. You can
  refer to the copywriting document posted a couple weeks ago to get some text
  for this block. You'll probably want to use the big group picture somehow, but
  you can get creative if you have a different idea. You might want to have the
  image be the _entire background_ of the block (like the homepage hero), or
  maybe not. You can decide. Don't go crazy, but spend a little bit of time
  trying to make it look presentable. Imagine you're going to have to show it to
  Rod, Kristi, and Josue (because soon you _will_). You also might want to make
  it `100vh` to match the homepage block -- again the decision is yours.
- make sure you block also looks good at larger screen sizes. Resize your
  browser window a bunch to test that there are no funky in-between sizes where
  it looks janky.
- Commit your work.
- Next we're going to design work on displaying each team member in their own
  block. Ideally, what we'd like is to show:
  - their name
  - their picture
  - a short bio
- If you think about it, we've already got a component that is pretty well
  suited for this, the `ImageAndTextBlock` component. Let's see if we can stay
  DRY and re-use this component, by slightly modifying it to work for team
  members.
- Open the `ImageAndTextBlock.stories.tsx` file. Let's export another named
  story (besides `BasicStory`) to cover the use-case we're working on. Name the
  named export `TeamMember`, like so:

```tsx
export const TeamMember = () => {
  // ...tsx here
};
```

- Pass the component one of the images of Josue from the images directory, and a
  his name as the `headerText`, with a fake bio as the `children`. Pick some
  background color that seems good to you (you can just copy one of the props
  from the other story).
- It should look pretty good as is, except, that it has a "Learn More" button.
  That makes sense for how this component is used on the homepage, but not in
  this context.
- Modify the component so that it takes a prop indicating whether or not it
  should have a "Learn More" button -- but here's the kicker: **make the prop
  have a _default value_ so that you don't have to pass the prop**. We shouldn't
  have to change the places where the component is already used. Rather, when we
  want to "turn off" the button, we can pass a prop to override the default
  value.
- Finally, to mix things up a little bit, it would be nice if we could
  _alternate the alignment_ of the images, to create a "staggered" appearance,
  so that when we use this component to show Rod, Kristi, and Josue's blocks, we
  can have Rod's image on the **left**, then Kristi's image on the **right**,
  and then Josue's image on the **left** again.
- Add another optional prop (with a default value) that allows you to specify
  the _alignment_. Give it a really nice, precise Typescript type, and make sure
  to give it a default value (you shouldn't have to modify how the component is
  used in `pages/index.tsx`).
- before you try to make this feature _work_, add another Storybook story to
  make sure you've got one for **left alignment** and **right alignment**, have
  the _right aligned_ story visible while you're implementing the feature below.
  (**Hint:** If I were doing this, I might make a _composite_ story that shows
  two blocks within the same story (like `BasicStory` shows 3), one for each
  alignment. That way, I could work on the right-alignment and immediately see
  in Storybook if I broke the left alignment)
- With your storybook story open to guide you, use your React/Html/CSS wizardry
  to make the feature actually work, aligning the image either on the left or
  the right based on the prop. (Note: for very small screens, the image should
  _always still be on top_)
- **Hint:** don't be tempted to rely on the _order the elements appear in the
  HTML_ here, that will probably foul up the small screen requirement I
  mentioned above (see Note: in last step). Instead, use your CSS skills to
  modify the _order_ the elements are _displayed in,_ without changing the HTML
  markup to put the image before or after the text portion.
- Once you've got it looking right in Storybook, kill your storybook server, and
  commit your work.
- next, fire up regular dev server, then use your new work to quickly flesh ou t
  the `pages/our-team.tsx` file. In it, put the new Team Hero component, and use
  the `ImageAndTextBlock` components three times, once for Rod, Kristi, and
  Josue (make sure to alter the alignment)
- commit your work.
- build your site, submit a MR, and post both URLs in slack.

## Personal Project Assignment

---

- NOTE: Some of you got started on your personal projects already, which is just
  fine (though not required). If you did, skip to step **STEP 13**, you'll do a
  slightly different assignment than those just starting out.
- If you haven't started your personal project yet _slack me for some info on
  how to get started_ on the project (so you don't have to create all the
  boilerplate for npm, react, storybook, parcel, etc)
- Once you've cloned down the boilerplate repo I recommended, you'll need to
  start this over as a **brand new git repo**, since you don't want to be
  committing on top of the boilerplate repo I gave you. See if you can remember
  how to convert an existing git-repo into a _brand new repo_, and do that. If
  you can't figure it out, check some old "New Stuff", and then Slack me, if
  you're still stumped.
- _Before you do any work_, but after you created a brand new repo, do an
  initial commit, adding all the files from the repo.
- Next, create a new repo on Gitlab for this project.
- Add the new Gitlab repo _as a remote_ called "origin". (You have to do this
  manually because blew away the old, wrong `origin` remote of the boilerplate
  repo in the step above). If you can't remember, search the homework site for
  "Git remote" and find the correct info.
- Push up `master` to your new repo on Gitlab (you still should not have done
  any work. The reason we're pushing up master with just the files from the
  boilerplate is so that you can do merge requests, so that I can see the code
  you've added.)
- Next, **create a new branch**
- Check the `package.json` file and make a few tweaks to it so it doesn't
  reference the boilerplate. Especially be sure to modify the "build" script (if
  it has one) to build into a folder that is properly named, not something like
  `www/parcel-boilerplate`.
- Do the first chunk of work you planned for yourself in your project planning
  homework from last class.
- when you're done, make sure you've committed all your work, build your site,
  and push up a MR.
- **🛑 STOP at this point** (the rest of the instructions are for those who
  already started)
- 👋 \*\*This step and beyond are only for those that ALREADY started. Before
  you do any more work, commit what you've got, and then spend a few minutes
  going over your code to:
  - remove `console.log()`
  - run prettier
  - rename poorly named variables/components
  - remove any files or chunks of code you're not using
  - generally making the code _ready for review_
- once you've done the above, commit your work, and slack me during "office
  hours", sending me the directory of the project as it currently stands. I'll
  poke around for a minute and we'll get some stuff sorted out so that I can
  review your work in a MR. Follow whatever directions I give you.
- while I'm slacking with you, I'll either get you to the point where you submit
  a MR, or explain how you can do it on your own. Either way, submit the MR,
  build your site, and slack me both URLs.
- I'll review your MR, and communicate 2 things:
  - one, I'll leave feedback on some things I'd like you to change/improve
  - two, depending on how many changes I request, I'll either tell you that
    addressing my feedback will be enough for this week's assignment, or I'll
    tell you to do another chunk of work after you fix the feedback.
- Address the feedback on the MR I gave you, then, merge it.
- **ONLY IF** (according to step 16b) I said that you **should go on to do
  another chunk of work,** then:
  - switch over to master, pull your merged in changes (from step 17)
  - create a new branch
  - do the first chunk of work you planned for yourself in last weeks project
    planning assignment
  - commit your work, build, and submit _another_ MR
  - slack me both URLs (again)
