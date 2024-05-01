import { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../../theme';
import { useFindRepository } from '../../hooks/useRepositories';

import { useLazyQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../../graphql/queries';

const SearchBar = ( { setSearchFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const [getSearchRepo,  { data }] = useLazyQuery(SEARCH_REPOSITORIES)
  
  let repositoryIds = [];
  
  if (data) {
    console.log(data)
    const repositories = data.repositories;
    repositoryIds = repositories && searchQuery
      ? repositories.edges.map(edge => edge.node.id)
      : [];

    console.log(repositoryIds)
  }


  
  const handleChange = (value) => {
    setSearchQuery(value)
    getSearchRepo({ variables: { "searchKeyword": value } })
    setSearchFilter(repositoryIds)
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
        // onChangeText={setSearchQuery}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default SearchBar;
