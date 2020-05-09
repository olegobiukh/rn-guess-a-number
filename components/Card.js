import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.inputWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
  },
});

export default Card;
