import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutation";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  });

  const signIn = async ({ username, password }) => {
   return await mutate({ 
      variables :{
        credentials : {
          username: username,
          password: password
       }
     }
    })
  }

  return [signIn, result];
}

export default useSignIn;