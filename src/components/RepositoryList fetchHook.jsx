import useRepositories from '../hooks/useRepositories';

import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "./ItemSeparator";


const RepositoryList = () => {
  const { repositories } = useRepositories();
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  console.log('nodes', repositoryNodes)

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