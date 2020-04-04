import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout";
import Checkable from "../components/Checkable";
import Seo from "../components/Seo";

export default function Template({ data }) {
  const { mdx } = data;
  const { body } = mdx;
  return (
    <Layout>
      <Seo />
      <div className="homework-content">
        <MDXProvider components={{ Checkable }}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
      <Link className="mt-16 block" to="/">
        &larr; All homework
      </Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
      }
    }
  }
`;
