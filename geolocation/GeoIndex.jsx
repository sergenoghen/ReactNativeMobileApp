//import MapLibreGL from "@maplibre/maplibre-react-native";
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { environment } from '../../src/environnement/environnement';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
//MapLibreGL.setAccessToken(environment.maplibreApiKey );
//MapLibreGL.setConnected(true);

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

export default class GeoIndex extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text id='map' >
          Allo GeoIndex
        </Text>
      </View>
    );
  }
}