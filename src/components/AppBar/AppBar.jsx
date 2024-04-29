import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import RepositoriesBar from './RepositoriesBar';
import GenericBar from './GenericBar';
import useSignOut from '../../hooks/useSignOut';
import { useNavigate } from 'react-router-native';


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



const AppBar = ({ me }) => {
    const [signOut] = useSignOut();
    const navigate = useNavigate();

    
    const handlePress = async (to) => {
        switch(to) {
            case '/signin': {
                navigate(to);
                break;
            }
            case '/signup': {
                navigate(to);
                break;
            }
            case '/review' : {
                navigate(to);
                break;
            }
            case '/signout': {
                await signOut()
                navigate('/')
                break;
            }
            default: {
                navigate('/')
                break;
            }
        }
    };



    return (
        <View style={styles.container}>

            <ScrollView horizontal contentContainerStyle={styles.flexContainer} >

                <RepositoriesBar handlePress={handlePress} to='/' />
                
                {me
                    ?<> 
                        <GenericBar text='Create a review' handlePress={handlePress} to='/review' />
                        <GenericBar text='Sign out' handlePress={handlePress} to='/signout' />
                    </>
                    : 
                    <>
                        <GenericBar text='Sign In'  handlePress={handlePress}  to='/signin' />
                        <GenericBar text='Sign Up'  handlePress={handlePress}  to='/signup' />
                    </>

                    
                }
    
            </ScrollView>

        </View>
    )
}

export default AppBar;