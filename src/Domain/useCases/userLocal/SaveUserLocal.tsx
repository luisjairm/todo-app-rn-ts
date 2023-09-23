import UserLocalRepositoryImpl from '../../../Data/repositories/UserLocalRepositoryImpl'

const userLocal = new UserLocalRepositoryImpl()

export const SaveUserLocalUseCase = async (userName: string) => {
  return await userLocal.save(userName)
}
