import { useApolloClient, useMutation } from "@apollo/client";  
import { CREATE_REVIEW } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onError: error => {
      console.log(error)
      console.log(error.graphQLErrors[0].message)
    }
  })

  const authStorage = useAuthStorage();

  const submitReview = async ({ ownerName, repositoryName, rating, text }) => {
    const response = await mutate({
      headers: {
        Authorization: await authStorage.getAccessToken()
      },
      variables: {
        "review": {
          ownerName, repositoryName, rating, text
        }
      },
    });

    return response;
  }


  return [submitReview, result]
}

export default useReview;

