import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import  SearchList  from './SearchList';
//import  CustomerService  from '../services/utils.service';

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  stateChange(text){
    this.setState({text});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width:'100%', borderColor:'red', borderWidth:1, borderRadius:5}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.stateChange(text)}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        
      </View>
    );
  }
} 