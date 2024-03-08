import { View, Text,SafeAreaView,ScrollView,TouchableOpacity, 
    Image, 
    FlatList  } from 'react-native'
import React from 'react'
import { sliderBooks } from "../../constant/index.js";
import { AntDesign } from '@expo/vector-icons';

const PopularBooks = ({ navigation }) => {
  return (
    <SafeAreaView>
        
        <View
          style={{ flexDirection: "row", alignItems:'center', marginTop: 40,padding:10, gap:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('TabGroup')} style={{ fontWeight: "bold", fontSize: 20, backgroundColor:'#E0E0E0', padding:5, borderRadius:30 }}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
            </TouchableOpacity>                    
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Popular Book</Text>     
        </View>

        
        <ScrollView>
         <FlatList
                numColumns={2}
                data={sliderBooks}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{  marginBottom: 100 }}
                columnWrapperStyle={{
                    justifyContent:'space-around', paddingLeft:20,paddingRight:20
                }}
                renderItem={({ item, index }) => <PopularBook item={item} />}
            />
        </ScrollView>      
    </SafeAreaView>
  )
}

const PopularBook = ({ item }) => {
    return (
        <View style={{ marginVertical: 10, }}>
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image} style={{ resizeMode: 'contain', backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10, width: 120, height: 120, paddingVertical: 30 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 12, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: "#12121260" }}>{item.name}</Text>
        </View>
    );
}

export default PopularBooks