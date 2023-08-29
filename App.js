import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleInput(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler(addedGoal) {
    if (addedGoal === "") return;
    setToDos([...toDos, { uid: Math.random().toString(), value: addedGoal }]);
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
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={toDos}
        renderItem={(itemData) => (
          <View style={styles.list}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>

      {/* <ScrollView>
        {toDos.map((todo, index) => {
          return (
            <View key={index} style={styles.list}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </ScrollView> */}

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

  list: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
