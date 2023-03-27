import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyImage from '../components/MyImage';
import BlinkText from '../components/BlinkText';
import AssetExample from '../components/AssetExample';
import MyTextInput from '../components/MyTextInput';
import DisplaySearchList from '../components/DisplaySearchList';

export default function Home({ navigation, route }) {
	return (
		<View style={styles.container}>
			<StatusBar style = "auto" hidden = {false} backgroundColor = "#00BCD0" translucent = {true}/>
			<Text style={styles.textTitle}>Home Screen</Text>
			<TouchableOpacity style = {{ margin: 5 }}>
				<Button
					title="Go to About"
					onPress={() => navigation.navigate('About')}
				/>
				<Text style={{margin:10}} >Content Home Screen page</Text>
				<Text style={{margin:'auto'}} >Content Home Screen page</Text>
				  
				<AssetExample />
				<MyTextInput />
				<MyImage uri={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} />
				<BlinkText />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 10,
		height: 200,
	},
	textTitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#3db83a",
	},
});
