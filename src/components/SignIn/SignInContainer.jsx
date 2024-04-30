import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Button from "../Button";
import { useFormik } from 'formik';
// import Text from "./Typography/Text";
// import Subheading from "./Typography/Subheading";
import theme from "../../theme";
import * as yup from 'yup';

const SignInContainer = ({ onSubmit }) => {
  const initialValues = { username: 'kalle', password: 'password' };

  const validationSchema = yup.object().shape({
    username: yup.string()
      // .min(4, 'Username is too Short!')
      // .max(50, 'Username is too Long!')
      .required('Username is required'),
    password: yup.string()
      // .min(8, 'Password is too Short!')
      // .max(50, 'Password is too Long!')
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
    <View style={styles.flexContainer}>

       <TextInput
         placeholder="Username"
         onChange={formik.handleChange('username')}
         value={formik.values.username}
         style={[styles.input, formik.errors.username && formik.touched.username && styles.error]}
       />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
        )}

       <TextInput
         placeholder="Password"
         onChange={formik.handleChange('password')}
         value={formik.values.password}
         style={ [styles.input, formik.errors.password && formik.touched.password && styles.error]}
         secureTextEntry
       />

        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: theme.colors.error  }}>{formik.errors.password}</Text>
        )}
      

      <Button onPress={formik.handleSubmit}>
        <Text>Sign In</Text>
      </Button>
  

    </View>
  );
};

export default SignInContainer;