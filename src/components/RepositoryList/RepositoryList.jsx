import { useState } from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "../ItemSeparator";
import useRepositories from '../../hooks/useRepositories';
import RepositoryOrderPicker from './RepositoryOrderPicker';
import { useNotificationOrder } from '../../contexts/RepositoryOrderContext';
import SearchBar from './SearchBar';

const RepositoryListHeader = ({ setSearchFilter }) => {
  return (
    <> 
      <SearchBar setSearchFilter={setSearchFilter} />
      <RepositoryOrderPicker /> 
    </>
  )
}

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const [searchFilter, setSearchFilter] = useState([]);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const repositoriesToShow = searchFilter.length > 0
    ? repositoryNodes.filter(obj => searchFilter.includes(obj.id) )
    : repositoryNodes

  return (
    <FlatList
      data={repositoriesToShow}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<RepositoryListHeader setSearchFilter={setSearchFilter} /> }
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
}


const RepositoryList = () => {
  const orderObject = useNotificationOrder()

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    orderObject
  });

  const onEndReach = () => {
    console.log('reach the end of list')
    fetchMore();
  }

  return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />
};

export default RepositoryList;