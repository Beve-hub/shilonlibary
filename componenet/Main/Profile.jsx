import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

const Profile = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error getting user details:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="dark" />
      <View style={{ gap: 10, marginTop: 50, marginBottom: 40, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="user-circle" size={90} color="black" />
        {userDetails ? (
          <View style={{alignItems:'center'}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userDetails.fullName}</Text>
            <Text style={{ fontSize: 16, color:'#12121250' }}>{userDetails.state}, {userDetails.country}</Text>
          </View>
        ) : (
          <Text>No user details found.</Text>
        )}
      </View>

      <View style={{ gap: 10, marginTop: 30, marginBottom: 40 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Live')} style={{ flexDirection: 'row', backgroundColor: '#D9D9D9', width: wp(89), height: hp(6),
          borderRadius: 20, justifyContent: 'space-between', alignItems: 'center',
          paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/mic.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Live Chat</Text>
          </View>

          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={{ flexDirection: 'row', backgroundColor: '#D9D9D9', width: wp(89), height: hp(6),
          borderRadius: 20, justifyContent: 'space-between', alignItems: 'center',
          paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/message.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Messages</Text>
          </View>

          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ flexDirection: 'row', backgroundColor: '#D9D9D9', width: wp(89), height: hp(6),
          borderRadius: 20, justifyContent: 'space-between', alignItems: 'center',
          paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/settings.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Settings</Text>
          </View>

          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Support')} style={{ flexDirection: 'row', backgroundColor: '#D9D9D9', width: wp(89), height: hp(6),
          borderRadius: 20, justifyContent: 'space-between', alignItems: 'center',
          paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/star.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Support</Text>
          </View>

          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flexDirection: 'row', backgroundColor: '#B40404', width: wp(89), height: hp(7),
          borderRadius: 20, justifyContent: 'center', alignItems: 'center',
          paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 14, marginLeft: 5, color: "#fff" }}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
