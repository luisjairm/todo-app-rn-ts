import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
const Sqlite = new SQLiteImpl()

export const GetTaskByIdUseCase = async (id: string) => {
  return await Sqlite.getTaskById(id)
}
