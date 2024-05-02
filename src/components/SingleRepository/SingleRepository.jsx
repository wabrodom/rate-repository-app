import { FlatList } from "react-native";
import { useRepository } from "../../hooks/useRepositories";
import { useParams } from "react-router-native";

import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "../ReviewItem";
import ItemSeparator from "../ItemSeparator";


const SingleRepository = () => {
  const id = useParams().id;
  const { loading, repository } = useRepository(id);

  if (loading) {
      return null;
  }

  const reviewNodes = repository.reviews
  ? repository.reviews.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList 
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item}/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
      ItemSeparatorComponent={<ItemSeparator/>}
      ListFooterComponent={<ItemSeparator/>}
    />
  )
}

export default SingleRepository;