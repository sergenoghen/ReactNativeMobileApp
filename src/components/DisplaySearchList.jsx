
import Constants from "expo-constants";
//import { Picker } from "@react-native-picker/picker";
import  SearchList  from './SearchList';
import { Text, TextInput, View } from 'react-native';

const DisplaySearchList = () => {
 
    return (
      <View >
        <Text style={{padding: 10, fontSize: 12}}>
        {
            SearchList.map((data, key) => {
            return (
                <Text key={key}>
                {
                    key + " ) "+ data.id +
                    " =>" +
                    data.name + 
                    " \n "
                }
                </Text>
            );
            })
        }
        </Text>
      </View>
    );
  }
  
  export default DisplaySearchList;
  