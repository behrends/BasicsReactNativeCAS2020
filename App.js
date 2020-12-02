import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from './components/Counter';
import Random from './components/Random';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter label="Zähler1" value="0" />
      <Counter label="Zähler2" value="10" />
      <Counter label="Zähler3" value="100" />
      <Random label="Zufall" value="123" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
