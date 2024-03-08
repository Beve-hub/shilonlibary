import React,{useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    FlatList 
} from "react-native";
import axios from "axios";



const PopularSlider = ({ navigation }) => {
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
                data={list}
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
