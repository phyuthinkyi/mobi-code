import React from 'react'
import {Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import CategoryNavigator from './CategoryNavigator'

import OrderListScreen from '../screens/order/OrderListScreen'
import OrderDetailScreen from '../screens/order/OrderDetailScreen'

import ProfileScreen from '../screens/profile/ProfileScreen'
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let img;
          switch(route.name){
            case "Home" : 
            img = focused ? <Image style={{width: 25, height: 25}} source={require('../../assets/primary_home.png')} /> 
            : <Image style={{width: 25, height: 25}} source={require('../../assets/red_home.png')} />
            break

            case "Order" :
            img = <Image style={{width: 25, height: 25, tintColor: focused ? '#0E5D96' : '#e5e5e5'}} 
            source={require('../../assets/heart.png')} />
            break

            case "Profile" :
            img = <Image style={{width: 25, height: 25, tintColor: focused ? '#0E5D96' : '#e5e5e5'}} 
            source={require('../../assets/user.png')} />
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

export default TabNavigator