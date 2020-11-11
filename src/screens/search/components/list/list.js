import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Card from "../cardGif/cardGif";

export default function List({ gifs, onNexPage }) {
  const renderItem = (arrayItem) => {
    return (
      <Card
        img={{ uri: arrayItem.item.img }}
        title={arrayItem.item.Title}
        id={arrayItem.item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={gifs}
        renderItem={renderItem}
        keyExtractor={(arrayItem) => arrayItem.id}
        onEndReached={() => {
          onNexPage();
        }}
        onEndReachedThreshold={0.8}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
});
