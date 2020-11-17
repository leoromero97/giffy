import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from "react-native";

export default function Search({ placeholder, onSearch, onTextNew }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#D8FFCC"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onTextNew}
      />
      <TouchableOpacity
        onPress={() => {
          onSearch();
        }}
      >
        <Image
          style={styles.img}
          accessibilityLabel="Search"
          source={require("../../../../../assets/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#5a5a5a",
    paddingHorizontal: 16,
  },
  input: {
    height: 46,
    borderBottomColor: "#5a5a5a",
    borderBottomWidth: 1,
    flexGrow: 1,
    color: "#D8FFCC",
    fontSize: 18,
 
  },
  img: { height: 28, width: 28, },
});
