import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      rating
      repository {
        id
        fullName
      }
      repositoryId
      text
      user {
        id
        username
      }
      userId
    }
  }
`