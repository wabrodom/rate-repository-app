
import { useRepository } from "../../hooks/useRepositories";
import { useParams } from "react-router-native";
import SingleRepositoryContainer from "./SingleRepositoryContainer";

const SingleRepository = () => {
  const id = useParams().id;
  const { loading, repository, fetchMore } = useRepository({
    repositoryId: id,
    first: 2,
  });

  if (loading) {
      return null;
  }

  const reviewNodes = repository.reviews
  ? repository.reviews.edges.map(edge => edge.node)
  : [];

  const onEndReach = () => {
    console.log('review list: reach the end')
    fetchMore();
  }

  return (
    <SingleRepositoryContainer 
      repository={repository}
      reviewNodes={reviewNodes} 
      onEndReach={onEndReach}
    />
  )
}

export default SingleRepository;