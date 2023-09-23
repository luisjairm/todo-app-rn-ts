import AsyncStorage from '@react-native-async-storage/async-storage'

export enum KeysLocalStorage {
  USER = 'user'
}

export const saveItem = async (key: KeysLocalStorage, value: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (error) {
    console.log('ERROR save LOCAL STORAGE::', error)
    return false
  }
}

export const getItem = async (key: KeysLocalStorage): Promise<string | null> => {
  try {
    const res = await AsyncStorage.getItem(key)
    return res
  } catch (error) {
    console.log('ERROR get LOCAL STORAGE::', error)
    return null
  }
}

export const removeItem = async (key: KeysLocalStorage): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    console.log('ERROR remove LOCAL STORAGE::', error)
    return false
  }
}
