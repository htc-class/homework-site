---
path: "/week-24"
---

# Week 24 Homework 💻 🐯

_New stuff we learned this week:_ 🤔

### How to build complicated programs

- take **Baby Steps**
- use **Wishful Thinking** _"that's George's problem!"_
- **console.log()** early and often
- if you write a lot of code at once, you're going to have a hard time debugging it. Write and test your code in small enough increments that if something goes wrong, it's easy to figure out where. Don't build code on top of bad code.

### Vim

- `<CTRL-o>` - goes back to the cursor location before your previous _jump_.
- `<CTRL-i>` - goes forward to the more recent _jump_ location (opposite of `<CTRL-o>`).

### Javascript

- **Array.concat()** is a _method_ on arrays that joins an array to another array, returning the new joined array:

```js
let nums = [1, 2, 3];
let strs = ["foo", "bar", "baz"];

let joined = nums.concat(strs);
// joined is: [1, 2, 3, 'foo', 'bar', 'baz'];
```

### HTML

- the `form` element groups together elements that receive user input and are _submitted_ to the server somehow
- the `action` attribute of the `<form>` element designates the URL that the form data should be sent to. Not specifying an `action` is the same as making the `action` the same as the _current url_.
- the `method` attribute of the `<form>` element designates which **HTTP METHOD** the form should submit with -- not specifying is the same as specifying `GET`

```HTML
<form action="./submit" method="GET">
<!-- form elements here -->
</form>
```

- the most common way to **submit a form** is to use a `<button>` element with `type="submit"`:

```HTML
<form>
  <button type="submit">Submit Me!</button>
</form>
```

- the `<input>` element is the workhorse of HTML forms, it can have several different types, probably the most basic is `text`:

```HTML
<input type="text" />
```

<div class="form-example" data-text="Try it out!">
  <input type="text" />
</div>

- the `<input>` element can take a **placeholder** attribute, which by default renders as gray text inside the element, giving users and indication of what sort of text they should enter:

```HTML
<input type="text" placeholder="Your Name" />
```

<div class="form-example" data-text="Try it out!">
  <input type="text" placeholder="Your Name" />
</div>

- you can also **pre-fill** the `<input>` element using the **value** attribute:

```HTML
<input type="text" value="Bob Smith" />
```

<div class="form-example" data-text="Try it out!">
  <input type="text" value="Bob Smith" />
</div>

- all HTML form elements **need a NAME** attribute -- this is so that the server has a _label_ for all of the pieces of data

```HTML
<input type="text" name="first_name" />
```

- **PLEASE NOTE!!!** carefully read the next bullet point, because I showed you wrong in class!
- many times you want to explicitly **label** your form elements, and the `<label>` element is the right tool for the job. It should be _connected_ to the **id of the input** (not the `name` like I showed in class) using the `for` attribute, like so:

```HTML
<label for="my-input">First Name:</label>
<input id="my-input" type="text" name="first_name" />
```

<div class="form-example" data-text="Try it out!">
  <label>First Name:</label>
  <input type="text" name="first_name" />
</div>

- **number** inputs can be created by using an `<input>` with `type="number"`, like this:

```HTML
<label for="age">Your age:</label>
<input type="number" id="age" name="age" />
```

<div class="form-example" data-text="Try it out!">
  <label for="age">Your age:</label>
  <input type="number" id="age" name="age" />
</div>

- **checkboxes** are created by using an `<input>` with `type="checkbox"` -- the best way to code these is _inside of a label element_ like so:

```HTML
<label>
  <input type="checkbox" name="goats" />
  Do you like goats?
</label>
```

<div class="form-example" data-text="Try it out!">
  <label>
  <input type="checkbox" name="goats" />
    Do you like goats?
  </label>
</div>

- a **radio button** works like a 1980s car radio button. They have to _all have the same `name` attribute_ for them to work correctly, and you set one of them to being selected to start by using the `checked` attribute:

```HTML
<label for="boy">
  <input type="radio" name="gender" checked /> Boy
</label>
<label for="girl">
  <input type="radio" name="gender" /> Girl
</label>
```

<form class="form-example" data-text="try it out!">
  <label for="boy">
    <input type="radio" name="gender" checked /> Boy
  </label>
  <label for="girl">
    <input type="radio" name="gender" /> Girl
  </label>
</form>

- a **select** creates a dropdown-like thing, you use it like this (indicate which one should be selected by default using the `selected` attribute):

```HTML
<label for="animal">Favorite Animal</label>
<select id="animal" name="fav_animal">
  <option value="camel">Camel 🐫</option>
  <option value="goat" selected>Goat 🐐</option>
  <option value="llama">Llama 🦙</option>
</select>
```

<form class="form-example" data-text="try it out!">
  <label for="animal">Favorite Animal</label>
  <select id="animal" name="fav_animal">
    <option value="goat">Goat 🐐</option>
    <option value="camel">Camel 🐫</option>
    <option value="llama">Llama 🦙</option>
  </select>
</form>

- a **textarea** element is designed to take a big chunk of text, like a comment, or a blog post. You can specify how many rows and columns it displays by default using the `rows` and `cols` attributes -- and to set an _initial value_ you just put some text between the opening and closing tag:

```HTML
<label for="comment">Leave a comment:</label>
<textarea id="comment" name="comment" rows="3" cols="25">
  I love your goat!
</textarea>
```

<form class="form-example" data-text="try it out!">
  <label for="comment">Leave a comment:</label>
  <textarea id="comment" name="comment" rows="3" cols="25">
    I love your goat!
  </textarea>
</form>

### Forms and Servers

- a form submitted with `method="GET"` turns all of the _name/value_ pairs into a whacky long string of data that gets **appended to the URL** called **query parameters**, they look like this:

```txt
?name=Jared&age=41&fav_animal=goat
```

- the query parameters string _starts with a `?`_ and if there are more than one pair of values, they are separated with a `&` character.
- for `POST` requests, the data in the form is submitted as part of the `body` of the request itself. We'll learn more about this in weeks to come.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.howto-type.com)
- [CCCS #22](https://htc-viewer.netlify.com/?id=4RPtJ9UyHS0)

---

## Homework Plan:

- 1 days reviewing and adding to flash cards
- 2 days node homework
- 2 days web homework
- 2 days touch typing practice
- 1 days watch [CCCS #22](https://htc-viewer.netlify.com/?id=4RPtJ9UyHS0)

### Homework day 1

- [ ] flashcard assignment
- [ ] Node Homework 1
- [ ] touch typing practice

### Homework day 2

- [ ] Web Homework #1 & #2
- [ ] watch [CCCS #22](https://htc-viewer.netlify.com/?id=4RPtJ9UyHS0)

### Homework day 3

- [ ] Node Homework #2
- [ ] touch typing practice

### Homework day 4

- [ ] Web Homework #3 & #4

---

### Flashcard Assignment

- carefully review all of your existing cards _upside down_ -- reading the back of the cards and guessing the fronts
- add 2 new cards in the `vim` category:
  - `<CTRL-o>`
  - `<CTRL-i>`
- add 9 new cards in the HTML category:
  - `<form>` element
  - `<input>` element
  - `<button>` element
  - `<select>` element
  - `<option>` element
  - `<textarea>` element
  - `<label>` element
  - `<form>` `action` attribute
  - `<form>` `method` attribute

---

### Node Homework #1

---

- `ssh` into your home dir, make a new dir: `~/node/week24`, `cd` into it
- make a node script called `numbers.js` that takes any number of numeric arguments from the command line, and puts those numbers through a stream of transformations:
  - convert them to real javascript numbers (not strings, which `process.argv` always is)
  - square them (multiply them by themselves)
  - divide by 2
  - add 1000
  - remove any numbers greater than 10,000
  - subtract 1500
  - remove any numbers less than 0
  - log out each new number on a line, prepended by `=> $`
- you must use the following techniques:
  - baby steps
  - wishful thinking
  - console.log-ing frequently
  - NO `for` loops allowed
  - you should have at least 5 usages of `Array.map`
  - you should have at least 2 usages of `Array.filter`
  - you should use `Array.forEach` at least once
  - this would be a good one to use `runjs` for 👍
- when you're done, it should work like this:

```bash
$ node numbers.js 1 55 325 4 45 180
=> $1012.5
=> $512.5
=> $5660.5
```

- use the this string of arguments to check you work: `1 55 325 4 45 180`, it should output the exact same numbers as shown above
- **Extra Credit: ✨** format the numbers so that any number over 1000 has a comma in the right place, so it comes out like this:
- Slack us when you've finished!

```bash
$ node numbers.js 1 55 325 4 45 180
=> $1,012.5
=> $512.5
=> $5,660.5
```

---

### Node Homework #2

---

- `ssh` into your home dir, cd into dir: `~/node/week24`
- make a node script called `query-params.js` that takes pairs of named input using colons like `name:Jared` and `age:42`. It should accept any number of these pairs and echo out a properly formed HTML `GET` query string, like this:

```bash
$ node query-params.js name:Jared age:41 animal:goats
> ?name=Jared&age=41&animal=goats
$ node query-params.js foo:bar friend:George kids:14
> ?foo=bar&friend=George&kids=14
```

- requirements:
  - no loops
  - **Extra Credit: ✨** change the script so that if the user types in `name:<something>` the name always gets turned into `Jared`
  - **Extra Credit: ✨** change the script so that the first argument becomes the beginning of a url, to which the query parameters are appended, so if I type `node query-prams.js http://google.com foo:bar q:cats` it will output: `http://google.com?foo=bar&q=cats`
  - **Kiah Credit: ✨** any pairs that have a _numeric_ value (like `kids:14`) change the key to uppercase, and subtract 10 from whatever number they pass, so `kids:14 foo:bar` would become: `> ?KIDS=4&foo=bar`
  - Slack us when you've finished!

---

### Web Homework #1

---

- carefully review the whole "New Stuff" above ^
- `ssh` into your home dir, make and `cd` into a new dir: `~/www/week24`
- make a new webpage called `my-form.html`, it should meet these requirements:
  - it should contain a header titling the form
  - it should contain a single `<form>` element, which contains at least one _each_ of:
    - text input
    - number input
    - checkbox
    - radio
    - textarea
    - select
    - submit button
  - each element should be labelled
  - come up with some sort of made up theme that ties all of the form elements together, making it a form that makes sense for some kind of task
  - it must have an external CSS stylesheet
  - it should have some basic styling applied (but don't worry about making it look too great)
  - Slack us your URL when you're done
- next, set the `action` of your `form` to this url: `http://server.howtocomputer.link/week24/echo` -- this is a script I made that just prints back some basic info about the request that it is sent
- try submitting your form a few times, make sure you understand what you're seeing
- explicitly set your `<form>` `method` to `GET` -- and then submit a few times with different values -- each time examine the query parameters that get added to the URL -- does it make sense how the query params are being constructed?
- what does the browser do when you submit a field that has a string containg a _space_ in it -- how is that added into the URL's query parameters string? Experiment and find out.
- try changing your form to send a `POST` request, and examine the result
- figure out what value gets sent for a checkbox that is _not checked_

---

### Web Homework #2

I made a script at the URL `http://server.howtocomputer.link/week24/login` -- that shows a success message if you send it `POST` request with the data `username` as `HTC` and `password` as `goatbanjorodeo`. Create a webpage with an HTML form that submits to this location, such that if you put the right info into your form and submit it, you see the success message.

### Web Homework #3

---

- Visit the MDN page on the `<input>` HTML element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- pick a new input `type` that we didn't go over in class that seems interesting to you -- don't use any type already posted by another class member
- create a simple webpage that shows off the usage of that input type, including a few sentences of text explaining anything useful about it.
- make sure the form submits to the `http://server.howtocomputer.link/week24/echo` URL, the same one from "Web Homework #1", so you can see what type of data it produces.
- Slack us the URL so we can learn about the input type you used.

### Web Homework #4

---

- view [my example form page](./form-layout) and adjust your browser's size from very small to very large.
- make a webpage where you replicate the form fields and responsive layout using _flexbox_ and _media queries_.
- some requirements:
  - don't look at my CSS _or_ HTML
  - use an external stylesheet
  - use flexbox
  - use media queries
  - don't worry about matching the colors or padding exactly
  - but do change the color at the breakpoint, like the example
  - I only used one breakpoint, at `768px` wide, I changed things, so you should be able to do this with only one media query
  - Slack us the URL when you're done
