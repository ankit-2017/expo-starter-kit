import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  RefreshControl,
  Pressable,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";

export default () => {
  const createThreeButtonAlert = (index) =>
    Alert.alert("Alert action", "Alert message", [
      { text: "Ok", onPress: () => console.log("ok pressed") },
    ]);
  return (
    <View style={{ flex: 1, backgroundColor: "#3f4075" }}>
      <Text>This is HOme Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
  },
  buttonWrapper: {
    flex: 1,
    fontFamily: "Signika",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 5,
    height: 150,
    width: "100%",
    backgroundColor: "#0553",
  },
});
