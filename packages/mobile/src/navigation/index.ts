import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "shared/src/screens/LoginScreen";
import RegisterScreen from "shared/src/screens/RegisterScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(navigator);
