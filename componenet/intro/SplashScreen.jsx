import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 4000); // Replace 'MainTabScreen' with the name of your tab bar screen
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.hero}> Shelion Libary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6684D2'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  hero: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10
  },
});

export default SplashScreen;
