import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SwitchRouter } from 'react-navigation';
import  routes  from '../../../../';


const Stack = createNativeStackNavigator();
const NavBar = ({ navigation, route }) => {
    const someData=[];
  return (
    <View style={styles.container}>
      {
        routes.map((route)=>{
          return(
            <View style={styles.button}>
              <Button
                title={route.options.title}
                onPress={() => navigation.navigate(route.name)}
              />
            </View>
          )
        })
      }
    </View>
  );
  
}

  const styles = {
    container: {
      flexDirection:'row',
      flexWrap: "wrap",
      height: 'auto',
      position:'relative',
      left:1,
      margin:'auto',
      float:'right',
    },
    button:{
      width: 100,
      margin: 2,
    }
  };

 export default NavBar;