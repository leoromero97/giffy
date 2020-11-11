import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "./components/search/search";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Search />
      <Text style={styles.text}>ACA VA EL CONTENEDOR QUE MUESTRA LOS GIFS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  text: { color: "#D8FFCC" },
});
