import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Settings from '../Screens/Drawer Screens/Settings'
import ProfileDisplay from '../Screens/Setting Screens/ProfileDisplay'
import EmailSetting from '../Screens/Setting Screens/EmailSetting'
import PhoneNumber from '../Screens/Setting Screens/PhoneNumber'
import PasswordReset from '../Screens/Setting Screens/PasswordReset'
import Notifications from '../Screens/Setting Screens/Notifications'

function SettingsNavigator() {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsPage" component={Settings} />
      <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />
      <Stack.Screen name="EmailSetting" component={EmailSetting} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator