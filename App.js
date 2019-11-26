import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Child from './components/Child';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`log--You clicked ${count} times`);
  }, [name, count]);

  useEffect(() => {
    return () => {
      console.log('log--c');
    };
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, [setCount]);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times.</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me"
        color="red"
        accessibilityLabel="Click this button to increase count"
      />
      <Child reset={resetCount}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
