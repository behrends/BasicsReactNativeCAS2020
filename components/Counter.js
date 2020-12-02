import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// export default function Counter({ label, value }) {
//   return (
//     <View>
//       <Text style={styles.counter}>{value}</Text>
//       <Button title={label} onPress={() => alert('Es klappt 1')} />
//     </View>
//   );
// }

export default class Counter extends React.Component {
  // initialen Zustand (state) beim ersten Anzeigen der Komponente
  state = { value: this.props.value };

  // render wird von React automatisch ausgeführt, wenn
  // a) die Komponente im UI erscheint (mit initialem state)
  // b) der Zustand in state sich ändert (Aufruf von this.setState)
  // c) die props einer Komponente sich ändern (z.B. bei Text unten)
  render() {
    const { label } = this.props;
    const { value } = this.state;
    return (
      <View>
        <Text style={styles.counter}>{value}</Text>
        <Button
          title={label}
          onPress={() => this.setState({ value: value + 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    color: 'orange',
    fontSize: 82,
  },
});
