/*메인화면*/
import React, {useState, useEffect} from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import {View, Text, Button, ScrollView, Pressable} from 'react-native';
import { images } from '../images';
import { IconButton } from '../components/IconButton';
import { Task } from '../components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage'

function Main({navigation}) {

  const [taskInfo, setTaskInfo] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const isFocused = useIsFocused();
  /*useFocusEffect( //네비게이션 넘어올때, 시작할때마다 실행!
    React.useCallback(()=>{
      const firstLoad = async () => {
          const loadedTasks = await AsyncStorage.getItem('tasks');
          setTaskInfo(JSON.parse(loadedTasks || '{}'));
          console.log(taskInfo)
          if(!loadedTasks){setIsEmpty(true)}
          else{console.log(setIsEmpty(false))}
      }
        firstLoad();
      
      return () => {
      }
    }, [])
  );*/

  
  useEffect(() => {
    
    if (isFocused) {
        const firstLoad = async () => {
            const loadedTasks = await AsyncStorage.getItem('tasks');
            setTaskInfo(JSON.parse(loadedTasks || '{}'));
            if(!loadedTasks){setIsEmpty(true)}
            else{console.log(setIsEmpty(false))}
            console.log(taskInfo)
        }
          firstLoad();
    }
      
  }, [isFocused]);
      
  const _saveTasks = async tasks => {
      try{
          await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
          setTaskInfo(tasks);
      }catch(e) {
          console.error(e);
      }
  };
  
  const _toggleTask = id => {
    const currentTasks = Object.assign({},taskInfo);
    currentTasks[id] ['completed'] = !currentTasks[id]['completed'];
    setTaskInfo(currentTasks);
    _saveTasks(currentTasks);
  }

  function AllTasks(){
    if(isEmpty === false){return (
      <ScrollView width = '100%'>
        {Object.values(taskInfo).reverse().map(item => ( 
            <Task key = {item.id} item = {item} toggleTask = {_toggleTask}/>
        ))} 
      </ScrollView>
    )}
    else {return(null)}
  }
  function DefaultTasks() {
    let today = new Date();
    today = today.getFullYear()+ "-" + parseInt(today.getMonth()+1)+"-"+today.getDate().toString().padStart(2,'0')
    const sorted = Object.values(taskInfo).filter(task => task.duedate.slice(0,-4) >= today );
    if(isEmpty === false){return (
      <ScrollView width = '100%'>
        {Object.values(sorted).reverse().map(item => ( 
            <Task key = {item.id} item = {item} toggleTask = {_toggleTask}/>
        ))} 
      </ScrollView>
    )}
    else {return(null)}
  }

  return (
    <View>
      <Button
        title="+"
        onPress={()=>navigation.navigate('Addtodo')}/>
      <DefaultTasks/>
    </View>
  );
    
}


  
  export default Main;