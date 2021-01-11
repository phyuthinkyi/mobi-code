import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'

const OrderDetailScreen = ({navigation, route}) => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <HeaderComponent navigation={navigation} icon="back" title="OrderDetail" />
      <View style={{flex: 1}}>
        <Text>Order Detail Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default OrderDetailScreen;