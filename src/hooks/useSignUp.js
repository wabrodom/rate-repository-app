import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutation";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  });


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