import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";

export default function StoreMenu({ route, navigation }) {

  const[ item, setItem ] = useState([
    { name: "Chicken Katsu", price: 3, key: '1'},
    { name: "Terriyaki Chicken", price: 2, key: '2' },
  ]);

  return (
  <View style={styles.container}>
    <FlatList 
      data = { item }
      renderItem = {({ item }) => (
        <FlatButton 
        styleInput= {buttonStyle}
        text = { item.name }
        onPress = {() => navigation.navigate('FoodDetails', item)}
        />
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
    backgroundColor: "#fff",
  },
});

const buttonStyle = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginVertical: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "pink",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
