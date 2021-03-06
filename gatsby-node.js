/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path') // eslint-disable-line
const { onCreatePage, createPages } = require('./gatsby-utils/gatsby-node') // eslint-disable-line

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
exports.createPages = createPages
exports.onCreatePage = onCreatePage
