import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Progress from "react-native-progress";
import { DATA } from "../../constant";
import { FontAwesome } from "@expo/vector-icons";

const Books = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 50, marginLeft: 40, marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Book</Text>
        
      </View>

      <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 450,
          right: 20,
          backgroundColor: "#6684D2",
          borderRadius: 50,
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
          zIndex: 1
        }}
      >
       <FontAwesome name="edit" size={24} color="white" />
      </TouchableOpacity>
      </View>
     
      <ScrollView>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Item item={item} />}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 12,
            marginBottom: 150,
            marginTop: 10,
          }}
        />
      </ScrollView>
      
    </SafeAreaView>
  );
};

const Item = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: "#E0E0E0",
        borderRadius: 20,
        padding: 10,
        gap: 20,
      }}
    >

      
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "contain",
            width: 80,
            height: 80,
            paddingVertical: 30,
          }}
        />
        <View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#12121250" }}>
              {item.name}
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontWeight: "medium", fontSize: 10 }}>
              Page 0 of 1270
            </Text>
            <Progress.Bar progress={0} width={200} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Books;
