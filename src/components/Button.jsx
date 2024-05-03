import theme from '../theme';
import Text from './Typography/Text';
import { Pressable, StyleSheet } from 'react-native';


const Button = ({ onPress, children, style, ...props}) => {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style
      ]}
      {...props}
    >
        <Text style={styles.text}>
          {children}
        </Text>
    
    </Pressable>

  );
};


const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: theme.colors.secondary,
  },
  loading: {
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.white,
    textAlign: 'center',
  },
});

export default Button;