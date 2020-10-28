import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './navigation/AuthNavigation';
import DrawerNavigator from './navigation/DrawerNavigator';


const Stack = createStackNavigator();


function App() {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                   <Stack.Screen name = "AuthNavigation" component ={AuthNavigation}/>
                   <Stack.Screen name = "DrawerNavigator" component ={DrawerNavigator}/>
                   
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default App;