import React from "react";
import { View } from "react-native";
import { Text, Button, CheckBox, Input, Icon } from "react-native-elements";

const RegisterScreen = () => {
  return (
    <View>
      <Text h3>Welcome to Stockedge Club</Text>
      <Text h4>Connect. Learn. Analyse. Grow</Text>
      <View>
        <Text h3>Become a Member</Text>
        <Input placeholder="Email" />
        <Input
          placeholder="Password"
          rightIcon={<Icon name="eye-off" type="feather" size={24} color="black" />}
        />
        <Input
          placeholder="Confirm Password"
          rightIcon={<Icon name="eye-off" type="feather" size={24} color="black" />}
        />
        <CheckBox title="I agree to the terms and conditions" checked={false} />
      </View>
      <Button title="Get Started" />
    </View>
  );
};

export default RegisterScreen;
