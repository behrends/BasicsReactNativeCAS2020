import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Random extends React.Component {
  state = { value: this.props.value };

  componentDidMount() {
    // Lebenszyklus: Aufruf nach initialem render
    console.log('component did mount');
    // use cases
    // DB-Zugriff
    // Listener auf Web-Api
    // setup....
  }

  render() {
    // Lebenszyklus: Komponente erneut darstellen
    const { label } = this.props;
    const { value } = this.state;
    return (
      <View>
        <Text style={styles.counter}>{value}</Text>
        <Button
          title={label}
          onPress={() =>
            this.setState({ value: Math.floor(Math.random() * 1000) })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    color: 'red',
    fontSize: 82,
  },
});
