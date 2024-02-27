import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
  } from "react-native";
import React from 'react'
import { recomendBooks } from "../../constant/index.js";

const Recomended = ({ navigation }) => {
  return (
    <View style={{marginBottom:60 }}>
         <View style={{marginBottom:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Recomended Books</Text>
              <Text style={{fontSize:12, fontWeight:'light',color:'#12121270'}}>26 Books Added</Text>
            </View>
            <TouchableOpacity>
              <Text onPress={() => navigation.replace('RecomBooks')} style={{fontSize:16, fontWeight:'bold',color:"#6684D2"}}>All</Text>
            </TouchableOpacity>         
          </View>
      
          <FlatList
          horizontal={true}
          data={recomendBooks }
          keyExtractor={item=> item.name}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:30, paddingHorizontal:12,}}
          renderItem={({item, index}) => <Popular  index={index} item={item} />}
     />
    </View>
  )
}

export default Recomended

const Popular = ({item,index}) => {
    return (
        <View style={{marginTop:10,marginBottom:30}}>
            <TouchableOpacity activeOpacity={0.7} style={{display:'flex', flexDirection:'row',alignItems:'center',}}>
            <Image source={item.image} alt="" style={{resizeMode:'contain',backgroundColor:'#E0E0E0', borderRadius:20, padding:10, width: 170, height:170,paddingVertical:30}}/> 
            </TouchableOpacity>
            <Text style={{fontSize:14,  marginTop:10,fontWeight:'bold'}}>{item.title}</Text> 
            <Text style={{fontSize:12, fontWeight:'bold',  color:"#12121260"}}>{item.name}</Text> 
        </View>
    )
}