import { TextInput, StyleSheet, View, Text, Platform } from "react-native";

export default function Index({
  value,
  setValue,
  customStyles,
  placeholder,
  inputLabel,
  type,
}) {
  return (
    <View style={{ ...customStyles }}>
      {inputLabel && <Text style={Styles.label}>{inputLabel}</Text>}
      <TextInput
        style={Styles.text}
        placeholder={placeholder}
        onChangeText={setValue}
        defaultValue={value}
        placeholderTextColor="#3f4075"
        secureTextEntry={type?.includes("password")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  text: {
    fontFamily: "Signika",
    // height: 0,
    borderRadius: 5,
    // borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 13,
    fontSize: 18,
  },
  label: {
    fontFamily: "Signika",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
});