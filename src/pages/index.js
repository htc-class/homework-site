import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      HTC Homework{" "}
      <span role="img" aria-label="computer">
        💻
      </span>
    </h1>
    <ul className="text-xl leading-loose">
      <li>
        <Link to="./week-14">Week 14 Homework</Link>
      </li>
      <li>
        <Link to="./week-13">Week 13 Homework</Link>
      </li>
      <li>
        <Link to="./week-12">Week 12 Homework</Link>
      </li>
      <li>
        <a href="./pdf/week-11-homework.pdf">Week 11 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-10-homework.pdf">Week 10 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-09-homework.pdf">Week 09 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-08-homework.pdf">Week 08 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-07-homework.pdf">Week 07 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-06-homework.pdf">Week 06 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-05-homework.pdf">Week 05 Homework</a>
      </li>
      <li>
        <a href="./pdf/week-04-homework.pdf">Week 04 Homework</a>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
