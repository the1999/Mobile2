import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Template from '../screens/Page/Template'
import OrderHistory from '../screens/Page/OrderHistory'
import OrderList from '../screens/Page/OrderList'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        
            <Drawer.Navigator initialRouteName = "Template">
                <Drawer.Screen name = "Template" component={Template}/>
                <Drawer.Screen name = "OrderHistory" component ={OrderHistory}/>
                <Drawer.Screen name = "OrderList" component = {OrderList}/> 
            </Drawer.Navigator>
    )
}