import { gql } from "@apollo/client";

export const REPOSITORY_BASED_FIELDS = gql`
  fragment repositoryBaseFields on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`

export const USER_BASE_FIELDS = gql`
  fragment userBaseFields on User {
    id
    username
    createdAt
  }
`

export const REVEW_NODE_FIELDS = gql`
  fragment reviewNodeFields on Review {
    id
    repositoryId
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      fullName
    }
  }
`