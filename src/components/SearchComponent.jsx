import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import  SearchList  from './SearchList';
import { Observable, ObservableInput } from 'rxjs';

export default class SearchComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text: '', found:'null'};
  }

  stateChanged(text){
    const found = SearchList.map((data, key) => {
      return data.name.includes(text)&&text.length > 0?data.name+'\n':'';
    });
    
    this.setState({text, found});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width:'100%', borderColor:'red', borderWidth:1, borderRadius:5}}
          placeholder="Type here to search in the list!"
          onChangeText={(text) => this.stateChanged(text)}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.found.length == 0 || this.state.found == 'null' ?'No results':this.state.found }
        </Text>
        
      </View>
    );
  }
} 