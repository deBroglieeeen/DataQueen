export const addQueryMutation = /* GraphQL */ `
  mutation AddQuery($content: String!) {
    insert_queries_one(object: { content: $content }) {
      id
      __typename
    }
  }
`
