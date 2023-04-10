
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack  from '../NavigationStack';


 const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
};

const MapIndex =  ({routes})=> {
    

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

export default MapIndex;
