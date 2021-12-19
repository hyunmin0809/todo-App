/*메인 스크린에 띄울 task list */
import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Pressable, Alert, Modal, TouchableWithoutFeedback, TouchableOpacity, Image } from "react-native";
import { IconButton } from "./IconButton";
import { ModalButton } from "./ModalBtn";
import { images } from "../images";
import { ThemeColors } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from '../theme';


export const SortModal = ({duedate, eaddeddate, laddeddate}) =>{

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView1}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
            >
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  {/* Edit, Delete, Share */}
                  <Pressable
                    style={[styles.button, styles.buttonFunction]}
                    onPress={duedate}
                  >
                    <Text style={styles.btntextStyle}>Sort DueDate</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonFunction]}
                    onPress={eaddeddate}
                  >
                    <Text style={styles.btntextStyle}>Sort Early AddDate</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonFunction]}
                    onPress={laddeddate}
                  >
                    <Text style={styles.btntextStyle}>Sort Late AddDate</Text>
                  </Pressable>
                  <Pressable
                   style={[styles.button, styles.blackbutton]}
                   onPress={() => setModalVisible(!modalVisible)}
                   >
                  <Text style={styles.whitebtntextStyle}>Complete</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity
                style={[styles.icon, styles.modalOpen]}
                onPress={() => {setModalVisible(true)}}
            >
                <View>
                    <Pressable
                      onPress={() => {
                        setModalVisible(true)
                      }}
                    >
                    <Text style={styles.whiteText}>SORT TODO ITEMS</Text>
                    </Pressable>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const IconStyle = StyleSheet.create({
  icon: {
      width: 30,
      height: 30,
      margin: 10,
  },
  direction: {
      width: 10,
      height: 10,
  }

});

const itemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        width: '100%',
        marginTop: 10,
    },
    contents: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    taskfont: {
        fontSize: 25,
        color: '#00462A',
    },
    datefont: {
        fontSize: 16,
        color: '#595959',
    },
});


const styles = StyleSheet.create({
    centeredView1: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00462A",
        padding: 8,
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
//      position:"absolute",
      // top: 100,
      // right: 0,
    },
    modalView: {
      margin: 0,
      backgroundColor: "#E6E6E6",
      borderRadius: 10,
      padding: 20,
      width: 250,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    icon: {
        padding: 0,
    },
    button: {
      borderRadius: 20,
      padding: 10,
    },
    blackbutton: {
           backgroundColor: "#00462A",
           borderRadius: 10,
           padding: 10,
    },
    whitebtntextStyle: {
            color: "white",
            fontSize: 18,
            textAlign: "center"
    },
    buttonOpen: {
      backgroundColor: "#E6E6E6",
    },
    modalOpen: {
        backgroundColor: "#00462A",
    },
    buttonClose: {
      position: "absolute",
      bottom: 10,
      right: 10,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: "#999999",
    },
    buttonFunction: {
        borderRadius: 0,
        backgroundColor: "#E6E6E6",
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    btntextStyle: {
      color: "black",
      fontSize: 18,
      textAlign: "center"
    },
    whiteText: {
        color: 'white',
    },
    modalText: {
      marginBottom: 15,
      fontSize: 25,
      textAlign: "center",
    },
    modalsubText: {
      marginBottom: 15,
      fontSize: 18,
      textAlign: "center",
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 70, 42, 0.2)',
    },
  });
