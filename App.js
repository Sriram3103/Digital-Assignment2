import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  color
} from "react-native";


export default function App() {


  return (
    <View style={styles.container}>
    <Text>Enter Email Address </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
         
        />
      </View>
      <Text>Enter Password </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
         
  
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },


  inputView: {
    backgroundColor: "#FAEEE7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },


  loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#24A19C",
  },
});