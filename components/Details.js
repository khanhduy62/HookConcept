import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { DataContext } from '../AppContext';

const Details = ({navigation}) => {
  const id = navigation.state.params.id;
  const {data, selectItem} = useContext(DataContext);
  const item = data[id];

  return (
    <View
      style={[
        styles.centered,
        {backgroundColor: item.selected ? 'green' : 'red'},
      ]}>
      <Text style={styles.title}>{`Details for Item: ${item.title}`}</Text>
      <Text
        onPress={() => {
          selectItem(item.id);
        }}>{`Is selected: ${item.selected}\n\n(click me to toggle selected)`}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    marginTop: 24,
  },
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
