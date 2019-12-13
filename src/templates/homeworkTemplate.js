import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({ data }) {
  const { mdx } = data
  const { body } = mdx
  return (
    <Layout>
      <Seo />
      <div className="homework-content">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Link className="mt-16 block" to="/">
        &larr; All homework
      </Link>
    </Layout>
  )
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
`
