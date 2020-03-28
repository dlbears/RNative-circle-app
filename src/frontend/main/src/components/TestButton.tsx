import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

const TestButton = ({ label }) => (
    <View style={styles.container}>
    <Button
        title={label}
        onPress={() => console.log("pressed")}
    />
  </View>
)

const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 36
    },

  });
  
  export default TestButton;