import { View } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker'
import { useNotificationDispatch } from '../../contexts/RepositoryOrderContext';

const RepositoryOrderPicker = ({ onDatafromChild }) => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  const setOrder = useNotificationDispatch();

  return (
    <View>
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue, _itemIndex) => {
          setOrderBy(itemValue)
          onDatafromChild({
            "orderBy": itemValue,
            "orderDirection": orderDirection
          })
          setOrder({
            "orderBy": itemValue,
            "orderDirection": orderDirection
          })
        }
      }>
        
        <Picker.Item label="review date" value="CREATED_AT" />
        <Picker.Item label="rating average" value="RATING_AVERAGE" />
      </Picker>
      
      <Picker
        selectedValue={orderDirection}
        onValueChange={(itemValue, _itemIndex) => {
          setOrderDirection(itemValue)
          onDatafromChild({
            "orderBy": orderBy,
            "orderDirection": itemValue
          })
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