import { useNavigate } from "react-router-native";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";
import SingUpContainer from "./SignUpContainer";

const SignUp = () => {
  const [ signUp ] = useSignUp();
  const [ signIn ] = useSignIn()
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password })
      await signIn({ username, password })
      navigate('/', { replace: true });
    } catch (error) {
      console.log('sign up error : ', error)
    }
   
  };


  return (
    <SingUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;