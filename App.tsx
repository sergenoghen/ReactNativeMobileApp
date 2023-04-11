import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// You can import from local files
import Menu  from './sampleApp/src/templates/Menu' ;
import  Routes  from './sampleApp/src/templates/Routes';

export default function App() {
  
  return (
    <Menu routes={Routes} />
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
