import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Drawer Screens/Profile';
import Help from "../Screens/Drawer Screens/Profile";
import BottomTabNavigator from './BottomTabNavigator';
import SettingsNavigator from './SettingsNavigator';
import AccountsNavigator from './AccountsNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#EFF5FC",
        },
      }}
      useLegacyImplementation={false}
    >
      <Drawer.Screen name="Bottom" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Account" component={AccountsNavigator} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation