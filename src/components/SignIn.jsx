import { TextInput, StyleSheet } from "react-native";
import { useFormik } from 'formik';
import Button from "./Button";
import Text from "./Typography/Text";
import Subheading from "./Typography/Subheading";
import theme from "../theme";

import * as yup from 'yup';


const SignIn = () => {
  const initialValues = {
    username: '',
    password: ''
  };

  const onSubmit = () => {
    console.log( `'${formik.values.username}' logged in` )  
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });



  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 2,
      padding: 10,
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    error: {
      borderColor: theme.colors.error,
      borderWidth: 5,
    }
  });

  return (
    <form style={styles.flexContainer}>
       <TextInput
         id="username"
         name="username"
         placeholder="username"
         type="text"
         onChange={formik.handleChange('username')}
         value={formik.values.username}
         style={[styles.input, formik.errors.username && formik.touched.username && styles.error]}
       />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
        )}

       <TextInput
         id="password"
         name="password"
         placeholder="password"
         type="text"
         onChange={formik.handleChange('password')}
         value={formik.values.password}
         style={ [styles.input, formik.errors.password && formik.touched.password && styles.error]}
         secureTextEntry
       />

        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: theme.colors.error  }}>{formik.errors.password}</Text>
        )}
      

      <Button onPress={formik.handleSubmit}>
        <Subheading color='white'>
          Sign In
        </Subheading>
      </Button>
  

     </form>
  );
};

export default SignIn;