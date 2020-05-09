import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const GameScreen = ({
  chosenNumber,
  createGuessed,
  guessedNumber,
  setTimesGuessed,
  setChosenNumber,
  setEnteredNumber,
}) => {
  const [currentNumber, manageCurrentNumber] = useState(chosenNumber);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [times, setTimes] = useState(1);

  const checkIsGuessed = (randomNumber) => {
    if (randomNumber === guessedNumber) {
      
      setChosenNumber("");
      setEnteredNumber("");
      setTimesGuessed(times);
      setMin(1);
      setMin(99);
      setTimes(1);
    }
  };

  const handleGuesedNumber = (isHigher) => {
    const currentInteger = parseInt(currentNumber);

    if (isHigher && currentNumber < guessedNumber) {
      setMin(currentInteger);

      const randomNumber = createGuessed(currentInteger, max);
      checkIsGuessed(+randomNumber);
      manageCurrentNumber(randomNumber);
    }

    if (!isHigher && currentInteger > guessedNumber) {
      setMax(currentInteger);

      const randomNumber = createGuessed(min, currentInteger);
      checkIsGuessed(+randomNumber);
      manageCurrentNumber(+randomNumber);
    }

    setTimes(times + 1);
  };

  return (
    <Card>
      <Text>{currentNumber}</Text>
      <View style={styles.toolbar}>
        <Button
          title="Lower"
          color={Colors.secondary}
          onPress={() => handleGuesedNumber(false)}
        />
        <Button
          title="Higher"
          color={Colors.primary}
          onPress={() => handleGuesedNumber(true)}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export default GameScreen;
