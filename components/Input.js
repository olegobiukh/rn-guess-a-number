import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const handleEnteredNumber = (value) => {
    
    const newValue = value.replace(/[^0-9]/g, "");
    
    props.setEnteredNumber(newValue);
  };
  return (
    <TextInput {...props} onChangeText={handleEnteredNumber} style={styles.input} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 35,
  },
});

export default Input;
