import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { Card } from 'react-native-elements';

export class OrderHistory extends Component {
    render() {
        return (
            <ScrollView>
            <Card.Title style = {{ fontSize: 30 }}>Order History</Card.Title>
            <Card>
            <View>
            <Text style= {{ fontSize: 20 }}>แบบถัง </Text>
            <Image source = {require('./imge/num1.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
            <Text style = {{ fontSize: 20, textAlign:'right' }}>1 ถัง</Text>
            <Text style = {{ fontSize: 20, textAlign: 'right'}}>29/10/2020</Text>
            <View style = {{ flexDirection: 'row-reverse'}}>
           
            </View>
            </View>
            </Card>   
            <Card>
            <Text style = {{ fontSize: 20 }}>แบบลัง</Text>
            <Image source = {require('./imge/num2.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
            <Text style = {{ fontSize: 20, textAlign:'right' }}>1 ลัง</Text>
            <Text style = {{ fontSize: 20, textAlign: 'right'}}>29/10/2020</Text>
            <View style = {{ flexDirection: 'row-reverse'}}>  
            </View>          
          </Card>       
            <View style = {{ marginTop: 30, marginBottom: 20 }}>
            <Button
            title="Back to Home"
            onPress = {() => this.props.navigation.navigate('DrawerNavigator')}/>
            </View>
         
        </ScrollView>
        )
    }
}

export default OrderHistory
