import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/component/Login';
import Verify from './src/component/Verify';
import Register from './src/component/Register';
import Welcome from './src/component/Welcome';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Slider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default App;

const styles = StyleSheet.create();