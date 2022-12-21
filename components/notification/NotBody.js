import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const NotBody = () => {
  const data = [
    {
      id: "50",
      post_title: "setup",
      postimage:
        "https://i.pinimg.com/736x/74/d8/f4/74d8f4930130863679e2b9568cd00f87.jpg",
      profile:
        "https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Ethan",
      notification: " liked your post",
      time: "10:00",
    },
    {
      id: "51",
      post_title: "lakeside",
      postimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwJFI-u6rbsbQD7wmRRissPMqeAChkokH0Q&usqp=CAU",
      profile:
        "https://images.pexels.com/photos/7235676/pexels-photo-7235676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "halsey",
      notification: " liked your post",
      time: "12:30",
    },
    {
      id: "52",
      post_title: "setup",
      postimage:
        "https://i.pinimg.com/736x/74/d8/f4/74d8f4930130863679e2b9568cd00f87.jpg",
      profile:
        "https://images.pexels.com/photos/6516059/pexels-photo-6516059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Riya",
      notification: "shared your post",
      time: "12:00",
    },
    {
      id: "53",
      post_title: "setup",
      postimage:
        "https://i.pinimg.com/736x/74/d8/f4/74d8f4930130863679e2b9568cd00f87.jpg",
      profile:
        "https://images.pexels.com/photos/12551545/pexels-photo-12551545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Abha",
      notification: " liked your post",
      time: "01:00",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.HeaderLeftImageView}>
                <Image
                  style={styles.HeaderLeftImage}
                  source={{ uri: item.profile }}
                />
              </View>
              <View style={styles.HeaderRightImageView}>
                <Image
                  style={styles.HeaderRightImage}
                  source={{ uri: item.postimage }}
                />
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <View>
                  <Text style={{ color: "#1B6ADF", fontSize: 15 }}>
                    {item.username}
                  </Text>
                  <Text style={{ color: "#646768" }}>{item.time}</Text>
                </View>
                <View>
                  <Text style={{ color: "#fff" }}>{item.notification}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NotBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderLeftImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  HeaderLeftImageView: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  HeaderRightImage: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
  HeaderRightImageView: {
    flexDirection: "row",
    width: 50,
    height: 50,
    position: "absolute",
    right: 0,
    marginRight: 20,
  },
});
