import React from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import color from '../../constants/color'
import size from '../../constants/size'

const prodListArr = [
  {
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
},
{
  name: "Product One",
  price: 20
}
]

const ProductListScreen = ({navigation, route}) => {

  const cardHandler = () => {
    navigation.navigate("ProductDetail")
  }

  return(
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1}}>
        <FlatList 
          data={prodListArr}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity onPress={() => {
                cardHandler()
              }} style={styles.card}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
    </SafeAreaView>
  )
}

export default ProductListScreen

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10, 
    marginTop: 15,  
    padding: 10,
    justifyContent: 'center', 
    backgroundColor: color.white,
    borderRadius: 10,
    shadowColor: color.black,
    shadowRadius: 10,
    elevation: 5
   },
   cardName: {color: color.primary, fontSize: size.largeTextSize, fontWeight: 'bold'},
   cardPrice: {color: color.priceText, fontSize: size.mediumTextSize},
})