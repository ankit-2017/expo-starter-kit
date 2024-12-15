import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

import useCustomFont from "../hooks/useCustomFont";

SplashScreen.preventAutoHideAsync();

export default () => {
  const { fontsLoaded } = useCustomFont();
  SplashScreen.hideAsync();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#a65cf7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        navigationBarColor: "#2f31d4",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
