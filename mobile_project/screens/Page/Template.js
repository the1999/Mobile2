import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input'


export default class Template extends Component {
    render() {
        return (
            <ScrollView>
                <Card.Title style = {{ fontSize: 30 }}>Order List</Card.Title>
                <Card>
                <View>
                <Text style= {{ fontSize: 20 }}>แบบถัง </Text>
                <Image source = {require('./imge/num1.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
                <Text style = {{ fontSize: 20, textAlign: 'right'}}>15฿</Text>
                <View style = {{ flexDirection: 'row-reverse'}}>
                <NumericInput onChange={value => console.log(value)}/>
                </View>
                </View>
                </Card>   
                <Card>
                <Text style = {{ fontSize: 20 }}>แบบลัง</Text>
                <Image source = {require('./imge/num2.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
                <Text style = {{ fontSize: 20, textAlign: 'right'}}>30฿</Text>
                <View style = {{ flexDirection: 'row-reverse'}}>
                <NumericInput onChange={value => console.log(value)}/>
                </View>
                <View style = {{ marginTop: 20 }}>
                    <Text  style = {{ textAlign: 'right', fontSize: 20 }}>Total 45฿</Text>
                </View>
              </Card>       
                 
                <View style = {{ marginTop: 30, marginBottom: 20 }}>
                <Button
                title="Order water"
                
                onPress = {() => this.props.navigation.navigate('money')}/>
                </View>
             
            </ScrollView>
            
            
        )
    }
}


