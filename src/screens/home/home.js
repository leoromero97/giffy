import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import screens from "../../constants/screens";

export default function Home({ navigation, id, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola !</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screens.search, { id, title })}
      >
        <Text style={styles.textButton}>Buscar Gifs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#50c878",
    marginBottom: 60,
  },

  textButton: {
    fontSize: 22,
    fontWeight: 400,
  },

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
