import { gql} from '@apollo/client';
import { REPOSITORY_BASED_FIELDS, REVEW_NODE_FIELDS, USER_BASE_FIELDS } from './fragment';



export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      totalCount  
      edges {
        node {
          ...repositoryBaseFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }

  ${REPOSITORY_BASED_FIELDS}
`


export const GET_REPOSITORY = gql`
  query single($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryBaseFields
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }

  ${REPOSITORY_BASED_FIELDS}
`

export const SEARCH_REPOSITORIES = gql`
  query ($searchKeyword: String) {
    repositories(searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          fullName
        }
      }
    }
  }
`



export const testUser = gql`
  {
    users {
      edges {
        node {
          username
        }
      }
    }
  }
`

export const currentUser = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      ...userBaseFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }

  ${USER_BASE_FIELDS}
`
