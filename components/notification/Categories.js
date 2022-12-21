import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = ["Likes", "Shares", "Comments", "Request", "Updates"];

class Categories extends Component {
  state = {};
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate("List", {
                category,
              })
            }
          >
            <View>
              <Text
                style={{
                  color: "#EEEEEE",
                  padding: 10,
                  borderWidth: 1,
                  backgroundColor: "#160040",
                  fontSize: 16,
                  margin: 10,
                  borderRadius: 20,
                }}
              >
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
