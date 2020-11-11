import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import screens from "../../../constants/screens";

export default function ButtonSearch({ navigation, id, title }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screens.search, { id, title })}
    >
      <Text>BUSCAR GIFS</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#50c878",
    fontWeight: "bold",
    width: 260,
    height: 70,
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#50c878",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4,
    elevation: 24,
  },
});
