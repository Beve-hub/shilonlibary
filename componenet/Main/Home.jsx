import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "./ImageSlider";
import BooksSlider from "./PopularSlider";
import Recomended from './Recomended';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
     
        <StatusBar style="dark" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            paddingVertical:10
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Discoveries</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical:10
        }} >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#6684D2",
            width: wp(89),
            height: hp(10),
            marginTop: 10,
            borderRadius: 20,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Book for the Week
            </Text>
            <Text style={{ color: "#fff", fontSize: 12 }}>2Days 4hrs</Text>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#121212",
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
              gap: 5,
            }}
          >
            <Image
              source={require("../../assets/voice-line.png")}
              alt=""
              style={{ width: 16, height: 16 }}
            />
            <Text style={{ color: "#fff", fontSize: 12 }}>Listen Now</Text>
          </TouchableOpacity>
        </View>

        {/*image slider */}
        <View style={{backgroundColor:'#E0E0E0', width:wp(89), padding:10, borderRadius:10, marginTop:20,marginBottom:20 }}>
          <View style={{marginBottom:10,}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>New Arrivals</Text>
          <Text style={{fontSize:12, fontWeight:'light',color:'#12121270'}}>26 Books Added</Text>
          </View>
          <ImageSlider navigation={navigation}/>
        </View>

        {/*book slider */}
        <View style={{ marginTop:20,marginBottom:20, }}>       
          <BooksSlider navigation={navigation}/>
        </View>

        {/*book slider */}
        <View style={{ marginTop:20, marginBottom:30, }}>       
          <Recomended navigation={navigation}/>
        </View>
    

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
