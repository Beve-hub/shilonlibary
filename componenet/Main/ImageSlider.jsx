import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import { sliderImages } from '../../constant';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const ImageSlider = () => {
    const carouselRef = useRef(null);

    const ItemCard = ({ item, index }) => {
        return (
            <View >
                 <Image source={item} alt="" style={{resizeMode:'contain'}}/>                               
            </View>
        );
    };
    
  return (
   <Carousel
    data={sliderImages}
    ref={carouselRef}
    layout={'stack'} 
    layoutCardOffset={`25`}
    autoplay={false}
    renderItem={ItemCard}
    sliderWidth={wp(100)}
    firstItem={1}
    itemWidth={wp(100)-70}
    slideStyle={{display: 'flex', alignItems:'center'}}
    />
  )
}

export default ImageSlider
