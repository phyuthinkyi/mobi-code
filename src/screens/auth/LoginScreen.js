import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import color from '../../constants/color'
import size from '../../constants/size'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation, route }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const loginHandler = () => {
    if (name != ''  || email != '' || pass != '') {
      let user = {
        userName: name,
        userEmail: email,
        userPass: pass
      }
      AsyncStorage.setItem('user', JSON.stringify(user))
      .then(res => {
        navigation.navigate('Drawer')
      })
      .catch((e) => console.log(e))
    }
    setName('')
    setEmail('')
    setPass('')
  }

  const forgotHandler = () => {
    // write something what you do
    console.log("You Click Forgot Button")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.loginLogoText}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPass(text)}
          value={pass}
        />

        <TouchableOpacity
          onPress={() => { loginHandler() }}
          style={styles.btnContainer}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {forgotHandler()}}
          style={styles.forgotBtnContainer}>
          <Text style={styles.forgotBtnText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: color.screenBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  loginContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLogoText: {
    color: color.primary,
    fontSize: size.extraLargeTextSize,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: size.inputHeight,
    backgroundColor: color.white,
    paddingLeft: 15,
    marginTop: 15,
    borderRadius: 20,
  },

  btnContainer: {
    width: '100%',
    height: size.btnHeight,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20
  },

  forgotBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  loginBtnText: {
    color: color.white,
    fontSize: size.largeTextSize,
    fontWeight: 'bold'
  },

  forgotBtnText: {
    color: color.primary,
    fontSize: size.largeTextSize,
    fontWeight: 'bold'
  }

})