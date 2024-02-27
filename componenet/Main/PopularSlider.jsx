import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    FlatList 
} from "react-native";

import { sliderBooks } from "../../constant/index.js";

const PopularSlider = ({ navigation }) => {


    return (
        <View>
            <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Books</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'light', color: '#12121270' }}>26 Books Added</Text>
                </View>
                <TouchableOpacity >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#6684D2" }}   onPress={() => navigation.replace('PopularBooks')} >All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal={true}
                data={sliderBooks}
                keyExtractor={item => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 30, paddingHorizontal: 12 }}
                renderItem={({ item, index }) => <PopularBook item={item} />}
            />
        </View>
    );
}

const PopularBook = ({ item }) => {
    return (
        <View style={{ marginTop: 10, marginBottom: 30 }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image} style={{ resizeMode: 'contain', backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10, width: 170, height: 170, paddingVertical: 30 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: "#12121260" }}>{item.name}</Text>
        </View>
    );
}

export default PopularSlider;
