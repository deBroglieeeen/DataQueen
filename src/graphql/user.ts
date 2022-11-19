export const getUserByIdQuery = /* GraphQL */ `
  query GetUserById($id: String!) {
    users_by_pk(id: $id) {
      id
      created_at
      name
      __typename
    }
  }
`
