import { View, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const BookDetails = ({route,navigation}) => {
    console.log(route.params)
    const item = route.param;
  return (
    <SafeAreaView>
         <View
          style={{ flexDirection: "row", alignItems:'center', marginTop: 40,padding:10, gap:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('TabGroup')} style={{ fontWeight: "bold", fontSize: 20, backgroundColor:'#E0E0E0', padding:5, borderRadius:30 }}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
            </TouchableOpacity>                    
          
        </View>

    <ScrollView
    showVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}>
        <StatusBar style={"light"}/>
        
        <View>
        <Image source={item.image} style={{ width: 200, height: 200 }} />

        </View>
       
    </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetails