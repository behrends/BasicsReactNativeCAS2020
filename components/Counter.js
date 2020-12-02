// Hook useState importieren
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Früher brauchten wir Klassen für Zustand (state)
// seit 1-2 Jahren gibt es in React die sogenannten Hooks
// Hooks erweitern Funktionskomponenten mit bestimmten Fähigkeiten
// z.B. erweitert der Hook useState Funktionskomp. mit Zustand (state)
export default function Counter({ label, value }) {
  // state mit Hook useState deklarieren
  // dies muss am Anfang der Funktion passieren
  // initialer state wird mit useState(initValue) festgelegt
  // useState liefert dann ein Array als Ergebnis zurück,
  // und dieses Array enthält den Wert des states und eine
  // update-Funktion für den state (entspricht this.setState in Klassen)
  const [counter, setCounter] = useState(value);
  // [counter, setCounter] ist eine Array-Destrukturierung
  // counter --> this.state.counter in Klassen
  // setCounter(newVal) --> this.setState({counter: newVal}) in Klassen

  return (
    <View>
      <Text style={styles.counter}>{counter}</Text>
      <Button title={label} onPress={() => setCounter(counter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    color: 'orange',
    fontSize: 82,
  },
});
