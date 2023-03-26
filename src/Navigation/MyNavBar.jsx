import React, { Component } from 'react';
import { View , Text } from 'react-native';
import Negotiator from 'negotiator';
import RenderHtml from 'react-native-render-html';
import NavigationBar from 'react-native-navbar';

const MyNavBar = () => {
    
        return (
            <View style={styles.container}>
                <Text>
                </Text>
              {/* <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
              /> */}
            </View>
        );
  
}

const styles = {
    container: {
      flex: 1,
    },
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

export default MyNavBar;