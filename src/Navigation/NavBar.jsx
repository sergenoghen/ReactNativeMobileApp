
import Negotiator from 'negotiator';
import RenderHtml from 'react-native-render-html';
import NavigationBar from 'react-native-navbar';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image, Button } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
//import { Icon } from 'native-base';
//import isAbsolute  from 'absolute-path';



import {NavigationContainer, useNavigation} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import * as Navigation from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';
import  routes  from '../templates/Routes';


const Stack = createNativeStackNavigator();
const NavBar = ({ navigation, route }) => {
    const someData=[];
  return (
    <View style={styles.container}>
      {
        routes.map((route)=>{
          //console.log(routes[0])
          return(
            <View style={styles.button}>
              <Button
                title={route.options.title}
                onPress={() => navigation.navigate(route.name)}
              />
            </View>
          )
        })
      }
    </View>
  );
  
}





  const styles = {
    container: {
      flexDirection:'row',
      flexWrap: "wrap",
      height: 'auto',
      position:'relative',
      left:1,
      margin:'auto',
      float:'right',
    },
    button:{
      width: 100,
      margin: 2,
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