
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });

 
const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <RepositoryList/>
        </View>
    )
};

export default Main;