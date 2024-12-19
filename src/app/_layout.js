import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {Provider} from "react-redux";
import React, { useEffect } from "react";

import useCustomFont from "../hooks/useCustomFont";
import { store } from '../store'
import '../../global.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

SplashScreen.preventAutoHideAsync();

export default function App () {
  const { fontsLoaded } = useCustomFont();

  useEffect(() => {
    if (fontsLoaded) {
        SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="auth"
            options={{ headerTitle: "Sign Up", headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </Provider>
  );
}
