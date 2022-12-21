import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const RegisterForm = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Mobile number or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          required={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder=" Full name"
          autoCapitalize="none"
          keyboardType="full-name"
          textContentType="full-name"
          required={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Username"
          autoCapitalize="none"
          keyboardType="text"
          textContentType="user-name"
          autoFocus={true}
          required={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          required={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="confirm_password"
          required={true}
        />
      </View>
      <TouchableOpacity
        titleSize={20}
        style={styles.button}
        onPress={() => navigation.push("OTPScreen")}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack("LoginScreen")}>
        <Text style={{ color: "#6BB0F5", fontSize: 11 }}>
          Already have an account?
        </Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={{ fontSize: 11 }}>
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },

  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
export default RegisterForm;
