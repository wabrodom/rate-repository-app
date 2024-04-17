import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Heading from './Typography/Heading';
import { Link } from 'react-router-native';
import Subheading from './Typography/Subheading';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        height: 100,
        backgroundColor: theme.colors.appBarBackground,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,    
    }
})

const handlePress = () => {
    console.log('press app bar')
}

const AppBar = () => {
    return (
        <View style={styles.container}>

                <Pressable onPress={handlePress}>
                    <Link to='/'>
                        <Heading color='white'>
                            Repositories
                        </Heading>
                    </Link>
                </Pressable>
            <ScrollView horizontal contentContainerStyle={styles.flexContainer} >

                <Pressable>
                    <Link to='/signin'>
                        <Subheading color='white'>
                            Sign in
                        </Subheading>
                    </Link>
                </Pressable>

                <Subheading color='white'>
                    mock button
                </Subheading>
                <Subheading color='white'>
                    mock button
                </Subheading>
                <Subheading     color='white'>
                    mock button
                </Subheading>
                <Subheading color='white'>
                    mock button
                </Subheading>
           
         

            </ScrollView>

        </View>
    )
}

export default AppBar;