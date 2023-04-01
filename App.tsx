import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// You can import from local files
import Index from './src';
import Banner from './src/components/Banner';
import NavStack  from './src/Navigation/NavigationStack';
import Menu  from './src/templates/Menu' 



// import { NavStack , MyNavBar} from './src/Navigation/NavigationStack';

export default function App() {
  
  return (

    <Menu />
     //     <Index /> 

    // <ScrollView contentInsetAdjustmentBehavior="automatic">
    //   <View style={[styles.container]} >
        
    //     <Banner /> 
    //     <Index />   
    //     <StatusBar style = "auto" hidden = {false} backgroundColor = "#00BCD0" translucent = {true}/>
    //   </View>
    // </ScrollView>
  );
}


import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

/**/import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Profile from './src/screens/Profile';
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
