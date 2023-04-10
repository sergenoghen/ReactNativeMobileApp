import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { environment } from '../../environnement/environnement';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.

//MapLibreGL.setAccessToken(environment.maplibreApiKey );
// MapLibreGL.setConnected(true);


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

export default class MapLibreIndex extends Component {
  render() {
    console.log();
    
    return (
      <View style={styles.page}>
        <Text id='map' >
          Allo maplibre
        </Text>
        
        {/* <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false} 
        /> */}
      </View>
    );
  }
}