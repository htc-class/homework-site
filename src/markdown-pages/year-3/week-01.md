- a **preprocessor directive** in C is _any line beginning with_ `#`.
  Preprocessor directives are replaced _before compilation_.
- an include statement is something like `#include <stdio.h>` or
  `#include "../foo.c"`. You can think of it like an _import_ statement in
  javascript, except that what is really going on under the hood is that the
  preprocessor **copies and pastes the file right into that spot** before
  compilation.
- a `#define` directive (sometimes called "pound define"), creates a **macro**,
  which is like your own instruction to the preprocessor to **copy paste** the
  tokens following wherever it finds that macro. That means that the following C
  code:

```c
#define MY_MAGIC_NUMBER 42
int x = 10 * MY_MAGIC_NUMBER;
```

- actually gets replaced to become the below _before compilation_:

````c
// blank line here now actually
int x = 10 * 42;
```- C provides a number of basic, built-in, primitive types. Two of the most
  common are `int` and `float`:

```c
int my_age = 42;
float my_weight = 181.2;
````

- to compile a c program, run `cc <file>`. This, by default, creates an
  executable binary file with the name `a.out`. If you want to customize the
  name of the output file, use the `-o` flag:

```bash
# creates a ./hello executable file
$ cc -o hello hello.c
```
