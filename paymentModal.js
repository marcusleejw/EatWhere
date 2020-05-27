import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal
  } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";


export default function PaymentModal ({ navigation }) {
    return (
        <View style = { styles.container }> 
            <Text> 
                Payment Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: "#fff",
    },
})