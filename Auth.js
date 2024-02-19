import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componenet/Main/Home';
import Profile from './componenet/Main/Profile';
import SplashScreen from './componenet/intro/SplashScreen';
import Onboarding from './componenet/intro/Onboarding';
import SignUp from './componenet/intro/SignUp';
import Login from './componenet/intro/Login';
import Books from './componenet/Main/Books';
import Search from './componenet/Main/Search';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabGroup() {
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor='#6684D2'
        inactiveColor="#CDCDCD"
        activeBackgroundColor="green"
        inactiveBackgroundColor="green"
        style={{ backgroundColor: 'green' }}
            barStyle={{ backgroundColor: '#fff' }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "blue"
        }}
       >
      <Tab.Screen  
            name="Home"
            component={Home}
            options={{ title: 'Home',
            tabBarIcon: ({focused}) => {
                return <Ionicons name="home" 
                size={22} color={focused ? '#6684D2' : "#CDCDCD"}
                 />
            }
        }} />
      <Tab.Screen
       name="Books" 
      component={Books}
       options={{ title: 'MyBooks',
            tabBarIcon: ({focused}) => {
                return <FontAwesome6 name="book" 
                size={22} color={focused ? '#6684D2' : "#CDCDCD"}
                 />
            }
        }}
       />
      <Tab.Screen
       name="Search"
       component={Search}
        options={{ title: 'search',
            tabBarIcon: ({focused}) => {
                return <Feather name="search" 
                size={22} color={focused ? '#6684D2' : "#CDCDCD"}
                 />
            }
        }}
       />
      <Tab.Screen
       name="Profile"
       component={Profile}
        options={{ title: 'Home',
            tabBarIcon: ({focused}) => {
                return <FontAwesome name="user-circle-o" 
                size={22} color={focused ? '#6684D2' : "#CDCDCD"}
                 />
            }
        }}
       />
        </Tab.Navigator>
    )
}


function Auth() {
    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        

        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Auth;