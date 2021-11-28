import React from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {viewStyle, textStyles} from './styles';
import {Header, TodoListTemplate, Footer} from './components/TodoListTemplate'

const App = () =>{

    return (
        <SafeAreaView style = {viewStyle.container}>
            <StatusBar/>
            <Header/>
            <TodoListTemplate/>
            <Footer/>
        </SafeAreaView>

    );
};

export default App;