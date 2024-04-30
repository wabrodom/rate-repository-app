
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "../ItemSeparator";
import useRepositories from '../../hooks/useRepositories';
import RepositoryOrderPicker from './RepositoryOrderPicker';
import { useNotificationOrder } from '../../contexts/RepositoryOrderContext';
import { RepositoryOrderProvider } from '../../contexts/RepositoryOrderContext';
import { useState } from 'react';

export const RepositoryListContainer = ({ repositories, onDatafromChild }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const orderObject = useNotificationOrder()
  onDatafromChild(orderObject)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // ListHeaderComponent={ <RepositoryOrderPicker onDatafromChild={onDatafromChild} /> }
      ListHeaderComponent={ <RepositoryOrderPicker /> }
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
    />
  );
}

const RepositoryList = () => {
  const defaultValue = {
    "orderBy": 'CREATED_AT',
    "orderDirection": 'DESC'
  };
  // const [orderFromChild, setOrderFromChild] = useState(defaultValue);
  // const { repositories } = useRepositories(orderFromChild);
  const [order, setOrder] = useState(defaultValue);
  const { repositories } = useRepositories(order);

  return (
    <RepositoryOrderProvider>
      <RepositoryListContainer repositories={repositories} onDatafromChild={setOrder} />
    </RepositoryOrderProvider>
  )
};

export default RepositoryList;