import React from 'react'
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'

const ProfileScreen = ({navigation, route}) => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <HeaderComponent navigation={navigation} icon="menu" title="Profile" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => {navigation.navigate('ProfileDetail')}}>
      <Text>Profile Screen</Text>     
      </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;