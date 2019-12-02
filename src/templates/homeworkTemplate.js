import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <Seo />
      <div
        className="homework-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Link className="mt-16 block" to="/">
        &larr; All homework
      </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`
