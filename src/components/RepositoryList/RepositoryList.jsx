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

export const RepositoryListContainer = ({ repositories }) => {
  const [searchFilter, setSearchFilter] = useState(null);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    // console.log(repositoryNodes)
    // console.log('filter', searchFilter)
  const repositoriesToShow = searchFilter 
    ? repositoryNodes.filter(obj => searchFilter.includes(obj.id) )
    : repositoryNodes

  return (
    <FlatList
      data={repositoriesToShow}
      ItemSeparatorComponent={ItemSeparator}
      // ListHeaderComponent={ <RepositoryOrderPicker onDatafromChild={onDatafromChild} /> }
      ListHeaderComponent={<RepositoryListHeader setSearchFilter={setSearchFilter} /> }
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
    />
  );
}


const RepositoryList = () => {
  const orderObject = useNotificationOrder()
  const { repositories } = useRepositories(orderObject);

  // console.log(orderObject)

  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;