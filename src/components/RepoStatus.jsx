import { View } from "react-native"
import Text from "./Text"
import theme from "../theme";

const RepoStatus = ({text, stat}) => {
    const style = theme.flexRepoStatus

    const toKSuffix = (num) => {
        if (num / 1000 >= 1) {
            return (num / 1000).toFixed(1) + 'k'
        }
        return num
    }

    const number = toKSuffix(stat)

    return (
        <View style={style}>
            <Text>
                {text} 
            </Text>
            <Text>
                {number}
            </Text>
        </View>
    )
};


export default RepoStatus;