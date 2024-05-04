import { gql} from '@apollo/client';
import { REPOSITORY_BASED_FIELDS, REVEW_NODE_FIELDS, USER_BASE_FIELDS } from './fragment';



export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $after: String, $first: Int) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, after: $after, first: $first) {
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
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...repositoryBaseFields
      url
      reviews(first: $first, after: $after) {
          edges {
            node {
              ...reviewNodeFields
            }
            cursor
          }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
  ${REPOSITORY_BASED_FIELDS}
  ${REVEW_NODE_FIELDS}

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

export const CURRENTUSER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      ...userBaseFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewNodeFields
          }
        }
      }
    }
  }

  ${USER_BASE_FIELDS}
  ${REVEW_NODE_FIELDS}
`
