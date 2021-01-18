import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
const Tab = createBottomTabNavigator()

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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let img;
          switch(route.name){
            case "Home" : 
            img = <Image style={{width: 25, height: 25, tintColor: focused ? '#0E5D96' : '#e5e5e5'}} source={require('../../assets/home.png')} />
            break

            case "Order" :
            img = <Image style={{width: 25, height: 25, tintColor: focused ? '#0E5D96' : '#e5e5e5'}} source={require('../../assets/heart.png')} />
            break

            case "Profile" :
            img = <Image style={{width: 25, height: 25, tintColor: focused ? '#0E5D96' : '#e5e5e5'}} source={require('../../assets/user.png')} />
            break
          }
          return img
        }
      })}
      tabBarOptions={{
        activeTintColor: '#0E5D96',
        inactiveTintColor: 'gray'
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={CategoryNavigator} />
      <Tab.Screen name="Order" component={OrderNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
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
