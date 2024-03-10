import {
    View,
    Text,
    TouchableOpacity,
    Image,
     FlatList,
  } from "react-native";
  import React,{useEffect, useState} from 'react';
  import CachedImage from '../helper/image'
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
    <View style={{marginBottom:60 }}>
         <View style={{marginBottom:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Popular Books</Text>
              <Text style={{fontSize:12, fontWeight:'light',color:'#12121270'}}>26 Books Added</Text>
            </View>
            <TouchableOpacity>
              <Text onPress={() => navigation.replace('PopularBooks')} style={{fontSize:16, fontWeight:'bold',color:"#6684D2"}}>All</Text>
            </TouchableOpacity>         
          </View>
      
          <FlatList
          horizontal={true}
          data={list}
          keyExtractor={item=> item.name}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:30, paddingHorizontal:12,}}
          renderItem={({item, index}) => <PopularBook  index={index} item={item} navigation={navigation} />}
     />
    </View>
  )
}


const PopularBook = ({item,navigation}) => {
    return (
        <View style={{marginTop:10}}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.replace('BookDetails', {...item})} style={{display:'flex', flexDirection:'row',alignItems:'center',}}>
           <Image source={item.image} alt="" style={{resizeMode:'contain',backgroundColor:'#E0E0E0', borderRadius:20, padding:10, width: 170, height:170,paddingVertical:30}}/> 
            
            </TouchableOpacity>
            <Text  numberOfLines={2}  style={{flexShrink:1,fontSize:12,  marginTop:10,fontWeight:'bold'}}>{item.title.length>30?item.title.slice(0,30)+'...': item.title}</Text> 
            <Text style={{fontSize:12, fontWeight:'bold',  color:"#12121260"}}> 
                {
                 item.name
                }
                </Text> 
        </View>
    )
}
export default PopularSlider

