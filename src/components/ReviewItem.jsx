import { View, StyleSheet } from "react-native";
import Text from "./Typography/Text";
import { format } from 'date-fns'

import theme from "../theme";
const ReviewItem = ( { review }) => {
  const { rating, createdAt, user, text } = review;

  const formatedDate = format(createdAt, 'MMMM dd, yyyy');

  const style = StyleSheet.create({
    circleborder : {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: theme.colors.primary,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  return (
    <View style={theme.flexContainer}>

      <View style={style.circleborder}>
          <Text> {rating} </Text>
      </View>

      <View>

        <Text fontWeight='bold'> {user.username} </Text>
        
        <Text> {formatedDate} </Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}> {text} </Text>
        </View>

      </View>

    </View>
  )
} 

export default ReviewItem;