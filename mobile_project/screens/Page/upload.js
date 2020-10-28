import React from 'react'
import { View, Button, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker'



export function Upload () {
  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
  }
    return (
      <View>
      <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {{ marginTop: 70 }}>
        <Button title = "Upload Slip" onPress = {handleChoosePhoto}/>
        </Text>
        
      </View>
     
      </View>
    )
  }


