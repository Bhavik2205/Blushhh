import { Text, View } from "react-native";
import OnboardingScreen from "./OnboardingScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OnboardingScreen />
    </View>
  );
}
