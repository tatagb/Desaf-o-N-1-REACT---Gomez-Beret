import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";

const Modal = ({ isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={false}>
      <View style={styles.modalContainer}>
        <View style = {styles.prueba}>
          <Text>Estas seguro que desas borrar este elemento?</Text>
          <Text style={styles.modalTextStyle}>{itemSelected.name}</Text>
          <Button
            title="Eliminar"
            color={"red"}
            onPress={() => actionDeleteItem()}
          />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: 250,
    height: 250,
    margin: 100,
    borderRadius: 20,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
  },
});