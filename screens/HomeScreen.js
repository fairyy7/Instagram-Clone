import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/header";
import { POSTS } from "../data/posts";
import Post from "../components/home/Post";
import Stories from "../components/home/stories";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
