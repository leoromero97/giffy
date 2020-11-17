import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card({ img, title, id }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#D8FFCC",
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  img: {
    height: 160,
    width: 100,
  },

  text: {
    fontSize: 16,
    color: "#5a5a5a",
  },
});
