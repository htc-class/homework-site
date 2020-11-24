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
        title="Year 2, Week #9"
        path="/year-2/week-09"
        includes={[
          "css: webfonts, web-safe fonts, `@font-face`, `.woff` format",
          "css: **transitions** with `transition-property`, `transition-duration`, etc.",
          "js: npm **classnames** package",
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
      {Array.from({ length: 24 }, () => 0).map((_, idx) => (
        <Week
          key={`idx-${idx}`}
          title={`Year 1, Week #${35 - idx}`}
          path={`/week-${35 - idx}`}
          includes={[]}
        />
      ))}
      {Array.from({ length: 8 }, () => 0).map((_, idx) => (
        <Week
          key={`idx-${idx}`}
          title={`Year 1, Week #${11 - idx}`}
          path={`/pdf/week-${String(11 - idx).padStart(2, `0`)}-homework.pdf`}
          includes={[]}
        />
      ))}
    </div>
  </Layout>
);

export default IndexPage;
