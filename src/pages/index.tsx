import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/Seo";

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
        <Link to="./summer-1">Summer 1 Homework</Link>
      </li>
      <li>
        <Link to="./week-35">Week 35 Homework</Link>
      </li>
      <li>
        <Link to="./week-34">Week 34 Homework</Link>
      </li>
      <li>
        <Link to="./week-33">Week 33 Homework</Link>
      </li>
      <li>
        <Link to="./week-32">Week 32 Homework</Link>
      </li>
      <li>
        <Link to="./week-31">Week 31 Homework</Link>
      </li>
      <li>
        <Link to="./week-30">Week 30 Homework</Link>
      </li>
      <li>
        <Link to="./week-29">Week 29 Homework</Link>
      </li>
      <li>
        <Link to="./week-28">Week 28 Homework</Link>
      </li>
      <li>
        <Link to="./week-27">Week 27 Homework</Link>
      </li>
      <li>
        <Link to="./week-26">Week 26 Homework</Link>
      </li>
      <li>
        <Link to="./week-25">Week 25 Homework</Link>
      </li>
      <li>
        <Link to="./week-24">Week 24 Homework</Link>
      </li>
      <li>
        <Link to="./week-23">Week 23 Homework</Link>
      </li>
      <li>
        <Link to="./week-22">Week 22 Homework</Link>
      </li>
      <li>
        <Link to="./week-21">Week 21 Homework</Link>
      </li>
      <li>
        <Link to="./week-20">Week 20 Homework</Link>
      </li>
      <li>
        <Link to="./week-19">Week 19 Homework</Link>
      </li>
      <li>
        <Link to="./week-18">Week 18 Homework</Link>
      </li>
      <li>
        <Link to="./week-17">Week 17 Homework</Link>
      </li>
      <li>
        <Link to="./week-16">Week 16 Homework</Link>
      </li>
      <li>
        <Link to="./week-15">Week 15 Homework</Link>
      </li>
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
