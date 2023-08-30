import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from "react-native";

import ToDoItem from "./components/ToDoItem";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [toDos, setToDos] = useState([]);

  function addGoalHandler(addedGoal) {
    if (addedGoal === "") return;
    setToDos([...toDos, { uid: Math.random().toString(), value: addedGoal }]);
  }

  return (
    <View style={styles.screen}>
      <ToDoInput handlePress={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={toDos}
        renderItem={(itemData) => <ToDoItem value={itemData.item.value} />}
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
