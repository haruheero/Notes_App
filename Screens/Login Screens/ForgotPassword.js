import React from "react";
import { Button, View, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ForgotPassword = ({ navigation }) => {
  return (
    <View>
      <Text>ForgotPasword</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
};

export default ForgotPassword;
