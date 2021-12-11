import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';

import TodoListScreen from './screens/TodoList';
import CategoryScreen from './screens/Category';
import ReportScreen from './screens/Report';
import RandomScreen from './screens/Random';

const Drawer = createDrawerNavigator();

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
                <Drawer.Screen name="Random" component={RandomScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;