import { View, Text, Button,} from 'react-native'
import React from 'react'


const SplashScreen = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View>
      <Text>SplashScreen</Text>
      <Button
          title="Left button"
          onPress={navigateToDetails} 
        />
    </View>
  )
}

export default SplashScreen