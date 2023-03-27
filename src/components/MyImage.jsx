import React from "react";
import { View, Image} from "react-native";

 const styles = {
  justifyContent: 'center',
  alignItems: 'center'
};

const MyImage = (url) => {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
        <Image source={url} style={{width: 193, height: 110}}/>
    );
  
}

export default MyImage;
