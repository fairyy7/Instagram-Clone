import React from "react";
import { View } from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";
import globalStyles from "../components/globalStyles";

function PostScreen({ navigation }) {
  return (
    <View style={globalStyles.droidSafeArea}>
      <AddNewPost navigation={navigation} />
    </View>
  );
}

export default PostScreen;
