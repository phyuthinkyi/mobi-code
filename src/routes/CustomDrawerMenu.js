import React from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import color from '../constants/color'
import size from '../constants/size'

const CustomDrawerMenu = ({navigation}) => {
  return(
    <View style={styles.drawerContainer}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Home') }}
          style={styles.menuContainer}>
          <Image style={styles.img}
            source={require('../../assets/icons8-home-48.png')} />
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>
        {/* <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{ width: '90%' , height: 1, backgroundColor: color.primary }} />
        </View> */}

        <TouchableOpacity
          onPress={() => { navigation.navigate('Order') }}
          style={styles.menuContainer}>
          <Image style={styles.img} source={require('../../assets/icons8-purchase-order-52.png')} />
          <Text style={styles.title}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { navigation.navigate('Profile') }}
          style={styles.menuContainer}>
          <Image style={styles.img} source={require('../../assets/icons8-male-user-48.png')} />
          <Text style={styles.title}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log("YOU CLICK LOGOUT")
          }}
          style={styles.menuContainer}>
          <Image style={styles.img} source={require('../../assets/icons8-male-user-48.png')} />
          <Text style={styles.title}>Logout</Text>
        </TouchableOpacity>

      </View>
  )
}

export default CustomDrawerMenu

const styles = StyleSheet.create({
drawerContainer: { flex: 1, paddingVertical: 10 },
menuContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
img: { width: 25, height: 25, tintColor: color.primary },
title: { marginLeft: 15, color: color.primary, fontSize: size.largeTextSize }
})