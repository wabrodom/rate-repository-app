import useReview from "../../hooks/useReview";
import { useNavigate } from "react-router-native";
import ReviewFormContainter from "./ReviewFormContainter";

const ReviewForm = () => {
  const [ submitReview ] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const response = await submitReview({ 
        ownerName, 
        repositoryName, 
        rating: Number(rating), 
        text,
      })

      // console.log(response)
      const repositoryId = response.data.createReview.repositoryId;

      navigate(`/repo/${repositoryId}`, { replace: true });
    } catch (error) {
      console.log('submit review error : ', error)
    }
   
  };


  return (
    <ReviewFormContainter onSubmit={onSubmit} />
  );
};

export default ReviewForm;