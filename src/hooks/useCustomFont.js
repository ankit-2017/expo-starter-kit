import { useFonts } from "expo-font";

export default function useCustomFont() {
  const [fontsLoaded, fontError] = useFonts({
    Signika: require("../../assets/fonts/signika.ttf"),
  });

  return { fontsLoaded, fontError };
}
