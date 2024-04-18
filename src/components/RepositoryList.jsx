import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "./ItemSeparator";


const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES)
  
  if (loading) {
    return null;
  }
  
  const repositories = data.repositories;
 
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    

  // console.log('nodes', repositoryNodes)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;