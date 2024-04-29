
import { View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import Button from "./Button";
import Subheading from "./Typography/Subheading";

import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";

const SingUpContainer = ({ onSubmit }) => {

  const initialValues = { 
    username: '',
    password: '',
    passwordConfirm: ''
  };


  const validationSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
    passwordConfirm: yup.string()
       .oneOf([yup.ref('password'), null])
       .required('Password confirm is required')
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
          ({ handleSubmit }) => <FormForReview onSubmit={handleSubmit} />
        } 

      </Formik>
    </View>
  );
};

export default SingUpContainer;

 /* 
  repository owner's GitHub username (for example "jaredpalmer"),   ownerName
  repository's name (for example "formik"),  repositoryName
  a numeric rating,   rating
  a textual review.   text
 */

export const FormForReview = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeHolder='Username' />
      <FormikTextInput name='password' placeHolder='Password' />
      <FormikTextInput name='passwordConfirm' placeHolder='Confirm your password' />
      

      <Button onPress={onSubmit}>
        <Subheading color='white'>
          Submit Review
        </Subheading>
      </Button>
  </View>
  )
}