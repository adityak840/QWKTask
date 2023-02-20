import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/component/Login';
import Verify from './src/component/Verify';
import Register from './src/component/Register';
import Welcome from './src/component/Welcome';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors,networkErrors})=> {
  if (graphqlErrors) {
    graphqlErrors.map(({message,location,path})=> {
      alert(`Graphql  error ${message}`);
    })
  }
})


const link = from([
  errorLink,
  new HttpLink({uri:"https://dev-api-101.qwk.co.in/graphql",
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Onboarding" component={Slider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
    
  );
  
};

export default App;

const styles = StyleSheet.create();