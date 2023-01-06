//! Credits for the tab navigation is https://reactnavigation.org/docs/bottom-tab-navigator/#initialroutename and https://www.youtube.com/watch?v=AnjyzruZ36E&t=607s
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
// npm install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScanScreen from "./components/screens/ScanScreen";
import AnotherScreen from "./components/screens/AnotherScreen";
import LastScreen from "./components/screens/LastScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Scan">
        <Tab.Screen name="Another" component={AnotherScreen}/>
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Last" component={LastScreen}/>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
