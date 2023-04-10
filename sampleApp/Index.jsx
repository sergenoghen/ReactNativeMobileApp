
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack  from './Navigation/NavigationStack';


 const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
};

const Index = () => {
  
	//const navigation = Navigation.useNavigation();
  return (

    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}



export default Index;