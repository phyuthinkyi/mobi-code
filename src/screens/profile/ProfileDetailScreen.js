import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent'

export default function ProfileDetail({navigation, route}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <HeaderComponent navigation={navigation} icon="back" title="ProfileDetail"  />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile detail</Text>
      </View>
    </SafeAreaView>
  );
}
