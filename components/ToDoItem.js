import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ToDoItem({ value }) {
  return (
    <View style={styles.list}>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ToDoItem;
