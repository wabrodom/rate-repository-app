import { View } from "react-native"
import ReviewItem from "../ReviewItem";
import { useQuery } from '@apollo/client';
import { currentUser } from "../../graphql/queries";

const MyReviews = () => {
  const { loading, data } = useQuery(currentUser, {
    variables: {
      includeReviews: true,
    }
  });

  if (loading) return null;

  const reviews = data.me.reviews

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  
  return (
    
    <View>
      {reviewNodes.map(obj =>  (
        <ReviewItem review={obj} key={obj.id}/>
        )
      )}
    </View>
  )
}

export default MyReviews;