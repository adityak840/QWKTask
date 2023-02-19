import { Image, StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import React from 'react';
  
const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
return (
    <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.titleh}>{item.header}</Text>
        </View>
        <View style={styles.topic}>
          <Text style={styles.titlet} >{item.title}</Text>
          <Image style={styles.titlei} source={item.titlei} />
          <Text style={styles.descriptiont}>{item.titled}</Text>
        </View>
        <View style={styles.contVid}>
          <View style={styles.cont}>
            <Image
              style ={styles.video}
              source={item.vid}
            />  
          </View>
              
        </View>
        
        <View style={styles.content}>
            <Text style={styles.title}>{item.title2}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.end}>
          <Text style={styles.descriptione}>{item.description2}</Text>
        </View> 
    </View>
    );
};
  
export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: '#EDEDFF',
      zIndex: 0,
    },
    header:{
        marginTop: 20,
        marginLeft:12.5,
        flex:0.1,
        width:'100%',
    },
    contVid:{
      flex:0.0000000001,
      zIndex:5,
    },
    cont:{
      marginLeft:'22%',
      width:235, 
      height:230,
      borderRadius:37,
      backgroundColor:'#6100e0',
      borderLeftWidth:6,
      borderBottomWidth:6,
      borderColor:'#B7B6FF',
    },
    video:{
      marginTop:10,
      marginLeft:15,
    },
    topic:{
      flex:0.1,
      width: '100%',
      alignItems:'center',
      justifyContent:'center',
    },
    content: {
      zIndex:0,
      backgroundColor: '#FFFFFF',
      marginLeft:'15%',
      marginRight:'15%',
      marginTop:'10%',
      flex: 0.4,
      alignItems: 'center',
      justifyContent:'flex-end',
      borderRadius: 40,
      borderLeftWidth:6,
      borderBottomWidth:6,
      borderColor:'#583FD0',

    },
    titlei: {
      marginBottom: '3%',
    },
    titleh: {
      fontFamily: 'Gotham-Bold',
      fontSize: 32,
      color: '#583FD0',
    },
    titlet: {
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
      color: '#583FD0',
      textAlign: 'center',
    },
    title: {
      textAlign:'center',
      fontFamily: 'Gotham-Black',
      fontSize: 18,
      color: '#583FD0',
    },
    description: {
      fontFamily: 'Gotham-Medium',
      fontSize: 14,
      marginVertical: '4%',
      color: '#000000',
      marginBottom: 25,
      textAlign: 'center',
    },
    descriptiont: {
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      color: '#583FD0',
      marginBottom: 40,
      textAlign: 'center',
    },
    end:{
      marginLeft:'15%',
      marginRight:'15%',
      flex:0.1,
      alignItems: 'center',
    },
    descriptione: {
      textAlign: 'center',
      fontFamily: 'Gotham-Medium',
      fontSize: 14,
      marginTop: '10%',
      color: '#583FD0',
    },
  });