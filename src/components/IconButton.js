/*Task 나열에 사용*/

import React from 'react';
import { Pressable, Image } from 'react-native';
import { images } from '../images';
import { StyleSheet } from 'react-native';

const IconStyle = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        margin: 10,
    }
});

export const IconButton = ({type}) => {
    return(
        <Pressable>
            <Image source={type} style={IconStyle.icon}/>
        </Pressable>
)}