import { useNavigation } from '@react-navigation/native';
import React, { useRef,useState } from 'react'
import { View,Text,StyleSheet,Image,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import { useMutation, gql } from '@apollo/client';

const GENERATE_OTP = gql`
  mutation GetOtp($mobileNumber: String!, $hashValue: String) {
    generateOtp(mobileNumber: $mobileNumber, hashValue: $hashValue) {
      message
    }
  }
`;

const {width, height} = Dimensions.get('screen');
const title = "Use your mobile \nnumber to login";
const greeting = [
    {
        id:1,
        message:"Hello 👋"
    },
    {
        id:2,
        message:"வணக்கம் 🙏"
    },
    {
        id:3,
        message:"नमस्ते 🙏"
    },
];
const Login = () => {
    const navigation = useNavigation();
    const [Number,setNumber] = useState('');
    const inputRef = useRef();
    const formatPhoneNumber = (Number) => {
        let newText = '';
        let cleaned = (''+Number).replace(/\D/g, '');
        for (i = 0; i < cleaned.length; i++){
            if (i==3){
                newText= newText+ ' ';
            }
            else if (i==6){
                newText=newText+' ';
            }
            newText = newText + cleaned[i];
        }
        setNumber(newText);

    };
    const phNumber = Number[0]+Number[1]+Number[2]+Number[4]+Number[5]+Number[6]+Number[8]+Number[9]+Number[10]+Number[11];
    const [message, setMessage] = useState('');
    const [generateOtp] = useMutation(GENERATE_OTP);
    async function handleGetOtp() {
      try {
        const { data } = await generateOtp({
          variables: { mobileNumber: phNumber, hashValue: '#kjglkj' },
        });
    
        setMessage(data.generateOtp.message);
        console.log(message);
      } catch (error) {
        console.error(error);
     }
    }
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
            <View style = {styles.view}>
                <Text style={{
                    color: '#878DBA'
                }}>Your number</Text>
                <View style = {styles.inputContainer}>
                    <Text style={styles.placeholder}>🇮🇳  +91</Text>
                    <TextInput
                        value={Number}
                        inputMode='tel'
                        keyboardType='number-pad'
                        style={styles.input}
                        ref={inputRef}
                        onLayout={()=> inputRef.current.focus()}
                        alignItems='center'
                        textAlignVertical='center'
                        width='90%'
                        color= '#1E2661'
                        onChangeText={(Number)=>formatPhoneNumber(Number)}
                        maxLength={12}
                    />
                </View>
                
            </View>
            <View style = {styles.submit}>
                <Text style={{
                    color: '#878DBA',
                }}>We need your phone number for verification purposes</Text>
                        <TouchableOpacity onPress={() => {
                        navigation.navigate('Verify',{
                            Number: Number,
                        });
                        handleGetOtp()
                    }}>
                            <View style = {styles.button}>
                            <Text style={styles.buttont}>Continue</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
        
    </View>
  )
}

export default Login

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
    view:{
        marginTop:'4%',
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
    },
    input:{
        fontSize:18,
    },
    placeholder:{
        marginLeft:9,
        marginRight:9,
        fontFamily:'Poppins-Regular',
        fontSize:18,
        paddingTop:5,
        color: '#1E2661',
    },
    submit:{
        marginTop:'2.5%',
        marginLeft:'7%',
    },
    button:{
        marginTop:10,
        width:'95%',
        backgroundColor:'#583FD0',
        height: '40%',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    buttont:{
        fontSize:18,
        color:'#FFFFFF',
        fontFamily:'metropolis-regular'
    }
});