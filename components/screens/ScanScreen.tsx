import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NfcManager, { NfcTech } from "react-native-nfc-manager";

import React from 'react'


const nfcTestPress= () => {
  console.log("TouchableOpacity pressed!");
};


NfcManager.start();


export default function ScanScreen({navigation}) {

  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const tag = await NfcManager.getTag();
      console.warn("tag found", tag);
    } catch (e) {
      console.warn("Something went wrong", e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={readNdef}>
        <Text style={styles.butText}>Scan {"\n"} NFC</Text>
      </TouchableOpacity>
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