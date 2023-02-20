import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'

const {width, height} = Dimensions.get('screen');

const Welcome = ({route,navigation}) => {
    const text = "You're\nLogged In";
    const {name} = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.greeting}>Hi {name}</Text>
        <Text style={styles.info}>{text}</Text>
        <View style = {styles.submit}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Onboarding')
                }}>
                    <View style = {styles.signout}>
                        <Text style={styles.signoutt}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: '#F6F5FF',
    },
    greeting:{
        color: '#000000',
        marginLeft:'10%',
        marginTop:'20%',
        fontSize:20,
    },
    info:{
        marginLeft:'10%',
        marginTop:'20%',
        color: '#000000',
        fontSize: 45,
        fontWeight:700,
    },
    signout:{
        marginLeft:"10%",
        marginTop:"30%",
        width:'80%',
        backgroundColor:'#583FD0',
        height: '30%',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    signoutt:{
        fontSize:18,
        color:'#FFFFFF',
        fontFamily:'Poppins-Bold'
    }
})