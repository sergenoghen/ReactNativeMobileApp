import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Modal, ImageBackground, Image, ScrollView } from 'react-native';
// You can import from local files
import Index from './src';

export default function App() {
  
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.container]} >
        <Text>First modification in this app</Text>
        <Text>Second modification in this app</Text>
        
        <Index />  
        <StatusBar style = "auto" hidden = {false} backgroundColor = "#00BCD0" translucent = {true}/>
      </View>
    </ScrollView>
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
