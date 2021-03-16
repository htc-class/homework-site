import React from "react";
import Layout from "../components/layout";
import SEO from "../components/Seo";
import Week from "../components/Week";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      HTC Homework{" "}
      <span role="img" aria-label="computer">
        💻
      </span>
    </h1>
    <div>
      <Week
        title="Year 2, Week #21"
        path="/year-2/week-21"
        includes={[
          "html: basic responsive images",
          "js: `Object.entries()`",
          "css: linear gradients",
          "css: multiple background images",
        ]}
      />
      <Week
        title="Year 2, Week #20"
        path="/year-2/week-20"
        includes={["react: conditionally rendering components"]}
      />
      <Week
        title="Year 2, Week #19"
        path="/year-2/week-19"
        includes={[
          "js: nullish coalescing operator `??`",
          "js: supplying _default values_ when _destructuring_",
          "react: supplying _default values_ for _props_",
          "js: all about **dates** and **times** with the `Date` object",
        ]}
      />
      <Week
        title="Year 2, Week #18"
        path="/year-2/week-18"
        includes={[
          "js: customizing window.fetch() requests: methods, headers, and body",
          "**REST** apis, rest-ful resources and endpoints for APIs",
        ]}
      />
      <Week
        title="Year 2, Week #17"
        path="/year-2/week-17"
        includes={[
          "js: **static** properties and methods",
          "js: **`instanceof`** keyword",
          "js: `.toString()` method for controlling object > string conversion",
          "js: **getters** and **setters**",
          "ts: access modifiers - _public_, _protected_, _private_",
        ]}
      />
      <Week
        title="Year 2, Week #16"
        path="/year-2/week-16"
        includes={[
          "html: anchor element extras - linking to page sections, emails, phone numbers",
          "css: `scroll-behavior: smooth` for smooth scrolling to page locations",
          "js: **CORS** - Cross Origin Resource Sharing, `OPTIONS`, preflight, `Access-Control-<*>` headers",
          "npm: npm _lifecycle scripts_ `pre<scriptname>`, `post<scriptname>`",
          "node: using _environment variables_ with `process.env`",
        ]}
      />
      <Week
        title="Year 2, Week #15"
        path="/year-2/week-15"
        includes={[
          "js: Error objects, throwing errors, `try/catch` blocks",
          "ts: composite types (types made of other types)",
          "ts: **generics** - generic types, generic functions, etc.",
          "css: **`calc()`** function",
          "css: box-sizing property",
        ]}
      />
      <Week
        title="Year 2, Week #14"
        path="/year-2/week-14"
        includes={[
          "js: localStorage and sessionStorage",
          "**recursion**, recursive strategy for solving problems, base case, etc.",
        ]}
      />
      <Week
        title="Year 2, Week #13"
        path="/year-2/week-13"
        includes={[
          "all about **browser cookies**",
          "js: creating, reading, deleting cookies with `document.cookie`",
          "html/css: using _Font Awesome_ icon font to creat icons",
        ]}
      />
      <Week
        title="Year 2, Week #12"
        path="/year-2/week-12"
        includes={[
          "css: **object-fit** and **object-position**",
          "html: **srcset** and **sizes** for responsive images",
          "js: `===` and value vs reference equality",
          "react: gotchas with using arrays and objects in state",
        ]}
      />
      <Week
        title="Year 2, Week #11"
        path="/year-2/week-11"
        includes={[
          "css **position** - `static`, `relative`, `absolute`, `fixed`, `sticky`",
          "css **psuedo-classes** - `:link`, `:visited`, `:active`, `:focus`",
          "css **psuedo-classes** - `:first-child`, `:last-child`, `:nth-child()`",
          "typescript **type-widening** and `as const`",
        ]}
      />
      <Week
        title="Year 2, Week #10"
        path="/year-2/week-10"
        includes={[
          "unix: `ps` command - process status `ps aux | grep 4040`",
          "unix: `kill` command - kill a process `kill -9 <pid>`",
          "js: **rest parameters** - `function foo(...strs: string[]) {}`",
          "typescript: **index signatures** - `{ [key: string]: string; }`",
          "react: **form input elements** managed with `useState()`",
        ]}
      />
      <Week
        title="Year 2, Week #9"
        path="/year-2/week-09"
        includes={[
          "css: webfonts, web-safe fonts, `@font-face`, `.woff` format",
          "css: **transitions** with `transition-property`, `transition-duration`, etc.",
          "js: npm **classnames** package",
          "typescript: **type narrowing**",
        ]}
      />
      <Week
        title="Year 2, Week #8"
        path="/year-2/week-08"
        includes={["git: **upstream** and **origin** conventional remotes"]}
      />
      <Week
        title="Year 2, Week #7"
        path="/year-2/week-07"
        includes={[
          "**CSS variables** `--main-bg: hotpink;`",
          "listening for **keyboard events** in React",
          "returning **cleanup functions** from `useEffect` fns",
        ]}
      />
      <Week
        title="Year 2, Week #6"
        path="/year-2/week-06"
        includes={[
          "**CSS-in-JS** and css _modules_",
          "React `dangerouselySetInnerHTML`",
          "**Markdown**",
          "Misc: `npx`, `TTFB` (Time to First Byte), React _hydration_",
        ]}
      />
      <Week
        title="Year 2, Week #5"
        path="/year-2/week-05"
        includes={[
          "**IIFI** (immediately invoked function expression)",
          "**ASI** javascript (Automatic Semicolon Insertion)",
          "**SPA** (single page application) pros and cons",
          "**SEO** (search engine optimization)",
          "**SSG** (static site generator)",
          "`ReactDOM.renderToString()`",
        ]}
      />
      <Week
        title="Year 2, Week #4"
        path="/year-2/week-04"
        includes={[
          "**Storybook**",
          "importing CSS files into React Component files",
        ]}
      />
      <Week
        title="Year 2, Week #3"
        path="/year-2/week-03"
        includes={[
          "js **spread syntax** `{ ...someObject }` `[...someArray]`",
          "js **object shorthand** `{ name, age, hasBeard }`",
          "js **boolean type coercion** aka _truthy_ and _falsy_",
          "js **logical OR operator** `||`",
          "js **object bracket notation** `fern['bites-kids'] = true`",
          "js **object helper methods** `Object.keys()` and `Object.values()`",
        ]}
      />
      <Week
        title="Year 2, Week #2"
        path="/year-2/week-02"
        includes={[
          "React: **mapping over arrays in JSX**",
          "React: **event handlers** `onClick` and friends",
          "React: `useState()` intro - state management",
          "React: `useEffect()` intro - side effects",
          "React: **Fragments** `<></>`",
          "React: **style prop** `<div style={{ color: red }} />`",
        ]}
      />
      <Week
        title="Year 2, Week #1"
        path="/year-2/week-01"
        includes={[
          "introduction to **React**",
          "js **ternary** `let name = hasBeard ? 'jared' : 'willow';`",
          "js **destructuring function args** `({ foo, bar }) => {...}`",
          "typescript **generic types** `Array<string>` `Promise<Response>`",
        ]}
      />
      <Week
        title="Summer 1, Week #4"
        path="/summer-4"
        includes={[
          "js **while loops** `while (x < 5) {...}`",
          "js `case` statement",
          "js `break` keyword - _break out of a `for`/`while` loop, or `case`_",
          "js **symbols** - `new Symbol('foo');`",
          "js **generators** - `function* myGenerator() { yield 1; }`",
          "js **iterables** and `Symbol.iterator`",
          "js **async/await** - `async function load() { await fetch('/'); }`",
        ]}
      />
      <Week
        title="Summer 1, Week #3"
        path="/summer-3"
        includes={[
          "js **es modules _named_ imports** `import { foo } from './foo';`",
          "js **es modules _default_ imports_** `import foo from './foo';`",
          "js **Promises** `let promise = new Promise(executorFn);`",
          "js **chaining promises** `promise.then().then().catch()`",
          "js **fetch** - `window.fetch()` (browser) and `node-fetch` (node)",
        ]}
      />
      <Week
        title="Summer 1, Week #2"
        path="/summer-2"
        includes={[
          "typescript **void** and **undefined** types",
          "typescript **true** and **false** and **string literal** types",
          "typescript **tuples** and **object** types",
          "typescript **structural typing** (vs _nominal typing_)",
          "js **ES Modules** `export function foo() {}`",
        ]}
      />
      <Week
        title="Summer 1, Week #1"
        path="/summer-1"
        includes={[
          "introduction to **Typescript**",
          "node's **async philosophy**, _nodeback_ or _errback_ style",
        ]}
      />
      <Week
        title="Year 1, Week #35"
        path="/week-35"
        includes={[
          "js: **template literals**",
          "js: **destructuring** - `let { name } = person; let [, title] = book;`",
          "js: **sorting arrays** - `[3, 20, 5].sort((a, b) => a - b);`",
        ]}
      />
      <Week
        title="Year 1, Week #34"
        path="/week-34"
        includes={[
          "**npm** - `npm init`, `npm install`, _package.json_, _package-lock.json_",
          "npm **scripts** - `npm run start`, `npm run dev`, etc",
          "js: **classes** and **`this`**: `class Person { constructor() {} }`",
          "js: class **inheritance** with the `extend` keyword: `class Foo extends Bar {}`",
          "js: **unit testing** with **jest** - `expect(...)`, `it(...)`, `test(...)`",
        ]}
      />
      <Week
        title="Year 1, Week #33"
        path="/week-33"
        includes={[
          "_semantic_ html tags: `<header>`, `<nav>`, `<footer>`",
          "more _semantic_ html tags: `<section>`, `<main>`, `<article>`, `<aside>`",
          "**web servers**: _request_, _response_, _client_, _server_",
          "node: `http` core module for writing web servers _(the hard way)_",
          "node: `express` npm module for writing web servers _(easier)_",
        ]}
      />
      <Week
        title="Year 1, Week #32"
        path="/week-32"
        includes={[
          "shell/bash **reverse history search** - `<Ctrl+r>`",
          "shell/bash **history substitution** - `^<find>^<replace>`, e.g. `^vim^cat`",
          "introduction to **VSCODE**",
          "vscode _keyboard shortcuts_",
        ]}
      />
      <Week
        title="Year 1, Week #31"
        path="/week-31"
        includes={[
          "**ssh** and **ssh keys** overview",
          "the `~/.ssh` folder",
          "default ssh keys: `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`",
          "ssh **authorized_keys**, **known_hosts**, and **config** file",
          "hosted git websites: _GitHub_ and _GitLab_",
          "Pull requests (**PR**) / Merge requests (**MR**)",
        ]}
      />
      <Week
        title="Year 1, Week #30"
        path="/week-30"
        includes={[
          "**JSON** format",
          "git: _checkout branch from remote repo_: `git checkout -b foo origin/foo`",
          "git: ignoring files with **.gitignore**",
          "git: `git stash` command",
          "git: `git rebase <other-branch>` - _non-interactive rebase_",
          "git: `git rebase -i <sha>` - _interactive rebase_",
          "js: **anonymous functions**",
          "js: **arrow functions** `const add = (x, y) => x + y;`",
        ]}
      />
      <Week
        title="Year 1, Week #29"
        path="/week-29"
        includes={[
          "vim: _incrementing_ and _decrementing_ numbers with `<Ctrl-x>`, `<Ctrl-a>`",
          "js: `var`, `let`, and `const`",
          "git: all about git **remotes**",
          "git: `git clone <remote>`, `git fetch <remote>`, `git pull <remote>`",
          "git: `git remote add <nickname> <url>`",
          "git: `git remote rename <old-name> <new-name>`",
          "git: `git push <remote> <branch> [--force]`",
          "css: `margin` and `padding` **shorthand** `margin: 5px 0 3px 1px;`",
          "css: _combining selectors_ with `,`: `.foo, span { color: red; }`",
          "css: `rgb()`, `rgba()`, and `opacity: <num>;`",
          "css: **psuedo-elements** `::before` and `::after`",
        ]}
      />
      <Week
        title="Year 1, Week #28"
        path="/week-28"
        includes={[
          "vim: **visual block mode**",
          "vim: `o` and `gv`",
          "git: `get checkout -- <file>`",
          "git: `get reset HEAD <file>`",
          "git: `get reset [--hard] <sha>`",
          "node: require() resolution - _bare strings_, core modules, and npm modules",
          "node: core `fs` module for _filesystem work_",
        ]}
      />
      <Week
        title="Year 1, Week #27"
        path="/week-27"
        includes={[
          "git: understanding **`HEAD`**",
          "git: `git merge <other-branch>`",
          "git: **fast-forward** merges, and **merge commits**",
          "git: resolving _git conflicts_",
          "git: `git log` options - `--all`, `--oneline`, `--graph`",
          "git: shorcuts - `git commit -am`, `git checkout -b <new-branch>",
          "css: **`:hover`** pseudo-class for styling hovered elements",
        ]}
      />
      <Week
        title="Year 1, Week #26"
        path="/week-26"
        includes={[
          "introduction to **git**",
          "git: basic commands: `git init`, `git status`, `git add`, `git commit`",
          "git: basic commands: `git diff`, `git branch`, `git checkout`, `git log`",
        ]}
      />
      <Week
        title="Year 1, Week #25"
        path="/week-25"
        includes={[
          "js: **Array.reduce()**",
          "js: _primitive_ vs. _non-primitive_ types",
          'js: function arguments - "pass by **reference**" and "pass by **value**"',
          "js: old-style **code sharing** in the browser with `window.NAMESPACE`",
          "node: **commonjs** code sharing with `require()` and `module.exports`",
          "node: `__dirname` and `__filename` & other vars passed to node files",
          "node: require() resolution strategy",
        ]}
      />
      <Week
        title="Year 1, Week #24"
        path="/week-24"
        includes={[
          "vim: `<Ctrl-o>` and `<Ctrl-i>` to go back/forth between **jumps**",
          "js: **Array.concat()** method for joining two or more arrays",
          "html: **forms** and **form elements**",
          "html: form tags: `<form>`, `<input />`, `<textarea />`, `<select>`",
          "html: form input types: _checkbox_, _number_, _radio_",
          "html: form _placeholders_, form element **`name`** attribute",
          "submitting forms to _web servers_ with http method `GET` and `POST`",
        ]}
      />
      <Week
        title="Year 1, Week #23"
        path="/week-23"
        includes={[
          "js: function **expressions:** `let sayHi = () => console.log('hi');`",
          "js: function **declarations:** `function sayHi() { console.log('hi'); }`",
          "js: objects - _methods_ vs _properties_",
          "js: **string methods**: `str.toLowerCase()`, `str.includes()`, `str.split()`",
          "js: more **string methods**: `str.startsWith()`, `str.endsWith()`,",
          "js: **array methods**: `arr.push()`, `arr.pop()`, `arr.join()`, `arr.includes()`",
          "Js: more **array methods**: `arr.map()`, `arr.filter()`, `arr.forEach()`, `arr.slice()`",
        ]}
      />
      <Week
        title="Year 1, Week #22"
        path="/week-22"
        includes={[
          "css: css **specificity**",
          "css: _child combinator_ - `.foo > p { color: red; }`",
          "css: **media queries** - `@media(min-width: 768px) {...}`",
          "js: array length property `[1,3,5].length // <- 3`",
        ]}
      />
      <Week
        title="Year 1, Week #21"
        path="/week-21"
        includes={[
          "css: deep dive on **flexbox**",
          "css: [flexbox property review/practice](/flexbox/properties/)",
          "flexbox: flex-direction, justify-content, align-items, align-self",
          "flexbox: flex-grow, flex-basis, order, flex-wrap, align-content",
        ]}
      />
      <Week
        title="Year 1, Week #20"
        path="/week-20"
        includes={[
          "unix/bash: `$PATH` variable - list of directories to find executable programs",
          "unix/bash: **shebang** `#!/usr/local/bin/node`",
          "js: regular expresssions in javascript - `str.match()` and `str.replace()`",
          "js (browsers): _prompt_ function for clunkily getting user-input",
          "css: `vw` and `vh` - viewport width and viewport height units",
          "css: **background images**",
          "css: bg image properties: `background-image`, `background-repeat`, `background-position`",
          "css: bg image properties (cont): `background-size`, `background-attachment`",
        ]}
      />
      <Week
        title="Year 1, Week #19"
        path="/week-19"
        includes={[
          "js: OR and AND _logical operators_: `||`, `&&`",
          'js: concept of **closure** - functions that remember their "birth" scope',
          "js: c-style _for loop_ `for (let i = 0, i < x; i++) {...}`",
          "js dom-scripting: listening for **events** with `<element>.addEventListener()`",
        ]}
      />
      <Week
        title="Year 1, Week #18"
        path="/week-18"
        includes={[
          "vim: **marks** (local and global) - `m<letter>` and `<backtick><letter>`",
          "js: _control flow_ with `if` / `else if` / `else`",
          "js: _comparing values_ with `===`, `<`, `>`, `<=`, >=`",
          "web js: _dom scripting basics_",
          "web js: creating elements with `document.createElement(<tag-name>)`",
          "web js: inserting nodes with `node.appendChile(<element>)`",
          "web js: setting node attribues with `node.setAttribute(<attr>, <val>)`",
        ]}
      />
      <Week
        title="Year 1, Week #17"
        path="/week-17"
        includes={["_no new stuff this week, only review_"]}
      />
      <Week
        title="Year 1, Week #16"
        path="/week-16"
        includes={[
          "vim: handy stuff - `ea`, `bi`, `cc`, `gk`, `gj`",
          "bash: `cd **-**` - go back to _last directory_",
          "bash: `chmod` command for setting _permissions_ (aka access control list)",
          "js: `setTimeout(<fn>, <delay-ms>)` run a function after a delay",
          "web js: `<script>` tags",
          "web js: **document object model (DOM)** intro",
          "web js: get nodes from DOM with `document.querySeletor(<selector>)`",
          "web js: handle simple click events by attaching functions to `element.onclick`",
        ]}
      />
      <Week
        title="Year 1, Week #15"
        path="/week-15"
        includes={[
          "js: functions are _first class_ values in js",
          "js: _pure_ functions vs _side-effects_",
          "js: **scope**",
          "css: **position** property - `static`, `relative`, `absolute`",
          "css: absolutely posititioning elements with `top/left/right/bottom`",
          "css: stacking elements with `z-index`",
        ]}
      />
      <Week
        title="Year 1, Week #14"
        path="/week-14"
        includes={[
          "vim: splitting the vim window with `split <filename>` and `vsplit`",
          "css: display **inline-block**",
          "css: `float` and `clear`",
          'css: external stylesheets - `<link href="./main.css" rel="stylesheet">`',
          "unix: processes - `pid` (process id) and `ppid` (parent process id)",
          "js: intro to **arrays** and _bracket notation_",
          "js: intro to **objects** and _dot notation_",
          "js: introduction to **functions**",
          "node: **process** global variable `process.env`, `process.stdout`, etc",
          "node: accessing command-line (shell) arguments with `process.argv`",
        ]}
      />
      <Week
        title="Year 1, Week #13"
        path="/week-13"
        includes={[
          "vim: `C` and `D` for operating _to the end of the current line_",
          "regex: `\\s` to match _whitespace_, `\\S` to match _non-whitespace_",
          "regex: `\\D` to match _non digits_",
          "regex: `\\W` to match _non wordlike characters_",
          'html: **id** and **class** attributes `<p id="foo" class="bar">`',
          "css: introduction to **CSS**, including _rule-sets_, _declarations_, and `<style>` tags",
          "js: introduction to **javascript**",
          "js: basic primitive types and variables",
          "js: executing node files with `node <filename>`",
          "js: REPLs (Read Evaluate Print Loop) - in browser and node",
        ]}
      />
      <Week
        title="Year 1, Week #12"
        path="/week-12"
        includes={[
          "vim: moving **up to** and **onto** characters with `t<char>` and `f<char>`",
          "vim: searching for and moving to found patterns with `/<search>`",
          "vim: move by _paragraph_ with `{` and `}`",
          "vim: repeat last edit with `.`",
          "regex: `\\w` to match _word-like characters_",
          "regex: `\\b` to match _a word boundary_",
          "regex: `?` after quantifier (`*` or `+`) to make it lazy: `/[abc]*?/`",
          "html: `<div>` (generic block-level), `<span>` (generic inline), and `<table>` elements",
          'html: **styling elements** with the _style attribute_ `<p style="color: red">`',
        ]}
      />
      <Week
        title="Year 1, Week #11"
        path="/pdf/week-11-homework.pdf"
        includes={[
          "web servers: basics of _requests_, _response_, `nginx`, and _web root_",
          "urls: _uniform resource locators_, _scheme_ (`http` or `https`)",
          "urls: _registerable domains_ (goats.com), _top-level domains_ (.com), and _subdomains_",
          "vim: `d` delete, `c` change, `y` yank (copy), `v` visual mode (select)",
          "vim: **text objects** - `w` word, `p` paragraph, `t` html tag",
          "vim: **motions** `i` inner, `a` around",
          "vim: combining operators `caw`, `dit`, `vip`, etc.",
          "regex: `\\d` to match _a digit_",
          "regex: matching a specific _number_ of something with `{x}` or `{x,y}` - `{3}`, `{3,5}`",
          "html: _list tags_ `<ul>` unordered list, `<ol>` ordered list, `<li>` list item",
        ]}
      />
      <Week
        title="Year 1, Week #10"
        path="/pdf/week-10-homework.pdf"
        includes={[
          "regex: **character class**, e.g. `[aeioy]` matches any vowel",
          "regex: character class _ranges_ like `[A-Z]` and `[0-9]`",
          'html: introduction to the **HTML** markup "language"',
          "html: tags and attributes",
          "html: basic tags - `<p>`, `<h1>`-`<h6>`",
          "html: boilerplate for a well-formed html document",
          "html: document-structure tags: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`",
        ]}
      />
      <Week
        title="Year 1, Week #9"
        path="/pdf/week-09-homework.pdf"
        includes={[
          "regex: _alternation_ with `|` char - `/(goat|llama)pack/`",
          "regex: **backreferences** - replacing groups _captured_ with parenthases",
          "regex: _flags_ - `g` (global - match more than one), `i` (case insensitive)",
          "the concept of **types** in computer programming - booleans, strings, numbers, etc.",
        ]}
      />
      <Week
        title="Year 1, Week #8"
        path="/pdf/week-08-homework.pdf"
        includes={[
          "bash: preferences and customization of your shell with `~/.bashrc`",
          "bash: **vi** mode for editing text while typing in shell",
          "bash: **variables** `NAME=Jared`, `echo Hello $JARED`",
          "bash: get last command exit code with `$?`",
          "bash: writing _bash scripts_",
          "sed: simple **stream editor** for operating line-by-line on text in unix-y environments",
          "regex: introduction to **regex**",
          "regex: basic _meta-characters_ - `.`, `^`, `$`, `*`, `_`, `?`",
        ]}
      />
      <Week
        title="Year 1, Week #7"
        path="/pdf/week-07-homework.pdf"
        includes={[
          "bash: `cp` command for _copying files_",
          "bash: `sudo` for running a command as _super user_",
          "http protocol basics - _request_, _response_, _status codes_, _headers_",
        ]}
      />
      <Week
        title="Year 1, Week #6"
        path="/pdf/week-06-homework.pdf"
        includes={[
          "bash: _variadic_ commands take _any number of arguments_ `mkdir foo bar baz`",
          "bash: _concatenating_ (joining) files with `cat` command",
          "bash: read fixed number of lines from file _beginning_ with `head`, (`head -n 50 <file>`)",
          "bash: read fixed number of lines from file _end_ with `tail`, (`tail -n 50 <file>`)",
          "bash: follow stuff added to files with `tail --follow <file>` or `tail -f <file>`",
        ]}
      />
      <Week
        title="Year 1, Week #5"
        path="/pdf/week-05-homework.pdf"
        includes={[
          "bash: **shell expansions** with `*`, `?`, and `[...]`",
          "network protocols _TCP_ and _UDP_",
        ]}
      />
      <Week
        title="Year 1, Week #4"
        path="/pdf/week-04-homework.pdf"
        includes={[
          "bash: `~` shortcut for the _home directory_ (or just `cd`)",
          "bash: _tab completion_ for faster shelling",
          "bash: history (concept and command)",
          "bash: `echo` command - send stuff to standard out",
          "bash: **redirecting** stdandard out to files with `>` and `>>`",
          "bash: **pipes** `|` - send standard out of a program to standard in of another",
          "bash: sending **signals** to running processes `<Ctrl-D>` and `<Ctrl-C>`",
        ]}
      />
    </div>
  </Layout>
);

const FIRST_UNDONE = 11;
const NUM_PDFS = 8;
const LAST_PDF_WEEK = 11;

export default IndexPage;
