
import { View, Image, Text, Button, StyleSheet } from "react-native";


const Banner = () => {
    let icon = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={styles.container} > 
            <Button 
                style={styles.button}
                title="First"
                onPress={() => alert('First Button pressed')}
            />
            <Text> </Text>
            <Button  
                style={styles.button}
                title="second" 
                onPress={() => alert('Second Button pressed')}
            />
            <Text> </Text>
            <Image source={icon} style={{width: 40, height: 40}}/>
        </View>
    );
  
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'center',
        marginTop: '10%',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        width:'100%',
    },
    row: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        marginLeft: 16,
        minWidth: '48%',
        textAlign: 'center',
        borderRadius:20,
    },
});

export default Banner;
