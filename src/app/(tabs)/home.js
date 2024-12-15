import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";

export default () => {
  return (
    <LinearGradient colors={["#a65cf7", "#2f31d4"]} style={{ flex: 1 }}>
      <Text style={{ color: "#fff", fontSize: 16 }}>Home page</Text>
    </LinearGradient>
  );
};
