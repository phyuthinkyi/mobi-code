import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/auth/LoginScreen'
import CategoryScreen from '../screens/product/CategoryScreen'
import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'


const Stack = createStackNavigator()

const MainNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator


