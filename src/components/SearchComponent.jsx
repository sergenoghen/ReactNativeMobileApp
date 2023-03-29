import React, { Component } from 'react';
import { Button, Text, TextInput, View, Modal } from 'react-native';
import  List  from './SearchList';
import { Observable, ObservableInput } from 'rxjs';
import { Picker } from "@react-native-picker/picker";

export default class SearchComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text: '', found:['']};
  }

  stateChanged(text){
    const found = 
    List.CakeType.map((data, key) => {
      if(text.length > 0 && data.name.startsWith(text)){
        return data.name;
      }
    });
    
    this.setState({text, found});
  }


  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width:'100%', borderColor:'grey', borderWidth:1, borderRadius:5}}
          placeholder="Type here to search in the list!"
          onChangeText={(text) => this.stateChanged(text)}
          value={this.state.text}
        />
        <View style={{padding: 10, fontSize: 20}}>
          {
            this.state.found.length == 0  ?'No results':this.state.found.map((e) => {
              if(e) 
              return (
                <Button style={{backgroundColor:'yellow', marginTop:30 }}
                  title={e} onPress={()=>{
                    alert(e)
                  }}
                />
              )
            })
          }
        </View>
        
      </View>
    );
  }
} 