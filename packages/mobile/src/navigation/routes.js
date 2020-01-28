import { createStackNavigator } from "react-navigation";
import LoginScreen from "shared/src/screens/LoginScreen";
import RegisterScreen from "shared/src/screens/RegisterScreen";

export const navigator = createStackNavigator(
	{
		Login: LoginScreen,
		Register: RegisterScreen
	},
	{
		initialRouteName: "Login"
	}
);
