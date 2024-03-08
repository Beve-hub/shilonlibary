import React, { useState,useEffect } from "react";
import { Text, View, FlatList, SafeAreaView, ScrollView,
   TouchableOpacity, Image } from "react-native";
import Input from "../data/Input.js";
import axios from "axios";


const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);  
  const [activeCategory, setActiveCategory] = useState("All");

  

  useEffect(() => {
    const API_KEY = 'AIzaSyCQuaWYBXVyBT7ujf6vva21bdLim_pqn-M';
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${API_KEY}`
  
    const fetchedData = async () => {
    try {
      const resp = await axios.get(url)
      const data = resp.data.items.map(item => ({
        name: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown",
        title: item.volumeInfo.title,
        image: item.volumeInfo.imageLinks ? { uri: item.volumeInfo.imageLinks.thumbnail } : require("../../assets/adaptive-icon.png")
      }));     
      if ( resp.data.length ===  0) {      
        
         console.log("No data found")
       
      } else {
        setList(data)
        filterData(data, activeCategory);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchedData(); 
  },[activeCategory])


  const searchFunction = async (text) => {
    setSearchValue(text);
    try {
      await fetchedData();
      } catch (error) {
      console.log("Error fetching data:", error);
    }
    filterData(list, activeCategory);
  };

  const filterData = (text, category) => {
    let updatedData = text;
    if (category !== "All") {
      updatedData = text.filter((item) => {
        if (category === "Books") {
          return item.title.toLowerCase().includes(searchValue.toLowerCase()); // Use searchValue here
        } else if (category === "Authors") {
          return item.name.toLowerCase().includes(searchValue.toLowerCase()); // Use searchValue here
        }
        return true;
      });
    }
    setList(updatedData);
  };
  

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterData(list, category);
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor:'#FFFFFF' }}>
        <View style={{ marginHorizontal: 20 }}>
          <Input
            placeholder="Search for Books, Authors"
            round
            value={searchValue}
            onChangeText={(text) => searchFunction(text)}
            autoCorrect={false}
            iconName="search"
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 5 }}>
            <TouchableOpacity
              style={{ backgroundColor: activeCategory === 'All' ? "#6684D2" : '#FFFFFF', borderRadius: 20, padding: 10 }}
              onPress={() => handleCategoryChange("All")}
            >
              <Text>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: activeCategory === 'Books' ? "#6684D2" : '#FFFFFF', borderRadius: 20, padding: 10 }}
              onPress={() => handleCategoryChange("Books")}
            >
              <Text>Books</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: activeCategory === 'Authors' ? "#6684D2" : '#FFFFFF', borderRadius: 20, padding: 10 }}
              onPress={() => handleCategoryChange("Authors")}
            >
              <Text>Authors</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
        <ScrollView>
          {console.log('welcome inside the flatlist ; ',list)}
          <FlatList
            data={list}
            renderItem={({ item }) => <Item item={item} key={item.id} />}
            keyExtractor={(item) => item.id}            
            contentContainerStyle={{ gap: 10, paddingHorizontal: 12, marginBottom: 150, marginTop: 10 }}            
          />
        
        </ScrollView>
      
    </SafeAreaView>
  );
};

const Item = ({ item }) => {
  return (
    <View style={{ backgroundColor: '#E0E0E0', borderRadius: 20, padding: 10, gap: 20 }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.image} style={{ resizeMode: 'contain', width: 80, height: 80, paddingVertical: 30 }} />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
          <Text style={{ fontSize: 12, color: "#12121250" }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
