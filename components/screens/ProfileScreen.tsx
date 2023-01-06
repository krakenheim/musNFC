import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProfileScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold"}}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
