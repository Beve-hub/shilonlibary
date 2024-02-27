import { View, Text,SafeAreaView,ScrollView,TouchableOpacity, 
    Image, 
    FlatList  } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView>
        
    <View
      style={{
        flexDirection: "row",
        alignItems:'center',
        marginTop: 40,
        padding:10,
        gap:20
      }}
    >
        <TouchableOpacity onPress={() => navigation.navigate('TabGroup')} style={{ fontWeight: "bold", fontSize: 20, backgroundColor:'#E0E0E0', padding:5, borderRadius:30 }}>
        <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
            </TouchableOpacity>
        
       
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Notification</Text>
    
    </View>
    <ScrollView>
      <View>
        <Text>Notification</Text>
      </View>
    </ScrollView>      
</SafeAreaView>
  )
}

export default Notification