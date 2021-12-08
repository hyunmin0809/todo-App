/*메인화면*/
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import { images } from '../images';
import { IconButton } from '../components/IconButton';
import { Task } from '../components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage'

function Main({navigation}) {

  const [userInfo, setUserInfo] = useState({
    '1': { id:'1', task: "example1", duedate: "2021-06-12", duetime: "8:00", category: "category", comment: "comment", picture: "picture", completed: false },
  });
  const [isReady, setIsReady] = useState(false);
  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks');
    setUserInfo(JSON.parse(loadedTasks || '{}'));
  }
 
  return (
    <View>
      <Button title = '눌러봐용' onPress = {_loadTasks}></Button>
      <Button
        title="+"
        onPress={()=>navigation.navigate('Addtodo')}/>
        <Task tasks = {userInfo}/>
    </View>
  );
    
}


  
  export default Main;