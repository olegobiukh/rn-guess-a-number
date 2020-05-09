import React, { useState } from "react";
import { View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import CongratsScreen from "./screens/CongratsScreen";

export default function App() {
  const [timesGuessed, setTimesGuessed] = useState(1);

  const createGuessed = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const guessedNumber = createGuessed(1, 99);
  const content =
    timesGuessed > 1 ? (
      <CongratsScreen
        times={timesGuessed}
        guessedNumber={guessedNumber}
        setTimesGuessed={setTimesGuessed}
      />
    ) : (
      <StartGameScreen
        createGuessed={createGuessed}
        guessedNumber={guessedNumber}
        setTimesGuessed={setTimesGuessed}
      />
    );
  return (
    <View>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}
