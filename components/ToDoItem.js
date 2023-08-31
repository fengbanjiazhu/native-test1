import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

function ToDoItem({ item, onDelete }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(item.uid)}>
      <View style={styles.list}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

{
  /* <TouchableHighlight underlayColor="#FF4D4F" onPress={() => onDelete(item.uid)}>
<View style={styles.list}>
  <Text>{item.value}</Text>
</View>
</TouchableHighlight> */
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
