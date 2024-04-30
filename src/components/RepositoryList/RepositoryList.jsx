

import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "../ItemSeparator";
import useRepositories from '../../hooks/useRepositories';

import { Picker } from '@react-native-picker/picker'
import { useState } from 'react';

const RepositoryOrderPicker = ({ onDatafromChild }) => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  return (
    <View>
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue, itemIndex) => {
          setOrderBy(itemValue)
          onDatafromChild({
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
        onValueChange={(itemValue, itemIndex) => {
          setOrderDirection(itemValue)
          onDatafromChild({
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


export const RepositoryListContainer = ({ repositories, onDatafromChild }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ <RepositoryOrderPicker onDatafromChild={onDatafromChild} /> }
      renderItem={ ({ item }) => <RepositoryItem data={item} /> }
      keyExtractor={item => item.id}
    />
  );
}

const RepositoryList = () => {
  const defaultValue = {
    "orderBy": 'CREATED_AT',
    "orderDirection": 'DESC'
  };
  const [orderFromChild, setOrderFromChild] = useState(defaultValue);

  const { repositories } = useRepositories(orderFromChild);

  return <RepositoryListContainer repositories={repositories} onDatafromChild={setOrderFromChild} />
};

export default RepositoryList;