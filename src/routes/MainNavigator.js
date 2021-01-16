import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'

import LoginScreen from '../screens/auth/LoginScreen'
import CategoryScreen from '../screens/product/CategoryScreen'
import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'

import OrderListScreen from '../screens/order/OrderListScreen'
import OrderDetailScreen from '../screens/order/OrderDetailScreen'

import ProfileScreen from '../screens/profile/ProfileScreen'
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen'

import CustomDrawerMenu from './CustomDrawerMenu'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CategoryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}

const OrderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="OrderList" component={OrderListScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
    </Stack.Navigator>
  )
}

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  )
}

{/* <Stack.Screen name="Login" component={LoginScreen} /> */ }

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
      drawerContent={(props) => CustomDrawerContent(props)}
      initialRouteName="Category"
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Home" component={CategoryNavigator} />
      <Drawer.Screen name="Order" component={OrderNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
    </Drawer.Navigator>
  )
}
// npm install @react-native-async-storage/async-storage
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
