
import React from "react";
import { View, Text , Button, Image, Modal, StyleSheet, MenuBar} from "react-native";
import MyImage from './components/MyImage';
import BlinkText from './components/BlinkText';
import AssetExample from './components/AssetExample';
import MyTextInput from './components/MyTextInput';
import DisplaySearchList from './components/DisplaySearchList';
import MyNavBar from './Navigation/MyNavBar';

import { NavigationContainer, useNavigation } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 const styles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
};

const Index = () => {
  
	const navigation = useNavigation();
  return (
    <View style={styles}>
      
      <Text>
        Hello, world!
      </Text>
      <DisplaySearchList />
      <MyNavBar />
      <AssetExample />
      <MyTextInput />
      <MyImage />
      <BlinkText />
      <Button
				title="Go to Details screen"
				onPress={() => navigation.navigate("Details")}
			/>
    </View>
  );
}

export default Index;