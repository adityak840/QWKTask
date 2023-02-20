import { useNavigation } from '@react-navigation/native';
import React, { useRef,useState } from 'react'
import { View,Text,StyleSheet,Image,Dimensions,TextInput,TouchableOpacity, Button } from 'react-native'
import DatePicker from 'react-native-date-picker';

const {width, height} = Dimensions.get('screen');

import { useMutation, gql } from '@apollo/client';

const UPDATE_CUSTOMER_DETAILS = gql`
  mutation UpdateCustomerDetails($data: CustomerUpdateInput!) {
    updateCustomerDetails(data: $data) {
      id
      email
      firstName
      gender
      phone
      dateOfBirth
      addresses {
        id
        addressType
        line1
      }
    }
  }
`;

const Register = ({route,navigation}) => {
    const {accessToken} = route.params;
    const [fname,setfName] = useState('');
    const [lname,setlName] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const storefName= (fname) => {
        setfName(fname);
    }
    const storelName= (lname) => {
        setlName(lname);
    }
    const [gender, setGender] = useState('');
    const [email,setEmail] = useState('');
    const storeEmail = (email) => {
        setEmail(email);
    }
    const text = "We recommend that you give us your email to\nensure that your account is safe & secure"
    const [updateCustomerDetails, { data }] = useMutation(
        UPDATE_CUSTOMER_DETAILS,
        {
          variables: {
            data: {
              email: email,
              firstName: fname,
              lastName: lname,
              gender: gender,
              dateOfBirth: date,
              fcmToken: '',
              referral: { update: { referralCode: 'refcode' } }
            }
          },
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        }
      );
    
      async function handleUpdate() {
        try {
          await updateCustomerDetails();
        } catch (err) {
          console.error(err);
        }
      };
    return (
    <View style={styles.container}>
        <View>
            <Image
              style ={styles.video}
              source={require('./../assets/login-animation.gif')}
            />
        </View>
        <View style={styles.form}>
            <Text style = {styles.title}>Create account</Text>
            <View style={styles.reqd}>
                <Text style = {styles.asterick}>*</Text>
                <Text style = {styles.reqdt}> Indicates required field</Text>
            </View>
            <Text style={styles.topic}>Personal Information</Text>
            <View style = {styles.inputContainer}>
                    <TextInput
                        value={fname}
                        placeholder='* First Name'
                        inputMode='text'
                        keyboardType='default'
                        style={styles.input}
                        alignItems='center'
                        textAlignVertical='center'
                        width='90%'
                        color= '#1E2661'
                        onChangeText={(fname)=>{storefName(fname)}}
                    />
            </View>
            <View style = {styles.inputContainer}>
                    <TextInput
                        value={lname}
                        placeholder='* Last Name'
                        inputMode='text'
                        keyboardType='default'
                        style={styles.input}
                        alignItems='center'
                        textAlignVertical='center'
                        width='90%'
                        color= '#1E2661'
                        onChangeText={(lname)=>{storelName(lname)}}
                    />
            </View>
            <View>
                    <TouchableOpacity style = {styles.inputContainer} onPress={() => setOpen(true)} >
                        <View style = {styles.button}>
                            <Text style={styles.buttont}>* Date of Birth</Text>
                            <Text style={styles.buttonr}>DD-MM-YYYY   🍰</Text>
                        </View>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
            </View>
            <View style = {styles.checkbox}>
                    <TouchableOpacity onPress={() => setGender("male")} >
                        <View style={(gender == "male")?styles.selected:styles.unselected}>
                            <Text style={(gender == "male")?styles.selectedt:styles.unselectedt}>Male 🙋🏻‍♂️</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender("female")} >
                        <View style={(gender == "female")?styles.selected:styles.unselected}>
                            <Text style={(gender == "female")?styles.selectedt:styles.unselectedt}>Female 🙋🏻‍♀️</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender("others")} >
                        <View style={(gender == "others")?styles.selected:styles.unselected}>
                            <Text style={(gender == "others")?styles.selectedt:styles.unselectedt}>Others 👀</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <Text style={styles.topica}>Account Security</Text>
            <View style = {styles.inputContainer}>
                    <TextInput
                        value={email}
                        placeholder={'email address'}
                        inputMode='email'
                        keyboardType='default'
                        style={styles.input}
                        alignItems='center'
                        textAlignVertical='center'
                        width='90%'
                        color= '#1E2661'
                        onChangeText={(email)=>{storeEmail(email)}}
                    />
            </View>
            <View>
                <Text style = {styles.details}>{text}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    handleUpdate();
                    navigation.navigate('Home',{
                        name:fname,
                    });
                }}>
                    <View style = {styles.signup}>
                        <Text style={styles.signupt}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    video:{
        width:'100%',
        height:'50%',
    },
    form:{
        height:'100%',        
        zIndex:5,
        flexDirection:'column',
        bottom: '35%',
        borderTopLeftRadius:36,
        borderTopRightRadius:36,
        backgroundColor:'#FFFFFF',
        borderTopWidth:5,
        borderColor: '#583FD0',

    },
    title:{
        marginTop:'10%',
        marginLeft:'10%',
        color:'#583FD0',
        fontSize: 24,
        fontFamily:'Inter-ExtraBold',
    },
    reqd:{
        marginTop:'7%',
        marginLeft:'10%',
        color: '#00643C',
        flexDirection:'row',
    },
    asterick:{
        color: '#00643C',
    },
    topic:{
        marginTop:'2%',
        marginLeft:'10%',
        color:'#000000',
        fontSize:15,
        fontWeight:600,
    },
    inputContainer:{
        marginLeft:'10%',
        width:'80%',
        marginTop:10,
        height:48,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#00000080',
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
    },
    input:{
        color:'#000000',
        fontSize:18,
    },
    button:{
        flexDirection:'row',
    },
    buttont:{
        color:'#00000050',
        fontSize:18,
        marginLeft:5,
    },
    buttonr:{
        paddingTop:5,
        left:'210%',
        color:'#00000050',
        fontSize:12,
    },
    checkbox:{
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'4%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    selected:{
        width:90,
        height:50,
        borderRadius:10,
        backgroundColor:'#583FD0',
        alignItems:'center',
        justifyContent:'center',
        color:'#FFFFFF',
    },
    unselected:{
        width:90,
        height:50,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        color:'#FFFFFF',
        borderColor:'#00000050',
        borderWidth:1,
    },
    selectedt:{
        color:'#FFFFFF',
        fontSize:15,
    },
    unselectedt:{
        color:'#000000',
        fontSize:15,
    },
    topica:{
        marginTop:'6%',
        marginLeft:'10%',
        color:'#000000',
        fontSize:15,
        fontWeight:600,
    },
    details:{
        marginTop:'3%',
        marginLeft:'10%',
        color:'#000000',
    },
    signup:{
        marginLeft:"10%",
        marginTop:"4%",
        width:'80%',
        backgroundColor:'#583FD0',
        height: '35%',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    signupt:{
        fontSize:18,
        color:'#FFFFFF',
        fontFamily:'metropolis-regular'
    }
});