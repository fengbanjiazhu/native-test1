import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleInput(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler(addedGoal) {
    if (addedGoal === "") return;
    console.log(addedGoal);
    setToDos([...toDos, addedGoal]);
    setInputText("");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="test" style={styles.input} onChangeText={handleInput} />
        <Button
          onPress={() => {
            addGoalHandler(inputText);
          }}
          title="ADD"
        />
      </View>
      <ScrollView>
        {toDos.map((todo, index) => {
          return (
            <View key={index} style={styles.list}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </ScrollView>

      <StatusBar />
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
  list: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
