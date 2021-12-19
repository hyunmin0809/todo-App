import React, { useEffect, useState } from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StatusBar, List, ScrollView, StyleSheet, View, Text, Modal, TextInput, Button, FlatList, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { theme } from '../theme';

import AddFloatingButton from '../components/floatingButtons/AddFloatingButton';
import CategoryInputModal from '../components/categoryContents/CategoryInputModal';
import CategoryItemButton from '../components/categoryContents/CategoryItemButton';

export default function Category(){
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryList, setCategoryList] = useState([
      {"id":0,"categoryItem":"study"},
      {"id":1,"categoryItem":"anniversary"},
      {"id":2,"categoryItem":"hobby"},
      {"id":3,"categoryItem":"etc"},
  ]);
  const CategoryItem = ({categoryItem, onPress}) =>{
    return (
      <View>
        <Pressable style = {itemStyle.container}><Text style = {itemStyle.contents}>{categoryItem}</Text></Pressable>
      </View>
    )
  }
  
  return(
    <>
      <CategoryItem categoryItem = 'study'/>
      <CategoryItem categoryItem = 'anniversary'/>
      <CategoryItem categoryItem = 'hobby'/>
      <CategoryItem categoryItem = 'etc'/>
    </>

  );
}

const itemStyle = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#E6E6E6',
      width: '100%',
      height: 120,
      marginTop: 20,
  },
  contents: {
      marginLeft: 35,
      alignItems: 'flex-start', 
      fontSize: 30,
      color: '#00462A',
  },
  taskfont: {
      fontSize: 60,
      color: '#00462A',
  },
  datefont: {
      fontSize: 16,
      color: '#595959',
  },
});