
import { View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import Button from "./Button";
import Subheading from "./Typography/Subheading";

import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";

const ReviewFormContainter = ({ onSubmit }) => {

  const initialValues = { 
    ownerName: '', 
    repositoryName: '',
    rating: '',
    text: '',
  };


  const validationSchema = yup.object().shape({
    ownerName:      yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating:         yup.number().required('Rating is required').min(0).max(100).integer(),
    text:           yup.string().required('Please write some review'),
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

export default ReviewFormContainter;

 /* 
  repository owner's GitHub username (for example "jaredpalmer"),   ownerName
  repository's name (for example "formik"),  repositoryName
  a numeric rating,   rating
  a textual review.   text
 */

export const FormForReview = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='ownerName' placeHolder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeHolder='Repository name' />
      <FormikTextInput name='rating' placeHolder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeHolder='Review...' multiline={true} />
      

      <Button onPress={onSubmit}>
        <Subheading color='white'>
          Submit Review
        </Subheading>
      </Button>
  </View>
  )
}