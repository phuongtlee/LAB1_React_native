import React from "react";
import { View, Button, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class CapturingTaps extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
      },
      button: {
        backgroundColor: "blue",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
      },
      text: {
        color: "#fff",
        fontSize: 18,
      },
    });
    return (
      <View style={styles.container}>
        <Button title="Button 1" onPress={() => alert("hello!")} />
        <TouchableOpacity
          onPress={() => alert("hello 2!")}
          style={{
            ...styles.button,
          }}
        >
          <Text style={{ ...styles.text }}>Button 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
