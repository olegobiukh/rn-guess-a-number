import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CongratsScreen = ({ times, guessedNumber, setTimesGuessed }) => {
  return (
    <View style={styles.container}>
      <Text>Game is over!</Text>
      <Text>Guessed number is {guessedNumber}</Text>
      <Text>Guessed times {times}</Text>
      <View style={styles.button}>
        <Button
          title="Restart"
          onPress={() => setTimesGuessed(1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  button: {
    marginTop: 20,
  },
});

export default CongratsScreen;
