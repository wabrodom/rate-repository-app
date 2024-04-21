import { View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import Button from "./Button";

import Subheading from "./Typography/Subheading";


import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import FormikTextInput from "./FormikTextInput";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const initialValues = { username: '', password: '' };

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password })
      navigate('/', { replace: true });
    } catch (error) {
      console.log('signIn error : ', error)
    }
   
  };

  const validationSchema = yup.object().shape({
    username: yup.string()
      .min(4, 'Username is too Short!')
      .max(50, 'Username is too Long!')
      .required('Username is required'),
    password: yup.string()
      .min(8, 'Password is too Short!')
      .max(50, 'Password is too Long!')
      .required('Password is required')
  });


  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });


  const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name='username' placeHolder='Username' />
        <FormikTextInput name='password' placeHolder='Password' secureTextEntry/>

        <Button onPress={onSubmit}>
          <Subheading color='white'>
            Sign In
          </Subheading>
        </Button>
    </View>
    )
  }

  return (
    <View style={styles.flexContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          ({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />
        } 

      </Formik>



    </View>
  );
};

export default SignIn;