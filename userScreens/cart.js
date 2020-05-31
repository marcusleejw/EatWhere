import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";


export default function Cart( {navigation}) {


    return (
        <View style = {styles.container}>
            <Text>
                Welcome to your cart!
            </Text>
            <Button 
                color = '#f01d71'
                title = 'Place order'
                onPress = { () => navigation.navigate('PaymentModal') }  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 50,
        backgroundColor: "#fff",
    },
});