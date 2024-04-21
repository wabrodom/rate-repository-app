import { Pressable } from "react-native"
import Subheading from "../Typography/Subheading";

const GenericBar = ({ text, to, handlePress }) => {
  return (
    <Pressable onPress={() => handlePress(to)}>
        <Subheading color='white'>
          {text}
        </Subheading>
    </Pressable>
  )
};

export default GenericBar;