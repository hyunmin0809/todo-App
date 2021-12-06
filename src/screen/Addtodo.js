/*항목 생성 screen */
import React, {useState} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { footer } from '../Addtodostyle';
import { AddTask, AddComment } from '../components/Input'
import { Duedate, Reminder } from '../components/Button';


class Addtodo extends React.Component{
    constructor(props){
        super(props);
        this.navgateToScreen = this.navigateToScreen.bind(this);
    }
    navigateToScreen(screenName){
        this.props.navigation.navigate(screenName);
    }
    render(){
        return (
            <SafeAreaView style = {viewStyles.container}>
                <StatusBar/>
                <Set_item/>

                <View style = {viewStyles.footer}>
                    <ResetButton />
                    <ExportButton onPressout = {() => {this.navigateToScreen('Main')}}/>
                </View>

            </SafeAreaView>

        );
    }
}

/*reset, export 아래 버튼 reset은 삭제 가능성 잇음*/
const ResetButton = () => {
    /*const _reset = () => 값 reset*/
    
    return(
        <Pressable 
        style = {[footer.pressable, { backgroundColor: '#C4C4C4'}]}
        
        >
        <Text style = {footer.text}> reset </Text>
        </Pressable>
    );
};

const ExportButton = ({onPressout}) => {
    /*const _import = () => 메인화면으로 이동, 값 전달*/ 
        return(
            <Pressable 
            style = {[{ backgroundColor: '#00462A' }, footer.pressable]}
            onPressOut = {onPressout}
            >
            <Text style = {footer.text}> confirmed </Text>
            </Pressable>
        );
}

/*중간 부분 */
const Set_item = () => { /* 정리가 너무 안돼서.... 이 부분은 다른 파일로 옮길 가능성 있음*/
    const [inputs, setInputs] = useState({
        task: '',
        comment: ''
    });
    const { task, comment } = inputs;

    const _onChangeText = text => {
        setNewTask(text);
    }

    const _submit = () =>{
        
    }


    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {[viewStyles.itemsetting]}>
        <AddTask value = {task} onChangeText = {_onChangeText}/>
        
        <Duedate/>
        <Reminder/>

        {/*<Category/> */}
  
        <AddComment /> 
        
      </View>
    </TouchableWithoutFeedback>
    );
  };
  
  const viewStyles = StyleSheet.create({
    container: { /*전체용 이 안에 itemsetting이랑 footer가 구성*/
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', 
    },
    itemsetting: { /*항목생성 설정 (input~map까지)칸*/
        height: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    footer: { /*맨 아래 버튼 2개*/
        height: '10%',
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
    }
});


   

export default Addtodo;