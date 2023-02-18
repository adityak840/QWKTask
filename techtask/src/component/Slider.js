
import {Animated, FlatList, StyleSheet, Text, View,Button, TouchableOpacity, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const back = (index) => {
    if (index == 0){
      return
    }
    else{
      return "< Back";
    }
  } 

  const next = (index) => {
    if (index == 2){
      return "Lets go >"
    }
    else{
      return "Next >";
    }
  }

  const goNextSlide = () => {
    const nextIndex = index +1;
    const offset = nextIndex * width;
    ref?.current?.scrollToOffset({offset});
    if (nextIndex == 3){
      navigation.navigate('Login');
    }
  };
  
  const goBackSlide = () => {
    const nextIndex = index -1;
    const offset = nextIndex * width;
    ref?.current?.scrollToOffset({offset});
  };

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        ref = {ref}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View style={styles.pages}>
        <TouchableOpacity onPress={goBackSlide}>
          <View>
            <Text style = {styles.text}>{back(index)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={(goNextSlide)}>
          <View>
            <Text style = {index == 2 ? (styles.text1):(styles.text)}>{next(index)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  pages:{
    marginLeft:30,
    marginRight:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom:100,
  },
  text:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#583FD0',
  },
  text1:{
    backgroundColor:'#583FD0',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    width: 110,
    height: 41,
    borderRadius: 20,
    textAlign:'center',
    paddingTop: 5,
  }
});