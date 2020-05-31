import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CheckQueueNo({ navigation }) {
  return (
    <View style = {styles.container}>
      <Text> 
        Queue number screen
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
      alignItems: 'center',
      padding: 50,
      backgroundColor: "#fff",
  },
});
