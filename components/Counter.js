import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Counter(props) {
  const value = props.value;
  return (
    <View>
      <Text style={styles.counter}>{value}</Text>
      <Button title="Button1" onPress={() => alert('Es klappt 1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    color: 'orange',
    fontSize: 82,
  },
});
