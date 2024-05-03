import { FlatList } from "react-native"
import ReviewItem from "../ReviewItem";
import useCurrentUser from "../../hooks/useCurrentUser";
import ItemSeparator from "../ItemSeparator";

const MyReviews = () => {
  const { loading, currentUser } = useCurrentUser(true);

  if (loading) return null;

  const reviews = currentUser.reviews

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];
  
  return (
    <FlatList 
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={ ({ item }) => <ReviewItem review={item} onMyReviewPage={true} /> }
      keyExtractor={item => item.id}
    />
  
  )
}

export default MyReviews;