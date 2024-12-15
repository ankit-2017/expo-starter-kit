import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default () => (
  <Tabs
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a65cf7",
        // borderBottomWidth: 0,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      tabBarStyle: {
        backgroundColor: "#2f31d4",
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: "#ff05a8",
      tabBarInactiveTintColor: "#d9ccfc",
    }}
  >
    <Tabs.Screen
      name="(drawer)"
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        // tabBarActiveTintColor: "#5830d1",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="home"
      options={{
        tabBarLabel: "list",
        headerTitle: "List Screen",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="list" size={size} color={color} />
        ),
      }}
    />
  </Tabs>
);
