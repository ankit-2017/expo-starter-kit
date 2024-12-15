import React from "react";
import { Text, StyleSheet } from "react-native";

export default ({ text, fontColor, fontSize, fontWeight }) => (
  <Text
    style={{ ...styles.text, color: fontColor || "#fff", fontSize, fontWeight }}
  >
    {text}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Signika",
    fontSize: 12,
  },
});
