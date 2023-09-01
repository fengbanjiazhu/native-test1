import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput, Text, Modal } from "react-native";

function ToDoInput({ handlePress, show, handleCancel }) {
  const [inputText, setInputText] = useState("");

  function handleInput(enteredText) {
    setInputText(enteredText);
  }

  function handleAddToDos() {
    handlePress(inputText);
    setInputText("");
  }

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput placeholder="test" style={styles.input} onChangeText={handleInput} />
        <Button onPress={handleCancel} title="CANCEL" color={"red"} />
        <Button onPress={handleAddToDos} title="ADD" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
