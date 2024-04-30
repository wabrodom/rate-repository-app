import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker'
import { useNotificationDispatch, useNotificationOrder } from '../../contexts/RepositoryOrderContext';

const RepositoryOrderPicker = () => {
  const defaultValue = {
    "orderBy": 'CREATED_AT',
    "orderDirection": 'DESC'
  };

  const order = useNotificationOrder();
  const [orderBy, setOrderBy] = useState(order?.orderBy || defaultValue.orderBy);
  const [orderDirection, setOrderDirection] = useState(order?.orderDirection || defaultValue.orderDirection);

  const setOrder = useNotificationDispatch();

  const styles = StyleSheet.create({
    padding: {
      paddingTop: 5,
      paddingBottom: 5
    }
  })

  return (
    <View>
      <Picker
        style={styles.padding}
        selectedValue={orderBy}
        onValueChange={(itemValue) => {
          setOrderBy(itemValue)
          setOrder({
            "orderBy": itemValue,
            "orderDirection": orderDirection
          })
        }
      }>
        
        <Picker.Item label="Review Date" value="CREATED_AT" />
        <Picker.Item label="Rating Average" value="RATING_AVERAGE" />
      </Picker>
      
      <Picker
        style={styles.padding}
        selectedValue={orderDirection}
        onValueChange={(itemValue) => {
          setOrderDirection(itemValue)
          setOrder({
            "orderBy": orderBy,
            "orderDirection": itemValue
          })
        }
      }>
        <Picker.Item label="Ascending" value="ASC" />
        <Picker.Item label="Descending" value="DESC" />
      </Picker>
    </View>
  )
}

export default RepositoryOrderPicker;