import { StyleSheet, TextInput } from "react-native";
import { useField } from 'formik';

import Text from '../components/Typography/Text'
import theme from "../theme";

const style = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
  errorBorder: {
    borderColor: theme.colors.error,
    borderWidth: 2,
  }
});

const FormikTextInput = ({ name, ...props}) => { 
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const textInputStyle = [
    style.textInput,
    showError && style.errorBorder,
  ]
  return (
    <>
      <TextInput
        placeholder={props.placeHolder}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={textInputStyle}
        {...props}
      />
      {showError 
        && <Text style={style.errorText}> {meta.error} </Text>
      }
    </>
  );
};

export default FormikTextInput;