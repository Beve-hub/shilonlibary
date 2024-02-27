import React, { useState } from "react";
import {  Text, View, FlatList,SafeAreaView,ScrollView,TouchableOpacity,Image } from "react-native";
import Input from "../data/Input.js";

const Search = () => {
 const [searchValue, setSearchValue] = useState("");
 const [data, setData] = useState(DATA);
 const arrayholder = DATA;

 const searchFunction = (text) => {
  const updatedData = arrayholder.filter((item) => 
  item.title.toUpperCase().includes(text.toUpperCase())
  );
  setData(updatedData);
  setSearchValue(text);
 }

  return (
    <SafeAreaView>
        
   <View style={{marginHorizontal:20}}>
   <Input
            placeholder="Search for Books , Authors"
            round
            value={searchValue}
            onChangeText={(text) => searchFunction(text)}
            autoCorrect={false}
            iconName="search"
             />

        <View style={{flexDirection:'row', alignItems:'center', gap:5, marginVertical:5}}>
          <TouchableOpacity style={{ backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10}}>
            <Text>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10}}>
            <Text>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10}}>
            <Text>Authors</Text>
          </TouchableOpacity>
          </View>     
   </View>
    <ScrollView>
    <FlatList 
    data={DATA}
    keyExtractor={(item) => item.name}
    renderItem={({item}) => <Item  item={item} />}
    contentContainerStyle={{gap:10, paddingHorizontal:12,marginBottom:150,marginTop:10}}
    />
    </ScrollView>      
</SafeAreaView>
  )
}



const Item = ({item}) => {
  return (
    <View style={{ backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10,gap:20}}>
      <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}}>
      <Image source={item.image} style={{ resizeMode: 'contain', width: 80, height: 80, paddingVertical: 30 }} />
      <View>
        <Text style={{fontWeight:'bold', fontSize:16}}>{item.title}</Text>
        <Text style={{fontSize:12,color:"#12121250"}}>{item.name}</Text>        
      </View>
      </TouchableOpacity>
    </View>
  )
}
export default Search


const DATA = [
  {
      name: 'James Clear',
      title: 'Atomic Habits',
      image: require('../../assets/rec 1.png')
  },
  {
      name: 'Cal Newport',
      title: 'Deep Work',
      image: require('../../assets/rec 2.png')
  },
  {
      name: 'Angela Morrison',
      title: 'Ling Me To Sleep',
      image:require('../../assets/rec 4.png')
  },
  {
      name: 'Selina O Grinde',
      title: 'And Man Created GOD',
      image: require('../../assets/change 5.png')
  },
  {
      name: 'Steve Harvey',
      title: 'Act Like Success',
      image: require('../../assets/rec 3.png')
  },
  {
      name: 'sheradsromance',
      title: 'BLACK ROMANCE BOOK',
      image: require('../../assets/rec 5.png')
  },
  {   
      name: 'Stephen king',
      title: 'Business Of The Century',
      image: require('../../assets/century 1.png')
  },
  {
      name: 'Martin  Gilbert',
      title: 'Winston S.churchill',
      image: require('../../assets/century 2.png')
  },
  {
      name: 'Catherine nixey',
      title: 'The Darkening Age',
      image: require('../../assets/century 3.png')
  },
  {
      name: 'John Lliffe',
      title: 'Africans',
      image:require('../../assets/century 4.png')
  },
  {
      name: 'Angela Morrison',
      title: 'Ling Me To Sleep',
      image:require('../../assets/rec 4.png')
  },
  {
      name: 'David J. Schwartz',
      title: 'Magic Of Thinking Big',
      image: require('../../assets/century 5.png')
  }

]