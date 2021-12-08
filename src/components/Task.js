/*메인 스크린에 띄울 task list */
import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { IconButton } from "./IconButton";
import { images } from "../images";

export const Task = ({tasks}) => {
    /*if(tasks.task === undefined) {
        return(
            <Text>add your todo item!</Text>
        )
    }
    else{*/
        
        
        return (
            <ScrollView width = '100%'>
                {Object.values(tasks).reverse().map(item => ( 
                    <TaskTemplate key = {item.id} task={item.task} duedate={item.duedate} duetime={item.duetime} />
                ))} 
            </ScrollView>
        )
}

const TaskTemplate = ({task, duedate, duetime, isComplete}) =>{
    return(
        <View style = {itemStyle.container}>
                <IconButton style = {{flex: 1}} type = {images.uncompleted} />
                <View style = {[itemStyle.contents, {flex: 5}]}>
                    <Text style = {itemStyle.taskfont}>{task}</Text>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {itemStyle.datefont}>{duedate}</Text>
                        <Text style = {itemStyle.datefont}>  {duetime}</Text>
                    </View>
                </View>
                <IconButton style = {{flex: 1}} type = {images.menu} />
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