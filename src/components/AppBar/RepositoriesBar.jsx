import { Pressable } from "react-native"
import Heading from "../Typography/Heading"

const RepositoriesBar = ({ handlePress, to}) => {

  return (
    <Pressable onPress={() => handlePress(to)}>
      <Heading color='white'>
        Repositories
      </Heading>
    </Pressable>
  )
};

export default RepositoriesBar;