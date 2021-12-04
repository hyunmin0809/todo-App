import React from 'react';
import {Text, View, Pressable} from 'react-native';
import { textStyles, viewStyle } from './substyle';

export const Duedate = () => {
    const today = "오늘 날짜 들어갈 예정"
    return(
        <>
        <View style={viewStyle.container}>
            <Text style={[textStyles.heading, {flexDirection:"row"}]}>Due date</Text>
        </View>
        <View style={[viewStyle.container, viewStyle.subcontainer]}>
            <Box />
            <Pressable style = {[viewStyle.button, {width: '90%'}]}><Text style = {textStyles.heading}>{today}</Text></Pressable>  
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