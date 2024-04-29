import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  });
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const response = await mutate({ 
      variables :{
        credentials : {
          username,
          password 
        }
      }
    })

    const { data } = response;

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return response;
  }
  
  return [signIn, result];
}

export default useSignIn;