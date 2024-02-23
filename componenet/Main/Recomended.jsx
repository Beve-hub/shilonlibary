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

const Recomended = () => {
  return (
    <View style={{marginBottom:60 }}>
         <View style={{marginBottom:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Recomended Books</Text>
              <Text style={{fontSize:14, fontWeight:'light',color:'#12121270'}}>26 Books Added</Text>
            </View>
            <TouchableOpacity>
              <Text style={{fontSize:18, fontWeight:'bold',color:"#6684D2"}}>All</Text>
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
            <TouchableOpacity style={{display:'flex', flexDirection:'row',alignItems:'center',}}>
            <Image source={item.image} alt="" style={{resizeMode:'contain',backgroundColor:'#E0E0E0', borderRadius:20, padding:10}}/> 
            </TouchableOpacity>
            <Text style={{fontSize:12, width:90, marginTop:10}}>{item.title}</Text> 
        </View>
    )
}