import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../Screens/Login Screens/SignUp';
import Signin from '../Screens/Login Screens/SignIn';

const Stack = createNativeStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;