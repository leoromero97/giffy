import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Error({ textError }) {
  return <Text style={styles.text}>{textError}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "#D8FFCC",
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "bold",
  },
});
