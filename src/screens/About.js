import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ navigation, route }) {
	return (
		<View style={styles.container}>
			<Text>About Us Page...</Text>
			<Button
				title="Go to Profile"
				onPress={() => navigation.navigate('Profile')}
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
