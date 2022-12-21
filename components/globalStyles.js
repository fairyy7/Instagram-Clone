import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#050505",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
