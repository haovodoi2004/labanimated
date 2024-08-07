import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Manchinh = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center'}}>Lab3-ph45181</Text>
     <View style={{flexDirection:'row',marginBottom:10}}>
     <Text style={{fontSize:25}}>Bài 1:</Text>
     <Text style={{marginTop:13}}>COMPONENT DI CHUYỂN LÊN XUỐNG</Text>
     </View>
     
      <Button title='Bài 1' onPress={()=>{navigation.navigate('Bai1Screen')}} />
      <View style={{flexDirection:'row',marginBottom:10}}>
     <Text style={{fontSize:25}}>Bài 2:</Text>
     <Text style={{marginTop:13}}>ANIMATION VỚI FLATLIST</Text>
     </View>
    
      <Button title='Bài 2' onPress={()=>{navigation.navigate('Bai2Screen')}} />
      <View style={{flexDirection:'row',marginBottom:10}}>
     <Text style={{fontSize:25}}>Bài 3:</Text>
     <Text style={{marginTop:13}}>SCROLL HEADER</Text>
     </View>
      <Button title='Bài 3' onPress={()=>{navigation.navigate('Bai3Screen')}} />
    </View>
  )
}

export default Manchinh

const styles = StyleSheet.create({})