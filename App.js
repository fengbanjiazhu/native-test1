import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import ToDoItem from "./components/ToDoItem";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addGoalHandler(addedGoal) {
    if (addedGoal === "") return;
    setToDos([...toDos, { uid: Math.random().toString(), value: addedGoal }]);
  }

  function removeTodoHandler(uid) {
    const newToDos = toDos.filter((todo) => todo.uid !== uid);
    setToDos([...newToDos]);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <View style={styles.screen}>
      <Button onPress={toggleModal} title="Add new todo" />
      <ToDoInput show={showModal} handlePress={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={toDos}
        renderItem={(itemData) => <ToDoItem item={itemData.item} onDelete={removeTodoHandler} />}
      ></FlatList>

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
