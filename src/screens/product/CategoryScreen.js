import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, Dimensions} from 'react-native'
import color from '../../constants/color'
import size from '../../constants/size'

const width = Dimensions.get('screen').width
const catArr = [
  {
    image: require('../../../assets/coffee_cup.png'),
    title: 'Coffee'
  },
  {
    image: require('../../../assets/burger.png'),
    title: 'Coffee'
  },
  {
    image: require('../../../assets/fries.png'),
    title: 'Coffee'
  },
  {
    image: require('../../../assets/cake.png'),
    title: 'Coffee'
  }
]

const CategoryScreen = ({navigation, route}) => {
  console.log("Route Data", route.params)

  const {name, email} = route.params

  const catCardHandler = () => {
    navigation.navigate('ProductList')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImg}
            source={require('../../../assets/profile.png')} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileText}>{name}</Text>
            <Text style={styles.profileText}>{email}</Text>
          </View>
        </View>
        <FlatList
          numColumns={2}
          data={catArr}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {
                  catCardHandler()
              }} style={styles.card}>
                <Image style={styles.cardImg} source={item.image} />
                <Text style={styles.cardTitleText}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />


      </View>
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  profileContainer: { flexDirection: 'row', backgroundColor: color.primary, padding: 10, alignItems: 'center' },
  profileImg: { width: 60, height: 60 },
  profileInfo: { flex: 1, marginLeft: 10 },
  profileText: { color: color.white, fontSize: size.mediumTextSize, fontWeight: 'bold' },
  card: {backgroundColor: color.white, 
    width: width/2 - 20 , 
    height: width/2 - 30, 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
    shadowColor: color.black,
    shadowRadius: 10,
    elevation: 5
   },
   cardImg: {width: 45, height: 45},
   cardTitleText: {marginTop: 10, color: color.primary, fontSize: size.largeTextSize, fontWeight: 'bold'},

})