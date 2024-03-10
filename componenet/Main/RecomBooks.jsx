import { View, Text,SafeAreaView,ScrollView,TouchableOpacity, 
    Image, 
    FlatList  } from 'react-native'
    import React,{useEffect, useState} from 'react';
    import MasonryList from '@react-native-seoul/masonry-list';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";

const RecomBooks = ({ navigation }) => {
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
    <SafeAreaView>
        
        <View
          style={{
            flexDirection: "row",
            alignItems:'center',
            marginTop: 40,
            padding:10,
            gap:20
          }}
        >
            <TouchableOpacity onPress={() => navigation.navigate('TabGroup')} style={{ fontWeight: "bold", fontSize: 20, backgroundColor:'#E0E0E0', padding:5, borderRadius:30 }}>
            <Text    > <AntDesign name="arrowleft" size={24} color="black" /></Text>
                </TouchableOpacity>
            
           
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Recomended Books</Text>
        
        </View>
        <ScrollView>
        <MasonryList
             data={list}
             keyExtractor={item => item.name}
             numColumns={2}
             showsVerticalScrollIndicator={false}
             renderItem={({ item, index }) => <PopularBook item={item} navigation={navigation} />}
             contentContainerStyle={{  marginBottom: 100, }}
                columnWrapperStyle={{
                    justifyContent:'space-around', paddingLeft:10,paddingRight:10
                }}
             //refreshing={isLoadingNext}
            //onRefresh={() => refetch({first: ITEM_CNT})}
             onEndReachedThreshold={0.1}
             //onEndReached={() => loadNext(ITEM_CNT)}
           />
        </ScrollView>      
    </SafeAreaView>
  )
}

const PopularBook = ({ item, navigation }) => {
    return (
        <View style={{ marginVertical: 10, marginHorizontal:40}}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.replace('BookDetails', {...item})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image} style={{ resizeMode: 'contain', backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10, width: 120, height: 120, paddingVertical: 30 }} />
            </TouchableOpacity>
            <Text numberOfLines={2} style={{ flexShrink:5,fontSize: 12, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: "#12121260" }}>
                {
                 item.name.length>10? item.name.slice(0,20)+'...': item.name
                }
            </Text>
        </View>
    );
}
export default RecomBooks