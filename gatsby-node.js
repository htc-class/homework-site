const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const homeworkTemplate = path.resolve(`src/templates/homeworkTemplate.js`)

  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: homeworkTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
