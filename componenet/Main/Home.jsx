import { View, Text, Button,} from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button
          title="Left button"
          onPress={navigateToDetails} 
        />
    </View>
  )
}

export default Home