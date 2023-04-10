import { StyleSheet, Text, View, Button  } from "react-native";

export default function Profile({navigation, route}) {
	return (
		<View style={styles.container}>
			<Text>Profile Page...</Text>
			<Button
				title="Back to Home"
				onPress={() =>  navigation.navigate('Home') }
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
