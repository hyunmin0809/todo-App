import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Addtodo from './src/screen/Addtodo';
import Main from './src/screen/Main' 
import Edit from './src/screen/Edit'

const Stack = createNativeStackNavigator();

function App(){
    return(
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Main"> 
          <Stack.Screen name="Main" component={Main} /> 
          <Stack.Screen name="Addtodo" component={Addtodo} 
              options={{ 
                  title: 'Create to-do item', 
                  headerStyle: {
                      backgroundColor: '#00462A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },

              }}/> 
          <Stack.Screen name="Edit" component={Edit} 
              options={{ 
                  title: 'Edit to-do item', 
                  headerStyle: {
                      backgroundColor: '#00462A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },

              }}/> 
              
    </Stack.Navigator> 
  </NavigationContainer> 
    );
};

export default App;

