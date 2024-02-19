import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Onboarding = ({ navigation }) => {
  return (
    <View  style={styles.container}>
       <StatusBar style="dark" />
       <Image source={require('../../assets/land4.png')} style={styles.image} />
       <Text style={styles.hero}>Welcome</Text>
       <Text style={styles.herosub}> Read, Listen and Create Note.</Text>

       <View style={{position:'absolute', bottom:70}}>
       <TouchableOpacity onPress={() => navigation.replace('SignUp')}  style={styles.signup}>
          <Text style={{fontSize:16,   color: 'white', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Login')}  style={styles.signin}>
          <Text style={{fontSize:16,   color:'#6684D2', display:'flex', justifyContent: 'center',alignItems: 'center',}}>Sign In</Text>
      </TouchableOpacity>
       </View>
    </View>
  )
}

export default Onboarding


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  hero: {
    fontSize: 28,
        fontWeight: 'bold',
    paddingTop: 20
  },
  herosub: {
    fontSize: 15,
    color:'#12121290'
  },
  signup: {
    width: wp(80),
    height: hp(5),
    elevation: 10, 
    marginTop:10, 
    flexDirection: 'row',
     backgroundColor:'#6684D2', 
    paddingVertical: 9, 
     display:'flex', 
    justifyContent:'center', 
    borderRadius:10  
  },
  signin: {
    width: wp(80),
     marginTop:10, 
    flexDirection: 'row',
   borderColor:'#6684D2', 
   borderWidth:1,
   paddingVertical: 9,
    display:'flex',
   justifyContent:'center', 
  borderRadius:10  
}

});