/*메인 스크린에 띄울 task list */
import React, {useState} from "react";
import { StyleSheet, View, Text, Pressable, Alert, Modal, TouchableWithoutFeedback } from "react-native";
import { IconButton } from "./IconButton";
import { images } from "../images";
import { ThemeColors } from "react-navigation";



export const Task = ({item, toggleTask}) =>{
    return(
        <View style = {itemStyle.container}>
            <IconButton style = {[{flex: 1}]} type = {item.completed ? images.completed : images.uncompleted} 
            id = {item.id} onPressOut={toggleTask}/>
            <View style = {[itemStyle.contents, {flex: 5}]}>
                <Text style = {[itemStyle.taskfont,
                    {color: (item.completed) ? '#595959':'#00462A'},
                    {textDecorationLine: (item.completed ? 'line-through':'none')}]}>{item.task}
                </Text>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {itemStyle.datefont}>{item.duedate}</Text>
                    <Text style = {itemStyle.datefont}>  {item.duetime}</Text>
                 </View>
            </View>
            <IconButton type = {images.menu} />
        </View>
    );
}

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