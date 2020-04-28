---
path: "/week-32"
---

# Week 32 Homework 💻 🐭

_New stuff we learned this week:_

### VSCode

- VSCode is a free text-editor/lightweight IDE made by Microsoft. It's become so good that almost everyone uses it now who develops in the web world, and in many other worlds as well.
- just because VSCode allows you to use your mouse, doesn't mean you should do so! Treat it like vim. Every time you use your mouse, you should feel a small wave of shame and sadness.
- once you pull down my VSCode settings, you'll have a bunch of nice extensions installed, and a bunch of good keyboard shortcuts (many of which are vim-inspired). Definitely focus on learning the main keyboard shortcuts:
  - _NOTE_ in the examples below, I'm putting `Cmd` as short for Mac's _Command_ key, but if you're on Windows or Linux, you would use the _Control_ key instead, so think of `Cmd` as meaning "Command or Control"
  - _NOTE #2_ - but, if I say that the shortcut is `Ctrl` -- that means the shortcut uses the _Control_ key **on Mac, Windows and Linux**.
  - `<Cmd+Shift+P>` - open up the **Command Pallete**, in which you can start typing to see lots of wild stuff vscode can do for you
  - `<Cmd+t>` opens up the **Fuzzy finder** -- it allows you to quickly switch between files.
  - once you have the Fuzzy finder open and activated, `<Ctrl+j>` and `<Ctrl+k>` (like vim!) move your selection up and down.
  - `<Cmd+b>` toggles the visibility of the main sidebar
  - `<Ctrl+s>` toggles the visibility of the "activity bar"
  - `<Ctrl+`>` toggles **and focuses** the integrated terminal
  - `<Cmd+j>` toggles the whole bottom pane
  - pressing `<Cmd+/>` will _comment out_ whatver line or lines you have selected
- When you're editing a file, all your `vim` commands will **just work**. (Well, almost everything).
- Vscode has the ability to let us edit code **through ssh**, so that we're running vscode on our computer, but we're actually working on a different computer that we have made an ssh connection to. We're going to use the feature heavily, because we'll still be doing our development on the HTC virtual machine, but we'll have all the goodies that vscode gives us.
- vscode comes with a sweet **binary executable file** which we can use from our terminal to type `code .` or `code ~/some/path` and vscode will open up that folder for you to work in.
