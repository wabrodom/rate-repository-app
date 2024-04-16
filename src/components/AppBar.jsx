import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        height: 100,
        backgroundColor: theme.colors.appBarBackground,
    }
})

const handlePress = () => {
    console.log('press app bar')
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <Text fontWeight='bold' fontSize='heading' color='white'>
                    Repositories
                </Text>

            </Pressable>
        </View>
    )
}

export default AppBar;