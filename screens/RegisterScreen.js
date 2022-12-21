import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import RegisterForm from "../components/loginScreen/RegisterForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { Validator } from "email-validator";

const RegisterScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/icons/Instagram_logo.png")}
        style={{ width: 200, height: 100, resizeMode: "contain" }}
      />
    </View>
    <RegisterForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default RegisterScreen;
