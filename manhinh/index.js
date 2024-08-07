import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Bai1 from './bai1'
import Bai2 from './bai2'
import Bai3 from './bai3'
import Chinh from './manchinh'
const StackDemo=createStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator
      screenOptions={{
        headerShown: false,  
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Animation ngang
      }}
      initialRouteName='ChinhScreen'>
      <StackDemo.Screen name='ChinhScreen' component={Chinh} options={{headerShown:false}} />
        <StackDemo.Screen name='Bai1Screen' component={Bai1} options={{headerShown:false}} />
        <StackDemo.Screen name='Bai2Screen' component={Bai2} options={{headerShown:false}} />
        <StackDemo.Screen name='Bai3Screen' component={Bai3} options={{headerShown:false}} /> 
      </StackDemo.Navigator>
    </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})