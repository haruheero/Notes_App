import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from "react";
import MainNavigator from "./Navigators/MainNavigator";
import theme from "./Themes/theme";
import { Platform } from "react-native";

export default function App() {
  useEffect(() => {
    if(Platform.OS === 'android') {
      NavigationBar.setPositionAsync("absolute");
      NavigationBar.setBackgroundColorAsync("#ffffff00");
    }
  },[])
  
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <MainNavigator></MainNavigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
