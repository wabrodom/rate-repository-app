
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "../ItemSeparator";
import useRepositories from '../../hooks/useRepositories';
import RepositoryOrderPicker from './RepositoryOrderPicker';
import { useNotificationOrder } from '../../contexts/RepositoryOrderContext';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

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
  const orderObject = useNotificationOrder()
  const { repositories } = useRepositories(orderObject);

  // console.log(orderObject)

  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;