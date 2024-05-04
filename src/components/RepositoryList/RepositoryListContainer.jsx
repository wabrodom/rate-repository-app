import { useState } from 'react';
import { FlatList } from 'react-native';
import SearchBar from './SearchBar';
import ItemSeparator from "../ItemSeparator";
import RepositoryItem from './RepositoryItem';
import RepositoryOrderPicker from './RepositoryOrderPicker';


const RepositoryListHeader = ({ setSearchFilter }) => {
  return (
    <> 
      <SearchBar setSearchFilter={setSearchFilter} />
      <RepositoryOrderPicker /> 
    </>
  )
}

const RepositoryListContainer = ({ repositories, onEndReach }) => {
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
};

export default RepositoryListContainer;
