import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Users } from "../../data/users";
import Entypo from "react-native-vector-icons/Entypo";

const Stories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Users.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.push("Status", {
                  name: data.user,
                  image: data.image,
                })
              }
            >
              <View
                style={{
                  flexDirection: "column",
                  paddingHorizontal: 8,
                  position: "relative",
                }}
              >
                {data.id == 1 ? (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 15,
                      right: 10,
                      zIndex: 1,
                    }}
                  >
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: "#405de6",
                        backgroundColor: "white",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                ) : null}
                <View>
                  <Image source={{ uri: data.image }} style={styles.story} />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {data.user.length > 11
                    ? data.user.slice(0, 10).toLowerCase() + "..."
                    : data.user.toLowerCase()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
