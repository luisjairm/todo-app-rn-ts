import UserLocalRepositoryImpl from '../../../Data/repositories/UserLocalRepositoryImpl'

const userLocal = new UserLocalRepositoryImpl()

export const GetUserLocalUseCase = async () => {
  return await userLocal.get()
}
