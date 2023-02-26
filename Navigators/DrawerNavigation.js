import React from 'react'
import { Button, View } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../Screens/Drawer Screens/Settings';
import Profile from '../Screens/Drawer Screens/Profile';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown:false,
        drawerStyle: {
          backgroundColor: "#EFF5FC",
        },
      }}
      useLegacyImplementation={false}
    >
      <Drawer.Screen name="Bottom" component={BottomTabNavigator}/>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation