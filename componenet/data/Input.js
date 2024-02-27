import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password);
  return(
     <View style={{marginBottom:20}}>
        <Text style={{marginVertical:5, fontSize:14, color:'#12121290', fontWeight:700, marginVertical:10}}>{label}</Text>
        <View style={[styles.InputContainer,{borderColor: error ? '#B40404': isFocused ? '#6684D2' : '#ffff'}]}>
            
            <TextInput 
            secureTextEntry={password}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}

           
            onBlur={() => {
                setIsFocused(false);
            }}
            {...props}
            />
            <Icon name={iconName} style={{fontSize:20,color:'#12121220', marginLeft:90 }}/>
        </View>
        {error && (
            <Text style={{color:'#B40404' }}>{error}</Text>
        )}

     </View>
     );
};


const styles = StyleSheet.create({
    InputContainer: {
        flexDirection:'row',
         paddingHorizontal:15,
         alignItems:'center',
        height:40,
         backgroundColor: '#12121210',
          borderRadius:10,
    },
   
  });
  
export default Input;
