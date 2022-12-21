import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/Instagram_logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("PostScreen")}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => <DropDown />}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/material-rounded/24/ffffff/line-width.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DropDown = () => (
  <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
    <Menu>
      <MenuTrigger onPress={onPress} />
      <MenuOptions>
        <MenuOption value={1} text="Posts" />
        <MenuOption value={2} text="Sessions" />
        <MenuOption value={3} text="Posts & Sessions" />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  iconContainer: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
