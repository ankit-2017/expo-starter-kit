import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Alert, Image, Pressable } from "react-native";

import UserButton from "../../components/common/Button";
import TextInput from "../../components/common/TextInput";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function fetchHello() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    Alert.alert("Hello ", data.hello);
    console.log("Hello ", data.hello);
  }

  const onLogin = () => {
    fetchHello();
    router.replace("page1");
  };

  const onSignUp = () => {
    Alert.alert("Sign up action", "Comming soon", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={Styles.LoginContainer}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../../assets/splash.png")}
          style={Styles.image}
        />
      </View>
      <TextInput
        value={userId}
        setValue={(ele) => setUserId(ele)}
        placeholder="Enter Login ID"
        inputLabel="Login ID"
        customStyles={Styles.textInputStyles}
      />
      <TextInput
        value={password}
        setValue={(ele) => setPassword(ele)}
        placeholder="Enter Password"
        inputLabel="Password"
        type="password"
        customStyles={Styles.textInputStyles}
      />
      <UserButton
        onPress={onLogin}
        title="Login"
        type="linear"
        backgroundColor={["#f73946", "#e0468e"]}
        customStyles={{ marginTop: 16 }}
      />
      <View style={Styles.signupWrapper}>
        <Text style={{ fontSize: 14, color: "#fff" }}>
          Don't have account!{" "}
        </Text>
        <Pressable onPress={onSignUp}>
          <Text style={Styles.signupText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  textInputStyles: {
    marginTop: 8,
    marginBottom: 8,
  },
  textStyles: {
    textAlign: "center",
    fontFamily: "Signika",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  image: {
    width: 170,
    height: 160,
  },
  signupWrapper: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  signupText: {
    fontSize: 14,
    color: "#e0468e",
  },
});
