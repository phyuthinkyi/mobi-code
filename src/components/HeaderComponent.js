import React from "react";
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import color from '../constants/color'
import size from "../constants/size";

const HeaderComponent = ({ navigation, icon, title }) => {
  return (
    <View style={styles.headerContainer}>
      { icon == "menu" ?
        <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
          <Image style={styles.menuImg} source={require('../../assets/menu.png')} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Image style={styles.menuImg} source={require('../../assets/back_arrow.png')} />
        </TouchableOpacity>
      }
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: color.white,
    flexDirection: 'row',
    marginTop: Platform.OS == 'ios' ? 0 : 24,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  menuImg: {
    width: 25,
    height: 25,
    tintColor: color.primary
  },
  title: {
    marginLeft: 10,
    color: color.primary,
    fontSize: size.largeTextSize
  }
})