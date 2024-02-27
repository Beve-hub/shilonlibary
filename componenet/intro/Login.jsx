import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../data/Input';
import Button from '../data/Button';
import Loader from '../data/Loader';

const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } 

    if (!inputs.password) {
      handleError('Please input password', 'password');
      valid = false;
    } 

    if (valid) {
      signIn();
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      // Simulating API request delay with setTimeout
      setTimeout(async () => {
        setLoading(false);

        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          if (
            inputs.email === parsedUserData.email &&
            inputs.password === parsedUserData.password
          ) {
            await AsyncStorage.setItem(
              'user', 
              JSON.stringify({ ...parsedUserData, loggedIn: true })
            );
            ;
          } else {
            Alert.alert('Error', 'Invalid email or password');
          }
        } else {
          Alert.alert('Error', 'User not found');
        }
      }, 3000);
    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert('Error', 'Something went wrong');
      setLoading(false);
    }
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView>
      <Loader visible={loading} />
      <ScrollView 
        contentContainerStyle={{
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: '700', color: '#6684D2' }}>Sign In</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#12121275' }}>Welcome back, Please provide your details</Text>
        
        <View style={{ marginVertical: 60 }}>
          <Input
            label="Email"
            placeholder="Email" 
            error={errors.email}
            onFocus={() => handleError(null, 'email')}
            onChangeText={text => handleOnChange(text, 'email')}
          />
          <Input
            label="Password"
            placeholder="Password" 
            error={errors.password}
            onFocus={() => handleError(null, 'password')}
            onChangeText={text => handleOnChange(text, 'password')}
            password
          />
          <Text onPress={() => navigation.navigate('ForgotPassword')} style={{ textAlign: 'right', fontSize: 16, color: '#6684D2' }}>Forgotten Password?</Text>

          <Button title="Continue" onPress={validate}/>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>Don't have an account? <Text onPress={() => navigation.navigate('SignUp')} style={{ fontWeight: '700', color: '#6684D2' }}>Sign Up</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
