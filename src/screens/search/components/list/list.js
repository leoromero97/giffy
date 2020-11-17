import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import Card from "../cardGif/cardGif";
import Error from "../../../error/error";

export default function List({ gifs }) {
  const renderItem = (arrayItem) => {
    return (
      <Card
        img={{ uri: arrayItem.item.images.downsized_medium }}
        title={arrayItem.item.title}
        id={arrayItem.item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!gifs ? (
        <Error textError="Ups, no se encontraron gifs" />
      ) : (
        <FlatList
          data={gifs}
          renderItem={renderItem}
          keyExtractor={(arrayItem) => arrayItem.id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
});
