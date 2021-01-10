import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import color from '../../constants/color'
import size from '../../constants/size'
import HeaderComponent from '../../components/HeaderComponent'

const width = Dimensions.get('screen').width

const ProductDetailScreen = ({ navigation, route }) => {
  console.log("Detail Route Data", route)
  return (
    <SafeAreaView style={styles.container}>
    <HeaderComponent navigation={navigation} icon="back" title="Product Detail" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>{route.params.name}</Text>
          <View style={styles.imgContainer}>
            <View style={styles.imgFlxContainer}>
              <Image resizeMode="contain" style={styles.img} source={require('../../../assets/image.jpg')} />
            </View>
          </View>
          <Text style={styles.paragraph}>Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.</Text>
          <Text style={styles.paragraph}>Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.</Text>
          <Text style={styles.paragraph}>Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20 },
  imgContainer: { marginTop: 10, width: '100%', alignItems: 'center' },
  imgFlxContainer: { width: width - 100, height: width - 200 },
  img: { width: '100%', height: '100%' },
  title: { color: color.priceText, fontSize: size.extraLargeTextSize, fontWeight: 'bold' },
  paragraph: { fontSize: size.mediumTextSize, fontWeight: 'bold', marginTop: 15 },
})