import React from "react";
import { Text, StyleSheet } from "react-native";

export default ({ text }) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Signika",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
