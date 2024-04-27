import { gql} from '@apollo/client';
import { REPOSITORY_BASED_FIELDS, USER_BASE_FIELDS } from './fragment';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
    }
  }

  ${REPOSITORY_BASED_FIELDS}
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
  query {
    me {
      ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`
