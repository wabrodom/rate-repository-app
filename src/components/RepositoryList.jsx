import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "./ItemSeparator";


const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
    />
  );
}

const RepositoryList = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES)
  
  if (loading) {
    return null;
  }
  
  const repositories = data.repositories;

  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;