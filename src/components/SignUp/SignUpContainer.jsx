
import { View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import Button from "../Button";
import Subheading from "../Typography/Subheading";
import FormikTextInput from '../FormikTextInput'

import * as yup from 'yup';

const SingUpContainer = ({ onSubmit }) => {

  const initialValues = { 
    username: '',
    password: '',
    passwordConfirm: '',
  };


  const validationSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
    passwordConfirm: yup.string()
       .oneOf([yup.ref('password'), null])
       .required('Password confirmation is required')
  });


  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });

  return (
    <View style={styles.flexContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          ({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />
        } 

      </Formik>
    </View>
  );
};

export default SingUpContainer;

export const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeHolder='Username' />
      <FormikTextInput name='password' placeHolder='Password' />
      <FormikTextInput name='passwordConfirm' placeHolder='Confirm your password' />
      
      <Button onPress={onSubmit}>
        <Subheading color='white'>
          Sign Up
        </Subheading>
      </Button>
  </View>
  )
}