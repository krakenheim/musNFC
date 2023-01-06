import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const readNfc = () => {
  console.log("TouchableOpacity pressed!");
};

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={readNfc}>
        <Text style={styles.butText}>Scan {"\n"} NFC</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    height: 100,
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: "black",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  butText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
