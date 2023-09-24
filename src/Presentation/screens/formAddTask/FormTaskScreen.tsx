import { View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../theme/GlobalStyles'
import CustomTextInput from '../../components/CustomTextInput'

const FormTaskScreen = () => {
  return (
    <View style={[
      GlobalStyles.containerScreen,
      {
        alignItems: 'center'
      }
    ]}
    >
      <CustomTextInput
        label='Titulo'
        placeHolder='Titulo de la tarea'
        errorText=''
        onchangeText={(text) => console.log(text)}
      />
      <CustomTextInput
        label='Descripción'
        placeHolder='Descripción extra para su tarea'
        errorText=''
        multiline
        onchangeText={(text) => console.log(text)}
      />
    </View>
  )
}

export default FormTaskScreen
