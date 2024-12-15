import UserButton from "components/common/Button";
import Heading from "components/common/Heading";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default () => {
  const router = useRouter();
  return (
    <LinearGradient colors={["#a65cf7", "#2f31d4"]} style={styles.container}>
      <StatusBar style="auto" />
      <Heading text="This is home page" />
      <UserButton
        title="Logout"
        type="linear"
        onPress={() => {
          router.replace("/");
        }}
        customStyles={{ width: "20%", margin: 16 }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#3f4075",
  },
});
