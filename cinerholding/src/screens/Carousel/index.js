/* eslint-disable prettier/prettier */
import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {Icon, Text} from 'native-base';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './carouselCardItem';
import data from './data';

const CarouselScreens = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  return (
      <View style={{flex:1}}>
      <View style={{flex:2}}>
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
        </View>
        <View style={{flex:1}} />
        <View style={{alignItems:'flex-start',marginLeft:20}}>
        <TouchableOpacity
         onPress={() => navigation.navigate('Home')}
         style={{backgroundColor:'white',height:50,width:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
           <Icon name="ios-home-outline" size={25}  />
        </TouchableOpacity>
        </View>
      </View>
  );
};

export default CarouselScreens;
