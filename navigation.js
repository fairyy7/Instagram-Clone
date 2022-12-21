import React from "react";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
// import Test from "./screens/Test";
import LoginScreen from "./screens/LoginScreen";
import NotificationScreen from "./screens/NotificationScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Search" screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="Test" component={Test} /> */}
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
