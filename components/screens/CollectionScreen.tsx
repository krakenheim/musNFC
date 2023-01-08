import React, { useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, Modal, TouchableOpacity} from "react-native";

export default function CollectionScreen () {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => {
    setModalVisible(true);
    setModalItem(item);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalItem(null);
  };
  const DATA = [
    {
      id: "1",
      image:
        "https://aros.dk/media/2282/aros_at_2709_foto_anders_traerup.jpg?center=0.51,0.70666666666666667&mode=crop&width=1200&height=630&rnd=132116367640000000",
      title: "Aros",
      text: "Lorem ipsum dolor sit amet",
      
    },
    {
      id: "2",
      image:
        "https://natmus.dk/typo3temp/assets/images/csm_nationalmuseet_400_220_489276c07a_0c9472fcaf.jpg",
      title: "NatMus",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      id: "3",
      image:
        "https://www.moesgaardmuseum.dk/media/2214/moesgaard-museum-close-up-of-the-roof-photo-moesgaard-museum.jpg?anchor=center&mode=crop&width=1120&heightratio=0.5619747899159663865546218487&format=jpg&quality=80&slimmage=true&rnd=131746739230000000",
      title: "Moesgaard Museum",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      id: "4",
      image:
        "https://natmus.dk/typo3temp/assets/images/csm_1_Jelling_foto_roberto_fortuna169_510c9f5a9f_de852f6744.jpg",
      title: "Kongernes Jelling",
      text: "Lorem ipsum dolor sit amet",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>
              {modalItem ? modalItem.title : ''}
            </Text>
          </View>
          <View style={styles.modalBody}>
            {modalItem ? (
              <Text style={styles.modalText}>{modalItem.additionalInfo}</Text>
            ) : null}
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    marginBottom: 20,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#666",
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
