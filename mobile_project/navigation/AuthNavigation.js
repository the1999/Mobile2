import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import money from '../screens/Page/money'
import RegisterScreen from '../screens/RegisterScreen'
import OrderList from '../screens/Page/OrderList'
import OrderHistory from '../screens/Page/OrderHistory'


const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthNavigation () {
        return (
            <AuthStack.Navigator
            mode = {"modal"}
            screenOptions = {{
                headerShown: false,
            }}>
                <AuthStack.Screen name = {"LoginStack"}> 
                    {() => (
                        <LoginStack.Navigator 
                        mode = {"card"}
                        screenOptions={{
                            headerShown: false,
                        }}
                        >
                            <LoginStack.Screen name = {"Login"} component = {LoginScreen}/>
                        </LoginStack.Navigator>
                    )}
                </AuthStack.Screen>
                <AuthStack.Screen name = {"Register"} component = {RegisterScreen}/>
                <AuthStack.Screen name = {"money"} component = {money}/>
                <AuthStack.Screen name = {"OrderList"} component = {OrderList}/>
                <AuthStack.Screen name = {"OrderHistory"} component = {OrderHistory}/>
            </AuthStack.Navigator>
        )
    }


export default AuthNavigation
