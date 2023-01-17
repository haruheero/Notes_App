import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../Screens/Login Screens/SignUp";
import Signin from "../Screens/Login Screens/SignIn";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
  );
}

export default MainNavigator;
