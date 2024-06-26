import { View, StyleSheet, Alert } from "react-native";
import Button from '../Button'
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";
import useCurrentUser from "../../hooks/useCurrentUser";


const ReviewActions = ({ repositoryId, id }) => {
  const navigate = useNavigate();
  const [toDelete] = useDeleteReview();
  const { refetch } = useCurrentUser(true);
  const alertTitle = 'Delete review!';
  const alertMessage = 'Do you really want to delete your review?';

  const toRepository = () => {
    navigate(`/repo/${repositoryId}`, { replace: true })
  }

  const handleDelete = async () => {
    console.log('delete', id)
    await toDelete(id)
    refetch()
  }

  const createTwoButtonAlert = () =>
    Alert.alert(alertTitle, alertMessage, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => handleDelete() },
    ]);

  const styles = StyleSheet.create({
    deleteButton: {
      backgroundColor: theme.colors.error
    },
    flexCenter: {
      justifyContent: 'center'
    }
  });

  return (
    <View style={[theme.flexContainer, styles.flexCenter]}>
      <Button onPress={toRepository}>
        View Repository
      </Button>

      <Button onPress={createTwoButtonAlert}
        style={styles.deleteButton}>
        Delete Review
      </Button>
    </View>
  )
}; export default ReviewActions;