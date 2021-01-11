import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../screens/auth/LoginScreen'
import CategoryScreen from '../screens/product/CategoryScreen'
import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'

import OrderListScreen from '../screens/order/OrderListScreen'
import OrderDetailScreen from '../screens/order/OrderDetailScreen'

import ProfileScreen from '../screens/profile/ProfileScreen'
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CategoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={{
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
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  )
}

  {/* <Stack.Screen name="Login" component={LoginScreen} /> */ }

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false
      }}>
       <Drawer.Screen name="Order" component={OrderNavigator} />
        <Drawer.Screen name="Category" component={CategoryNavigator} />
        <Drawer.Screen name="Profile" component={ProfileNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator


