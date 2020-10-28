import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export class RegisterScreen extends Component {
    render() {
        return (
            <View style = {{ 
                    width:'100%', 
                    height:'100%', 
                    justifyContent: 'center',
                    alignSelf: 'center', 
                    alignContent: 'center', 
                    alignItems: 'center' }}>
                        <Text style={styles.TextLogin}>Register</Text>
                        <View style ={styles.container}>
                        <TextInput 
                        placeholder = "username or email"
                        style = {styles.input}/>
                        <TextInput 
                        placeholder = "password"
                        style = {styles.input}/>
                        <TextInput 
                        placeholder = "phone"
                        style = {styles.input}/>
                        <TextInput 
                        placeholder = "address"
                        style = {styles.input}/>
                        <TouchableOpacity style = {styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Login')}>
                            <Text style= {styles.buttonText}>Register</Text>
                        </TouchableOpacity>     
                        </View>
                </View>
        )
    }
}
const styles =StyleSheet.create({
    TextLogin: {
        fontSize: 35,
        marginBottom: 40,
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


export default RegisterScreen
