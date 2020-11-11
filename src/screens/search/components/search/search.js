import React from "react";
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
  },
  input: {
    height: 46,
    borderBottomColor: "#5a5a5a",
    borderBottomWidth: 1,
    flexGrow: 1,
  },
  img: { height: 30, width: 30 },
});
