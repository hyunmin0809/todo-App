import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Input from "./sub/Input"

export const Header = () => {
  return(
    <View style = {[styles.container, styles.header]}>
    </View>
  );
};

export const Footer = () => {
  return(
    <View style = {[styles.container, styles.footer]}>
    
    </View>
  );
};


export const TodoListTemplate = () => {
  return (
    <View style = {[styles.container, styles.template]}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 5,
    backgroundColor: '#00462A',
  },
  template: {
    flex: 52,
    backgroundColor: '#fff',
  },

  footer: {
    flex: 6,
    backgroundColor: '#C4C4C4',
  },

});