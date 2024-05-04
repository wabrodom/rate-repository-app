import { FlatList } from "react-native";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "../ReviewItem";
import ItemSeparator from "../ItemSeparator";

const SingleRepositoryContainer = ({ repository, reviewNodes, onEndReach }) => {
  return (
      <FlatList  
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item}/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
      ItemSeparatorComponent={<ItemSeparator/>}
      ListFooterComponent={<ItemSeparator/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepositoryContainer;