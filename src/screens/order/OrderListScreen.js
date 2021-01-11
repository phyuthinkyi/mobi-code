import React from 'react'
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'

const OrderListScreen = ({navigation, route}) => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <HeaderComponent navigation={navigation} icon="menu" title="Order List" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => {navigation.navigate("OrderDetail")}} style={{padding: 20, backgroundColor: "#ff0000"}}>
      <Text>Go To Order Detail</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OrderListScreen;