import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";
import GameScreen from "./GameScreen";

const StartGameScreen = ({ createGuessed, guessedNumber, setTimesGuessed }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [chosenNumber, setChosenNumber] = useState("");

  const handleChosenNumber = () => {
    if (enteredNumber < 100 && enteredNumber > 0) {
      setChosenNumber(enteredNumber);
      setEnteredNumber("");
    }
  };

  const content = chosenNumber ? (
    <GameScreen
      chosenNumber={chosenNumber}
      createGuessed={createGuessed}
      guessedNumber={guessedNumber}
      setTimesGuessed={setTimesGuessed}
      setChosenNumber={setChosenNumber}
      setEnteredNumber={setEnteredNumber}
    />
  ) : (
    <Card>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="nunmber-pad"
        maxLength={2}
        blurOnSubmit
        value={enteredNumber}
        setEnteredNumber={setEnteredNumber}
      />
      <View style={styles.toolbar}>
        <Button
          title="Reset"
          color={Colors.secondary}
          onPress={() => setEnteredNumber("")}
        />
        <Button
          title="Confirm"
          color={Colors.primary}
          onPress={() => handleChosenNumber()}
        />
      </View>
    </Card>
  );
  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  toolbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export default StartGameScreen;
