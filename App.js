import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import Modal from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const image = {uri: 'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
  const trash = {uri: "./assets/favicon.png"};

  const onHandleChangeText = text => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    console.log("aqui agregamos el item", textItem);
    setList(prevState => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = item => {
    console.log("en esta funcion seteo el item y abro el modal");
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = item => {
    console.log("eliminar este item", item);
    setList(prevState =>
      prevState.filter(element => element.name !== item.name)
    );
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <TouchableOpacity  onPress={() => onHandleModal(item)}>
        <Image source={require ("./assets/favicon.png")} style={styles.buttonImageIconStyle}></Image>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Lista Optimizada</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="elemento de la lista"
            style={styles.input}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <TouchableOpacity onPress={addItem} style={styles.button}>
            <Text style={styles.text}>Presiona Aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2",
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "white",
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color:'red',
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: 600,
    backgroundColor: "white",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
    color: "white",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});