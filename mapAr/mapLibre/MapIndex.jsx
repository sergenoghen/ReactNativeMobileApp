import MapLibreGL from "@maplibre/maplibre-react-native";
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

MapLibreGL.setConnected(true);
MapLibreGL.setAccessToken(null);

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

export default class MapIndex extends Component {
  render() {
    return (
      <View style={styles.page}>
        <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false} 
          styleURL="https://demotiles.maplibre.org/style.json"
        />
      </View>
    );
  }
}