import { View, Text, SafeAreaView, ScrollView, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../data/Input'
import Button from '../data/Button'
import Loader from '../data/Loader'





const SignUp = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email:'',
    fullName:'',
    password:'',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    }else if(!inputs.email.match(/\S+@\.\S+/)) {
      handleError('Please input valid email', 'email');
    }

    if (!inputs.fullName) {
      handleError('Please input fullName', 'fullName');
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
    }
    
    if (valid) {
      SignUp();
    }
  };
 
  const SignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        AsyncStorage.setItem('user', JSON.stringify(input));
        navigation.navigate('Home')
      } catch (error) {
        Alert.alert('Error', 'Something went wrong') 
      }
    }, 3000)
  }
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}))
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input] : errorMessage}))
  }

  return (
    <SafeAreaView>
      <Loader visible={loading} />
      <ScrollView 
      contentContainerStyle={{
        paddingTop: 80,
        paddingHorizontal: 20,
      }}>
        <Text style={{fontSize:35, fontWeight:700, color:'#6684D2', }}>Sign Up</Text>
         <Text style={{fontSize:14, fontWeight:400, color:'#12121275'}}>Your first time, Pls provide yoyr details</Text>
        
        
        <View style={{marginVertical:60}}>
          <Input
           label="FullName"
            placeholder="Full Name" 
            error={errors.fullName}
           onFocus={() => {
            handleError(null, 'fullName');
           }}
            onChangeText={text => handleOnChange(text,'fullName')}/>

          <Input
           label="Email "
           placeholder="Email" 
           error={errors.email}
           onFocus={() => {
            handleError(null, 'email');
           }}
          onChangeText={text => handleOnChange(text,'email')} />

          <Input 
          label="Password " 
          placeholder="password" 
          error={errors.password}
           onFocus={() => {
            handleError(null, 'password');
           }}
          password  />

          <Button title="Continue" onPress={validate}/>
          <Text style={{textAlign:'center', fontSize:16}}>Already have account ? <Text onPress={() => navigation.navigate('Login')} style={{ fontWeight:700, color:'#6684D2',}}> Sign In </Text> </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp