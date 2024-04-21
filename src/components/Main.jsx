
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { currentUser } from '../graphql/queries';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });

 
const Main = () => {
    const { loading, data } = useQuery(currentUser);
      
    if (loading) return null;

    console.log('render useQuery hook, data.me: ', data.me)

    return (
      <View style={styles.container}>
          <AppBar me={data.me} />
          <Routes>
            <Route path='/' element={<RepositoryList/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
          
      </View>
  )
};

export default Main;