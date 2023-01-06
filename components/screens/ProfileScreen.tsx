//! Inspired by https://www.youtube.com/watch?v=Zw7FkwXotxg

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";

export default function ProfileScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ alignSelf: "center", marginTop: 100 }}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/images/profilePic.jpg")}
            style={styles.image}
            resizeMode="center"
          ></Image>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.profileText}>Jacob Krag</Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "cover",
  },
  profileImage: {
    height: 180,
    aspectRatio: 1,
    borderRadius: 90,
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  profileText: {
    fontWeight: "200",
    fontSize: 36,
  },
});
