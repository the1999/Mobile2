import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { Card } from 'react-native-elements';

export class OrderList extends Component {
    render() {
        return (
            <ScrollView>
                <Card.Title style = {{ fontSize: 30 }}>My Order</Card.Title>
                <Card.Title style = {{ fontSize: 15 }}>อยู่ระหว่างการดำเนินการ</Card.Title>
                <Card>
                <View>
                <Text style= {{ fontSize: 20 }}>แบบถัง </Text>
                <Image source = {require('./imge/num1.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
                <Text style = {{ fontSize: 20, textAlign:'right' }}>1 ถัง</Text>
                <Text style = {{ fontSize: 20, textAlign: 'right'}}>15฿</Text>
                <View style = {{ flexDirection: 'row-reverse'}}>
               
                </View>
                </View>
                </Card>   
                <Card>
                <Text style = {{ fontSize: 20 }}>แบบลัง</Text>
                <Image source = {require('./imge/num2.jpg')} style = {{ height: 150, width:150 , marginTop: 20}}/>
                <Text style = {{ fontSize: 20, textAlign:'right' }}>1 ลัง</Text>
                <Text style = {{ fontSize: 20, textAlign: 'right'}}>30฿</Text>
                <View style = {{ flexDirection: 'row-reverse'}}>  
                </View>          
              </Card>       
                <View style = {{ marginTop: 30, marginBottom: 20 }}>
                <Button
                title="Confirm receipt"
                
                onPress = {() => this.props.navigation.navigate('OrderHistory')}/>
                </View>
             
            </ScrollView>
            
        )
    }
}

export default OrderList

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    }
})