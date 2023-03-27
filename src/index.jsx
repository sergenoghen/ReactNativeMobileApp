
import { View, Text , Button, Image, Modal, StyleSheet, MenuBar} from "react-native";
import MyImage from './components/MyImage';
import BlinkText from './components/BlinkText';
import AssetExample from './components/AssetExample';
import MyTextInput from './components/SearchComponent';
import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';
import NavBar  from './Navigation/NavBar';

import { NavigationContainer } from '@react-navigation/native';
import NavigationStack  from './Navigation/NavigationStack';


 const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
};

const Index = () => {
  
	//const navigation = Navigation.useNavigation();
  return (

    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}



export default Index;