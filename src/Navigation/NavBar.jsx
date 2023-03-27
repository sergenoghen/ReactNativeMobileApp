import { View , Text, Button } from 'react-native';
import Negotiator from 'negotiator';
import RenderHtml from 'react-native-render-html';
//import NavigationBar from 'react-native-navbar';
//import isAbsolute  from 'absolute-path';

import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import Contact from '../screens/Contact';



import {NavigationContainer, useNavigation} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import * as Navigation from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';


const Stack = createNativeStackNavigator();
const NavBar = ({ navigation, route }) => {
    const someData=[];
  return (
    <View>
      <Button
          title="About"
					onPress={() => navigation.navigate('About')}
				/>
    </View>
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

 export default NavBar;