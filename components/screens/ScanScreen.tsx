import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  Alert,
} from "react-native";
import NfcManager, { NfcTech, NfcEvents } from "react-native-nfc-manager";

// import React {useState} from 'react'

const nfcTestPress = () => {
  console.log("TouchableOpacity pressed!");
};

NfcManager.start();

export default function ScanScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [nfcTag, setNfcTag] = useState(null); 

  const showModal = (item) => {
    setModalVisible(true);
    setNfcTag(item);
  };

  const closeModal = () => {
    setModalVisible(false);
    setNfcTag(null);
  };

 /*  const openModal = (item) => {
    setModalVisible(true);
    setModalItem(item);
    renderItem(item);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalItem(null);
  }; */

  const DATA = {
    "5354EC45200001": {
      image: require("../../assets/images/hjelm.jpg"),
      title: "Hjelm fra 2. verdenskrig",
      text: "Denne hjem er fra en falden soldat, som oprindeligt boede i Skanderborg. Under 2. verdenskrig blev soldaten sendt til vestfronten...",
    },
    "53C48346200001": {
      image: require("../../assets/images/pilespids.jpg"),
      title: "Pilespids fra stenalderen",
      text: "Denne pilespids er fundet ved Rinkloster, og er brugt som pilespids til at nedlægge vildsvin",
    },
    "53162146200001": {
      image: require("../../assets/images/perler.jpg"),
      title: "Perler",
      text: "Perlerne er blevet brugt til særlige begivenheder.",
    },
  };

  const { title, text, image } = DATA[nfcTag] || {};

  const renderItem = ({ nfcTag }) => (
    //<TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={{
            uri: nfcTag.image,
          }}
        />
        <Text style={styles.itemTitle}>{nfcTag.title}</Text>
        <Text style={styles.itemText}>{nfcTag.text}</Text>
      </View>
    //</TouchableOpacity>
  );


  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const tag = await NfcManager.getTag();
      setModalItem(tag);
      setNfcTag(tag.id);
      setModalVisible(true);
      //openModal(nfcTag);
      Alert.alert("tag found", JSON.stringify(nfcTag));
    } catch (e) {
      console.warn("Something went wrong", e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  /* const renderTitle = (nfcTag) => {
    if (nfcTag.it == "5354EC45200001")
      return (
        <Text style={styles.modalHeaderText}>Hjelm</Text>
      );
    return null;
  } */

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={readNdef}>
          <Text style={styles.butText}>Scan {"\n"} NFC</Text>
        </TouchableOpacity>
        <Text style={{}}> Version 1.0.20</Text>
      </View>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image style={styles.itemImage} source={image} />
            <Text style={styles.modalHeaderText}>
              {title}
              {/*  {modalItem ? modalItem.id : ""} */}
            </Text>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalText}>{text}</Text>
            {/* {modalItem ? (
            <Text style={styles.modalText}>{modalItem.text}</Text>
          ) : null} */}
          </View>
          <View style={styles.modalFooter}>

            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Gem</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
    backgroundColor: "#3f51b5",
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
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  itemText: {
    fontSize: 16,
    color: "#666",
  },
  item: {
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#3f51b5",
  },
  modalHeaderText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  modalBody: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
  modalButton: {
    padding: 10,
    margin: 5,
    backgroundColor: "#3f51b5",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
