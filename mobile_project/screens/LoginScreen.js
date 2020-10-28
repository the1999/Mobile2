import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { color } from 'react-native-reanimated'
import ValidationComponent from "react-native-form-validator"
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'



export default class LoginScreen extends ValidationComponent {

    render() {
        return (
                <View style = {{ 
                    width:'100%', 
                    height:'100%', 
                    justifyContent: 'center',
                    alignSelf: 'center', 
                    alignContent: 'center', 
                    alignItems: 'center' }}>
                        <Text style={styles.TextLogin}>DEW WATER</Text>
                        <View style ={styles.container}>
                        <TextInput 
                        placeholder = "username or email"
                        style = {styles.input}/>
                        <TextInput 
                        placeholder = "password"
                        style = {styles.input}/>
                        <TouchableOpacity style = {styles.buttonContainer} onPress = {() => this.props.navigation.navigate('DrawerNavigator')}>
                            <Text style= {styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <Button
                        title = "Register Here"
                        color = "#5f9ea0"
                        opacity = '0.5'
                        onPress = {() => this.props.navigation.navigate('Register')}/>         
                        </View>
                </View>
        )
    }}
const styles =StyleSheet.create({
    TextLogin: {
        fontSize: 35,
        marginBottom: 60,
        opacity: 0.9,
        color:'#5f9ea0'

    },
    Signup: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textSignup: {
        textAlign: 'center'
    },
    input: {
        height: 50,
        width:400 ,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    container: {
        padding: 20
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

