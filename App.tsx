import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// You can import from local files
import NavStack  from './NavigationStack';
//import Menu  from './sampleApp/src/templates/Menu' ;
//import MasterMenu  from './master/MasterMenu' ;
import  ArRoutes  from './';
//import  MasterRoutes  from './master/MasterRoutes';
import ArrMenu  from './arApp/src/menu/ArMenu'



// import { NavStack , MyNavBar} from './Navigation/NavigationStack';

export default function App() {
  
  return (
    <ArrMenu routes={MasterRoutes} />
  );
}


import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

/**/import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './sampleApp/src/screens/Home';
import About from './sampleApp/src/screens/About';
import Profile from './sampleApp/src/screens/Profile';
const Stack = createNativeStackNavigator();
function NavStack1() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="About" 
        component={About} 
        options={{ title: 'About' }}
      />
      <Stack.Screen 
       name="Profile" 
       component={Profile} 
       options={{ title: 'Profile Details' }}
      />
    </Stack.Navigator>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
