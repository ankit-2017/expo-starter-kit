import { Drawer } from "expo-router/drawer";
import React from "react";

export default () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#a65cf7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        drawerStyle: {
          // marginTop: 50,
        },
        drawerContentStyle: {
          marginTop: 40,
        },
      }}
    >
      <Drawer.Screen
        name="page1"
        options={{
          headerTitle: "Quick Word",
          drawerLabel: "Play Game",
        }}
      />
      <Drawer.Screen
        name="page2"
        options={{ headerTitle: "Settings", drawerLabel: "Settings" }}
      />
    </Drawer>
  );
};
