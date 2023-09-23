import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import { useEffect } from 'react'
import GlobalStyles from '../../../theme/GlobalStyles'
import { ThemeApp } from '../../../theme/AppTheme'
import CustomTextInput from '../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigationStackParamList } from '../../../navigations/MainNavigationStack'

interface Props extends NativeStackScreenProps<MainNavigationStackParamList> {

}

const LoginScreen = ({ navigation, route }: Props) => {
  const {
    userName,
    updateUserName,
    handleSubmit,
    errorMsj,
    toastMSJ,
    validateUser
  } = useViewModel({ navigation, route })

  useEffect(() => {
    if (toastMSJ.length > 0) {
      ToastAndroid.showWithGravity(toastMSJ, ToastAndroid.LONG, ToastAndroid.TOP)
    }
  }, [toastMSJ])

  useEffect(() => {
    void validateUser()
  }, [])

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
      <CustomTextInput
        label='Nombre'
        value={userName}
        placeHolder='Escriba un nombre de usuario'
        onchangeText={(text) => updateUserName(text)}
        errorText={errorMsj}
      />

      <TouchableOpacity
        style={[
          GlobalStyles.shadow,
          {
            width: '60%',
            backgroundColor: ThemeApp.DARK_BLUE,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 7
          }]}
        onPress={handleSubmit}
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
