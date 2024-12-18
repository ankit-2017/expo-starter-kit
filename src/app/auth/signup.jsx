import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import webStyle from "screens/Login/style.module.css";
import Heading from "../../components/common/Heading";

export default function Index() {

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#a65cf7", "#2f31d4"]}
        style={{
          flex: 1,
          $$css: true,
          _: webStyle.webContainer,
        }}
      >
        <StatusBar style="auto" />
        <View style={Styles.mainContainer}>
          <Heading text="Sign Up page comming soon" />
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    paddingTop: "30%",
    paddingRight: 20,
    paddingLeft: 20,
    fontFamily: "Signika",
    $$css: true,
    _: webStyle.innerContainer,
  },
});