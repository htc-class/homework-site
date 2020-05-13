---
path: "/week-33"
---

# Week 33 Homework 💻

_New stuff we learned this week:_ 🤔

## HTML

- the `<header>` HTML tag is is used to define the _header_ for a document or a section. It's a _block-level_ element. Often there is just one on a page, but there can also be sub-`<header>` tags if it makes sense for another chunk of your webpage to also have a _header_.
- the `<nav>` HTML tag is a _block-level_ element represents a section of a page whose purpose is to _provide navigation links,_ either within the current document or to other documents. Common examples of navigation sections are menus and tables of contents.
- the `<footer>` HTML tag is a _block-level_ element that represents a _footer_ for a webpage, or a section of a webpage. A footer typically contains information about the author of the section, copyright data or links to related pages.
- the `<section>` HTML tag is a _block-level_ element used to group together **related elements.** It's sort of like a div, but has a bit more _meaning_, in that it groups together something into a kind of a logical unit.
- the `<main>` HTML tag is a _block-level_ element that represents the dominant, or most-important **content** of the entire webpage.
- the `<article>` HTML tag is a _block-level_ element that represents a self-contained **thing** on a website that **would make sense on it's own**, if it got snipped out and handed to someone by itself. Examples include: a forum post, a magazine or newspaper article, a product that can be purchased, or a blog post.
- the `<aside>` HTML tag is a _block-level_ element that represents a section of a page that consists of content that is only **somewhat, or indirectly related to the main content**, and which could be considered separate from that content. Such sections are often represented as _sidebars_ in printed typography. A good rule of thumb is that a webpage should still be _totally usable and make sense **if you removed the aside**._

## Web Servers

- a web server is a program that _listens for HTTP **requests**_ and **responds** with an _HTTP response_.
- on our HTC computer so far, I have a webserver program called `nginx` set up, and it just maps the `path` part of the HTTP request (like `/week32/virtuoso`) to the file system, trying to find matching HTML files.
- Another option is to write computer code to send back the HTTP response. Remember an HTTP response is just a string of text, so if you're program can make a string of text and listen for HTTP requests, you can make a webserver.
- computer code that runs on a machine creating HTTP responses is called **back-end, or server-side code**. That means it runs on a computer somewhere that's connected to the internet, and just spits out a string. This is in contrast to **front-end, or client-side code** which is code that gets sent to the user and executed in their browser (like javascript in the browser, html, and css).
- until 2007, if you wanted to write backend code to make a web server, you had to use a language like PHP, C, Python, or Ruby. But when Ryan Dahl created `nodejs` that all changed, now you could use javascript as a back-end or "server-side" language.
- nodejs ships with a `http` **core module** that allows you to write a single function to be executed every time an HTTP request comes in. It works like this:

```js
const http = require("http");

// create the server
const server = http.createServer(runOnEveryRequest);

// start the server listening on a PORT
const PORT = 9999;
server.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});

// this function gets called when a request comes in
// and gets passed TWO objects, request, and response
function runOnEveryRequest(request, response) {
  // this is where the magic happens, you get to make up
  // your own HTTP response 😎
  response.writeHead(200); // set the status code
  response.end("<h1>#goatbanjorodeo</h1>"); // send html
}
```

- the core `http` module is great and all, but nodejs users quickly figured out some patterns that make it even easier to write web servers in node, and they released these as **npm packages**. By far the most popular web-server package is called `express`. It's kind of just a wrapper around the `http` core module, but it's easier to use.
- to use `express` you have to install it with npm: `npm install express` and then you use it like this:

```js
const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Hello from Express");
});
```

- what's neat about express is that it allows you to write different functions for different **routes**, using _method_ named `.get()` for GET requests, `.post()` for POST requests, and so on, like this:

```js
server.get("/turtles", (req, res) => {
  res.send("Turtles are cool. 🐢");
});

server.get("/dogs", (req, res) => {
  res.send("Dogs are cool. 🐶");
});

server.post("/new-blog-post", (req, res) => {
  // this will be run only when a POST request
  // comes to the `/new-blog-post` path
});
```

- you can get access to **query parameters** by reading them off the `request` object, like this:

```js
server.get("/", (req, res) => {
  // req.query will be an OBJECT representing the query params
  // so if you requested `/?foo=bar&jim=jam` it would be:
  // { foo: 'bar', jim: 'jam' }
  console.log(req.query);
});
```

- express also lets you put in neat **placeholders** for part of the url. These begin with a _colon_. So the path `/users/:id` would match `/users/jared` and `/users/tabitha`, etc., and you can get the matched string using `request.params`, like so:

```js
server.get("/users/:id", (req, res) => {
  res.send("Greetings, " + req.params.id);
});
```

- to actually get an express app listening, you have to start the app from the shell, by typing `node <file>`.

---

## Useful Links:

- [Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table)
- [TouchType.co](http://touchtype.co)
- [How To Type](https://www.how-to-type.com)
- [CCCS #30](https://htc-viewer.netlify.com/?id=guvsH5OFizE)
- [GitLab](https://gitlab.howtocomputer.link)

---

## Homework Plan:

- 1 day flashcard assignment
- 2 day touch typing practice
- 2 (or 3) days web-server homework
- 2 days watch [CCCS #30](https://htc-viewer.netlify.com/?id=guvsH5OFizE)

---

### Homework day 1

<Checkable id="flash">flashcard assignment</Checkable>
<Checkable id="cccs-1">Watch CCCS (the first time)</Checkable>

### Homework day 2

<Checkable id="server-1">Web Server homework #1</Checkable>
<Checkable id="type-1">touch typing practice #1</Checkable>

### Homework day 3

<Checkable id="cccs-2">Watch CCCS (the second time)</Checkable>
<Checkable id="server-2">Web server homework #2</Checkable>

### Homework day 4

<Checkable id="type-2">touch typing practice #2</Checkable>
<Checkable id="server-3">Web server homework #3 (Extra Credit)</Checkable>

---

### Flashcard Assignment

- add 7 new flashcards in the `html` category, for:
  - `<header>`
  - `<nav>`
  - `<footer>`
  - `<section>`
  - `<main>`
  - `<article>`
  - `<aside>`

---

### Web Server Homework #1

---

- carefully read the "New Stuff" section on Web Servers above ^. Read through all of the code examples and make sure you understand what they are each showing. If you're lost, slack me and I'll help.
- ssh into your home dir, then `cd` into your `node` dir, then make a new `week33/` dir, then `cd` into that, and create 2 new directories: `server-practice/` and `htc-members/`.
- exit out of terminal/putty and open vscode. Connect to the remote host, and choose the `~/node/week33/server-practice` dir as your working directory.
- in vscode, create a new server called `web-server.js`. Then, look at the **very first** code example in the "New Stuff" where I make a simple http server with the _core http module_. **Without copy-pasting**, re-create this simple server by retyping all of the important parts (leaving out the comments). Change the `#goatbanjorodeo` to something else while you're at it.
- Next, change the port to some random port between 1000 and 60,000. If you all use port 9999 and you're working at the same time, it will cause a problem.
- Next, type a keyboard shortcut to bring up and focus the integrated terminal in vscode. In that terminal, we're going to start our simple http server, by typing `node web-server.js`. You should see the message about what port it's listening on.
- Now, to see your web-page, open up a browser and enter this url: `http://localhost:9999` -- except change the 9999 to match the port you chose. (Read the next step if something goes wrong)
- If you get an error from the last step, good! You were supposed to. `localhost` refers to the computer that we're running our code on, which is the HTC virtual machine, and your computer can't access that computer program unless your browser were running on the same computer too. But, vscode can help us with this. We're going to **forward** a port from our local computer to the HTC computer. To do that, type a shortcut to bring up the "Command Pallete" in vscode, then type "Forward Port", you should see an option to "Forward a Port". Choose that option and enter the port your app is listening on, then press enter.
- now retry step 7 -- it should work this time!
- now, edit the code in `web-server.js` to change the HTML that is sent down.
- make another request in your browser. Is your change visible? It should _not_ be visible. 🧐
- The reason you can't see your change is that you need to _stop and restart the web-server_ -- it's still listening with the old function you passed it the last time you started the server. To stop the server, open the integrated terminal and send a signal to stop the current process (Control C). Then restart the server by typing `node web-server.js` again. Test in a browser that you see your new HTML string.
- let's add a little console.logging. Up until now, in the `runOnEveryRequest` function, we're just ignoring the `request` variable. Let's change that. Before the line where you call `response.writeHead(200)` add this log: `console.log(request.url)`.
- stop and restart your webserver so your changes can get applied.
- Before you try to see what got logged out, ask yourself this: **WHERE** will the console.log appear? In your browser? Or in the terminal window? Can you answer that? Think hard for a minute...
- Now visit `http://localhost:<your-port>` again, and test your hypothesis from the previous step.
- Once you found out where to view your logs, visit your page a couple more times, adding some random stuff to the url, like: `http://localhost:<your-port>/foo/bar/baz`. Watch the console.log statements to see what is logged out when you try different http _paths_. Does that help you understand what `request.url` is?
- Add an `if` statement in your `runOnEveryRequest` function that works like this: if the `request.url` contains the word `goat`, show some HTML. Otherwise, show some other HTML. Test your web server app to make sure it is working.
- **Extra Credit: ✨** Use a variable in the outermost scope to keep track of _how many times_ the web server has handled a request. Each time a request comes in, increment the counter. Add to the bottom of the HTML you send back the string `Server has handled <X> requests`, but replacing the `<X>` for the actual count. Test to make sure your new counter feature works. Then, stop and restart your server, and try again. Do you understand why the counter starts from the beginning again?
- Pull up the command pallette in vscode and type "Stop Forward" to bring up the command to stop forwarding your port. Then close your SSH connection (also with the command pallette), and you're done.

---

## Web Server Homework #2

---

- open vscode and connect to the remote server, choosing the `~/node/week33/htc-members/` dir you made in the homework, pt. 1.
- bring up the integrated terminal for the next few steps
- initialize an empty git repository
- we're going to be using `express` for this homework, so we'll need to pull it in using NPM. To do that, we'll initialize our directory with NPM by typing `npm init`. Answer the questions however you want, any you don't understand, don't worry about and you can leave them all blank or accept the defaults. When it asks you if it's OK to write the file, type `yes`.
- now do an `ls` and see that npm created you a new `package.json` file. `cat` it out and see if it sort of makes sense to you.
- next, we're going to install the `express` package. To do that, type `npm install express`. It will take a few seconds to install. When it's done, do another `ls` -- you'll see that one new dir was created, and a new file called `package-lock.json`.
- spelunk down into the `node_modules` dir for a bit, poke around and see what's there. There are a lot of packages that were installed because `express` itself _depends_ on other packages. So when you tell `npm` to install `express` it asks `express` what it needs, and installs those too.
- come back up out of your node modules dir and `cat` out the `package.json` file (not the lock file). You should see that `express` has now been added as into the **dependencies** sub-object of your `package.json` file.
- now, in vscode's sidebar, make a new file called `app.js`. In it type in (don't copy paste), this code:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

const PORT = 8888; // change this number
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
```

- in vscode's integrated terminal, start your express app by typing `node app.js`. Then forward the port like you did in the first server homework, and test it in your browser. You should see `Hello Express!` in your browser.
- OK, let's get ready to do a `git` commit, but before you do, we don't want to track either the `package-lock.json` or the `node_modules/` directories. So, create a `.gitignore` file to exclude that file and dir. Then commit your work. (Double check after you `git add` that you didn’t get the node_modules dir, or the `package-lock.json` file).
- next, we're going to hook this new git repository up to GitLab. To do that, go to [GitLab](https://gitlab.howtocomputer.link) in your browser, and click the big green "New Project" button in the upper right. Then name your project "My first Express app", leave everything else at it's default, and click the green "Create project" button at the bottom.
- on the next screen, GitLab is trying to give you lots of options to help you set up a new project. Since we already created a git repository, we're going to use the instructions at the very bottom, labeled `Push an existing Git repository`. Read those instructions, and see if you can understand mostly what each line _means_. For now, don't worry about the extra flags to the `git push` command.
- we're going to skip the first two lines -- do you understand _why?_
- copy the last three lines of the instructions, and paste them into your integrated terminal in vscode. This will establish the connection between your git repo, and the new remote on GitLab.
- after you've pushed, refresh the page you were on in GitLab, you should see that instead of instructions on how to create a repo, it now shows you the files you've already pushed up, including your `app.js` file.
- now, in vscode's integrated terminal, **create and switch to a new git branch** called `main-feature` using a single git command.
- next, in your `app.js` file, bring in the `/htc-members` module I made a few weeks ago, using a `require` statement. Use the array of members from that module to build up HTML for a list of links, each one looks like this:

```html
<li><a href="/member/win">Win Henderson</a></li>
```

- Once you have a set of list items created, send them out as the HTML your web app returns from the `/` path. Some **hints** 🤓 on how to accomplish this:
  - comment out the last four lines of the `app.js` file so that the app never starts _listening_. Then, work on building up the HTML for the list items, using `console.log` to log out what you've got. This way you can just run `node app.js` over and over and barf out the HTML to standard out, instead of checking in browser and restarting the server over and over. Once you've got the HTML how you want it, use the html inside the function passed to `app.get('/', ...)` and uncomment the part where the server listens, and test in a browser.
  - You could use a `for` loop, but a `Array.map()` would be even better, methinks.
  - use the `.id` property on each member to build the `href` url
  - if you're not sure how it's supposed to look/work, **I built a working version you can look at** it's at [this url](http://server.howtocomputer.link).
- next, make another **route** that will be served every time one of the `/member/<id>` urls is requested. When one of the matching routes is hit, HTML should be served that looks like this:

```html
<p>Tabitha Artinian is a student in HTC.</p>
```

- if you visit `/member/jared` it should say **teacher** instead of student.
- here is a little hint to get you started making this route:

```js
app.get("/member/:id", (req, res) => {
  const memberId = req.params.id; // will be `win`, `kiah`
  // use Array.filter and the `memberId` variable to pull
  // the right member object out of the array, then
  // grab the zeroth item.
});
```

- **Extra Credit: ✨** Make a function to wrap your HTML with a fully valid HTML boilerplate.
- **Extra Credit: ✨** Modify the boilerplate wrapper to include a `style` tag in the `<head>` (not a separate file), and include some basic CSS styling.
- **Kiah Credit: ✨** Make your boilerplate wrapper function take an argument that allows you to set a custom `<title>` tag dynamically. Then use it so that each member's individual page has their name in the title.
- push your branch up and make a MR, then slack me the URL -- I'll probably have you do one small round of revisions

---

## Web Server Homework 3

---

- this WHOLE homework is **Extra Credit ✨**
- for this homework, you're going to be creating a _guestbook_ website where people can leave their name and a comment, and the website will remember the submissions. In order to save the data so that the comments are kept even after you stop/restart the server, we'll use a json file as a super simple _database_.
- `ssh` into your home dir and cd into the `~/node/week33/` dir.
- go to [thisl url](https://gitlab.howtocomputer.link/htc/week-33-guestbook), fork the repo, then clone your fork into your current working dir
- switch to a new branch
- open vscode, connect to the folder you just created
- then in vscode's integrated terminal install the dependencies using the command `npm install`
- read carefully through all of the comments in the `app.js` folder and the `utils.js` folder.
- start your work by creating the functions in the `utils.js` folder one by one, using the `test.js` file as a test ground, by typing `node ./test.js` into your terminal and logging out stuff.
- once you've got your utils functions working, move over to the `app.js` file and start using them to assemble the app. You'll need to change the port number and forward the port locally so you can see it. And of course, you'll need to run the app using `node app.js` like with the other two homeworks.
- **Kiah Credit: ✨** Learn a little bit about [javascript dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and modify your app so it stores and prints out the date at which the comment was left.
- push up a MR when you're done, so I can see your code. I might have you make some changes.
