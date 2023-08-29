import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="test" style={styles.input}></TextInput>
        <Button style={styles.button} title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    height: 45,
    fontSize: 25,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    backgroundColor: "blue",
  },
});
