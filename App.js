import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleInput(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler(addedGoal) {
    console.log(addedGoal);
    setToDos([...toDos, addedGoal]);
    setInputText("");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="test" style={styles.input} onChangeText={handleInput}></TextInput>
        <Button
          onPress={() => {
            addGoalHandler(inputText);
          }}
          title="ADD"
        />
      </View>
      <View>
        <Text style={styles.displayText}>
          {toDos.map((todo) => {
            return <Text>{todo}</Text>;
          })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  displayText: {
    marginTop: 20,
    fontSize: 20,
  },
});
