import { useState } from 'react'
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal'
import { GetUserLocalUseCase } from '../../../../Domain/useCases/userLocal/GetUserLocal'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigationStackParamList } from '../../../navigations/MainNavigationStack'

interface Props extends NativeStackScreenProps<MainNavigationStackParamList> {

}

const loginScreenViewModel = ({ navigation }: Props) => {
  const [userName, setUserName] = useState('')
  const [errorMsj, seterrorMsj] = useState('')
  const [toastMSJ, setToastMSJ] = useState('')

  const updateUserName = (value: string) => {
    setUserName(value)
  }

  const handleSubmit = async () => {
    setToastMSJ('')
    seterrorMsj('')
    if (userName.length < 3) {
      seterrorMsj('El nombre debe ser mas largo')
      return
    }

    const res = await SaveUserLocalUseCase(userName)
    if (!res) {
      setToastMSJ('Algo salio mal')
    }
    navigation.navigate('HomeScreen')
    setToastMSJ('Nombre Guardado')
  }

  const validateUser = async () => {
    const res = await GetUserLocalUseCase()
    if (res === null) return

    navigation.navigate('HomeScreen')
  }

  return {
    userName,
    updateUserName,
    handleSubmit,
    errorMsj,
    toastMSJ,
    validateUser
  }
}

export default loginScreenViewModel
