import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CategoryScreen from '../screens/product/CategoryScreen'
import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'


const Stack = createStackNavigator()
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

export default CategoryNavigator
