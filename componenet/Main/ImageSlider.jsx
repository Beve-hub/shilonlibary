import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

const ImageSlider = () => {
    const carouselRef = useRef(null);
    const [list, setList] = useState([]);

    useEffect(() => {
      const API_KEY = 'AIzaSyCQuaWYBXVyBT7ujf6vva21bdLim_pqn-M';
        const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${API_KEY}`;

        const fetchData = async () => {
            try {
                const resp = await axios.get(url);
                if (resp.data.items.length === 0) {
                    console.log("No data found");
                } else {
                    const data = resp.data.items.map(item => ({
                        name: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown",
                        title: item.volumeInfo.title,
                        image: item.volumeInfo.imageLinks ? { uri: item.volumeInfo.imageLinks.thumbnail } : require("../../assets/adaptive-icon.png")
                    }));
                    setList(data);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    const ItemCard = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={item.image} alt="" style={{ resizeMode: 'contain', width: 200, height: 200, paddingVertical: 30 }} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Carousel
            data={list}
            ref={carouselRef}
            layout={'stack'}
            layoutCardOffset={`25`}
            autoplay={false}
            renderItem={({ item }) => <ItemCard item={item} key={item.title} />} // Added key prop
            sliderWidth={wp(100)}
            firstItem={1}
            itemWidth={wp(100) - 70}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
    );
}

export default ImageSlider;
