import React from "react";
import { View, Image} from "react-native";

 const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 100
};

const MyImage = (url) => {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
        <View style={styles}>
            <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
    );
  
}

export default MyImage;
