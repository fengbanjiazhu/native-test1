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
        <View style={styles.btnWrapper}>
          <Button onPress={handleCancel} title="CANCEL" color={"red"} />
          <Button onPress={handleAddToDos} title="ADD" />
        </View>
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
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 5,
    fontSize: 25,
  },
});

export default ToDoInput;
