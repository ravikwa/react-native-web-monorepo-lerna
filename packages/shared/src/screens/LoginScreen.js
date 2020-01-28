import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text>LoginScreen</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;
