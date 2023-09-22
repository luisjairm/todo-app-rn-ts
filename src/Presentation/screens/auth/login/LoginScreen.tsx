import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles, { generateShadow } from '../../../theme/GlobalStyles'
import { ThemeApp } from '../../../theme/AppTheme'

const LoginScreen = () => {
  return (
    <View style={
      [
        GlobalStyles.containerScreen,
        {
          justifyContent: 'center',
          alignItems: 'center'
        }
      ]
}
    >
      <View style={{ width: '80%' }}>
        <Text style={{
          color: ThemeApp.WHITE,
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 5
        }}
        >Nombre
        </Text>
        <TextInput
          placeholder='Escriba un nombre de usuario'
          placeholderTextColor={ThemeApp.LIGHT_GRAY}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: ThemeApp.LIGHT_GRAY,
            color: ThemeApp.WHITE,
            fontSize: 15
          }}
        />
      </View>

      <TouchableOpacity style={[
        generateShadow({}),
        {
          width: '60%',
          backgroundColor: ThemeApp.DARK_BLUE,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 7
        }]}
      >
        <Text style={{
          color: ThemeApp.WHITE,
          fontSize: 16,
          fontWeight: 'bold'
        }}
        >Guardar Nombre
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
