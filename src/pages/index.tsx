import React from "react";
import { Link } from "gatsby";
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
        year={2}
        week={7}
        path="/year-2/week-07"
        includes={["Foo bar", "Hash Baz"]}
      />
    </div>
  </Layout>
);

export default IndexPage;
