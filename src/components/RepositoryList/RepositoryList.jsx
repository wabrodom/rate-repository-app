import useRepositories from '../../hooks/useRepositories';
import { useNotificationOrder } from '../../contexts/RepositoryOrderContext';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const orderObject = useNotificationOrder()

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    ...orderObject
  });

  const onEndReach = () => {
    console.log('repository list: reach the end')
    fetchMore();
  }

  return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />
};

export default RepositoryList;