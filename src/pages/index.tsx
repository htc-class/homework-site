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
    <div className="foo">
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
        path="/year-2/week-03"
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
      <Week title="Summer 1, Week #4" path="/summer-4" includes={[]} />
      <Week title="Summer 1, Week #3" path="/summer-3" includes={[]} />
      <Week title="Summer 1, Week #2" path="/summer-2" includes={[]} />
      <Week title="Summer 1, Week #1" path="/summer-1" includes={[]} />
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
