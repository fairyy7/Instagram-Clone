import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
import PostUploader from "./PostUploader";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <PostUploader navigation={navigation} />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
      <Image
        source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 25,
  },
});

export default AddNewPost;
