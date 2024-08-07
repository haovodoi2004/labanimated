import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
const App = () => {
  const offset=useSharedValue(0);
  const animatedStyles=useAnimatedStyle(()=>{
    return{
      transform:[{translateY: withSpring(offset.value)}],
    };
  });
  const handlePress=()=>{
    offset.value +=200;
    
    }
    const handlePress1=()=>{
      offset.value -=200;
      
      }
  return (
    <View style={{alignItems:'center'}}>
      <Button title='MOVE xuống' onPress={handlePress} />
      <Button title='MOVE lên' onPress={handlePress1} />
      <Animated.View style={[styles.box,animatedStyles]} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  box:{
    height:100,
    width:200,
    backgroundColor:'#FF9900'
  }
})