import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Main Screens/HomeScreen";
import LoginNavigator from "./LoginNavigator";
import { StatusBar } from "native-base";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <>
      <StatusBar hidden></StatusBar>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="LoginNavigator"
          component={LoginNavigator}
        ></Stack.Screen> */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
      </Stack.Navigator>
    </>
  );
}

export default MainNavigator;
