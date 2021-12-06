/*항목 생성에 들어갈 버튼들. 카테고리, 듀데이트, reminder 등등.. */

import React, {useState} from 'react';
import {Text, View, Pressable, StyleSheet, Modal, Dimensions} from 'react-native';
import { textStyles, viewStyle } from '../substyle';
import { Modalcalender } from './Calender';
import { Calendar } from 'react-native-calendars';
import { images } from "../images";
import { IconButton_direct } from "./IconButton";
import moment from 'moment';

export const Duedate = () => {
    const week = ['SUN','MON', 'TUE','WED','THU','FRI','SAT'];
    let today = new Date();
    let today_with_week = week[today.getDay()];
    today = today.getFullYear()+ "-" + parseInt(today.getMonth()+1)+"-"+today.getDate().toString().padStart(2,'0');
    today_with_week = today +" "+ today_with_week;
    

    const [duedate, setduedate] = useState(today);
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <>
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style = {styles.modalView}>
                <View>
                    <Calendar /*여기서 클릭한 부분이 색칠이 안되는데 아무래도 class 안에다 사용해야할 것 같다. calender.js 파일로 옮겨 짤 생각 */
                        renderArrow={(direction) => {
                            if (direction == "right")
                              return (
                                <View><IconButton_direct type = {images.left} /></View>
                              );
                            if (direction == "left")
                              return (
                                <View><IconButton_direct type = {images.right} /></View>
                              );
                          }}
                        onDayPress={(day) => setduedate(day.dateString)}
                        markedDates= {{
                            duedate :  {marked: true,  backgroundColor: 'green'},
                        }}
                    />
                    {/*<Modalcalender setduedate = {setduedate} />*/}
                </View>
                <View>
                    <Pressable
                        onPressOut = {() => {setModalVisible(!modalVisible);}}
                    >

                    <Text style = {textStyles.heading}>done</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

        <View style={viewStyle.container}>
            <Text style={[textStyles.heading, {flexDirection:"row"}]}>Due date</Text>
        </View>
        <View style={[viewStyle.container, viewStyle.subcontainer]}>
            <Box />
            <Pressable 
                style = {[viewStyle.button, {width: '90%'}]}
                onPress={() => setModalVisible(true)}
            >
                <Text style = {textStyles.heading}>{duedate}</Text>
            </Pressable>  
        </View>
        
        </>
  
        
    );
};

export const Reminder = () => {
    return(
        <>
        <View style = {viewStyle.container}>
            <Text style ={textStyles.heading}>Reminder</Text>
        </View>
        <View style={[viewStyle.container, viewStyle.subcontainer]}>
            <Box />  
        </View>
        </>
    );
};

export const Category = () => {
    return(
        <View style = {viewStyle.container}>
        <Text style ={textStyles.heading}>Category</Text>
        </View>
    );
};

const Box = () => {
    return(
        <View style = {[viewStyle.button, {height: 20, width: 20, marginLeft: 0}]}></View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      marginTop: 200,
      marginHorizontal: 20,
      backgroundColor: "white",
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
});