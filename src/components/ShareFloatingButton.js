import React from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default class ShareFloatingButton extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.menu]}>
            <AntDesign name="sharealt" size={24} color="#474E57" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 3,
    borderColor: "#474E57",
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#474E57",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: "#FFF"
  }
});