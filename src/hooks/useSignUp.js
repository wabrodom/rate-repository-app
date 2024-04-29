import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  });
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const singUp = async ({ username, password }) => {
    const response = await mutate({ 
      variables :{
        "user" : {
          username,
          password
        }
      }
    })

    console.log(response)

    return response;
  }

  return [singUp, result];
}

export default useSignUp;