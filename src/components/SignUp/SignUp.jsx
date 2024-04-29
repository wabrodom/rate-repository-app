import useSignUp from "../../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import SingUpContainer from "./SignUpContainer";

const SignIn = () => {
  const [ signUp ] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password })
      navigate('/', { replace: true });
    } catch (error) {
      console.log('sign up error : ', error)
    }
   
  };


  return (
    <SingUpContainer onSubmit={onSubmit} />
  );
};

export default SignIn;