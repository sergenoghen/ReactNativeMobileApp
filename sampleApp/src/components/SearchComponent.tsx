import React, { Component, useState } from 'react';
import { Button, Text, TextInput, View, Modal } from 'react-native';
import  List  from './SearchList';
import  MyModal  from './MyModal';
import { Observable, ObservableInput } from 'rxjs';
import { Picker } from "@react-native-picker/picker";

export default class SearchComponent extends Component {
  
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {text: '', found:[''], datat:{}};
    //const  [data, setData] = useState('');
  }

  
  stateChanged(text: string | any[]){
    const found = 
    List.CakeType.map((val, key) => {
      if(text.length > 0 && val.name.startsWith(text+'')){
        return key//{name:val.name, value:val};
      }
    });
    
    this.setState({text, found});
  }

  
  parentToChild = (data: any) => {
    return data;
  }



  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, width: '100%', borderColor: 'grey', borderWidth: 1, borderRadius: 5 }}
          placeholder="Type here to search in the list!"
          onChangeText={(text) => this.stateChanged(text)}
          value={this.state.text} />
          
        <View style={{ padding: 10, fontSize: 20 }}>
          
          {this.state.found.length == 0 ? 'No results' : this.state.found.filter((x: null) => {return x !=null}).map((index: string) => {
            if(parseInt(index) >= 0){
              return (
                 <MyModal data={this.parentToChild(index)}/> 
                );
            }else
            {
              return (
                <Text> No results found </Text>
              );
            }
          })}
        </View>


      </View>
    );
  }
} 

