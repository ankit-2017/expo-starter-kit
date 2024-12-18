import React from 'react';
import { Stack } from 'expo-router';

export default function Auth() {
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
        name="signup"
        options={{ headerTitle: "Sign Up" }}
      />
      <Stack.Screen name="requestOTP" />
    </Stack>
  )
}