import React, { useContext, useState,useRef } from 'react'
import { View,Text,StyleSheet,Image,Dimensions,TextInput, TouchableOpacity } from 'react-native'
import Number from './Login'

const {width, height} = Dimensions.get('screen');
const title = "Verify \nyour account";

const Verify = ({route,navigation}) => {
    const inputRef = useRef();
    const {Number} = route.params;
    const phNumber = Number[0]+Number[1]+Number[2]+Number[4]+Number[5]+Number[6]+Number[8]+Number[9]+Number[10]+Number[11];
  return (
    <View style={styles.container}>
        <View>
            <Image
              style ={styles.video}
              source={require('./../assets/login-animation.gif')}
            />
        </View>
        <View style = {styles.form}>
            <View style = {styles.head}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.greeting}>Hello 👋</Text>
            </View>
            <View style = {styles.input}>
                <View style = {styles.info}>
                    <Text style = {styles.infot}>Code is sent to +91 {Number}</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <View style = {styles.change}>
                            <Text style={styles.changet}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.view}>
                    <Text style={{
                        color:'#878DBA'
                    }}>Enter the OTP</Text>
                    <View style = {styles.inputContainer}>
                        <TextInput
                            inputMode='tel'
                            keyboardType='number-pad'
                            style={styles.input}
                            ref={inputRef}
                            onLayout={()=> inputRef.current.focus()}
                            alignItems='center'
                            textAlignVertical='center'
                            width='90%'
                            color= '#1E2661'
                        />
                    </View>
                </View>
                <View style = {styles.submit}>
                    <TouchableOpacity>
                        <Text style={{
                        color:'#878DBA',
                        fontSize:16,
                    }}>Send again in 10s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                        navigation.navigate('Register')
                    }}>
                    <View style = {styles.button}>
                        <Text style={styles.buttont}>Verify</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Verify;Number

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    video:{
        width:'100%',
        height:'75%',
    },
    form:{
        height:'100%',        
        zIndex:5,
        flexDirection:'column',
        bottom: '45%',
        borderTopLeftRadius:36,
        borderTopRightRadius:36,
        backgroundColor:'#FFFFFF',
        borderTopWidth:11,
        borderColor: '#583FD0',

    },
    head:{
        marginLeft:'7%',
        marginTop:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    title:{
        color:'#583FD0',
        fontSize: 24,
        fontFamily:'Inter-ExtraBold',
    },
    greeting:{
        fontSize:18,
        fontFamily:'Poppins-Regular',
        marginRight:'7%',
        backgroundColor:'#EBE7FF',
        width: '37%',
        height:'60%',
        textAlign: 'center',
        paddingTop:'2%',
        borderRadius:20,
        color:'#000000',
    },
    input:{
        marginTop:'4%',
        marginLeft:'7%',
    },
    info:{
        marginTop:5,
        flexDirection:'row',
        marginLeft:'7%'
    },
    view:{
        marginLeft:'7%',
    },
    inputContainer:{
        width:'93%',
        marginTop:10,
        height:48,
        backgroundColor:'#F8F8FD',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#583FD0',
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:20,
    },
    input:{
        fontSize:18,
    },
    submit:{
        marginTop:'2.5%',
        marginLeft:'7%',
    },
    button:{
        marginTop:10,
        width:'95%',
        backgroundColor:'#583FD0',
        height: '44%',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    buttont:{
        fontSize:18,
        color:'#FFFFFF',
        fontFamily:'metropolis-regular'
    },
    infot:{
        color: '#878DBA',
        fontSize: 16,
    },
    change:{
        marginBottom:10,
    },
    changet:{
        marginLeft:10,
        fontSize: 16,
        borderBottomWidth:1,
        color:'#F47204',
        borderColor:'#F47204',
        
    }
});