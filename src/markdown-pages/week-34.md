---
path: "/week-33"
---

# Week 33 Homework 💻

_New stuff we learned this week:_ 🤔

## npm

- `npm` is the **package manager** for node, it's name originally stood for `Node Package Manager`. We've already use it a fair bit.
- `npm` lets you:
  - install third party dependencies
  - publish your own packages for others to use
  - and a bunch more...
- if you're going to use `npm` in a repo or project, `npm` will create for you a **main configuration file**: `package.json` -- a json file containing information about your project, it's dependencies, scripts you can execute, and more.
- `npm init` will walk you through a series of steps to **initialize** your repo/dir with npm. You can also pass the `-y` flag to automatically take the defualts for every option: `npm init -y`
- `npm install <package-name>` tells `npm` to go get a third-party package, (like `cowsay`) and it _installs it into a_ `./node_modules/` _dir that it creates for you._
- anything you install with `npm install <package>` will be listed as a **dependency** in your `package.json` file
- npm also creates a file called a **lock file** -- `package-lock.json` -- this file just records in extreme detail _exactly which versions of every package it installed_. This file is used when you run `npm install` with no `<package-name>`, see below:
- `npm install` by itself tells npm to install all of the dependencies listed in your `package.json` file. If it finds a `package-lock.json` it will install exactly what is listed there. This helps a lot when you have a team of people working on the same project. It eliminates problems where it works on one person's computer, but not someone else.
- the `package.json` file contains a `scripts` key/object -- you can use that to create sort of mini-aliases for commonly used commands. These commands are in a way nicer than bash aliases because they are sort of _scoped_ for just that package, and by nature of the fact that they are in the `package.json` file, they are tracked by git, and thus shared by anyone else using your package.
- any script you define in the package.json file can be executed by typing `npm run <script-name>`. So if your `package.json` looked like this:

```json
{
  "name": "rad-app",
  "scripts": {
    "welcome": "echo WELL HELLO THERE!"
  }
}
```

- you could then execute the command `npm run welcome` and it would print to your terminal `WELL HELLO THERE`.
- npm scripts are just shell commands
- any `npm` package you install that has a **binary** executable file (something you can invoke as a command from the SHELL), get's put in `./node_modules/.bin/<binary-name>`
- `yarn` is an alternative to `npm`. For a while it was _much faster_ than `npm`, and introduced the concept of a **lock file** (called `yarn.lock` instead of `package-lock.json`). But nowadays npm has a lock file and is super fast too. `npm` is more commonly and widely used. Many of the commands are the same.
