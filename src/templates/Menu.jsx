import Home from '../screens/Home';

import react, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';
import { Button, Text, TextInput, View, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  routes  from '../templates/Routes';



export default class Menu extends Component {
    
  constructor(props) {
    super(props);
    this.state = {text: '', found:[''], datat:{}};
  }



    render (){
        
        const Stack = createNativeStackNavigator();
        
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#621FF7',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle :{
                        fontWeight: 'bold',
                    },
                    }}
                >
                    {
                        routes.map((route)=>{
                            return(
                                
                                <Stack.Screen 
                                    name={route.name} 
                                    component={route.component} 
                                    options={{ title: route.options.tittle }}
                                />
                            )
                        })
                    }
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
  