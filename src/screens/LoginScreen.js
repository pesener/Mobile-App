import { View, Text } from "react-native";
import React from "react";
import userAuth from "../context/userAuth";

const LoginScreen = () => {
  const { user } = userAuth();
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
