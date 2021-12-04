/*항목 생성 screen */
import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import { footer } from '../Addtodostyle';
import { AddTask, AddComment } from '../components/Input'


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

const Set_item = () => { /*가운데 조작 */
    return (
      <View style = {[viewStyles.itemsetting]}>
        <AddTask />
        
        {/* <Duedate/>
        <Reminder/>
        <Category/> */}
  
        <AddComment /> 
        
      </View>
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