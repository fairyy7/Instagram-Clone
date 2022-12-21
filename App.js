import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import globalStyles from "./components/globalStyles";
import { SafeAreaView, View } from "react-native";
import SignedInStack from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <SignedInStack />
    </SafeAreaView>
  );
}
