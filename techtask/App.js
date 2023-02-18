import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import Video from 'react-native-video';

const App = () => {
  const onBuffer = (data) => {
    console.log("buffering ",data)
  }
  const onError = (data) => {
    console.log("error ",data)
  }
  return (
    <SafeAreaView>
      <Slider />
      
    </SafeAreaView>
  );
  
};

export default App;

const styles = StyleSheet.create({
  vid:{
    height:'100%',
  },
});