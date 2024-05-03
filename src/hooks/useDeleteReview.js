import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutation";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const toDelete = async (reviewId) => {
    const response =  await mutate({
      variables: {
        "deleteReviewId": reviewId
      }
    })

    return response
  }

  return [toDelete, result]
}

export default useDeleteReview;
