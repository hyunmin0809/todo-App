
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Addtodo from './src/screen/Addtodo';
import Main from './src/screen/Main' 

const Stack = createStackNavigator(); 

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
     </Stack.Navigator> 
 </NavigationContainer> 
    )
}

export default App;