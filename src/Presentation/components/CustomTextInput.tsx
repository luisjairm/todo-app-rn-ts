import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemeApp } from '../theme/AppTheme'

interface CustomTextInputProps {
  value?: string
  label: string
  placeHolder: string
  errorText?: string
  multiline?: boolean
  onchangeText: (value: string) => void
}

const CustomTextInput = ({ label, placeHolder, errorText, value, multiline, onchangeText }: CustomTextInputProps) => {
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

interface InputDateTimeProps {
  value?: string
  label: string
  placeHolder?: string
  errorText?: string
  showDateTime: () => void
}
export const InputDateTime = ({ label, placeHolder, errorText, value, showDateTime }: InputDateTimeProps) => {
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

      <TouchableOpacity
        onPress={showDateTime}
      >
        <TextInput
          editable={false}
          placeholder={placeHolder}
          value={value}
          placeholderTextColor={ThemeApp.LIGHT_GRAY}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: ThemeApp.LIGHT_GRAY,
            color: ThemeApp.WHITE,
            fontSize: 15
          }}
        />
      </TouchableOpacity>
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
