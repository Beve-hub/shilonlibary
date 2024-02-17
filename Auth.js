import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componenet/Main/Home';
import Profile from './componenet/Main/Profile';
import SplashScreen from './componenet/intro/SplashScreen';
import Onboarding from './componenet/intro/Onboarding';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabGroup() {
    return(
        <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}


function Auth() {
    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Auth;