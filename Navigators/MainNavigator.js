import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../Screens/Login Screens/SignUp";
import Signin from "../Screens/Login Screens/SignIn";
import HomeScreen from "../Screens/Main Screens/HomeScreen";
import LoginNavigator from "./LoginNavigator";
import { StatusBar } from "native-base";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <>
      <StatusBar hidden></StatusBar>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="LoginNavigator"
          component={LoginNavigator}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
}

export default MainNavigator;
