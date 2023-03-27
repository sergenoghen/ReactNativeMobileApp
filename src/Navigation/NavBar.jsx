import { View , Text, Button } from 'react-native';
import Negotiator from 'negotiator';
import RenderHtml from 'react-native-render-html';
//import NavigationBar from 'react-native-navbar';
//import isAbsolute  from 'absolute-path';



import {NavigationContainer, useNavigation} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import * as Navigation from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';


const Stack = createNativeStackNavigator();
const NavBar = ({ navigation, route }) => {
    const someData=[];
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="search"
        onPress={() => navigation.navigate('SearchComponent')}
      />
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
  
}





  const styles = {
    container: {
      flexDirection: 'row',
      wrap: 'nowrap',
    },
    button:{

    }
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