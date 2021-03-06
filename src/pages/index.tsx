import { graphql } from 'gatsby'

export const query = graphql`
  query Homepage($locale: String!) {
    projects: allProject(limit: 3, filter: { lang: { eq: $locale } }) {
      nodes {
        name
        slug
        tagline
        coverUrl
        logoUrl
        tags {
          rowId
          slug
          name
          lang
        }
      }
    }
    partners: allPartner {
      nodes {
        name
        url
        logoUrl
      }
    }
  }
`

export { default } from 'page-components/homepage'
