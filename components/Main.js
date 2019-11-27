import React, {useContext, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { DataContext } from '../AppContext';

const Main = ({navigation}) => {
  const {data} = useContext(DataContext);

  console.log('log--data ', data)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(data)}
        renderItem={({item}) => (
          <Item
            item={item}
            handleShowDetails={id => {
              navigation.navigate('Details', {
                id,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

function Item({item, handleShowDetails}) {
  const {id, title, selected} = item;
  const {selectItem} = useContext(DataContext);
  return useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectItem(id);
        }}
        style={[
          styles.item,
          {backgroundColor: selected ? 'green' : 'white'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 18,
          }}>
          <Text style={styles.title}>{title}</Text>
          <Text onPress={() => handleShowDetails(id)}>Details</Text>
        </View>
      </TouchableOpacity>
    );
  }, [handleShowDetails, id, selectItem, selected, title]);
}

export default Main;

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
    borderColor: 'blue',
    borderWidth: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
