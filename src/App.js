import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './components/DrawerContent';

import TodoListScreen from './screens/TodoList';
import CategoryScreen from './screens/Category';
import ReportScreen from './screens/Report';
import RandomScreen from './screens/Random';
import RandomScreen_result from './screens/Random_result';

const Drawer = createDrawerNavigator();
const RandomStack = createStackNavigator();

const RandomStackScreen = ({navigation}) => (
    <RandomStack.Navigator> 
        <RandomStack.Screen name="RandomScreen" component={RandomScreen} />
        <RandomStack.Screen name="RandomScreen_result" component={RandomScreen_result} />
    </RandomStack.Navigator> 
);

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="TodoList"
                drawerContent={props => <DrawerContent {...props}/>} 
            >
                <Drawer.Screen name="To-do List" component={TodoListScreen} />
                <Drawer.Screen name="Category" component={CategoryScreen} />
                <Drawer.Screen name="Report" component={ReportScreen} />
                <Drawer.Screen name="Random" component={RandomStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;