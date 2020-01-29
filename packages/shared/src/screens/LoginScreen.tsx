import React from "react";
import { View } from "react-native";
import { Button, Text, Input, Icon, Image } from "react-native-elements";

const LoginScreen = () => {
  return (
    <View>
      <Text h3>Welcome Back</Text>
      <Image source={require("../assets/images/profileImage.jpg")} style={{ width: 50 }} />
      <View>
        <Text h3>Become a Member</Text>
        <Input placeholder="Email" />
        <Input
          placeholder="Password"
          rightIcon={<Icon name="eye-off" type="feather" size={24} color="black" />}
        />
      </View>
      <Text>Forgot Password?</Text>
      <Button title="Login" />
    </View>
  );
};

export default LoginScreen;
