import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'

import LoginScreen from '../screens/auth/LoginScreen'
import CustomDrawerMenu from './CustomDrawerMenu'
import TabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerMenu navigation={props.navigation} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => CustomDrawerContent(props)}
    >
      <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
