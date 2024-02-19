import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {userDetails ? (
        <Text>Welcome, {userDetails.fullName}</Text>
      ) : (
        <Text>No user details found.</Text>
      )}
    </View>
  );
};

export default Profile;
