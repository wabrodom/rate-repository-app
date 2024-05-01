import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

import {useFindRepository} from '../../hooks/useRepositories'

const SearchBar = ( { setSearchFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const getRepositoryIds = useFindRepository();

  const handleOnChangeText = async (value) => {
    setSearchQuery(value)
    const ids = await getRepositoryIds(value)
    setSearchFilter(ids)
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    searchBar: {
      marginBottom: 5,
      marginTop: 5,
      paddingBottom: 10,
      paddingTop: 10,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      borderRadius: 5,
      width: '70%',
    }
  })

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleOnChangeText}
      />
    </View>
  );
};

export default SearchBar;
