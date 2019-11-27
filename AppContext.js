import React, {useState, createContext} from 'react';
import {StyleSheet} from 'react-native';
import Main from './components/Main';
import Details from './components/Details';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const DATA = {
  '1': {
    id: '1',
    title: 'First Item',
    selected: false,
  },
  '2': {
    id: '2',
    title: 'Second Item',
    selected: false,
  },
  '3': {
    id: '3',
    title: 'Third Item',
    selected: false,
  },
};

export const DataContext = createContext({
  data: [],
  selectItem: () => {},
});

const DataContextProvider = props => {
  const selectItem = id => {
    const item = state.data[id];
    item.selected = !item.selected;
    setState({
      ...state,
      data:{
      ...state.data,
      [item.id]: item,
    }})
  };

  const initialState = {
    data: DATA,
    selectItem: selectItem,
  };

  const [state, setState] = useState(initialState);

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

const StackNavigation = createStackNavigator({
  Main: Main,
  Details: Details,
});

const Container = createAppContainer(StackNavigation);

const App = () => (
  <DataContextProvider>
    <Container />
  </DataContextProvider>
);

export default App;

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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
