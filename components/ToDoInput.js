import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput, Text } from "react-native";

function ToDoInput({ handlePress }) {
  const [inputText, setInputText] = useState("");

  function handleInput(enteredText) {
    setInputText(enteredText);
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput placeholder="test" style={styles.input} onChangeText={handleInput} />
      <Button onPress={() => handlePress(inputText)} title="ADD" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 5,
    fontSize: 25,
  },
});

export default ToDoInput;
