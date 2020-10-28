import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import {Upload} from './upload'



export default function money({ navigation }) {
    return (
        <View>
            <View style ={styles.container}>
                <Text style = {{ fontSize:30, marginTop: 10 }}>Transfer money</Text>
                <Text style = {{ fontSize:20 , marginTop: 15}}>Account number: 891-xxx-xxxx</Text>
                <Text style = {{ fontSize:20 , marginTop: 15}}>Siam Commercial Bank Co., Ltd.</Text>
            </View>
            <Upload/>
            <View style = {{ width:"50%",  marginTop: 65, height: 15, alignSelf: 'center'}}>
                <Button title = "ยืนยันการโอนเงิน" onPress = {() => navigation.navigate('OrderList')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    }
})

