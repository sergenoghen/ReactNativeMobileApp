import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import { LocationService } from './services/location.service'

export default function GeoIndex() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let latLng = {};
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    //console.log(location.coords.latitude + ','+location.coords.longitude);
    latLng = {'lat': location.coords.latitude , 'lng':location.coords.longitude};
    text = JSON.stringify(location);
    localService = new LocationService(latLng);
    localService.init();
  }

  return (
    <View style={styles.page}>
      <Text style={styles.map}>{text}</Text>
      <Text style={styles.map}>{ JSON.stringify(latLng) }</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});