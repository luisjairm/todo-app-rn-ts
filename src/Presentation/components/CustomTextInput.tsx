import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { ThemeApp } from '../theme/AppTheme'

interface Props {
  value?: string
  label: string
  placeHolder: string
  errorText?: string
  multiline?: boolean
  onchangeText: (value: string) => void
}

const CustomTextInput = ({ label, placeHolder, errorText, value, multiline, onchangeText }: Props) => {
  return (
    <View style={{ width: '80%', marginTop: 20 }}>
      <Text style={{
        color: ThemeApp.WHITE,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
      }}
      >{label}
      </Text>
      <TextInput
        placeholder={placeHolder}
        value={value}
        placeholderTextColor={ThemeApp.LIGHT_GRAY}
        onChangeText={onchangeText}
        multiline={multiline}
        numberOfLines={multiline === true ? 5 : 1}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: ThemeApp.LIGHT_GRAY,
          color: ThemeApp.WHITE,
          fontSize: 15
        }}
      />
      {
        errorText !== undefined && errorText.length > 0 &&
          (
            <Text style={{
              color: ThemeApp.DANGER,
              fontSize: 13,
              marginVertical: 3
            }}
            >{errorText}
            </Text>
          )
      }
    </View>
  )
}

export default CustomTextInput
