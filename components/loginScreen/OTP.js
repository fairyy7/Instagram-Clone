import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import OTPTextView from "react-native-otp-textinput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    padding: 5,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "60%",
  },
  textInput: {
    height: 40,
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
  foot: {
    marginTop: 5,
    fontWeight: "400",
    textAlign: "center",
    color: "#ffffff",
  },
});

export default class App extends Component {
  state = {
    otpInput: "",
    inputText: "",
  };

  alertText = () => {
    const { otpInput = "" } = this.state;
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

  clear = () => {
    this.input1.clear();
  };

  updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    this.input1.setValue(this.state.inputText);
  };

  render() {
    return (
      <View>
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          handleTextChange={(text) => this.setState({ otpInput: text })}
          inputCount={4}
          keyboardType="numeric"
        />
        <View style={styles.buttonWrapper}>
          <Button title="Clear" onPress={this.clear} />
          <Button
            style={styles.buttonStyle}
            title="Update"
            onPress={this.updateOtpText}
          />
          <Button
            style={styles.buttonStyle}
            title="Submit"
            onPress={this.alertText}
          />
        </View>
        <TouchableOpacity onPress={() => console.log("I'm Pressed")}>
          <Text style={styles.foot}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
