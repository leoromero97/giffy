import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Search from "./components/search/search";
import List from "./components/list/list";
import { getGifs } from "../../services/queryParams";

export default function SearchScreen() {
  const [gifs, setGifs] = useState([]);
  const [text, setText] = useState();

  const search = () => {
    const gifPromise = getGifs(text);
    gifPromise.then((res) => {
      setGifs(res.data.images);
      console.log(res.data.url);
    });
  };

  return (
    <View style={styles.container}>
      <Search placeholder="¿Qué gifs estás buscando?" onSearch={search} />
      <List gifs={gifs} />
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
