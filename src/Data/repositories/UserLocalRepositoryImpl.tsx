import { UserLocalRepository } from '../../Domain/repositories/UserLocalRepository'
import { saveItem, KeysLocalStorage, getItem } from '../source/local/asyncStorage/LocalStorage'

class UserLocalRepositoryImpl implements UserLocalRepository {
  async save (userName: string): Promise<boolean> {
    try {
      const res = await saveItem(KeysLocalStorage.USER, userName)
      if (!res) return false
      return true
    } catch (err) {
      return false
    }
  }

  async get (): Promise<string | null> {
    try {
      return await getItem(KeysLocalStorage.USER)
    } catch (error) {
      return null
    }
  }
}

export default UserLocalRepositoryImpl
