import { View , Text } from 'react-native';
import Negotiator from 'negotiator';
import RenderHtml from 'react-native-render-html';
//import NavigationBar from 'react-native-navbar';
//import isAbsolute  from 'absolute-path';
      

import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import Contact from '../screens/Contact';
import NavBar from './NavBar';



import {NavigationContainer, useNavigation} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import * as Navigation from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';


const Stack = createNativeStackNavigator();



function NavigationStack() {
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
       options={{ title: 'Profile Detail' }}
      />
      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{ title: 'Details' }}
      />
      <Stack.Screen 
        name="Contact" 
        component={Contact} 
        options={{ title: 'Contact' }}
      />
      <Stack.Screen 
        name="NavBar" 
        component={NavBar} 
        options={{ title: 'NavBar' }}
      />
    </Stack.Navigator>
  );
}
  





  const styles = {
    container: {
    },
  };
   
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
   
  const titleConfig = {
    title: 'Hello, world',
  };
   
  function ComponentWithNavigationBar() {
    return (
      <View style={styles.container}>
        
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
      </View>
    );
  }
 export default NavigationStack;