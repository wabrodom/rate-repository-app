import { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../../theme';
import { useFindRepository } from '../../hooks/useRepositories';

const SearchBar = ( { setSearchFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { repositories } = useFindRepository(searchQuery);

  const repositoryIds = repositories && searchQuery
    ? repositories.edges.map(edge => edge.node.id)
    : null;

  console.log(searchQuery)
  console.log('outside', repositoryIds)
  
  // const handleChange = (value) => {
  //   setSearchQuery(value);
  //   setSearchFilter(repositoryIds)

  //   console.log('should change parent state', repositoryIds)
  // }

  useEffect(()=> {
    setSearchFilter(repositoryIds)
    console.log('state change, call the parent setState', repositoryIds)
  }, [searchQuery])


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
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;
