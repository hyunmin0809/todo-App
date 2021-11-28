import React, { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';


const Input = ({value, onChangeText, onSubmitEditing}) => {
    return(
        <TextInput style ={inputStyle.textInput}
            placeholder="Add Task here..."
            placeholderTextColor= {"black"}
            maxLength={20}
            value = {value} onChangeText={onChangeText} onSubmitEditing = {onSubmitEditing}>
        </TextInput>

    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 21,
        width: '90%',
        height: 40,
        marginTop: 30,
        marginLeft: 10,
        paddingLeft: 10,
        paddingTop: 2,
        borderRadius: 3,
        backgroundColor: "white",
    },
});

export default Input;
